// ============================================================
//  PROJECTS DATA — Sarth Narola
//  Organized by category matching portfolio sections
// ============================================================

// ─── Core Full-Stack & AI Projects ──────────────────────────
export const CORE_PROJECTS = [
  {
    id: "finchatbot",
    emoji: "🤖",
    title: "FinChatBot",
    subtitle: "AI Financial Document Analysis Platform",
    techStack: [
      { label: "React", color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
      { label: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.12)" },
      { label: "Python", color: "#3776AB", bg: "rgba(55,118,171,0.12)" },
      { label: "FastAPI", color: "#009688", bg: "rgba(0,150,136,0.12)" },
      { label: "MongoDB", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
    ],
    features: [
      { icon: "📎", text: "RAG pipeline with LangChain + FAISS" },
      { icon: "🧠", text: "Dual AI: Groq + Google Gemini" },
      { icon: "⚡", text: "Real-time WebSocket chat" },
      { icon: "📁", text: "Multi-modal: PDF, Excel, CSV analysis" },
    ],
    githubUrl: "https://github.com/Sarth00718",
    liveUrl: "https://financial-chabot.vercel.app/",
  },
  {
    id: "expense-tracker",
    emoji: "💰",
    title: "Smart Expense Tracker",
    subtitle: "AI-Powered Financial Management",
    techStack: [
      { label: "MongoDB", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
      { label: "Express", color: "#94a3b8", bg: "rgba(148,163,184,0.12)" },
      { label: "React", color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
      { label: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.12)" },
    ],
    features: [
      { icon: "🤖", text: "AI conversational finance bot" },
      { icon: "🧾", text: "OCR receipt scanning" },
      { icon: "📊", text: "Spending analytics & health scoring" },
      { icon: "🌐", text: "Deployed on Vercel" },
    ],
    githubUrl: "https://github.com/Sarth00718",
    liveUrl: "https://smart-expense-tracker-rho-eight.vercel.app/",
  },
  {
    id: "vastra",
    emoji: "👗",
    title: "Vastra",
    subtitle: "MERN E-Commerce Platform",
    techStack: [
      { label: "React", color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
      { label: "Firebase", color: "#FFCA28", bg: "rgba(255,202,40,0.12)" },
      { label: "Razorpay", color: "#3395FF", bg: "rgba(51,149,255,0.12)" },
      { label: "Render", color: "#46E3B7", bg: "rgba(70,227,183,0.12)" },
    ],
    features: [
      { icon: "💳", text: "Razorpay payment integration" },
      { icon: "🔐", text: "Firebase authentication" },
      { icon: "📋", text: "Admin dashboard for management" },
      { icon: "🚀", text: "Deployed on Render" },
    ],
    githubUrl: "https://github.com/Sarth00718",
    liveUrl: "https://vastra-cloth-shop-frontend.onrender.com",
  },
  {
    id: "chat-app",
    emoji: "💬",
    title: "Real-Time Chat App",
    subtitle: "MERN WebSocket Messaging",
    techStack: [
      { label: "Socket.io", color: "#25c2a0", bg: "rgba(37,194,160,0.12)" },
      { label: "Redux", color: "#764ABC", bg: "rgba(118,74,188,0.12)" },
      { label: "JWT", color: "#d63aff", bg: "rgba(214,58,255,0.12)" },
      { label: "Atlas", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
    ],
    features: [
      { icon: "💬", text: "Real-time messaging with Socket.io" },
      { icon: "📦", text: "State via Redux Toolkit" },
      { icon: "🔑", text: "Secure JWT authentication" },
      { icon: "☁️", text: "Cloud-hosted on MongoDB Atlas" },
    ],
    githubUrl: "https://github.com/Sarth00718",
    liveUrl:
      "https://vercel.com/sarths-projects-b8db4d8c/real-time-chat-application",
  },
];

// ─── Hackathon & Innovation Projects ────────────────────────
export const HACKATHON_PROJECTS = [
  {
    id: "smartbite",
    emoji: "🍽️",
    title: "SmartBite — AI-Powered Meal Planner & Nutrition Assistant",
    subtitle:
      "Built for Mind Sprint 48-Hour International Hackathon (IronXman, Unstop)",
    isLarge: true,
    features: [
      {
        icon: "🤖",
        label: "AI Recommendations",
        description: "Personalized meal suggestions using ML models",
      },
      {
        icon: "📊",
        label: "Nutrition Analysis",
        description: "ML-based macro tracking & nutrition dashboard",
      },
      {
        icon: "📅",
        label: "Weekly Optimization",
        description: "Constraint logic programming for meal planning",
      },
      {
        icon: "💬",
        label: "AI Chat Assistant",
        description: "Groq AI-powered nutrition advisor",
      },
      {
        icon: "🔬",
        label: "K-Means Clustering",
        description: "Meal diversity optimization algorithm",
      },
      {
        icon: "🛒",
        label: "Smart Grocery Lists",
        description: "Automated & budget-aware list generation",
      },
      {
        icon: "🌗",
        label: "Dark/Light Mode",
        description: "Responsive UI with PWA-ready architecture",
      },
    ],
    githubUrl: "https://github.com/Sarth00718",
  },
  {
    id: "fleetflow",
    emoji: "🚛",
    title: "FleetFlow",
    subtitle: "Fleet & Logistics Management System",
    tagline: "Built during a competitive development sprint",
    features: [
      { icon: "🔴", text: "PostgreSQL-based relational backend" },
      { icon: "🔐", text: "RBAC multi-level permissions" },
      { icon: "📍", text: "Real-time vehicle & trip tracking" },
      { icon: "📈", text: "Financial analytics (₹ currency)" },
    ],
    githubUrl: "https://github.com/Sarth00718",
    liveUrl: "https://fleet-flow-amber.vercel.app/",
  },
  {
    id: "exesman",
    emoji: "💼",
    title: "Exe$Man",
    subtitle: "Multi-Level Expense Management",
    tagline: "Enterprise-style financial workflow",
    features: [
      { icon: "🧾", text: "OCR receipt scanning" },
      { icon: "✅", text: "Hierarchical approval workflows" },
      { icon: "🔔", text: "Real-time notifications" },
      { icon: "📊", text: "Multi-level financial reporting" },
    ],
    githubUrl: "https://github.com/Sarth00718",
  },
];

// ─── Machine Learning Projects ──────────────────────────────
export const ML_PROJECTS = [
  {
    id: "wine-quality",
    emoji: "🍷",
    title: "Wine Quality Prediction",
    subtitle: "14 ML Models Compared",
    techTags: ["XGBoost", "LightGBM", "CatBoost"],
    metric: "~92–94% Accuracy",
    metricIcon: "📊",
    githubUrl: "https://github.com/Sarth00718",
  },
  {
    id: "heart-attack",
    emoji: "❤️",
    title: "Heart Attack Prediction",
    subtitle: "Clinical Risk Classification",
    techTags: ["KNN Classifier"],
    metric: "Statistical Preprocessing",
    metricIcon: "📊",
    githubUrl: "https://github.com/Sarth00718",
  },
  {
    id: "superstore",
    emoji: "🌍",
    title: "Global Superstore Analytics",
    subtitle: "51K+ Dataset Analysis",
    techTags: ["Decision Tree", "Regression", "Clustering"],
    metric: "84.89% Accuracy + Tableau",
    metricIcon: "📊",
    githubUrl: "https://github.com/Sarth00718",
  },
];

// ─── DSA & Core Projects ────────────────────────────────────
export const DSA_PROJECTS = [
  {
    icon: "📂",
    title: "Greedy Algorithm Visualizer",
    techStack: "JavaScript",
    description: "Interactive step-by-step algorithm visualization",
    liveUrl: "https://greedy-algorithm-stimulation-hbgc.vercel.app/",
  },
  {
    icon: "📂",
    title: "Torrent Power Billing System",
    techStack: "C++",
    description: "Utility billing with automated calculations",
  },
  {
    icon: "📂",
    title: "Library Management System",
    techStack: "Java · OOP · File I/O",
    description: "Complete CRUD with persistent file storage",
  },
];
