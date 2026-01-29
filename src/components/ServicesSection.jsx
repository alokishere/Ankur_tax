import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  FileText,
  ShieldCheck,
  TrendingUp,
  Scale,
  UserCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Income Tax Return",
    desc: "Individual and corporate tax filing with maximized deductions and 100% compliance.",
    icon: FileText,
    color: "emerald",
  },
  {
    title: "GST Registration",
    desc: "Complete end-to-end GST support from registration to monthly/annual returns.",
    icon: Briefcase,
    color: "navy",
  },
  {
    title: "Audit & Assurance",
    desc: "Detailed financial auditing to ensure transparency and institutional trust.",
    icon: ShieldCheck,
    color: "emerald",
  },
  {
    title: "Business Setup",
    desc: "LLC, Pvt Ltd, and Partnership registration with all legal documentation.",
    icon: Scale,
    color: "navy",
  },
  {
    title: "Tax Planning",
    desc: "Strategic financial planning to optimize your tax liability legally.",
    icon: TrendingUp,
    color: "emerald",
  },
  {
    title: "Corporate Legal",
    desc: "Expert legal advice for corporate compliance and statutory requirements.",
    icon: UserCheck,
    color: "navy",
  },
];

export function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-emerald font-black uppercase tracking-[0.3em] mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-5xl lg:text-7xl font-black text-navy leading-tight">
            WORLD CLASS <span className="text-emerald italic">SERVICES.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative p-10 bg-white rounded-[2.5rem] border border-navy/5 shadow-premium transition-all duration-500 hover:-translate-y-4 hover:bg-navy hover:shadow-2xl overflow-hidden"
            >
              {/* Abstract hover background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-bl-[5rem] transition-all duration-500 group-hover:bg-emerald/20 group-hover:scale-150" />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 ${service.color === "emerald" ? "bg-emerald/10 text-emerald" : "bg-navy/10 text-navy"} group-hover:bg-white/10 group-hover:text-white`}
                >
                  <service.icon size={32} />
                </div>

                <h3 className="text-2xl font-black text-navy mb-4 transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-navy/60 leading-relaxed font-medium transition-colors duration-500 group-hover:text-white/70">
                  {service.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 text-emerald font-bold opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  <span>Learn more</span>
                  <Scale size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
