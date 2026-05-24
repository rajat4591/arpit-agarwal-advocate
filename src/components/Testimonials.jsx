import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar Sharma',
    role: 'Civil Dispute Client',
    location: 'Prayagraj, UP',
    rating: 5,
    text: 'Advocate Arpit Agarwal demonstrated exceptional professionalism and sharp legal acumen throughout our property dispute case. His strategic clarity in navigating complex High Court procedures was remarkable. We secured a favorable outcome that we thought was impossible.',
    initials: 'RK',
    color: '#1E3A8A',
  },
  {
    name: 'Priya Verma',
    role: 'Writ Petition Client',
    location: 'Lucknow, UP',
    rating: 5,
    text: 'I approached Advocate Agarwal for a constitutional writ matter. His deep understanding of appellate practice and his calm, methodical approach gave me confidence throughout the proceedings. The case was handled with utmost integrity and diligence.',
    initials: 'PV',
    color: '#065f46',
  },
  {
    name: 'Suresh Chandra Mishra',
    role: 'Criminal Revision Client',
    location: 'Allahabad, UP',
    rating: 5,
    text: 'In a high-stakes criminal revision matter, Advocate Arpit Agarwal\'s preparation was thorough and his arguments before the bench were precise and compelling. His family\'s legal legacy is evident in every aspect of his practice. Highly recommended.',
    initials: 'SC',
    color: '#7c3aed',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 p-7 flex flex-col gap-5 relative overflow-hidden"
    >
      {/* Background quote mark */}
      <div className="absolute top-4 right-5 opacity-[0.04]">
        <Quote size={80} className="text-[#0F172A]" />
      </div>

      {/* Rating */}
      <StarRating count={t.rating} />

      {/* Quote */}
      <blockquote className="text-slate-600 text-sm leading-relaxed relative z-10">
        "{t.text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] text-sm">{t.name}</p>
          <p className="text-slate-400 text-xs">{t.role} · {t.location}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
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
            Client Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
            Verified Social{' '}
            <span className="text-[#1E3A8A] italic">Proof</span>
          </h2>

          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm mt-2 mb-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <span className="font-serif font-bold text-2xl text-[#0F172A]">5.0</span>
              <span className="text-slate-500 text-xs">out of 5 Reviews</span>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="flex flex-col items-start">
              <span className="text-[#0F172A] font-semibold text-sm">Google Verified</span>
              <span className="text-slate-500 text-xs">Allahabad High Court Practice</span>
              <span className="text-[#B45309] text-xs font-medium mt-1">★ Trusted by Clients Across UP</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
