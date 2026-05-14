import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const el = document.createElement('div')
    el.id = 'cursor-glow'
    Object.assign(el.style, {
      position: 'fixed',
      width: '600px',
      height: '600px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(212,241,121,0.06) 0%, transparent 70%)',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: '1',
      transition: 'none',
      top: '-300px',
      left: '-300px',
    })
    document.body.appendChild(el)

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }

    document.addEventListener('mousemove', move)
    return () => {
      document.removeEventListener('mousemove', move)
      if (document.body.contains(el)) document.body.removeChild(el)
    }
  }, [])

  return null
}
