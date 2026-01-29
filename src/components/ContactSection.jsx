import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    window.location.href = `mailto:ankulyadav7521@gmail.com?subject=Consultation Request&body=${encodeURIComponent(message)}`;
  };

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9956464808',
      action: () => window.location.href = 'tel:+919956464808',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 9956464808',
      action: () => window.open('https://wa.me/919956464808?text=Hi, I want to know more about your tax services', '_blank'),
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ankulyadav7521@gmail.com',
      action: () => window.location.href = 'mailto:ankulyadav7521@gmail.com',
    },
  ];

  const officeLocations = [
    {
      type: 'Head Office',
      address: 'Lucknow, Uttar Pradesh',
      hours: 'Mon-Fri: 10 AM - 6 PM | Sat: 10 AM - 2 PM',
    },
    {
      type: 'Branch Office',
      address: 'Lucknow, Uttar Pradesh',
      hours: 'Available by appointment',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-emerald text-sm font-semibold mb-2">GET IN TOUCH</p>
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-navy mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question? Want to discuss your tax needs? We're here to help. Choose your preferred way to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-jakarta font-bold text-2xl text-navy mb-8">Quick Contact</h3>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.button
                    key={method.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={method.action}
                    className="w-full flex items-center gap-4 p-4 border-2 border-gray-200 rounded-xl hover:border-emerald hover:bg-emerald-light transition group"
                  >
                    <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald group-hover:text-white transition">
                      <Icon size={24} className="text-emerald group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-600 group-hover:text-emerald transition">{method.label}</p>
                      <p className="font-semibold text-navy">{method.value}</p>
                    </div>
                    <span className="ml-auto text-emerald opacity-0 group-hover:opacity-100 transition">→</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Office Locations */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-jakarta font-bold text-lg text-navy mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-emerald" />
                Office Locations
              </h4>
              <div className="space-y-4">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={office.type}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-4"
                  >
                    <p className="text-sm text-emerald font-semibold">{office.type}</p>
                    <p className="font-semibold text-navy mt-1">{office.address}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
                      <Clock size={14} />
                      {office.hours}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 space-y-6"
          >
            <h3 className="font-jakarta font-bold text-2xl text-navy">Send Message</h3>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXX"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Service Interest</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition"
              >
                <option value="">Select a service</option>
                <option value="GST Registration">GST Registration</option>
                <option value="Income Tax Filing">Income Tax Filing</option>
                <option value="Business Advisory">Business Advisory</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your needs..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full btn-primary"
            >
              Send Message
            </motion.button>

            <p className="text-xs text-gray-600 text-center">
              We'll get back to you within 24 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
