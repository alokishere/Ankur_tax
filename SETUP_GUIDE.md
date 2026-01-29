# ANKUL TAX CONSULTANCY - Installation & Setup Guide

## 📋 Prerequisites

- Node.js 16.0+ and npm 8.0+ (or Yarn 1.22+)
- Git (for version control)
- A code editor (VS Code recommended)

## 🚀 Installation Steps

### 1. Install Dependencies

```bash
cd /workspaces/Ankur_tax
npm install
```

This will install all required packages:
- React 18.2+
- Vite 5.0+ (build tool)
- Tailwind CSS 3.3+ (styling)
- Framer Motion 10.16+ (animations)
- GSAP 3.12+ (timeline animations)
- Lenis 1.0+ (smooth scroll)
- Lucide React 0.294+ (icons)

### 2. Start Development Server

```bash
npm run dev
```

The browser will automatically open to `http://localhost:5173` with hot module replacement (HMR) enabled.

### 3. Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### 4. Preview Production Build

```bash
npm run preview
```

Test the production build locally before deployment.

## 📁 Project Structure Explained

```
/src
├── components/           # React components for each section
│   ├── Header.jsx        # Navigation & sticky header
│   ├── HeroSection.jsx   # Hero with GSAP animations & CTAs
│   ├── TrustStrip.jsx    # Trust indicators & stats
│   ├── ServicesSection.jsx # Service cards (3 categories)
│   ├── WhyChooseUs.jsx   # Benefits & expert profile
│   ├── ProcessSection.jsx # 4-step process timeline
│   ├── ContactSection.jsx # Contact form + direct methods
│   ├── Footer.jsx        # Footer with links & info
│   └── index.js          # Component exports
│
├── hooks/                # Custom React hooks
│   ├── useLenisScroll.js # Smooth scroll initialization
│   ├── useScrollReveal.js # GSAP scroll animations
│   ├── useGSAPAnimation.js # Generic GSAP hook
│   └── index.js          # Hook exports
│
├── App.jsx               # Main app component (imports all sections)
├── main.jsx              # React DOM entry point
└── index.css             # Global styles & Tailwind imports
```

## 🎨 Key Design Files

| File | Purpose |
|------|---------|
| `tailwind.config.js` | Color scheme, typography, spacing system |
| `postcss.config.js` | PostCSS processors (Tailwind + Autoprefixer) |
| `index.css` | Global utilities, animations, button styles |
| `vite.config.js` | Vite build configuration |

## 🔧 Configuration Files

### `package.json`
- Dependencies & dev dependencies
- NPM scripts (dev, build, preview, lint)
- Project metadata

### `tailwind.config.js`
Customize:
- **Colors**: Navy, Emerald, custom values
- **Fonts**: Inter (body), Plus Jakarta Sans (display)
- **Spacing**: Consistent grid-based spacing
- **Shadows**: Soft, soft-md, soft-lg
- **Border radius**: Rounded-xl, rounded-2xl

### `vite.config.js`
- React plugin configuration
- Dev server settings (port: 5173, auto-open)
- Build optimization options

## 🎯 Customization Quick Reference

### Change Contact Information
Edit the following files:

**Header.jsx** (lines 25-29)
```javascript
const handleCall = () => {
  window.location.href = 'tel:+919956464808';
};
```

**ContactSection.jsx** (lines in contact methods array)
- Phone number
- WhatsApp link
- Email address

**Footer.jsx** (contact info section)
- Phone, email, location links
- Social media URLs

### Modify Brand Colors
In `tailwind.config.js`:
```javascript
colors: {
  navy: "#0F1419",      // Primary (change this)
  emerald: "#10B981",   // Accent (change this)
  "emerald-light": "#D1FAE5",
  "dark-navy": "#0A0E14",
}
```

Then update references in components.

### Add New Sections
1. Create component: `src/components/YourSection.jsx`
2. Export in: `src/components/index.js`
3. Import & use in: `src/App.jsx`

### Change Typography
In `tailwind.config.js`:
```javascript
fontFamily: {
  inter: ["Inter", "sans-serif"],      // Update fonts
  jakarta: ["Plus Jakarta Sans", "sans-serif"],
}
```

## 🌐 Deployment Guide

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Auto-detects Vite + deploys to production
```

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Traditional Hosting
```bash
# Build
npm run build

# Upload dist/ folder to your server
```

## 🔍 Common Tasks

### Update Services List
Edit `src/components/ServicesSection.jsx` — Modify the `services` object with your service categories and items.

### Add New Stats
Edit `src/components/TrustStrip.jsx` — Update the `stats` array with new statistics.

### Modify Process Steps
Edit `src/components/ProcessSection.jsx` — Update the `steps` array with your process flow.

### Change Form Handler
Edit `src/components/ContactSection.jsx` — The form currently sends emails via `mailto:`. To integrate a backend:
```javascript
// Replace this:
window.location.href = `mailto:ankulyadav7521@gmail.com?...`

// With API call:
fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
})
```

## ⚡ Performance Tips

1. **Image Optimization**: Use WebP format for images
2. **Code Splitting**: Vite automatically chunks components
3. **Lazy Loading**: Add `loading="lazy"` to images
4. **CSS Purging**: Tailwind automatically purges unused styles
5. **Bundle Analysis**: Use `npm run build` and check `dist/` size

## 🐛 Troubleshooting

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles not applying
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Ensure Tailwind class names follow convention
- Check `tailwind.config.js` has correct content paths

### Animation stuttering
- Check for unnecessary re-renders in React DevTools
- Ensure GPU acceleration: add `transform: translateZ(0)` to animated elements

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/gsap/)
- [Lucide Icons](https://lucide.dev)

## 🤝 Support & Maintenance

For updates or customizations:
1. Check this guide first
2. Review component comments
3. Consult documentation links above
4. Test changes in development before production

---

**Happy building! 🚀**
