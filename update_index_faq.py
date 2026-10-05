import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace the content inside <div class="faq-accordion-content">...</div>
# with <div class="faq-accordion-content">\n<div class="faq-accordion-inner">\n...\n</div>\n</div>

def replacer(match):
    inner_text = match.group(1)
    return f'<div class="faq-accordion-content">\n                            <div class="faq-accordion-inner">{inner_text}</div>\n                        </div>'

new_content = re.sub(r'<div class="faq-accordion-content">\s*(.*?)\s*</div>', replacer, content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated index.html")
