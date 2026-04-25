import Link from 'next/link'

export default function D3Footer() {
  return (
    <footer style={{ background: '#111110', fontFamily: 'var(--font-jakarta)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: '#A8C090' }} />
              <span className="font-bold text-lg tracking-tight" style={{ color: '#F0EEE8' }}>VORTEX AEROTECH</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(240,238,232,0.4)' }}>
              Precision agricultural drone services across South Africa. SACAA licensed, POC certified, DJI T100 equipped.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: '#A8C090' }}>Navigation</h4>
            <ul className="flex flex-col gap-3">
              {[['Home', '/d3'], ['Services', '/d3/services'], ['Contact', '/d3/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors" style={{ color: 'rgba(240,238,232,0.4)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F0EEE8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,232,0.4)')}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: '#A8C090' }}>Contact</h4>
            <ul className="flex flex-col gap-3 text-sm" style={{ color: 'rgba(240,238,232,0.4)' }}>
              <li>Hein: +27 84 555 8144</li>
              <li>Henk: +27 78 915 8120</li>
              <li><a href="mailto:admin@vortexaerotech.co.za" style={{ color: 'rgba(240,238,232,0.4)' }}>admin@vortexaerotech.co.za</a></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between border-t pt-8" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(240,238,232,0.25)' }}>© {new Date().getFullYear()} Vortex Aerotech · SACAA Licensed · POC Certified</p>
        </div>
      </div>
      <div className="h-0.5 w-full" style={{ background: '#A8C090' }} />
    </footer>
  )
}
