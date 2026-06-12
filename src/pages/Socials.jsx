import { motion } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import { blip } from '../sfx.js'
import styles from './Socials.module.css'

const LINKS = [
  { label: 'GITHUB', sub: 'code & repos', href: 'https://github.com/charlie7633' },
  { label: 'LINKEDIN', sub: 'professional', href: 'https://www.linkedin.com/in/charles-ogunsanya-b7954a206/' },
  { label: 'ART INSTAGRAM', sub: '@bycharlieboi_', href: 'https://www.instagram.com/bycharlieboi_/' },
  { label: 'EDITS INSTAGRAM', sub: '@charlieboi7633', href: 'https://www.instagram.com/charlieboi7633/' },
  { label: 'X / TWITTER', sub: '@Charlie7633', href: 'https://x.com/Charlie7633' },
  { label: 'EMAIL', sub: 'charlievanity7633@gmail.com', href: 'mailto:charlievanity7633@gmail.com' },
]

export default function Socials() {
  return (
    <PageShell title="SOCIALS" kicker="LINK START // FIND ME">
      <div className={styles.list}>
        {LINKS.map((l, i) => (
          <motion.div
            key={l.label}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.65 + i * 0.07, ease: [0.22, 1, 0.36, 1] } }}
          >
            <a
              className={styles.row}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              onMouseEnter={() => blip('hover')}
              onClick={() => blip('select')}
            >
              <span className={styles.inner}>
                <span className={styles.label}>{l.label}</span>
                <span className={styles.sub}>{l.sub}</span>
                <span className={styles.arrow}>↗</span>
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </PageShell>
  )
}
