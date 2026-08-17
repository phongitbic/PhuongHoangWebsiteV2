#!/usr/bin/env python3
"""
fix_emdash.py — Context-aware em-dash normalization (P2.2).

Rules (approved scope):
  1. <title> / og:title / twitter:title  → " — " becomes " | " (SEO title separator)
  2. CJK text (ZH): "——" and " — "  → "："
  3. VI/EN text:      " — "          → ": "

Never touches technical data (specs, SKUs, model codes) — those use
hyphens, not em-dashes. Meaning-preserving in all three languages.
Run: python _audit/fix_emdash.py
"""
import io
import re
import sys

FILES = [
    '404.html', 'about-us.html', 'certificates.html', 'contact.html',
    'distribution-system.html', 'exchange-policy.html',
    'leakage-detector.html', 'news-detail.html', 'news.html',
    'payment-policy.html', 'index.html', 'privacy-policy.html',
    'product-detail.html', 'products.html', 'projects.html',
    'purchase-policy.html', 'sales-policy.html', 'shipping-policy.html',
    'surge-protection.html', 'warranty-policy.html',
    'assets/js/news-data.json', 'assets/js/i18n-v2.js', 'assets/js/faq.js',
]

CJK = re.compile(r'[㐀-䶿一-鿿]')

TITLE_RE = re.compile(
    r'(<title>[^<]*</title>|'
    r'<meta\s+property="og:title"\s+content="[^"]*"|'
    r'<meta\s+name="twitter:title"\s+content="[^"]*")')


def has_cjk(window):
    return bool(CJK.search(window))


def fix_titles(text):
    def sub(m):
        return m.group(0).replace('—', '|')
    return TITLE_RE.sub(sub, text)


def fix_body(text):
    """Language-aware em-dash normalization outside title tags.
    Latin: 'X — Y' -> 'X: Y' (drop space before dash, keep after).
    CJK:   'X——Y' / 'X — Y' -> 'X：Y' (no spaces around colon)."""
    out = []
    pos = 0
    for m in re.finditer(r'—+', text):
        cjk = has_cjk(text[max(0, m.start() - 80):m.end() + 80])
        repl = '：' if cjk else ':'
        start = m.start()
        if start > 0 and text[start - 1] in (' ', '\t'):
            start -= 1  # drop space before
        out.append(text[pos:start])
        out.append(repl)
        end = m.end()
        if cjk and end < len(text) and text[end] == ' ':
            end += 1  # drop space after CJK colon
        pos = end
    out.append(text[pos:])
    return ''.join(out)


def fix_i18n_titles_var(text):
    """The `titles = { ... }` object holds document titles -> ' | '."""
    out = []
    pos = 0
    for m in re.finditer(r'titles\s*=\s*\{', text):
        start = m.start()
        # find matching closing brace (object contains no nested braces)
        end = text.find('}', m.end())
        out.append(text[pos:start])
        block = text[start:end + 1]
        out.append(block.replace('—', '|'))
        pos = end + 1
    out.append(text[pos:])
    return ''.join(out)


def main():
    total = 0
    for f in FILES:
        try:
            with io.open(f, encoding='utf-8') as fh:
                src = fh.read()
        except OSError as exc:
            print(f'  skip {f}: {exc}')
            continue
        before = src.count('—')
        if before == 0:
            continue
        if f.endswith('.html'):
            src = fix_titles(src)
            src = fix_body(src)
        elif f.endswith('i18n-v2.js'):
            src = fix_i18n_titles_var(src)
            src = fix_body(src)
        else:
            src = fix_body(src)
        after = src.count('—')
        with io.open(f, 'w', encoding='utf-8') as fh:
            fh.write(src)
        print(f'{f}: {before} -> {after} em-dashes')
        total += before
    print(f'TOTAL em-dashes processed: {total}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
