import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, MapPin, Info, Search } from 'lucide-react';

export default function TrackCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="track" className="py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A]" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Gold border */}
          <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-3xl pointer-events-none" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
                  <Search size={12} />
                  Case Transparency
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Track Your Case{' '}
                  <span className="text-[#D4AF37] italic">Live</span>
                </h2>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Advocate Arpit Agarwal primarily practices at the{' '}
                  <strong className="text-white">Allahabad High Court, Prayagraj, Uttar Pradesh</strong>.
                  You can track the real-time status of your case through the official eCourts India portal.
                </p>

                {/* Court info */}
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                  <MapPin size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">Allahabad High Court</p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      High Court Compound, Civil Lines, Prayagraj, Uttar Pradesh 211001
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      Established 1866 · One of India's Oldest High Courts
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://services.ecourts.gov.in/ecourtindia_v6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B45309] text-[#0F172A] font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm shadow-lg hover:shadow-amber-900/30 active:scale-95"
                  >
                    <ExternalLink size={15} />
                    Track Live Cases via eCourts India
                  </a>
                  <a
                    href="https://allahabadhighcourt.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-white/20 hover:border-[#D4AF37]/50 text-white hover:text-[#D4AF37] font-medium px-6 py-3 rounded-lg transition-all duration-200 text-sm"
                  >
                    <ExternalLink size={15} />
                    Official HC Website
                  </a>
                </div>
              </div>

              {/* Right — How to track */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Info size={16} className="text-[#D4AF37]" />
                  <h3 className="text-white font-semibold text-sm">How to Track Your Case</h3>
                </div>
                <ol className="flex flex-col gap-4">
                  {[
                    { step: '01', text: 'Visit the eCourts India portal using the link provided.' },
                    { step: '02', text: 'Select "High Court" and choose "Allahabad High Court" from the dropdown.' },
                    { step: '03', text: 'Enter your Case Number, CNR Number, or Party Name to search.' },
                    { step: '04', text: 'View real-time case status, next hearing dates, and order history.' },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold flex items-center justify-center">
                        {item.step}
                      </span>
                      <p className="text-slate-300 text-sm leading-relaxed pt-0.5">{item.text}</p>
                    </li>
                  ))}
                </ol>
                <p className="text-slate-500 text-xs mt-5 pt-4 border-t border-white/10">
                  For case-specific queries, contact Advocate Agarwal directly at{' '}
                  <a href="tel:+919457044445" className="text-[#D4AF37] hover:underline">
                    +91 94570 44445
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
