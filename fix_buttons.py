import re

with open("vehicles.html", "r", encoding="utf-8") as f:
    html = f.read()

def replace_buttons(html):
    # Split using regex to capture the delimiter since we want to rebuild it
    cards = re.split(r'(<div class="vehicle-card"[^>]*>)', html)
    
    new_html = cards[0]
    card_index = 0
    
    for i in range(1, len(cards), 2):
        delimiter = cards[i]
        card_content = cards[i+1]
        
        if card_index % 2 == 0:
            btn_html = '<a class="btn-primary js-book-now" href="#">BOOK NOW &rarr;</a>'
        else:
            btn_html = '<a class="btn-navy js-book-now" href="/contact-us">Enquire Now &rarr;</a>'
            
        card_content = re.sub(
            r'<a class="btn-(primary|navy)[^"]*" href="[^"]+">.*?</a>',
            btn_html,
            card_content,
            flags=re.IGNORECASE
        )
        
        new_html += delimiter + card_content
        card_index += 1
        
    return new_html

html = replace_buttons(html)

with open("vehicles.html", "w", encoding="utf-8") as f:
    f.write(html)
