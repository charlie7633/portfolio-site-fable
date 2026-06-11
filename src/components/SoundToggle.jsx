import { useState } from 'react'
import { isSfxEnabled, setSfxEnabled } from '../sfx.js'

export default function SoundToggle() {
  const [on, setOn] = useState(isSfxEnabled())

  const toggle = () => {
    setSfxEnabled(!on)
    setOn(!on)
  }

  return (
    <button
      className="chip"
      onClick={toggle}
      style={{ position: 'fixed', bottom: 18, right: 24, zIndex: 50, fontSize: '0.7rem' }}
      aria-pressed={on}
    >
      <span>{on ? '♪ SOUND ON' : '♪ SOUND OFF'}</span>
    </button>
  )
}
