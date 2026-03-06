# Eleazar Rosete — Portfolio

A premium one-page portfolio built with Vite + React + TypeScript + TailwindCSS + Framer Motion.

## 🚀 Quick Start

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

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Sticky nav with theme toggle & mobile menu
│   ├── ParticlesBackground.tsx  # Animated star particle canvas
│   ├── ProjectModal.tsx     # Project case study popup
│   └── Footer.tsx           # Page footer
├── sections/
│   ├── HeroSection.tsx      # Cinematic hero with glow effects
│   ├── ExpertiseSection.tsx # Authority/credibility cards
│   ├── ProblemsSection.tsx  # Problem → Solution layout
│   ├── ProjectsSection.tsx  # Projects grid
│   ├── ServicesSection.tsx  # Services with delivery times
│   ├── ProcessSection.tsx   # 6-step professional process
│   └── TrustCTAContact.tsx  # Trust, CTA, and Contact sections
├── data/
│   ├── projects.ts          # ← EDIT: Add/modify projects here
│   ├── services.ts          # ← EDIT: Add/modify services here
│   └── process.ts           # ← EDIT: Modify process steps here
├── hooks/
│   ├── useTheme.ts          # Dark/light mode management
│   └── useScrollReveal.ts   # Scroll-triggered animations
├── styles/
│   └── globals.css          # CSS variables (theme colors), base styles
├── App.tsx                  # Main app shell
└── main.tsx                 # Entry point
```

## ✏️ How to Edit Content

### Add a New Project
Open `src/data/projects.ts` and add a new object to the `projects` array:
```ts
{
  id: 8,
  icon: "🔧",
  tag: "Web Development",
  title: "New Project Name",
  summary: "Short one-line summary shown on card.",
  problem: "What problem did the client face?",
  solution: "What did you build to solve it?",
  tech: ["React", "Node.js", "PostgreSQL"],
  outcome: "What measurable result was achieved?",
  demo: "https://your-demo-link.com",
}
```

### Update Contact Info
Open `src/sections/TrustCTAContact.tsx` → find the `EDITABLE: CONTACT LINKS` comment and update the `href` values.

### Change Theme Colors
Open `src/styles/globals.css` and modify the CSS variables inside `:root` (dark mode) or `.light` (light mode).

### Modify Nav Links
Open `src/components/Navbar.tsx` → find `NAV_LINKS` array and update.

## 🎨 Design System

- **Fonts**: Sora (headings) + DM Sans (body) + JetBrains Mono (labels/code)
- **Theme**: Dark by default with light mode toggle
- **Colors**: Electric Indigo / Violet / Blue on deep midnight
- **Animations**: Framer Motion for page load, scroll reveal, and hover states
- **Particles**: Canvas-based star constellation background

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `framer-motion` | Animations & transitions |
| `lucide-react` | Icon library |
| `tailwindcss` | Utility CSS (layout helpers) |
| `react` + `react-dom` | UI framework |
| `typescript` | Type safety |
| `vite` | Build tool |
# EleazarRosete-Portfolio
