# Drunk Yeti portfolio — v1.0

A self-contained, buildless Three.js portfolio for desktop and mobile layouts.

## Publish on GitHub Pages

The delivery ZIP contains the website at its root. Extract it first; do not upload the ZIP itself.

1. Create a **public** repository on GitHub Free. For an account homepage, name it `YOUR-USERNAME.github.io`. Any other repository name creates a project site at `https://YOUR-USERNAME.github.io/REPOSITORY/`.
2. Upload the extracted **contents**, including `index.html`, `style.css`, `catalog.js`, `scene.js`, `assets/`, and `.nojekyll`, to the repository root. Keep the `assets` folder and its subfolders intact. GitHub Desktop is convenient for uploading the complete tree, including `.nojekyll`.
3. Open **Settings → Pages**. Select **Deploy from a branch**, branch **main**, folder **/(root)**, and save.
4. Open the URL GitHub supplies after deployment finishes.

No npm install, build command, workflow YAML, API key, backend, or paid hosting plan is needed. GitHub runs its own deployment workflow internally even with branch publishing. The free address is included; a purchased custom domain is optional. This is a studio portfolio linking to external storefronts. GitHub's Pages usage policies and quotas still apply.

## Preview locally

Opening `index.html` directly with a `file://` URL will block module/model fetches in many browsers. Serve the website folder with any static HTTP server, for example:

    python3 -m http.server 8080

Then visit `http://localhost:8080`. When using this source repository rather than the delivery ZIP, serve `dist/`.

## What's included

- Original Drunk Yeti mascot extracted from Collision Karts v0.33, with its 78 skinned meshes and 19 animation clips preserved in GLB.
- Toon materials, idle/blink behavior, a custom bone-driven greeting, turntable spin, and pointer response.
- Glossy inflated logo, derived from the studio's original itch.io logo silhouette, with rounded front/back geometry, moving lighting, and touch rotation.
- 60 current itch.io entries with local artwork, categories, search, browser-demo filtering, and progressive display.
- Six actual videos discovered on the supplied YouTube channel, with click-to-open privacy-enhanced YouTube embeds.
- Links to Steam, itch.io, YouTube, X, and the existing Google Sites archive.
- Responsive CSS, reduced-motion behavior, static image fallbacks, keyboard controls, mobile frame-rate limits, and offscreen animation suspension.
- All Three.js dependencies self-hosted, pinned to r170. YouTube is contacted for playback only after a video is selected. Store and social links are external destinations.

## Edit the collection

Update `assets/catalog.json` (or `dist/assets/catalog.json` in the source repo). Fields are `title`, `url`, `image`, `description`, `category` (`Games`, `Tools`, `Assets`), and `browser` (boolean). Prices and operating-system promises are deliberately left to the storefront pages, where current download availability is authoritative.

Update `assets/videos.json` with each video's `id` and `title`. Put a matching thumbnail at `assets/VIDEO-ID.jpg`.

The gallery is a snapshot, not a live storefront sync. Refresh it when releases change. `scripts/prepare-assets.py` in the source repo can refresh public itch.io metadata and cover art; it requires Python, Pillow and network access.

## Models

The separate **Drunk-Yeti-3D-Models.zip** includes:

- `drunk-yeti.glb`: original rig, materials, textures, expressions and animation clips.
- `drunk-yeti-mascot.obj` / `.mtl` plus textures: static bind-pose interchange export.
- `drunk-yeti-inflated-logo.glb`: compact web-ready rounded logo.
- `drunk-yeti-inflated-logo.obj` / `.mtl` / `logo.png`: rounded logo interchange export.

OBJ stores static geometry; motion is implemented in the website and the mascot's animation data is retained in GLB. Materials and textures must remain beside the corresponding OBJ/GLB when importing. The logo is an alpha-silhouette relief with rounded edges, not a manually sculpted full character model.

## Verification

JavaScript syntax, local paths/imports, image decoding, GLB rig/clip loading, finite animated geometry bounds, logo topology and OBJ/MTL references were checked. Browser rendering, real-device performance, and video playback were not exercised in this environment. Please test on your phone and desktop before making the GitHub Pages version public.

## Credits and licenses

Drunk Yeti branding, mascot, catalog imagery and projects belong to their respective rights holders. The mascot comes from the user's supplied Collision Karts project; the studio logo and project covers were sourced from the supplied itch.io profile. Video identifiers and titles come from the supplied YouTube channel. Three.js and its loaders are MIT licensed; see `assets/THREE-LICENSE.txt`. The dependency license does not relicense the studio's creative assets.
