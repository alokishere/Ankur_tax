# 🚀 Quick Start Guide - ANKUL TAX CONSULTANCY Website

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies
```bash
cd /workspaces/Ankur_tax
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
👉 Browser opens automatically at `http://localhost:5173`

### Step 3: You're Done! 🎉
Edit files in `src/` and see changes instantly (hot reload).

---

## 📋 Key Files to Know

| File | What It Does | When to Edit |
|------|-------------|--------------|
| `src/components/Header.jsx` | Navigation bar | Add/remove nav links |
| `src/components/HeroSection.jsx` | Above-the-fold section | Change headline/stats |
| `src/components/ServicesSection.jsx` | Service cards | Update services list |
| `src/components/ContactSection.jsx` | Contact form + buttons | Update contact info |
| `tailwind.config.js` | Colors, fonts, spacing | Change brand colors |

---

## 🎨 Most Common Customizations

### 1️⃣ Update Phone Number (30 seconds)
**Files**: `Header.jsx` + `ContactSection.jsx` + `Footer.jsx`

Find:
```
+919956464808
```
Replace with your phone number.

### 2️⃣ Change Brand Colors (1 minute)
**File**: `tailwind.config.js`

```javascript
colors: {
  navy: "#0F1419",      // 👈 Change this to your primary color
  emerald: "#10B981",   // 👈 Change this to your accent color
}
```

### 3️⃣ Update Services List (2 minutes)
**File**: `src/components/ServicesSection.jsx`

Find the `services` object and modify:
```javascript
const services = {
  Registrations: [
    { 
      icon: Building2, 
      title: 'Your Service', 
      desc: 'Your description' 
    },
    // Add/modify more services
  ]
}
```

### 4️⃣ Change Statistics (1 minute)
**File**: `src/components/TrustStrip.jsx`

```javascript
const stats = [
  { number: '100+', label: 'Your Label' },
  // Update numbers and labels
]
```

### 5️⃣ Update Expert Info (1 minute)
**File**: `src/components/WhyChooseUs.jsx`

Find:
```
Adv. Ankul Yadav
15+ Years of Professional Experience
```
Replace with your expert information.

---

## 🏗️ For Developers

### Project Structure
```
src/
├── components/     # 8 main sections
├── hooks/          # 3 custom animation hooks
├── App.jsx         # Main component
├── main.jsx        # Entry point
└── index.css       # Global styles
```

### Tech Stack
- **React 18** — UI framework
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **GSAP** — Timeline animations
- **Lenis** — Smooth scrolling
- **Vite** — Build tool

### Build Commands
```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Check code quality
```

---

## 📱 What's Included

✅ **8 Sections**
- Hero (with GSAP animations)
- Trust & Credibility
- Services (9 cards)
- Why Choose Us (benefits + profile)
- Process (4-step timeline)
- Contact (form + direct methods)
- Header (sticky nav)
- Footer (links + contact)

✅ **Mobile-Ready**
- Floating call + WhatsApp buttons
- Responsive typography
- Touch-friendly buttons
- Optimized forms

✅ **Conversion-Optimized**
- Multiple CTAs throughout
- Trust signals (stats, credentials)
- Easy contact methods
- Clear process explanation

✅ **Professional Animations**
- Smooth Lenis scrolling
- GSAP hero animations
- Framer Motion transitions
- Button micro-interactions

---

## 🎯 Next Steps

### Development
1. `npm run dev` — Start working
2. Edit files in `src/` — See changes instantly
3. Test on mobile — Use DevTools (F12)

### Customization
1. Update contact info (30 sec)
2. Change brand colors (1 min)
3. Update services (2 min)
4. Modify statistics (1 min)

### Deployment
```bash
npm run build          # Create optimized build
# Upload dist/ folder to your hosting
```

---

## 🔗 Essential Links

- **Documentation**: See `README.md`, `SETUP_GUIDE.md`
- **Component Details**: See `COMPONENTS_GUIDE.md`
- **File Manifest**: See `FILE_MANIFEST.md`

---

## ❓ Quick Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Styles not showing?
Clear cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Want to change fonts?
Edit `tailwind.config.js` → `fontFamily` section

### Need custom animations?
Create in `src/hooks/useGSAPAnimation.js`

---

## 📞 Contact Information in Code

**Current values:**
- Phone: `+919956464808`
- Email: `ankulyadav7521@gmail.com`
- Location: `Lucknow, Uttar Pradesh`

**Update in files:**
- `src/components/Header.jsx` (phone)
- `src/components/ContactSection.jsx` (form)
- `src/components/Footer.jsx` (links)

---

## ✨ What Makes This Special

✅ **Awwwards-Caliber Design** — Modern, premium aesthetic  
✅ **Zero Complexity** — Easy to customize  
✅ **Production Ready** — Deploy immediately  
✅ **No Generic Patterns** — Unique tax consultancy design  
✅ **Conversion Focused** — Multiple CTAs, trust signals  
✅ **Mobile First** — Looks perfect on all devices  
✅ **Fast & Smooth** — Optimized animations  
✅ **Well Documented** — 5 comprehensive guides  

---

## 🎓 Learning Resources

- **React**: [react.dev](https://react.dev)
- **Tailwind**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)
- **GSAP**: [greensock.com/gsap](https://greensock.com/gsap/)

---

## 🎉 Ready to Go!

Your professional tax consultancy website is ready to:
- ✅ Attract clients
- ✅ Build trust
- ✅ Convert visitors to leads
- ✅ Look premium and modern

**Run this now:**
```bash
npm install && npm run dev
```

**Then share it with the world!** 🚀

---

**Questions?** Check the comprehensive guides:
- `README.md` — Overview
- `SETUP_GUIDE.md` — Setup & customization
- `COMPONENTS_GUIDE.md` — Component details
- `DELIVERY_SUMMARY.md` — Full project details
