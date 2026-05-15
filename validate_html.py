import glob, html5lib, sys
errors = False
for path in sorted(glob.glob("*.html")):
    html = open(path, encoding="utf-8").read()
    try:
        html5lib.HTMLParser(strict=True).parse(html)
        print(f"OK: {path}")
    except Exception as e:
        print(f"ERROR: {path}: {e}")
        errors = True
if errors:
    sys.exit(1)
