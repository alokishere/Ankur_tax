import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, FileCheck, DollarSign, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Free consultation call to understand your needs, business structure, and compliance requirements.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Documentation & Planning',
    description: 'We gather necessary documents and create a customized tax & compliance strategy for you.',
    icon: FileCheck,
  },
  {
    number: '03',
    title: 'Filing & Compliance',
    description: 'Professional handling of all filings, submissions, and statutory compliance with accuracy.',
    icon: DollarSign,
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description: 'Continuous support throughout the year with compliance calendar and timely reminders.',
    icon: CheckCircle,
  },
];

const ProcessStep = ({ step, index }) => {
  const Icon = step.icon;
  const isLast = index === steps.length - 1;

  return (
    <div className="relative flex flex-col md:flex-row items-start gap-8">
      {/* Timeline connector */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="absolute left-6 md:left-1/2 top-24 md:top-16 w-1 bg-gradient-to-b from-emerald to-transparent h-32 hidden md:block -ml-0.5"
        />
      )}

      {/* Step content - alternating layout */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        viewport={{ once: true }}
        className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
      >
        <div className={`inline-block ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
          <div className="bg-white border-2 border-emerald rounded-2xl p-6 md:p-8 relative z-10">
            <div className="flex items-start gap-4 md:gap-6">
              {index % 2 === 1 && (
                <div className="w-16 h-16 bg-emerald rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={32} className="text-white" />
                </div>
              )}

              <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                <div className="text-emerald font-jakarta font-bold text-2xl mb-2">{step.number}</div>
                <h3 className="font-jakarta font-bold text-xl text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>

              {index % 2 === 0 && (
                <div className="w-16 h-16 bg-emerald rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={32} className="text-white" />
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-emerald text-sm font-semibold mb-2">HOW WE WORK</p>
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-navy mb-4">
            Simple, Transparent Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From your first call to ongoing support, we make tax compliance simple and stress-free.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative py-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-emerald-light to-white rounded-2xl p-12 border border-emerald/20"
        >
          <h3 className="font-jakarta font-bold text-2xl text-navy mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Take the first step towards hassle-free tax compliance. Schedule your free consultation with Adv. Ankul Yadav today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'tel:+919956464808'}
            className="btn-primary inline-flex items-center gap-2 group"
          >
            <span>Book Free Consultation</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
