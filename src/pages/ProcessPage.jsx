import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Users, FileText, TrendingUp, Shield, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProcessPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Process steps animation
      gsap.fromTo(
        ".process-step",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".process-steps",
            start: "top 80%",
          },
        }
      );

      // Benefits animation
      gsap.fromTo(
        ".benefit-item",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".benefits-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with a detailed discussion to understand your business needs, goals, and specific requirements. Our experts analyze your situation to recommend the most suitable services.",
      icon: Users,
      color: "emerald"
    },
    {
      step: "02",
      title: "Document Collection",
      description: "Our team helps you gather all necessary documents and information required for the service. We provide clear checklists and guidance throughout this process.",
      icon: FileText,
      color: "navy"
    },
    {
      step: "03",
      title: "Processing & Execution",
      description: "Our certified professionals handle the technical aspects with precision, ensuring complete compliance with all regulations and industry standards.",
      icon: TrendingUp,
      color: "emerald"
    },
    {
      step: "04",
      title: "Quality Review",
      description: "Every deliverable undergoes rigorous quality checks by our senior experts to ensure accuracy, completeness, and adherence to best practices.",
      icon: Shield,
      color: "navy"
    },
    {
      step: "05",
      title: "Delivery & Implementation",
      description: "We deliver your completed services along with detailed documentation and provide guidance on implementation and next steps.",
      icon: CheckCircle,
      color: "emerald"
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Our relationship doesn't end with delivery. We provide continuous support, periodic reviews, and assistance with any future requirements.",
      icon: Users,
      color: "navy"
    }
  ];

  const benefits = [
    {
      title: "Transparency",
      description: "Clear communication at every stage with regular updates and progress reports",
      icon: "👁️"
    },
    {
      title: "Speed",
      description: "Efficient processes designed to deliver results within promised timelines",
      icon: "⚡"
    },
    {
      title: "Expertise",
      description: "Handled by certified professionals with extensive industry experience",
      icon: "🎓"
    },
    {
      title: "Compliance",
      description: "100% adherence to all legal requirements and regulatory standards",
      icon: "✅"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-navy/70 hover:text-emerald transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="hero-content text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-emerald font-black uppercase tracking-[0.3em] text-sm bg-emerald/10 px-4 py-2 rounded-full">
                Our Process
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Seamless <span className="text-emerald">Workflow</span>
            </h1>
            
            <p className="text-lg text-navy/70 leading-relaxed max-w-2xl mx-auto">
              Our streamlined six-step process ensures smooth execution, timely delivery, 
              and exceptional results for all your tax and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="process-steps space-y-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="process-step relative"
              >
                <div className={`flex flex-col lg:flex-row items-start gap-8 p-8 rounded-3xl bg-white border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-emerald text-white flex items-center justify-center font-black text-2xl">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-start gap-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${step.color === 'emerald' ? 'bg-emerald/10 text-emerald' : 'bg-navy/10 text-navy'} flex-shrink-0`}>
                        <step.icon size={28} />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-black text-navy mb-4">{step.title}</h3>
                        <p className="text-navy/70 leading-relaxed text-lg">
                          {step.description}
                        </p>
                        
                        {index === 0 && (
                          <div className="mt-6 p-4 bg-emerald/5 rounded-xl border border-emerald/10">
                            <p className="text-emerald font-semibold flex items-center gap-2">
                              <span>📅</span>
                              Typically completed within 24-48 hours
                            </p>
                          </div>
                        )}
                        
                        {index === 2 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="p-3 bg-navy/5 rounded-lg">
                              <p className="text-sm font-semibold text-navy">⏱️ Fast Processing</p>
                            </div>
                            <div className="p-3 bg-emerald/5 rounded-lg">
                              <p className="text-sm font-semibold text-emerald">🔒 Secure Handling</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connector line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-20 w-0.5 h-8 bg-emerald/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-6">
              Why Our <span className="text-emerald">Process Works</span>
            </h2>
            <p className="text-lg text-navy/70 max-w-2xl mx-auto">
              Built on years of experience and refined through hundreds of successful projects
            </p>
          </div>

          <div className="benefits-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-item bg-white p-8 rounded-2xl border border-navy/5 shadow-premium text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-black text-navy mb-3">{benefit.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-16 bg-gradient-to-r from-emerald/5 to-navy/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-navy mb-4">Project Timeline</h2>
            <p className="text-navy/60">Typical duration for standard services</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald/20"></div>

            <div className="space-y-12">
              {[
                { phase: "Consultation", duration: "1-2 days", description: "Understanding requirements" },
                { phase: "Documentation", duration: "2-5 days", description: "Gathering required materials" },
                { phase: "Processing", duration: "3-10 days", description: "Execution and compliance" },
                { phase: "Review", duration: "1-2 days", description: "Quality assurance" },
                { phase: "Delivery", duration: "Same day", description: "Final delivery and handover" }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-premium">
                      <h3 className="font-black text-navy text-lg mb-2">{item.phase}</h3>
                      <div className="text-emerald font-bold mb-2">{item.duration}</div>
                      <p className="text-navy/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-emerald/10 to-navy/10 rounded-3xl p-12 border border-emerald/20">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">
              Ready to Start Your <span className="text-emerald">Journey?</span>
            </h2>
            <p className="text-lg text-navy/70 mb-8">
              Experience our proven process that delivers results with transparency and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald text-navy px-8 py-4 rounded-full font-black hover:bg-emerald/90 transition-colors"
              >
                Get Started Today
                <ArrowLeft size={20} className="rotate-180" />
              </Link>
              <a 
                href="tel:+919956464808"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy px-8 py-4 rounded-full font-black hover:bg-navy hover:text-white transition-all"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;

// Note: Added missing Phone import at the top