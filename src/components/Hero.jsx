import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow — left text side */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Ambient glow — right image side */}
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div className="flex flex-col gap-6">

            {/* Legacy pill — replaces the floating badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                3rd Generation Legal Legacy · Est. 1982
              </span>
            </motion.div>

            {/* Court badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full w-fit -mt-4"
            >
              Allahabad High Court · Prayagraj
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Third-Generation{' '}
              <span className="text-[#D4AF37] italic">Legal Excellence</span>{' '}
              at the Allahabad High Court.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Carrying forward a profound family legacy of integrity, rigorous advocacy,
              and comprehensive legal solutions in Uttar Pradesh.
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex items-center gap-3"
            >
              <div className="h-px w-12 bg-[#D4AF37]" />
              <span className="text-slate-500 text-xs tracking-widest uppercase font-medium">
                Agarwal &amp; Associates
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a
                href="tel:+919457044445"
                className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B45309] text-[#0F172A] font-semibold px-7 py-3.5 rounded transition-all duration-200 shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 active:scale-95 text-sm"
              >
                Book a Consultation
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => scrollTo('#practice')}
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-[#D4AF37]/60 text-white hover:text-[#D4AF37] font-medium px-7 py-3.5 rounded transition-all duration-200 text-sm"
              >
                View Practice Areas
              </button>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl font-serif">550+</span>
                <span className="text-slate-500 text-xs">HC Cases</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl font-serif">12,500+</span>
                <span className="text-slate-500 text-xs">Total Cases</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[#D4AF37] font-bold text-xl font-serif">44+ Yrs</span>
                <span className="text-slate-500 text-xs">Since 1982</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative gold frames */}
            <div className="relative">
              <div className="absolute -inset-3 border border-[#D4AF37]/20 rounded-2xl" />
              <div className="absolute -inset-6 border border-[#D4AF37]/10 rounded-3xl" />

              <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] lg:w-96 lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                <img
                  src="/arpit.jpg"
                  alt="Advocate Arpit Agarwal — Allahabad High Court"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=85&fit=crop&crop=faces';
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Name card overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-serif font-bold text-lg leading-tight">
                    Advocate Arpit Agarwal
                  </p>
                  <p className="text-[#D4AF37] text-xs tracking-widest uppercase mt-1">
                    Allahabad High Court
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#legacy')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-[#D4AF37] transition-colors flex flex-col items-center gap-1"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
