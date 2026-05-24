import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Landmark, Scale, BookOpen, Award } from 'lucide-react';

// Ascending order: current generation at top, founding roots at bottom
const generations = [
  {
    icon: Landmark,
    era: 'High Court Appellate Expertise',
    name: 'Advocate Arpit Agarwal',
    role: 'Advocate · Allahabad High Court, Prayagraj',
    description:
      'Elevating the family legacy to the High Court level, Advocate Arpit Agarwal specializes in complex appellate matters, constitutional writs, and revisions before the Hon\'ble Allahabad High Court at Prayagraj. Combining the trial court wisdom inherited from his family with sharp appellate strategy, he delivers results in the most challenging legal arenas.',
    highlight: '550+ High Court Cases Represented',
    color: 'from-[#92400e] to-[#78350f]',
    accentLabel: 'text-amber-600',
    borderColor: 'border-amber-700',
    isCurrent: true,
  },
  {
    icon: Scale,
    era: 'District Court Mastery',
    name: 'Advocate Sanjay Kumar Agarwal',
    role: 'Senior Advocate · District Court, Pilibhit, Uttar Pradesh',
    description:
      'Based in Pilibhit, UP, Advocate Sanjay Kumar Agarwal built a formidable reputation in trial court practice. Renowned for his expertise in civil litigation, motor accident claims, and comprehensive trial court advocacy, he has represented clients in over 320+ cases, earning the trust of families and businesses across the region.',
    highlight: '320+ Cases Represented',
    color: 'from-[#1E3A8A] to-[#1e40af]',
    accentLabel: 'text-blue-600',
    borderColor: 'border-blue-700',
    isCurrent: false,
  },
  {
    icon: BookOpen,
    era: 'The Founding Legacy',
    name: 'Late Tribhuvan Saran Agarwal, Advocate',
    role: 'Founding Patriarch · District Court, Pilibhit, Uttar Pradesh',
    description:
      'The cornerstone of the Agarwal legal dynasty. Late Tribhuvan Saran Agarwal established the family\'s deep legal roots in Pilibhit, instilling core values of absolute integrity, unwavering dedication to justice, and a profound respect for the rule of law. His legacy became the bedrock upon which two generations of advocates would build their distinguished careers.',
    highlight: 'The Founding Vision',
    color: 'from-slate-600 to-slate-700',
    accentLabel: 'text-slate-500',
    borderColor: 'border-slate-400',
    isCurrent: false,
  },
];

function TimelineItem({ gen, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = gen.icon;
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start gap-0 md:gap-8">

      {/* ── Desktop: alternating left/right layout ── */}
      <div className={`hidden md:flex w-full items-start gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>

        {/* Content card */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <div className={`bg-white rounded-2xl shadow-lg border ${gen.borderColor} border-opacity-30 p-7 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden`}>
            {/* Top accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gen.color}`} />

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className={`text-xs font-semibold tracking-widest uppercase ${gen.accentLabel}`}>
                  {gen.era}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0F172A] mt-1">{gen.name}</h3>
                <p className="text-slate-500 text-sm mt-0.5">{gen.role}</p>
              </div>
              {gen.isCurrent && (
                <span className="flex-shrink-0 bg-[#D4AF37]/10 text-[#B45309] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[#D4AF37]/30 whitespace-nowrap">
                  Current
                </span>
              )}
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">{gen.description}</p>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
              <Award size={14} className="text-[#D4AF37]" />
              <span className="text-[#B45309] font-semibold text-sm">{gen.highlight}</span>
            </div>
          </div>
        </motion.div>

        {/* Center node + connector line */}
        <div className="flex flex-col items-center flex-shrink-0 pt-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`w-14 h-14 rounded-full bg-gradient-to-br ${gen.color} flex items-center justify-center shadow-lg z-10`}
          >
            <Icon size={22} className="text-white" />
          </motion.div>
          {index < generations.length - 1 && (
            <div className="w-px flex-1 min-h-16 bg-gradient-to-b from-slate-300 to-transparent mt-2" />
          )}
        </div>

        {/* Spacer (keeps alternating layout balanced) */}
        <div className="flex-1" />
      </div>

      {/* ── Mobile: single column ── */}
      <div className="flex md:hidden w-full gap-4">
        <div className="flex flex-col items-center flex-shrink-0">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`w-11 h-11 rounded-full bg-gradient-to-br ${gen.color} flex items-center justify-center shadow-md z-10 flex-shrink-0`}
          >
            <Icon size={18} className="text-white" />
          </motion.div>
          {index < generations.length - 1 && (
            <div className="w-px flex-1 min-h-12 bg-gradient-to-b from-slate-300 to-transparent mt-2" />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 pb-8"
        >
          <div className={`bg-white rounded-xl shadow-md border ${gen.borderColor} border-opacity-30 p-5 relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gen.color}`} />
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <span className={`text-[10px] font-semibold tracking-widest uppercase ${gen.accentLabel}`}>
                  {gen.era}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#0F172A] mt-0.5">{gen.name}</h3>
                <p className="text-slate-500 text-xs mt-0.5">{gen.role}</p>
              </div>
              {gen.isCurrent && (
                <span className="flex-shrink-0 bg-[#D4AF37]/10 text-[#B45309] text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full border border-[#D4AF37]/30">
                  Current
                </span>
              )}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{gen.description}</p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
              <Award size={13} className="text-[#D4AF37]" />
              <span className="text-[#B45309] font-semibold text-xs">{gen.highlight}</span>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

export default function Legacy() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="legacy" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[#B45309] text-xs font-semibold tracking-[0.25em] uppercase">
            A Legacy of Justice
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
            Three Generations of{' '}
            <span className="text-[#1E3A8A] italic">Legal Excellence</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
            A family tradition of legal service spanning decades — from the district courts
            of Pilibhit to the hallowed halls of the Allahabad High Court.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 -translate-x-1/2" />

          <div className="flex flex-col gap-0 md:gap-4">
            {generations.map((gen, i) => (
              <TimelineItem key={gen.name} gen={gen} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
