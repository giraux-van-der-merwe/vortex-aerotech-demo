'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import D2Footer from '@/components/d2/D2Footer'

const faqs = [
  { q: 'Is Vortex Aerotech SACAA licensed?', a: 'Yes. Every pilot holds a SACAA Remote Pilot Licence and we comply fully with all South African Civil Aviation Authority regulations. Compliance documentation is provided after every job.' },
  { q: 'What is your minimum spray area?', a: 'We typically start from 50 hectares for spray operations to make mobilisation viable, but we are happy to discuss smaller blocks or combine neighbouring farms to reach the minimum.' },
  { q: 'What application rates can you achieve?', a: 'The DJI T100 achieves up to 100 hectares per hour in optimal conditions. Actual rates depend on application volume, field shape, obstacles, and wind conditions. We will give you an accurate estimate based on your specific field.' },
  { q: 'What weather conditions do you need?', a: 'We require wind speeds below 20 km/h, no rain within 4 hours of application, and temperatures below 30°C for most liquid applications. We monitor weather closely and will always reschedule at no cost if conditions are unsuitable.' },
]

export default function D2Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main style={{ background: '#F5F3F0', fontFamily: 'var(--font-rethink)' }}>

      {/* ── HERO ── */}
      <section className="pt-24 pb-12" style={{ background: '#F5F3F0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
          <p className="text-xs mb-4" style={{ color: '#8B9271' }}>
            <Link href="/d2" style={{ color: '#8B9271' }}>Home</Link> / Contact
          </p>
          <h1 className="font-semibold mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#181818', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            Get in Touch
          </h1>
          <p className="text-base max-w-lg" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>
            Tell us about your crop and your timeline. We&apos;ll get back to you with a quote the same day — no obligation required.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-5 gap-16">

          {/* Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="p-8 rounded-2xl bg-white">
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#181818' }}>Message Sent</h3>
                <p style={{ color: '#4E4E4E' }}>We&apos;ll be in contact within a few hours. You can also reach us directly via the numbers below.</p>
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
                      <label className="block text-xs font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: '#8B9271' }}>{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 text-base rounded-xl border outline-none transition-all duration-200"
                        style={{ borderColor: '#DDD9D3', background: '#fff', color: '#181818' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#8B9271')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#DDD9D3')}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: '#8B9271' }}>Hectares (approximate)</label>
                  <input
                    type="number"
                    name="hectares"
                    placeholder="e.g. 250"
                    className="w-full px-4 py-3 text-base rounded-xl border outline-none transition-all duration-200"
                    style={{ borderColor: '#DDD9D3', background: '#fff', color: '#181818' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#8B9271')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DDD9D3')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: '#8B9271' }}>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your crop, product, and timeline..."
                    className="w-full px-4 py-3 text-base rounded-xl border outline-none transition-all duration-200 resize-none"
                    style={{ borderColor: '#DDD9D3', background: '#fff', color: '#181818' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#8B9271')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DDD9D3')}
                  />
                </div>
                <button
                  type="submit"
                  className="text-base font-bold px-8 py-4 rounded-[20px] self-start transition-all duration-200"
                  style={{ background: '#FFF3A3', color: '#3A4526' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#8B9271'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#FFF3A3'; e.currentTarget.style.color = '#3A4526' }}
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
            <h3 className="font-semibold mb-8" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '1.75rem', color: '#181818' }}>
              Get in touch
            </h3>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { name: 'Hein', role: 'Operations Lead', phone: '+27 84 555 8144' },
                { name: 'Henk', role: 'Field Coordinator', phone: '+27 78 915 8120' },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-4 p-5 bg-white rounded-2xl border" style={{ borderColor: '#DDD9D3' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FFF3A3' }}>
                    <Phone size={16} style={{ color: '#3A4526' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#181818' }}>{p.name} — {p.role}</p>
                    <a href={`tel:${p.phone.replace(/\s/g,'')}`} className="text-sm" style={{ color: '#4E4E4E' }}>{p.phone}</a>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border" style={{ borderColor: '#DDD9D3' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FFF3A3' }}>
                  <Mail size={16} style={{ color: '#3A4526' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: '#181818' }}>Email</p>
                  <a href="mailto:admin@vortexaerotech.co.za" className="text-sm" style={{ color: '#4E4E4E' }}>admin@vortexaerotech.co.za</a>
                </div>
              </div>
            </div>

            <blockquote className="pl-5 border-l-4" style={{ borderColor: '#FFF3A3' }}>
              <p className="text-lg italic mb-2" style={{ fontFamily: 'var(--font-playfair)', color: '#8B9271' }}>
                &ldquo;Spyt kom altyd te laat, so laat ons liewer vroeg kom spuit.&rdquo;
              </p>
              <p className="text-xs" style={{ color: '#4E4E4E' }}>Regret always comes too late, so let us rather come spray early.</p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#8B9271' }}>FAQ</p>
          <h2 className="font-semibold mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#181818', letterSpacing: '-0.02em' }}>
            Common Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b last:border-0"
                style={{ borderColor: '#DDD9D3', borderLeft: openFaq === i ? '3px solid #FFF3A3' : 'none', paddingLeft: openFaq === i ? 16 : 0, transition: 'padding 0.2s, border 0.2s' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-semibold text-base" style={{ color: openFaq === i ? '#8B9271' : '#181818' }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#8B9271' }} /> : <ChevronDown size={18} style={{ color: '#4E4E4E' }} />}
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
                      <p className="pb-5 text-base" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <D2Footer />
    </main>
  )
}
