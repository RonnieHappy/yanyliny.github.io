import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto page-enter">
      <Helmet>
        <title>Yany Lin — Researcher | Cornell University</title>
        <meta name="description" content="Yany Lin's research spans experimental fluid mechanics, medical ethics, and orthopaedic outcomes — from acoustic bubble dynamics to transplant allocation frameworks." />
        <link rel="canonical" href="https://yanyliny.github.io/" />
      </Helmet>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-24 mt-16 fade-in">
        {/* Corner-stacked headshot */}
        <div className="relative w-56 h-64 flex-shrink-0 group">
          <div
            className="absolute top-0 left-0 w-48 h-56 rounded-sm transition-transform duration-700 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]"
            style={{ border: '1px solid var(--border)' }}
          />
          <div
            className="absolute top-3 left-3 w-48 h-56 rounded-sm transition-transform duration-700 group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]"
            style={{ background: `linear-gradient(to bottom right, var(--bg-secondary), var(--bg-primary))` }}
          />
          <div className="absolute top-6 left-6 w-48 h-56 rounded-sm overflow-hidden shadow-lg transition-all duration-700 group-hover:shadow-2xl group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
            <img
              src="/headshot.png"
              alt="Yany Lin"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Name and title */}
        <div className="text-center md:text-left">
          <div className="relative inline-block">
            <div className="absolute -top-6 -left-6 w-16 h-16 border-t border-l opacity-40" style={{ borderColor: 'var(--border)' }} />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b border-r opacity-40" style={{ borderColor: 'var(--border)' }} />
            <div className="relative px-8 py-8">
              <h1 className="text-7xl font-extralight mb-4 tracking-tighter">
                Yany Lin
              </h1>
              <div className="h-px shimmer" style={{ background: `linear-gradient(to right, var(--divider), var(--border), transparent)` }} />
              <p className="text-xl font-light tracking-wide mt-6" style={{ color: 'var(--text-secondary)' }}>
                BA, Cornell University
              </p>
              <a
                href="mailto:yl2884@cornell.edu"
                className="text-sm font-light tracking-wide mt-2 block no-underline transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                yl2884@cornell.edu
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <RevealCard>
        <div className="max-w-3xl mx-auto mb-24">
          <div className="glass p-12 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px" style={{ background: `linear-gradient(to right, transparent, var(--border), transparent)` }} />
            <p className="text-lg leading-relaxed text-center font-light" style={{ color: 'var(--text-secondary)' }}>
              My research spans experimental fluid mechanics, medical ethics, and orthopaedic outcomes,
              exploring everything from acoustic bubble dynamics to transplant allocation frameworks.
              I also maintain zenithvintage.org, an archive of old music I'm collecting and organizing.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: `linear-gradient(to right, transparent, var(--border), transparent)` }} />
          </div>
        </div>
      </RevealCard>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {[
          { to: '/projects', title: 'Projects', desc: 'Research in fluid mechanics, medical ethics, and biomechanics', cta: 'View work', internal: true },
          { to: '/gallery', title: 'Gallery', desc: 'Photos from life, sports, and more', cta: 'View photos', internal: true },
          { to: 'https://zenithvintage.org', title: 'ZenithVintage', desc: 'Archive of old music, collected and organized', cta: 'Visit archive', internal: false },
          { to: 'https://www.youtube.com/@TheYanyLin', title: 'YouTube', desc: 'Videos and visual content', cta: 'Watch', internal: false },
        ].map((card, i) => (
          <RevealCard key={card.title} delay={i * 0.1}>
            {card.internal ? (
              <Link
                to={card.to}
                className="group relative no-underline fancy-card fancy-card-hover overflow-hidden p-10 block"
              >
                <div className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `linear-gradient(to right, transparent, var(--border), transparent)` }} />
                <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full" style={{ background: `linear-gradient(to bottom right, var(--accent-subtle), transparent)` }} />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="w-12 h-px group-hover:w-20 transition-all duration-500" style={{ backgroundColor: 'var(--text-primary)' }} />
                    <span className="text-[10px] font-light tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: 'var(--text-muted)' }}>0{i + 1}</span>
                  </div>
                  <h2 className="text-3xl font-extralight mb-4 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                    {card.title}
                  </h2>
                  <p className="font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {card.desc}
                  </p>
                  <div className="mt-6 text-sm transition-all duration-500 group-hover:translate-x-1" style={{ color: 'var(--text-muted)' }}>
                    {card.cta} →
                  </div>
                </div>
              </Link>
            ) : (
              <a
                href={card.to}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative no-underline fancy-card fancy-card-hover overflow-hidden p-10 block"
              >
                <div className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `linear-gradient(to right, transparent, var(--border), transparent)` }} />
                <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full" style={{ background: `linear-gradient(to bottom right, var(--accent-subtle), transparent)` }} />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="w-12 h-px group-hover:w-20 transition-all duration-500" style={{ backgroundColor: 'var(--text-primary)' }} />
                    <span className="text-[10px] font-light tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: 'var(--text-muted)' }}>0{i + 1}</span>
                  </div>
                  <h2 className="text-3xl font-extralight mb-4 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                    {card.title}
                  </h2>
                  <p className="font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {card.desc}
                  </p>
                  <div className="mt-6 text-sm transition-all duration-500 group-hover:translate-x-1" style={{ color: 'var(--text-muted)' }}>
                    {card.cta} →
                  </div>
                </div>
              </a>
            )}
          </RevealCard>
        ))}
      </div>
    </div>
  )
}
