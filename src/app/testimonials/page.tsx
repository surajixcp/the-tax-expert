"use client";

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
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

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, TechInnovate Systems",
    text: "The TAX expert transformed how we handle our corporate filings. Fast, accurate, and incredibly responsive. Highly advised for any growing startup.",
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
  },
  {
    name: "Manish Agarwal",
    role: "E-commerce Entrepreneur",
    text: "From trademark registration to regular audits, they handle it all effortlessly. The team is knowledgeable and always ready to help. Highly recommend!",
    rating: 5
  },
  {
    name: "Rahul Desai",
    role: "Freelance Consultant",
    text: "The consultation was eye-opening. They helped me plan my taxes better and maximize my deductions legally. Very professional and polite people.",
    rating: 5
  },
  {
    name: "Sandeep Gupta",
    role: "Operations Manager, BlueOcean",
    text: "Compliance has never been this stress-free. The TAX expert handles all our compliance audits with immense detail and provides clear actionable insights.",
    rating: 5
  },
  {
    name: "Ramesh Chaurasia",
    role: "Director, GreenField Ventures",
    text: "We used their services for FSSAI and MSME registration. The entire process was seamless and required minimal intervention from my team.",
    rating: 5
  },
  {
    name: "Prakash Verma",
    role: "Founder, Verma Associates",
    text: "I've worked with many accounting firms, but this team stands out. Their knowledge of complex taxation matters is simply brilliant. Worth every penny.",
    rating: 5
  }
];

import { useState } from 'react';

export default function TestimonialsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Testimonials', href: '/testimonials', active: true },
  ];

  return (
    <>
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
                The TAX <span className="text-secondary opacity-90 drop-shadow-[0_0_8px_rgba(183,16,42,0.5)]">expert</span>
              </div>
            </a>
            <div 
              className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md relative"
              onMouseLeave={() => setHoveredNav(null)}
            >
              {navItems.map((item) => {
                const isActiveOrHovered = (hoveredNav === item.name) || (!hoveredNav && item.active);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHoveredNav(item.name)}
                    className={`px-5 py-2 rounded-full font-['Manrope'] font-bold text-sm tracking-wide transition-colors relative z-10 ${isActiveOrHovered ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                  >
                    {isActiveOrHovered && (
                      <motion.div
                        layoutId="navHover"
                        className="absolute inset-0 bg-secondary rounded-full -z-10 shadow-[0_0_15px_rgba(183,16,42,0.5)]"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
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
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-300 hover:text-white border-b border-white/5 pb-4 flex justify-between items-center group transition-colors" href="/#home">
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
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white border-b border-white/5 pb-4 flex justify-between items-center group" href="/testimonials">
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
      <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-6 md:px-8 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Client Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Trusted by Hundreds of <br/><span className="text-secondary">Businesses</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-body">
              Don't just take our word for it. Read the experiences of businesses and individuals who trust us with their financial compliance and business advisory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-surface-container-low min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx} 
                {...fadeItem} 
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 relative flex flex-col h-full"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-8 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">Ready to Experience Peace of Mind?</h2>
          <p className="text-white/80 text-lg md:text-xl mb-10">Join these successful businesses and let us handle your regulatory compliance so you can focus on growth.</p>
          <a href="/#contact" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl">
            Book Free Consultation
          </a>
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
            <div className="flex gap-3">
              {/* WhatsApp */}
              <a href="https://wa.me/918851667137" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] hover:-translate-y-1 transition-all" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1VR2Dqaztp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:-translate-y-1 transition-all" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/abdulla_mansoori_37?utm_source=qr&igsh=MXBkdnM2ZTZheXh6Ng%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#E1306C] hover:border-[#E1306C] hover:-translate-y-1 transition-all" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/mohd-rahamtulla-1a7ab72a8?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-1 transition-all" aria-label="LinkedIn">
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
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="/#services">GST Registration</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="/#services">Company Incorporation</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="/#services">Trademark &amp; Patents</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="/#services">Compliance Audit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="/#about">About Us</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="/testimonials">Testimonials</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="#">Terms of Service</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-2 inline-block duration-300" href="/#contact">Contact Us</a></li>
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
          <p className="text-slate-500 text-sm font-medium">© 2024 The TAX expert. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:text-white transition-colors text-sm font-semibold tracking-wide" href="#">Privacy</a>
            <a className="text-slate-500 hover:text-white transition-colors text-sm font-semibold tracking-wide" href="#">Legal</a>
          </div>
        </div>
      </footer>
    </>
  );
}
