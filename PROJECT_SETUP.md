# ANKUL TAX CONSULTANCY - Website

A modern, premium tax consultancy website built with React, Tailwind CSS, Framer Motion, and GSAP. Designed to convert visitors into phone calls, WhatsApp inquiries, and appointment bookings.

## 🎯 Features

### Design
- **Modern Premium Aesthetic**: Clean, professional design with emerald & navy color scheme
- **Trust-Focused**: Credibility building through stats, testimonials, and expert positioning
- **Responsive**: Mobile-first design that works seamlessly across all devices
- **Accessible**: WCAG compliant, semantic HTML, proper contrast ratios

### Sections
1. **Header** - Sticky navigation with floating CTAs on mobile
2. **Hero Section** - Value-driven headline with GSAP animations
3. **Trust Strip** - Stats and credibility indicators
4. **Services** - Categorized service cards with hover animations
5. **Why Choose Us** - Benefits and expert profile
6. **Process** - Simple 4-step process flow
7. **Contact** - Form + direct contact methods
8. **Footer** - Links, contact info, legal

### Interactions
- Lenis smooth scroll with inertia
- Framer Motion section reveals and transitions
- GSAP hero animations on load
- Button hover micro-interactions
- Card hover effects with elevation

### Tech Stack
- **React** 18.2+ (JavaScript, no TypeScript)
- **Vite** 5.0+ (build tool)
- **Tailwind CSS** 3.3+ (utility-first styling)
- **Framer Motion** 10.16+ (animations)
- **GSAP** 3.12+ (advanced animations)
- **Lenis** 1.0+ (smooth scrolling)
- **Lucide React** 0.294+ (icons)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs on `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation & sticky header
│   ├── HeroSection.jsx          # Hero with GSAP animations
│   ├── TrustStrip.jsx           # Trust & credibility section
│   ├── ServicesSection.jsx      # Service cards with categories
│   ├── WhyChooseUs.jsx          # Benefits & expert profile
│   ├── ProcessSection.jsx       # 4-step process flow
│   ├── ContactSection.jsx       # Contact form + methods
│   ├── Footer.jsx               # Footer with links
│   └── index.js                 # Component exports
├── hooks/
│   ├── useLenisScroll.js        # Lenis smooth scroll hook
│   ├── useScrollReveal.js       # GSAP scroll reveal animations
│   ├── useGSAPAnimation.js      # Custom GSAP animation hook
│   └── index.js                 # Hook exports
├── App.jsx                      # Main app component
├── main.jsx                     # React entry point
└── index.css                    # Global styles

```

## 🎨 Color Palette

- **Navy**: `#0F1419` (primary)
- **Emerald**: `#10B981` (accent/CTA)
- **White**: `#ffffff` (base)
- **Light Emerald**: `#D1FAE5` (backgrounds)

## 📱 Responsive Design

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+

## 🔧 Customization

### Update Contact Information
Edit contact details in:
- `src/components/Header.jsx` - Phone, email
- `src/components/ContactSection.jsx` - Form, locations
- `src/components/Footer.jsx` - Links

### Modify Colors
Update Tailwind config in `tailwind.config.js`:
```javascript
colors: {
  navy: "#0F1419",
  emerald: "#10B981",
  // ... customize as needed
}
```

### Add/Remove Sections
Edit `src/App.jsx` to add or remove component sections.

## ⚡ Performance

- Optimized bundle size (~150KB gzipped)
- Lazy image loading ready
- CSS optimizations with Tailwind purging
- Smooth animations using GPU acceleration

## 📞 Contact Information

**ANKUL TAX CONSULTANCY**  
**Adv. Ankul Yadav - Tax Consultant**

- **Phone**: +91 9956464808
- **Email**: ankulyadav7521@gmail.com
- **Location**: Lucknow, Uttar Pradesh

## 📄 License

Built specifically for ANKUL TAX CONSULTANCY. All rights reserved.

---

**Built with ❤️ for professional excellence**
