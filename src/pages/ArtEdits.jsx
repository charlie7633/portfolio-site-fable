import PageShell from '../components/PageShell.jsx'
import styles from './ArtEdits.module.css'

/* Gallery grid — placeholder tiles for now. Swap each tile for an
   <img> (artwork) or an embedded video/short. Charlie's Canva
   editing portfolio will feed real content here. */

const TILES = [
  { label: 'ILLUSTRATION 01', kind: 'ART' },
  { label: 'EDIT REEL 01', kind: 'VIDEO' },
  { label: 'ILLUSTRATION 02', kind: 'ART' },
  { label: 'CLIENT EDIT 01', kind: 'VIDEO' },
  { label: 'CHARACTER STUDY', kind: 'ART' },
  { label: 'EDIT REEL 02', kind: 'VIDEO' },
]

export default function ArtEdits() {
  return (
    <PageShell title="ART & EDITS" kicker="GALLERY // CREATIVE WORK">
      <div className={styles.grid}>
        {TILES.map((t, i) => (
          <div key={i} className={`glass ${styles.tile}`}>
            <span className={styles.kind}>{t.kind}</span>
            <span className={styles.label}>{t.label}</span>
            <span className={styles.hint}>placeholder — drop artwork / embed here</span>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
