import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink, Landmark, Scale } from 'lucide-react';

const offices = [
  {
    id: 'prayagraj',
    icon: Landmark,
    advocate: 'Advocate Arpit Agarwal',
    court: 'Allahabad High Court',
    tag: 'High Court Practice',
    address: 'Allahabad High Court Chambers',
    city: 'Prayagraj, Uttar Pradesh',
    phone: '+91 94570 44445',
    phoneHref: 'tel:+919457044445',
    hours: 'Available Daily · By Appointment',
    mapsHref: 'https://www.google.com/maps/place/Arpit+Agarwal,+Advocate/@25.4704995,81.8202242,17z/data=!3m1!4b1!4m6!3m5!1s0x399acbb93b8b2677:0xd859776f9c3f2738!8m2!3d25.4704947!4d81.8227991!16s%2Fg%2F11n59xkx_b',
    // Arpit Agarwal, Advocate — Prayagraj, from Google Maps place link
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8!2d81.8202242!3d25.4704995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbb93b8b2677%3A0xd859776f9c3f2738!2sArpit%20Agarwal%2C%20Advocate!5e0!3m2!1sen!2sin!4v1700000000001',
    accentFrom: 'from-[#92400e]',
    accentTo: 'to-[#78350f]',
    accentBorder: 'border-amber-600',
    accentText: 'text-amber-700',
    accentBg: 'bg-amber-50',
    btnClass:
      'bg-[#D4AF37] hover:bg-[#B45309] text-[#0F172A]',
    tagClass: 'bg-amber-50 border-amber-300 text-amber-700',
  },
  {
    id: 'pilibhit',
    icon: Scale,
    advocate: 'Advocate Sanjay Kumar Agarwal',
    court: 'District Court, Pilibhit',
    tag: 'District Court Practice',
    address: 'Civil Lines, District Court Campus',
    city: 'Pilibhit, Uttar Pradesh – 262001',
    phone: '+91 98376 84448',
    phoneHref: 'tel:+919837684448',
    hours: 'Available Daily · By Appointment',
    mapsHref: 'https://www.google.com/maps/place/Arpit+Agarwal/@28.6264891,79.799527,17z/data=!3m1!4b1!4m6!3m5!1s0x39a03f174e21b39f:0x3e17a977881b7d54!8m2!3d28.6264844!4d79.8021019!16s%2Fg%2F119ttv3k4',
    // Arpit Agarwal office, Pilibhit — from Google Maps place link
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.2!2d79.799527!3d28.6264891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a03f174e21b39f%3A0x3e17a977881b7d54!2sArpit%20Agarwal!5e0!3m2!1sen!2sin!4v1700000000002',
    accentFrom: 'from-[#1E3A8A]',
    accentTo: 'to-[#1e40af]',
    accentBorder: 'border-blue-600',
    accentText: 'text-blue-700',
    accentBg: 'bg-blue-50',
    btnClass:
      'bg-[#1E3A8A] hover:bg-[#1e40af] text-white',
    tagClass: 'bg-blue-50 border-blue-300 text-blue-700',
  },
];

function OfficeCard({ office, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = office.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-white rounded-2xl border ${office.accentBorder} border-opacity-30 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col`}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${office.accentFrom} ${office.accentTo}`} />

      <div className="p-6 md:p-7 flex flex-col gap-5 flex-1">

        {/* Header: icon + court tag + advocate name */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${office.accentFrom} ${office.accentTo} shadow-md`}>
              <Icon size={18} className="text-white" />
            </div>
            <div>
              <span className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border ${office.tagClass} mb-1.5`}>
                {office.tag}
              </span>
              <h3 className="font-serif text-lg md:text-xl font-bold text-[#0F172A] leading-tight">
                {office.advocate}
              </h3>
              <p className={`text-sm font-semibold mt-0.5 ${office.accentText}`}>
                {office.court}
              </p>
            </div>
          </div>
        </div>

        {/* Address + Hours */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-3.5">
            <MapPin size={15} className={`${office.accentText} flex-shrink-0 mt-0.5`} />
            <div>
              <p className="text-[#0F172A] font-semibold text-sm leading-snug">{office.address}</p>
              <p className="text-slate-500 text-xs mt-0.5">{office.city}</p>
              <a
                href={office.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-xs font-semibold mt-1.5 transition-colors duration-150 ${office.accentText} hover:opacity-70`}
              >
                Open in Google Maps
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3.5">
            <Clock size={15} className={`${office.accentText} flex-shrink-0`} />
            <div>
              <p className="text-[#0F172A] font-semibold text-sm">{office.hours}</p>
              <p className="text-slate-400 text-xs">Consultations by prior appointment only</p>
            </div>
          </div>
        </div>

        {/* Call CTA */}
        <a
          href={office.phoneHref}
          className={`flex items-center justify-center gap-2.5 ${office.btnClass} font-bold text-sm px-5 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95`}
        >
          <Phone size={16} strokeWidth={2.5} />
          {office.phone}
        </a>

        {/* Map embed */}
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-1" style={{ minHeight: '220px' }}>
          <iframe
            title={`Map — ${office.court}`}
            src={office.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '220px', display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </motion.div>
  );
}

export default function Contact() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC]">
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
            Our Locations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
            Two Offices.{' '}
            <span className="text-[#1E3A8A] italic">One Legacy.</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
            Serving clients across Uttar Pradesh from our High Court chambers in Prayagraj
            and our established District Court practice in Pilibhit.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Dual office grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8">
          {offices.map((office, i) => (
            <OfficeCard key={office.id} office={office} index={i} />
          ))}
        </div>

        {/* Bottom confidentiality strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 bg-[#0F172A] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-[#D4AF37] font-serif font-semibold text-base">
              Strictly Confidential Consultations
            </p>
            <p className="text-slate-400 text-xs mt-1 leading-relaxed max-w-lg">
              All communications are protected by attorney-client privilege.
              Your information will never be shared with any third party.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:+919457044445"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B45309] text-[#0F172A] font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <Phone size={14} strokeWidth={2.5} />
              Prayagraj: +91 94570 44445
            </a>
            <a
              href="tel:+919837684448"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <Phone size={14} strokeWidth={2.5} />
              Pilibhit: +91 98376 84448
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
