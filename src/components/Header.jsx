import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+919956464808';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919956464808?text=Hi, I want to know more about your tax services', '_blank');
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-navy text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:+919956464808" className="hover:text-emerald transition">+91 9956464808</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:ankulyadav7521@gmail.com" className="hover:text-emerald transition">ankulyadav7521@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Mon-Fri: 10 AM - 6 PM | Sat: 10 AM - 2 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isSticky ? 'bg-white shadow-soft-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-navy to-emerald rounded-xl flex items-center justify-center text-white font-bold">
              ATC
            </div>
            <div>
              <h1 className="font-jakarta font-bold text-lg text-navy">ANKUL TAX</h1>
              <p className="text-xs text-emerald">Consultancy</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Why Us', href: '#why-us' },
              { label: 'Process', href: '#process' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-navy hover:text-emerald transition font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="hidden md:flex items-center gap-2 btn-primary"
            >
              <Phone size={18} />
              Call Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="btn-secondary flex md:hidden"
            >
              <MessageCircle size={18} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-4 right-4 md:hidden z-40 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCall}
          className="bg-emerald text-white rounded-full p-4 shadow-soft-lg flex items-center justify-center"
        >
          <Phone size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsApp}
          className="bg-navy text-white rounded-full p-4 shadow-soft-lg flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </motion.button>
      </div>
    </>
  );
}
