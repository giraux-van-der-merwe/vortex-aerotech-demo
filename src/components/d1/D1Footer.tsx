import Link from 'next/link'

export default function D1Footer() {
  return (
    <footer style={{ background: '#3f492a', fontFamily: 'var(--font-dm-sans)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-bricolage)', color: '#fff' }}>
                VORTEX
              </span>
              <span className="text-2xl font-light tracking-tight ml-1" style={{ fontFamily: 'var(--font-bricolage)', color: 'rgba(255,255,255,0.6)' }}>
                AEROTECH
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Precision agricultural drone services across South Africa. SACAA licensed, POC certified, DJI T100 equipped.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: '#ecf96e' }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {[['Home', '/d1'], ['Services', '/d1/services'], ['Contact', '/d1/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ecf96e')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: '#ecf96e' }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <li>Hein: +27 84 555 8144</li>
              <li>Henk: +27 78 915 8120</li>
              <li>
                <a href="mailto:admin@vortexaerotech.co.za" style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ecf96e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                  admin@vortexaerotech.co.za
                </a>
              </li>
              <li>South Africa</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Vortex Aerotech. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Built for Vortex Aerotech
          </p>
        </div>
      </div>
    </footer>
  )
}
