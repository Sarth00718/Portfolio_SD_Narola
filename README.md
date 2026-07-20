<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=700&size=32&pause=1000&color=2563EB&center=true&vCenter=true&width=600&lines=Sarth+Narola+%E2%80%94+Portfolio;MERN+Stack+Developer;AI+%26+ML+Engineer;Pre-Final+Year+%40+Nirma+University" alt="Typing SVG" />

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
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6B35?style=flat-square&logoColor=white)

</div>

---

## 📖 About Section

A **modern, production-ready personal portfolio** built from scratch to showcase projects, skills, achievements, and professional journey. Designed with a **mobile-first philosophy**, **dark/light mode** theming, fluid responsive typography using `clamp()`, glassmorphism UI, and smooth micro-animations throughout — delivering a premium, interactive experience on every device.

> **Pre-final year B.Tech CSE student** at Nirma University (2023–2027) · CGPA: 9.11  
> Specializing in **MERN stack development**, **AI-integrated systems**, and **full-stack product engineering**

---

## ✨ Key Features

| Category               | Details                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| 🎨 **Design**          | Dark/light mode toggle · Glassmorphism cards · Animated gradients · 3D particle canvas background · Glow effects |
| 📱 **Responsive**      | Mobile-first layout · `clamp()` fluid typography · Adaptive grids (1→2→3 col) · Touch-optimized interactions   |
| ⚡ **Performance**     | Vite 7 build · Code splitting · Lazy loading · Scroll-triggered animations via IntersectionObserver          |
| 🧩 **Portfolio Sections** | Hero · About · Skills · Projects · Hackathons · ML Projects · DSA · Achievements · Certificates · Competitive Programming · Contact |
| 📬 **Contact Form**    | EmailJS integration · Real-time validation · Toast notifications · Anti-spam measures                         |
| 🔠 **Typography**      | Inter (body) · Outfit (headings) · JetBrains Mono (code/handles)                                              |
| ♿ **Accessibility**   | ARIA labels · Semantic HTML5 · Keyboard navigable · Focus-visible states · Screen reader optimized            |
| 🎭 **Animations**      | Framer Motion page transitions · Scroll reveals · Hover effects · Shimmer effects · Custom keyframes          |

---

## 🛠️ Tech Stack

### Frontend Core

| Technology        | Version | Purpose                           |
| ----------------- | ------- | --------------------------------- |
| **React**         | 19.2.0  | UI library with latest features   |
| **Vite**          | 7.3.1   | Lightning-fast build tool         |
| **Tailwind CSS**  | 3.4.19  | Utility-first CSS framework       |
| **Framer Motion** | 12.34.3 | Production-ready animations       |

### Key Libraries & Tools

| Library                         | Version | Purpose                                |
| ------------------------------- | ------- | -------------------------------------- |
| `@react-three/fiber`            | 9.5.0   | Three.js React renderer for 3D canvas  |
| `@react-three/drei`             | 10.7.7  | Useful helpers for R3F                 |
| `framer-motion`                 | 12.34.3 | Page & scroll animations               |
| `react-intersection-observer`   | 10.0.3  | Scroll-triggered section reveals       |
| `react-type-animation`          | 3.2.0   | Hero typewriter effect                 |
| `react-hot-toast`               | 2.6.0   | Beautiful toast notifications          |
| `react-countup`                 | 6.5.3   | Animated stat counters                 |
| `lucide-react` + `react-icons`  | Latest  | Comprehensive icon libraries           |
| `@emailjs/browser`              | 4.4.1   | Serverless contact form                |
| `react-router-dom`              | 7.13.1  | Client-side routing                    |
| `recharts`                      | 3.7.0   | Data visualization charts              |
| `react-helmet-async`            | 2.0.5   | SEO meta tags management               |
| `zustand`                       | 5.0.11  | Lightweight state management           |
| `axios`                         | 1.13.6  | HTTP client for API calls              |

### Development Tools

- **ESLint** — Code linting with React-specific rules
- **Autoprefixer** — Automatic vendor prefixing
- **PostCSS** — CSS transformations
- **@tailwindcss/typography** — Beautiful typographic defaults

---

## 🗂️ Project Structure

```
Portfolio_SD_Narola/
├── client/                                 # Frontend React application
│   ├── public/                             # Static assets
│   │   ├── favicon.svg                     # Site favicon
│   │   ├── manifest.json                   # PWA manifest
│   │   ├── resume.pdf                      # Downloadable resume
│   │   └── *.pdf                           # Project documents
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/                     # Reusable UI components
│   │   │   │   ├── BackToTop.jsx           # Scroll-to-top button
│   │   │   │   ├── NeuralCanvas.jsx        # 3D particle background
│   │   │   │   ├── ScrollProgress.jsx      # Reading progress bar
│   │   │   │   └── SEOMeta.jsx             # Dynamic meta tags
│   │   │   │
│   │   │   ├── layout/                     # Layout components
│   │   │   │   ├── Navbar.jsx              # Navigation with theme toggle
│   │   │   │   └── Footer.jsx              # Footer with social links
│   │   │   │
│   │   │   └── sections/                   # Page sections
│   │   │       ├── HeroSection.jsx         # Landing hero with animations
│   │   │       ├── AboutSection.jsx        # Bio and education
│   │   │       ├── SkillsSection.jsx       # Tech stack showcase
│   │   │       ├── ProjectsSection.jsx     # Featured MERN projects
│   │   │       ├── HackathonSection.jsx    # Hackathon achievements
│   │   │       ├── MLProjectsSection.jsx   # Machine learning projects
│   │   │       ├── DSAProjectsSection.jsx  # Data structures & algorithms
│   │   │       ├── AchievementsSection.jsx # Awards and recognitions
│   │   │       ├── CertificatesSection.jsx # Certifications gallery
│   │   │       ├── CompetitiveProgrammingSection.jsx  # CP profiles
│   │   │       └── ContactSection.jsx      # Contact form + info
│   │   │
│   │   ├── context/
│   │   │   └── ThemeContext.jsx            # Dark/light mode state
│   │   │
│   │   ├── data/                           # Static data files
│   │   │   ├── projects.js                 # Project details
│   │   │   ├── achievements.js             # Achievements data
│   │   │   ├── certificates.js             # Certifications
│   │   │   └── skills.js                   # Tech skills
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx                    # Main page component
│   │   │
│   │   ├── router/
│   │   │   └── AppRouter.jsx               # React Router setup
│   │   │
│   │   ├── App.jsx                         # Root component
│   │   ├── main.jsx                        # Entry point
│   │   └── index.css                       # Global styles + CSS variables
│   │
│   ├── eslint.config.js                    # ESLint configuration
│   ├── postcss.config.js                   # PostCSS configuration
│   ├── tailwind.config.js                  # Tailwind customization
│   ├── vite.config.js                      # Vite configuration
│   └── package.json                        # Dependencies
│
├── server/                                 # Backend (placeholder for future)
├── manifest.json                           # Root manifest
└── README.md                               # This file
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** ≥ 18.x ([Download](https://nodejs.org/))
- **npm** ≥ 9.x (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/Sarth00718/Portfolio_SD_Narola.git
cd Portfolio_SD_Narola

# 2. Navigate to client directory
cd client

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **http://localhost:3000** with hot module replacement (HMR) enabled.

### Build for Production

```bash
# Inside the client/ directory

# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The production build will be generated in the `client/dist` directory, optimized and minified for deployment.

---

## ⚙️ Configuration

### Environment Variables

For EmailJS contact form integration, create a `.env` file in the `client/` directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**To set up EmailJS:**

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

> **⚠️ Important:** Never commit the `.env` file to version control. Add it to `.gitignore`.

### Path Aliases

Configured in `vite.config.js` for clean, absolute imports:

```javascript
@             →  src/
@components   →  src/components
@context      →  src/context
@data         →  src/data
@pages        →  src/pages
@hooks        →  src/hooks
@utils        →  src/utils
@services     →  src/services
@assets       →  src/assets
```

**Usage example:**

```javascript
// Instead of: import { skills } from '../../../data/skills'
import { skills } from '@data/skills'

// Instead of: import Navbar from '../../components/layout/Navbar'
import Navbar from '@components/layout/Navbar'
```

### Vite Configuration Highlights

- **Code Splitting:** Separates vendor, animation, and chart libraries for optimal loading
- **Chunk Size Limit:** Set to 1000kb to prevent warnings
- **Dev Server:** Port 3000 with API proxy to `http://localhost:5000`
- **Build Optimization:** Rollup with manual chunk splitting

---

## 📱 Portfolio Sections

### Hero Section
- Animated gradient background with 3D particle effects
- Typewriter animation cycling through roles
- Stat counters (projects, CGPA, achievements)
- Social media quick links
- Smooth scroll-down indicator

### About Section
- Professional bio and background
- Education details (Nirma University)
- Current focus areas and interests
- Download resume button
- Contact information cards

### Skills Section
Categorized skill cards with icons and proficiency indicators:
- **Frontend:** React, Next.js, Tailwind CSS, Redux
- **Backend:** Node.js, Express, MongoDB, PostgreSQL
- **AI/ML:** TensorFlow, PyTorch, Scikit-learn, NLP
- **Cloud & DevOps:** AWS, Docker, Git, CI/CD
- **Tools:** VS Code, Postman, Figma, Jira

### Projects Section
Featured full-stack projects with:
- **FinChatBot** — AI-powered financial advisor with RAG pipeline
- **Smart Expense Tracker** — MERN stack budget management
- **TaskFlow** — Team collaboration platform
- Live demo links, GitHub repos, tech stack tags
- Expandable feature lists with hover effects

### Hackathons Section
Hackathon projects with detailed feature tables:
- **SmartBite** — 48-hour hackathon winner
- **FleetFlow** — Logistics optimization platform
- **Exe$Man** — Expense management solution
- Problem statements and solutions
- Tech stack and team collaboration details

### Machine Learning Projects
- **Federated Learning System** — Privacy-preserving ML
- **Disease Prediction Models** — Healthcare AI
- **Sentiment Analysis Engine** — NLP application
- Dataset information and model metrics

### DSA Projects
- Algorithm visualizers (sorting, pathfinding)
- Data structure implementations
- Complexity analysis and performance metrics

### Achievements & Awards
- Amazon ML Summer School 2025 selection
- Hackathon victories and recognitions
- Academic honors and scholarships
- Timeline with animated cards

### Certificates Section
- Filterable certificate gallery
- PDF viewer modal for certificate details
- Categories: Web Dev, AI/ML, Cloud, DSA
- Issuer logos and verification links

### Competitive Programming
Profile cards with real-time stats:
- **LeetCode:** Problem-solving streak and contest rating
- **Codeforces:** Rating and division
- **CodeChef:** Stars and rankings
- Interactive charts and progress visualization

### Contact Section
- EmailJS-powered contact form
- Real-time field validation
- Success/error toast notifications
- Social media and location info cards
- Professional email and LinkedIn links

---

## 🎨 Design System

### Color Palette

The portfolio uses a custom color system defined in `tailwind.config.js`:

#### Navy Shades (Dark Mode Base)
```css
navy-950: #050810  /* Darkest background */
navy-900: #0c1120  /* Primary background */
navy-800: #111827  /* Card background */
navy-700: #1a2744  /* Elevated surface */
navy-600: #253659  /* Borders */
```

#### Brand Colors
```css
indigo:  #6366f1   /* Primary accent */
violet:  #8b5cf6   /* Secondary accent */
cyan:    #22d3ee   /* Highlight */
blue:    #3b82f6   /* Interactive elements */
emerald: #10b981   /* Success states */
```

#### Glassmorphism
```css
glass:        rgba(255, 255, 255, 0.04)  /* Card background */
glass-border: rgba(255, 255, 255, 0.07)  /* Card borders */
```

### Typography

#### Font Families
- **Inter** — Body text and paragraphs (system fallback: sans-serif)
- **Outfit** — Headings and display text
- **JetBrains Mono** — Code snippets and handles

#### Fluid Typography (CSS clamp)
```css
Hero name:        clamp(2.5rem, 7vw, 5rem)     /* 40px → 80px */
Section titles:   clamp(1.75rem, 5vw, 3.5rem)  /* 28px → 56px */
Subsection:       clamp(1.25rem, 3vw, 2rem)    /* 20px → 32px */
Body text:        clamp(0.875rem, 2vw, 1rem)   /* 14px → 16px */
Small text:       clamp(0.75rem, 1.5vw, 0.875rem) /* 12px → 14px */
```

### Animations

#### Custom Keyframes
```css
float:         Gentle up-down motion (6s)
gradient-x:    Animated gradient shift (8s)
glow-pulse:    Pulsating glow effect (2.5s)
shimmer:       Horizontal shimmer effect (2.5s)
```

#### Animation Classes
- `animate-float` — Floating cards and icons
- `animate-pulse-slow` — Slow pulsing elements
- `animate-gradient-x` — Animated gradients
- `animate-spin-slow` — Slow rotation (8s)
- `animate-glow-pulse` — Glowing accent effects
- `animate-shimmer` — Loading shimmer

### Shadow System

```css
glow:        0 0 24px rgba(99, 102, 241, 0.35)   /* Accent glow */
glow-lg:     0 0 48px rgba(99, 102, 241, 0.45)   /* Strong glow */
glow-cyan:   0 0 24px rgba(34, 211, 238, 0.35)   /* Cyan glow */
glass:       0 8px 40px rgba(0, 0, 0, 0.5)       /* Glassmorphism depth */
card:        0 4px 28px rgba(0, 0, 0, 0.35)      /* Card elevation */
card-light:  0 4px 28px rgba(99, 102, 241, 0.08) /* Light mode cards */
```

### Background Gradients

```css
hero-gradient:  linear-gradient(160deg, #050810 0%, #0c1120 50%, #050810 100%)
brand-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)
card-gradient:  linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(34,211,238,0.04) 100%)
glow-gradient:  radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)
```

### Theme Toggle

The portfolio supports **dark mode** (default) and **light mode** with smooth transitions:

- Theme state managed via React Context (`ThemeContext.jsx`)
- Persisted in `localStorage`
- Smooth color transitions (300ms)
- All components theme-aware
- System preference detection on first load

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start Vite dev server at localhost:3000
                     # Hot Module Replacement (HMR) enabled

# Production
npm run build        # Build optimized production bundle → /dist
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint on all source files
                     # Checks React hooks rules and best practices

# Force clean install (if needed)
npm run preinstall   # Force resolutions for dependency conflicts
```

---

## 🌐 Deployment

The portfolio is optimized for deployment on modern hosting platforms:

### Vercel (Recommended) ⚡

**Why Vercel?**
- Zero-configuration deployment
- Automatic builds on Git push
- Edge network for global performance
- Free SSL certificates
- Perfect for Vite + React apps

**Deployment Steps:**

```bash
# Option 1: Using Vercel CLI
npm i -g vercel
cd Portfolio_SD_Narola
vercel --cwd client

# Option 2: Via Vercel Dashboard
```

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure build settings:
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Add environment variables (EmailJS credentials)
6. Click **"Deploy"**

Your site will be live at `https://your-project.vercel.app`

### Netlify

**Netlify Configuration:**

Create `netlify.toml` in the project root:

```toml
[build]
  base = "client"
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Deployment:**
1. Connect GitHub repo to [netlify.com](https://netlify.com)
2. Netlify auto-detects settings from `netlify.toml`
3. Add environment variables in Netlify dashboard
4. Deploy!

### GitHub Pages

**Configuration:**

1. Update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/Portfolio_SD_Narola/',  // Replace with your repo name
  // ... rest of config
})
```

2. Add to `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:

```bash
npm install -D gh-pages
npm run deploy
```

### Other Platforms

| Platform       | Setup Difficulty | Notes                                     |
| -------------- | ---------------- | ----------------------------------------- |
| **Railway**    | Easy             | Auto-detects Vite, free tier available    |
| **Render**     | Easy             | Static site hosting, custom domains       |
| **Cloudflare** | Medium           | Cloudflare Pages with edge optimization   |
| **AWS S3**     | Hard             | S3 + CloudFront for enterprise deployment |

---

## 🔧 Performance Optimizations

### Build Optimizations

1. **Code Splitting:**
   - Vendor chunk (React, React-DOM, React Router)
   - Animation chunk (Framer Motion)
   - Chart chunk (Recharts)
   - Reduces initial bundle size

2. **Asset Optimization:**
   - Image compression and lazy loading
   - SVG optimization
   - Font subsetting (only used characters)

3. **Tree Shaking:**
   - Removes unused code automatically
   - Named imports from libraries

4. **Minification:**
   - JavaScript minification via Terser
   - CSS minification via cssnano
   - HTML minification

### Runtime Optimizations

1. **Lazy Loading:**
   - Intersection Observer for scroll-triggered animations
   - Reduces initial render cost

2. **Memoization:**
   - React.memo for expensive components
   - useMemo for computed values
   - useCallback for stable function references

3. **Virtual Scrolling:**
   - Efficient rendering of long lists
   - Only visible items in DOM

4. **Debouncing:**
   - Form inputs debounced for validation
   - Scroll events throttled

### Lighthouse Scores (Target)

```
Performance:   95+
Accessibility: 100
Best Practices: 100
SEO:           100
```

---

## 🛡️ Security Best Practices

### Implemented Security Measures

- **Environment Variables:** Sensitive data (EmailJS keys) in `.env`
- **HTTPS Only:** All external links use secure protocols
- **CSP Ready:** Content Security Policy compatible
- **XSS Protection:** React's built-in sanitization
- **Dependency Audits:** Regular `npm audit` checks
- **No Hardcoded Secrets:** All credentials externalized

### Pre-Deployment Checklist

- [ ] Move EmailJS credentials to `.env`
- [ ] Add `.env` to `.gitignore`
- [ ] Run `npm audit fix`
- [ ] Test all form validations
- [ ] Verify external links open in new tabs with `rel="noopener noreferrer"`
- [ ] Check console for errors/warnings
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Verify dark/light mode transitions
- [ ] Run Lighthouse audit

---

## 📚 Key Dependencies Explained

| Package                  | Why It's Used                                                  |
| ------------------------ | -------------------------------------------------------------- |
| `framer-motion`          | Smooth, performant animations without CSS complexity           |
| `react-intersection-observer` | Trigger animations when sections enter viewport          |
| `react-hot-toast`        | Better UX than native alerts, customizable                     |
| `@emailjs/browser`       | Serverless contact forms without backend                       |
| `lucide-react`           | Modern, consistent icon set with tree-shaking                  |
| `react-countup`          | Animated number counters for stats                             |
| `@react-three/fiber`     | Declarative Three.js in React for 3D backgrounds               |
| `react-helmet-async`     | Dynamic meta tags for SEO                                      |
| `zustand`                | Lightweight alternative to Redux for state                     |
| `recharts`               | Composable chart library built for React                       |

---

## 🤔 FAQ

### How do I customize the content?

All static data is in the `client/src/data/` directory:
- **projects.js** — Add/edit projects
- **skills.js** — Modify tech skills
- **achievements.js** — Update achievements
- **certificates.js** — Add certificates

### How do I change colors?

Edit `client/tailwind.config.js` in the `theme.extend.colors` section. The color system uses CSS variables for easy theming.

### How do I add new sections?

1. Create a new component in `client/src/components/sections/`
2. Import and add it to `client/src/pages/Home.jsx`
3. Update navigation in `client/src/components/layout/Navbar.jsx`

### EmailJS not working?

1. Verify your `.env` file has correct credentials
2. Check EmailJS dashboard for service status
3. Ensure email template variables match form fields
4. Check browser console for error messages

### Build failing?

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# If issues persist, try with legacy peer deps
npm install --legacy-peer-deps
```

### How to update dependencies?

```bash
# Check for outdated packages
npm outdated

# Update to latest versions (carefully)
npm update

# Or update specific package
npm install package-name@latest
```

---

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Test changes thoroughly before submitting
- Update documentation if adding new features
- Ensure all animations are performant (60fps)
- Maintain mobile responsiveness

---

## 🐛 Known Issues & Roadmap

### Known Issues

- [ ] Three.js canvas may lag on low-end mobile devices
- [ ] EmailJS rate limiting on high traffic (consider backend alternative)
- [ ] Certificate PDF modal needs accessibility improvements

### Future Enhancements

- [ ] **Blog Section** — Share technical articles and insights
- [ ] **Backend API** — Node.js + Express for contact form and analytics
- [ ] **Database Integration** — MongoDB for dynamic content management
- [ ] **Admin Dashboard** — Edit content without code changes
- [ ] **Analytics Dashboard** — Track visitor metrics and engagement
- [ ] **Multi-language Support** — i18n for Hindi and Gujarati
- [ ] **Resume Builder** — Generate PDF resume from portfolio data
- [ ] **Testimonials Section** — Feedback from colleagues and mentors
- [ ] **Interactive Timeline** — Visual journey through projects and education
- [ ] **Dark Mode Variants** — Multiple theme options (cyberpunk, minimal, etc.)
- [ ] **PWA Features** — Offline support, install prompt
- [ ] **Micro-interactions** — Enhanced hover states and click feedback

---

## 📄 License

This project is **MIT Licensed** — feel free to use it as inspiration for your own portfolio.

```
MIT License

Copyright (c) 2025 Sarth Narola

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 🙏 Acknowledgments

- **React Team** — For the incredible React 19 framework
- **Vite** — Blazing fast build tool that makes development a joy
- **Tailwind Labs** — For the utility-first CSS framework
- **Framer** — For the powerful animation library
- **Lucide Icons** — Beautiful, consistent icon set
- **EmailJS** — Serverless email solution
- **Three.js Community** — For 3D graphics capabilities
- **Open Source Community** — For all the amazing tools and libraries

---

## 📞 Contact & Connect

<div align="center">

### Sarth Narola

**Pre-Final Year B.Tech CSE Student**  
**Nirma University, Ahmedabad (2023-2027)**  
**CGPA: 9.11 | Specialization: MERN Stack & AI/ML**

<br/>

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-2563EB?style=for-the-badge&logoColor=white)](https://sarth-narola.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sarth-narola-223002323)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sarth00718)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sarthnarola007@gmail.com)

<br/>

| 🌍 Location | 📱 Availability | 💼 Open to |
|------------|----------------|-----------|
| Surat, Gujarat, India | Full-time opportunities from 2027 | Internships · Freelance Projects · Collaborations |

<br/>

### 🎯 Looking For

- **Full-Stack Development** internships and roles
- **AI/ML Engineering** opportunities
- **Open Source** collaboration
- **Hackathon** team invitations
- **Freelance** projects and consulting

</div>

---

<div align="center">

## 💙 Show Your Support

If you find this portfolio helpful or inspiring, please consider:

⭐ **Starring this repository**  
🍴 **Forking for your own portfolio**  
🐛 **Reporting issues or suggesting features**  
📢 **Sharing with friends and colleagues**

<br/>

**Built with ❤️ and ☕ using React · Vite · Tailwind CSS · Framer Motion**

_Last Updated: January 2025_

</div>

---

<div align="center">

**[↑ Back to Top](#)**

</div>
