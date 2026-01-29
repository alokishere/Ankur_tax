import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("success"), 2000);
  };

  return (
    <section
      id="contact"
      className="py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/3">
            <span className="text-emerald font-black uppercase tracking-[0.2em] mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-6xl font-black text-navy leading-tight mb-12">
              LET'S <span className="text-emerald italic">TALK.</span>
            </h2>

            <div className="space-y-12">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-emerald group-hover:bg-emerald group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">
                    Email Us
                  </span>
                </div>
                <p className="text-xl font-black text-navy ml-18">
                  ankulyadav7521@gmail.com
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-emerald group-hover:bg-emerald group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">
                    Call Us
                  </span>
                </div>
                <p className="text-xl font-black text-navy ml-18">
                  +91 9956464808
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-emerald group-hover:bg-emerald group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">
                    Our Office
                  </span>
                </div>
                <p className="text-lg font-bold text-navy/70 leading-relaxed ml-18">
                  Varanasi, Uttar Pradesh
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-premium border border-navy/5 relative">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b-2 border-navy/10 py-4 text-xl font-bold text-navy focus:border-emerald outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label className="absolute left-0 top-4 text-navy/40 font-bold transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-emerald peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b-2 border-navy/10 py-4 text-xl font-bold text-navy focus:border-emerald outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label className="absolute left-0 top-4 text-navy/40 font-bold transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-emerald peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    rows="4"
                    required
                    className="w-full bg-transparent border-b-2 border-navy/10 py-4 text-xl font-bold text-navy focus:border-emerald outline-none transition-colors peer resize-none"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute left-0 top-4 text-navy/40 font-bold transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-emerald peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                    Tell us about your needs
                  </label>
                </div>

                <button
                  disabled={formStatus !== "idle"}
                  className={`btn-premium w-full py-6 text-xl flex items-center justify-center gap-4 ${formStatus === "success" ? "bg-emerald" : ""}`}
                >
                  {formStatus === "idle" && (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={24} />
                    </>
                  )}
                  {formStatus === "sending" && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Send size={24} />
                    </motion.div>
                  )}
                  {formStatus === "success" && (
                    <>
                      <span>Message Sent!</span>
                      <Check size={24} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
