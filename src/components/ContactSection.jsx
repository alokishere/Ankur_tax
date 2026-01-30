import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const whatsappNumber = "+919956464808"; // Replace with your WhatsApp number
    const text = `Hello, I am interested in your services. \n Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
    setLoading(false);
    setFormData({ name: "", email: "", message: "" });
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
                  Shival Yadav Complex <br /> Near G.C.R.G. College, Chandrika Devi Road ,
                  B.K.T. Lucknow 227202
                </p>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-emerald group-hover:bg-emerald group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">
                    Head Office
                  </span>
                </div>
                <p className="text-lg font-bold text-navy/70 leading-relaxed ml-18">
                  308 Sahara Shopping Center <br /> Lekhraj Faizabad Boad, Lucknow
                  226016
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-premium border border-navy/5">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b-2 border-navy/10 py-4 text-xl font-bold text-navy focus:border-emerald outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b-2 border-navy/10 py-4 text-xl font-bold text-navy focus:border-emerald outline-none transition-colors"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder="Tell us about your needs"
                  className="w-full bg-transparent border-b-2 border-navy/10 py-4 text-xl font-bold text-navy focus:border-emerald outline-none transition-colors resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-premium w-full py-6 text-xl flex items-center justify-center gap-4 opacity-${loading ? "50" : "100"}`}
                >
                  <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                  <Send size={24} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
