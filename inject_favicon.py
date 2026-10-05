import os
import re

favicon_tag = '<link rel="icon" type="image/webp" href="assets/img/logo.webp">'

def add_favicon_to_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove existing favicon if it exists
    # It might look like <link rel="icon" ...> or <link rel="shortcut icon" ...>
    content = re.sub(r'<link[^>]*rel=["\'](?:shortcut )?icon["\'][^>]*>\s*', '', content, flags=re.IGNORECASE)

    # Inject the new favicon tag before </head>
    if '</head>' in content:
        content = content.replace('</head>', f'    {favicon_tag}\n</head>')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Added favicon to {file_path}")

for file_name in os.listdir('.'):
    if file_name.endswith('.html'):
        add_favicon_to_html(file_name)
