import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  IndianRupee,
  Briefcase,
  Users,
  Building2,
  PieChart,
  CheckCircle,
  Shield,
} from 'lucide-react';

const services = {
  Registrations: [
    { icon: Building2, title: 'GST Registration', desc: 'Complete GST registration & compliance' },
    { icon: FileText, title: 'Company Registration', desc: 'Company formation & MOA/AOA filing' },
    { icon: Users, title: 'Partnership Deed', desc: 'Drafting & registration of partnership' },
  ],
  Taxation: [
    { icon: IndianRupee, title: 'Income Tax Filing', desc: 'Individual & corporate income tax returns' },
    { icon: PieChart, title: 'Tax Planning', desc: 'Strategic tax optimization & planning' },
    { icon: Shield, title: 'GST Compliance', desc: 'GST returns, reconciliation & audit' },
  ],
  Other: [
    { icon: Briefcase, title: 'Business Advisory', desc: 'Business setup & structuring guidance' },
    { icon: CheckCircle, title: 'Audit Support', desc: 'CA audit support & documentation' },
    { icon: FileText, title: 'Legal Compliance', desc: 'Statutory compliance & compliance calendar' },
  ],
};

const ServiceCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card-hover group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 relative overflow-hidden"
  >
    {/* Background gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Content */}
    <div className="relative z-10">
      <div className="w-14 h-14 bg-emerald rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="font-jakarta font-bold text-xl text-navy mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>

      {/* Hover indicator */}
      <motion.div
        className="mt-4 flex items-center gap-2 text-emerald text-sm font-medium"
        initial={{ x: -10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        <span>Learn more</span>
        <span>→</span>
      </motion.div>
    </div>
  </motion.div>
);

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-emerald text-sm font-semibold mb-2">OUR EXPERTISE</p>
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-navy mb-4">
            Comprehensive Tax Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From registrations to compliance, we cover every aspect of tax and business advisory with professional excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16">
          {Object.entries(services).map((category, categoryIndex) => (
            <div key={category[0]}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-jakarta font-bold text-2xl text-navy mb-8 flex items-center gap-3"
              >
                <span className="w-1 h-8 bg-emerald rounded-full" />
                {category[0]}
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-8">
                {category[1].map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                    index={categoryIndex * 3 + index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Need a service not listed here?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'tel:+919956464808'}
            className="btn-primary"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
