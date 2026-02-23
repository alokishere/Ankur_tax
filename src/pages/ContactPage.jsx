import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Contact cards animation
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-cards",
            start: "top 80%",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

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
          <div className="hero-content text-center max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-emerald font-black uppercase tracking-[0.3em] text-sm bg-emerald/10 px-4 py-2 rounded-full">
                Contact Us
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Get In <span className="text-emerald">Touch</span>
            </h1>
            
            <p className="text-lg text-navy/70 leading-relaxed">
              Have questions about our services? Want to schedule a consultation? 
              Our team is ready to help you with all your tax and compliance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="contact-cards grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="contact-card bg-white p-8 rounded-2xl border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="text-emerald" size={32} />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Call Us</h3>
              <a href="tel:+919956464808" className="text-emerald hover:underline block">
                +91 99564 64808
              </a>
              <p className="text-navy/60 text-sm mt-2">Mon-Fri: 9AM - 6PM</p>
            </div>

            <div className="contact-card bg-white p-8 rounded-2xl border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="text-emerald" size={32} />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Email Us</h3>
              <a href="mailto:info@ankultax.com" className="text-emerald hover:underline block">
                info@ankultax.com
              </a>
              <p className="text-navy/60 text-sm mt-2">We reply within 24 hours</p>
            </div>

            <div className="contact-card bg-white p-8 rounded-2xl border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-emerald" size={32} />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Visit Us</h3>
              <p className="text-navy/60">
                123 Business Street<br />
                Mumbai, Maharashtra 400001
              </p>
            </div>

            <div className="contact-card bg-white p-8 rounded-2xl border border-navy/5 shadow-premium hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="text-emerald" size={32} />
              </div>
              <h3 className="text-xl font-black text-navy mb-3">Working Hours</h3>
              <p className="text-navy/60">
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="contact-form">
              <div className="bg-white p-8 rounded-3xl border border-navy/5 shadow-premium">
                <h2 className="text-2xl font-black text-navy mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-navy/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-navy/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-navy/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-navy/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="gst">GST Registration</option>
                      <option value="company">Company Registration</option>
                      <option value="tax-return">Tax Return Filing</option>
                      <option value="accounting">Accounting Services</option>
                      <option value="legal">Legal Services</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-navy/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-premium flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="contact-form">
              <div className="bg-white p-8 rounded-3xl border border-navy/5 shadow-premium h-full">
                <h2 className="text-2xl font-black text-navy mb-6">Our Location</h2>
                <div className="bg-slate-100 rounded-2xl h-80 flex items-center justify-center">
                  <div className="text-center text-navy/50">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Location will be displayed here</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-emerald mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold text-navy">Head Office</h3>
                      <p className="text-navy/60 text-sm">
                        123 Business Avenue<br />
                        Financial District<br />
                        Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="text-emerald mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold text-navy">Emergency Support</h3>
                      <p className="text-navy/60 text-sm">
                        +91 99564 64808<br />
                        Available 24/7 for urgent matters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-emerald/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">
            Prefer <span className="text-emerald">Instant Chat?</span>
          </h2>
          <p className="text-lg text-navy/70 mb-8 max-w-2xl mx-auto">
            Connect with us instantly on WhatsApp for quick responses and immediate assistance
          </p>
          <a
            href="https://wa.me/919956464808?text=Hello! I visited your website and would like to know more about your services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald text-white px-8 py-4 rounded-full font-bold hover:bg-emerald/90 transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;