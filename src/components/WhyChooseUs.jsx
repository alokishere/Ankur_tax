import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Check,
    title: 'Transparent Process',
    description: 'Clear communication at every step. No hidden charges, no surprises. You always know what\'s happening with your compliance.',
  },
  {
    icon: Clock,
    title: 'Timely Filings',
    description: 'All deadlines met on time. We maintain a compliance calendar and ensure zero delays in statutory filings.',
  },
  {
    icon: Users,
    title: 'Personal Consultant Support',
    description: 'Dedicated consultant assigned to your case. Direct access to Adv. Ankul Yadav for important matters.',
  },
  {
    icon: Zap,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising quality. Flexible packages tailored to your business needs.',
  },
];

const BenefitCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative"
  >
    {/* Card */}
    <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 relative z-10 group-hover:border-emerald transition-all duration-300">
      {/* Icon Container */}
      <div className="mb-6 relative">
        <div className="w-16 h-16 bg-emerald-light rounded-xl flex items-center justify-center group-hover:bg-emerald group-hover:text-white transition-all duration-300">
          <Icon size={32} className="text-emerald group-hover:text-white transition-colors" />
        </div>
      </div>

      {/* Content */}
      <h3 className="font-jakarta font-bold text-xl text-navy mb-3 group-hover:text-emerald transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald to-transparent rounded-full w-0 group-hover:w-full transition-all duration-300" />
    </div>

    {/* Background blob on hover */}
    <motion.div
      className="absolute -inset-0 bg-emerald/5 rounded-2xl -z-0"
      initial={{ scale: 0.8, opacity: 0 }}
      whileHover={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-emerald text-sm font-semibold mb-2">WHY ANKUL TAX?</p>
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-navy mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're not just a consultancy. We're your trusted partner in financial compliance and business growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-emerald to-transparent mb-16"
        />

        {/* Authority Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-navy text-white rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-jakarta font-bold text-3xl mb-4">Meet Your Tax Expert</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Adv. Ankul Yadav brings 15+ years of expertise in tax consultation and business advisory. 
                With a deep understanding of Indian tax laws and business compliance, he leads the team with 
                a commitment to excellence and client satisfaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-emerald flex-shrink-0" />
                  <span>Certified Tax & Business Advisor</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-emerald flex-shrink-0" />
                  <span>15+ Years of Professional Experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-emerald flex-shrink-0" />
                  <span>100+ Satisfied Clients Across India</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl bg-gradient-to-br from-emerald/20 to-transparent overflow-hidden border border-emerald/30">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald to-navy opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: -1, ease: 'linear' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-3">👨‍⚖️</div>
                  <p className="font-jakarta font-bold text-xl text-white">Adv. Ankul Yadav</p>
                  <p className="text-emerald text-sm">Tax Consultant & Advisor</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
