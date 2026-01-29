import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const gridRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Hero grid animation
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        y: 20,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Text stagger animation
    if (textRef.current) {
      const lines = textRef.current.querySelectorAll('span');
      gsap.fromTo(
        lines,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.2,
        }
      );
    }
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+919956464808';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919956464808?text=Hi, I want to know more about your tax services', '_blank');
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Animated Grid Background */}
      <div
        ref={gridRef}
        className="hero-grid absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(0deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
          `,
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-navy rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div ref={textRef} className="space-y-4">
              <h1 className="font-jakarta text-5xl md:text-6xl font-bold leading-tight text-navy">
                <span className="block">Smart Tax.</span>
                <span className="block text-emerald">Clear Compliance.</span>
                <span className="block">Zero Stress.</span>
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Expert guidance in <span className="font-semibold text-navy">GST Registration & Compliance</span>, 
              <span className="font-semibold text-navy"> Income Tax Filing</span>, and 
              <span className="font-semibold text-navy"> Business Compliance</span>. 
              Trusted by 100+ clients across India.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-emerald-light rounded-xl">
                <p className="font-jakarta font-bold text-2xl text-navy">100+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="p-4 bg-emerald-light rounded-xl">
                <p className="font-jakarta font-bold text-2xl text-navy">10+</p>
                <p className="text-sm text-gray-600">Services</p>
              </div>
              <div className="p-4 bg-emerald-light rounded-xl">
                <p className="font-jakarta font-bold text-2xl text-navy">15+</p>
                <p className="text-sm text-gray-600">Years Exp.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 12px 48px rgba(0,0,0,0.15)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                <Phone size={20} />
                <span>Call Now</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </motion.button>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 border-t border-gray-200 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-emerald to-navy rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-navy">Trusted by professionals</span> across India
              </p>
            </div>
          </motion.div>

          {/* Right - Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-light to-transparent border-2 border-emerald/20 p-8 flex items-center justify-center relative overflow-hidden">
              {/* Animated elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                  className="absolute w-64 h-64 bg-emerald rounded-full mix-blend-multiply filter blur-2xl opacity-20"
                  animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                  transition={{ duration: 8, repeat: -1 }}
                />
                <motion.div
                  className="absolute w-64 h-64 bg-navy rounded-full mix-blend-multiply filter blur-2xl opacity-20"
                  animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
                  transition={{ duration: 8, repeat: -1, delay: 1 }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-soft-lg mb-4">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="font-jakarta font-bold text-2xl text-navy mb-2">Tax Made Simple</h3>
                <p className="text-sm text-gray-600">Compliance without complexity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
