import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Dual Offices', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-800/60'
          : 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">

        {/* Logo — "AGARWAL & ASSOCIATES" */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex flex-col leading-tight group"
          aria-label="Agarwal & Associates — Home"
        >
          <span className="text-white font-serif text-base md:text-lg font-bold tracking-[0.18em] uppercase group-hover:text-[#D4AF37] transition-colors duration-200">
            Agarwal &amp; Associates
          </span>
          <span className="text-[#D4AF37] text-[9px] md:text-[10px] font-sans font-semibold tracking-[0.35em] uppercase mt-0.5">
            Just and Legal
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-300 hover:text-[#D4AF37] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="tel:+919457044445"
            className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B45309] text-[#0F172A] font-semibold text-sm px-4 py-2 rounded transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-amber-900/30 active:scale-95"
          >
            <Phone size={14} strokeWidth={2.5} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800/50 px-4 pb-6 pt-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 text-base font-medium py-3 px-3 rounded transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919457044445"
                className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B45309] text-[#0F172A] font-semibold text-sm px-4 py-3 rounded mt-3 transition-colors duration-200"
              >
                <Phone size={15} strokeWidth={2.5} />
                Call Now: +91 94570 44445
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
