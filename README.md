# Charles Ogunsanya — JRPG Portfolio

Persona-3-Reload-inspired portfolio. React + Vite + Framer Motion.

## Run it

```bash
npm install
npm run dev
```

## Swapping in real content

- **Background video (main menu):** drop an `.mp4` into `src/assets/`, then follow the comment at the top of `src/components/MenuBackground.jsx`.
- **CVs:** put `cv-software.pdf` and `cv-creative.pdf` into `public/` — the Resume page buttons already point at them.
- **Project links/copy:** edit the `PROJECTS` array in `src/pages/Projects.jsx`.
- **Social links:** edit the `LINKS` array in `src/pages/Socials.jsx`.
- **About copy:** edit the `TABS` array in `src/pages/About.jsx`.
- **Art/edits gallery:** replace placeholder tiles in `src/pages/ArtEdits.jsx`.
- **Sound effects:** WebAudio-generated for now (no files); swap implementations in `src/sfx.js` for real SFX files. Off by default — toggle bottom-right.

## Theme system

Per-section accent colors live in `src/theme.css` (`--c-about`, `--c-projects`, etc.). Each page sets `data-theme`, and every component reads `--accent`.
