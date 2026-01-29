# Component Documentation

## Overview

Each component is a self-contained React module that handles one section of the website. Components use Framer Motion for animations and are fully styled with Tailwind CSS.

## Component Reference

### 1. Header.jsx
**Purpose**: Sticky navigation and floating CTAs

**Key Features**:
- Top info bar (hidden on mobile)
- Sticky header with smooth animation
- Call & WhatsApp buttons (desktop)
- Floating mobile CTA buttons

**Customization Points**:
- Phone number: Line 9 `'+919956464808'`
- Email: Line 14 `'ankulyadav7521@gmail.com'`
- Navigation links: Line 46-49
- WhatsApp URL: Line 75

**Props**: None

---

### 2. HeroSection.jsx
**Purpose**: Above-the-fold hero with main value proposition

**Key Features**:
- GSAP background grid animation
- Gradient orbs for visual interest
- Three stat cards (clients, services, experience)
- Dual CTA buttons (Call + WhatsApp)
- Trust badge with avatars

**Customization Points**:
- Headline: Line 54-57
- Subtext: Line 59-62
- Stats: Line 64-74
- Call/WhatsApp handlers: Line 36-44

**Props**: None

**Animations**:
- Grid float (GSAP)
- Text stagger (GSAP)
- Slide in left (Framer Motion)

---

### 3. TrustStrip.jsx
**Purpose**: Build credibility with stats and benefits

**Key Features**:
- Navy background
- 4 key statistics (animated on scroll)
- 3 trust indicators (checkmarks + description)

**Customization Points**:
- Stats array: Line 5-10
- Trust indicators: Line 37-55

**Props**: None

**Animations**:
- Stat numbers stagger reveal (Framer Motion)
- Slide in from left (Framer Motion)

---

### 4. ServicesSection.jsx
**Purpose**: Showcase all services in organized categories

**Key Features**:
- 3 service categories (Registrations, Taxation, Other)
- 9 service cards total (3 per category)
- Hover elevation animation
- Background gradient on hover
- Icon animation on hover

**Customization Points**:
- Services object: Line 6-24
- Category titles: Update in services object
- Icons: Import from lucide-react

**Props**: None

**Animations**:
- Card stagger reveal (Framer Motion)
- Hover elevation (Tailwind)
- Icon scale (Framer Motion)
- Background gradient (Tailwind)

---

### 5. WhyChooseUs.jsx
**Purpose**: Explain unique value proposition and build authority

**Key Features**:
- 4 benefit cards with icons
- Expert profile section (navy background)
- Divider with gradient line
- Rotating background orbs

**Customization Points**:
- Benefits array: Line 4-17
- Expert name: Line 121 `'Adv. Ankul Yadav'`
- Expert credentials: Line 124-131

**Props**: None

**Animations**:
- Benefit card reveal with hover effect
- Accent line bottom reveal (Framer Motion)
- Background blob scale (Framer Motion)
- Rotating gradient (Framer Motion)

---

### 6. ProcessSection.jsx
**Purpose**: Show 4-step customer journey

**Key Features**:
- Alternating layout (desktop only)
- Timeline connectors (GSAP animated)
- 4 steps with icons
- Bottom CTA card

**Customization Points**:
- Steps array: Line 5-26
- Step titles, descriptions, icons
- Bottom CTA text: Line 90-93

**Props**: None

**Animations**:
- Timeline height reveal (GSAP)
- Step content slide in with offset
- Staggered reveal by index

---

### 7. ContactSection.jsx
**Purpose**: Capture leads and provide contact options

**Key Features**:
- Contact method buttons (Phone, WhatsApp, Email)
- Office location cards
- Contact form with 5 fields
- Success message

**Form Fields**:
- Name (text)
- Email (email)
- Phone (tel)
- Service (select with options)
- Message (textarea)

**Customization Points**:
- Contact methods: Line 10-30
- Office locations: Line 32-43
- Form field options: Line 153
- Email destination: Line 72

**Props**: None

**Form Behavior**:
- Currently sends via `mailto:`
- To use backend: Replace `handleSubmit` function with API call

---

### 8. Footer.jsx
**Purpose**: Navigation, links, and legal compliance

**Key Features**:
- 4-column layout (brand, nav, services, contact)
- Contact info with icons
- Social media links
- Legal links (Privacy, Terms, Disclaimer)

**Customization Points**:
- Quick links: Line 26-32
- Service links: Line 35-39
- Contact info: Line 42-52
- Social links: Line 105-110
- Copyright year: Auto-calculated

**Props**: None

**Animations**:
- Column stagger reveal (Framer Motion)
- Staggered with 0.1s delay between columns

---

## Custom Hooks

### useLenisScroll.js
**Purpose**: Initialize and manage smooth scroll with inertia

**Usage**:
```javascript
import { useLenisScroll } from './hooks';

function MyComponent() {
  useLenisScroll();
  return <div>Content</div>;
}
```

**Configuration** (Line 6-13):
- Duration: 1.2s (ease duration)
- Easing function: Custom cubic easing
- Direction: 'vertical'
- Smooth: true
- Touch inertia multiplier: 30

---

### useScrollReveal.js
**Purpose**: Animate elements on scroll with GSAP

**Usage**:
Add `data-scroll-reveal` attribute to any element:
```jsx
<div data-scroll-reveal>Content reveals on scroll</div>
```

**Default Animation**:
- Fade in + slide up
- Trigger: 80% from viewport top
- Duration: 0.8s

---

### useGSAPAnimation.js
**Purpose**: Generic GSAP animation hook for custom animations

**Usage**:
```javascript
const ref = useGSAPAnimation((element) => {
  gsap.to(element, { rotation: 360 });
}, []);
```

---

## Styling System

### Global Styles (index.css)
- HTML base styles (smooth scroll, margins)
- Body styles (font, color, background)
- Utility classes (.gradient-text, .hero-grid, etc.)
- Button utility classes (.btn-primary, .btn-secondary)

### Tailwind Configuration
- Colors: navy, emerald, emerald-light, dark-navy
- Font families: Inter (body), Plus Jakarta Sans (headings)
- Custom spacing: xs, sm, md, lg, xl, 2xl, 3xl
- Custom shadows: soft, soft-md, soft-lg
- Custom rounded: rounded-2xl, rounded-3xl

### Component-Level Styles
- All inline with Tailwind classes
- No CSS-in-JS or separate stylesheets
- Responsive prefixes (md:, lg:) for breakpoints

---

## Animation Patterns

### Pattern 1: Section Reveal on Scroll
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Pattern 2: Staggered Children
```jsx
{items.map((item, index) => (
  <motion.div
    key={item}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: index * 0.1 }}
  >
    {item}
  </motion.div>
))}
```

### Pattern 3: Hover Effects
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Pattern 4: GSAP Timeline (Hero Grid)
```javascript
gsap.to(element, {
  y: 20,
  opacity: 0.8,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});
```

---

## Common Customizations

### Change All Button Colors
Edit `.btn-primary` and `.btn-secondary` in `index.css`

### Modify Section Spacing
Edit `py-20 md:py-32` in each section component

### Change Animation Duration
Edit `duration: 0.6` values in motion components

### Add New Service Card
1. Edit ServicesSection.jsx `services` object
2. Add new object with icon, title, desc
3. Icon must be imported from lucide-react

### Update Process Steps
1. Edit ProcessSection.jsx `steps` array
2. Add/modify step objects
3. Ensure 4 steps or adjust layout

---

## Performance Considerations

1. **Bundle Size**: ~150KB gzipped (optimized with Vite)
2. **Image Loading**: Add `loading="lazy"` to images
3. **Animation Performance**: Using GPU-accelerated transforms
4. **CSS Efficiency**: Tailwind purges unused styles in build
5. **Script Loading**: GSAP + Framer Motion loaded in parallel

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS 12+, Android Chrome)

---

**Last Updated**: January 2026
