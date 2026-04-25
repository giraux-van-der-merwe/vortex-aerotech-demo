'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import D1Footer from '@/components/d1/D1Footer'

const faqs = [
  { q: 'Is Vortex Aerotech SACAA licensed?', a: 'Yes. All our pilots hold valid SACAA Remote Pilot Licences (RPL) and our operations comply fully with South African Civil Aviation Authority regulations. We carry documentation on every job.' },
  { q: 'What is the minimum area you will spray?', a: 'We typically work from 50 hectares upwards for spray operations to make the mobilisation worthwhile. However, we are happy to discuss smaller areas, especially for repeat clients or where multiple farms in an area can be combined.' },
  { q: 'What spray rate can the DJI T100 achieve?', a: 'The DJI T100 can cover up to 100 hectares per hour in ideal conditions at standard application volumes. Actual rates depend on the product being applied, application volume, field obstacles, and wind conditions.' },
  { q: 'What weather conditions do you need to spray?', a: 'We require wind speeds below 20 km/h, no rain forecast within 4 hours of application, and temperatures below 30°C for most liquid applications. We will always advise if conditions are unsuitable and reschedule at no cost.' },
]

export default function D1Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ background: '#faf9f6', fontFamily: 'var(--font-dm-sans)' }}>

      {/* ── HERO ── */}
      <section className="pt-24 pb-16" style={{ background: '#3f492a' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
          <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/d1" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link> / Contact
          </p>
          <h1
            className="font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', fontFamily: 'var(--font-bricolage)', lineHeight: 1.05 }}
          >
            Get in Touch
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Tell us what you need and we&apos;ll have a quote back to you the same day. No obligation, no fine print.
          </p>
        </div>
      </section>

      {/* ── CONTACT LAYOUT ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-5 gap-16">

          {/* Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="flex flex-col items-start gap-4 p-8 rounded-xl" style={{ background: '#3f492a' }}>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-bricolage)' }}>Message Received</h3>
                <p className="text-white/70">We&apos;ll be in contact within a few hours. In the meantime, feel free to call Hein or Henk directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: 'Full Name', type: 'text', name: 'name', placeholder: 'Your name' },
                    { label: 'Email Address', type: 'email', name: 'email', placeholder: 'your@email.com' },
                    { label: 'Phone Number', type: 'tel', name: 'phone', placeholder: '+27 ...' },
                    { label: 'Company / Farm Name', type: 'text', name: 'company', placeholder: 'Farm or company name' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-bold uppercase tracking-[0.1em] mb-2" style={{ color: '#3f492a' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 text-sm border outline-none transition-all duration-200"
                        style={{ borderColor: '#DFDEDC', background: '#fff', color: '#585858' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#3f492a')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#DFDEDC')}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.1em] mb-2" style={{ color: '#3f492a' }}>
                    Hectares to Spray / Spread
                  </label>
                  <input
                    type="number"
                    name="hectares"
                    placeholder="Approximate hectares"
                    className="w-full px-4 py-3 text-sm border outline-none transition-all duration-200"
                    style={{ borderColor: '#DFDEDC', background: '#fff', color: '#585858' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#3f492a')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DFDEDC')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.1em] mb-2" style={{ color: '#3f492a' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your crop, the product you want to apply, and your timeline..."
                    className="w-full px-4 py-3 text-sm border outline-none transition-all duration-200 resize-none"
                    style={{ borderColor: '#DFDEDC', background: '#fff', color: '#585858' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#3f492a')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DFDEDC')}
                  />
                </div>
                <button
                  type="submit"
                  className="text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 transition-all duration-200 self-start"
                  style={{ background: '#ecf96e', color: '#3f492a' }}
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
            <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-bricolage)', color: '#3f492a' }}>
              Talk to Our Team
            </h3>

            <div className="flex flex-col gap-6 mb-10">
              {[
                { name: 'Hein', role: 'Operations Lead', phone: '+27 84 555 8144' },
                { name: 'Henk', role: 'Field Coordinator', phone: '+27 78 915 8120' },
              ].map((person) => (
                <div key={person.name} className="flex items-start gap-4 p-5 rounded-xl border" style={{ borderColor: '#DFDEDC', background: '#fff' }}>
                  <div className="w-10 h-10 rounded flex items-center justify-center" style={{ background: '#ecf96e' }}>
                    <Phone size={16} style={{ color: '#3f492a' }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#3f492a' }}>{person.name} — {person.role}</p>
                    <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-sm" style={{ color: '#585858' }}>{person.phone}</a>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-4 p-5 rounded-xl border" style={{ borderColor: '#DFDEDC', background: '#fff' }}>
                <div className="w-10 h-10 rounded flex items-center justify-center" style={{ background: '#ecf96e' }}>
                  <Mail size={16} style={{ color: '#3f492a' }} />
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5" style={{ color: '#3f492a' }}>Email</p>
                  <a href="mailto:admin@vortexaerotech.co.za" className="text-sm" style={{ color: '#585858' }}>admin@vortexaerotech.co.za</a>
                </div>
              </div>
            </div>

            <blockquote className="pl-4 border-l-2" style={{ borderColor: '#ecf96e' }}>
              <p className="text-base italic mb-2" style={{ color: '#3f492a', fontFamily: 'var(--font-bricolage)' }}>
                &ldquo;Spyt kom altyd te laat, so laat ons liewer vroeg kom spuit.&rdquo;
              </p>
              <p className="text-xs" style={{ color: '#585858' }}>
                Regret always comes too late, so let us rather come spray early.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: '#ecf96e', background: '#3f492a', display: 'inline-block', padding: '4px 12px' }}>FAQ</p>
            <h2 className="font-bold mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontFamily: 'var(--font-bricolage)', color: '#3f492a', lineHeight: 1.1 }}>
              Common Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-xl overflow-hidden" style={{ borderColor: '#DFDEDC' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  style={{ background: openFaq === i ? '#faf9f6' : '#fff' }}
                >
                  <span className="font-bold text-sm" style={{ color: '#3f492a' }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#3f492a' }} /> : <ChevronDown size={18} style={{ color: '#585858' }} />}
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
                      <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#585858' }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-10" style={{ background: '#faf9f6', borderTop: '1px solid #DFDEDC' }}>
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-6">
          {['SACAA Licensed', 'POC Certified', 'DJI T100', 'NIC 35 Equipped'].map((badge) => (
            <div
              key={badge}
              className="px-5 py-2 text-xs font-bold uppercase tracking-widest border rounded"
              style={{ color: '#3f492a', borderColor: '#DFDEDC' }}
            >
              {badge}
            </div>
          ))}
        </div>
      </section>

      <D1Footer />
    </main>
  )
}
