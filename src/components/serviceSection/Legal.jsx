import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, Scale, FileText, ShieldCheck, Users, CheckCircle, Clock, DollarSign, Building, Gavel, Briefcase, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const legalServices = [
  {
    title: "Legal Notices",
    desc: "Professional legal notice drafting and serving for various legal matters",
    icon: FileText,
    features: ["Legal notice drafting", "Notice serving", "Follow-up actions", "Legal consultation"],
    color: "emerald"
  },
  {
    title: "Legal Agreements",
    desc: "Comprehensive legal agreement drafting for business and personal matters",
    icon: Scale,
    features: ["Business contracts", "Partnership deeds", "Employment agreements", "NDAs"],
    color: "navy"
  },
  {
    title: "Due Diligence",
    desc: "Thorough legal due diligence for mergers, acquisitions, and investments",
    icon: ShieldCheck,
    features: ["Company due diligence", "Property verification", "Legal compliance check", "Risk assessment"],
    color: "emerald"
  },
  {
    title: "Litigation Support",
    desc: "Complete litigation support from case filing to court representation",
    icon: Gavel,
    features: ["Case filing", "Documentation", "Court representation", "Legal research"],
    color: "navy"
  },
  {
    title: "Arbitration",
    desc: "Professional arbitration services for dispute resolution and mediation",
    icon: Users,
    features: ["Arbitration proceedings", "Mediation services", "Dispute resolution", "Settlement negotiations"],
    color: "emerald"
  },
  {
    title: "Compliance Audit",
    desc: "Legal compliance audit for businesses to ensure regulatory adherence",
    icon: Building,
    features: ["Statutory compliance", "Regulatory audit", "Compliance reporting", "Remedial actions"],
    color: "navy"
  }
]

const Legal = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-hero",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )

      gsap.fromTo(
        ".legal-service-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%"
          }
        }
      )

      gsap.fromTo(
        ".feature-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
          
          <div className="service-hero">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Corporate <span className="text-emerald italic">Legal.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
              Expert legal services for businesses including litigation, compliance, agreements, and dispute resolution with experienced legal professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalServices.map((service, index) => (
            <div
              key={index}
              className="legal-service-card group relative p-8 bg-white rounded-[2rem] border border-navy/5 shadow-premium transition-all duration-500 hover:-translate-y-3 hover:bg-navy hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-bl-[5rem] transition-all duration-500 group-hover:bg-emerald/20 group-hover:scale-150" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${service.color === "emerald" ? "bg-emerald/10 text-emerald" : "bg-navy/10 text-navy"} group-hover:bg-white/10 group-hover:text-white`}>
                  <service.icon size={32} />
                </div>

                <h3 className="text-2xl font-black text-navy mb-4 transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-navy/60 leading-relaxed mb-6 transition-colors duration-500 group-hover:text-white/70">
                  {service.desc}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item flex items-center gap-3 text-navy/70 group-hover:text-white/70 transition-colors">
                      <CheckCircle size={16} className="text-emerald group-hover:text-white" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-navy leading-tight mb-6">
              Why Choose Our <span className="text-emerald italic">Legal Services?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Timely Service</h3>
              <p className="text-navy/60">Prompt legal assistance and quick turnaround times for all legal matters</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Expert Lawyers</h3>
              <p className="text-navy/60">Experienced legal professionals with expertise in corporate and commercial law</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Cost Effective</h3>
              <p className="text-navy/60">Transparent fee structure and affordable legal solutions for businesses</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Client Focus</h3>
              <p className="text-navy/60">Personalized attention and dedicated support for each client's unique needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-navy leading-tight mb-6">
              Our Legal <span className="text-emerald italic">Process.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                1
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Case Evaluation</h3>
              <p className="text-navy/60 text-sm">Thorough analysis of your legal situation and requirements</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                2
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Strategy Planning</h3>
              <p className="text-navy/60 text-sm">Develop comprehensive legal strategy and action plan</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                3
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Execution</h3>
              <p className="text-navy/60 text-sm">Implement legal actions and represent your interests</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                4
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Resolution</h3>
              <p className="text-navy/60 text-sm">Achieve favorable outcomes and provide ongoing support</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
            Need Legal <span className="text-emerald italic">Assistance?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let our expert lawyers handle your legal matters while you focus on your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919876543210?text=Hi! I'm interested in your Legal services. Could you please provide more information?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald text-navy px-8 py-4 rounded-full font-black hover:bg-emerald/90 transition-colors"
            >
              Get Started
              <ChevronRight size={20} />
            </a>
            <a 
              href="https://wa.me/919843210?text=Hi! I'd like to schedule a consultation for Legal services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-black hover:bg-white hover:text-navy transition-all"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legal