# React + TypeScript + Vite
# Vidula Srivatsa — Portfolio Website
This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.
A premium, editorial portfolio built with React + Vite + TypeScript, designed following a monochrome press-kit aesthetic inspired by the DESIGN.md specification.
Currently, two official plugins are available:
## Stack
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)
- **Framework:** React 19 + Vite 8
- **Language:** TypeScript
- **Styling:** Vanilla CSS (design tokens in `src/index.css`) + Tailwind v4
- **Animation:** Framer Motion
- **Routing:** React Router v7
- **Deployment:** Vercel (auto-deploy from `main` branch)
## React Compiler
## Project Structure
The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
```
src/
├── components/
│   ├── Layout.tsx          # Page wrapper with AnimatePresence transitions
│   ├── NavPill.tsx         # Floating nav pill + mobile menu overlay
│   ├── Footer.tsx          # Three-column footer strip
│   ├── ProjectCarousel.tsx # Physics-based horizontal dial carousel
│   └── Typography.tsx      # DisplayHeadline, MonospaceTag, SparkleDivider, etc.
├── data/
│   └── projects.ts         # All project content + personal info
├── lib/
│   └── animations.ts       # Shared framer-motion variants
├── pages/
│   ├── Home.tsx            # Hero + carousel + about + skills + contact CTA
│   ├── Work.tsx            # Tabular project listing
│   ├── About.tsx           # Bio + education + experience
│   ├── Contact.tsx         # Contact page
│   └── ProjectDetail.tsx   # Full case study page template
├── App.tsx                 # Router config
├── main.tsx                # Entry point
└── index.css               # Design tokens, typography, layout utilities
```
## Expanding the Oxlint configuration
## Design System
If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:
Follows the monochrome editorial system from DESIGN.md:
- **Colors:** #121212 (press ink) / #ffffff (paper white) / #f1f1f1 (newsprint) / #e1e1e1 (foil gray) / #c5c5c5 (mute gray)
- **Type:** Helvetica Neue / JetBrains Mono (for labels) / Rock Salt (annotations)
- **Grid:** 1440px max-width, 144px horizontal padding desktop
- **Images:** 288px border radius on hero images
```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
## Running Locally
```bash
npm install
npm run dev
```
See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
## Building
```bash
npm run build
npm run preview
```
## Deployment
Push to `main` branch — Vercel auto-deploys. Manual deploy:
```bash
npx vercel --prod
```
## Continuing Development
To add a new project:
1. Add an entry to `src/data/projects.ts` following the `Project` interface
2. Add images to `public/images/`
3. The route `/project/:slug` will automatically handle it
To modify the design system:
1. Edit CSS custom properties in `src/index.css`
2. Animation variants are in `src/lib/animations.ts`
