import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { gsap } from "gsap";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-animate", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const whatsappNumber = "918853464808";
  const whatsappMessage =
    "Hello Ankul Tax Consultancy,%0AI visited your website and would like to discuss tax/GST services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer
      ref={footerRef}
      className="bg-white pt-32 pb-12 border-t border-navy/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-32">
          {/* Brand */}
          <div className="lg:w-1/3 footer-animate">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-12 rounded-2xl overflow-hidden">
                <img src="/logo.png" alt="Ankul Tax Consultancy Logo" />
              </div>
              <h2 className="font-jakarta font-bold text-md text-navy leading-none">
                ANKUL TAX
                <br />
                <span className="text-emerald text-xm"> CONSULTANCY</span>
              </h2>
            </div>

            <p className="text-navy/40 font-medium leading-relaxed mb-8 max-w-sm">
              Precision-driven tax & financial consultancy since 2021. Turning
              complexity into compliance for individuals and businesses.
            </p>

            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-navy/40 hover:bg-navy hover:text-white transition-all hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:w-2/3">
            <div className="footer-animate">
              <h4 className="font-black text-navy uppercase tracking-widest text-xs mb-8">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {["Services", "Why Us", "Process", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-navy/60 font-bold hover:text-emerald transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-animate">
              <h4 className="font-black text-navy uppercase tracking-widest text-xs mb-8">
                Legal
              </h4>
              <ul className="space-y-4">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-navy/60 font-bold hover:text-emerald transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* CTA */}
            <div className="col-span-2 md:col-span-1 footer-animate">
              <h4 className="font-black text-navy uppercase tracking-widest text-xs mb-8">
                Ready to talk?
              </h4>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium py-1 w-full md:w-auto flex items-center justify-center gap-3"
              >
                <span className="text-emerald hover:text-navy">
                  {" "}
                  <FaWhatsapp size={60} />
                </span>
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-navy/5 gap-8 footer-animate">
          <p className="text-navy/40 font-bold text-sm">
            © {currentYear} Ankul Tax Consultancy. All rights reserved.
          </p>

          <p className="text-navy/40 font-bold text-sm">
            Designed by{" "}
            <a
              href="https://alokdev.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald hover:underline"
            >
              Alok
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
