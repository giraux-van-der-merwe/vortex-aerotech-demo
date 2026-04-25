'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import D3Footer from '@/components/d3/D3Footer'

const faqs = [
  { q: 'Is Vortex Aerotech SACAA licensed?', a: 'Yes. All pilots hold valid SACAA Remote Pilot Licences and all operations comply fully with South African Civil Aviation Authority regulations. Compliance documentation is provided after every job.' },
  { q: 'What is your minimum spray area?', a: 'We typically start from 50 hectares for spray operations. For smaller fields, we are happy to combine neighbouring farms or discuss project-specific pricing.' },
  { q: 'What application rates can the DJI T100 achieve?', a: 'The DJI T100 achieves up to 100 hectares per hour in optimal conditions. Actual throughput depends on application volume, field layout, obstacles, and wind. We will give you an accurate estimate based on your specific situation.' },
  { q: 'What weather conditions do you operate in?', a: 'We require wind speeds below 20 km/h, no rain forecast within 4 hours, and temperatures below 30°C for most liquid applications. We monitor conditions closely and will always reschedule at no cost if flying is unsafe or conditions are unsuitable.' },
]

export default function D3Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main style={{ fontFamily: 'var(--font-jakarta)' }}>

      {/* ── HERO ── */}
      <section className="pt-24 pb-16" style={{ background: '#111110' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
          <p className="text-xs mb-4" style={{ color: 'rgba(240,238,232,0.3)' }}>
            <Link href="/d3" style={{ color: 'rgba(240,238,232,0.3)' }}>Home</Link> / Contact
          </p>
          <h1 className="font-extrabold text-white mb-4" style={{ fontSize: 'clamp(2.75rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Get in Touch
          </h1>
          <p className="text-base max-w-lg" style={{ color: 'rgba(240,238,232,0.5)', lineHeight: '1.75' }}>
            Tell us your crop, your area, and your timeline. We&apos;ll have a quote back to you the same day.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-24" style={{ background: '#1a1a18' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-5 gap-16">

          {/* Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="p-8 rounded-lg" style={{ background: '#111110', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>Message Received</h3>
                <p style={{ color: 'rgba(240,238,232,0.5)' }}>We&apos;ll be in contact within a few hours. You can also reach Hein or Henk directly by phone.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: 'Full Name', type: 'text', name: 'name', placeholder: 'Your name' },
                    { label: 'Email Address', type: 'email', name: 'email', placeholder: 'your@email.com' },
                    { label: 'Phone Number', type: 'tel', name: 'phone', placeholder: '+27 ...' },
                    { label: 'Farm / Company', type: 'text', name: 'company', placeholder: 'Farm or company name' },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: '#A8C090' }}>{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 rounded"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#F0EEE8',
                          borderRadius: 4,
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#A8C090')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: '#A8C090' }}>Hectares (approximate)</label>
                  <input
                    type="number"
                    name="hectares"
                    placeholder="e.g. 250"
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#F0EEE8', borderRadius: 4 }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#A8C090')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: '#A8C090' }}>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your crop, product, and timeline..."
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#F0EEE8', borderRadius: 4 }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#A8C090')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
                <button
                  type="submit"
                  className="text-sm font-bold px-8 py-4 self-start transition-all duration-200"
                  style={{ background: '#A8C090', color: '#2C4128', borderRadius: 4 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#C8B560'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#A8C090'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact details */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h3 className="font-bold text-white mb-8" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>Direct Contact</h3>

            <div className="flex flex-col gap-4 mb-10">
              {[
                { name: 'Hein', role: 'Operations Lead', phone: '+27 84 555 8144' },
                { name: 'Henk', role: 'Field Coordinator', phone: '+27 78 915 8120' },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-4 p-4 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: '#A8C090' }}>
                    <Phone size={14} style={{ color: '#2C4128' }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">{p.name} — {p.role}</p>
                    <a href={`tel:${p.phone.replace(/\s/g,'')}`} className="text-sm" style={{ color: '#A8C090' }}>{p.phone}</a>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 p-4 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: '#A8C090' }}>
                  <Mail size={14} style={{ color: '#2C4128' }} />
                </div>
                <div>
                  <p className="font-bold text-sm text-white mb-0.5">Email</p>
                  <a href="mailto:admin@vortexaerotech.co.za" className="text-sm" style={{ color: '#A8C090' }}>admin@vortexaerotech.co.za</a>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>What to Expect</p>
              <ul className="flex flex-col gap-3">
                {[
                  'Same-day quote response after your enquiry',
                  'Site visit and assessment before every job',
                  'Full compliance documentation after every flight',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(240,238,232,0.5)' }}>
                    <span style={{ color: '#A8C090', marginTop: 1 }}>—</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-base italic" style={{ fontFamily: 'Instrument Serif, Georgia, serif', color: '#A8C090', lineHeight: '1.6' }}>
              &ldquo;Spyt kom altyd te laat, so laat ons liewer vroeg kom spuit.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ background: '#111110' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>FAQ</p>
          <h2 className="font-bold text-white mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', letterSpacing: '-0.02em' }}>
            Common Questions
          </h2>
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-bold text-sm transition-colors" style={{ color: openFaq === i ? '#A8C090' : '#F0EEE8' }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={16} style={{ color: '#A8C090' }} /> : <ChevronDown size={16} style={{ color: 'rgba(240,238,232,0.4)' }} />}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm" style={{ color: 'rgba(240,238,232,0.5)', lineHeight: '1.75' }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE STRIP ── */}
      <section className="py-12" style={{ background: '#2C4128' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Every Vortex Aerotech flight is operated under full South African regulatory compliance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['SACAA Licensed', 'POC Certified', 'DJI T100 Authorised', 'Fully Insured'].map((badge) => (
              <div key={badge} className="px-5 py-2 text-xs font-bold uppercase tracking-widest rounded" style={{ border: '1px solid rgba(168,192,144,0.4)', color: '#A8C090' }}>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <D3Footer />
    </main>
  )
}
