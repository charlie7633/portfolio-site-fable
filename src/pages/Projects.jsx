import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import { blip } from '../sfx.js'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    name: 'AFRICAN CUTS (ACUTZ)',
    role: 'REACT NATIVE MOBILE APP · 2025–2026',
    desc: 'Barber-booking app built with React Native, Appwrite and Node.js. Designed a scalable NoSQL data layer using strategic denormalisation to eliminate client-side joins — O(1) lookups, 40% faster data retrieval. Found a critical abstraction leak corrupting data in the official Appwrite SDK and engineered a native HTTP REST bypass for secure multipart cloud uploads. Async database mutations and GPS hardware integration abstracted into polymorphic React custom hooks.',
    tech: ['React Native', 'Appwrite', 'Node.js', 'NoSQL'],
    link: 'https://github.com/charlie7633/acutz',
    linkLabel: 'VIEW ON GITHUB ↗',
  },
  {
    name: 'SIMPLIFY MY CAR',
    role: 'PYTHON / FLASK · DVLA API · 2024',
    desc: 'Vehicle health-report dashboard fetching and parsing real-time DVLA API data, with query optimisation cutting response times by 55%. Built under mentorship from a PwC software engineer — industry-standard Git branching, pull-request workflows and full SDLC. Also explored AWS fundamentals including IAM roles and permissions. The app itself never shipped; the design mockup lives on.',
    tech: ['Python', 'Flask', 'Poetry', 'DVLA API', 'AWS IAM'],
    link: 'https://canva.link/7ypm9r2q59rmfb9',
    linkLabel: 'VIEW DESIGN MOCKUP ↗',
  },
  {
    name: 'TEMPEST',
    role: 'SECURITY EXPERT · AGILE TEAM PROJECT · 2026',
    desc: 'University team project — 8-person XP team building a code-scanning platform with a layered architecture (Input, Processing, Data/Logic, Presentation). As security expert: ran comprehensive threat modeling, enforced strict input sanitation and least-privilege for the scanner, and designed the vulnerability detection engine — regex and pattern rules catching 95% of high-priority issues like SQL injection, hard-coded secrets and deprecated cryptography. Defined the high-risk thresholds for the platform’s Technical Debt Index, cutting deployment failure rate from 15% to 2%.',
    tech: ['Security', 'Threat Modeling', 'Regex Engine', 'XP/Agile'],
    link: null,
  },
  {
    name: 'BEATS BY DRE',
    role: 'DATA ANALYTICS EXTERNSHIP · 2025',
    desc: 'Analysed 100+ consumer datasets with Python (Pandas/Matplotlib) and Excel to surface trends in brand perception and satisfaction. Key insight: 60% of surveyed customers didn’t know the brand was an Apple subsidiary — a finding that shaped marketing strategy. Presented visualisations and recommendations to leadership via interactive dashboards.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Excel'],
    link: null,
  },
  {
    name: 'E-COMMERCE REBUILD',
    role: 'FREELANCE WEB DEVELOPER · USP COLLEGE · 2021–22',
    desc: 'Rebuilt a local client’s e-commerce architecture on WordPress with Stripe API integration for secure payments — delivering a 68% increase in sales traffic. SEO best practices and image compression significantly improved load times and organic rankings.',
    tech: ['WordPress', 'Stripe API', 'JavaScript', 'SEO'],
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
                      {p.link && (
                        <a className="chip" href={p.link} target="_blank" rel="noreferrer" onMouseEnter={() => blip('hover')} onClick={() => blip('select')}>
                          <span>{p.linkLabel}</span>
                        </a>
                      )}
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
