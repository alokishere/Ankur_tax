import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-32 pb-12 border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap- 20 mb-32">
          {/* Brand Part */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-12 rounded-2xl flex items-center justify-center text-white font-bold">
                <img src="/logo.png" alt="Logo" className="h-full w-full" />
              </div>
              <h2 className="font-jakarta font-extrabold text-2xl tracking-tight text-navy">
                ANKUL TAX
              </h2>
            </div>
            <p className="text-navy/40 font-medium leading-relaxed mb-8 max-w-sm">
              Providing precision-driven financial and tax consultancy since
              2022. We turn complexity into compliance.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-navy/40 hover:bg-navy hover:text-white transition-all transform hover:-translate-y-2"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Part */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:w-2/3">
            <div>
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

            <div>
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

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black text-navy uppercase tracking-widest text-xs mb-8">
                Ready to grow?
              </h4>
              <button
                onClick={() => (window.location.href = "tel:+919956464808")}
                className="btn-premium py-4 w-full md:w-auto"
              >
                Schedule Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-navy/5 gap-8">
          <p className="text-navy/40 font-bold text-sm">
            © {currentYear} Ankul Tax Consultancy. All rights reserved.
          </p>
          <p className="text-navy/40 font-bold text-sm flex items-center gap-2">
            Designed with <span className="text-emerald">❤</span> for Excellence by <a href="https://itsalok.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-emerald">Alok</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
