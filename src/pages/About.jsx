import { useRef } from 'react'
import { motion } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import aboutArt from '../assets/silhouettes/about.png'
import styles from './About.module.css'

/* Magazine-spread layout, inspired by character-profile pages
   (FFXVI "Party People of Valisthea" style): one anchor portrait,
   name + pull-quote + bio per profile, file index footer. */

const PROFILES = [
  {
    id: 'engineer',
    name: 'The Engineer',
    quote: '“Available for full-time graduate roles from June 2026.”',
    body: `Stack-agnostic software engineering student at Kingston University London (BSc Computer Science, predicted 2:1, graduating June 2026). I build and iterate fast across JavaScript, Python, and Java ecosystems — React Native apps with optimised NoSQL data layers, Flask dashboards on live government APIs, security tooling that catches real vulnerabilities. I started early, rebuilding a client's e-commerce architecture with Stripe integration at 17 (+68% sales traffic), and most recently turned consumer datasets into strategy as a Data Analyst Extern with Beats by Dre. UK citizen, London-based.`,
  },
  {
    id: 'artist',
    name: 'The Artist',
    quote: '“The same eye for composition drives how I design interfaces.”',
    body: `Digital illustrator working in character art and manga-style linework — you've already seen it; the silhouettes in the main menu come from the same influences I study: Tetsuya Nomura, Jen Zee, and classic shōnen panel composition. I post everything to @bycharlieboi_ on Instagram, from quick sketches to finished pieces.`,
  },
  {
    id: 'editor',
    name: 'The Editor',
    quote: '“500k+ views across client channels.”',
    body: `Freelance video editor and content marketer since 2024. I've produced short-form content and run Instagram and TikTok campaigns for brands from local restaurants to Coca-Cola and Kingston University's own student-facing channels. Grown one channel by 3,000 subscribers with a single trending series, and trained an assistant editor to keep daily upload schedules running.`,
  },
]

export default function About() {
  const bgRef = useRef(null)

  const handleMove = (e) => {
    if (!bgRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    bgRef.current.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    bgRef.current.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <PageShell title="ABOUT ME" kicker="ENCYCLOPEDIA // PERSONAL FILE">
      <div className={styles.spread} onMouseMove={handleMove}>
        <div ref={bgRef} className={styles.patternReveal} aria-hidden="true" />

        <motion.p
          className={styles.dek}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Three roles, one builder — here's a look at the people behind every project on this site.
        </motion.p>

        <div className={styles.layout}>
          <motion.figure
            className={styles.portrait}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={aboutArt} alt="" />
          </motion.figure>

          <div className={styles.profiles}>
            {PROFILES.map((p, i) => (
              <motion.div
                key={p.id}
                className={styles.profile}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className={styles.profileName}>{p.name}</h2>
                <p className={styles.profileQuote}>{p.quote}</p>
                <p className={styles.profileBody}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.fileIndex}>FILE 02 / 06 — ABOUT</div>
      </div>
    </PageShell>
  )
}
