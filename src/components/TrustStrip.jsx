import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const partners = [
  "CORPORATE FILINGS",
  "GST COMPLIANCE",
  "INCOME TAX",
  "AUDIT READY",
  "FINANCIAL GROWTH",
  "LEGAL SUPPORT",
  "TRADEMARK",
  "MSME SETUP",
];

export function TrustStrip() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    gsap.to(scrollRef.current, {
      x: -scrollWidth / 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="bg-navy py-10 overflow-hidden relative border-y border-white/10">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />

      <div ref={scrollRef} className="flex whitespace-nowrap gap-20">
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-3xl lg:text-5xl font-black text-white/20 hover:text-emerald transition-colors cursor-default select-none"
          >
            <span className="w-4 h-4 rounded-full bg-emerald" />
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
}
