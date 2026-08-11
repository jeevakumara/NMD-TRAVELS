import re

with open('D:\\NMD_TRAVELS\\assets\\css\\style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. brand-since
css = re.sub(r'(\.brand-since\s*\{[^}]*?color:\s*)var\(--gold\)(;)', r'\1#A07218\2', css)

# 2. section-label
css = re.sub(r'(\.section-label\s*\{[^}]*?color:\s*)#6f7787(;)', r'\1#4a5263\2', css)
css = re.sub(r'(\.section-label-gold\s*\{[^}]*?color:\s*)#d8b15c(;)', r'\1#A07218\2', css)

# 3. section-lead
css = re.sub(r'(\.section-lead\s*\{[^}]*?color:\s*)#6a7486(;)', r'\1#4a5263\2', css)

# 4. jd-badge
css = re.sub(r'(\.jd-badge\s*\{[^}]*?color:\s*)#FF7A00(;)', r'\1#10224d\2', css)

# 5. review-action-btn.justdial-btn
# Let's just append it if not found, or replace if exists. We will append a general fix at the end.

# 6. floating-label label
css = re.sub(r'(\.floating-label label\s*\{[^}]*?color:\s*)#7a8499(;)', r'\1#3a4153\2', css)

# 7. footer-contact-label
css = re.sub(r'(\.footer-contact-label\s*\{[^}]*?color:\s*)#9aa3b2(;)', r'\1#343C4F\2', css)

# 8. footer-copy
css = re.sub(r'(\.footer-copy\s*\{[^}]*?color:\s*)#777(;)', r'\1#4a5263\2', css)

# 9. footer-tagline
css = re.sub(r'(\.footer-tagline\s*\{[^}]*?color:\s*)#9aa3b2(;)', r'\1#4a5263\2', css)

# Add explicit rules at the end to be absolutely sure we catch everything requested
append_css = """

/* --- ACCESSIBILITY CONTRAST FIXES --- */
.brand-since { color: #A07218 !important; }
.section-label { color: #4a5263 !important; }
.section-label-gold { color: #A07218 !important; }
.section-lead { color: #4a5263 !important; }
.jd-badge, .review-action-btn.justdial-btn { color: #10224d !important; }
.floating-label label { color: #3a4153 !important; }
.footer-contact-label { color: #343C4F !important; }
.footer-copy, .footer-tagline { color: #4a5263 !important; }
.footer-bottom a { color: #343C4F !important; }
.footer-bottom a:hover { color: #0b2f5d !important; }
"""

css += append_css

with open('D:\\NMD_TRAVELS\\assets\\css\\style.css', 'w', encoding='utf-8') as f:
    f.write(css)
