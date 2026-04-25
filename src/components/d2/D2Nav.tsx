'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function D2Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const links = [
    { label: 'Home', href: '/d2' },
    { label: 'Services', href: '/d2/services' },
    { label: 'Contact', href: '/d2/contact' },
  ]

  return (
    <>
      <nav
        className="fixed top-8 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(245,243,240,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #DDD9D3' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <Link href="/d2">
            <span
              className="text-xl font-semibold tracking-tight"
              style={{ fontFamily: 'var(--font-rethink)', color: scrolled ? '#181818' : '#fff' }}
            >
              VORTEX AEROTECH
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-base font-semibold transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-rethink)',
                  color: scrolled ? '#181818' : 'rgba(255,255,255,0.85)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#8B9271')}
                onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? '#181818' : 'rgba(255,255,255,0.85)')}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/d2/contact"
              className="text-base font-bold px-6 py-3 rounded-[20px] transition-all duration-200"
              style={{ background: '#FFF3A3', color: '#3A4526', fontFamily: 'var(--font-rethink)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#8B9271'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#FFF3A3'; e.currentTarget.style.color = '#3A4526' }}
            >
              Get a Quote
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: scrolled ? '#181818' : '#fff' }}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col px-8 py-10" style={{ background: '#2C2C2A' }}>
          <div className="flex items-center justify-between mb-12">
            <span className="text-white text-xl font-semibold" style={{ fontFamily: 'var(--font-rethink)' }}>VORTEX AEROTECH</span>
            <button onClick={() => setOpen(false)} className="text-white"><X size={28} /></button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-rethink)' }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
