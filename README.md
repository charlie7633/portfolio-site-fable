# Charles Ogunsanya — JRPG Portfolio

Persona-3-Reload-inspired portfolio. React + Vite + Framer Motion.

## Run it

```bash
npm install
npm run dev
```

## Swapping in real content

- **Menu icons:** drop into `src/assets/icons/`, named after the tab (`about.png`, `resume.svg`, `projects.png`, `art.png`, `socials.png`). They replace the triangle automatically.
- **Menu silhouettes:** drop into `src/assets/silhouettes/`, same naming (`about.png`, etc.). They appear inside the glass bars, right-aligned, automatically.
- **Background music:** drop `bgm.mp3` into `public/` — starts softly after the visitor's first click. Use music you have rights to (royalty-free), not commercial tracks.
- **Spotify widget:** set `SPOTIFY_EMBED_URL` in `src/components/MusicWidget.jsx` (Spotify → Share → Embed → copy the iframe src).

- **Background video (main menu):** drop an `.mp4` into `src/assets/`, then follow the comment at the top of `src/components/MenuBackground.jsx`.
- **CVs:** put `cv-software.pdf` and `cv-creative.pdf` into `public/` — the Resume page buttons already point at them.
- **Project links/copy:** edit the `PROJECTS` array in `src/pages/Projects.jsx`.
- **Social links:** edit the `LINKS` array in `src/pages/Socials.jsx`.
- **About copy:** edit the `TABS` array in `src/pages/About.jsx`.
- **Art/edits gallery:** replace placeholder tiles in `src/pages/ArtEdits.jsx`.
- **Sound effects:** WebAudio-generated for now (no files); swap implementations in `src/sfx.js` for real SFX files. Off by default — toggle bottom-right.

## Theme system

Per-section accent colors live in `src/theme.css` (`--c-about`, `--c-projects`, etc.). Each page sets `data-theme`, and every component reads `--accent`.
