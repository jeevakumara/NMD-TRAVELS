import os
import re
import glob

pattern = re.compile(r'((?:assets|\.\.)/(?:img|images)(?:/[a-zA-Z0-9_-]+)*)\.(png|jpg|jpeg)([\"\'\)])', re.IGNORECASE)
files = []
for ext in ['html', 'css', 'js']:
    files.extend(glob.glob(f'**/*.{ext}', recursive=True))

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            
        new_content = pattern.sub(r'\1.webp\3', content)
        
        if content != new_content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f'Updated {f}')
    except Exception as e:
        print(f"Error reading {f}: {e}")
