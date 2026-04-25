'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function D1Nav() {
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
    { label: 'Home', href: '/d1' },
    { label: 'Services', href: '/d1/services' },
    { label: 'Contact', href: '/d1/contact' },
  ]

  return (
    <>
      <nav
        className="fixed top-8 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(250,249,246,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #DFDEDC' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <Link href="/d1" className="flex items-baseline gap-1" style={{ color: scrolled ? '#3f492a' : '#fff' }}>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-bricolage)', color: scrolled ? '#3f492a' : '#fff' }}
            >
              VORTEX
            </span>
            <span
              className="text-xl font-light tracking-tight"
              style={{ fontFamily: 'var(--font-bricolage)', color: scrolled ? '#3f492a' : 'rgba(255,255,255,0.75)' }}
            >
              AEROTECH
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-all duration-200 relative group"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  color: scrolled ? '#3f492a' : 'rgba(255,255,255,0.85)',
                }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: '#ecf96e' }}
                />
              </Link>
            ))}
            <Link
              href="/d1/contact"
              className="text-xs font-bold uppercase tracking-[0.12em] px-5 py-2.5 transition-all duration-200"
              style={{
                background: '#ecf96e',
                color: '#3f492a',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ color: scrolled ? '#3f492a' : '#fff' }}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col px-8 py-10"
          style={{ background: '#3f492a' }}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="text-white text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-bricolage)' }}>
              VORTEX AEROTECH
            </span>
            <button onClick={() => setOpen(false)} className="text-white">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-3xl font-bold"
                style={{ fontFamily: 'var(--font-bricolage)', color: '#ecf96e' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
