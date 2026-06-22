// ============================================================
//  PROJECTS DATA — Sarth Narola
// ============================================================

// ─── Full-Stack & AI Projects ────────────────────────────────
export const CORE_PROJECTS = [
  {
    id: "finchatbot",
    emoji: "🤖",
    title: "FinChatBot",
    subtitle: "AI Chatbot for Financial Document Analysis",
    techStack: [
      { label: "React 18", color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
      { label: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.12)" },
      { label: "Python", color: "#3776AB", bg: "rgba(55,118,171,0.12)" },
      { label: "FastAPI", color: "#009688", bg: "rgba(0,150,136,0.12)" },
      { label: "MongoDB", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
      { label: "LangChain", color: "#1C3C3C", bg: "rgba(28,60,60,0.12)" },
    ],
    features: [
      { icon: "🧠", text: "RAG pipeline built with LangChain and FAISS vector store" },
      { icon: "🤝", text: "Uses both Groq LLM and Google Gemini for better answer quality" },
      { icon: "⚡", text: "WebSocket-based chat so responses show up instantly" },
      { icon: "📊", text: "Works with PDF, Excel, and CSV files" },
      { icon: "🔒", text: "JWT-based auth keeps uploaded documents secure" },
      { icon: "📈", text: "Pulls out financial insights from your documents in plain language" },
    ],
    githubUrl: "https://github.com/Sarth00718/Financial-Chatbot-",
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
    subtitle: "Personal Finance Tracker with AI Insights",
    techStack: [
      { label: "MongoDB", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
      { label: "Express.js", color: "#94a3b8", bg: "rgba(148,163,184,0.12)" },
      { label: "React 18", color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
      { label: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.12)" },
      { label: "Tesseract", color: "#4285F4", bg: "rgba(66,133,244,0.12)" },
    ],
    features: [
      { icon: "🤖", text: "Chat with an AI assistant to understand your spending habits" },
      { icon: "🧾", text: "Scan receipts with OCR — no manual entry needed" },
      { icon: "📊", text: "Spending breakdowns with a simple health score to see where you stand" },
      { icon: "💡", text: "Budget suggestions based on how you actually spend" },
      { icon: "📱", text: "Works smoothly on mobile as a PWA" },
      { icon: "🌐", text: "Deployed on Vercel with 99.9% uptime" },
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
    subtitle: "A Full MERN Stack Clothing Store",
    techStack: [
      { label: "React 18", color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
      { label: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.12)" },
      { label: "MongoDB", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
      { label: "Firebase", color: "#FFCA28", bg: "rgba(255,202,40,0.12)" },
      { label: "Razorpay", color: "#3395FF", bg: "rgba(51,149,255,0.12)" },
    ],
    features: [
      { icon: "💳", text: "Payments handled through Razorpay" },
      { icon: "🔐", text: "Login with email or social accounts via Firebase" },
      { icon: "🛒", text: "Cart and wishlist that actually work the way you expect" },
      { icon: "📋", text: "Admin panel to manage products and stock" },
      { icon: "📦", text: "Order tracking so customers know where their stuff is" },
      { icon: "🚀", text: "Deployed on Vercel" },
    ],
    githubUrl: "https://github.com/Sarth00718/Vastra-cloth-shop",
    liveUrl: "https://vastra-cloth-shop-oirs.vercel.app/login",
    adminUrl: "https://vastra-cloth-shop.vercel.app/",
  },
  {
    id: "chat-app",
    emoji: "💬",
    title: "Real-Time Chat App",
    subtitle: "MERN Stack Messaging App with WebSockets",
    techStack: [
      { label: "Socket.io", color: "#25c2a0", bg: "rgba(37,194,160,0.12)" },
      { label: "Redux Toolkit", color: "#764ABC", bg: "rgba(118,74,188,0.12)" },
      { label: "JWT", color: "#d63aff", bg: "rgba(214,58,255,0.12)" },
      { label: "MongoDB Atlas", color: "#47A248", bg: "rgba(71,162,72,0.12)" },
      { label: "Express.js", color: "#94a3b8", bg: "rgba(148,163,184,0.12)" },
    ],
    features: [
      { icon: "💬", text: "Messages send and receive in real time with Socket.io" },
      { icon: "📦", text: "App state managed cleanly with Redux Toolkit" },
      { icon: "🔑", text: "JWT auth so only the right people can access chats" },
      { icon: "👥", text: "Supports both group chats and private one-on-one conversations" },
      { icon: "📱", text: "Looks good and works well on mobile too" },
      { icon: "☁️", text: "Hosted on MongoDB Atlas" },
    ],
    githubUrl: "https://github.com/Sarth00718/Real-Time-Chat-Application",
    liveUrl: "https://real-time-chat-application-eosin.vercel.app",
  },
];

// ─── Hackathon Projects ──────────────────────────────────────
export const HACKATHON_PROJECTS = [
  {
    id: "smartbite",
    emoji: "🍽️",
    title: "SmartBite — AI Meal Planner & Nutrition Assistant",
    subtitle: "Winner — Mind Sprint 48-Hour International Hackathon (IronXman, Unstop)",
    isLarge: true,
    features: [
      {
        icon: "🤖",
        label: "Personalized Meal Suggestions",
        description: "Recommends meals using collaborative filtering and ML models trained on nutrition data",
      },
      {
        icon: "📊",
        label: "Nutrition Tracking",
        description: "Tracks macros in real time and keeps an eye on your dietary goals",
      },
      {
        icon: "📅",
        label: "Weekly Meal Planning",
        description: "Plans balanced weekly meals while respecting dietary restrictions and preferences",
      },
      {
        icon: "💬",
        label: "AI Nutrition Chat",
        description: "Powered by Groq AI — ask it anything about diet, recipes, or nutrition",
      },
      {
        icon: "🔬",
        label: "Meal Diversity with K-Means",
        description: "Uses clustering to make sure your meal plan doesn't get repetitive",
      },
      {
        icon: "🛒",
        label: "Grocery List Generator",
        description: "Automatically builds a grocery list from your meal plan with basic budget awareness",
      },
      {
        icon: "🌗",
        label: "Clean UI with Dark/Light Mode",
        description: "Responsive interface with PWA support so it works offline too",
      },
      {
        icon: "📈",
        label: "Progress Tracking",
        description: "Visual charts to follow your health goals over time",
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
    subtitle: "Turn Your Documents into Videos with AI",
    tagline: "Innovation Award — National Hackathon 2025",
    features: [
      { icon: "📄", text: "Upload PDFs, DOCX, PPTX, or TXT files and it parses them automatically" },
      { icon: "🧠", text: "RAG pipeline with FAISS + SentenceTransformers pulls the right context from your docs" },
      { icon: "✍️", text: "Groq LLM writes a video script based on your document content" },
      { icon: "🎥", text: "Converts the script into a video using MoviePy with scene transitions" },
      { icon: "✂️", text: "Edit scenes with a simple timeline interface before finalizing" },
      { icon: "🎙️", text: "Murf TTS adds a voiceover in multiple voice options" },
      { icon: "🖼️", text: "Generates visuals for each scene using Stability.ai" },
      { icon: "☁️", text: "Videos stored and delivered fast via Cloudinary CDN" },
      { icon: "🔒", text: "JWT auth with project saving and version history" },
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
    subtitle: "Fleet & Logistics Management System",
    tagline: "Built in a 72-hour development sprint",
    features: [
      { icon: "🗄️", text: "PostgreSQL database with well-structured queries for fast lookups" },
      { icon: "🔐", text: "Role-based access for drivers, managers, and admins — each sees only what they need" },
      { icon: "📍", text: "Live GPS tracking with route suggestions and geofence alerts" },
      { icon: "📈", text: "Finance dashboard with INR support and tax breakdowns" },
      { icon: "⚡", text: "REST API with JWT auth and rate limiting" },
      { icon: "📊", text: "Charts for fleet performance and cost trends" },
    ],
    githubUrl: "https://github.com/Sarth00718/FleetFlow",
    liveUrl: "https://fleet-flow-amber.vercel.app/",
  },
  {
    id: "exesman",
    emoji: "💼",
    title: "Exe$Man",
    subtitle: "Multi-Level Expense Approval & Management System",
    tagline: "Built to simplify corporate expense workflows",
    features: [
      { icon: "🧾", text: "Scan receipts with OCR and skip the manual data entry" },
      { icon: "✅", text: "Multi-level approval flows you can configure per team or department" },
      { icon: "🔔", text: "Real-time notifications when something needs your approval or gets approved" },
      { icon: "📊", text: "Reports broken down by department with budget vs. spend tracking" },
      { icon: "💰", text: "Auto-categorizes expenses and flags anything that breaks policy" },
      { icon: "📧", text: "Email alerts for approvals and monthly spend summaries" },
    ],
    githubUrl: "https://github.com/Sarth00718/Expense-Management",
    liveUrl: "https://expense-management-gamma.vercel.app/",
  },
];

// ─── Machine Learning Projects ───────────────────────────────
export const ML_PROJECTS = [
  {
    id: "wine-quality",
    emoji: "🍷",
    title: "Wine Quality Prediction",
    subtitle: "Comparing 14 ML Algorithms Side by Side",
    techTags: ["XGBoost", "LightGBM", "CatBoost", "Random Forest", "SVM"],
    metric: "92–94% Accuracy",
    metricIcon: "📊",
    description: "Tested 14 different ML algorithms to see which ones classify wine quality best from physicochemical data. Spent time on feature engineering, hyperparameter tuning, and ensemble methods to push the numbers up.",
    githubUrl: "https://github.com/Sarth00718/Wine-Quality-Prediction",
    highlights: [
      "Feature engineering with correlation analysis",
      "Stratified K-fold cross-validation",
      "Ensemble stacking for a final accuracy boost",
      "Clear performance comparison charts across all models"
    ]
  },
  {
    id: "heart-attack",
    emoji: "❤️",
    title: "Heart Attack Risk Prediction",
    subtitle: "Clinical Risk Classification",
    techTags: ["KNN Classifier", "Logistic Regression", "Decision Trees"],
    metric: "89% Accuracy",
    metricIcon: "📊",
    description: "Built a model to predict heart attack risk from clinical data. Handled class imbalance with SMOTE, scaled features properly, and evaluated results with ROC-AUC curves the way you'd expect for a medical use case.",
    githubUrl: "https://github.com/Sarth00718/heart-attack-prediction",
    highlights: [
      "Clean preprocessing pipeline for medical data",
      "SMOTE to handle imbalanced classes",
      "ROC-AUC evaluation",
      "Feature importance to understand what the model relies on"
    ]
  },
  {
    id: "superstore",
    emoji: "🌍",
    title: "Global Superstore Analytics",
    subtitle: "Analysis of 51K+ Retail Records",
    techTags: ["Decision Tree", "Linear Regression", "K-Means Clustering", "Tableau"],
    metric: "84.89% Accuracy",
    metricIcon: "📊",
    description: "Dug into a large global retail dataset to find patterns and build sales forecasts. Created interactive Tableau dashboards so the insights are actually easy to explore — not just numbers in a notebook.",
    githubUrl: "https://github.com/Sarth00718/Data-Analysis-and-Visualization-of-Global_Superstore-Dataset",
    highlights: [
      "Sales forecasting using time series analysis",
      "Customer segmentation with K-Means",
      "Interactive Tableau dashboards",
      "Profit optimization recommendations"
    ]
  },
];

// ─── DSA & CS Fundamentals Projects ─────────────────────────
export const DSA_PROJECTS = [
  {
    icon: "📊",
    title: "Tournament Graph Scheduling System",
    techStack: "Python · FastAPI · NetworkX · React · D3.js · Recharts",
    description: "A tournament scheduler built on graph theory. Uses Welsh-Powell graph coloring to avoid scheduling conflicts and Dijkstra's algorithm to minimize travel between venues. D3.js handles the interactive visualizations — conflict graphs, adjacency matrices, and bracket trees.",
    githubUrl: "https://github.com/Sarth00718/Tournament-Graph-Scheduling-System",
    liveUrl: "https://tournament-graph-scheduling-system.vercel.app/",
    highlights: [
      "Welsh-Powell coloring for conflict-free scheduling",
      "Dijkstra's shortest path for travel optimization",
      "Interactive graph visualizations with D3.js",
      "FastAPI backend with clean REST endpoints"
    ]
  },
  {
    icon: "🎯",
    title: "Greedy Algorithm Visualizer",
    techStack: "JavaScript · HTML5 Canvas · CSS3",
    description: "A browser-based tool to watch greedy algorithms run step by step. Covers Activity Selection, Huffman Coding, and Fractional Knapsack — with live complexity info so you can see how each decision affects performance.",
    liveUrl: "https://greedy-algorithm-stimulation-hbgc.vercel.app/",
    githubUrl: "https://github.com/Sarth00718/Greedy-Algorithm-Stimulation",
    highlights: [
      "Step-by-step animated execution",
      "Three greedy algorithms implemented",
      "Live time complexity display",
      "Adjustable inputs to test different scenarios"
    ]
  },
  {
    icon: "⚡",
    title: "Torrent Power Billing System",
    techStack: "C++ · OOP · File Handling · STL",
    description: "A console app for managing utility billing. Handles customer accounts, generates bills, processes payments, and calculates late fees — all saved to files so data persists between runs.",
    githubUrl: "https://github.com/Sarth00718/DSA-LL-Electricity-Billing-System",
    highlights: [
      "OOP design with inheritance and polymorphism",
      "File-based storage so data isn't lost on exit",
      "Automated billing and late fee logic",
      "Basic customer account management"
    ]
  },
  {
    icon: "📚",
    title: "Library Management System",
    techStack: "Java · OOP · File I/O · Collections Framework",
    description: "A library system that covers the basics — adding books, registering members, issuing and returning books, tracking fines, and searching the catalog. Built with Java Collections for efficient in-memory operations and file I/O to keep data saved.",
    githubUrl: "https://github.com/Sarth00718/Library-Management-System---Java",
    highlights: [
      "Full CRUD for books and members",
      "Issue/return tracking with due dates",
      "Automatic fine calculation",
      "Search and filter across the catalog"
    ]
  },
];