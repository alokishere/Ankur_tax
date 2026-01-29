# ANKUL TAX CONSULTANCY - Website

A modern, premium, Awwwards-inspired tax consultancy website for **Adv. Ankul Yadav**.

## ✨ Key Features

### 🎯 Conversion-Focused
- **Sticky floating CTAs** on mobile (Call + WhatsApp)
- **Multiple conversion points** throughout the page
- **Trust-building sections** with stats and expert profile
- **Seamless contact methods** (phone, WhatsApp, email, form)

### 🎨 Premium Design
- Clean white + navy + emerald color scheme
- Modern Indian business aesthetic
- Generous whitespace and soft shadows
- Rounded-xl cards with subtle depth
- No stock photo feel — curated visuals

### ⚡ Advanced Interactions
- **Lenis smooth scroll** with inertia physics
- **GSAP hero animations** on page load
- **Framer Motion** section reveals and transitions
- **Button micro-interactions** with scale & glow
- **Card hover elevations** with smooth transitions

### 📱 Fully Responsive
- Mobile-first approach
- Floating action buttons on mobile
- Adaptive typography and spacing
- Touch-friendly interactions

## 🛠️ Tech Stack

| Library | Purpose |
|---------|---------|
| **React** | Component framework (JavaScript, no TS) |
| **Vite** | Lightning-fast build tool |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Component animations |
| **GSAP** | Advanced timeline animations |
| **Lenis** | Smooth scroll with physics |
| **Lucide React** | Minimal outline icons |

## 📋 Mandatory Sections

✅ **1. Hero Section**
- Value-driven headline: "Smart Tax. Clear Compliance. Zero Stress."
- Subtext on GST, Income Tax, Business Compliance
- Primary CTA: Call Now / Book Appointment
- GSAP grid background animations

✅ **2. Trust & Credibility Strip**
- 10+ Services Covered
- 100+ Individual & Business Clients
- Lucknow-based Professional Consultancy
- Navy background, stat cards

✅ **3. Services Section**
- **Registrations**: GST, Company, Partnership
- **Taxation**: Income Tax, Tax Planning, GST Compliance
- **Other**: Business Advisory, Audit Support, Legal Compliance
- Hover animations with elevation

✅ **4. Why Choose Us**
- Transparent Process
- Timely Filings
- Personal Consultant Support
- Affordable Pricing
- Expert profile section (Adv. Ankul Yadav)

✅ **5. Process Section**
- Simple 4-step flow with alternating layout
- Consultation → Documentation → Filing → Support
- Timeline connectors with GSAP animations

✅ **6. Contact & Appointment**
- Contact form (name, email, phone, service, message)
- Direct contact buttons: Phone, WhatsApp, Email
- Office locations and hours
- Sticky mobile CTA buttons

✅ **7. Footer**
- Business name and tagline
- Quick navigation links
- Service quick links
- Contact info + social icons
- Copyright and legal links

## 📞 Contact Information

- **Phone**: +91 9956464808
- **WhatsApp**: +91 9956464808
- **Email**: ankulyadav7521@gmail.com
- **Location**: Lucknow, Uttar Pradesh

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server (opens in browser)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
ankul-tax-consultancy/
├── src/
│   ├── components/          # 7 main sections + header/footer
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── TrustStrip.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── index.js
│   ├── hooks/               # Custom animation hooks
│   │   ├── useLenisScroll.js
│   │   ├── useScrollReveal.js
│   │   ├── useGSAPAnimation.js
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Design System

### Colors
- **Navy (Primary)**: `#0F1419`
- **Emerald (Accent)**: `#10B981`
- **Light Emerald (Soft BG)**: `#D1FAE5`
- **White (Base)**: `#ffffff`

### Typography
- **Display**: Plus Jakarta Sans (bold)
- **Body**: Inter (regular, medium, semibold)
- **Font sizes**: Responsive with Tailwind scale

### Spacing
- Consistent grid-based spacing (sm, md, lg, xl, 2xl, 3xl)
- Generous whitespace between sections
- Tailored padding for each breakpoint

### Components
- Rounded corners: `rounded-xl` (1rem), `rounded-2xl` (1rem)
- Shadows: soft, soft-md, soft-lg
- Transitions: smooth 300ms easing
- Borders: subtle gray with emerald on hover

## 🎯 Conversion Optimization

1. **Multiple CTA Placements**
   - Header: Call Now + WhatsApp
   - Hero: Call + WhatsApp + Learn More
   - Process: Book Consultation
   - Contact: Full form + direct buttons
   - Mobile: Floating buttons always visible

2. **Trust Signals**
   - Stats (100+ clients, 10+ services, 15+ years)
   - Expert profile with credibility
   - Clear process transparency
   - Office locations and hours

3. **Mobile UX**
   - Floating action buttons (Call + WhatsApp)
   - Touch-friendly button sizes
   - Optimized form for mobile
   - Fast-loading assets

## 🔄 Customization Guide

### Update Contact Info
[Header.jsx](src/components/Header.jsx) — Phone, email, WhatsApp links  
[ContactSection.jsx](src/components/ContactSection.jsx) — Form handler, locations  
[Footer.jsx](src/components/Footer.jsx) — Contact links

### Modify Colors
[tailwind.config.js](tailwind.config.js) — Update `colors` object

### Add/Remove Sections
[App.jsx](src/App.jsx) — Import and include section components

### Change Typography
[tailwind.config.js](tailwind.config.js) — Update `fontFamily` settings

## ✅ Quality Checklist

- [x] Modern, premium design (Awwwards-inspired)
- [x] No generic CA website patterns
- [x] Clean, intentional layouts
- [x] Smooth animations (Lenis + GSAP + Framer Motion)
- [x] Responsive mobile experience
- [x] Conversion-focused CTAs
- [x] Trust-building elements
- [x] Fast performance (optimized bundle)
- [x] Accessibility ready
- [x] Production-ready code

## 📈 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Built for professional excellence** | **ANKUL TAX CONSULTANCY**