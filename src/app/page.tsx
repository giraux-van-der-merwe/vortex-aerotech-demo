'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const directions = [
  {
    id: 'D1',
    name: 'The Field',
    href: '/d1',
    palette: ['#ecf96e', '#3f492a', '#bcc79d', '#faf9f6'],
    descriptor: 'Warm, grounded, nature-forward. Speaks directly to the farmer.',
    font: 'Bricolage Grotesque',
    fontFamily: 'var(--font-bricolage), serif',
    glow: '#ecf96e',
  },
  {
    id: 'D2',
    name: 'The Brand',
    href: '/d2',
    palette: ['#8B9271', '#FFF3A3', '#F5F3F0', '#181818'],
    descriptor: 'Editorial, premium, confident. A drone company with brand presence.',
    font: 'Rethink Sans',
    fontFamily: 'var(--font-rethink), sans-serif',
    glow: '#FFF3A3',
  },
  {
    id: 'D3',
    name: 'The Tech',
    href: '/d3',
    palette: ['#2C4128', '#A8C090', '#F2F0EB', '#1a1a1a'],
    descriptor: 'Bold, precise, technology-forward. Commands trust instantly.',
    font: 'Plus Jakarta Sans',
    fontFamily: 'var(--font-jakarta), sans-serif',
    glow: '#A8C090',
  },
]

export default function DirectionSelector() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: '#0e0e0e' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h1
          className="text-white text-3xl md:text-4xl font-light tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
        >
          Vortex Aerotech
        </h1>
        <p className="text-white/40 text-sm tracking-widest uppercase">
          Three visual directions for your approval. Select one to explore.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {directions.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.1 }}
          >
            <Link href={d.href} className="group block">
              <div
                className="rounded-2xl border border-white/10 p-6 flex flex-col gap-5 transition-all duration-300 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.03)' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = d.glow + '80'
                  el.style.transform = 'scale(1.02)'
                  el.style.boxShadow = `0 0 40px ${d.glow}20`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(255,255,255,0.1)'
                  el.style.transform = 'scale(1)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-bold">{d.id}</span>
                  <span className="text-white/20 text-xs">→</span>
                </div>

                <div>
                  <h2 className="text-white text-2xl font-bold mb-1" style={{ fontFamily: d.fontFamily }}>
                    {d.name}
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed">{d.descriptor}</p>
                </div>

                <div className="flex gap-2">
                  {d.palette.map((color, ci) => (
                    <div key={ci} className="h-6 flex-1 rounded" style={{ background: color }} />
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-white/20 text-xs uppercase tracking-widest mb-1">Heading font</p>
                  <p className="text-white/80 text-lg font-bold" style={{ fontFamily: d.fontFamily }}>
                    {d.font}
                  </p>
                </div>

                <div
                  className="text-sm font-bold tracking-widest uppercase px-4 py-3 text-center rounded-xl transition-all duration-200"
                  style={{ background: d.glow + '20', color: d.glow }}
                >
                  Explore →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
