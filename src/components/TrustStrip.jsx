import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '100+', label: 'Individual & Business Clients' },
  { number: '10+', label: 'Services Covered' },
  { number: '15+', label: 'Years of Experience' },
  { number: '99%', label: 'Compliance Rate' },
];

export function TrustStrip() {
  return (
    <section className="bg-navy text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-emerald text-sm font-semibold mb-2">TRUSTED EXPERTISE</p>
          <h2 className="font-jakarta text-3xl md:text-4xl font-bold">
            Lucknow-based Professional Tax Consultancy
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Serving individual professionals, business owners, and companies with transparent, compliant, and efficient tax solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="font-jakarta text-4xl md:text-5xl font-bold text-emerald mb-2">
                {stat.number}
              </p>
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12" />

        {/* Bottom Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 bg-emerald rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xl">✓</span>
            </div>
            <div>
              <h4 className="font-jakarta font-bold mb-1">Expert Consultation</h4>
              <p className="text-gray-400 text-sm">Adv. Ankul Yadav personally handles every case with attention to detail.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 bg-emerald rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xl">✓</span>
            </div>
            <div>
              <h4 className="font-jakarta font-bold mb-1">Transparent Process</h4>
              <p className="text-gray-400 text-sm">Clear communication and no hidden charges. You always know what's happening.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 bg-emerald rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xl">✓</span>
            </div>
            <div>
              <h4 className="font-jakarta font-bold mb-1">Lucknow Local & Accessible</h4>
              <p className="text-gray-400 text-sm">Based in Lucknow with multiple office locations for your convenience.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
