import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, Building2, FileText, ShieldCheck, Users, CheckCircle, Clock, DollarSign, Award, Briefcase, Target, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const businessServices = [
  {
    title: "Private Limited Company",
    desc: "Complete Pvt Ltd company registration with all legal compliance and documentation",
    icon: Building2,
    features: ["Company incorporation", "MOA & AOA drafting", "Director DIN", "PAN & TAN application"],
    color: "emerald"
  },
  {
    title: "Limited Liability Partnership",
    desc: "LLP registration with partnership deed and LLP agreement preparation",
    icon: Users,
    features: ["LLP registration", "Partnership deed", "Designated partner DIN", "LLP agreement"],
    color: "navy"
  },
  {
    title: "One Person Company",
    desc: "OPC registration for solo entrepreneurs with complete legal structure",
    icon: Target,
    features: ["OPC incorporation", "Nominee appointment", "Single director setup", "Compliance structure"],
    color: "emerald"
  },
  {
    title: "Public Limited Company",
    desc: "Public company registration with share capital and investor-friendly structure",
    icon: Award,
    features: ["Public company registration", "Share capital structure", "Board formation", "SEBI compliance"],
    color: "navy"
  },
  {
    title: "Section 8 Company",
    desc: "Non-profit company registration for charitable and social welfare organizations",
    icon: ShieldCheck,
    features: ["Section 8 registration", "Charitable objectives", "Tax exemptions", "Government approvals"],
    color: "emerald"
  },
  {
    title: "Nidhi Company",
    desc: "Nidhi company registration for micro-finance and small savings operations",
    icon: Briefcase,
    features: ["Nidhi registration", "Micro-finance setup", "Member benefits", "RBI compliance"],
    color: "navy"
  }
]

const BussinessSetup = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-hero",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )

      gsap.fromTo(
        ".business-service-card",
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
              Business <span className="text-emerald italic">Setup.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
              Complete business setup solutions from company incorporation to compliance management, ensuring a strong foundation for your enterprise.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessServices.map((service, index) => (
            <div
              key={index}
              className="business-service-card group relative p-8 bg-white rounded-[2rem] border border-navy/5 shadow-premium transition-all duration-500 hover:-translate-y-3 hover:bg-navy hover:shadow-2xl overflow-hidden"
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
              Why Choose Our <span className="text-emerald italic">Business Setup?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Quick Setup</h3>
              <p className="text-navy/60">Fast-track business registration process with minimal documentation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Legal Compliance</h3>
              <p className="text-navy/60">Complete legal framework ensuring 100% regulatory compliance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Cost Effective</h3>
              <p className="text-navy/60">Transparent pricing with no hidden charges and affordable packages</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Expert Guidance</h3>
              <p className="text-navy/60">Professional consultants to guide you through every step</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-navy leading-tight mb-6">
              Our Business Setup <span className="text-emerald italic">Process.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                1
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Consultation</h3>
              <p className="text-navy/60 text-sm">Understand your business model and recommend the right structure</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                2
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Documentation</h3>
              <p className="text-navy/60 text-sm">Prepare all legal documents and incorporation papers</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                3
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Registration</h3>
              <p className="text-navy/60 text-sm">File applications with ROC and obtain registration certificates</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                4
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Compliance Setup</h3>
              <p className="text-navy/60 text-sm">Set up post-incorporation compliance and regulatory requirements</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
            Ready to Start Your <span className="text-emerald italic">Business?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experts handle your business setup while you focus on your entrepreneurial vision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919876543210?text=Hi! I'm interested in your Business Setup services. Could you please provide more information?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald text-navy px-8 py-4 rounded-full font-black hover:bg-emerald/90 transition-colors"
            >
              Get Started
              <ChevronRight size={20} />
            </a>
            <a 
              href="https://wa.me/919876543210?text=Hi! I'd like to schedule a consultation for Business Setup services."
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

export default BussinessSetup