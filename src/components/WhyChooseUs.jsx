import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function WhyChooseUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-item",
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.1,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Zero Error Policy",
      desc: "100% precision in tax calculations and filing.",
    },
    {
      title: "Maximum Refunds",
      desc: "Expert strategy to claim every eligible deduction.",
    },
    {
      title: "Always Available",
      desc: "24/7 dedicated support for all your queries.",
    },
    {
      title: "Fast Turnaround",
      desc: "Compliances completed well within statutory deadlines.",
    },
  ];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <span className="text-emerald font-black uppercase tracking-widest mb-6 block underline decoration-4 underline-offset-8">
              The Advantage
            </span>
            <h2 className="text-5xl lg:text-7xl font-black text-navy leading-[0.95] mb-12">
              WHY THE BEST <br />
              <span className="text-emerald italic">TRUST US.</span>
            </h2>

            <div className="space-y-10">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="feature-item flex gap-6 border-b border-navy/5 pb-8"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="text-emerald" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-navy mb-2">
                      {f.title}
                    </h3>
                    <p className="text-navy/60 font-medium leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-10 bg-emerald/5 rounded-[4rem] -rotate-6" />
            <div
              ref={imageRef}
              className="relative rounded-[4rem] overflow-hidden shadow-2xl rotate-3"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
                alt="Why Choose Us"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-overlay" />

              <div className="absolute bottom-10 left-10 glass p-8 rounded-3xl max-w-xs shadow-premium">
                <span className="text-5xl font-black text-navy block mb-2">
                  10+
                </span>
                <p className="font-bold text-navy/70 uppercase tracking-widest text-xs">
                  Different financial domains mastered over 15 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
