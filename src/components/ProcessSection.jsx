import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We start with a deep dive into your financial landscape to understand your specific needs.",
  },
  {
    num: "02",
    title: "Documentation",
    desc: "Seamless gathering of required data through our secure, paperless digital pipeline.",
  },
  {
    num: "03",
    title: "Processing",
    desc: "Expert analysis and preparation of filings by our senior consultants.",
  },
  {
    num: "04",
    title: "Filing & Support",
    desc: "Final submission followed by year-round compliance monitoring and alerts.",
  },
];

export function ProcessSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".step-block",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="py-32 bg-navy text-white overflow-hidden relative"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <span className="text-emerald font-black uppercase tracking-[0.4em] mb-4 block">
            Our Process
          </span>
          <h2 className="text-5xl lg:text-7xl font-black leading-tight">
            FOUR STEPS TO <br />
            <span className="text-emerald italic">COMPLIANCE.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="step-block group">
              <div className="text-8xl font-black text-white/5 mb-8 transition-colors group-hover:text-emerald/20">
                {step.num}
              </div>
              <h3 className="text-3xl font-black mb-4 group-hover:text-emerald transition-colors">
                {step.title}
              </h3>
              <p className="text-white/40 leading-relaxed font-medium group-hover:text-white/70 transition-colors">
                {step.desc}
              </p>

              <div className="mt-8 w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-emerald transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
