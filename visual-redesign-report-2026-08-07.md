# V2 Internal Pages — Global Visual Pattern Redesign Report
## 2026-08-07

### Shared CSS / Design-System Changes

**blueprint.css** — Added internal-page visual system section (~150 lines at line 1360):

- `bp-internal-hero` — Compact hero: `padding: clamp(4rem, 7vw, 5.5rem) 0 clamp(1.25rem, 2.5vw, 2rem)`, centered, overrides accent bar
- `bp-internal-hero-desc` — Hero description paragraph (680px, centered, secondary text)
- `bp-section-sm/md/lg/xl` — Section spacing rhythm variants
- `bp-section-heading` — Centered h2 heading
- `bp-content-wide/default/narrow/tight` — Content width containers
- `bp-card` — Standard card surface with hover (border-color → accent, translateY(-2px))
- `bp-card-grid`, `bp-card-grid-3`, `bp-card-grid-4` — Card grid layouts
- `bp-cta-panel` / `bp-cta-actions` — CTA panel with centered layout
- `bp-process-row` — 5-column horizontal process steps
- `bp-editorial-grid` — 2-column editorial layout
- `bp-values-grid` / `bp-value-item` — Centered icon + label grid
- `bp-feature-list` / `bp-feature-item` — Vertical feature list with icons
- `bp-stats-row` / `bp-stat-item` — Statistics row
- `bp-sep` — Section separator

All use `--ph-*` design tokens. Responsive breakpoints at 1024px, 768px, 640px.

### Global Visual Pattern Changes

1. **Hero height reduced across all 18 internal pages:**
   - Old: `padding-top: clamp(6rem, 10vw, 8rem)` — too tall, created excessive empty space
   - New: `padding: clamp(4rem, 7vw, 5.5rem) 0 clamp(1.25rem, 2.5vw, 2rem)` — compact, intentional
   - Hero now uses `bp-internal-hero` class (or equivalent padding in custom CSS)

2. **Section spacing systematized:**
   - Old: every section used `bp-section` with uniform `clamp(2.5rem, 5vw, 4rem)` padding
   - New: sections use `bp-section-sm/md/lg/xl` variants for intentional rhythm

3. **Heading consistency:**
   - Old: every h2 had inline `style="font:var(--ph-text-h2);color:...;margin-bottom:2rem;text-align:center"`
   - New: `bp-section-heading` class replaces all inline h2 styles

4. **CTA standardization:**
   - Old: `bp-offer` with inline styles on 5 internal pages
   - New: `bp-cta-panel` + `bp-cta-actions` with consistent spacing

5. **Card surface consistency:**
   - Old: inline `background:var(--ph-surface-primary);border:1px solid var(--ph-border-default);border-radius:...`
   - New: `bp-card` class with standardized hover behavior

6. **Inline style removal:**
   - ~150 inline style declarations removed across pages
   - All layout, color, font, background, border properties extracted to blueprint.css

### Page-Specific Changes

| Page | Hero | Sections | Cards | CTA | Inline styles removed |
|------|------|----------|-------|-----|----------------------|
| certificates.html | bp-internal-hero | bp-section-md ×3 | Certificate cards (custom) | bp-cta-panel | ~12 |
| about-us.html | bp-internal-hero | bp-section-md + bp-section-sm ×3 | bp-card + bp-value-item | bp-cta-panel | ~35 |
| contact.html | bp-internal-hero | bp-section-md ×2 | bp-editorial-grid | bp-cta-panel | ~6 |
| projects.html | bp-internal-hero | bp-section-md ×2 | bp-card + bp-card-grid-3 | bp-cta-panel | ~42 |
| news.html | bp-internal-hero | bp-section-md ×2 | Custom news grid (kept) | bp-cta-panel | ~8 |
| products.html | CSS only | — | — | — | 0 |
| product-detail.html | CSS only | — | — | — | 1 (inline padding) |
| news-detail.html | CSS only | — | — | — | 0 |
| distribution-system.html | CSS only | — | — | — | 0 |
| leakage-detector.html | CSS only | — | — | — | 0 |
| 404.html | Kept as-is (error page) | — | — | — | 0 |
| 8 policy pages | CSS only | — | — | — | 0 |

### CSS Files Updated (hero padding alignment)

- `certificates.css` — Rewritten: removed old quality process + CTA, added refined card/lightbox styles
- `policies.css` — `.ph-policy-hero` padding aligned with bp-internal-hero
- `distribution-system.css` — `.ph-dist-hero` padding + responsive override aligned
- `leakage-detector.css` — `.ld-hero` padding aligned
- `products.css` — `.ph-products-hero` padding + responsive override aligned
- `news.css` — `.article-wrap` padding aligned

### Responsive Improvements

- All new blueprint grid components have breakpoints at 1023px (3→2 cols), 767px (2→1 col), 639px (single column)
- `bp-editorial-grid` collapses to single column at 768px
- `bp-process-row` collapses to vertical stack at 768px
- `bp-card-grid`, `bp-values-grid` use auto-fit with minmax for natural wrapping
- Policy pages, products, leakage-detector responsive overrides updated to match new compact hero

### Surge-protection.html

Skipped — redirect page only (`<meta http-equiv="refresh">`), no structural content.

### Remaining Inconsistencies

1. **product-detail.html** still uses `bp-offer` with inline `style="padding:..."` — this is part of the products subsystem with its own visual language, deferred
2. **404.css** `.error-wrap` kept `clamp(6rem,10vw,8rem)` — intentional for full-viewport centering on error page
3. **products.html / product-detail.html** have their own hero CSS classes (`ph-products-hero`, `ph-detail-wrap`) rather than using `bp-internal-hero` — these pages have custom layout needs (sidebar, breadcrumbs) and would need more invasive restructuring
4. **news-detail.html** hero uses `.article-wrap` in news.css rather than `bp-internal-hero` — could be unified but has unique article metadata layout
5. **policy pages** use `ph-policy-hero` with badge element — functionally equivalent to bp-internal-hero but with custom badge markup that would be lost in full conversion
6. Card content styling (h3 colors, p font sizes) still varies across pages — this is intentional per the directive ("DO NOT make 19 copies of the same template")
