import { motion } from 'framer-motion'

/* ============================================================
   Persona-style screen wipe: three skewed panels sweep across
   on enter/exit, staggered. Panel colors come from the target
   section's accent so every transition is themed.
   ============================================================ */

const THEME_COLORS = {
  menu: '#4fc3ff',
  about: '#ffd166',
  resume: '#4fc3ff',
  projects: '#ff2e3f',
  art: '#ff4fa3',
  socials: '#a36bff',
}

const panel = (i) => ({
  initial: { x: '-120%', skewX: -18 },
  animate: {
    x: '120%',
    skewX: -18,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    x: ['-120%', '120%'],
    skewX: -18,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.83, 0, 0.17, 1] },
  },
})

export default function PageTransition({ theme = 'menu', children }) {
  const accent = THEME_COLORS[theme] ?? THEME_COLORS.menu

  return (
    <motion.div
      data-theme={theme}
      style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25, delay: 0.25 } }}
      exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.15 } }}
    >
      {children}

      {/* wipe panels */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          variants={panel(i)}
          initial="initial"
          animate="animate"
          style={{
            position: 'fixed',
            top: `${i * 33.4 - 5}%`,
            left: '-10%',
            width: '120%',
            height: '38%',
            background: i === 1 ? accent : '#0a0a10',
            borderTop: `3px solid ${accent}`,
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        />
      ))}
    </motion.div>
  )
}
