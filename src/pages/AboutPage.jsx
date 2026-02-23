import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Images parallax effect
      gsap.to(".about-img-1", {
        y: -180,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".about-img-2", {
        y: -300,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".about-img-3", {
        y: -240,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".about-img-4", {
        y: -150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Features animation
      gsap.fromTo(
        ".feature-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-white via-emerald-light/40 to-white">
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
      <section className="relative overflow-hidden" style={{ height: "100vh" }}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="grid lg:grid-cols-2 h-full gap-16">
            {/* LEFT TEXT */}
            <div className="max-w-xl flex flex-col justify-center">
              <div className="hero-content">
                <div className="inline-block mb-8">
                  <span className="text-emerald font-black uppercase tracking-[0.35em] text-sm bg-emerald/10 px-4 py-2 rounded-full">
                    About Us
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-8 leading-tight">
                  Simplifying Tax <span className="text-emerald">Compliance</span>
                </h1>

                <p className="text-lg md:text-xl text-navy/70 leading-relaxed mb-8 font-light">
                  We help individuals and businesses handle tax and compliance with
                  clarity, accuracy, and zero unnecessary stress. Our team of
                  experts is committed to providing you with tailored solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-emerald/10">
                    <div className="text-3xl font-black text-emerald mb-2">10+</div>
                    <div className="text-sm text-navy/60">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-emerald/10">
                    <div className="text-3xl font-black text-emerald mb-2">500+</div>
                    <div className="text-sm text-navy/60">Happy Clients</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-emerald/10">
                    <div className="text-3xl font-black text-emerald mb-2">100%</div>
                    <div className="text-sm text-navy/60">Compliance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative flex items-center justify-center">
              {/* Image 2 – Top small (fastest) */}
              <div
                className="about-img-2 absolute top-10 right-0 w-[180px] h-[240px] md:w-[220px] md:h-[300px]
                    rounded-2xl overflow-hidden shadow-lg border border-emerald/10 z-30"
              >
                <img
                  src="/image2.jpeg"
                  alt="Professional workspace"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 1 – Main hero image */}
              <div
                className="about-img-1 absolute top-24 md:top-32 right-20 md:right-28 w-[300px] h-[400px] md:w-[380px] md:h-[520px]
                    rounded-3xl overflow-hidden shadow-2xl border border-emerald/10 z-20"
              >
                <img
                  src="/image1.jpeg"
                  alt="Office consultation"
                  className="w-full h-full object-cover scale-120"
                />
              </div>

              {/* Image 4 – Tall background image */}
              <div
                className="about-img-4 absolute top-56 md:top-72 right-40 md:right-72 w-[200px] h-[320px] md:w-[260px] md:h-[420px]
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

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight mb-6">
              Why Choose <span className="text-emerald">Ankul Tax?</span>
            </h2>
            <p className="text-lg text-navy/60 max-w-2xl mx-auto">
              We combine expertise with personalized service to deliver exceptional tax solutions
            </p>
          </div>

          <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-item bg-white p-8 rounded-2xl border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Expert Team</h3>
              <p className="text-navy/60">Certified professionals with years of experience in tax compliance and business consulting</p>
            </div>

            <div className="feature-item bg-white p-8 rounded-2xl border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Personalized Service</h3>
              <p className="text-navy/60">Solutions tailored to your unique business needs and requirements</p>
            </div>

            <div className="feature-item bg-white p-8 rounded-2xl border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Guaranteed Accuracy</h3>
              <p className="text-navy/60">100% compliance with all tax regulations and industry standards</p>
            </div>

            <div className="feature-item bg-white p-8 rounded-2xl border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Timely Delivery</h3>
              <p className="text-navy/60">Meet all deadlines with efficient processing and proactive communication</p>
            </div>

            <div className="feature-item bg-white p-8 rounded-2xl border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Transparent Pricing</h3>
              <p className="text-navy/60">Clear, upfront costs with no hidden fees or surprise charges</p>
            </div>

            <div className="feature-item bg-white p-8 rounded-2xl border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Ongoing Support</h3>
              <p className="text-navy/60">Continuous assistance and consultation for all your tax-related queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-emerald/10 to-navy/10 rounded-3xl p-12 border border-emerald/20">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">
              Our <span className="text-emerald">Mission</span>
            </h2>
            <p className="text-lg md:text-xl text-navy/70 leading-relaxed">
              To empower businesses and individuals with seamless tax solutions that drive growth, 
              ensure compliance, and provide peace of mind. We believe in making complex tax matters 
              simple and accessible to everyone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;