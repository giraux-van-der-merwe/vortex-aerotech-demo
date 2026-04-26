import Link from 'next/link'

export default function D4Footer() {
  return (
    <footer style={{ background: '#2C2C2C', fontFamily: 'var(--font-inter)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="text-lg mb-3" style={{ fontFamily: 'var(--font-source-serif)', color: '#fff', fontWeight: 400 }}>
              Vortex Aerotech
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Precision agricultural drone services across South Africa. SACAA licensed, POC certified, DJI T100 equipped.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Navigation</h4>
            <ul className="flex flex-col gap-3">
              {[['Home', '/d4'], ['Services', '/d4/services'], ['Contact', '/d4/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Contact</h4>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li>Hein: +27 84 555 8144</li>
              <li>Henk: +27 78 915 8120</li>
              <li><a href="mailto:admin@vortexaerotech.co.za" style={{ color: 'rgba(255,255,255,0.5)' }}>admin@vortexaerotech.co.za</a></li>
              <li>South Africa</li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Vortex Aerotech. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            SACAA Licensed · POC Certified · DJI Authorised
          </p>
        </div>
      </div>
    </footer>
  )
}
