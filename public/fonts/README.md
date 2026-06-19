# Self-hosted fonts

Active font files (referenced by `app/globals.css`):

- `HelveticaNeueCondensedBold.woff2` — primary
- `HelveticaNeueCondensedBold.woff` — fallback

These were extracted from a licensed `HelveticaNeue.ttc` collection (face:
"Helvetica Neue Condensed Bold", weight 700, condensed width).

## Note on weights

The source `.ttc` only contains a **condensed Bold** weight (plus condensed
Black). There is no condensed Medium. So the single `@font-face` covers the
`500 900` range and both body text (700) and buttons (500) render in
Condensed Bold.

## Re-generating from a .ttc

```bash
python3 -m pip install --user fonttools brotli
python3 - <<'EOF'
from fontTools.ttLib import TTCollection, TTFont
c = TTCollection("HelveticaNeue.ttc")
face = c.fonts[4]  # Helvetica Neue Condensed Bold
face.save("HelveticaNeueCondensedBold.ttf")
for flavor, ext in (("woff2","woff2"),("woff","woff")):
    f = TTFont("HelveticaNeueCondensedBold.ttf"); f.flavor = flavor
    f.save(f"HelveticaNeueCondensedBold.{ext}")
EOF
```

Do **not** commit the raw `.ttc`/`.otf` source files — only the `.woff2`/`.woff`.
