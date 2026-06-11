import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import MenuBackground from '../components/MenuBackground.jsx'
import { blip } from '../sfx.js'
import styles from './MainMenu.module.css'

/* Hand-tuned per item — the irregular sizes/skews/offsets are
   what gives it the P3R hand-placed look. Resume sits second so
   recruiters reach the CV in one click. */
const ITEMS = [
  { label: 'ABOUT ME',    path: '/about',    accent: 'var(--c-about)',    size: 74, skew: -8,  rot: -3, x: 0  },
  { label: 'RESUME',      path: '/resume',   accent: 'var(--c-resume)',   size: 62, skew: -12, rot: 2,  x: 34 },
  { label: 'PROJECTS',    path: '/projects', accent: 'var(--c-projects)', size: 70, skew: -5,  rot: -2, x: 12 },
  { label: 'ART & EDITS', path: '/art',      accent: 'var(--c-art)',      size: 56, skew: -10, rot: 3,  x: 44 },
  { label: 'SOCIALS',     path: '/socials',  accent: 'var(--c-socials)',  size: 64, skew: -4,  rot: -3, x: 20 },
]

export default function MainMenu() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(null)

  return (
    <div className={styles.screen}>
      <MenuBackground />

      {/* edge stripe, like P3R's red screen edge */}
      <div className={styles.stripe} />
      <div className={styles.stripe2} />

      {/* identity block, top-left */}
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
        {ITEMS.map((item, i) => (
          <motion.button
            key={item.path}
            className={`${styles.item} ${hovered === i ? styles.active : ''}`}
            style={{
              '--item-accent': item.accent,
              fontSize: `clamp(${item.size * 0.45}px, ${item.size * 0.11}vw + ${item.size * 0.38}px, ${item.size}px)`,
              marginLeft: item.x,
            }}
            initial={{ x: 120, opacity: 0, skewX: item.skew, rotate: item.rot }}
            animate={{ x: 0, opacity: 1, skewX: item.skew, rotate: item.rot, transition: { delay: 0.55 + i * 0.09, duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
            onMouseEnter={() => { setHovered(i); blip('hover') }}
            onMouseLeave={() => setHovered(null)}
            onClick={() => { blip('select'); navigate(item.path) }}
          >
            <span className={styles.glow} />
            <span className={styles.tri} />
            <span className={styles.label}>{item.label}</span>
          </motion.button>
        ))}
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
