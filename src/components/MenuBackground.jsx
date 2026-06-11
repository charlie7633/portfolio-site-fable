import styles from './MenuBackground.module.css'

/* ============================================================
   Menu background. Right now: animated CSS placeholder (drifting
   diagonal light streaks on a dark gradient + grain).

   TO SWAP IN A VIDEO LATER:
   1. Drop your .mp4 into src/assets/ (e.g. src/assets/menu-bg.mp4)
   2. Uncomment the import + <video> below, delete the divs.
   ============================================================ */

// import bgVideo from '../assets/menu-bg.mp4'

export default function MenuBackground() {
  return (
    <div className={styles.bg} aria-hidden="true">
      {/* <video src={bgVideo} autoPlay loop muted playsInline className={styles.video} /> */}
      <div className={styles.gradient} />
      <div className={styles.streaks} />
      <div className={styles.streaks2} />
      <div className={styles.vignette} />
    </div>
  )
}
