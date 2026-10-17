__sd("data/apps/d/deckcraft.json",{
  "id": "deckcraft",
  "name": "DeckCraft",
  "tagline": "Fast, dynamic slide presentations, in pure Rust",
  "blurb": "Slide masters, themes, 150+ vector shapes, transitions, animations and presenter view in a native app.",
  "description": "DeckCraft gives you complete control over your presentation slides with modern typography, smooth slide transitions, speaker notes, and multi-display presenter mode. Reads and writes PowerPoint PPTX presentations.",
  "developer": "ArtCraft / Storytold",
  "icon": "https://getartcraft.com/images/apps/deckcraft/icon.webp",
  "screenshots": [
    {
      "full": "https://getartcraft.com/images/apps/deckcraft/og.jpg",
      "thumb": "https://getartcraft.com/images/apps/deckcraft/og.jpg"
    }
  ],
  "categories": [
    "Office & Documents",
    "Productivity"
  ],
  "tags": [
    "craft",
    "storytold",
    "artcraft suite",
    "craft suite",
    "artcraft",
    "presentations",
    "slides",
    "keynote",
    "powerpoint",
    "pptx",
    "rust"
  ],
  "license": "MIT",
  "platforms": [
    "linux",
    "windows",
    "macos",
    "web"
  ],
  "repo": "https://github.com/storytold/deckcraft",
  "homepage": "https://getartcraft.com/apps/deckcraft",
  "stars": 1300,
  "version": "0.2.0",
  "updated": "2026-10-15",
  "replaces": [
    "Microsoft PowerPoint",
    "Apple Keynote",
    "Pitch",
    "Google Slides"
  ],
  "install": [
    {
      "platform": "source",
      "distro": "source",
      "manager": "source",
      "label": "Cargo / Build from source",
      "url": "https://github.com/storytold/deckcraft",
      "command": "git clone https://github.com/storytold/deckcraft.git && cd deckcraft && cargo run --release",
      "note": "Native presentations app in Rust."
    }
  ],
  "sources": [
    "curated",
    "artcraft"
  ],
  "featured": true
});