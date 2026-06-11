import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import { blip } from '../sfx.js'
import styles from './Projects.module.css'

/* Persona "party member" accordion: skewed black bars that expand.
   [PLACEHOLDER DETAILS — links/descriptions to be replaced with
   real repo links and copy from charlie] */

const PROJECTS = [
  {
    name: 'ACUTZ',
    role: 'REACT NATIVE MOBILE APP',
    desc: 'Barber-booking mobile app built in React Native. Handles scheduling, profiles, and bookings end to end.',
    tech: ['React Native', 'JavaScript', 'Firebase'],
    link: null,
  },
  {
    name: 'SIMPLIFY MY CAR',
    role: 'DVLA API WEB APP',
    desc: 'Web app that pulls live vehicle data from the DVLA API and turns it into a plain-English breakdown of a car’s status, tax and MOT.',
    tech: ['React', 'REST APIs', 'Node.js'],
    link: null,
  },
  {
    name: 'TEMPEST SECURITY EXPERT',
    role: 'THREAT-MODELING ENGINE',
    desc: 'Security threat-modeling expert system — models attack surfaces and produces prioritised mitigations.',
    tech: ['Python', 'Security', 'Expert Systems'],
    link: null,
  },
  {
    name: 'BEATS BY DRE',
    role: 'DATA ANALYTICS EXTERNSHIP',
    desc: 'Consumer-insights data analytics externship: cleaned and analysed review data, built sentiment analysis, and presented findings.',
    tech: ['Python', 'Pandas', 'Sentiment Analysis'],
    link: null,
  },
]

export default function Projects() {
  const [open, setOpen] = useState(0)

  return (
    <PageShell title="PROJECTS" kicker="PARTY ROSTER // SELECT A MEMBER">
      <div className={styles.list}>
        {PROJECTS.map((p, i) => {
          const isOpen = open === i
          return (
            <motion.div key={p.name} layout className={styles.entry} transition={{ layout: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}>
              <button
                className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`}
                onMouseEnter={() => blip('hover')}
                onClick={() => { blip('select'); setOpen(isOpen ? -1 : i) }}
              >
                <span className={styles.barInner}>
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.name}>{p.name}</span>
                  <span className={styles.role}>{p.role}</span>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className={styles.detail}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={`glass ${styles.detailInner}`}>
                      <p>{p.desc}</p>
                      <div className={styles.badges}>
                        {p.tech.map((t) => <span key={t} className={styles.badge}>{t}</span>)}
                      </div>
                      {p.link
                        ? <a className="chip" href={p.link} target="_blank" rel="noreferrer"><span>VIEW ON GITHUB ↗</span></a>
                        : <span className={styles.soon}>repo link coming soon</span>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </PageShell>
  )
}
