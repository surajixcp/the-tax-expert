"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
};

const fadeUpDelayed = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }
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
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
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

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, TechInnovate Systems",
    text: "The TAX expertt transformed how we handle our corporate filings. Fast, accurate, and incredibly responsive. Highly advised for any growing startup.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Founder, Patel Trades & Co.",
    text: "I was struggling with GST compliance for months until I found this firm. Within a week, everything was sorted. Top-class service and very affordable.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Managing Director, Singh Logistics",
    text: "Their expert guidance during our company registration saved us both time and money. It's rare to find such transparency and professionalism in taxation.",
    rating: 5
  },
  {
    name: "Suresh Kumar",
    role: "Retail Business Owner",
    text: "Outstanding bookkeeping and ITR services. They take the headache out of taxation so I can focus purely on running my business. A trustworthy partner.",
    rating: 5
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            "name": "The TAX expertt",
            "image": "https://thetaxexpertt.com/og-image.jpg",
            "@id": "https://thetaxexpertt.com/",
            "url": "https://thetaxexpertt.com/",
            "telephone": "+918851667137",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "E-57, Vishwakarma Colony, Pul Pehladpur",
              "addressLocality": "New Delhi",
              "postalCode": "110044",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.5031,
              "longitude": 77.2945
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "19:00"
            },
            "priceRange": "$$"
          })
        }}
      />
      
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 w-full z-50 px-4 md:px-8 pt-6 pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto bg-slate-950/70 backdrop-blur-2xl border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.5)] rounded-full pointer-events-auto relative overflow-hidden"
        >
          {/* subtle glow inside nav */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-transparent opacity-50"></div>
          
          <div className="flex justify-between items-center px-6 md:px-8 py-3.5 relative z-10">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-red-800 flex items-center justify-center text-white font-black shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform">
                T
              </div>
              <div className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase font-['Manrope'] flex items-center gap-1">
                The TAX <span className="text-secondary opacity-90 drop-shadow-[0_0_8px_rgba(183,16,42,0.5)]">expertt</span>
              </div>
            </a>
            <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md">
              <a className="px-5 py-2 rounded-full text-white bg-white/10 font-['Manrope'] font-bold text-sm tracking-wide shadow-sm" href="/#home">Home</a>
              <a className="px-5 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all font-['Manrope'] font-bold text-sm tracking-wide" href="/#services">Services</a>
              <a className="px-5 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all font-['Manrope'] font-bold text-sm tracking-wide" href="/#about">About</a>
              <a className="px-5 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all font-['Manrope'] font-bold text-sm tracking-wide" href="/testimonials">Testimonials</a>
            </div>
            <a href="/#contact" className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <span>Consultation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white w-10 h-10 rounded-full bg-white/10 flex items-center justify-center pointer-events-auto"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-[80%] sm:w-[350px] bg-slate-950/95 backdrop-blur-xl border-l border-white/10 z-[70] p-6 flex flex-col transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'} overflow-y-auto`}>
          <div className="flex justify-between items-center mb-12 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-red-800 flex items-center justify-center text-white font-black shadow-lg shadow-secondary/30">
                T
              </div>
              <div className="text-xl font-black tracking-tighter text-white uppercase font-['Manrope'] flex items-center gap-1">
                The TAX <span className="text-secondary opacity-90">expertt</span>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform active:scale-95"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div className="flex flex-col gap-6 mt-4">
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white border-b border-white/5 pb-4 flex justify-between items-center group" href="/#home">
              <span>Home</span>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors">chevron_right</span>
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-300 hover:text-white border-b border-white/5 pb-4 flex justify-between items-center group transition-colors" href="/#services">
              <span>Services</span>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors">chevron_right</span>
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-300 hover:text-white border-b border-white/5 pb-4 flex justify-between items-center group transition-colors" href="/#about">
              <span>About</span>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors">chevron_right</span>
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-300 hover:text-white border-b border-white/5 pb-4 flex justify-between items-center group transition-colors" href="/testimonials">
              <span>Testimonials</span>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors">chevron_right</span>
            </a>
          </div>
          
          <div className="mt-auto pt-8 pb-4">
            <a onClick={() => setIsMobileMenuOpen(false)} href="/#contact" className="flex items-center justify-center gap-2 bg-white text-slate-950 px-6 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)] w-full">
              <span>Consultation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-950 pt-40 md:pt-52 pb-24 md:pb-32 px-6 md:px-8 overflow-hidden relative min-h-screen flex items-center" id="home">
        {/* Animated Background Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-10 w-[300px] h-[300px] md:-right-20 md:w-[600px] md:h-[600px] rounded-full bg-secondary/10 blur-[80px] md:blur-[120px] mix-blend-screen"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, -50, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 -left-10 w-[250px] h-[250px] md:-left-20 md:w-[500px] md:h-[500px] rounded-full bg-blue-600/10 blur-[80px] md:blur-[120px] mix-blend-screen"
          ></motion.div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10 w-full">
          <motion.div {...fadeUp} className="flex-1 text-left pt-10 md:pt-0">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-2xl">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </div>
              <span className="text-white/90 text-xs font-bold tracking-widest uppercase">Trusted India-Wide Advisory</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
              Expert Tax &amp; <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-red-400 drop-shadow-lg">
                Business Growth
              </span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl max-w-xl mb-12 leading-relaxed font-body">
              Where professional services are <span className="text-white font-bold">affordable</span>! 
              Unlock seamless growth with high-precision <span className="text-white font-bold">accounts & taxation</span> compliance designed for the modern entrepreneur.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#contact" className="group flex items-center justify-center gap-3 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-container hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(183,16,42,0.4)] hover:shadow-[0_15px_40px_rgba(183,16,42,0.6)]">
                <span>Start Consulting</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <a href="#services" className="group flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all">
                <span>Explore Services</span>
              </a>
            </div>
            
            {/* Trust Badges - Improved */}
            <div className="mt-16 sm:mt-20 flex flex-wrap items-center gap-8 md:gap-12 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md inline-flex">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                  <span className="material-symbols-outlined text-secondary">groups</span>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">500+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Clients</div>
                </div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <span className="material-symbols-outlined text-blue-400">workspace_premium</span>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">5+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Years Exp.</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative w-full lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 lg:hidden"></div>
            
            {/* Main Floating Image */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-0 rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] w-full max-w-[450px] mx-auto aspect-[4/5] sm:aspect-auto"
            >
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay z-10 transition-opacity hover:opacity-0 duration-500"></div>
              <img alt="Professional Consultant" className="w-full h-full object-cover rounded-[40px] grayscale-[10%] hover:grayscale-0 transition-all duration-700" src="/rd.png"/>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="absolute -top-5 sm:top-[10%] left-0 sm:-left-[5%] md:-left-[20%] lg:-left-[10%] bg-slate-900/80 backdrop-blur-xl border border-white/20 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 z-20"
            >
              <div className="bg-green-500/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-green-500/30">
                <span className="material-symbols-outlined text-green-400 text-xl sm:text-2xl">check_circle</span>
              </div>
              <div>
                <div className="font-bold text-white text-xs sm:text-sm">100% Compliant</div>
                <div className="text-slate-400 text-[10px] sm:text-xs">Zero Filing Errors</div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="absolute -bottom-5 sm:bottom-[20%] right-0 sm:-right-[5%] md:-right-[10%] lg:-right-[5%] bg-slate-900/80 backdrop-blur-xl border border-white/20 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 z-20"
            >
               <div className="bg-secondary/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-secondary/30">
                <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">trending_up</span>
              </div>
              <div>
                <div className="font-bold text-white text-xs sm:text-sm">Fast Turnaround</div>
                <div className="text-slate-400 text-[10px] sm:text-xs">24-48 Hours Avg.</div>
              </div>
            </motion.div>
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
                    <img alt="Mohd. Rahamtulla" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/rd.png"/>
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

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-surface overflow-hidden" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 md:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter">Client Success Stories</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">Don't just take our word for it. Here's what our clients have to say about our services.</p>
          </motion.div>

          <div className="relative">
            {/* Infinite Loop Slider */}
            <div className="flex overflow-hidden pb-12 -mx-4 md:-mx-8">
              <motion.div 
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" }
                }}
              >
                {[1, 2].map((set) => (
                  <div key={set} className="flex gap-6 sm:gap-8 pr-6 sm:pr-8 pl-4 md:pl-8">
                    {testimonials.map((testimonial, idx) => (
                      <div 
                        key={`${set}-${idx}`} 
                        className="shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] bg-surface-container-lowest rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 relative flex flex-col h-auto group cursor-default"
                      >
                        <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:text-secondary group-hover:scale-110">
                          <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                        </div>
                        
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-amber-400 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          ))}
                        </div>
                        
                        <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10 font-medium flex-grow">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-6">
                          <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xl group-hover:bg-secondary transition-colors duration-300">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-primary font-bold text-lg leading-tight">{testimonial.name}</h3>
                            <p className="text-slate-500 text-sm font-semibold">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient Fade for scroll indication */}
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-surface to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-surface to-transparent pointer-events-none hidden sm:block"></div>
          </div>
          
          <div className="text-center mt-8">
            <a href="/testimonials" className="inline-flex items-center gap-2 text-secondary font-bold hover:scale-105 transition-transform group bg-secondary/10 px-6 py-3 rounded-full hover:bg-secondary hover:text-white">
              View All Testimonials 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
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
        {/* SEO Keywords Block */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h3 className="text-white/60 text-sm font-bold uppercase tracking-widest mb-4">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {['GST Return Filing', 'Chartered Accountant Services', 'Delhi Tax Consultant', 'Income Tax Return (ITR)', 'Company Registration in India', 'Private Limited Company', 'LLP Registration', 'Startup India Registration', 'FSSAI License', 'Trademark Registration', 'ISO Certification', 'Accounting & Bookkeeping Services', 'Tax Planning', 'Business Advisory', 'MSME Udyam Registration', 'IEC Code', 'PF & ESI Registration', 'TDS Return Filing'].map((keyword, i) => (
                <span key={i} className="text-slate-400 text-xs px-3 py-1.5 bg-white/5 rounded-full hover:bg-secondary/20 hover:text-white transition-colors cursor-default">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="text-2xl tracking-tighter uppercase font-black text-white mb-6 font-['Manrope']">The TAX expertt</div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 pr-4">
              Redefining professional tax consultancy with a focus on speed, affordability, and absolute compliance.
            </p>
            <div className="flex gap-3">
              {/* WhatsApp */}
              <a href="https://wa.me/918851667137" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] hover:-translate-y-1 transition-all" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:-translate-y-1 transition-all" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#E1306C] hover:border-[#E1306C] hover:-translate-y-1 transition-all" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-1 transition-all" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:border-white hover:text-black hover:-translate-y-1 transition-all" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 1200 1227"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>
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
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#about">About Us</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="/testimonials">Testimonials</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">Privacy Policy</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">Terms of Service</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#contact">Contact Us</a></li>
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
          <p className="text-slate-500 text-sm font-medium">© 2024 The TAX expertt. All rights reserved.</p>
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
