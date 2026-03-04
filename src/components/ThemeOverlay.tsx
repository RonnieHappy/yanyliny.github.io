import { useTheme } from '../context/ThemeContext'
import { useMemo } from 'react'

/* ============================================================
   VAPORWAVE — neon grid, sunset, massive DeLorean, palms, columns, neon triangle
   ============================================================ */
function VaporwaveOverlay() {
  return (
    <>
      {/* Large sunset with glow */}
      <div className="vw-sunset" />
      <div className="vw-sunset-stripes" />

      {/* Neon grid floor — perspective */}
      <div className="vw-grid-wrap">
        <div className="vw-grid" />
      </div>

      {/* Palm trees — both sides */}
      <div className="vw-palm vw-palm-left">
        <svg width="180" height="320" viewBox="0 0 120 200" fill="none">
          <path d="M60 200V70" stroke="rgba(255,113,206,0.5)" strokeWidth="5" />
          <path d="M60 70C25 48 2 38 0 28C22 35 48 42 60 48C38 25 22 8 18 0C36 18 52 38 60 48C68 38 84 18 102 0C98 8 82 25 60 48C72 42 98 35 120 28C118 38 95 48 60 70Z" fill="rgba(255,113,206,0.25)" />
        </svg>
      </div>
      <div className="vw-palm vw-palm-right">
        <svg width="180" height="320" viewBox="0 0 120 200" fill="none" style={{ transform: 'scaleX(-1)' }}>
          <path d="M60 200V70" stroke="rgba(1,205,254,0.5)" strokeWidth="5" />
          <path d="M60 70C25 48 2 38 0 28C22 35 48 42 60 48C38 25 22 8 18 0C36 18 52 38 60 48C68 38 84 18 102 0C98 8 82 25 60 48C72 42 98 35 120 28C118 38 95 48 60 70Z" fill="rgba(1,205,254,0.22)" />
        </svg>
      </div>

      {/* Greek columns — left and right */}
      <div className="vw-column vw-column-left">
        <svg width="50" height="400" viewBox="0 0 50 400" fill="none" stroke="rgba(185,103,255,0.25)" strokeWidth="1.5">
          <rect x="5" y="0" width="40" height="15" />
          <rect x="0" y="15" width="50" height="8" />
          {[10, 20, 30, 40].map(x => (
            <line key={x} x1={x} y1="23" x2={x} y2="370" />
          ))}
          <rect x="0" y="370" width="50" height="8" />
          <rect x="3" y="378" width="44" height="22" />
        </svg>
      </div>
      <div className="vw-column vw-column-right">
        <svg width="50" height="400" viewBox="0 0 50 400" fill="none" stroke="rgba(185,103,255,0.25)" strokeWidth="1.5">
          <rect x="5" y="0" width="40" height="15" />
          <rect x="0" y="15" width="50" height="8" />
          {[10, 20, 30, 40].map(x => (
            <line key={x} x1={x} y1="23" x2={x} y2="370" />
          ))}
          <rect x="0" y="370" width="50" height="8" />
          <rect x="3" y="378" width="44" height="22" />
        </svg>
      </div>

      {/* Neon triangle — behind the car */}
      <div className="vw-triangle">
        <svg width="240" height="210" viewBox="0 0 200 175" fill="none">
          <polygon points="100,5 195,170 5,170" stroke="url(#vw-tri-grad)" strokeWidth="2.5" />
          <polygon points="100,20 185,165 15,165" stroke="url(#vw-tri-grad)" strokeWidth="0.5" opacity="0.5" />
          <defs>
            <linearGradient id="vw-tri-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff71ce" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#01cdfe" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#b967ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ========== HYPER-DETAILED REAR-VIEW DELOREAN ========== */}
      <div className="vw-car">
        <svg width="420" height="320" viewBox="0 0 420 320" fill="none">
          <defs>
            {/* Taillight glow filter */}
            <filter id="tailglow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
            {/* Neon glow filter */}
            <filter id="neonglow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
            {/* Underglow */}
            <linearGradient id="underglow-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#01cdfe" stopOpacity="0" />
              <stop offset="30%" stopColor="#01cdfe" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#b967ff" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#ff71ce" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff71ce" stopOpacity="0" />
            </linearGradient>
            {/* Body gradient */}
            <linearGradient id="body-sheen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(200,200,220,0.12)" />
              <stop offset="50%" stopColor="rgba(150,150,170,0.06)" />
              <stop offset="100%" stopColor="rgba(100,100,120,0.04)" />
            </linearGradient>
          </defs>

          {/* === NEON UNDERGLOW ON GROUND === */}
          <ellipse cx="210" cy="295" rx="160" ry="20" fill="url(#underglow-grad)" filter="url(#neonglow)" />
          <line x1="80" y1="290" x2="340" y2="290" stroke="url(#underglow-grad)" strokeWidth="3" opacity="0.6" />

          {/* === TIRES / WHEELS === */}
          {/* Left tire */}
          <ellipse cx="100" cy="270" rx="28" ry="14" fill="rgba(20,20,30,0.15)" stroke="rgba(185,103,255,0.2)" strokeWidth="1.2" />
          <ellipse cx="100" cy="270" rx="20" ry="10" fill="none" stroke="rgba(185,103,255,0.1)" strokeWidth="0.8" />
          <ellipse cx="100" cy="270" rx="10" ry="5" fill="rgba(140,100,200,0.06)" stroke="rgba(185,103,255,0.12)" strokeWidth="0.6" />
          {/* Lug nuts */}
          {[-6,-3,0,3,6].map(dx => (
            <circle key={dx} cx={100+dx} cy={270} r="1" fill="rgba(185,103,255,0.15)" />
          ))}
          {/* Right tire */}
          <ellipse cx="320" cy="270" rx="28" ry="14" fill="rgba(20,20,30,0.15)" stroke="rgba(185,103,255,0.2)" strokeWidth="1.2" />
          <ellipse cx="320" cy="270" rx="20" ry="10" fill="none" stroke="rgba(185,103,255,0.1)" strokeWidth="0.8" />
          <ellipse cx="320" cy="270" rx="10" ry="5" fill="rgba(140,100,200,0.06)" stroke="rgba(185,103,255,0.12)" strokeWidth="0.6" />
          {[-6,-3,0,3,6].map(dx => (
            <circle key={dx} cx={320+dx} cy={270} r="1" fill="rgba(185,103,255,0.15)" />
          ))}

          {/* === WHEEL ARCHES === */}
          <path d="M65 258 Q65 278 100 285 Q135 278 135 258" stroke="rgba(255,113,206,0.3)" strokeWidth="1.5" fill="none" />
          <path d="M285 258 Q285 278 320 285 Q355 278 355 258" stroke="rgba(255,113,206,0.3)" strokeWidth="1.5" fill="none" />

          {/* === REAR BODY PANEL === */}
          <path d="M72 258 L72 220 Q78 212 100 208 L320 208 Q342 212 348 220 L348 258" fill="url(#body-sheen)" stroke="#ff71ce" strokeWidth="1.8" />
          {/* Bottom edge / bumper */}
          <path d="M68 258 L352 258" stroke="#ff71ce" strokeWidth="2" />
          {/* Bumper detail lines */}
          <path d="M80 252 L340 252" stroke="rgba(255,113,206,0.15)" strokeWidth="0.5" />
          <path d="M75 255 L345 255" stroke="rgba(255,113,206,0.12)" strokeWidth="0.5" />

          {/* === TAILLIGHTS — LEFT (multi-segment, glowing) === */}
          {/* Glow behind */}
          <rect x="78" y="220" width="55" height="14" rx="2" fill="rgba(255,50,50,0.15)" filter="url(#tailglow)" />
          {/* Housing */}
          <rect x="78" y="220" width="55" height="14" rx="2" stroke="#ff71ce" strokeWidth="1.2" fill="rgba(255,113,206,0.08)" />
          {/* Segments */}
          <rect x="81" y="222" width="10" height="10" rx="1" fill="rgba(255,30,30,0.35)" stroke="rgba(255,80,80,0.3)" strokeWidth="0.5" />
          <rect x="93" y="222" width="10" height="10" rx="1" fill="rgba(255,30,30,0.3)" stroke="rgba(255,80,80,0.25)" strokeWidth="0.5" />
          <rect x="105" y="222" width="10" height="10" rx="1" fill="rgba(255,50,30,0.25)" stroke="rgba(255,100,50,0.2)" strokeWidth="0.5" />
          <rect x="117" y="222" width="13" height="10" rx="1" fill="rgba(255,200,50,0.15)" stroke="rgba(255,200,80,0.15)" strokeWidth="0.5" />

          {/* === TAILLIGHTS — RIGHT (mirror) === */}
          <rect x="287" y="220" width="55" height="14" rx="2" fill="rgba(255,50,50,0.15)" filter="url(#tailglow)" />
          <rect x="287" y="220" width="55" height="14" rx="2" stroke="#ff71ce" strokeWidth="1.2" fill="rgba(255,113,206,0.08)" />
          <rect x="290" y="222" width="13" height="10" rx="1" fill="rgba(255,200,50,0.15)" stroke="rgba(255,200,80,0.15)" strokeWidth="0.5" />
          <rect x="305" y="222" width="10" height="10" rx="1" fill="rgba(255,50,30,0.25)" stroke="rgba(255,100,50,0.2)" strokeWidth="0.5" />
          <rect x="317" y="222" width="10" height="10" rx="1" fill="rgba(255,30,30,0.3)" stroke="rgba(255,80,80,0.25)" strokeWidth="0.5" />
          <rect x="329" y="222" width="10" height="10" rx="1" fill="rgba(255,30,30,0.35)" stroke="rgba(255,80,80,0.3)" strokeWidth="0.5" />

          {/* === CENTER BRAKE LIGHT === */}
          <rect x="180" y="207" width="60" height="4" rx="2" fill="rgba(255,30,30,0.25)" />
          <rect x="180" y="207" width="60" height="4" rx="2" fill="rgba(255,30,30,0.12)" filter="url(#tailglow)" />

          {/* === LICENSE PLATE === */}
          <rect x="160" y="236" width="100" height="20" rx="3" fill="rgba(255,248,230,0.08)" stroke="#b967ff" strokeWidth="1.2" />
          <rect x="163" y="238" width="94" height="16" rx="2" fill="none" stroke="rgba(185,103,255,0.15)" strokeWidth="0.5" />
          <text x="210" y="252" textAnchor="middle" fontSize="12" fill="rgba(185,103,255,0.7)" fontFamily="monospace" fontWeight="bold" letterSpacing="2">YANYLIN</text>
          {/* Plate screws */}
          <circle cx="167" cy="246" r="1.5" fill="rgba(185,103,255,0.2)" />
          <circle cx="253" cy="246" r="1.5" fill="rgba(185,103,255,0.2)" />

          {/* === REAR PANEL DETAILS === */}
          {/* Reflectors */}
          <rect x="140" y="248" width="8" height="4" rx="1" fill="rgba(255,107,53,0.12)" />
          <rect x="272" y="248" width="8" height="4" rx="1" fill="rgba(255,107,53,0.12)" />
          {/* DMC badge */}
          <text x="210" y="220" textAnchor="middle" fontSize="6" fill="rgba(185,103,255,0.3)" fontFamily="monospace" letterSpacing="4">D M C</text>

          {/* === BODY SIDES GOING UP — angular DeLorean shape === */}
          <path d="M72 220 L52 175 L48 130 L48 105" stroke="#ff71ce" strokeWidth="1.5" />
          <path d="M348 220 L368 175 L372 130 L372 105" stroke="#ff71ce" strokeWidth="1.5" />
          {/* Body panel lines */}
          <path d="M72 238 L55 200" stroke="rgba(255,113,206,0.12)" strokeWidth="0.5" />
          <path d="M348 238 L365 200" stroke="rgba(255,113,206,0.12)" strokeWidth="0.5" />

          {/* === REAR WINDOW === */}
          <path d="M95 175 L95 115 Q105 98 135 88 L285 88 Q315 98 325 115 L325 175" stroke="#b967ff" strokeWidth="1.2" fill="rgba(80,60,120,0.06)" />
          {/* Inner window frame */}
          <path d="M100 170 L100 118 Q110 102 138 92 L282 92 Q310 102 320 118 L320 170" stroke="rgba(185,103,255,0.2)" strokeWidth="0.8" fill="none" />

          {/* === LOUVERS / BLINDS on rear window (DeLorean signature) === */}
          {[120, 128, 136, 144, 152, 160, 168].map(y => (
            <line key={y} x1="105" y1={y} x2="315" y2={y} stroke="rgba(185,103,255,0.12)" strokeWidth="0.8" />
          ))}

          {/* === ROOF === */}
          <path d="M95 115 Q105 85 135 72 L285 72 Q315 85 325 115" stroke="#ff71ce" strokeWidth="1.8" />
          {/* Roof top flat edge */}
          <line x1="145" y1="72" x2="275" y2="72" stroke="#ff71ce" strokeWidth="1.2" />
          {/* Roof reflection line */}
          <line x1="160" y1="75" x2="260" y2="75" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

          {/* === ROOF ANTENNA === */}
          <line x1="250" y1="72" x2="255" y2="55" stroke="rgba(185,103,255,0.2)" strokeWidth="0.8" />
          <circle cx="255" cy="54" r="1.5" fill="rgba(255,113,206,0.2)" />

          {/* === EXHAUST PIPES / GLOW === */}
          <ellipse cx="120" cy="268" rx="8" ry="4" fill="rgba(1,205,254,0.1)" stroke="rgba(1,205,254,0.15)" strokeWidth="0.6" />
          <ellipse cx="300" cy="268" rx="8" ry="4" fill="rgba(1,205,254,0.1)" stroke="rgba(1,205,254,0.15)" strokeWidth="0.6" />
          {/* Exhaust haze */}
          <ellipse cx="120" cy="278" rx="15" ry="6" fill="rgba(1,205,254,0.04)" />
          <ellipse cx="300" cy="278" rx="15" ry="6" fill="rgba(1,205,254,0.04)" />

          {/* === SIDE MIRRORS (peeking out) === */}
          <path d="M48 120 L35 118 L32 125 L45 126" stroke="rgba(255,113,206,0.2)" strokeWidth="1" fill="rgba(200,200,220,0.03)" />
          <path d="M372 120 L385 118 L388 125 L375 126" stroke="rgba(255,113,206,0.2)" strokeWidth="1" fill="rgba(200,200,220,0.03)" />

          {/* === SURFACE PANEL LINES (body detail) === */}
          <line x1="72" y1="235" x2="348" y2="235" stroke="rgba(255,113,206,0.06)" strokeWidth="0.5" />
          <line x1="135" y1="208" x2="135" y2="258" stroke="rgba(255,113,206,0.04)" strokeWidth="0.5" />
          <line x1="285" y1="208" x2="285" y2="258" stroke="rgba(255,113,206,0.04)" strokeWidth="0.5" />

          {/* === FLUX CAPACITOR GLOW (through rear window, subtle) === */}
          <circle cx="210" cy="140" r="8" fill="rgba(1,205,254,0.04)" />
          <path d="M204 140 L210 130 L216 140" stroke="rgba(1,205,254,0.08)" strokeWidth="0.5" fill="none" />
          <path d="M204 140 L216 140" stroke="rgba(1,205,254,0.06)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Scan lines */}
      <div className="vw-scanlines" />

      {/* Checkerboard floor accent */}
      <div className="vw-checker" />
    </>
  )
}

/* ============================================================
   ATOMIC — Fallout Pip-Boy terminal interface
   ============================================================ */
function AtomicOverlay() {
  return (
    <>
      {/* CRT scanlines */}
      <div className="pipboy-scanlines" />

      {/* CRT vignette */}
      <div className="pipboy-vignette" />

      {/* Pip-Boy terminal frame — top-right */}
      <div className="pipboy-terminal">
        <svg width="380" height="480" viewBox="0 0 380 480" fill="none">
          {/* Outer frame */}
          <rect x="2" y="2" width="376" height="476" rx="8" stroke="rgba(68,219,94,0.2)" strokeWidth="2" fill="rgba(10,20,10,0.06)" />
          <rect x="8" y="8" width="364" height="464" rx="5" stroke="rgba(68,219,94,0.1)" strokeWidth="1" fill="none" />

          {/* Name centered */}
          <text x="190" y="245" textAnchor="middle" fontSize="18" fontFamily="monospace" fill="rgba(68,219,94,0.5)" letterSpacing="6">YAN JUN LIN</text>

          {/* Blinking cursor */}
          <rect x="283" y="234" width="8" height="14" fill="rgba(68,219,94,0.3)" className="pipboy-cursor" />

          {/* Corner decorations */}
          <path d="M15 15 L30 15 L30 18 L18 18 L18 30 L15 30 Z" fill="rgba(68,219,94,0.1)" />
          <path d="M365 15 L350 15 L350 18 L362 18 L362 30 L365 30 Z" fill="rgba(68,219,94,0.1)" />
          <path d="M15 465 L30 465 L30 462 L18 462 L18 450 L15 450 Z" fill="rgba(68,219,94,0.1)" />
          <path d="M365 465 L350 465 L350 462 L362 462 L362 450 L365 450 Z" fill="rgba(68,219,94,0.1)" />
        </svg>
      </div>

      {/* Radiation symbol — bottom left */}
      <div className="atom-radiation">
        <svg width="120" height="120" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="8" fill="rgba(68,219,94,0.1)" />
          <path d="M40 8 A32 32 0 0 1 67.7 56 L48 47 A12 12 0 0 0 40 28 Z" fill="rgba(68,219,94,0.06)" />
          <path d="M67.7 56 A32 32 0 0 1 12.3 56 L32 47 A12 12 0 0 0 48 47 Z" fill="rgba(68,219,94,0.06)" />
          <path d="M12.3 56 A32 32 0 0 1 40 8 L40 28 A12 12 0 0 0 32 47 Z" fill="rgba(68,219,94,0.06)" />
        </svg>
      </div>

      {/* Warning stripes */}
      <div className="atom-warning-stripe atom-warning-top" />
      <div className="atom-warning-stripe atom-warning-bottom" />
    </>
  )
}

/* ============================================================
   FLUID — manuscript, profile pic, oscillating bubbles, flow, PIV, vortices
   ============================================================ */
function FluidOverlay() {
  // PIV particles
  const pivParticles = useMemo(() =>
    Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1.5 + Math.random() * 2.5,
      delay: Math.random() * 10,
      duration: 4 + Math.random() * 8,
      drift: -30 + Math.random() * 60,
    })), [])

  return (
    <>
      {/* Research manuscript */}
      <div className="fluid-manuscript">
        <svg width="260" height="340" viewBox="0 0 260 340" fill="none">
          {/* Paper */}
          <rect x="2" y="2" width="256" height="336" rx="3" fill="rgba(6,182,212,0.03)" stroke="rgba(6,182,212,0.12)" strokeWidth="1.5" />
          {/* Header line */}
          <line x1="20" y1="30" x2="240" y2="30" stroke="rgba(6,182,212,0.06)" strokeWidth="0.5" />
          {/* Journal name */}
          <text x="130" y="22" textAnchor="middle" fontSize="7" fontFamily="serif" fill="rgba(6,182,212,0.35)" fontStyle="italic" letterSpacing="1">Droplet (Wiley)</text>
          {/* Title */}
          <text x="130" y="50" textAnchor="middle" fontSize="8.5" fontFamily="serif" fontWeight="bold" fill="rgba(6,182,212,0.5)">Acoustic-Driven Surface Cleaning</text>
          <text x="130" y="63" textAnchor="middle" fontSize="8.5" fontFamily="serif" fontWeight="bold" fill="rgba(6,182,212,0.5)">with Millimeter-Sized Bubbles at</text>
          <text x="130" y="76" textAnchor="middle" fontSize="8.5" fontFamily="serif" fontWeight="bold" fill="rgba(6,182,212,0.5)">Translational Resonance</text>
          {/* Authors */}
          <text x="130" y="94" textAnchor="middle" fontSize="8" fontFamily="serif" fill="rgba(6,182,212,0.4)">Yan Jun Lin, Zhipeng Liu, Sunghwan Jung</text>
          <line x1="70" y1="100" x2="190" y2="100" stroke="rgba(6,182,212,0.06)" strokeWidth="0.5" />
          {/* Abstract */}
          <text x="20" y="118" fontSize="7" fontFamily="serif" fontWeight="bold" fill="rgba(6,182,212,0.2)">Abstract</text>
          {/* Fake text lines for abstract */}
          {Array.from({ length: 6 }, (_, i) => (
            <rect key={i} x="20" y={126 + i * 10} width={200 + (i % 3) * 15 - i * 5} height="3" rx="1" fill="rgba(6,182,212,0.06)" />
          ))}
          {/* Section header */}
          <text x="20" y="210" fontSize="7" fontFamily="serif" fontWeight="bold" fill="rgba(6,182,212,0.18)">1. Introduction</text>
          {/* More fake text */}
          {Array.from({ length: 8 }, (_, i) => (
            <rect key={`b${i}`} x="20" y={220 + i * 9} width={180 + (i % 4) * 18 - i * 3} height="2.5" rx="1" fill="rgba(6,182,212,0.04)" />
          ))}
          {/* Figure placeholder */}
          <rect x="50" y="300" width="160" height="25" rx="2" fill="none" stroke="rgba(6,182,212,0.08)" strokeWidth="0.5" strokeDasharray="4 2" />
          <text x="130" y="316" textAnchor="middle" fontSize="6" fontFamily="serif" fill="rgba(6,182,212,0.18)" fontStyle="italic">Fig. 1: Bubble translational resonance</text>
        </svg>
      </div>

      {/* Oscillating bubbles — deforming ellipses */}
      <div className="fluid-oscbubble fluid-oscbubble-1" />
      <div className="fluid-oscbubble fluid-oscbubble-2" />
      <div className="fluid-oscbubble fluid-oscbubble-3" />

      {/* Laminar flow lines — smooth parallel */}
      <svg className="fluid-laminar" viewBox="0 0 200 600" preserveAspectRatio="none">
        {Array.from({ length: 12 }, (_, i) => {
          const y = 30 + i * 45
          return (
            <path
              key={i}
              className="fluid-flow-line"
              d={`M0,${y} Q50,${y - 5} 100,${y} Q150,${y + 5} 200,${y}`}
              stroke="rgba(6,182,212,0.2)"
              strokeWidth="1.2"
              fill="none"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          )
        })}
      </svg>

      {/* Turbulent flow region */}
      <svg className="fluid-turbulent" viewBox="0 0 300 200" preserveAspectRatio="none">
        <path className="fluid-turb-line fluid-turb-1"
          d="M0,100 C30,60 60,140 90,80 C120,20 150,160 180,100 C210,40 240,150 270,90 L300,100"
          stroke="rgba(6,182,212,0.25)" strokeWidth="1.8" fill="none" />
        <path className="fluid-turb-line fluid-turb-2"
          d="M0,110 C25,70 55,150 85,90 C115,30 145,170 175,110 C205,50 235,160 265,100 L300,110"
          stroke="rgba(14,165,233,0.2)" strokeWidth="1.2" fill="none" />
        <path className="fluid-turb-line fluid-turb-3"
          d="M0,90 C35,50 65,130 95,70 C125,10 155,150 185,90 C215,30 245,140 275,80 L300,90"
          stroke="rgba(6,182,212,0.18)" strokeWidth="1.2" fill="none" />
      </svg>

      {/* Vortex spirals */}
      <div className="fluid-vortex fluid-vortex-1">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60,60 m0,-40 a40,40 0 1,1 -1,0" stroke="rgba(6,182,212,0.18)" strokeWidth="1.2" fill="none" />
          <path d="M60,60 m0,-30 a30,30 0 1,1 -1,0" stroke="rgba(6,182,212,0.22)" strokeWidth="1.2" fill="none" />
          <path d="M60,60 m0,-20 a20,20 0 1,1 -1,0" stroke="rgba(6,182,212,0.26)" strokeWidth="1.2" fill="none" />
          <path d="M60,60 m0,-10 a10,10 0 1,1 -1,0" stroke="rgba(6,182,212,0.3)" strokeWidth="1.2" fill="none" />
          <circle cx="60" cy="60" r="3" fill="rgba(6,182,212,0.35)" />
        </svg>
      </div>
      <div className="fluid-vortex fluid-vortex-2">
        <svg width="90" height="90" viewBox="0 0 120 120" fill="none">
          <path d="M60,60 m0,-40 a40,40 0 1,0 1,0" stroke="rgba(14,165,233,0.16)" strokeWidth="1.2" fill="none" />
          <path d="M60,60 m0,-30 a30,30 0 1,0 1,0" stroke="rgba(14,165,233,0.2)" strokeWidth="1.2" fill="none" />
          <path d="M60,60 m0,-20 a20,20 0 1,0 1,0" stroke="rgba(14,165,233,0.24)" strokeWidth="1.2" fill="none" />
          <circle cx="60" cy="60" r="3" fill="rgba(14,165,233,0.3)" />
        </svg>
      </div>

      {/* PIV particles */}
      {pivParticles.map((p, i) => (
        <div
          key={i}
          className="fluid-piv"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--drift': `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* Velocity arrows */}
      <svg className="fluid-arrows" viewBox="0 0 400 300" preserveAspectRatio="none">
        {Array.from({ length: 8 }, (_, i) => {
          const y = 30 + i * 35
          const len = 20 + Math.sin(i * 0.8) * 15
          return (
            <g key={i} opacity="0.25">
              <line x1={50} y1={y} x2={50 + len} y2={y} stroke="#06b6d4" strokeWidth="1.8" />
              <polygon points={`${50 + len},${y - 3} ${50 + len + 6},${y} ${50 + len},${y + 3}`} fill="#06b6d4" />
              <line x1={150} y1={y} x2={150 + len * 1.2} y2={y} stroke="#06b6d4" strokeWidth="1.8" />
              <polygon points={`${150 + len * 1.2},${y - 3} ${150 + len * 1.2 + 6},${y} ${150 + len * 1.2},${y + 3}`} fill="#06b6d4" />
            </g>
          )
        })}
      </svg>

      {/* Streamlines around a body */}
      <svg className="fluid-streamlines" viewBox="0 0 400 200" preserveAspectRatio="none">
        <circle cx="200" cy="100" r="25" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="2" />
        {[-40, -25, -10, 10, 25, 40].map((offset, i) => (
          <path key={i}
            d={`M0,${100 + offset} Q100,${100 + offset} 170,${100 + offset * 0.3} Q200,${100} 230,${100 + offset * 0.3} Q300,${100 + offset * 1.5} 400,${100 + offset * 1.8}`}
            stroke="rgba(6,182,212,0.15)" strokeWidth="1.2" fill="none"
            className="fluid-streamline"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </>
  )
}

/* ============================================================
   MAIN OVERLAY
   ============================================================ */
export default function ThemeOverlay() {
  const { theme } = useTheme()
  if (theme === 'light' || theme === 'dark') return null
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {theme === 'vaporwave' && <VaporwaveOverlay />}
      {theme === 'atomic' && <AtomicOverlay />}
      {theme === 'fluid' && <FluidOverlay />}
    </div>
  )
}
