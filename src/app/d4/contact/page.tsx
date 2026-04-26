'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import D4Footer from '@/components/d4/D4Footer'

const faqs = [
  { q: 'Is Vortex Aerotech SACAA licensed?', a: 'Yes. All pilots hold valid SACAA Remote Pilot Licences and all operations comply fully with South African Civil Aviation Authority regulations. Compliance documentation — including SACAA flight records — is provided to the farmer after every job.' },
  { q: 'What is your minimum spray area?', a: 'We typically start from 50 hectares for spray operations. For smaller fields we are happy to discuss the job directly — in some cases combining neighbouring farms can make a smaller operation viable.' },
  { q: 'What application rates can the DJI T100 achieve?', a: 'The DJI T100 covers up to 100 hectares per hour in optimal conditions at standard application volumes. Actual throughput depends on application volume, field layout, obstacles, and wind speed. We provide an accurate estimate after assessing your specific field.' },
  { q: 'What weather conditions do you require?', a: 'We require wind speeds below 20 km/h, no rain within 4 hours of application, and temperatures below 30°C for most liquid applications. We monitor conditions closely and will always reschedule at no cost if flying conditions are unsuitable.' },
]

export default function D4Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main style={{ fontFamily: 'var(--font-inter)', color: '#2C2C2C' }}>

      {/* ── HERO BAND ── */}
      <section className="pt-24 pb-12" style={{ background: '#1E4D2B' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6">
          <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/d4" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
            {' '}/ Contact
          </p>
          <h1
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.15 }}
          >
            Contact Us
          </h1>
          <p className="text-base max-w-lg" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
            Send us your enquiry and we will respond within one business day. Alternatively, call Hein or Henk directly.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-5 gap-16">

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="p-8 border" style={{ borderColor: '#D8DDD6', background: '#F4F6F3' }}>
                <h3
                  className="mb-3"
                  style={{ fontFamily: 'var(--font-source-serif)', fontSize: '1.5rem', fontWeight: 600, color: '#1E4D2B' }}
                >
                  Enquiry Received
                </h3>
                <p className="text-sm" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
                  Thank you. We will respond within one business day. If your matter is urgent, please call Hein or Henk directly.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: 'Full Name', type: 'text', name: 'name', placeholder: 'Your name' },
                    { label: 'Email Address', type: 'email', name: 'email', placeholder: 'your@email.com' },
                    { label: 'Phone Number', type: 'tel', name: 'phone', placeholder: '+27 ...' },
                    { label: 'Farm / Company', type: 'text', name: 'company', placeholder: 'Farm or company name' },
                  ].map((f) => (
                    <div key={f.name}>
                      <label
                        className="block text-xs font-semibold uppercase tracking-[0.08em] mb-2"
                        style={{ color: '#5A5A5A' }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 text-sm outline-none border transition-colors duration-150"
                        style={{ borderColor: '#D8DDD6', color: '#2C2C2C', background: '#fff' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#1E4D2B')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#D8DDD6')}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] mb-2" style={{ color: '#5A5A5A' }}>
                    Hectares (approximate)
                  </label>
                  <input
                    type="number"
                    name="hectares"
                    placeholder="e.g. 250"
                    className="w-full px-4 py-3 text-sm outline-none border transition-colors duration-150"
                    style={{ borderColor: '#D8DDD6', color: '#2C2C2C', background: '#fff' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#1E4D2B')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#D8DDD6')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] mb-2" style={{ color: '#5A5A5A' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your crop, the product you need applied, and your preferred timeline..."
                    className="w-full px-4 py-3 text-sm outline-none border transition-colors duration-150 resize-none"
                    style={{ borderColor: '#D8DDD6', color: '#2C2C2C', background: '#fff' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#1E4D2B')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#D8DDD6')}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-xs font-semibold uppercase tracking-[0.08em] px-8 py-3.5 transition-colors duration-150"
                    style={{ background: '#1E4D2B', color: '#fff' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.background = '#2E6B3E')}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.background = '#1E4D2B')}
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="md:col-span-2">
            <h2
              className="mb-8"
              style={{ fontFamily: 'var(--font-source-serif)', fontSize: '1.5rem', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
            >
              Direct Contact
            </h2>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { name: 'Hein', role: 'Operations Lead', phone: '+27 84 555 8144' },
                { name: 'Henk', role: 'Field Coordinator', phone: '+27 78 915 8120' },
              ].map((p) => (
                <div key={p.name} className="p-5 border" style={{ borderColor: '#D8DDD6', background: '#F4F6F3' }}>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#1E4D2B' }}>{p.name} — {p.role}</p>
                  <a
                    href={`tel:${p.phone.replace(/\s/g, '')}`}
                    className="text-sm"
                    style={{ color: '#5A5A5A' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    {p.phone}
                  </a>
                </div>
              ))}

              <div className="p-5 border" style={{ borderColor: '#D8DDD6', background: '#F4F6F3' }}>
                <p className="font-semibold text-sm mb-1" style={{ color: '#1E4D2B' }}>Email</p>
                <a
                  href="mailto:admin@vortexaerotech.co.za"
                  className="text-sm"
                  style={{ color: '#5A5A5A' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  admin@vortexaerotech.co.za
                </a>
              </div>

              <div className="p-5 border" style={{ borderColor: '#D8DDD6', background: '#F4F6F3' }}>
                <p className="font-semibold text-sm mb-1" style={{ color: '#1E4D2B' }}>Office Hours</p>
                <p className="text-sm" style={{ color: '#5A5A5A' }}>Monday – Friday, 07:00 – 17:00</p>
              </div>
            </div>

            {/* Afrikaans slogan */}
            <blockquote className="pl-4 border-l-2" style={{ borderColor: '#C49A2A' }}>
              <p className="text-sm italic mb-1" style={{ color: '#5A5A5A', lineHeight: 1.65 }}>
                &ldquo;Spyt kom altyd te laat, so laat ons liewer vroeg kom spuit.&rdquo;
              </p>
              <p className="text-xs" style={{ color: '#5A5A5A', opacity: 0.7 }}>
                Regret always comes too late — let us rather come spray early.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: '#F4F6F3' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2
            className="mb-10"
            style={{ fontFamily: 'var(--font-source-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, color: '#1E4D2B', lineHeight: 1.2 }}
          >
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col border-t" style={{ borderColor: '#D8DDD6' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b" style={{ borderColor: '#D8DDD6' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-semibold text-sm pr-8" style={{ color: '#1E4D2B' }}>{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} style={{ color: '#1E4D2B', flexShrink: 0 }} />
                    : <ChevronDown size={16} style={{ color: '#5A5A5A', flexShrink: 0 }} />
                  }
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE STRIP ── */}
      <section className="py-10" style={{ background: '#fff', borderTop: '1px solid #D8DDD6' }}>
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {['SACAA Licensed', 'POC Certified', 'DJI T100 Authorised', 'NIC 35 Equipped', 'Fully Insured'].map((badge) => (
            <div
              key={badge}
              className="px-5 py-2 border text-xs font-semibold uppercase tracking-[0.08em]"
              style={{ borderColor: '#D8DDD6', color: '#5A5A5A' }}
            >
              {badge}
            </div>
          ))}
        </div>
      </section>

      <D4Footer />
    </main>
  )
}
