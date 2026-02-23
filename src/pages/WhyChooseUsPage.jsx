import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Users, ShieldCheck, TrendingUp, Clock, Zap, Star, CheckCircle, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Stats animation
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
          },
        }
      );

      // Features animation
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "100%", label: "Compliance Rate", icon: ShieldCheck },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const features = [
    {
      title: "Expert Team",
      description: "Certified professionals with extensive experience in tax planning, compliance, and business consulting",
      icon: Award,
      color: "emerald",
      highlights: ["CA/CS Qualified", "Industry Experts", "Continuous Training"]
    },
    {
      title: "Personalized Solutions",
      description: "Tailored services designed specifically for your business needs and objectives",
      icon: Users,
      color: "navy",
      highlights: ["Custom Approach", "Flexible Packages", "One-on-One Consulting"]
    },
    {
      title: "Guaranteed Compliance",
      description: "100% adherence to all tax laws and regulations with complete documentation",
      icon: ShieldCheck,
      color: "emerald",
      highlights: ["Legal Assurance", "Audit Ready", "Regulatory Updates"]
    },
    {
      title: "Fast & Efficient",
      description: "Quick turnaround times without compromising on quality or accuracy",
      icon: Zap,
      color: "navy",
      highlights: ["Timely Delivery", "Streamlined Process", "Priority Handling"]
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront costs with no hidden fees or surprise charges",
      icon: TrendingUp,
      color: "emerald",
      highlights: ["No Hidden Costs", "Detailed Breakdown", "Value for Money"]
    },
    {
      title: "Ongoing Support",
      description: "Continuous assistance and consultation for all your future requirements",
      icon: Clock,
      color: "navy",
      highlights: ["Post-Delivery Support", "Regular Follow-ups", "Lifetime Assistance"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions Pvt Ltd",
      role: "CEO",
      content: "Ankul Tax Consultancy transformed our tax compliance process. Their expertise saved us significant time and ensured complete regulatory adherence. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Global Traders",
      role: "Managing Director",
      content: "The team's professionalism and attention to detail exceeded our expectations. They made complex tax matters simple and stress-free.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Innovate Designs",
      role: "Founder",
      content: "Outstanding service from start to finish. Their personalized approach and quick response time made them the perfect partner for our business.",
      rating: 5
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
                Why Choose Us
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Excellence in <span className="text-emerald">Tax Solutions</span>
            </h1>
            
            <p className="text-lg text-navy/70 leading-relaxed max-w-2xl mx-auto">
              We don't just provide services - we deliver peace of mind through expert guidance, 
              personalized solutions, and unwavering commitment to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="stats-section grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-item bg-white p-8 rounded-2xl border border-navy/5 shadow-premium text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-emerald" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-emerald mb-2">{stat.number}</div>
                <div className="text-navy/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-6">
              What Sets Us <span className="text-emerald">Apart</span>
            </h2>
            <p className="text-lg text-navy/70 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our service delivery
            </p>
          </div>

          <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card bg-white p-8 rounded-3xl border border-navy/5 shadow-premium hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${feature.color === 'emerald' ? 'bg-emerald/10 text-emerald group-hover:bg-emerald group-hover:text-white' : 'bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white'}`}>
                  <feature.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-black text-navy mb-4 group-hover:text-emerald transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-navy/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-emerald flex-shrink-0" />
                      <span className="text-sm text-navy/60">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-24 bg-gradient-to-r from-emerald/5 to-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-6">
              What Our <span className="text-emerald">Clients Say</span>
            </h2>
            <p className="text-lg text-navy/70 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed their tax compliance with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card bg-white p-8 rounded-3xl border border-navy/5 shadow-premium"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-navy/70 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-navy/10 pt-6">
                  <div className="font-black text-navy">{testimonial.name}</div>
                  <div className="text-emerald font-medium">{testimonial.role}</div>
                  <div className="text-sm text-navy/60">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-6">
              Why We're <span className="text-emerald">Different</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-navy/5 shadow-premium">
              <thead>
                <tr className="border-b border-navy/10">
                  <th className="p-6 text-left font-black text-navy text-lg">Features</th>
                  <th className="p-6 text-center font-black text-emerald text-lg">Ankul Tax</th>
                  <th className="p-6 text-center font-medium text-navy/60">Others</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Personalized Service", us: "✅ Premium", others: "❌ Standard" },
                  { feature: "Response Time", us: "⚡ Within 2 hours", others: "⏰ 24-48 hours" },
                  { feature: "Expert Team", us: "✅ CA/CS Qualified", others: "⚠️ Mixed Qualifications" },
                  { feature: "Pricing Transparency", us: "✅ Clear Breakdown", others: "❓ Hidden Fees" },
                  { feature: "Ongoing Support", us: "✅ Lifetime Assistance", others: "❌ Limited Period" },
                  { feature: "Compliance Guarantee", us: "✅ 100% Assurance", others: "⚠️ No Guarantee" }
                ].map((item, index) => (
                  <tr key={index} className="border-b border-navy/5 hover:bg-slate-50">
                    <td className="p-6 font-medium text-navy">{item.feature}</td>
                    <td className="p-6 text-center font-bold text-emerald">{item.us}</td>
                    <td className="p-6 text-center text-navy/60">{item.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
            Ready to Experience the <span className="text-emerald">Difference?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their tax compliance journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald text-navy px-8 py-4 rounded-full font-black hover:bg-emerald/90 transition-colors"
            >
              Start Your Journey
              <ArrowLeft size={20} className="rotate-180" />
            </Link>
            <a 
              href="tel:+919956464808"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-black hover:bg-white hover:text-navy transition-all"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsPage;

// Note: Added missing Phone import at the top