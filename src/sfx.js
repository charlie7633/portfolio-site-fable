/* ============================================================
   SFX — WebAudio-generated UI sounds (no audio files needed).
   Muted by default; SoundToggle flips it. Swap these for real
   sound files later by replacing play() implementations.
   ============================================================ */

let ctx = null
let enabled = false

try {
  enabled = localStorage.getItem('sfx-enabled') === 'true'
} catch { /* private browsing */ }

function audio() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

export function isSfxEnabled() {
  return enabled
}

export function setSfxEnabled(on) {
  enabled = on
  try { localStorage.setItem('sfx-enabled', String(on)) } catch { /* ignore */ }
  if (on) blip('select')
}

function tone({ from, to, time, type = 'square', gain = 0.05 }) {
  const ac = audio()
  const osc = ac.createOscillator()
  const g = ac.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(from, ac.currentTime)
  osc.frequency.exponentialRampToValueAtTime(Math.max(to, 1), ac.currentTime + time)
  g.gain.setValueAtTime(gain, ac.currentTime)
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + time)
  osc.connect(g).connect(ac.destination)
  osc.start()
  osc.stop(ac.currentTime + time)
}

export function blip(kind) {
  if (!enabled) return
  try {
    switch (kind) {
      case 'hover':  tone({ from: 850, to: 850, time: 0.04, gain: 0.025 }); break
      case 'select': tone({ from: 320, to: 980, time: 0.13, type: 'sawtooth', gain: 0.04 }); break
      case 'back':   tone({ from: 700, to: 220, time: 0.12, type: 'sawtooth', gain: 0.04 }); break
      default: break
    }
  } catch { /* audio blocked */ }
}
