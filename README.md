# SCAPE by md

> **Frontend** repository for **SCAPE by md**, a hybrid full‑stack e‑commerce service that prints, frames, and delivers beautiful, sentimental decoration pieces. 

---

## Table of Contents

- [Features](#features)  
- [Demo / Screenshots](#demo--screenshots)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Development](#development)  
  - [Building for Production](#building-for-production)  
- [Project Structure](#project-structure)  
- [Linting & Testing](#linting--testing) 
- [Deployment](#deployment)  
- [Contact](#contact)

---

## Features

- A responsive, performant frontend powering a hybrid e‑commerce experience.  
- Built using modern tools and frameworks: TypeScript, Vite, and CSS.
- Modular, scalable architecture—designed for easy integration with backend APIs and future enhancements.

---

## Demo / Screenshots

<img width="768" height="512" alt="Product Image" src="./src/assets/product-image-straight.png" />


<img width="768" height="512" alt="Product Image 2" src="./src/assets/product-image-angle.png" />

---

## Tech Stack

- **Language:** TypeScript 
- **Styling:** Tailwind CSS  
- **Bundler / Dev Server:** Vite  
- **Linting / Formatting:** ESLint / Prettier (configured via `eslint.config.js`)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v16+)  
- [npm](https://www.npmjs.com) (v8+) or [Yarn](https://yarnpkg.com)

### Installation

```bash
git clone https://github.com/gitXite/scape-frontend.git
cd scape-frontend
npm install
# or yarn install
```

### Development
```bash
npm run dev
# or yarn dev
```

### Build
```bash
npm run build
```

## Project Structure
```plaintext
/
├── public/              # Static assets (e.g., favicons)
├── src/                 # Main application source
|   ├── assets/
│   ├── components/
│   ├── pages/
|   ├── context/
|   ├── lib/
|   ├── app.tsx
|   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── components.json      # Component inventory/config 
├── eslint.config.js     # Linting rules
├── tsconfig*.json       # TypeScript configuration files
├── vite.config.ts       # Vite build/dev config
├── package.json         # Dependencies & scripts
└── README.md
```

## Linting & Testing

### Linting
ESLint
```bash
npm run lint
# or yarn lint
```

### Formatting:
Should be enforced via Prettier (auto-run on save or commit).

## Deployment
You can deploy the built dist/ folder to hosting platforms like Netlify, Vercel, GitHub Pages, or any static-site host.

## Contact
Developed by gitXite; reach out for inquiries or collaboration!
