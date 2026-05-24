import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: '39, Ashok Nagar, Prayagraj',
    sub: 'Uttar Pradesh 211001',
    href: 'https://maps.google.com/?q=39+Ashok+Nagar+Prayagraj+UP+211001',
    linkLabel: 'Get Directions',
    external: true,
  },
  {
    icon: Phone,
    label: 'Direct Phone',
    value: '+91 94570 44445',
    sub: 'Available for urgent matters',
    href: 'tel:+919457044445',
    linkLabel: 'Call Now',
    external: false,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Monday – Saturday',
    sub: 'By Appointment Only',
    href: null,
  },
];

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
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
            Visit or{' '}
            <span className="text-[#1E3A8A] italic">Call Us</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Reach out directly to discuss your legal matter. All consultations are
            confidential and handled with the utmost discretion.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Two-column grid: contact details left, map right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* ── Left: Contact Details ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Office photo */}
            <div className="relative rounded-2xl overflow-hidden h-52 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=900&q=80&fit=crop"
                alt="Legal office — Allahabad High Court area, Prayagraj"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/75 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="text-white font-serif font-bold text-lg leading-tight">Prayagraj Office</p>
                <p className="text-[#D4AF37] text-xs tracking-widest uppercase mt-0.5">Uttar Pradesh</p>
              </div>
            </div>

            {/* Contact detail cards */}
            <div className="flex flex-col gap-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#D4AF37]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-[#0F172A] font-semibold text-sm">{item.value}</p>
                      <p className="text-slate-500 text-xs">{item.sub}</p>
                      {item.href && (
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1 text-[#1E3A8A] hover:text-[#D4AF37] text-xs font-semibold mt-1.5 transition-colors duration-150"
                        >
                          {item.linkLabel}
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Primary call CTA */}
            <a
              href="tel:+919457044445"
              className="flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#B45309] text-[#0F172A] font-bold text-base px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-amber-900/30 active:scale-95"
            >
              <Phone size={20} strokeWidth={2.5} />
              Call +91 94570 44445
            </a>

            {/* Confidentiality note */}
            <div className="bg-[#0F172A] rounded-xl p-5 text-center">
              <p className="text-[#D4AF37] font-serif font-semibold text-base mb-1">
                Strictly Confidential
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                All communications are protected by attorney-client privilege.
                Your information will never be shared.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Google Maps embed ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Map container */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100" style={{ height: '420px' }}>
              <iframe
                title="Advocate Arpit Agarwal Office Location — 39 Ashok Nagar, Prayagraj"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.3!2d81.8463!3d25.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb3b3b3b3b3b%3A0x0!2s39%2C%20Ashok%20Nagar%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211001!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Address card below map */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-[#D4AF37]" />
              </div>
              <div className="flex-1">
                <p className="text-[#0F172A] font-serif font-bold text-base leading-tight">
                  39, Ashok Nagar, Prayagraj
                </p>
                <p className="text-slate-500 text-sm mt-0.5">Uttar Pradesh 211001, India</p>
                <p className="text-slate-400 text-xs mt-1">Near Allahabad High Court, Civil Lines</p>
                <a
                  href="https://maps.google.com/?q=39+Ashok+Nagar+Prayagraj+UP+211001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-[#1E3A8A] hover:text-[#D4AF37] text-xs font-semibold transition-colors duration-150"
                >
                  Open in Google Maps
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
