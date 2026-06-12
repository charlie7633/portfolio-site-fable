import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import { blip } from '../sfx.js'
import styles from './About.module.css'

const TABS = [
  {
    id: 'engineer',
    label: 'THE ENGINEER',
    body: `Stack-agnostic software engineering student at Kingston University London (BSc Computer Science, predicted 2:1, graduating June 2026). I build and iterate fast across JavaScript, Python, and Java ecosystems — React Native apps with optimised NoSQL data layers, Flask dashboards on live government APIs, security tooling that catches real vulnerabilities. I started early, rebuilding a client's e-commerce architecture with Stripe integration at 17 (+68% sales traffic), and most recently turned consumer datasets into strategy as a Data Analyst Extern with Beats by Dre. Available for full-time graduate Software Engineering and Data Analyst roles from June 2026 — UK citizen, London-based.`,
  },
  {
    id: 'artist',
    label: 'THE ARTIST',
    body: `Digital illustrator working in character art and manga-style linework — you've already seen it; the silhouettes in the main menu come from the same influences I study: Tetsuya Nomura, Jen Zee, and classic shōnen panel composition. I post everything to @bycharlieboi_ on Instagram, from quick sketches to finished pieces. The same eye for composition and visual rhythm drives how I design interfaces — this site included.`,
  },
  {
    id: 'editor',
    label: 'THE EDITOR',
    body: `Freelance video editor and content marketer since 2024. I've produced short-form content and run Instagram and TikTok campaigns for brands from local restaurants to Coca-Cola and Kingston University's own student-facing channels. As an editor I've amassed 500k+ views across client channels, grown one channel by 3,000 subscribers with a single trending series, and trained an assistant editor to keep daily upload schedules running. Trend research, pacing, and platform-native instincts — built from years of actually living on these platforms.`,
  },
]

export default function About() {
  const [active, setActive] = useState(0)

  return (
    <PageShell title="ABOUT ME" kicker="ENCYCLOPEDIA // PERSONAL FILE">
      <div className={styles.split}>
        <div className={styles.tabs}>
          {TABS.map((t, i) => (
            <button
              key={t.id}
              className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
              onMouseEnter={() => blip('hover')}
              onClick={() => { blip('select'); setActive(i) }}
            >
              <span>{t.label}</span>
            </button>
          ))}
        </div>
        <div className={styles.pane}>
          <AnimatePresence mode="wait">
            <motion.article
              key={TABS[active].id}
              className="glass"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className={styles.paneTitle}>{TABS[active].label}</h2>
              <p className={styles.paneBody}>{TABS[active].body}</p>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </PageShell>
  )
}
