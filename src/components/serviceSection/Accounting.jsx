import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, Calculator, FileText, TrendingUp, ShieldCheck, CheckCircle, Clock, DollarSign, Users, BarChart3, PieChart, Receipt, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const accountingServices = [
  {
    title: "Book Keeping",
    desc: "Comprehensive bookkeeping services maintaining accurate financial records and transactions",
    icon: Calculator,
    features: ["Daily transaction recording", "Bank reconciliation", "Ledger maintenance", "Financial data entry"],
    color: "emerald"
  },
  {
    title: "Monthly Accounting",
    desc: "Monthly accounting packages with P&L statements, balance sheets, and cash flow reports",
    icon: BarChart3,
    features: ["Monthly P&L statements", "Balance sheet preparation", "Cash flow analysis", "Variance reporting"],
    color: "navy"
  },
  {
    title: "Payroll Management",
    desc: "Complete payroll processing with salary calculations, deductions, and compliance",
    icon: Users,
    features: ["Salary processing", "PF & ESI calculations", "TDS deductions", "Payslip generation"],
    color: "emerald"
  },
  {
    title: "Financial Analysis",
    desc: "In-depth financial analysis and reporting for better business decisions",
    icon: TrendingUp,
    features: ["Ratio analysis", "Budget vs actual", "Trend analysis", "KPI tracking"],
    color: "navy"
  },
  {
    title: "Tax Accounting",
    desc: "Tax planning and compliance with GST, income tax, and other tax regulations",
    icon: FileText,
    features: ["Tax planning", "GST accounting", "TDS compliance", "Tax optimization"],
    color: "emerald"
  },
  {
    title: "Cost Accounting",
    desc: "Cost analysis and control measures to optimize business profitability",
    icon: PieChart,
    features: ["Cost analysis", "Budget preparation", "Expense tracking", "Profitability analysis"],
    color: "navy"
  }
]

const Accounting = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-hero",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )

      gsap.fromTo(
        ".accounting-service-card",
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
              Accounting <span className="text-emerald italic">Services.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
              Professional accounting services ensuring accurate financial records, compliance, and strategic insights for business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accountingServices.map((service, index) => (
            <div
              key={index}
              className="accounting-service-card group relative p-8 bg-white rounded-[2rem] border border-navy/5 shadow-premium transition-all duration-500 hover:-translate-y-3 hover:bg-navy hover:shadow-2xl overflow-hidden"
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
              Why Choose Our <span className="text-emerald italic">Accounting Services?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Timely Reporting</h3>
              <p className="text-navy/60">Monthly financial reports delivered on time for informed decision-making</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">100% Accuracy</h3>
              <p className="text-navy/60">Meticulous attention to detail ensuring error-free financial records</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Cost Effective</h3>
              <p className="text-navy/60">Affordable pricing plans tailored to your business needs and size</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-emerald" />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Expert Team</h3>
              <p className="text-navy/60">Qualified accountants with expertise across various industries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-navy leading-tight mb-6">
              Our Accounting <span className="text-emerald italic">Process.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                1
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Data Collection</h3>
              <p className="text-navy/60 text-sm">Gather all financial documents and transaction records</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                2
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Recording</h3>
              <p className="text-navy/60 text-sm">Systematic recording of all transactions in proper ledgers</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                3
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Analysis</h3>
              <p className="text-navy/60 text-sm">Analyze financial data and prepare comprehensive reports</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                4
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Reporting</h3>
              <p className="text-navy/60 text-sm">Deliver timely financial reports and business insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
            Ready to Streamline Your <span className="text-emerald italic">Accounting?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experts manage your accounting while you focus on growing your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919876543210?text=Hi! I'm interested in your Accounting services. Could you please provide more information?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald text-navy px-8 py-4 rounded-full font-black hover:bg-emerald/90 transition-colors"
            >
              Get Started
              <ChevronRight size={20} />
            </a>
            <a 
              href="https://wa.me/919876543210?text=Hi! I'd like to schedule a consultation for Accounting services."
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

export default Accounting