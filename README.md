# Assets WebApp

A collection of reusable, framework-agnostic UI kits built for modern web projects. This repository contains ready-to-use HTML/CSS component systems that can be dropped into any app without a build step or framework dependency.

Repository: https://github.com/dulch29/Assets-WebApp

---

## Overview

Assets WebApp is designed for developers, students, and designers who want clean, modular UI patterns without the overhead of a full frontend framework or package installation. Each kit is built with vanilla HTML and CSS and is organized for easy copy-and-paste use.

### Highlights

- Framework-agnostic design
- Zero dependency setup
- Responsive layouts
- Copy-paste friendly components
- Clean naming conventions and reusable styles
- Documentation included per kit

---

## Flagship Application: HandGun Asset Store (`/asset-store`)

**HandGun** is a production-grade digital asset marketplace demo for web and game development (3D models, environments, web UI kits, shaders, audio, and frameworks). It serves as the live real-world orchestration of all 10 UI kits working together seamlessly:

- **Signature `#FF6000` Design**: High-contrast, clean modern canvas with curated typography and zero emoji clutter.
- **Glassmorphic Quick Preview**: Floating modal inspection powered by `kits/glassmorphism` and `kits/modal-overlay-kit`.
- **Layout Mode Switcher**: Instant switching between Grid and List view modes powered by `kits/layout-kit`.
- **Pulse Deal Badges & Micro-animations**: Dynamic discount badges and toast feedback from `kits/animation-kit`.
- **Cart & Wishlist Engine**: Working slide-in cart drawer and real-time state management.
- **Firebase Auth & Vercel Ready**: Full Google & Email authentication support with local fallback.

Launch locally at `asset-store/index.html` or explore via the root showcase portal.

---

## Included Kits

This project includes 10 UI kit collections:

1. Glassmorphism
2. Button System
3. Form UI Kit
4. Card System
5. Navigation Kit
6. Modal & Overlay Kit
7. Layout Kit
8. Data Display Kit
9. Animation Kit
10. Utility Kit

Each kit lives under the `kits/` folder and includes component files, demo examples, and setup documentation.

---

## Project Structure

```text
Assets WebApp/
├── README.md
├── KITS-SUMMARY.md
├── STRUCTURE.md
├── index.html
├── kits/
│   ├── animation-kit/
│   ├── button-system/
│   ├── card-system/
│   ├── data-display-kit/
│   ├── form-ui-kit/
│   ├── glassmorphism/
│   ├── layout-kit/
│   ├── modal-overlay-kit/
│   ├── navigation-kit/
│   └── utility-kit/
└── .gitignore
```

---

## Quick Start

### Open the project locally

```bash
git clone https://github.com/dulch29/Assets-WebApp.git
cd Assets-WebApp
```

Then open any kit folder in a browser, or use a local preview extension such as Live Server in VS Code.

### Example

```bash
cd kits/button-system
```

Open `index.html` or browse the component files in `components/`.

---

## Kit Usage

Most kits follow the same pattern:

```text
kits/[kit-name]/
├── README.md
├── index.html
├── components/
├── demos/
├── docs/
└── assets/
```

You can:

- open the demo pages for quick inspection
- copy CSS from the `components/` folder
- adapt the styles to your own project
- combine multiple kits into a custom UI system

---

## Why This Repo Exists

This library aims to provide a fast, accessible way to build polished interfaces without repeatedly rewriting common patterns. It is useful for:

- learning modern UI composition
- prototyping interfaces
- building personal projects
- teaching front-end design fundamentals
- creating reusable design patterns across projects

---

## Contributing

Contributions are welcome. If you want to improve a kit, add new examples, or fix styles:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## License

This project is licensed under the MIT License.

See the individual kit folders for any component-specific licensing notes where applicable.

---

## Status

The repository is active and paired with GitHub:

https://github.com/dulch29/Assets-WebApp

Built for experimentation, learning, and reusable interface design.
