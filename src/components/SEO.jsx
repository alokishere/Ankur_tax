import React from "react";
import { Helmet } from "react-helmet-async";

export function SEO({
  title = "Ankul Tax Consultancy | Expert Tax Consultant in Bakshi Ka Talab, Lucknow",
  description = "Professional tax consultancy services in Bakshi Ka Talab, Lucknow. Expert Income Tax Return filing, GST registration & compliance, tax planning, and audit support. On-site services + online appointments available.",
  keywords = "tax consultant Bakshi Ka Talab, GST registration Lucknow, income tax consultant Lucknow, tax consultancy Lucknow, ITR filing Lucknow, GST compliance, audit support, business tax planning",
  canonical = "https://ankultaxconsultancy.com",
  ogImage = "https://ankultaxconsultancy.com/og-image.jpg",
  type = "website",
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ankultaxconsultancy.com",
    name: "Ankul Tax Consultancy",
    alternateName: "Adv. Ankul Yadav - Tax Consultant",
    description:
      "Professional tax consultancy services including Income Tax Return filing, GST registration & compliance, tax planning, and audit support in Bakshi Ka Talab, Lucknow.",
    url: "https://ankultaxconsultancy.com",
    telephone: "+919956464808",
    email: "ankulyadav7521@gmail.com",
    priceRange: "$$",
    image: ogImage,
    logo: {
      "@type": "ImageObject",
      url: "https://ankultaxconsultancy.com/logo.png",
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress:
          "Shival Yadav Complex, Near G.C.R.G. College, Chandrika Devi Road",
        addressLocality: "Bakshi Ka Talab",
        addressRegion: "Uttar Pradesh",
        postalCode: "227202",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "308 Sahara Shopping Center, Lekhraj Faizabad Road",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226016",
        addressCountry: "IN",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.9124",
      longitude: "80.9466",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Lucknow",
      },
      {
        "@type": "City",
        name: "Bakshi Ka Talab",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tax Consultancy Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Income Tax Return Filing",
            description:
              "Individual and corporate tax filing with maximized deductions and 100% compliance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GST Registration & Compliance",
            description:
              "Complete end-to-end GST support from registration to monthly/annual returns",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tax Planning & Consultancy",
            description:
              "Strategic financial planning to optimize your tax liability legally",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Audit & Assurance",
            description:
              "Detailed financial auditing to ensure transparency and institutional trust",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Setup & Registration",
            description:
              "LLC, Pvt Ltd, and Partnership registration with all legal documentation",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "100",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      // Add social media URLs when available
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Online Appointments",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "On-site Services",
        value: true,
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Ankul Tax Consultancy" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Bakshi Ka Talab, Lucknow" />
      <meta name="geo.position" content="26.9124;80.9466" />
      <meta name="ICBM" content="26.9124, 80.9466" />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
