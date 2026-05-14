import { useRef, useEffect, ReactNode, CSSProperties } from 'react'

interface CardGlowProps {
  children: ReactNode
  style?: CSSProperties
  hoverBorder?: boolean
  limeGlow?: boolean
}

export default function CardGlow({ children, style, hoverBorder = false, limeGlow = false }: CardGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return

    const move = (e: MouseEvent) => {
      const r = card.getBoundingClientRect()
      glow.style.left = e.clientX - r.left + 'px'
      glow.style.top = e.clientY - r.top + 'px'
    }
    const enter = () => {
      glow.style.opacity = '1'
      if (hoverBorder) card.style.borderColor = 'rgba(212,241,121,0.4)'
      if (hoverBorder) card.style.background = 'rgba(212,241,121,0.04)'
    }
    const leave = () => {
      glow.style.opacity = '0'
      if (hoverBorder) card.style.borderColor = 'rgba(212,241,121,0.1)'
      if (hoverBorder) card.style.background = 'transparent'
    }

    card.addEventListener('mousemove', move)
    card.addEventListener('mouseenter', enter)
    card.addEventListener('mouseleave', leave)

    return () => {
      card.removeEventListener('mousemove', move)
      card.removeEventListener('mouseenter', enter)
      card.removeEventListener('mouseleave', leave)
    }
  }, [hoverBorder])

  return (
    <div
      ref={cardRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.25s, background 0.25s',
        ...style,
      }}
    >
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          width: limeGlow ? '200px' : '300px',
          height: limeGlow ? '200px' : '300px',
          borderRadius: '50%',
          background: limeGlow
            ? 'radial-gradient(circle, rgba(0,0,66,0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(212,241,121,0.15) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          opacity: '0',
          transition: 'opacity 0.3s',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
