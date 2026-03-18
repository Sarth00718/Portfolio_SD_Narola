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
    subtitle: "Enterprise-Grade AI Financial Document Analysis Platform",
    techStack: [
      { label: "React 18", color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
      { label: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.12)" },
      { label: "Python", color: "#3776AB", bg: "rgba(55,118,171,0.12)" },
      { label: "FastAPI", color: "#009688", bg: "rgba(0,150,136,0.12)" },
      { label: "MongoDB", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
      { label: "LangChain", color: "#1C3C3C", bg: "rgba(28,60,60,0.12)" },
    ],
    features: [
      { icon: "🧠", text: "Advanced RAG pipeline with LangChain + FAISS vector store" },
      { icon: "🤝", text: "Dual AI engine: Groq LLM + Google Gemini for enhanced accuracy" },
      { icon: "⚡", text: "Real-time WebSocket communication for instant responses" },
      { icon: "📊", text: "Multi-format support: PDF, Excel, CSV document analysis" },
      { icon: "🔒", text: "Secure document processing with JWT authentication" },
      { icon: "📈", text: "Context-aware financial insights and recommendations" },
    ],
    githubUrl: "https://github.com/Sarth00718/FinChatBot",
    liveUrl: "https://financial-chabot.vercel.app/",
    metrics: {
      users: "100+",
      uptime: "99.5%",
      responseTime: "<2s"
    }
  },
  {
    id: "expense-tracker",
    emoji: "💰",
    title: "Smart Expense Tracker",
    subtitle: "AI-Powered Personal Financial Management System",
    techStack: [
      { label: "MongoDB", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
      { label: "Express.js", color: "#94a3b8", bg: "rgba(148,163,184,0.12)" },
      { label: "React 18", color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
      { label: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.12)" },
      { label: "Tesseract", color: "#4285F4", bg: "rgba(66,133,244,0.12)" },
    ],
    features: [
      { icon: "🤖", text: "AI-powered conversational finance assistant for insights" },
      { icon: "🧾", text: "OCR receipt scanning with Tesseract.js for auto-entry" },
      { icon: "📊", text: "Advanced spending analytics with health scoring algorithm" },
      { icon: "💡", text: "Smart budget recommendations based on spending patterns" },
      { icon: "📱", text: "Responsive PWA design for mobile-first experience" },
      { icon: "🌐", text: "Production deployment on Vercel with 99.9% uptime" },
    ],
    githubUrl: "https://github.com/Sarth00718/Smart-Expense-Tracker",
    liveUrl: "https://smart-expense-tracker-rho-eight.vercel.app/",
    metrics: {
      transactions: "1000+",
      accuracy: "95%"
    }
  },
  {
    id: "vastra",
    emoji: "👗",
    title: "Vastra",
    subtitle: "Full-Featured MERN E-Commerce Platform",
    techStack: [
      { label: "React 18", color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
      { label: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.12)" },
      { label: "MongoDB", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
      { label: "Firebase", color: "#FFCA28", bg: "rgba(255,202,40,0.12)" },
      { label: "Razorpay", color: "#3395FF", bg: "rgba(51,149,255,0.12)" },
    ],
    features: [
      { icon: "💳", text: "Secure Razorpay payment gateway integration" },
      { icon: "🔐", text: "Firebase authentication with social login support" },
      { icon: "🛒", text: "Advanced cart management with wishlist functionality" },
      { icon: "📋", text: "Comprehensive admin dashboard for inventory management" },
      { icon: "📦", text: "Order tracking and management system" },
      { icon: "🚀", text: "Production-ready deployment on Vercel" },
    ],
    githubUrl: "https://github.com/Sarth00718/Vastra",
    liveUrl: "https://vastra-cloth-shop-oirs.vercel.app/login",
    adminUrl: "https://vastra-cloth-shop.vercel.app/",
  },
  {
    id: "chat-app",
    emoji: "💬",
    title: "Real-Time Chat Application",
    subtitle: "Scalable MERN WebSocket Messaging Platform",
    techStack: [
      { label: "Socket.io", color: "#25c2a0", bg: "rgba(37,194,160,0.12)" },
      { label: "Redux Toolkit", color: "#764ABC", bg: "rgba(118,74,188,0.12)" },
      { label: "JWT", color: "#d63aff", bg: "rgba(214,58,255,0.12)" },
      { label: "MongoDB Atlas", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
      { label: "Express.js", color: "#94a3b8", bg: "rgba(148,163,184,0.12)" },
    ],
    features: [
      { icon: "💬", text: "Real-time bidirectional messaging with Socket.io" },
      { icon: "📦", text: "Centralized state management using Redux Toolkit" },
      { icon: "🔑", text: "Secure JWT-based authentication and authorization" },
      { icon: "👥", text: "Group chat and private messaging capabilities" },
      { icon: "📱", text: "Responsive design for seamless mobile experience" },
      { icon: "☁️", text: "Cloud-hosted on MongoDB Atlas for scalability" },
    ],
    githubUrl: "https://github.com/Sarth00718/Real-Time-Chat-App",
    liveUrl: "https://real-time-chat-application-two-smoky.vercel.app/",
  },
];

// ─── Hackathon & Innovation Projects ────────────────────────
export const HACKATHON_PROJECTS = [
  {
    id: "smartbite",
    emoji: "🍽️",
    title: "SmartBite — AI-Powered Meal Planner & Nutrition Assistant",
    subtitle:
      "Winner Project | Mind Sprint 48-Hour International Hackathon (IronXman, Unstop)",
    isLarge: true,
    features: [
      {
        icon: "🤖",
        label: "AI Meal Recommendations",
        description: "Personalized meal suggestions using collaborative filtering and ML models trained on nutritional data",
      },
      {
        icon: "📊",
        label: "Nutrition Analysis Engine",
        description: "ML-based macro tracking with real-time nutrition dashboard and dietary goal monitoring",
      },
      {
        icon: "📅",
        label: "Weekly Meal Optimization",
        description: "Constraint logic programming for balanced meal planning considering dietary restrictions and preferences",
      },
      {
        icon: "💬",
        label: "AI Chat Assistant",
        description: "Groq AI-powered nutrition advisor providing instant dietary guidance and recipe suggestions",
      },
      {
        icon: "🔬",
        label: "K-Means Clustering",
        description: "Advanced meal diversity optimization algorithm ensuring nutritional variety across meal plans",
      },
      {
        icon: "🛒",
        label: "Smart Grocery Lists",
        description: "Automated grocery list generation with budget optimization and local store price comparison",
      },
      {
        icon: "🌗",
        label: "Modern UI/UX",
        description: "Responsive dark/light mode interface with PWA-ready architecture for offline functionality",
      },
      {
        icon: "📈",
        label: "Progress Tracking",
        description: "Comprehensive health metrics tracking with visual analytics and goal achievement insights",
      },
    ],
    githubUrl: "https://github.com/Sarth00718/SmartBite",
    metrics: {
      duration: "48 hours",
      teamSize: "4 members",
      technologies: "10+"
    }
  },
  {
    id: "clipcrafters",
    emoji: "🎬",
    title: "ClipCrafters",
    subtitle: "AI-Powered Video Generation & RAG-Based Script Creation Platform",
    tagline: "Innovation Award | National Hackathon 2025",
    features: [
      { icon: "📄", text: "Multi-format document upload (PDF, DOCX, PPTX, TXT) with intelligent parsing" },
      { icon: "🧠", text: "Advanced RAG pipeline using FAISS vector store + SentenceTransformers embeddings" },
      { icon: "✍️", text: "Context-aware AI script generation powered by Groq LLM with custom prompting" },
      { icon: "🎥", text: "Automated text-to-video generation pipeline using MoviePy with scene transitions" },
      { icon: "✂️", text: "Professional scene editing interface with timeline control and preview" },
      { icon: "🎙️", text: "High-quality AI voiceover synthesis with Murf TTS supporting multiple voices" },
      { icon: "🖼️", text: "Dynamic visual generation using Stability.ai API for custom scene imagery" },
      { icon: "☁️", text: "Scalable cloud storage and CDN delivery via Cloudinary for fast video streaming" },
      { icon: "🔒", text: "Secure JWT authentication with user project management and version control" },
    ],
    githubUrl: "https://github.com/Sarth00718/ClipCrafters",
    liveUrl: null,
    metrics: {
      videosGenerated: "50+",
      avgProcessingTime: "3-5 min"
    }
  },
  {
    id: "fleetflow",
    emoji: "🚛",
    title: "FleetFlow",
    subtitle: "Enterprise Fleet & Logistics Management System",
    tagline: "Built during 72-hour competitive development sprint",
    features: [
      { icon: "🗄️", text: "Robust PostgreSQL relational database with optimized query performance" },
      { icon: "🔐", text: "Multi-tier RBAC system with granular permissions for drivers, managers, and admins" },
      { icon: "📍", text: "Real-time GPS vehicle tracking with route optimization and geofencing alerts" },
      { icon: "📈", text: "Comprehensive financial analytics dashboard with ₹ currency and tax calculations" },
      { icon: "⚡", text: "RESTful API architecture with JWT authentication and rate limiting" },
      { icon: "📊", text: "Interactive data visualization for fleet performance and cost analysis" },
    ],
    githubUrl: "https://github.com/Sarth00718/FleetFlow",
    liveUrl: "https://fleet-flow-amber.vercel.app/",
  },
  {
    id: "exesman",
    emoji: "💼",
    title: "Exe$Man",
    subtitle: "Multi-Level Enterprise Expense Management System",
    tagline: "Corporate workflow automation solution",
    features: [
      { icon: "🧾", text: "OCR receipt scanning with Tesseract.js for automatic expense entry" },
      { icon: "✅", text: "Hierarchical approval workflows with customizable routing rules" },
      { icon: "🔔", text: "Real-time push notifications for approval requests and status updates" },
      { icon: "📊", text: "Multi-level financial reporting with department-wise budget tracking" },
      { icon: "💰", text: "Expense categorization with policy compliance checking" },
      { icon: "📧", text: "Email integration for approval notifications and monthly summaries" },
    ],
    githubUrl: "https://github.com/Sarth00718/ExesMan",
  },
];

// ─── Machine Learning Projects ──────────────────────────────
export const ML_PROJECTS = [
  {
    id: "wine-quality",
    emoji: "🍷",
    title: "Wine Quality Prediction System",
    subtitle: "Comparative Analysis of 14 ML Algorithms",
    techTags: ["XGBoost", "LightGBM", "CatBoost", "Random Forest", "SVM"],
    metric: "92-94% Accuracy",
    metricIcon: "📊",
    description: "Comprehensive machine learning project comparing 14 different algorithms for wine quality classification using physicochemical properties. Implemented ensemble methods and hyperparameter tuning for optimal performance.",
    githubUrl: "https://github.com/Sarth00718/Wine-Quality-Prediction",
    highlights: [
      "Feature engineering with correlation analysis",
      "Cross-validation with stratified K-fold",
      "Ensemble stacking for improved accuracy",
      "Detailed performance metrics visualization"
    ]
  },
  {
    id: "heart-attack",
    emoji: "❤️",
    title: "Heart Attack Risk Prediction",
    subtitle: "Clinical Risk Classification System",
    techTags: ["KNN Classifier", "Logistic Regression", "Decision Trees"],
    metric: "89% Accuracy",
    metricIcon: "📊",
    description: "Healthcare ML system for predicting heart attack risk using clinical parameters. Implemented statistical preprocessing, feature scaling, and model evaluation with medical dataset validation.",
    githubUrl: "https://github.com/Sarth00718/Heart-Attack-Prediction",
    highlights: [
      "Medical data preprocessing pipeline",
      "SMOTE for handling class imbalance",
      "ROC-AUC analysis for model evaluation",
      "Feature importance ranking"
    ]
  },
  {
    id: "superstore",
    emoji: "🌍",
    title: "Global Superstore Analytics",
    subtitle: "51K+ Records Business Intelligence System",
    techTags: ["Decision Tree", "Linear Regression", "K-Means Clustering", "Tableau"],
    metric: "84.89% Accuracy",
    metricIcon: "📊",
    description: "End-to-end data analytics project analyzing global retail data with predictive modeling and interactive Tableau dashboards for business insights and sales forecasting.",
    githubUrl: "https://github.com/Sarth00718/Global-Superstore-Analytics",
    highlights: [
      "Sales forecasting with time series analysis",
      "Customer segmentation using clustering",
      "Interactive Tableau dashboards",
      "Profit optimization recommendations"
    ]
  },
];

// ─── DSA & Core Projects ────────────────────────────────────
export const DSA_PROJECTS = [
  {
    icon: "📊",
    title: "Tournament Graph Scheduling System",
    techStack: "Python · FastAPI · NetworkX · React · D3.js · Recharts",
    description: "Advanced graph-theory based tournament scheduler implementing Welsh-Powell graph coloring algorithm for conflict-free match scheduling. Features Dijkstra's algorithm for travel optimization and interactive D3.js visualizations for conflict graphs, adjacency matrices, and tournament trees.",
    githubUrl: "https://github.com/Sarth00718/Tournament-Graph-Scheduling-System",
    liveUrl: null,
    highlights: [
      "Welsh-Powell graph coloring for scheduling",
      "Dijkstra's shortest path for travel optimization",
      "Interactive conflict graph visualization",
      "REST API with FastAPI backend"
    ]
  },
  {
    icon: "🎯",
    title: "Greedy Algorithm Visualizer",
    techStack: "JavaScript · HTML5 Canvas · CSS3",
    description: "Interactive web-based visualization tool for understanding greedy algorithms through step-by-step animated execution. Includes implementations of Activity Selection, Huffman Coding, and Fractional Knapsack with real-time complexity analysis.",
    liveUrl: "https://greedy-algorithm-stimulation-hbgc.vercel.app/",
    githubUrl: "https://github.com/Sarth00718/Greedy-Algorithm-Visualizer",
    highlights: [
      "Step-by-step algorithm visualization",
      "Multiple greedy algorithm implementations",
      "Time complexity analysis display",
      "Interactive parameter controls"
    ]
  },
  {
    icon: "⚡",
    title: "Torrent Power Billing System",
    techStack: "C++ · OOP · File Handling · STL",
    description: "Console-based utility billing system implementing object-oriented principles for customer management, bill generation, and payment processing. Features file-based persistence and automated late fee calculations.",
    githubUrl: "https://github.com/Sarth00718/Torrent-Power-Billing",
    highlights: [
      "OOP design with inheritance and polymorphism",
      "File-based data persistence",
      "Automated billing calculations",
      "Customer account management"
    ]
  },
  {
    icon: "📚",
    title: "Library Management System",
    techStack: "Java · OOP · File I/O · Collections Framework",
    description: "Comprehensive library management system with complete CRUD operations for books, members, and transactions. Implements Java Collections Framework for efficient data management and file I/O for persistent storage.",
    githubUrl: "https://github.com/Sarth00718/Library-Management-System",
    highlights: [
      "Complete CRUD operations",
      "Book issue/return tracking",
      "Fine calculation system",
      "Search and filter functionality"
    ]
  },
];
