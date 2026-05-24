import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Landmark, Scale, BookOpen, Award, MapPin, Briefcase } from 'lucide-react';

// Ascending order: current generation at top, founding roots at bottom
const generations = [
  {
    icon: Landmark,
    era: 'Third Generation · Present',
    name: 'Advocate Arpit Agarwal',
    role: 'Allahabad High Court, Prayagraj',
    description:
      'Elevating the family legacy to the High Court level, Advocate Arpit Agarwal specializes in complex appellate matters, constitutional writs, and revisions before the Hon\'ble Allahabad High Court at Prayagraj. Combining the trial court wisdom inherited from his family with sharp appellate strategy, he delivers results in the most challenging legal arenas.',
    image: '/arpit.jpg',
    imageAlt: 'Advocate Arpit Agarwal',
    metrics: [
      { value: '550+', label: 'HC Cases' },
      { value: '5.0★', label: 'Google Rated' },
    ],
    location: 'Prayagraj, Uttar Pradesh',
    practice: 'High Court Appeals, Writs & Constitutional Matters',
    highlight: '550+ High Court Cases Represented',
    accentFrom: 'from-[#92400e]',
    accentTo: 'to-[#78350f]',
    accentBorder: 'border-amber-600',
    accentText: 'text-amber-700',
    accentBg: 'bg-amber-50',
    isCurrent: true,
  },
  {
    icon: Scale,
    era: 'Second Generation · Active',
    name: 'Advocate Sanjay Kumar Agarwal',
    role: 'District Court, Pilibhit · Pilibhit, Uttar Pradesh',
    description:
      'Based in Pilibhit, Uttar Pradesh, Advocate Sanjay Kumar Agarwal has established a formidable legacy over more than four decades of active practice. Renowned for his deep expertise in complex property disputes, comprehensive civil litigation, and family law matters, his practice spans critical trial and appellate advocacy. He has successfully represented clients in over 12,000 cases across Pilibhit, Khatima, and adjoining regions, while regularly advancing client interests before the High Court of Judicature at Allahabad and the High Court of Uttarakhand at Nainital—earning the enduring trust of generations of families and businesses throughout the region.',
    image: '/father.jpg.png',
    imageAlt: 'Advocate Sanjay Kumar Agarwal',
    metrics: [
      { value: '12,000+', label: 'Cases' },
      { value: '44+ Yrs', label: 'Since 1982' },
    ],
    location: 'Pilibhit, Uttar Pradesh',
    practice: 'Civil Litigation, Property Disputes & Family Law',
    highlight: '12,000+ Cases Represented Across Pilibhit, Khatima & Adjoining Regions',
    accentFrom: 'from-[#1E3A8A]',
    accentTo: 'to-[#1e40af]',
    accentBorder: 'border-blue-600',
    accentText: 'text-blue-700',
    accentBg: 'bg-blue-50',
    isCurrent: false,
  },
  {
    icon: BookOpen,
    era: 'First Generation · Founding Legacy',
    name: 'Late Tribhuvan Saran Agarwal, Advocate',
    role: 'District Court, Pilibhit',
    description:
      'The cornerstone of the Agarwal legal dynasty. Late Tribhuvan Saran Agarwal established the family\'s deep legal roots in Pilibhit, instilling core values of absolute integrity, unwavering dedication to justice, and a profound respect for the rule of law. His legacy became the bedrock upon which two generations of advocates would build their distinguished careers.',
    image: '/grandfather.jpg.png',
    imageAlt: 'Advocate Late Tribhuvan Saran Agarwal',
    metrics: [
      { value: '3', label: 'Generations' },
      { value: '∞', label: 'Legacy' },
    ],
    location: 'Pilibhit, Uttar Pradesh',
    practice: 'District Court Practice & Founding Legal Values',
    highlight: 'The Founding Vision — Roots of the Legacy',
    accentFrom: 'from-slate-600',
    accentTo: 'to-slate-700',
    accentBorder: 'border-slate-500',
    accentText: 'text-slate-600',
    accentBg: 'bg-slate-50',
    isCurrent: false,
  },
];

function GenerationCard({ gen, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = gen.icon;
  // Alternate: even index cards slide from left, odd from right
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Connector line to next card */}
      {index < generations.length - 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-px h-8 md:h-10 bg-gradient-to-b from-slate-300 to-slate-200 z-0" />
      )}

      <motion.div
        initial={{ opacity: 0, x: isEven ? -36 : 36, y: 16 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`relative bg-white rounded-2xl shadow-lg border ${gen.accentBorder} border-opacity-40 overflow-hidden hover:shadow-2xl transition-shadow duration-300 z-10`}
      >
        {/* Top accent gradient bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${gen.accentFrom} ${gen.accentTo}`} />

        <div className="p-6 md:p-8">
          {/* Era badge + Current tag */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className={`inline-flex items-center gap-1.5 ${gen.accentBg} border ${gen.accentBorder} border-opacity-40 px-3 py-1 rounded-full`}>
              <Icon size={12} className={gen.accentText} />
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${gen.accentText}`}>
                {gen.era}
              </span>
            </div>
            {gen.isCurrent && (
              <span className="flex-shrink-0 bg-[#D4AF37]/10 text-[#B45309] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[#D4AF37]/40">
                Current
              </span>
            )}
          </div>

          {/* Main content: portrait left, details right */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">

            {/* Portrait */}
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className={`p-1 rounded-full bg-gradient-to-br ${gen.accentFrom} ${gen.accentTo} shadow-lg`}>
                <img
                  src={gen.image}
                  alt={gen.imageAlt}
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-2 border-amber-500 shadow-md"
                  loading="lazy"
                  onError={(e) => {
                    // Graceful fallback: show initials avatar if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback initials avatar (hidden by default) */}
                <div
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${gen.accentFrom} ${gen.accentTo} items-center justify-center hidden`}
                  aria-hidden="true"
                >
                  <span className="text-white font-serif font-bold text-2xl md:text-3xl">
                    {gen.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Metrics pills below portrait */}
              <div className="flex gap-2 mt-1">
                {gen.metrics.map((m) => (
                  <div key={m.label} className={`flex flex-col items-center ${gen.accentBg} border ${gen.accentBorder} border-opacity-30 rounded-lg px-3 py-1.5`}>
                    <span className={`font-serif font-bold text-base leading-none ${gen.accentText}`}>{m.value}</span>
                    <span className="text-slate-500 text-[9px] uppercase tracking-wide mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Text details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0F172A] leading-tight">
                {gen.name}
              </h3>

              {/* Location + Court */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 mb-3">
                <span className="flex items-center gap-1 text-slate-500 text-xs">
                  <MapPin size={11} className="flex-shrink-0" />
                  {gen.location}
                </span>
                <span className="text-slate-300 hidden sm:inline">·</span>
                <span className="flex items-center gap-1 text-slate-500 text-xs">
                  <Briefcase size={11} className="flex-shrink-0" />
                  {gen.role}
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {gen.description}
              </p>

              {/* Practice area tag */}
              <div className={`inline-flex items-center gap-1.5 ${gen.accentBg} border ${gen.accentBorder} border-opacity-30 rounded-lg px-3 py-1.5 mb-4`}>
                <Briefcase size={11} className={gen.accentText} />
                <span className={`text-xs font-medium ${gen.accentText}`}>{gen.practice}</span>
              </div>

              {/* Highlight footer */}
              <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                <Award size={14} className="text-[#D4AF37] flex-shrink-0" />
                <span className="text-[#B45309] font-semibold text-sm">{gen.highlight}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Legacy() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="legacy" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
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

        {/* Generation Cards stacked with connectors */}
        <div className="flex flex-col gap-8 md:gap-10">
          {generations.map((gen, i) => (
            <GenerationCard key={gen.name} gen={gen} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
