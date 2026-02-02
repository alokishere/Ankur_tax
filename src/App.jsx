import React, { useEffect } from "react";
import {
  Header,
  HeroSection,
  TrustStrip,
  ServicesSection,
  WhyChooseUs,
  ProcessSection,
  ContactSection,
  Footer,
  LoadingScreen,
  CustomCursor,
} from "./components";
import { useLenisScroll, useScrollReveal } from "./hooks";
import "./index.css";
import WhatsApp from "./components/WhatsApp";
import AboutSection from "./components/AboutSection";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  useLenisScroll();
  useScrollReveal();

  // Smooth scrolling support for all anchor links
  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href");
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen />
      <CustomCursor />
      <WhatsApp />
      <Header />
      <HeroSection />
      <AboutSection />
      <TrustStrip />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
