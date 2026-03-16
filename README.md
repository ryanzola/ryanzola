# ryanzola.dev

Personal portfolio & creative playground — 3D scenes, scroll-driven animations, view transitions, and a command palette you can summon with `⌘K`.

**[→ ryanzola.dev](https://ryanzola.dev)**

## ✨ Highlights

| Feature | Details |
|---------|---------|
| **3D Home** | Interactive Three.js scene with R3F, reflective floor, and environment lighting |
| **View Transitions** | Smooth page-to-page animations using the View Transitions API |
| **Scroll Animations** | CSS scroll-driven reveals and slide-ins — no JS needed |
| **Command Palette** | `⌘K` / `Ctrl+K` to fuzzy-search pages and external links |
| **Apps Showcase** | Detail pages for personal projects with screenshots, tech tags, and architecture breakdowns |

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 · React Router |
| **3D** | Three.js · React Three Fiber · Drei |
| **Build** | Vite |
| **Styling** | Tailwind CSS v4 |
| **Hosting** | Cloudflare Pages |
| **CI/CD** | `git push` → auto-deploy |

## 📁 Structure

```
src/
├── App.jsx                  # Router, routes, scroll-to-top, page titles
├── components/
│   ├── Home.jsx             # 3D canvas scene
│   ├── About.jsx            # Bio + social links over video background
│   ├── Web.jsx              # Web project showcase grid
│   ├── Modeling.jsx         # 3D modeling / animation showcase
│   ├── NFT.jsx              # NFT slideshow collection
│   ├── Apps.jsx             # Apps index with status badges
│   ├── Header.jsx           # Persistent nav with view-transition name
│   ├── Menu.jsx             # Mobile overlay menu
│   ├── CommandPalette.jsx   # ⌘K fuzzy search modal
│   ├── ViewTransitionLink.jsx # View Transitions API wrapper
│   ├── ShowcaseItem.jsx     # Reusable project card
│   └── apps/
│       ├── PizzaManGo.jsx   # 🥭 Pizza delivery game detail page
│       ├── DunkinCalculator.jsx # 🍩 Nutrition calculator detail page
│       └── GravityClaw.jsx  # 🦾 AI fitness agent detail page
├── hooks/
│   └── usePageTitle.js      # Dynamic document.title per route
└── index.css                # Design tokens, scroll animations, view transition keyframes
```

## 🚀 Getting Started

```bash
# Install
npm install

# Dev server
npm run dev

# Production build
npm run build
```

## 📄 License

All rights reserved.
