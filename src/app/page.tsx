"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const fadeUpDelayed = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 }
};

const fadeItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const servicesList = [
  {
    title: "GST Registration",
    icon: "account_balance",
    image: "/services/gst.png",
    desc: "End-to-end support for Proprietorship, LLP, Pvt Ltd, OPC, and Partnership firms.",
    points: ["Fast Filing", "Legal Compliance"]
  },
  {
    title: "Company Registration",
    icon: "corporate_fare",
    image: "/services/company.png",
    desc: "Incorporate your dream with Pvt Ltd, OPC, or LLP registration handled by experts.",
    points: ["Document Drafting", "PAN & TAN Inclusion"]
  },
  {
    title: "Licenses & Certs",
    icon: "verified",
    image: "/services/license.png",
    desc: "Udyam, FSSAI, IEC, Trademark, Hallmark, Shop Act, and more to power your brand.",
    points: ["Brand Protection", "Operational Ready"]
  },
  {
    title: "Income Tax (ITR)",
    icon: "request_quote",
    image: "/services/itr.png",
    desc: "Expert preparation and filing of income tax returns for individuals and corporates.",
    points: ["Maximized Deductions", "Penalty-Free Filing"]
  },
  {
    title: "Accounting & Bookkeeping",
    icon: "receipt_long",
    image: "/services/accounting.png",
    desc: "Comprehensive accounting services to keep your financial records accurate and compliant.",
    points: ["Ledger Maintenance", "Financial Reporting"]
  },
  {
    title: "Trademark & Patents",
    icon: "copyright",
    image: "/services/trademark.png",
    desc: "Secure your business identity with trademark registration and patent filing services.",
    points: ["IP Consultation", "Application Tracking"]
  }
];

export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl dark:bg-slate-950/90 shadow-[0px_24px_48px_rgba(7,28,54,0.08)]"
      >
        <div className="flex justify-between items-center px-4 md:px-8 py-5 max-w-7xl mx-auto">
          <div className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase font-['Manrope']">
            The TAX expert
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-red-600 border-b-2 border-red-600 pb-1 font-['Manrope'] font-bold tracking-tight" href="#home">Home</a>
            <a className="text-slate-300 hover:text-white transition-colors font-['Manrope'] font-bold tracking-tight" href="#services">Services</a>
            <a className="text-slate-300 hover:text-white transition-colors font-['Manrope'] font-bold tracking-tight" href="#about">About</a>
            <a className="text-slate-300 hover:text-white transition-colors font-['Manrope'] font-bold tracking-tight transition-all duration-300" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="bg-secondary text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 hover:bg-secondary-container shadow-lg hover:shadow-secondary/50">
            Consultation
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-8 overflow-hidden relative" id="home">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div {...fadeUp} className="flex-1 text-left z-10 pt-10 md:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Trusted Financial Advisory</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Expert Tax &amp; <br/><span className="text-secondary">Business Solutions</span> You Can Trust
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-body">
              <span className="block font-bold text-white mb-2">Where professional services are affordable!</span>
              <span className="block font-semibold text-secondary mb-3">ACCOUNTS & TAXATION</span>
              Unlock seamless growth with high-precision compliance and registration services designed for the modern entrepreneur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="text-center bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-container hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(183,16,42,0.3)] hover:shadow-[0_15px_40px_rgba(183,16,42,0.5)]">
                Get Consultation
              </a>
              <a href="#about" className="text-center bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 active:scale-95 transition-all">
                Learn More
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-16 flex items-center gap-8 md:gap-12">
              <div>
                <div className="text-3xl font-black text-white">100+</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Clients</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-3xl font-black text-white">5+</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Years Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative w-full"
          >
            <div className="absolute -inset-10 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="relative rounded-3xl overflow-hidden glass-card p-4 transition-transform duration-500 hover:scale-[1.02]">
              <img alt="Professional Consultant" className="rounded-2xl shadow-2xl grayscale-[20%] contrast-125 object-cover w-full h-[400px] md:h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD96r8LtIP0kzIrf1wrMSSKR5w1GqH63UkPAs1CzPOlCxVmusaw93tWAWTtHjqjj3twAPIFoHCX5BBpMc0Uw9dBNuTD_kaqQTCWbV9bqpEsstfDFZAWN1qBFvLWjH85rXQmrhomASzeyituVIF5UELrQVVhZfBWd32Eaido64WffNc3kEmUHQc_q3BxItIc5gaY6cqgVCq_AlgFzAsRlPIkm1niLRaM9-2ZEODop3kpxJ94y5tFj8Py0pe2qGULcMn0hObcu3CybWAl"/>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-surface overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 md:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter">Strategic Tax Services</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => (
              <motion.div key={idx} {...fadeItem} className="group bg-surface-container-lowest rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100/50 hover:-translate-y-3 cursor-default flex flex-col h-full overflow-hidden">
                <div className="w-full h-52 relative overflow-hidden bg-slate-900 border-b border-white/10 group-hover:border-secondary transition-colors duration-500">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-100 opacity-80 transition-all duration-700 mix-blend-lighten" />
                  <div className="absolute -bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 border-4 border-white shadow-lg group-hover:bg-secondary group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 z-10">
                    <span className="material-symbols-outlined text-2xl" data-icon={service.icon}>{service.icon}</span>
                  </div>
                </div>
                <div className="px-8 pb-8 flex-grow flex flex-col pt-6 relative">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors pr-10">{service.title}</h3>
                  <p className="text-on-surface-variant mb-6 leading-relaxed flex-grow">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                        <span className="material-symbols-outlined text-secondary text-lg bg-secondary/10 rounded-full p-1 border border-secondary/20" data-icon="check">check</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-surface-container-low overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-20">
          <motion.div {...fadeUp} className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="bg-white p-6 md:p-10 rounded-[40px] shadow-2xl relative z-10 border border-slate-100/50 hover:shadow-3xl transition-shadow duration-500">
                <div className="flex items-center gap-5 md:gap-6 mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-secondary/20 flex-shrink-0 relative group">
                    <img alt="Mohd. Rahamtulla" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLA_hOATUlNdD3Pv7ffhHvtEhFYx-7MIqyDOojdFCdUUdJhva9Z6ENbheJW1xAMmqxYg8IAj6E913SLuZDMGdUTm35ACGLl4AuxHybXBMF89R1PsJqC-FXjaw3Q8TdnTVWCGSxTqg926EjD0VOhhu4S-cOPAiOkk2uEUuuiwG503v_Zs4pLQ6tyECzdU281N04iQMUFPqiKJjtJXiNBL-KToIz2yr6f_JxP33Nmdo4-3j5kRLQjBc6IKY2xIwk0OLrPzY5dOOvKyhg"/>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Mohd. Rahamtulla <span className="text-sm font-medium text-slate-500 block md:inline md:ml-1">(B.Com)</span></h3>
                    <p className="text-secondary font-bold">Principal Consultant</p>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Specializing in end-to-end compliance and strategic financial advisory. We bridge the gap between complex legal mandates and your business success, ensuring you stay focused on growth while we handle the regulatory heavy lifting.
                </p>
                <div className="space-y-5 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-secondary/10 p-2 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-secondary">
                      <span className="material-symbols-outlined text-xl block" data-icon="call">call</span>
                    </div>
                    <div className="flex flex-col">
                      <a href="tel:+918851667137" className="font-bold text-primary hover:text-secondary transition-colors">+91 8851667137</a>
                      <a href="tel:+919717674543" className="font-bold text-primary hover:text-secondary transition-colors">+91 9717674543</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-secondary/10 p-2 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-secondary">
                      <span className="material-symbols-outlined text-xl block" data-icon="mail">mail</span>
                    </div>
                    <a href="mailto:abdullamansoori37@gmail.com" className="font-medium text-slate-600 hover:text-secondary transition-colors break-all">abdullamansoori37@gmail.com</a>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="bg-secondary/10 p-2 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-secondary mt-1">
                      <span className="material-symbols-outlined text-xl block" data-icon="location_on">location_on</span>
                    </div>
                    <span className="font-medium text-slate-600 leading-tight block mt-1.5">E-57, Vishwakarma Colony,<br/>Pul Pehladpur, New Delhi-44</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeUpDelayed} className="lg:w-1/2 w-full">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm border-l-4 border-secondary pl-3">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-4 mb-10 tracking-tighter leading-tight">Your Success,<br/>Our Regulatory Mandate.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: 'payments', title: 'Affordable Pricing', desc: 'Premium expertise without the premium price tag.' },
                { icon: 'bolt', title: 'Fast Processing', desc: 'Rapid turnarounds for all your registrations.' },
                { icon: 'psychology', title: 'Expert Guidance', desc: 'Tailored solutions by seasoned professionals.' },
                { icon: 'verified_user', title: '100% Compliance', desc: 'Error-free filing and absolute legal security.' }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-white p-3 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-secondary group-hover:-translate-y-1 transition-all duration-300">
                    <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors text-2xl" data-icon={feature.icon} data-weight="fill">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-surface-container-highest overflow-hidden" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
            <motion.div {...fadeUp} className="lg:w-3/5 w-full">
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 tracking-tighter">Book Free Consultation</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                      <input className="w-full bg-slate-50 border border-slate-100 focus:border-secondary focus:ring-4 focus:ring-secondary/10 rounded-2xl py-4 px-6 text-primary transition-all outline-none" placeholder="e.g. John Doe" type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Phone Number</label>
                      <input className="w-full bg-slate-50 border border-slate-100 focus:border-secondary focus:ring-4 focus:ring-secondary/10 rounded-2xl py-4 px-6 text-primary transition-all outline-none" placeholder="+91 00000 00000" type="tel"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Service Required</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border border-slate-100 focus:border-secondary focus:ring-4 focus:ring-secondary/10 rounded-2xl py-4 px-6 text-primary transition-all outline-none appearance-none font-medium">
                        <option>GST Registration</option>
                        <option>Company Incorporation</option>
                        <option>Trademark Filing</option>
                        <option>MSME/Udyam Registration</option>
                        <option>Other Services</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Message</label>
                    <textarea className="w-full bg-slate-50 border border-slate-100 focus:border-secondary focus:ring-4 focus:ring-secondary/10 rounded-2xl py-4 px-6 text-primary transition-all outline-none resize-none" placeholder="How can we help you?" rows={4}></textarea>
                  </div>
                  <button className="w-full bg-primary text-white font-black py-5 rounded-2xl hover:bg-slate-900 active:scale-[0.98] transition-all duration-300 text-lg shadow-[0_10px_30px_rgba(0,6,21,0.2)] hover:shadow-2xl uppercase tracking-widest mt-4">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.div>
            
            <motion.div {...fadeUpDelayed} className="lg:w-2/5 w-full flex flex-col gap-8">
              <div className="flex-1 rounded-[40px] shadow-2xl overflow-hidden min-h-[350px] relative border-4 border-white">
                <iframe 
                  src="https://maps.google.com/maps?q=E-57,%20Vishwakarma%20Colony,%20Pul%20Pehladpur,%20New%20Delhi-44&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="bg-secondary p-8 md:p-10 rounded-[40px] text-white shadow-[0_20px_40px_rgba(183,16,42,0.3)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-white/20 transition-all duration-500"></div>
                <h3 className="text-2xl font-black mb-3 relative z-10">Direct Support</h3>
                <p className="opacity-90 mb-8 font-medium leading-relaxed relative z-10">Need immediate assistance? Our experts are available for a quick confidential call.</p>
                <div className="flex flex-col gap-4 relative z-10">
                  <a className="flex items-center gap-5 bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-2xl hover:bg-white border-transparent hover:text-secondary group/btn transition-all duration-300 hover:-translate-y-1 shadow-lg" href="tel:+918851667137">
                    <div className="bg-white/20 group-hover/btn:bg-secondary/10 p-2 rounded-full transition-colors">
                      <span className="material-symbols-outlined block" data-icon="phone_in_talk" data-weight="fill">phone_in_talk</span>
                    </div>
                    <span className="text-xl font-bold tracking-wide">+91 88516 67137</span>
                  </a>
                  <a className="flex items-center gap-5 bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-2xl hover:bg-white border-transparent hover:text-secondary group/btn transition-all duration-300 hover:-translate-y-1 shadow-lg" href="tel:+919717674543">
                    <div className="bg-white/20 group-hover/btn:bg-secondary/10 p-2 rounded-full transition-colors">
                      <span className="material-symbols-outlined block" data-icon="phone_in_talk" data-weight="fill">phone_in_talk</span>
                    </div>
                    <span className="text-xl font-bold tracking-wide">+91 97176 74543</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 dark:bg-black w-full pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="text-2xl tracking-tighter uppercase font-black text-white mb-6 font-['Manrope']">The TAX expert</div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 pr-4">
              Redefining professional tax consultancy with a focus on speed, affordability, and absolute compliance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary hover:-translate-y-1 transition-all">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary hover:-translate-y-1 transition-all">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">GST Registration</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">Company Incorporation</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">Trademark &amp; Patents</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">Compliance Audit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">About Us</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">Privacy Policy</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">Terms of Service</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-6 tracking-wide">Location</h4>
            <div className="flex gap-3 mb-4 items-start">
              <span className="material-symbols-outlined text-secondary text-lg mt-0.5">location_on</span>
              <p className="text-slate-400 text-sm leading-relaxed">
                E-57, Vishwakarma Colony,<br/>Pul Pehladpur, New Delhi-44
              </p>
            </div>
            <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Office Hours</p>
              <p className="text-white text-sm font-medium">Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 border-t border-white/10 mt-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">© 2024 The Tax Expert. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:text-white transition-colors text-sm font-semibold tracking-wide" href="#">Privacy</a>
            <a className="text-slate-500 hover:text-white transition-colors text-sm font-semibold tracking-wide" href="#">Legal</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
        href="https://wa.me/918851667137" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_-10px_rgba(37,211,102,0.8)] hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center group"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-16 md:right-20 bg-white text-slate-800 text-sm font-bold py-2.5 px-5 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none w-max border border-slate-100">
          Chat with us!
        </span>
      </motion.a>
    </>
  );
}
