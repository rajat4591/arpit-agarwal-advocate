import { motion } from 'framer-motion';
import { Phone, MapPin, ExternalLink, Scale } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Track Cases', href: '#track' },
  { label: 'Contact', href: '#contact' },
];

const practiceLinks = [
  'High Court Appeals & Writs',
  'Civil & Property Disputes',
  'Appellate & Revision Practice',
  'Bail & Criminal Defense',
  'Motor Accident Claims',
  'Constitutional Matters',
];

export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col mb-5">
              <span className="text-white font-serif text-xl font-bold tracking-widest uppercase">
                Arpit Agarwal
              </span>
              <span className="text-[#D4AF37] text-[10px] font-medium tracking-[0.3em] uppercase mt-0.5">
                Advocate
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Third-generation attorney practicing at the Allahabad High Court, Prayagraj.
              Carrying forward a legacy of integrity and rigorous advocacy.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+919457044445"
                className="flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] text-sm transition-colors duration-150"
              >
                <Phone size={14} />
                +91 94570 44445
              </a>
              <a
                href="https://maps.google.com/?q=39+Ashok+Nagar+Prayagraj+UP+211001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-slate-400 hover:text-[#D4AF37] text-sm transition-colors duration-150"
              >
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                39, Ashok Nagar, Prayagraj, UP 211001
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-500 hover:text-[#D4AF37] text-sm transition-colors duration-150 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Practice Areas
            </h4>
            <ul className="flex flex-col gap-2.5">
              {practiceLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo('#practice')}
                    className="text-slate-500 hover:text-[#D4AF37] text-sm transition-colors duration-150 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'eCourts India — Track Cases', href: 'https://services.ecourts.gov.in/ecourtindia_v6/' },
                { label: 'Allahabad High Court', href: 'https://allahabadhighcourt.in' },
                { label: 'Bar Council of India', href: 'https://www.barcouncilofindia.org' },
                { label: 'Supreme Court of India', href: 'https://main.sci.gov.in' },
                { label: 'Google Maps Directions', href: 'https://maps.google.com/?q=39+Ashok+Nagar+Prayagraj+UP+211001' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-500 hover:text-[#D4AF37] text-sm transition-colors duration-150"
                  >
                    <ExternalLink size={11} className="flex-shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer + Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Legal Disclaimer */}
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 mb-5">
            <div className="flex items-start gap-2">
              <Scale size={14} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 text-xs leading-relaxed">
                <strong className="text-slate-500">Disclaimer (Bar Council of India Rules):</strong>{' '}
                As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise in any manner.
                By accessing this website, you acknowledge that the information provided herein is solely for informational purposes
                and does not constitute legal advice or solicitation. The user wishes to gain more information about Advocate Arpit Agarwal
                for their own information and use. There has been no advertisement, personal communication, solicitation, invitation,
                or inducement of any sort whatsoever from Advocate Arpit Agarwal or any of his associates to solicit any work through this website.
              </p>
            </div>
          </div>

          {/* Copyright row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <p>
              © {new Date().getFullYear()} Advocate Arpit Agarwal. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://maps.google.com/?q=39+Ashok+Nagar+Prayagraj+UP+211001"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
              >
                <MapPin size={11} />
                Get Directions
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="tel:+919457044445"
                className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
              >
                <Phone size={11} />
                +91 94570 44445
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
