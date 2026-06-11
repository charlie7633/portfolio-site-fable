import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import { blip } from '../sfx.js'
import styles from './About.module.css'

/* FFXVI-encyclopedia style: vertical tabs left, lore pane right.
   [PLACEHOLDER COPY — replace with charlie's real writing] */

const TABS = [
  {
    id: 'engineer',
    label: 'THE ENGINEER',
    body: `Final-year BSc Computer Science student at Kingston University (graduating July 2026), focused on full-stack development and data. Comfortable across React, React Native, Python, and API-driven builds — from a DVLA-integrated web app to a threat-modeling engine. Looking for graduate Software Engineering and Data Analyst roles.`,
  },
  {
    id: 'artist',
    label: 'THE ARTIST',
    body: `Digital illustrator studying the fundamentals through the work of Tetsuya Nomura and Jen Zee. Character design, sharp linework, and the kind of UI sensibility this site is built on — the same eye drives both the art and the engineering.`,
  },
  {
    id: 'editor',
    label: 'THE EDITOR',
    body: `Freelance video editor cutting short-form and promotional content. Pacing, rhythm and motion design carried over from 1.1k+ hours in competitive hero shooters — reading fast visual information and making things feel kinetic.`,
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
