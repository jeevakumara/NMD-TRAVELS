import re
import os

# --- 1. Minify CSS ---
css_path = 'D:\\NMD_TRAVELS\\assets\\css\\style.css'
min_css_path = 'D:\\NMD_TRAVELS\\assets\\css\\style.min.css'

with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Minify logic
css = re.sub(r'/\*.*?\*/', '', css, flags=re.DOTALL)
css = re.sub(r'\s+', ' ', css)
css = re.sub(r'\s*([\{\}\:\;\,\>])\s*', r'\1', css)
css = re.sub(r';\}', '}', css)

with open(min_css_path, 'w', encoding='utf-8') as f:
    f.write(css)

# --- 2. Update HTML ---
html_path = 'D:\\NMD_TRAVELS\\index.html'

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace CSS link
html = html.replace('href="assets/css/style.css"', 'href="assets/css/style.min.css"')

# Update header logo to 112x112
html = re.sub(r'(<img[^>]*src="assets/img/logo-header.webp"[^>]*?)width="68"\s+height="68"', r'\1width="112" height="112"', html)

# Add explicit width/height to Justdial badge
html = re.sub(
    r'(<img[^>]*src="assets/img/JUSTDIAL_NMDTRAVELS\.webp"[^>]*?)class="justdial-trust-img"',
    r'\1width="600" height="414" class="justdial-trust-img"',
    html
)

# Add explicit width/height to Fleet images (approx 4:3 aspect ratio based on 1200x899)
fleet_imgs = ['SEDAN', 'SUV', 'tempo', 'minibus', 'luxury_car']
for img in fleet_imgs:
    html = re.sub(
        rf'(<img[^>]*src="assets/img/{img}\.webp"[^>]*?)loading="lazy"',
        r'\1width="600" height="450" loading="lazy"',
        html
    )

# Add explicit width/height to footer logo
html = re.sub(
    r'(<img[^>]*src="assets/img/logo\.webp"[^>]*?)alt="NMD Travels logo"',
    r'\1width="48" height="48" alt="NMD Travels logo"',
    html
)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
