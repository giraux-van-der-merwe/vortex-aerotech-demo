'use client'
import Link from 'next/link'
import D4Footer from '@/components/d4/D4Footer'
import ScrollReveal from '@/components/shared/ScrollReveal'

export default function D4Home() {
  return (
    <main style={{ fontFamily: 'var(--font-inter)', color: '#2C2C2C' }}>

      {/* ── HERO ── */}
      <section className="pt-24 min-h-[580px] flex" style={{ background: '#F4F6F3' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 md:grid-cols-5 items-center gap-0">

          {/* Left content */}
          <div className="md:col-span-3 py-16 md:pr-12">
            <p
              className="text-xs font-semibold uppercase tracking-[0.12em] mb-6"
              style={{ color: '#5A5A5A' }}
            >
              SACAA Licensed · POC Certified · DJI T100
            </p>
            <h1
              className="mb-6"
              style={{
                fontFamily: 'var(--font-source-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#1E4D2B',
                lineHeight: 1.15,
              }}
            >
              Trusted Aerial Application for South African Farmers.
            </h1>
            <p className="text-base mb-8 max-w-xl" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              Vortex Aerotech is a SACAA licensed aerial application company operating DJI T100 agricultural drones across South Africa. We provide crop spraying and granular spreading services to commercial farmers who require precision, compliance, and documented results.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/d4/contact"
                className="text-xs font-semibold uppercase tracking-[0.08em] px-7 py-3 transition-colors duration-150"
                style={{ background: '#1E4D2B', color: '#fff' }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = '#2E6B3E')}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = '#1E4D2B')}
              >
                Request a Quote
              </Link>
              <a
                href="tel:+27845558144"
                className="text-sm"
                style={{ color: '#1E4D2B' }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Call Hein: +27 84 555 8144
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden md:block md:col-span-2 self-stretch">
            <div
              className="w-full h-full min-h-[400px]"
              style={{ background: 'linear-gradient(160deg, #1E4D2B 0%, #2E6B3E 60%, #3d8a52 100%)' }}
            />
          </div>
        </div>
      </section>

      {/* ── CREDENTIAL STRIP ── */}
      <section className="py-8" style={{ background: '#1E4D2B' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x" style={{ divideColor: 'rgba(255,255,255,0.15)' } as React.CSSProperties}>
            {[
              { label: 'SACAA Licensed', sub: 'Civil Aviation Authority' },
              { label: 'POC Certified', sub: 'Aerial Applicators' },
              { label: 'DJI T100', sub: 'Latest Technology' },
              { label: 'NIC 35 Support', sub: 'Twin 500L Mixing Silos' },
            ].map((item) => (
              <div key={item.label} className="md:px-8 first:pl-0 last:pr-0">
                <p className="font-semibold text-sm text-white mb-0.5">{item.label}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <ScrollReveal>
            <h2
              className="mb-6"
              style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
            >
              About Vortex Aerotech
            </h2>
            <p className="text-base mb-4" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              Vortex Aerotech was established to address a clear gap in South African commercial agriculture: the need for professional, compliant, and documented aerial application services. We are not a general drone company that has added agriculture as a sideline — aerial application is our entire business.
            </p>
            <p className="text-base mb-4" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              Our pilots hold valid SACAA Remote Pilot Licences and our applicators carry POC Aerial Applicator Certification. Every flight generates a compliance record: GPS coverage maps, product usage logs, and SACAA documentation delivered to the farmer within 24 hours.
            </p>
            <p className="text-base mb-10" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              We operate DJI T100 agricultural drones — the most capable commercial spray platform available — supported by NIC 35 trailers with twin 500-litre mixing silos for continuous field operation without downtime.
            </p>

            {/* Timeline */}
            <div className="border-t" style={{ borderColor: '#D8DDD6' }}>
              {[
                { year: '2018', text: 'Vortex Aerotech established — first commercial agricultural drone operations in the region' },
                { year: '2019', text: 'SACAA Remote Pilot Licence obtained for all operational pilots' },
                { year: '2021', text: 'POC Aerial Applicator Certification achieved — full regulatory compliance for pesticide application' },
                { year: '2024', text: 'DJI T100 fleet introduced — current generation technology, 100ha/hr coverage rate' },
              ].map((m) => (
                <div key={m.year} className="flex gap-6 py-4 border-b" style={{ borderColor: '#D8DDD6' }}>
                  <span className="text-sm font-semibold flex-shrink-0 w-10" style={{ color: '#C49A2A' }}>{m.year}</span>
                  <p className="text-sm" style={{ color: '#5A5A5A', lineHeight: 1.6 }}>{m.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {/* Contact block */}
            <div className="p-6 mb-8 border" style={{ background: '#F4F6F3', borderColor: '#D8DDD6' }}>
              <h3 className="text-base font-semibold mb-4" style={{ color: '#1E4D2B' }}>Contact Details</h3>
              <table className="w-full text-sm" style={{ color: '#5A5A5A' }}>
                <tbody>
                  {[
                    ['Hein (Operations)', '+27 84 555 8144'],
                    ['Henk (Field)', '+27 78 915 8120'],
                    ['Email', 'admin@vortexaerotech.co.za'],
                    ['Area of Operation', 'South Africa'],
                    ['Office Hours', 'Mon–Fri, 07:00–17:00'],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b" style={{ borderColor: '#D8DDD6' }}>
                      <td className="py-2 pr-4 font-medium text-xs uppercase tracking-wide" style={{ color: '#5A5A5A', width: '40%' }}>{label}</td>
                      <td className="py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Why aerial */}
            <h3 className="text-base font-semibold mb-5" style={{ color: '#1E4D2B' }}>Why Aerial Application?</h3>
            <ul className="flex flex-col gap-3">
              {[
                'No soil compaction — your field structure remains intact after every application',
                'Terrain-independent coverage — steep, wet, or inaccessible land is not a barrier',
                'Application windows respected — we mobilise faster than ground equipment',
                'Full documentation — GPS logs and compliance records on every job',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm" style={{ color: '#5A5A5A', lineHeight: 1.6 }}>
                  <span className="mt-0.5 flex-shrink-0" style={{ color: '#1E4D2B' }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20" style={{ background: '#F4F6F3' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="mb-12 text-center"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Crop Spraying',
                desc: 'Liquid application of pesticides, fungicides, and foliar nutrients at precise, calibrated rates. Our DJI T100 drones maintain a consistent spray height above the canopy regardless of terrain, delivering uniform droplet distribution across the entire field.',
                items: ['Pesticide application', 'Foliar nutrition', 'Fungicide treatment', 'Herbicide application', 'Plant growth regulators'],
              },
              {
                title: 'Granular Spreading',
                desc: 'Granular weedicide, fertiliser, lime, and cover crop seed distributed at calibrated rates across your land. Aerial spreading eliminates the variability introduced by ground equipment fatigue, terrain changes, and mechanical inconsistency.',
                items: ['Granular weedicide spreading', 'Fertilizer application', 'Lime application', 'Cover crop seeding', 'Micro-nutrient top dressing'],
              },
            ].map((card) => (
              <ScrollReveal key={card.title}>
                <div
                  className="p-8 border bg-white transition-shadow duration-200"
                  style={{ borderColor: '#D8DDD6' }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)')}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                >
                  <h3
                    className="mb-4"
                    style={{ fontFamily: 'var(--font-source-serif)', fontSize: '1.375rem', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.3 }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm mb-6" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>{card.desc}</p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {card.items.map((item) => (
                      <li key={item} className="text-sm flex gap-2" style={{ color: '#2C2C2C' }}>
                        <span style={{ color: '#1E4D2B' }}>·</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/d4/services"
                    className="text-sm"
                    style={{ color: '#1E4D2B' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    Full service details →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AERIAL ── */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="mb-12"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
          >
            Why Aerial Application Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { num: '01', title: 'Coverage Rate', body: 'The DJI T100 covers up to 100 hectares per hour. Ground equipment operating at 12–15 ha/hr cannot match this throughput — meaning critical spray windows stay open long enough to matter.' },
              { num: '02', title: 'Zero Soil Compaction', body: 'Heavy ground rigs compact soil with every pass, reducing water infiltration and root depth over time. Aerial application leaves no tyre tracks, no compaction, and no long-term damage to your field.' },
              { num: '03', title: 'Spray Window Timing', body: 'Disease and pest pressure doesn\'t wait for equipment availability. We mobilise quickly and can cover large areas in a single day — before the window closes and the crop pays the price.' },
              { num: '04', title: 'Documented Compliance', body: 'Every Vortex Aerotech flight generates GPS coverage maps, product usage records, and SACAA compliance documentation. You receive a complete application report within 24 hours.' },
            ].map((fact) => (
              <ScrollReveal key={fact.num}>
                <div className="flex gap-6">
                  <span
                    className="text-4xl font-bold flex-shrink-0 leading-none mt-1"
                    style={{ fontFamily: 'var(--font-source-serif)', color: '#1E4D2B', opacity: 0.15 }}
                  >
                    {fact.num}
                  </span>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ fontSize: '1.1rem', color: '#1E4D2B' }}>{fact.title}</h3>
                    <p className="text-sm" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>{fact.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16" style={{ background: '#1E4D2B' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '45,000+', label: 'Hectares Sprayed' },
            { num: '8', label: 'Licensed Pilots' },
            { num: '6+', label: 'Years Operating' },
            { num: '98%', label: 'Client Satisfaction' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-bold mb-1 text-white"
                style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1 }}
              >
                {s.num}
              </p>
              <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EQUIPMENT ── */}
      <section className="py-20" style={{ background: '#F4F6F3' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="mb-12"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
          >
            Equipment &amp; Certification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'DJI T100 Agricultural Drone',
                rows: [
                  ['Tank Capacity', '100 litres'],
                  ['Spray Width', '16 metres'],
                  ['Coverage Rate', 'Up to 100 ha/hr'],
                  ['Application Volume', '1–50 L/ha'],
                  ['Spray Height', 'Auto terrain-follow'],
                  ['GPS Accuracy', 'Sub-metre RTK'],
                ],
              },
              {
                title: 'NIC 35 Support Trailer',
                rows: [
                  ['Mixing Silos', 'Twin 500L capacity'],
                  ['Operation', 'Fully self-contained'],
                  ['Reload Time', 'Under 10 minutes'],
                  ['Products', 'Liquid and granular'],
                  ['Calibration', 'Full on-board kit'],
                  ['Mobility', 'Farm road capable'],
                ],
              },
              {
                title: 'Pilot Certification',
                rows: [
                  ['Pilot Licence', 'SACAA RPL'],
                  ['Application', 'POC Certified'],
                  ['Insurance', 'Full coverage'],
                  ['Documentation', 'Post-flight reports'],
                  ['Compliance', 'SACAA records'],
                  ['Response', 'Same-day mobilisation'],
                ],
              },
            ].map((card) => (
              <ScrollReveal key={card.title}>
                <div className="bg-white border p-6" style={{ borderColor: '#D8DDD6' }}>
                  <h3 className="font-semibold mb-5 pb-4 border-b" style={{ fontSize: '1rem', color: '#1E4D2B', borderColor: '#D8DDD6' }}>
                    {card.title}
                  </h3>
                  <table className="w-full text-sm">
                    <tbody>
                      {card.rows.map(([label, value]) => (
                        <tr key={label} className="border-b last:border-0" style={{ borderColor: '#D8DDD6' }}>
                          <td className="py-2 pr-3 text-xs" style={{ color: '#5A5A5A', width: '45%' }}>{label}</td>
                          <td className="py-2 font-medium text-xs" style={{ color: '#2C2C2C' }}>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE TIMELINE ── */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="mb-12"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
          >
            Regulatory Track Record
          </h2>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-[4%] right-[4%] h-px" style={{ background: '#D8DDD6' }} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { year: '2018', title: 'Established', desc: 'Vortex Aerotech founded, first agricultural drone operations commenced in South Africa.' },
                { year: '2019', title: 'SACAA Licenced', desc: 'All operational pilots obtained valid SACAA Remote Pilot Licences. Full civil aviation compliance.' },
                { year: '2021', title: 'POC Certified', desc: 'Full POC Aerial Applicator Certification achieved. Licensed for pesticide and fertiliser aerial application.' },
                { year: '2024', title: 'DJI T100 Fleet', desc: 'Upgraded to DJI T100 — current generation technology. 100ha/hr coverage capability introduced.' },
              ].map((m) => (
                <ScrollReveal key={m.year}>
                  <div className="relative">
                    <p
                      className="text-2xl font-bold mb-3"
                      style={{ fontFamily: 'var(--font-source-serif)', color: '#C49A2A' }}
                    >
                      {m.year}
                    </p>
                    <p className="font-semibold text-sm mb-2" style={{ color: '#1E4D2B' }}>{m.title}</p>
                    <p className="text-sm" style={{ color: '#5A5A5A', lineHeight: 1.65 }}>{m.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#1E4D2B' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="mb-4 text-white"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 600, lineHeight: 1.2 }}
          >
            Request a Quote
          </h2>
          <p className="text-base mb-10" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
            Tell us your crop, your area, and your timeline. We respond within one business day and can typically mobilise within 48 hours of agreement.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="/d4/contact"
              className="text-xs font-semibold uppercase tracking-[0.08em] px-8 py-3.5 transition-colors duration-150"
              style={{ background: '#fff', color: '#1E4D2B' }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = '#F4F6F3')}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = '#fff')}
            >
              Submit an Enquiry
            </Link>
            <a
              href="tel:+27845558144"
              className="text-xs font-semibold uppercase tracking-[0.08em] px-8 py-3.5 border-2 transition-colors duration-150 text-white"
              style={{ borderColor: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.borderColor = '#fff')}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
            >
              Call Us Directly
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: 'Hein', role: 'Operations Lead', phone: '+27 84 555 8144' },
              { name: 'Henk', role: 'Field Coordinator', phone: '+27 78 915 8120' },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <p className="font-semibold text-sm text-white mb-0.5">{p.name} — {p.role}</p>
                <a href={`tel:${p.phone.replace(/\s/g, '')}`} className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <D4Footer />
    </main>
  )
}
