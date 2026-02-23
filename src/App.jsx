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
import LocomotiveScroll from "locomotive-scroll";
import AboutSection from './components/AboutSection';

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
    <div className="min-h-screen bg-white" data-scroll-container>
      <Header />
      <main className="pt-32">
        <HeroSection />
        <AboutSection id="about" />
        <TrustStrip />
        <ServicesSection id="services" />
        <WhyChooseUs id="why-choose-us" />
        <ProcessSection id="process" />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
