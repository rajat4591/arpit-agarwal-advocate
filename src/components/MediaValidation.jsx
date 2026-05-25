import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Newspaper, ExternalLink } from 'lucide-react';

// All newspaper clipping images from public/newspaper articles/
// Fill in `link` values once you have the article URLs
const articles = [
  {
    src: '/newspaper%20articles/newspaper_article_arpit.jpg',
    alt: 'Allahabad High Court Landmark Property Dispute Ruling — Shah Times',
    caption: 'Allahabad High Court · Property Dispute',
    link: null,
  },
  {
    src: '/newspaper%20articles/WhatsApp%20Image%202026-05-25%20at%206.36.50%20PM.jpeg',
    alt: 'Newspaper coverage — Advocate Arpit Agarwal case',
    caption: 'Press Coverage · May 2026',
    link: null,
  },
  {
    src: '/newspaper%20articles/WhatsApp%20Image%202026-05-25%20at%206.36.51%20PM%20(1).jpeg',
    alt: 'Newspaper coverage — Advocate Arpit Agarwal case',
    caption: 'Press Coverage · May 2026',
    link: null,
  },
  {
    src: '/newspaper%20articles/WhatsApp%20Image%202026-05-25%20at%206.36.51%20PM.jpeg',
    alt: 'Newspaper coverage — Advocate Arpit Agarwal case',
    caption: 'Press Coverage · May 2026',
    link: null,
  },
  {
    src: '/newspaper%20articles/WhatsApp%20Image%202026-05-25%20at%206.36.52%20PM%20(1).jpeg',
    alt: 'Newspaper coverage — Advocate Arpit Agarwal case',
    caption: 'Press Coverage · May 2026',
    link: null,
  },
  {
    src: '/newspaper%20articles/WhatsApp%20Image%202026-05-25%20at%206.36.52%20PM.jpeg',
    alt: 'Newspaper coverage — Advocate Arpit Agarwal case',
    caption: 'Press Coverage · May 2026',
    link: null,
  },
  {
    src: '/newspaper%20articles/WhatsApp%20Image%202026-05-25%20at%206.36.53%20PM%20(1).jpeg',
    alt: 'Newspaper coverage — Advocate Arpit Agarwal case',
    caption: 'Press Coverage · May 2026',
    link: null,
  },
  {
    src: '/newspaper%20articles/WhatsApp%20Image%202026-05-25%20at%206.36.53%20PM.jpeg',
    alt: 'Newspaper coverage — Advocate Arpit Agarwal case',
    caption: 'Press Coverage · May 2026',
    link: null,
  },
];

// Duplicate the array so the marquee loops seamlessly
const doubled = [...articles, ...articles];

function ArticleCard({ article }) {
  return (
    <div className="flex-shrink-0 w-64 md:w-80 mx-3 flex flex-col bg-slate-900 border border-slate-700/60 rounded-xl overflow-hidden shadow-lg hover:border-amber-500 transition-colors duration-300 group">
      {/* Image */}
      <div className="h-64 md:h-80 bg-slate-950 flex items-center justify-center p-3">
        <img
          src={article.src}
          alt={article.alt}
          className="w-full h-full object-contain rounded"
          loading="lazy"
        />
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex items-center justify-between gap-2 border-t border-slate-700/50">
        <p className="text-slate-400 text-xs truncate">{article.caption}</p>
        {article.link ? (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1 text-[#D4AF37] hover:text-amber-300 text-xs font-semibold transition-colors duration-150"
          >
            View Article
            <ExternalLink size={10} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function MediaValidation() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="media"
      className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden"
    >
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

      {/* Section header */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-12 md:mb-16 px-4"
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

        {/* Pause hint */}
        <p className="text-slate-600 text-xs mt-4 tracking-wide">
          Hover over any clipping to pause and read
        </p>
      </motion.div>

      {/* Carousel wrapper — full bleed, overflow hidden */}
      <div className="relative z-10">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0F172A] to-transparent z-20 pointer-events-none" />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0F172A] to-transparent z-20 pointer-events-none" />

        {/* Scrolling track */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex"
            style={{
              animation: `marquee 40s linear infinite`,
              animationPlayState: paused ? 'paused' : 'running',
              width: 'max-content',
            }}
          >
            {doubled.map((article, i) => (
              <ArticleCard key={i} article={article} />
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe injected via style tag */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
