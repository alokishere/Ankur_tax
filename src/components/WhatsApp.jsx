import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "918853464808"; // with country code
  const message =
    "Hello Ankul Tax Consultancy, I visited your website and would like to discuss tax/GST services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+918853464808"
        aria-label="Call Now"
        className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
      >
        <FaPhoneAlt size={22} />
      </a>
    </div>
  );
};

export default WhatsApp;
