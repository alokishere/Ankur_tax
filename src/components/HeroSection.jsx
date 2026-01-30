import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".hero-text-line", {
        y: 100,
        opacity: 0,
        rotate: 5,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Background Image Parallax
      gsap.to(imageRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating elements animation
      gsap.to(".floating-badge", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="z-10 relative mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/20 px-4 py-2 rounded-full mb-8"
          >
            <Star size={16} className="text-emerald fill-emerald" />
            <span className="text-xs sm:text-sm font-bold text-emerald uppercase tracking-wider">
              Trusted Tax Solutions
            </span>
          </motion.div>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-navy leading-[0.95] mb-8"
          >
            <span className="block overflow-hidden h-[1.1em]">
              <span className="hero-text-line block">SMART</span>
            </span>
            <span className="block overflow-hidden h-[1.1em]">
              <span className="hero-text-line block text-emerald italic">
                COMPLIANCE
              </span>
            </span>
            <span className="block overflow-hidden h-[1.1em]">
              <span className="hero-text-line block">STRESS FREE.</span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-navy/60 max-w-lg mb-12 leading-relaxed font-medium">
            Join 100+ businesses who trust{" "}
            <span className="text-navy font-bold underline decoration-emerald decoration-4 underline-offset-4">
              Ankul Tax Consultancy
            </span>{" "}
            for seamless GST, Income Tax, and corporate filings.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => (window.location.hash = "#contact")}
              className="btn-premium flex items-center justify-center gap-3 text-lg py-5 px-10 group w-full sm:w-auto"
            >
              <span>Get Started</span>
              <ArrowRight
                size={22}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>

            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200"
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=User+${i}&background=random`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-navy font-bold text-sm sm:text-base">
                  100+ Happy Clients
                </span>
                <span className="text-xs sm:text-sm text-navy/40 font-semibold italic">
                  5-star rating
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visuals */}
        <div className="relative group px-4 sm:px-0">
          <div className="absolute -inset-4 bg-emerald/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700" />

          <div className="relative rounded-[3rem] overflow-hidden border-2 border-white/50 shadow-premium aspect-[4/5] lg:aspect-[3/4]">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover scale-110"
              alt="Tax Consultancy Premium"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />

            {/* Floating Badges */}
            <div className="floating-badge absolute top-6 left-6 sm:top-10 sm:left-10 p-4 sm:p-6 glass rounded-2xl sm:rounded-3xl shadow-premium">
              <span className="block text-2xl sm:text-4xl font-black text-navy leading-none">
                3+
              </span>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-emerald">
                Years Experience
              </span>
            </div>

            <div className="floating-badge absolute bottom-6 right-6 sm:bottom-10 sm:right-10 p-4 sm:p-6 glass rounded-2xl sm:rounded-3xl shadow-premium">
              <span className="block text-2xl sm:text-4xl font-black text-navy leading-none">
                99%
              </span>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-emerald">
                Accuracy Rate
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C54.74,75.45,150.28,78.27,212,86.15Z"
            fill="#F8FAFC"
          ></path>
        </svg>
      </div>
    </section>
  );
}
