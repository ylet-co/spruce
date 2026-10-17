__sd("data/apps/g/gridcraft.json",{
  "id": "gridcraft",
  "name": "GridCraft",
  "tagline": "Fast, native spreadsheets, rebuilt in pure Rust",
  "blurb": "Ribbon tabs, formula bar, 500+ calculation functions, dynamic arrays, PivotTables and charts.",
  "description": "GridCraft handles millions of rows without stuttering or slowing down.\n\nFeatures multithreaded calculation engine, modern formulas (XLOOKUP, FILTER, UNIQUE), pivot tables, charts, conditional formatting, and full XLSX file format compatibility.",
  "developer": "ArtCraft / Storytold",
  "icon": "https://getartcraft.com/images/apps/gridcraft/icon.webp",
  "screenshots": [
    {
      "full": "https://getartcraft.com/images/apps/gridcraft/hero.webp",
      "thumb": "https://getartcraft.com/images/apps/gridcraft/hero.webp"
    }
  ],
  "categories": [
    "Office & Documents"
  ],
  "tags": [
    "craft",
    "storytold",
    "artcraft suite",
    "craft suite",
    "artcraft",
    "spreadsheets",
    "excel",
    "xlsx",
    "formulas",
    "data",
    "rust"
  ],
  "license": "MIT",
  "platforms": [
    "linux",
    "windows",
    "macos",
    "web"
  ],
  "repo": "https://github.com/storytold/gridcraft",
  "homepage": "https://getartcraft.com/apps/gridcraft",
  "stars": 2900,
  "version": "0.4.0",
  "updated": "2026-10-15",
  "replaces": [
    "Microsoft Excel",
    "Google Sheets",
    "Apple Numbers"
  ],
  "install": [
    {
      "platform": "source",
      "distro": "source",
      "manager": "source",
      "label": "Cargo / Build from source",
      "url": "https://github.com/storytold/gridcraft",
      "command": "git clone https://github.com/storytold/gridcraft.git && cd gridcraft && cargo run --release",
      "note": "Blazing fast native spreadsheets in Rust."
    }
  ],
  "sources": [
    "curated",
    "artcraft"
  ],
  "featured": true
});