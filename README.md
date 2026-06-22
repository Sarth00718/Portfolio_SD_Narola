<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=700&size=32&pause=1000&color=2563EB&center=true&vCenter=true&width=600&lines=Sarth+Narola+%E2%80%94+Portfolio;MERN+Stack+Developer;AI+%26+ML+Engineer;PreFinal+Year+%40+Nirma+University" alt="Typing SVG" />

<br/>

[![Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-2563eb?style=for-the-badge&logoColor=white)](https://sarth-narola.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sarth-narola-223002323)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sarth00718)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sarthnarola007@gmail.com)

<br/>

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6B35?style=flat-square&logoColor=white)

</div>

---

## 📖 About

A **production-quality personal portfolio** built from scratch to showcase projects, skills, achievements, and academic background. Designed with a **mobile-first philosophy**, full **dark/light mode**, fluid responsive typography using `clamp()`, and smooth micro-animations throughout — delivering a premium, interactive experience on every device.

> **Pre-final year B.Tech CSE student** at Nirma University (2022–2027) · CGPA: 9.11  
> Specializing in **MERN stack**, **AI-integrated systems**, and **full-stack product development**

---

## ✨ Features

| Category             | Details                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| 🎨 **Design**        | Dark/light mode toggle, glassmorphism cards, animated gradients, particle canvas background           |
| 📱 **Responsive**    | Mobile-first layout, `clamp()` fluid typography, adaptive grids (1→2→3 col)                           |
| ⚡ **Performance**   | Vite 7 build, code splitting, lazy scroll-triggered animations via IntersectionObserver               |
| 🧩 **Sections**      | Hero · About · Skills · Projects · Hackathons · ML · DSA · Achievements · Certificates · CP · Contact |
| 📬 **Contact Form**  | EmailJS integration with real-time validation and toast notifications                                 |
| 🔠 **Typography**    | Inter (body) · Outfit (headings) · JetBrains Mono (code/handles)                                      |
| ♿ **Accessibility** | ARIA labels, semantic HTML5, keyboard navigable, focus-visible states                                 |

---

## 🛠️ Tech Stack

### Frontend Core

| Technology        | Version | Purpose                  |
| ----------------- | ------- | ------------------------ |
| **React**         | 19.x    | UI framework             |
| **Vite**          | 7.x     | Build tool & dev server  |
| **Tailwind CSS**  | 3.x     | Utility-first styling    |
| **Framer Motion** | 12.x    | Animations & transitions |

### Libraries

| Library                        | Purpose                          |
| ------------------------------ | -------------------------------- |
| `framer-motion`                | Page & scroll animations         |
| `react-intersection-observer`  | Scroll-triggered section reveals |
| `react-type-animation`         | Hero typewriter effect           |
| `react-hot-toast`              | Form success/error toasts        |
| `react-countup`                | Animated stat counters           |
| `lucide-react`                 | Icon set                         |
| `@emailjs/browser`             | Serverless contact form          |
| `react-router-dom`             | Client-side routing              |
| `recharts`                     | Data visualization               |
| `three` + `@react-three/fiber` | 3D canvas effects                |

---

## 🗂️ Project Structure

```
portfolio/
├── client/                         # React app (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/             # Navbar, Footer
│   │   │   └── sections/           # All page sections
│   │   │       ├── HeroSection.jsx
│   │   │       ├── AboutSection.jsx
│   │   │       ├── SkillsSection.jsx
│   │   │       ├── ProjectsSection.jsx
│   │   │       ├── HackathonSection.jsx
│   │   │       ├── MLProjectsSection.jsx
│   │   │       ├── DSAProjectsSection.jsx
│   │   │       ├── AchievementsSection.jsx
│   │   │       ├── CertificatesSection.jsx
│   │   │       ├── CompetitiveProgrammingSection.jsx
│   │   │       └── ContactSection.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx    # Dark/light mode provider
│   │   ├── data/                   # Static data files
│   │   │   ├── projects.js         # MERN, AI, DSA, ML projects
│   │   │   ├── achievements.js     # Achievements & CP profiles
│   │   │   ├── certificates.js     # Certifications data
│   │   │   └── skills.js           # Tech stack skills
│   │   ├── pages/                  # Route-level pages
│   │   ├── router/                 # React Router config
│   │   ├── App.jsx                 # Root with ThemeProvider
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles + CSS variables
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/Sarth00718/Portfolio_SD_Narola.git
cd Portfolio_SD_Narola

# 2. Install dependencies
cd client
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**

### Build for Production

```bash
npm run build       # Generates optimized bundle in /dist
npm run preview     # Preview the production build locally
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in `client/` for EmailJS integration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** EmailJS credentials are currently hardcoded for development. **Move them to `.env` before deploying to production.**

### Path Aliases

Configured in `vite.config.js` for clean imports:

```js
@components  →  src/components
@context     →  src/context
@data        →  src/data
@pages       →  src/pages
```

---

## 📱 Sections Overview

| Section          | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| **Hero**         | Name, typewriter role animation, social links, stat counters (10+ projects, 9.11 CGPA) |
| **About**        | Bio, education (Nirma University), tech stack, contact links                           |
| **Skills**       | Categorized tech skills with icons — Frontend, Backend, AI/ML, Cloud, Tools            |
| **Projects**     | Core MERN + AI projects: FinChatBot, Smart Expense Tracker, TaskFlow                   |
| **Hackathons**   | SmartBite (48-hr hackathon), FleetFlow, Exe$Man — with feature tables                  |
| **ML Projects**  | End-to-end ML: Federated Learning, Disease Prediction, Sentiment Analysis              |
| **DSA Projects** | Data structure visualizers and algorithm projects                                      |
| **Achievements** | Amazon ML Summer School 2025, hackathon wins, academic awards                          |
| **Certificates** | Filterable certificate gallery with PDF viewer modal                                   |
| **Competitive**  | LeetCode · Codeforces · CodeChef profiles with stats                                   |
| **Contact**      | EmailJS form + social info cards                                                       |

---

## 🎨 Design System

### Color Tokens (CSS Variables)

```css
/* Dark Mode (default) */
--bg-primary: #0a0f1e --bg-card: rgba(255, 255, 255, 0.04)
  --border-glass: rgba(255, 255, 255, 0.08) --text-primary: #f1f5f9
  --text-secondary: #94a3b8 /* Light Mode */ --bg-primary: #f8fafc
  --bg-card: rgba(255, 255, 255, 0.9) --border-glass: rgba(0, 0, 0, 0.08)
  --text-primary: #0f172a --text-secondary: #334155;
```

### Typography Scale

```css
/* Fluid responsive sizing using clamp() */
Section titles:   clamp(1.75rem, 5vw, 3.5rem)
Hero name:        clamp(2.5rem,  7vw, 5rem)
Body text:        clamp(0.875rem, 2vw, 1rem)
Minimum size:     0.75rem  (never goes below 12px)
```

---

## 📦 Scripts Reference

```bash
npm run dev        # Start Vite dev server (port 3000)
npm run build      # Production build → /dist
npm run preview    # Serve /dist locally
npm run lint       # Run ESLint
```

---

## 🌐 Deployment

The portfolio is optimized for deployment on:

| Platform         | Notes                                          |
| ---------------- | ---------------------------------------------- |
| **Vercel**       | Recommended — zero config, auto-deploy on push |
| **Netlify**      | Set publish dir to `client/dist`               |
| **GitHub Pages** | Configure `base` in `vite.config.js`           |

### Vercel Deployment

```bash
# From project root
vercel --cwd client
```

Or connect the repo to [vercel.com](https://vercel.com) and set:

- **Root Directory:** `client`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## 🤝 Connect

<div align="center">

| Platform     | Link                                                                     |
| ------------ | ------------------------------------------------------------------------ |
| 🌐 Portfolio | [sarth-narola.vercel.app](https://sarth-narola.vercel.app)               |
| 💼 LinkedIn  | [sarth-narola-223002323](https://linkedin.com/in/sarth-narola-223002323) |
| 🐙 GitHub    | [github.com/Sarth00718](https://github.com/Sarth00718)                   |
| 📧 Email     | sarthnarola007@gmail.com                                                 |
| 📍 Location  | Surat, Gujarat, India                                                    |

</div>

---

<div align="center">

**Built with ❤️ using React · Vite · Tailwind CSS · Framer Motion**

_Pre-final Year B.Tech CSE · Nirma University · 2022–2027_

⭐ **Star this repo if you find it helpful!**

</div>
