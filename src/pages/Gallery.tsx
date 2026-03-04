import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useCanvasColors } from '../hooks/useThemeColors'

interface Photo {
  src: string
  alt: string
  tag: string
  objectPosition?: string
}

interface PhotoGroup {
  caption: string
  photos: Photo[]
}

// Science first, then sports/life
const groups: PhotoGroup[] = [
  {
    caption: 'Discovering a novel mode of resonance in bubbles',
    photos: [
      { src: '/gallery/bubbles-1.jpg', alt: 'Bubble research', tag: 'bubbles' },
      { src: '/gallery/bubbles-2.jpg', alt: 'Bubble research', tag: 'bubbles' },
      { src: '/gallery/bubbles-3.jpg', alt: 'Bubble research', tag: 'bubbles' },
      { src: '/gallery/bubbles-4.jpg', alt: 'Bubble research', tag: 'bubbles' },
    ],
  },
  {
    caption: 'Exploring the fluid physics of fungal hyphae',
    photos: [
      { src: '/gallery/fungi-1.jpg', alt: 'Fungal hygroscopy research', tag: 'fungi' },
      { src: '/gallery/fungi-2.jpg', alt: 'Fungal hygroscopy research', tag: 'fungi' },
      { src: '/gallery/fungi-3.png', alt: 'Fungal condensation micrograph', tag: 'fungi' },
      { src: '/gallery/fungi-4.png', alt: 'Fungal condensation micrograph', tag: 'fungi' },
    ],
  },
  {
    caption: 'Podium Talk at the Thousand Islands Fluid Dynamics Meeting, Canada',
    photos: [
      { src: '/gallery/tifdm-1.jpg', alt: 'Podium talk wide shot', tag: 'tifdm' },
      { src: '/gallery/tifdm-2.jpg', alt: 'Podium talk audience', tag: 'tifdm' },
      { src: '/gallery/tifdm-3.jpg', alt: 'Presenting rising bubble research', tag: 'tifdm' },
      { src: '/gallery/tifdm-4.jpg', alt: 'Presenting rising bubble research', tag: 'tifdm' },
    ],
  },
  {
    caption: 'Podium Talk at the American Physical Society Conference — Salt Lake City & Park City',
    photos: [
      { src: '/gallery/aps-1.jpg', alt: 'APS conference', tag: 'aps' },
      { src: '/gallery/aps-2.jpg', alt: 'APS conference', tag: 'aps' },
      { src: '/gallery/aps-3.jpg', alt: 'APS conference', tag: 'aps' },
      { src: '/gallery/aps-4.jpg', alt: 'APS conference', tag: 'aps' },
    ],
  },
  {
    caption: 'New York State Society of Orthopaedic Surgeons Annual Meeting',
    photos: [
      { src: '/gallery/nyssos-1.jpg', alt: 'NYSSOS annual meeting', tag: 'nyssos' },
      { src: '/gallery/nyssos-2.jpg', alt: 'NYSSOS annual meeting', tag: 'nyssos' },
      { src: '/gallery/nyssos-3.jpg', alt: 'NYSSOS annual meeting', tag: 'nyssos' },
      { src: '/gallery/nyssos-4.jpg', alt: 'NYSSOS annual meeting', tag: 'nyssos' },
    ],
  },
  // --- Sports & Life ---
  {
    caption: 'College Football',
    photos: [
      { src: '/gallery/football-4.jpg', alt: 'Cornell football players', tag: 'football', objectPosition: 'center 70%' },
      { src: '/gallery/football-1.jpg', alt: 'Cornell football', tag: 'football' },
      { src: '/gallery/football-2.jpg', alt: 'Cornell football helmets', tag: 'football' },
      { src: '/gallery/football-3.jpg', alt: 'Cornell football team running', tag: 'football' },
    ],
  },
  {
    caption: 'As a former wrestler, I coached wrestling at Beat the Streets',
    photos: [
      { src: '/gallery/wrestling-3.jpg', alt: 'Wrestling match', tag: 'wrestling' },
      { src: '/gallery/wrestling-4.jpg', alt: 'Wrestling match', tag: 'wrestling' },
      { src: '/gallery/wrestling-1.jpg', alt: 'Wrestling coaching', tag: 'wrestling' },
      { src: '/gallery/wrestling-2.jpg', alt: 'Wrestling coaching', tag: 'wrestling' },
    ],
  },
  {
    caption: 'Training with UFC World Champion Aljamain Sterling',
    photos: [
      { src: '/gallery/aljamain-sterling.jpg', alt: 'With Aljamain Sterling after training', tag: 'mma', objectPosition: 'center 60%' },
    ],
  },
  {
    caption: 'Country Music Performance',
    photos: [
      { src: '/gallery/country-3.jpg', alt: 'Country music performance', tag: 'music' },
      { src: '/gallery/country-1.jpg', alt: 'Country music performance', tag: 'music' },
      { src: '/gallery/country-2.jpg', alt: 'Country music performance', tag: 'music' },
      { src: '/gallery/country-4.jpg', alt: 'Country music performance', tag: 'music' },
    ],
  },
  {
    caption: 'High School Varsity Lacrosse',
    photos: [
      { src: '/gallery/lacrosse-1.jpg', alt: 'Lacrosse action shot', tag: 'lacrosse' },
      { src: '/gallery/lacrosse-3.jpg', alt: 'Lacrosse faceoff closeup', tag: 'lacrosse' },
      { src: '/gallery/lacrosse-2.jpg', alt: 'Lacrosse faceoff', tag: 'lacrosse' },
      { src: '/gallery/lacrosse-4.jpg', alt: 'Lacrosse on field', tag: 'lacrosse' },
    ],
  },
]

// Smooth animated background — reads canvas colors from CSS theme vars
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const progressRef = useRef(0)
  const smoothRef = useRef(0)
  const colors = useCanvasColors()
  const colorsRef = useRef(colors)
  colorsRef.current = colors

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      progressRef.current = docHeight > 0 ? scrollTop / docHeight : 0
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  useEffect(() => {
    const draw = (time: number) => {
      const canvas = canvasRef.current
      if (!canvas) { animRef.current = requestAnimationFrame(draw); return }
      const ctx = canvas.getContext('2d')
      if (!ctx) { animRef.current = requestAnimationFrame(draw); return }

      smoothRef.current += (progressRef.current - smoothRef.current) * 0.04

      const c = colorsRef.current
      const W = canvas.width
      const H = canvas.height
      const t = time * 0.0003
      const p = smoothRef.current

      // Base color: interpolate from base to end based on scroll
      const baseR = c.baseR + p * (c.endR - c.baseR)
      const baseG = c.baseG + p * (c.endG - c.baseG)
      const baseB = c.baseB + p * (c.endB - c.baseB)
      ctx.fillStyle = `rgb(${baseR},${baseG},${baseB})`
      ctx.fillRect(0, 0, W, H)

      // Flowing wave layers
      const layers = 5
      for (let l = 0; l < layers; l++) {
        const lp = l / layers
        const speed = 0.3 + lp * 0.7
        const amplitude = 30 + lp * 20
        const yBase = H * 0.15 + H * 0.75 * lp

        const r = (c.waveStartR + lp * 30) + ((c.waveEndR + lp * 15) - (c.waveStartR + lp * 30)) * p
        const g = (c.waveStartG + lp * 20) + ((c.waveEndG + lp * 10) - (c.waveStartG + lp * 20)) * p
        const b = (c.waveStartB + lp * 30) + ((c.waveEndB + lp * 10) - (c.waveStartB + lp * 30)) * p
        const alpha = 0.08 + lp * 0.06

        ctx.beginPath()
        ctx.moveTo(0, H)
        for (let x = 0; x <= W; x += 6) {
          const nx = x / W
          const y = yBase
            + Math.sin(nx * 3 + t * speed + l * 1.3) * amplitude
            + Math.sin(nx * 5 - t * speed * 0.7 + l * 0.8) * amplitude * 0.5
            + Math.cos(nx * 2 + t * speed * 0.4 + l * 2.1) * amplitude * 0.3
          ctx.lineTo(x, y)
        }
        ctx.lineTo(W, H)
        ctx.closePath()
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`
        ctx.fill()
      }

      // Particles
      for (let i = 0; i < 30; i++) {
        const seed = i * 137.508
        const px = (seed * 7.3 + t * (15 + i * 2)) % W
        const drift = Math.sin(t * 0.5 + i * 0.7) * 20
        const py = H - ((seed * 3.7 + t * (20 + i * 3)) % (H * 1.2)) + drift
        if (py < -20 || py > H + 20) continue

        const size = 1.5 + (i % 5) * 0.8
        const pAlpha = 0.15 + Math.sin(t * 2 + i) * 0.1
        const pr = c.particleR + p * (255 - c.particleR) * 0.3
        const pg = c.particleG - p * c.particleG * 0.3
        const pb = c.particleB - p * c.particleB * 0.5

        ctx.beginPath()
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${pr},${pg},${pb},${pAlpha})`
        ctx.fill()
      }

      // Caustics / heat shimmer — use particle colors for glow
      for (let i = 0; i < 4; i++) {
        const cx = W * (0.15 + 0.2 * i + Math.sin(t * 0.3 + i * 2) * 0.08)
        const cy = H * (0.3 + Math.cos(t * 0.2 + i * 1.5) * 0.25)
        const radius = 80 + Math.sin(t + i) * 40
        const gr = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)

        if (p < 0.5) {
          gr.addColorStop(0, `rgba(${c.particleR},${c.particleG},${c.particleB},${0.04 * (1 - p * 2)})`)
          gr.addColorStop(1, `rgba(${c.particleR},${c.particleG},${c.particleB},0)`)
        } else {
          const mp = (p - 0.5) * 2
          gr.addColorStop(0, `rgba(${c.waveEndR},${c.waveEndG},${c.waveEndB},${0.06 * mp})`)
          gr.addColorStop(1, `rgba(${c.waveEndR},${c.waveEndG},${c.waveEndB},0)`)
        }
        ctx.fillStyle = gr
        ctx.fillRect(0, 0, W, H)
      }

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

function GalleryRow({ group, index }: { group: PhotoGroup; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const transformRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const direction = index % 2 === 0 ? 1 : -1
  const speed = 0.06 + (index % 3) * 0.02

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let raf = 0
    const update = () => {
      if (!ref.current || !transformRef.current) return
      const rect = ref.current.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      const dist = (center - viewCenter) / window.innerHeight
      const target = dist * direction * speed * 300
      offsetRef.current += (target - offsetRef.current) * 0.08
      transformRef.current.style.transform = `translateX(${offsetRef.current}px)`
      raf = requestAnimationFrame(update)
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [visible, direction, speed])

  return (
    <div ref={ref} className="relative">
      <div ref={transformRef} style={{ willChange: 'transform' }}>
        {/* Group Caption */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-white/10"></div>
          <h2 className="text-sm font-normal text-white/50 uppercase tracking-widest whitespace-nowrap">
            {group.caption}
          </h2>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {/* Photo Grid */}
        {group.photos.length === 1 ? (
          <div className="flex justify-center">
            <div className="relative overflow-hidden aspect-[4/3] rounded-sm" style={{ width: '32.5%' }}>
              <div className="border border-white/10 overflow-hidden h-full rounded-sm">
                <img
                  src={group.photos[0].src}
                  alt={group.photos[0].alt}
                  className="w-full h-full object-cover"
                  style={group.photos[0].objectPosition ? { objectPosition: group.photos[0].objectPosition } : undefined}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {group.photos.map((photo, pi) => (
              <div
                key={pi}
                className="relative overflow-hidden aspect-[4/3] rounded-sm"
              >
                <div className="border border-white/10 overflow-hidden h-full rounded-sm">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="relative min-h-screen -mx-4 sm:-mx-6 lg:-mx-8 -my-20 px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <Helmet>
        <title>Gallery — Yany Lin</title>
        <meta name="description" content="Photos from Yany Lin's research, conferences, sports, and life — bubble experiments, fluid dynamics talks, football, wrestling, and more." />
        <link rel="canonical" href="https://yanyliny.github.io/gallery" />
      </Helmet>

      <AnimatedBackground />

      <div className="relative max-w-6xl mx-auto" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-block">
            <h1 className="text-6xl font-extralight text-white mb-4 tracking-tight">Gallery</h1>
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
        </div>

        {/* Photo Groups */}
        <div className="space-y-28">
          {groups.map((group, gi) => (
            <GalleryRow key={gi} group={group} index={gi} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 mb-16">
          <div className="text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
