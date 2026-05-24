import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 550, suffix: '+', label: 'High Court Cases Represented', description: 'Across Writs, Appeals & Civil Matters' },
  { value: 3, suffix: '', label: 'Generations of Legal Legacy', description: 'A Family Tradition of Justice' },
  { value: 5.0, suffix: '', label: 'Google Rated', description: 'Verified Client Trust', isDecimal: true },
  { value: 15, suffix: '+', label: 'Years of Cumulative Family Precedent', description: 'Deep-Rooted Legal Expertise' },
];

function CountUp({ target, suffix, isDecimal, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, target);
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target, isDecimal]);

  return (
    <span>
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="bg-[#0F172A] py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #D4AF37 0px,
            #D4AF37 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center px-4 relative"
            >
              {/* Divider between items */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
              )}

              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#D4AF37] leading-none mb-2">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                  inView={inView}
                />
              </div>
              <div className="text-white font-semibold text-sm sm:text-base leading-tight mb-1">
                {stat.label}
              </div>
              <div className="text-slate-500 text-xs leading-snug">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
