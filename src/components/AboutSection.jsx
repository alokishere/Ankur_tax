import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ id }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Faster parallax effect - data-scroll-speed="2"
      gsap.to(".about-img-1", {
        y: -180,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Even faster - data-scroll-speed="3"
      gsap.to(".about-img-2", {
        y: -300,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Medium speed - data-scroll-speed="2.5"
      gsap.to(".about-img-3", {
        y: -240,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Faster - data-scroll-speed="2"
      gsap.to(".about-img-4", {
        y: -150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id || "about"}
      className="relative bg-gradient-to-b from-white via-emerald-light/40 to-white overflow-hidden"
      style={{ height: "120vh" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="grid lg:grid-cols-2 h-full  gap-32">
          {/* LEFT TEXT - Enhanced Typography */}
          <div className="max-w-xl pt-20">
            <div className="inline-block mb-8">
              <span className="text-emerald font-black uppercase tracking-[0.35em] text-sm bg-emerald/10 px-4 py-2 rounded-full">
                About Us
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-navy mb-8 leading-tight">
              Simplifying Tax <span className="text-emerald">Compliance</span>
            </h2>

            <p className="text-lg text-navy/70 leading-relaxed mb-8 font-light">
              We help individuals and businesses handle tax and compliance with
              clarity, accuracy, and zero unnecessary stress. Our team of
              experts is committed to providing you with tailored solutions.
            </p>

            <div className="flex flex-col gap-6 mt-12">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-emerald/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">Expert Team</h4>
                  <p className="text-sm text-navy/60">
                    Certified professionals with years of experience
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-emerald/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">
                    Personalized Service
                  </h4>
                  <p className="text-sm text-navy/60">
                    Solutions tailored to your unique needs
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-emerald/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">
                    Guaranteed Accuracy
                  </h4>
                  <p className="text-sm text-navy/60">
                    100% compliance with all regulations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES – CLEAN COMPOSITION */}
          <div className="relative mt-40 ">
            {/* Image 2 – Top small (fastest) */}
            <div
              className="about-img-2 absolute top-10 right-0 w-[220px] h-[300px] 
                  rounded-2xl overflow-hidden shadow-lg border border-emerald/10 z-30"
            >
              <img
                src="/image2.jpeg"
                alt="Professional workspace"
                className="w-full h-full object-cover "
              />
            </div>

            {/* Image 1 – Main hero image */}
            <div
              className="about-img-1 absolute top-32 right-28 w-[380px] h-[520px] 
                  rounded-3xl overflow-hidden shadow-2xl border border-emerald/10 z-20"
            >
              <img
                src="/image1.jpeg"
                alt="Office consultation"
                className="w-full h-full object-cover  scale-120"
              />
            </div>

            {/* Image 4 – Tall background image */}
            <div
              className="about-img-4 absolute top-72 right-72 w-[260px] h-[420px] 
                  rounded-3xl overflow-hidden shadow-xl border border-emerald/10 z-10"
            >
              <img
                src="/image4.jpeg"
                alt="Office environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
