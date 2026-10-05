import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the faq-accordion block
    accordion_pattern = re.compile(r'<div class="faq-accordion">.*?</section>', re.DOTALL)
    
    def replace_item(match):
        item_html = match.group(0)
        
        # Extract question
        q_match = re.search(r'<span class="faq-question">\s*(.*?)\s*</span>', item_html, re.DOTALL)
        if not q_match:
            # Maybe question is directly in button
            q_match = re.search(r'<button class="faq-accordion-header".*?>(.*?)</button>', item_html, re.DOTALL)
            question = q_match.group(1).replace('<span class="faq-icon">+</span>', '').strip() if q_match else "Question?"
        else:
            question = q_match.group(1).strip()
            
        # Extract answer
        # It could be in faq-accordion-inner p, or directly in faq-accordion-content
        inner_p_match = re.search(r'<div class="faq-accordion-inner">\s*<p>\s*(.*?)\s*</p>\s*</div>', item_html, re.DOTALL)
        if inner_p_match:
            answer = inner_p_match.group(1).strip()
        else:
            ans_match = re.search(r'<div class="faq-accordion-content">\s*(.*?)\s*</div>', item_html, re.DOTALL)
            answer = ans_match.group(1).strip() if ans_match else "Answer."
            # Remove any inner html tags just in case, or leave it
            # if it was already wrapped in faq-accordion-inner, the regex above handles it
            
        # Reconstruct the item
        new_item = f'''<div class="faq-accordion-item">
    <button class="faq-accordion-header">
        {question} <span class="faq-icon">+</span>
    </button>
    <!-- Inline styles applied here as a fallback to prevent open-on-load bugs -->
    <div class="faq-accordion-content" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;">
        <div class="faq-accordion-inner" style="padding: 15px 20px;">
            <p>{answer}</p>
        </div>
    </div>
</div>'''
        return new_item

    # Replace each faq-accordion-item inside the content
    new_content = re.sub(r'<div class="faq-accordion-item">.*?</div>\s*</div>\s*</div>', replace_item, content, flags=re.DOTALL)
    
    # A more robust regex to find each item
    # We can split by <div class="faq-accordion-item">
    
    parts = content.split('<div class="faq-accordion-item">')
    if len(parts) > 1:
        new_content = parts[0]
        for part in parts[1:]:
            # Find the end of this item (which is the last </div> before the next item or end)
            # Actually, regex is easier for the whole block:
            pass

    # Let's just use re.sub for the whole item. An item starts with <div class="faq-accordion-item">
    # and ends with the </div> that closes it. 
    # Since regex for nested divs is hard, I will use a simple split/parse.
    
    def parse_items(html_str):
        import bs4
        soup = bs4.BeautifulSoup(html_str, 'html.parser')
        items = soup.find_all('div', class_='faq-accordion-item')
        for item in items:
            q_elem = item.find(class_='faq-question')
            question = q_elem.text.strip() if q_elem else "Question"
            
            # Answer
            a_elem = item.find(class_='faq-accordion-content')
            inner_elem = item.find(class_='faq-accordion-inner')
            if inner_elem and inner_elem.find('p'):
                answer = inner_elem.find('p').decode_contents().strip()
            elif inner_elem:
                answer = inner_elem.decode_contents().strip()
            elif a_elem:
                answer = a_elem.decode_contents().strip()
            else:
                answer = "Answer"
                
            new_html = f'''
<div class="faq-accordion-item">
    <button class="faq-accordion-header">
        {question} <span class="faq-icon">+</span>
    </button>
    <!-- Inline styles applied here as a fallback to prevent open-on-load bugs -->
    <div class="faq-accordion-content" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;">
        <div class="faq-accordion-inner" style="padding: 15px 20px;">
            <p>{answer}</p>
        </div>
    </div>
</div>'''
            new_node = bs4.BeautifulSoup(new_html, 'html.parser').div
            item.replace_with(new_node)
            
        return str(soup)

    try:
        new_content = parse_items(content)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    except ImportError:
        print("BeautifulSoup not found. Please install it.")

process_file('tempo-traveller.html')
process_file('vehicles.html')
