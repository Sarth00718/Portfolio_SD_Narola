// ================================================================
//  CERTIFICATES — Static data (no backend dependency for display)
//  Schema mirrors MongoDB Certificate model
// ================================================================

export const CERTIFICATES = [
  {
    id: "amazon-ml-2025",
    title: "Amazon ML Summer School 2025",
    issuer: "Amazon",
    category: "Machine Learning",
    date: "July 2025",
    credentialId: null,
    credentialUrl: null,
    description:
      "Selected for Amazon's highly competitive Machine Learning Summer School 2025. Covered supervised learning, deep learning, NLP, probabilistic graphical models, sequential models, and recommendation systems — taught by Amazon Scientists.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Recommendation Systems",
    ],
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.18)",
    icon: "🏅",
    featured: true,
  },
  {
    id: "hackamind-nirma",
    title: "Hackamind Hackathon",
    issuer: "Nirma University",
    category: "Hackathon",
    date: "2024",
    credentialId: null,
    credentialUrl: null,
    pdfUrl: null,
    description:
      "Participated in Nirma University hackathon focused on innovative problem-solving. Engaged in rapid prototyping, team collaboration, and time-constrained development challenges to create impactful solutions.",
    skills: ["Rapid Prototyping", "Innovation", "Team Collaboration", "Problem-Solving"],
    color: "#ec4899",
    bg: "rgba(236,72,153,0.07)",
    border: "rgba(236,72,153,0.18)",
    icon: "💡",
    featured: true,
  },
  {
    id: "mind-sprint-2024",
    title: "Mind Sprint Hackathon — IronXman",
    issuer: "Unstop",
    category: "Hackathon",
    date: "2024",
    credentialId: null,
    credentialUrl: null,
    pdfUrl: "/MIND.pdf",
    description:
      "Participated in the Mind Sprint Hackathon (IronXman track) hosted on Unstop — a national-level competitive 48-hour hackathon requiring rapid full-stack prototyping, AI integration, and innovative problem-solving under intense time constraints.",
    skills: ["Full Stack", "AI/ML", "Rapid Prototyping", "Innovation"],
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.07)",
    border: "rgba(139,92,246,0.18)",
    icon: "⚡",
    featured: true,
  },
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    issuer: "Government of India",
    category: "National Hackathon",
    date: "2025",
    credentialId: null,
    credentialUrl: null,
    pdfUrl: "/SIH2025.pdf",
    description:
      "Participated in Smart India Hackathon — India's largest open innovation platform organized by the Government of India. Presented an AI-driven solution to a national-level problem statement, competing against teams from across the country.",
    skills: ["Innovation", "AI Solutions", "Team Leadership", "System Design"],
    color: "#10b981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.18)",
    icon: "🇮🇳",
    featured: true,
  },
];
