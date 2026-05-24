import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, CheckCircle, Send, ChevronDown } from 'lucide-react';

const caseCategories = [
  'Select Case Category',
  'High Court Appeals & Writs',
  'Civil & Property Disputes',
  'Appellate & Revision Practice',
  'Bail & Criminal Defense',
  'Motor Accident Claims',
  'Constitutional Matters',
  'Other / Not Sure',
];

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: '39, Ashok Nagar, Prayagraj',
    sub: 'Uttar Pradesh 211001',
    href: 'https://maps.google.com/?q=39+Ashok+Nagar+Prayagraj+UP+211001',
    linkLabel: 'Get Directions →',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 94570 44445',
    sub: 'Available for urgent matters',
    href: 'tel:+919457044445',
    linkLabel: 'Call Now →',
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

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Select Case Category',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address.';
    if (form.category === 'Select Case Category') e.category = 'Please select a case category.';
    if (!form.message.trim() || form.message.trim().length < 20)
      e.message = 'Please provide a brief description (at least 20 characters).';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass = (field) =>
    `w-full bg-white border rounded-lg px-4 py-3 text-[#0F172A] text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200'
        : 'border-slate-200 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A]'
    }`;

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
            Book a{' '}
            <span className="text-[#1E3A8A] italic">Consultation</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Reach out to discuss your legal matter. All consultations are confidential
            and handled with the utmost discretion.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Office image */}
            <div className="relative rounded-2xl overflow-hidden h-48 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&q=80&fit=crop"
                alt="Legal office — Allahabad High Court area"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-serif font-bold text-base">Prayagraj Office</p>
                <p className="text-[#D4AF37] text-xs tracking-wide">Uttar Pradesh</p>
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
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
                    <div>
                      <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-[#0F172A] font-semibold text-sm">{item.value}</p>
                      <p className="text-slate-500 text-xs">{item.sub}</p>
                      {item.href && (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-[#1E3A8A] hover:text-[#D4AF37] text-xs font-medium mt-1 inline-block transition-colors duration-150"
                        >
                          {item.linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

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

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-7 md:p-9">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-2">
                        Message Sent Successfully
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Thank you for reaching out. Advocate Agarwal's office will review
                        your matter and contact you within 24 hours.
                      </p>
                    </div>
                    <div className="bg-[#F8FAFC] rounded-xl border border-slate-100 p-4 text-sm text-slate-600 max-w-sm">
                      For urgent matters, call directly:{' '}
                      <a href="tel:+919457044445" className="text-[#1E3A8A] font-semibold hover:underline">
                        +91 94570 44445
                      </a>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', category: 'Select Case Category', message: '' }); }}
                      className="text-slate-400 hover:text-slate-600 text-sm underline transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-1">
                        Send a Message
                      </h3>
                      <p className="text-slate-400 text-sm">
                        All fields marked with * are required.
                      </p>
                    </div>

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass('name')}
                          autoComplete="name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className={inputClass('phone')}
                          autoComplete="tel"
                          maxLength={10}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Email Address <span className="text-slate-400 font-normal normal-case">(optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass('email')}
                        autoComplete="email"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Case Category */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Case Category *
                      </label>
                      <div className="relative">
                        <select
                          name="category"
                          value={form.category}
                          onChange={handleChange}
                          className={`${inputClass('category')} appearance-none pr-10 cursor-pointer`}
                        >
                          {caseCategories.map((cat) => (
                            <option key={cat} value={cat} disabled={cat === 'Select Case Category'}>
                              {cat}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Brief Description of Your Matter *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Please briefly describe your legal matter, the court involved, and any relevant case numbers..."
                        rows={4}
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E3A8A] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg active:scale-95 mt-1"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-slate-400 text-xs text-center leading-relaxed">
                      By submitting this form, you agree that your information will be used
                      solely to respond to your legal inquiry. All communications are confidential.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
