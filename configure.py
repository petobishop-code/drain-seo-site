from pathlib import Path
from xml.sax.saxutils import escape
import re
SITE_URL = "https://example.com"  # CHANGE to your real HTTPS domain
if SITE_URL == "https://example.com":
    raise SystemExit("Edit SITE_URL before running this script")
SITE_URL = SITE_URL.rstrip('/')
root=Path(__file__).resolve().parent
pages=sorted(root.rglob('index.html'))
urls=[]
for file in pages:
    rel=file.parent.relative_to(root).as_posix()
    url=SITE_URL+'/' + (rel+'/' if rel!='.' else '')
    txt=file.read_text(encoding='utf-8')
    txt=txt.replace('<!-- Set SITE_URL in configure.py then run it to add canonical URLs -->',f'<link rel="canonical" href="{url}">')
    file.write_text(txt,encoding='utf-8')
    urls.append(url)
xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join('  <url><loc>'+escape(u)+'</loc></url>\n' for u in urls)+'</urlset>\n'
(root/'sitemap.xml').write_text(xml,encoding='utf-8')
(root/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+SITE_URL+'/sitemap.xml\n',encoding='utf-8')
(root/'naver-submit-urls.txt').write_text('\n'.join(urls[1:]),encoding='utf-8')
print('Configured',len(urls),'pages and sitemap:',SITE_URL)
