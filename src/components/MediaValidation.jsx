import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Newspaper, Scale, ShieldCheck, ExternalLink } from 'lucide-react';

export default function MediaValidation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
      <section className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden" id="media">
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #D4AF37 0px,
            #D4AF37 1px,
            transparent 1px,
            transparent 72px
          )`,
        }}
      />
      {/* Gold top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-4">
            <Newspaper size={12} />
            In the News
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3">
            Media Validation &{' '}
            <span className="text-[#D4AF37] italic">Landmark Cases</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            Recognised advocacy. Documented results. Cases that set precedent and
            demonstrate the depth of our High Court practice.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Main case card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="bg-slate-900/80 border border-slate-700/60 rounded-3xl overflow-hidden shadow-2xl shadow-black/60 hover:border-[#D4AF37]/30 transition-colors duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* ── Left: Newspaper clipping ── */}
            <div className="relative bg-slate-950/50 flex items-center justify-center p-6 md:p-8 lg:p-10">
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/40 rounded-tr" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/40 rounded-bl" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br" />

              <div className="relative w-full max-w-md">
                {/* "Press Coverage" label */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1 bg-[#D4AF37]/20" />
                  <span className="text-[#D4AF37]/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                    Press Coverage
                  </span>
                  <div className="h-px flex-1 bg-[#D4AF37]/20" />
                </div>

                <img
                  src="/newspaper_article_arpit.jpg"
                  alt="Allahabad High Court Landmark Property Dispute Ruling - Shah Times"
                  className="w-full h-auto rounded-lg shadow-2xl border border-slate-800 hover:border-amber-500 transition-colors duration-300 cursor-zoom-in"
                />

                <p className="text-slate-600 text-[10px] text-center mt-3 tracking-wide uppercase">
                  Published · Shah Times
                </p>
              </div>
            </div>

            {/* ── Right: Editorial write-up ── */}
            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-slate-700/40">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full w-fit mb-5">
                <ShieldCheck size={11} />
                Case Highlight &amp; Media Validation
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mb-5">
                Allahabad High Court Intervenes in{' '}
                <span className="text-[#D4AF37]">37-Year-Old Land Dispute</span>{' '}
                Case
              </h3>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#D4AF37]/50" />
                <Scale size={14} className="text-[#D4AF37]/50" />
                <div className="h-px flex-1 bg-slate-700/60" />
              </div>

              {/* Summary */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                In a significant civil victory demonstrating rigorous advocacy, the High Court
                of Judicature at Allahabad adopted a stringent stance in a complex,
                37-year-old property conflict originating from Pilibhit. Representing the
                aggrieved party,{' '}
                <span className="text-white font-semibold">Advocate Arpit Agarwal</span>{' '}
                successfully exposed procedural anomalies where an established civil decree
                was untimely reversed. Yielding to strong arguments, the High Court locked
                immediate status-quo orders on the disputed land and formally summoned a
                personal affidavit from the{' '}
                <span className="text-[#D4AF37] font-medium">
                  Sub-Divisional Magistrate (SDM, Puranpur)
                </span>{' '}
                to justify the administrative actions, asserting judicial accountability and
                safeguarding client rights.
              </p>

              {/* Key outcome chips */}
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  'Status-Quo Order Secured',
                  'SDM Affidavit Summoned',
                  '37-Year Dispute',
                  'Property Rights Upheld',
                  'Allahabad High Court',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-3 py-1 rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/20 text-[#D4AF37]/80 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Advocate attribution */}
              <div className="flex items-center gap-4 pt-5 border-t border-slate-700/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#92400e] to-[#78350f] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-serif font-bold text-sm">AA</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Advocate Arpit Agarwal</p>
                  <p className="text-slate-500 text-xs">
                    Allahabad High Court · Civil &amp; Property Practice
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="ml-auto flex items-center gap-1.5 text-[#D4AF37] hover:text-amber-300 text-xs font-semibold transition-colors duration-150 whitespace-nowrap"
                >
                  Discuss Your Case
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
