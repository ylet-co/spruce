__sd("data/apps/e/effectcraft.json",{
  "id": "effectcraft",
  "name": "EffectCraft",
  "tagline": "Motion graphics and visual effects, in pure Rust",
  "blurb": "Compositions, layers, keyframes, 259 effects, expressions, 3D cameras and lights, and a render queue.",
  "description": "EffectCraft is an open-source motion graphics and visual effects compositor.\n\nCreate titles, lower thirds, particle effects, 3D camera animations, and complex multi-layer visual compositions with node graphs and keyframe velocity curves.",
  "developer": "ArtCraft / Storytold",
  "icon": "https://getartcraft.com/images/apps/effectcraft/icon.webp",
  "screenshots": [
    {
      "full": "https://getartcraft.com/images/apps/effectcraft/og.jpg",
      "thumb": "https://getartcraft.com/images/apps/effectcraft/og.jpg"
    }
  ],
  "categories": [
    "Graphics & Design",
    "Audio & Video"
  ],
  "tags": [
    "craft",
    "storytold",
    "artcraft suite",
    "craft suite",
    "artcraft",
    "motion graphics",
    "vfx",
    "compositor",
    "keyframes",
    "effects",
    "rust"
  ],
  "license": "MIT",
  "platforms": [
    "linux",
    "windows",
    "macos",
    "web"
  ],
  "repo": "https://github.com/storytold/effectcraft",
  "homepage": "https://getartcraft.com/apps/effectcraft",
  "stars": 2200,
  "version": "0.2.4",
  "updated": "2026-10-15",
  "replaces": [
    "Adobe After Effects",
    "Apple Motion",
    "HitFilm Pro"
  ],
  "install": [
    {
      "platform": "source",
      "distro": "source",
      "manager": "source",
      "label": "Cargo / Build from source",
      "url": "https://github.com/storytold/effectcraft",
      "command": "git clone https://github.com/storytold/effectcraft.git && cd effectcraft && cargo run --release",
      "note": "Native motion graphics and visual effects compositor."
    }
  ],
  "sources": [
    "curated",
    "artcraft"
  ],
  "featured": true
});