import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, FileText, TrendingUp, ShieldCheck, Calculator, Calendar, CheckCircle, Clock, DollarSign, Users, Building, Briefcase, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const returnServices = [
  {
    title: "GST Return",
    desc: "Monthly and quarterly GST filing with complete compliance and reconciliation",
    icon: Calculator,
    features: ["GSTR-1, GSTR-3B filing", "GST reconciliation", "Input tax credit optimization", "E-way bill generation"],
    color: "emerald"
  },
  {
    title: "Income Tax Return",
    desc: "Individual and corporate income tax filing with maximum deductions",
    icon: FileText,
    features: ["ITR-1 to ITR-7 filing", "Capital gains computation", "TDS reconciliation", "Tax saving recommendations"],
    color: "navy"
  },
  {
    title: "TDS Return",
    desc: "Quarterly TDS returns with accurate computation and timely filing",
    icon: TrendingUp,
    features: ["Form 24Q, 26Q, 27Q filing", "TDS certificates generation", "TDS compliance audit", "Challan management"],
    color: "emerald"
  },
  {
    title: "Provident Fund Return",
    desc: "Monthly PF contributions and annual returns with compliance management",
    icon: ShieldCheck,
    features: ["ECR filing", "Form 10/12/5A", "PF compliance audit", "Settlement processing"],
    color: "navy"
  },
  {
    title: "ESI Return",
    desc: "Monthly ESI contributions and returns with employee coverage management",
    icon: Users,
    features: ["Monthly contribution filing", "Employee registration", "Benefit claims", "Compliance reporting"],
    color: "emerald"
  },
  {
    title: "Professional Tax Return",
    desc: "State-wise professional tax registration and monthly/annual returns",
    icon: Building,
    features: ["PT registration", "Monthly returns", "Annual returns", "State compliance"],
    color: "navy"
  }
]

const Return = () => {
  const sectionRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-hero",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )

      gsap.fromTo(
        ".return-service-card",
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
        <div className="mt-15 max-w-7xl mx-auto px-6 py-24 relative">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
          
          <div className="service-hero">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Tax <span className="text-emerald italic">Returns.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
              Comprehensive tax return filing services ensuring 100% compliance with all statutory requirements while maximizing your tax benefits.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {returnServices.map((service, index) => (
            <div
              key={index}
              className="return-service-card group relative p-8 bg-white rounded-[2rem] border border-navy/5 shadow-premium transition-all duration-500 hover:-translate-y-3 hover:bg-navy hover:shadow-2xl overflow-hidden"
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
              Why Choose Our <span className="text-emerald italic">Return Services?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Timely Filing</h3>
              <p className="text-navy/60">Never miss a deadline with our automated reminders and efficient filing process</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">100% Compliance</h3>
              <p className="text-navy/60">Expert knowledge of latest tax laws and regulations ensures complete compliance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Maximize Savings</h3>
              <p className="text-navy/60">Identify all eligible deductions and credits to minimize your tax liability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Expert Support</h3>
              <p className="text-navy/60">Dedicated tax experts to handle queries and provide personalized guidance</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
            Ready to File Your <span className="text-emerald italic">Returns?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experts handle your tax returns while you focus on growing your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919876543210?text=Hi! I'm interested in your Tax Return services. Could you please provide more information?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald text-navy px-8 py-4 rounded-full font-black hover:bg-emerald/90 transition-colors"
            >
              Get Started
              <ChevronRight size={20} />
            </a>
            <a 
              href="https://wa.me/919876543210?text=Hi! I'd like to schedule a consultation for Tax Return services."
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

export default Return