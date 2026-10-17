__sd("data/apps/w/wordcraft.json",{
  "id": "wordcraft",
  "name": "WordCraft",
  "tagline": "A fast, open-source word processor, rebuilt in pure Rust",
  "blurb": "The ribbon, styles, tables, track changes, references and mail merge in a native word processor that reads and writes .docx.",
  "description": "WordCraft is a native word processor engineered for speed and formatting fidelity.\n\nCreate documents, reports and manuscripts with paragraph styles, footnotes, table of contents, spell checking, and bidirectional DOCX compatibility.",
  "developer": "ArtCraft / Storytold",
  "icon": "https://getartcraft.com/images/apps/wordcraft/icon.webp",
  "screenshots": [
    {
      "full": "https://getartcraft.com/images/apps/wordcraft/og.jpg",
      "thumb": "https://getartcraft.com/images/apps/wordcraft/og.jpg"
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
    "word processor",
    "docx",
    "documents",
    "writer",
    "office",
    "rust"
  ],
  "license": "MIT",
  "platforms": [
    "linux",
    "windows",
    "macos",
    "web"
  ],
  "repo": "https://github.com/storytold/wordcraft",
  "homepage": "https://getartcraft.com/apps/wordcraft",
  "stars": 1700,
  "version": "0.3.2",
  "updated": "2026-10-15",
  "replaces": [
    "Microsoft Word",
    "Google Docs",
    "Apple Pages"
  ],
  "install": [
    {
      "platform": "source",
      "distro": "source",
      "manager": "source",
      "label": "Cargo / Build from source",
      "url": "https://github.com/storytold/wordcraft",
      "command": "git clone https://github.com/storytold/wordcraft.git && cd wordcraft && cargo run --release",
      "note": "Fast native word processor for .docx files."
    }
  ],
  "sources": [
    "curated",
    "artcraft"
  ],
  "featured": true
});