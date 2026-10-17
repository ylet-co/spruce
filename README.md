# Spruce

Open source, finally easy. Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Run it
Double-clicking `index.html` works. For the most reliable result serve the folder:

    python3 -m http.server 5180     # then open http://localhost:5180

## Files
- `index.html` + `js/landing.js`: animated landing page
- `browse.html` + `js/browse.js`: search, category/platform filters, saved apps
- `app.html` + `js/app.js`: one app (`app.html?id=gimp`): gallery, description, install panel
- `js/vote.js` + `js/config.js`: guest voting with a bot check (see config.js for Turnstile and a vote API)
- `alternatives.html` + `js/alternatives.js` + `js/alt-data.js`: popular apps and games, each with the open source alternatives found in the catalog
- `js/common.js`: theme toggle, nav, helpers. `css/style.css`: all styles
- `data/index.json`: compact catalog index. `data/apps/<first letter>/<id>.json`: one record per app

Saved apps and theme live in localStorage. Any static host works (no rewrites needed).
