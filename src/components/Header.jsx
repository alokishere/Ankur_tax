import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {FaWhatsapp} from 'react-icons/fa'
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex items-center justify-between transition-all duration-500 rounded-[2rem] px-8 py-3 ${
              isScrolled ? "glass shadow-premium backdrop-blur-xl" : ""
            }`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-12 rounded-2xl flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-12">
                <img src="/logo.png" alt="Logo" className="h-full w-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-jakarta font-extrabold text-xl tracking-tight text-navy">
                  ANKUL TAX
                </span>
                <span className="text-[10px] uppercase tracking-widest text-emerald font-bold">
                  Consultancy
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-navy/70 hover:text-emerald transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/919956464808"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-emerald hover:bg-emerald-light rounded-full transition-colors"
              >
                <FaWhatsapp size={40} />
              </a>
              <button
                onClick={() => (window.location.href = "tel:+919956464808")}
                className="btn-premium flex items-center gap-2 group"
              >
                <span>Book Consultation</span>
                <Phone size={18} className="group-hover:animate-bounce" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl pt-32 px-10">
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-bold text-navy hover:text-emerald transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="h-px bg-navy/10 my-4" />
                <button
                  onClick={() => (window.location.href = "tel:+919956464808")}
                  className="btn-premium w-full flex justify-center items-center gap-4 text-xl"
                >
                  <Phone size={24} />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
