import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, Briefcase, Building2, FileText, ShieldCheck, Users, CheckCircle, Clock, DollarSign, Award, Globe, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const registrationServices = [
  {
    title: "GST Registration",
    desc: "Complete GST registration process with expert guidance and documentation support",
    icon: FileText,
    features: ["GSTIN application", "HSN/SAC classification", "Migration assistance", "Amendment support"],
    color: "emerald"
  },
  {
    title: "Company Registration",
    desc: "Private Limited, LLP, and OPC company registration with complete legal compliance",
    icon: Building2,
    features: ["Private Limited Company", "Limited Liability Partnership", "One Person Company", "Section 8 Company"],
    color: "navy"
  },
  {
    title: "Firm Registration",
    desc: "Partnership firm and sole proprietorship registration with partnership deeds",
    icon: Users,
    features: ["Partnership Firm", "Sole Proprietorship", "Partnership Deed", "Firm PAN/TAN"],
    color: "emerald"
  },
  {
    title: "MSME Registration",
    desc: "Udyam registration for MSME benefits and government schemes access",
    icon: Award,
    features: ["Udyam Registration", "EM Number", "Priority Lending", "Government Schemes"],
    color: "navy"
  },
  {
    title: "Import Export Code",
    desc: "IEC registration for import/export businesses with DGFT compliance",
    icon: Globe,
    features: ["IEC Application", "DGFT Registration", "RCMC", "Customs Clearance"],
    color: "emerald"
  },
  {
    title: "Digital Signature",
    desc: "Class 2 & 3 DSC for GST filing, company incorporation, and e-tendering",
    icon: ShieldCheck,
    features: ["Class 2 DSC", "Class 3 DSC", "Token-based DSC", "USB-based DSC"],
    color: "navy"
  }
]

const Registration = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-hero",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )

      gsap.fromTo(
        ".registration-service-card",
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
              Business <span className="text-emerald italic">Registrations.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
              Complete business registration services from GST to company incorporation, ensuring legal compliance and smooth business setup.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {registrationServices.map((service, index) => (
            <div
              key={index}
              className="registration-service-card group relative p-8 bg-white rounded-[2rem] border border-navy/5 shadow-premium transition-all duration-500 hover:-translate-y-3 hover:bg-navy hover:shadow-2xl overflow-hidden"
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
              Why Choose Our <span className="text-emerald italic">Registration Services?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Quick Processing</h3>
              <p className="text-navy/60">Fast-track registration process with minimal documentation and quick approvals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">100% Compliance</h3>
              <p className="text-navy/60">Expert knowledge of latest regulations ensures complete legal compliance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Transparent Pricing</h3>
              <p className="text-navy/60">Clear, upfront pricing with no hidden charges or surprise fees</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Expert Support</h3>
              <p className="text-navy/60">Dedicated registration experts to guide you through the entire process</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-navy leading-tight mb-6">
              Our Registration <span className="text-emerald italic">Process.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                1
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Consultation</h3>
              <p className="text-navy/60 text-sm">Understand your requirements and choose the right registration type</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                2
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Documentation</h3>
              <p className="text-navy/60 text-sm">Collect and prepare all necessary documents and applications</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                3
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Filing</h3>
              <p className="text-navy/60 text-sm">Submit applications to relevant authorities and follow up regularly</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                4
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Delivery</h3>
              <p className="text-navy/60 text-sm">Receive your registration certificates and complete compliance setup</p>
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
            Let our experts handle your business registration while you focus on your vision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919876543210?text=Hi! I'm interested in your Business Registration services. Could you please provide more information?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald text-navy px-8 py-4 rounded-full font-black hover:bg-emerald/90 transition-colors"
            >
              Get Started
              <ChevronRight size={20} />
            </a>
            <a 
              href="https://wa.me/919876543210?text=Hi! I'd like to schedule a consultation for Business Registration services."
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

export default Registration