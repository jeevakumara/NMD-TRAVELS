import re

# Update HTML
with open('D:\\NMD_TRAVELS\\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace reviewer names <h4> -> <h3>
html = re.sub(r'<h4>(Jeevakumar A|Kishore|dharshan|R\. Jega|Navin Krish|str arun|Vamsee|SRINIVASAN S|Ramkrishna L)</h4>', r'<h3>\1</h3>', html)

# Replace footer headings <h4 class="footer-col-heading"> -> <h2 class="footer-col-heading">
html = re.sub(r'<h4 class="footer-col-heading"(.*?)>(.*?)</h4>', r'<h2 class="footer-col-heading"\1>\2</h2>', html)

with open('D:\\NMD_TRAVELS\\index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Update CSS
with open('D:\\NMD_TRAVELS\\assets\\css\\style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('.author-info h4', '.author-info h3')
css = css.replace('.footer-contact-col h4', '.footer-contact-col .footer-col-heading')

with open('D:\\NMD_TRAVELS\\assets\\css\\style.css', 'w', encoding='utf-8') as f:
    f.write(css)
