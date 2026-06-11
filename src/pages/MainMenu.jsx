import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import MenuBackground from '../components/MenuBackground.jsx'
import { blip } from '../sfx.js'
import styles from './MainMenu.module.css'

/* ============================================================
   ASSET AUTO-PICKUP
   Icons:        src/assets/icons/<id>.(png|svg|webp)
                 e.g. icons/about.png, icons/resume.svg
   Silhouettes:  src/assets/silhouettes/<id>.(png|webp)
                 e.g. silhouettes/projects.png
   Files matching an item's id (or label word) are used
   automatically; missing files fall back gracefully.
   ============================================================ */
const iconFiles = import.meta.glob('../assets/icons/*.{png,svg,webp,jpg}', { eager: true, import: 'default' })
const silhouetteFiles = import.meta.glob('../assets/silhouettes/*.{png,webp,jpg}', { eager: true, import: 'default' })

function findAsset(files, id, label) {
  const keys = Object.keys(files)
  const words = [id, ...label.toLowerCase().split(/[^a-z]+/).filter(Boolean)]
  const hit = keys.find((k) => {
    const name = k.split('/').pop().toLowerCase()
    return words.some((w) => w && name.includes(w))
  })
  return hit ? files[hit] : null
}

const ITEMS = [
  { id: 'about',    label: 'ABOUT ME',    path: '/about',    accent: 'var(--c-about)',    skew: -8,  rot: -1.5, x: 0  },
  { id: 'resume',   label: 'RESUME',      path: '/resume',   accent: 'var(--c-resume)',   skew: -12, rot: 1,    x: 38 },
  { id: 'projects', label: 'PROJECTS',    path: '/projects', accent: 'var(--c-projects)', skew: -5,  rot: -1,   x: 14 },
  { id: 'art',      label: 'ART & EDITS', path: '/art',      accent: 'var(--c-art)',      skew: -10, rot: 1.5,  x: 50 },
  { id: 'socials',  label: 'SOCIALS',     path: '/socials',  accent: 'var(--c-socials)',  skew: -4,  rot: -1.5, x: 24 },
]

export default function MainMenu() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(null)

  return (
    <div className={styles.screen}>
      <MenuBackground />

      <div className={styles.stripe} />
      <div className={styles.stripe2} />

      <motion.header
        className={styles.identity}
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
      >
        <h1>CHARLES<br />OGUNSANYA</h1>
        <p>SOFTWARE ENGINEER // VIDEO EDITOR // ILLUSTRATOR</p>
        <p className={styles.sub}>BSc Computer Science · Kingston University · Class of 2026</p>
      </motion.header>

      <nav className={styles.menu}>
        {ITEMS.map((item, i) => {
          const icon = findAsset(iconFiles, item.id, item.label)
          const silhouette = findAsset(silhouetteFiles, item.id, item.label)
          const isActive = hovered === i
          return (
            <motion.button
              key={item.path}
              className={`${styles.item} ${isActive ? styles.active : ''}`}
              style={{ '--item-accent': item.accent, marginLeft: item.x }}
              initial={{ x: 120, opacity: 0, skewX: item.skew, rotate: item.rot }}
              animate={{ x: 0, opacity: 1, skewX: item.skew, rotate: item.rot, transition: { delay: 0.55 + i * 0.09, duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
              onMouseEnter={() => { setHovered(i); blip('hover') }}
              onMouseLeave={() => setHovered(null)}
              onClick={() => { blip('select'); navigate(item.path) }}
            >
              {silhouette && (
                <span className={styles.silhouette} aria-hidden="true">
                  <img src={silhouette} alt="" />
                </span>
              )}
              <span className={styles.inner}>
                <span className={styles.marker}>
                  {icon
                    ? <img className={styles.icon} src={icon} alt="" />
                    : <span className={styles.tri} />}
                </span>
                <span className={styles.label}>{item.label}</span>
              </span>
            </motion.button>
          )
        })}
      </nav>

      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.4 } }}
      >
        <span>EST. LONDON</span>
        <span>// PORTFOLIO v1</span>
      </motion.footer>
    </div>
  )
}
