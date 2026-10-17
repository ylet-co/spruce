__sd("data/apps/s/soundcraft.json",{
  "id": "soundcraft",
  "name": "SoundCraft",
  "tagline": "Professional audio recording and mixing, rebuilt in pure Rust",
  "blurb": "Dedicated Edit and Mix windows, multitrack audio and MIDI, ten inserts and sends per track, surround panning, and offline AudioSuite.",
  "description": "SoundCraft is a digital audio workstation built for musicians, producers and podcast engineers.\n\nOffers low-latency audio engine, VST3/CLAP plugin hosting, MIDI piano roll, automation curves, and multi-channel stem export.",
  "developer": "ArtCraft / Storytold",
  "icon": "https://getartcraft.com/images/apps/soundcraft/icon.webp",
  "screenshots": [
    {
      "full": "https://getartcraft.com/images/apps/soundcraft/og.jpg",
      "thumb": "https://getartcraft.com/images/apps/soundcraft/og.jpg"
    }
  ],
  "categories": [
    "Audio & Video"
  ],
  "tags": [
    "craft",
    "storytold",
    "artcraft suite",
    "craft suite",
    "artcraft",
    "daw",
    "audio workstation",
    "recording",
    "mixing",
    "midi",
    "plugins",
    "rust"
  ],
  "license": "MIT",
  "platforms": [
    "linux",
    "windows",
    "macos",
    "web"
  ],
  "repo": "https://github.com/storytold/soundcraft",
  "homepage": "https://getartcraft.com/apps/soundcraft",
  "stars": 2150,
  "version": "0.2.9",
  "updated": "2026-10-15",
  "replaces": [
    "Pro Tools",
    "Adobe Audition",
    "Logic Pro",
    "Ableton Live",
    "FL Studio"
  ],
  "install": [
    {
      "platform": "source",
      "distro": "source",
      "manager": "source",
      "label": "Cargo / Build from source",
      "url": "https://github.com/storytold/soundcraft",
      "command": "git clone https://github.com/storytold/soundcraft.git && cd soundcraft && cargo run --release",
      "note": "Digital audio workstation in pure Rust."
    }
  ],
  "sources": [
    "curated",
    "artcraft"
  ],
  "featured": true
});