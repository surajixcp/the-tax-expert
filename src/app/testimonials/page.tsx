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

export default function TestimonialsPage() {
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
            <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md">
              <a className="px-5 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all font-['Manrope'] font-bold text-sm tracking-wide" href="/#home">Home</a>
              <a className="px-5 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all font-['Manrope'] font-bold text-sm tracking-wide" href="/#services">Services</a>
              <a className="px-5 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all font-['Manrope'] font-bold text-sm tracking-wide" href="/#about">About</a>
              <a className="px-5 py-2 rounded-full text-white bg-white/10 font-['Manrope'] font-bold text-sm tracking-wide shadow-sm" href="/testimonials">Testimonials</a>
            </div>
            <a href="/#contact" className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <span>Consultation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            
            {/* Mobile menu button */}
            <button className="md:hidden text-white w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </motion.nav>
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
