import re

with open("vehicles.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Driver Batta to Driver Batta / Day
html = re.sub(
    r'(<span[^>]*>)\s*Driver Batta\s*(</span>)',
    r'\1Driver Batta / Day\2',
    html,
    flags=re.IGNORECASE
)

# 2. Extract and modify pricing grid
html = html.replace(
    'style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; margin-bottom: 1rem; display: grid; grid-template-columns: repeat(3, 1fr); text-align: center; gap: 4px;"',
    'class="pricing-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); text-align: center; gap: 4px;"'
)

# 3. Alternate CTA buttons
def replace_buttons(html):
    cards = re.split(r'(<div class="vehicle-card">)', html)
    
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

# 4. Update the CSS in the embedded style tag
css_to_replace = """        .vehicle-card {
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 40, 93, 0.05);
            border: 1px solid rgba(0, 40, 93, 0.08);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        
        .vehicle-card:hover {
            transform: translateY(-5px);
        }"""

new_css = """        .vehicle-card {
            background: #ffffff;
            border-radius: 12px;
            border: 1px solid #f0f0f0;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        
        .vehicle-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
        }

        .pricing-grid {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
            border: 1px solid #eef0f2;
        }"""

html = html.replace(css_to_replace, new_css)

media_query_replace = """            /* Vehicle Cards - Single Column Stack */
            .vehicles-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }"""

new_media_query = """            /* Vehicle Cards - Single Column Stack */
            .vehicles-grid {
                grid-template-columns: 1fr;
                gap: 24px;
                padding: 0 15px;
            }
            .vehicle-card img {
                height: auto;
                object-fit: cover;
            }"""

html = html.replace(media_query_replace, new_media_query)

with open("vehicles.html", "w", encoding="utf-8") as f:
    f.write(html)
