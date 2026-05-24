import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Landmark, FileText, RotateCcw, Shield, Scale, Gavel } from 'lucide-react';

const areas = [
  {
    icon: Landmark,
    title: 'High Court Appeals & Writs',
    subtitle: 'Constitutional & Appellate Practice',
    description:
      'Specializing in Writ Appeals, Special Civil Applications, and Public Interest Litigations (PIL) before the Single and Division Benches of the Allahabad High Court.',
    tags: ['Writ Petitions', 'PIL', 'Special Civil Applications', 'Division Bench'],
    accent: '#1E3A8A',
  },
  {
    icon: FileText,
    title: 'Civil & Property Disputes',
    subtitle: 'Property, Tenancy & Civil Litigation',
    description:
      'Extensive experience handling Rent Control matters, Civil Suits, Revisions, and First Appeals. Protecting property rights and resolving complex civil disputes with precision.',
    tags: ['Rent Control', 'Civil Suits', 'Property Rights', 'First Appeals'],
    accent: '#065f46',
  },
  {
    icon: RotateCcw,
    title: 'Appellate & Revision Practice',
    subtitle: 'Strategic Appellate Representation',
    description:
      'Strategic representation in Criminal Revisions, Leave Petitions, and complex appellate challenges. Turning adverse trial court outcomes through meticulous appellate strategy.',
    tags: ['Criminal Revisions', 'Leave Petitions', 'Appellate Strategy', 'Revisions'],
    accent: '#7c3aed',
  },
  {
    icon: Shield,
    title: 'Bail & Criminal Defense',
    subtitle: 'Liberty & Criminal Proceedings',
    description:
      'Handling high-stakes Bail Applications, Anticipatory Bails, and comprehensive criminal defense strategies. Protecting your liberty with urgency and legal precision.',
    tags: ['Bail Applications', 'Anticipatory Bail', 'Criminal Defense', 'Urgent Matters'],
    accent: '#b91c1c',
  },
  {
    icon: Scale,
    title: 'Motor Accident Claims',
    subtitle: 'Compensation & Tribunal Practice',
    description:
      'Leveraging the family\'s deep expertise in motor accident claims to secure fair compensation for victims and families through tribunal and appellate proceedings.',
    tags: ['MACT Claims', 'Compensation', 'Insurance Disputes', 'Tribunal'],
    accent: '#b45309',
  },
  {
    icon: Gavel,
    title: 'Constitutional Matters',
    subtitle: 'Fundamental Rights & Public Law',
    description:
      'Challenging unconstitutional actions, enforcing fundamental rights, and representing clients in matters of significant constitutional importance before the High Court.',
    tags: ['Fundamental Rights', 'Article 226', 'Public Law', 'Constitutional Writs'],
    accent: '#0F172A',
  },
];

function PracticeCard({ area, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = area.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Top accent */}
      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
        style={{ backgroundColor: area.accent }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${area.accent}15` }}
        >
          <Icon size={22} style={{ color: area.accent }} />
        </div>

        {/* Title */}
        <div className="mb-3">
          <h3 className="font-serif text-lg font-bold text-[#0F172A] leading-tight group-hover:text-[#1E3A8A] transition-colors duration-200">
            {area.title}
          </h3>
          <p className="text-xs font-medium tracking-wide mt-0.5" style={{ color: area.accent }}>
            {area.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed flex-1">{area.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-50">
          {area.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2.5 py-1 rounded-full border"
              style={{
                color: area.accent,
                borderColor: `${area.accent}30`,
                backgroundColor: `${area.accent}08`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PracticeAreas() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="practice" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#B45309] text-xs font-semibold tracking-[0.25em] uppercase">
            Areas of Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
            Comprehensive Legal{' '}
            <span className="text-[#1E3A8A] italic">Solutions</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
            From constitutional writs to criminal defense — translating complex legal
            challenges into clear, strategic solutions for individuals and businesses.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <PracticeCard key={area.title} area={area} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm mb-4">
            Not sure which category applies to your matter?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E3A8A] text-white font-semibold px-7 py-3 rounded transition-all duration-200 text-sm shadow-md hover:shadow-lg active:scale-95"
          >
            Discuss Your Case
          </button>
        </motion.div>
      </div>
    </section>
  );
}
