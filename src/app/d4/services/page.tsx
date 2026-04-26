'use client'
import Link from 'next/link'
import D4Footer from '@/components/d4/D4Footer'
import ScrollReveal from '@/components/shared/ScrollReveal'

export default function D4Services() {
  return (
    <main style={{ fontFamily: 'var(--font-inter)', color: '#2C2C2C' }}>

      {/* ── HERO BAND ── */}
      <section className="pt-24 pb-14" style={{ background: '#1E4D2B' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6">
          <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/d4" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
            {' '}/ Services
          </p>
          <h1
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.15 }}
          >
            Our Services
          </h1>
          <p className="text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
            Precision aerial application for crop spraying and granular spreading. SACAA licensed, fully documented.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <h2
              className="mb-6"
              style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
            >
              Precision Coverage. Full Compliance. Every Time.
            </h2>
            <p className="text-base mb-4" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              Vortex Aerotech provides two core aerial application services — crop spraying and granular spreading — delivered by SACAA licensed pilots and POC certified aerial applicators. Both services are fully documented: GPS flight records, product usage logs, and compliance reports are delivered within 24 hours of every job.
            </p>
            <p className="text-base" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              Our DJI T100 drones and NIC 35 field support trailers allow us to operate independently at your farm with no external infrastructure required. We calibrate on-site, fly, and document — a complete service, not just a flight.
            </p>
          </div>
        </div>
      </section>

      {/* ── CROP SPRAYING ── */}
      <section className="py-20" style={{ background: '#F4F6F3' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#5A5A5A' }}>Service 01</p>
            <h2
              className="mb-5"
              style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
            >
              Crop Spraying
            </h2>
            <p className="text-sm mb-4" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              Liquid application at consistent, calibrated rates. Our T100 drones maintain a fixed spray height above the canopy using terrain-following technology, delivering uniform droplet distribution regardless of field topology. No hot spots, no skipped sections, no drift beyond the field boundary.
            </p>
            <p className="text-sm mb-6" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              Application volume is agreed and calibrated before every flight. You receive a GPS coverage map after the job showing exactly where product was applied and at what rate — the same documentation required for compliance under South African agricultural regulations.
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {['Pesticide application', 'Foliar nutrition', 'Fungicide treatment', 'Herbicide application', 'Plant growth regulator application'].map((item) => (
                <li key={item} className="text-sm flex gap-2" style={{ color: '#2C2C2C' }}>
                  <span style={{ color: '#1E4D2B' }}>·</span> {item}
                </li>
              ))}
            </ul>
            <div className="p-4 border-l-2" style={{ borderColor: '#C49A2A', background: '#fff' }}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#5A5A5A' }}>Suitable crops</p>
              <p className="text-sm" style={{ color: '#5A5A5A', lineHeight: 1.65 }}>
                Maize, wheat, soya, sunflower, sorghum, sugarcane, citrus, deciduous fruit, vineyards, potatoes, and most commercial grain and fruit crops.
              </p>
            </div>
          </ScrollReveal>

          {/* Spec panel */}
          <ScrollReveal delay={0.1}>
            <div className="border bg-white" style={{ borderColor: '#D8DDD6' }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: '#D8DDD6', background: '#F4F6F3' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: '#5A5A5A' }}>DJI T100 — Spray Specifications</p>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Tank capacity', '100 litres'],
                    ['Spray width', '16 metres effective'],
                    ['Coverage rate', 'Up to 100 ha/hr'],
                    ['Application volume', '1–50 litres per hectare'],
                    ['Spray height', '1.5–3 m (auto)'],
                    ['GPS accuracy', 'Sub-metre RTK'],
                    ['Obstacle avoidance', 'Active phased array radar'],
                    ['Terrain following', 'Automatic height adjustment'],
                    ['Documentation', 'GPS logs + product records'],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b last:border-0" style={{ borderColor: '#D8DDD6' }}>
                      <td className="px-6 py-3 text-xs" style={{ color: '#5A5A5A', width: '48%' }}>{label}</td>
                      <td className="px-6 py-3 text-xs font-medium" style={{ color: '#2C2C2C' }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GRANULAR ── */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <ScrollReveal>
            <div
              className="w-full aspect-[4/3]"
              style={{ background: 'linear-gradient(135deg, #1E4D2B 0%, #3d8a52 100%)' }}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#5A5A5A' }}>Service 02</p>
            <h2
              className="mb-5"
              style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
            >
              Granular Spreading
            </h2>
            <p className="text-sm mb-4" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              Inconsistent granular application creates inconsistent yields. Uneven lime spreading leaves pH imbalances that affect plant establishment for years. Traditional mechanical spreaders amplify this inconsistency across uneven terrain and with operator fatigue.
            </p>
            <p className="text-sm mb-6" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              Aerial spreading removes these variables. GPS-programmed flight paths, constant air speed, and calibrated spreader settings deliver consistent product distribution from field edge to field edge — verified by post-flight GPS records.
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {['Granular weedicide spreading', 'Fertilizer application', 'Lime application', 'Cover crop seeding', 'Micro-nutrient top dressing'].map((item) => (
                <li key={item} className="text-sm flex gap-2" style={{ color: '#2C2C2C' }}>
                  <span style={{ color: '#1E4D2B' }}>·</span> {item}
                </li>
              ))}
            </ul>
            <div className="p-4 border-l-2" style={{ borderColor: '#C49A2A', background: '#F4F6F3' }}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#5A5A5A' }}>Suitable applications</p>
              <p className="text-sm" style={{ color: '#5A5A5A', lineHeight: 1.65 }}>
                Pre-plant fertilisation, post-emergence weedicide, orchard lime spreading, no-till cover crop establishment, and micro-nutrient correction programmes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── EQUIPMENT ── */}
      <section className="py-20" style={{ background: '#F4F6F3' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="mb-10"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
          >
            Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'DJI T100 Agricultural Drone',
                rows: [
                  ['Tank Capacity', '100 litres liquid'],
                  ['Coverage Rate', 'Up to 100 ha/hr'],
                  ['Spray Width', '16 metres effective'],
                  ['Volume Range', '1–50 L/ha'],
                  ['Height Control', 'Auto terrain-following'],
                  ['GPS System', 'Sub-metre RTK'],
                  ['Safety', 'Active obstacle avoidance'],
                  ['Certification', 'SACAA approved'],
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
                  ['Road Access', 'Farm road capable'],
                  ['Mixing', 'On-site preparation'],
                  ['Coverage', 'Supports 2 drones'],
                ],
              },
              {
                title: 'Certified Flight Crew',
                rows: [
                  ['Pilot Licence', 'SACAA Remote Pilot Licence'],
                  ['Application Cert', 'POC Aerial Applicator'],
                  ['Insurance', 'Full operational coverage'],
                  ['Compliance', 'Post-flight SACAA reports'],
                  ['Experience', '6+ years operations'],
                  ['Documentation', 'GPS + product records'],
                  ['Site Assessment', 'Pre-flight evaluation'],
                  ['Mobilisation', 'Same-day response'],
                ],
              },
            ].map((card) => (
              <ScrollReveal key={card.title}>
                <div className="bg-white border p-6" style={{ borderColor: '#D8DDD6' }}>
                  <h3 className="font-semibold mb-5 pb-4 border-b text-sm" style={{ color: '#1E4D2B', borderColor: '#D8DDD6' }}>
                    {card.title}
                  </h3>
                  <table className="w-full">
                    <tbody>
                      {card.rows.map(([label, value]) => (
                        <tr key={label} className="border-b last:border-0" style={{ borderColor: '#D8DDD6' }}>
                          <td className="py-2 pr-3 text-xs" style={{ color: '#5A5A5A', width: '45%' }}>{label}</td>
                          <td className="py-2 text-xs font-medium" style={{ color: '#2C2C2C' }}>{value}</td>
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

      {/* ── PROCESS ── */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2
            className="mb-10"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
          >
            How We Work
          </h2>
          <div className="flex flex-col">
            {[
              { num: '1', title: 'Initial Consultation', desc: 'We discuss your crop, the product you need applied, your area, and your timeline. We provide a quote within one business day.' },
              { num: '2', title: 'Site Assessment & Flight Planning', desc: 'We visit your farm, assess obstacles and field boundaries, and programme precision GPS flight paths for complete coverage with no overlaps.' },
              { num: '3', title: 'On-Site Setup & Application', desc: 'Our NIC 35 trailer arrives at your farm. Product is mixed to your specified rate in our 500L silos. DJI T100 drones then execute the programmed flight paths.' },
              { num: '4', title: 'Documentation & Reporting', desc: 'Within 24 hours you receive GPS coverage maps, product usage records, and SACAA compliance documentation — everything required for your farm records.' },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.06}>
                <div className="flex gap-8 py-8 border-b" style={{ borderColor: '#D8DDD6' }}>
                  <span
                    className="text-3xl font-bold flex-shrink-0 w-8"
                    style={{ fontFamily: 'var(--font-source-serif)', color: '#C49A2A', lineHeight: 1 }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm mb-2" style={{ color: '#1E4D2B' }}>{step.title}</h3>
                    <p className="text-sm" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA WITH FORM ── */}
      <section className="py-20" style={{ background: '#1E4D2B' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 600, lineHeight: 1.2 }}
          >
            Request a Quote
          </h2>
          <p className="mb-10 text-base" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
            Tell us about your crop and application requirements. We respond within one business day.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: 'Full Name', type: 'text', placeholder: 'Your name' },
              { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              { label: 'Phone Number', type: 'tel', placeholder: '+27 ...' },
              { label: 'Hectares (approximate)', type: 'number', placeholder: 'e.g. 250' },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-semibold uppercase tracking-[0.08em] mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 text-sm outline-none bg-white"
                  style={{ color: '#2C2C2C', border: 'none' }}
                />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold uppercase tracking-[0.08em] mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>Message</label>
              <textarea
                rows={4}
                placeholder="Describe your crop, product, and timeline..."
                className="w-full px-4 py-3 text-sm outline-none bg-white resize-none"
                style={{ color: '#2C2C2C', border: 'none' }}
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="text-xs font-semibold uppercase tracking-[0.08em] px-8 py-3.5 transition-colors duration-150"
                style={{ background: '#fff', color: '#1E4D2B' }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.background = '#F4F6F3')}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.background = '#fff')}
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <D4Footer />
    </main>
  )
}
