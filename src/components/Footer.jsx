import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'GST Registration', href: '#services' },
    { label: 'Income Tax Filing', href: '#services' },
    { label: 'Business Advisory', href: '#services' },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9956464808',
      href: 'tel:+919956464808',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ankulyadav7521@gmail.com',
      href: 'mailto:ankulyadav7521@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lucknow, Uttar Pradesh',
      href: '#',
    },
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-700">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald to-white rounded-xl flex items-center justify-center text-navy font-bold">
                ATC
              </div>
              <div>
                <h3 className="font-jakarta font-bold text-lg">ANKUL TAX</h3>
                <p className="text-xs text-emerald">Consultancy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional tax consultation and business advisory led by Adv. Ankul Yadav. Trusted by 100+ clients.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-jakarta font-bold text-lg">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-jakarta font-bold text-lg">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-jakarta font-bold text-lg">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-start gap-2 text-gray-400 hover:text-emerald transition text-sm group"
                    >
                      <Icon size={18} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        <p className="group-hover:underline">{item.value}</p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left text-gray-400 text-sm">
            <p>
              © {currentYear} ANKUL TAX CONSULTANCY. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Designed for professional excellence and client satisfaction.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-700 hover:bg-emerald rounded-lg flex items-center justify-center transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-700 hover:bg-emerald rounded-lg flex items-center justify-center transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Legal Links */}
      <div className="bg-black/30 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-end gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-emerald transition">Privacy Policy</a>
          <a href="#" className="hover:text-emerald transition">Terms of Service</a>
          <a href="#" className="hover:text-emerald transition">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
