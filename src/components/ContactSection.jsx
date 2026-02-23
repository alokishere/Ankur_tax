import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
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

    const whatsappNumber = "918853464808";
    const text = `Hello, I am interested in your tax services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");
    setLoading(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/3">
            <span className="text-emerald font-black uppercase tracking-[0.2em] mb-4 block">
              Get in Touch
            </span>

            <h2 className="text-6xl font-black text-navy leading-tight mb-6">
              LET&apos;S <span className="text-emerald italic">TALK.</span>
            </h2>

            <p className="text-navy/70 font-semibold mb-10">
              We usually respond within <strong>24 hours</strong>.
            </p>

            <div className="space-y-12">
              {/* Email */}
              <div>
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-emerald">
                    <Mail size={22} />
                  </div>
                  <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">
                    Email Us
                  </span>
                </div>
                <p className="text-xl font-black text-navy ml-18">
                  ankulyadav7521@gmail.com
                </p>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-emerald">
                    <Phone size={22} />
                  </div>
                  <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">
                    Call / WhatsApp
                  </span>
                </div>
                <p className="text-xl font-black text-navy ml-18">
                 +91 88534 64808
                </p>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-emerald">
                    <MapPin size={22} />
                  </div>
                  <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">
                    Office Location
                  </span>
                </div>
                <p className="text-lg font-bold text-navy/70 leading-relaxed ml-18">
                 Shiv Son's Complex <br />
                  Near G.C.R.G. College, Chandrika Devi Road, <br />
                  B.K.T., Lucknow - 227202
                </p>

                <p className="mt-4 text-sm font-semibold text-navy/50 ml-18">
                  Serving Bakshi Ka Talab, Gomti Nagar & nearby areas
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-premium border border-navy/5">
              <p className="text-navy/60 font-semibold mb-8">
                Prefer a quick response? WhatsApp us directly using the form
                below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-navy/10 py-4 text-xl font-bold text-navy focus:border-emerald outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-navy/10 py-4 text-xl font-bold text-navy focus:border-emerald outline-none"
                  />
                </div>

                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your tax or GST needs"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-navy/10 py-4 text-xl font-bold text-navy focus:border-emerald outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-premium w-full py-6 text-xl flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Book Free Consultation"}
                  <Send size={22} />
                </button>
              </form>

              {/* Google Map */}
              <div className="mt-16 rounded-3xl overflow-hidden border border-navy/10">
                <iframe
                  title="Ankul Tax Consultancy Location"
                  src="https://www.google.com/maps?q=Ankul%20Tax%20Consultancy%20Lucknow&output=embed"
                  className="w-full h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
