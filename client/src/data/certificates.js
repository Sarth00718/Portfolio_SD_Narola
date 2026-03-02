// ================================================================
//  CERTIFICATES — Static data (no backend dependency for display)
//  Schema mirrors MongoDB Certificate model
// ================================================================

export const CERTIFICATES = [
  {
    id: 'amazon-ml-2025',
    title: 'Amazon ML Summer School 2025',
    issuer: 'Amazon',
    category: 'Machine Learning',
    date: 'July 2025',
    credentialId: null,
    credentialUrl: null,
    description:
      'Selected for Amazon\'s highly competitive Machine Learning Summer School 2025. Covered supervised learning, deep learning, NLP, probabilistic graphical models, sequential models, and recommendation systems — taught by Amazon Scientists.',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Recommendation Systems'],
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.18)',
    icon: '🏅',
    featured: true,
  },
  {
    id: 'mern-udemy',
    title: 'The Complete MERN Stack Developer Course',
    issuer: 'Udemy',
    category: 'Full Stack',
    date: '2024',
    credentialId: null,
    credentialUrl: 'https://udemy.com',
    description:
      'Comprehensive MERN stack course covering React 18, Node.js, Express.js, MongoDB, JWT authentication, REST APIs, and deployment.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.07)',
    border: 'rgba(99,102,241,0.2)',
    icon: '🎓',
    featured: true,
  },
  {
    id: 'python-ml',
    title: 'Machine Learning with Python',
    issuer: 'Coursera / IBM',
    category: 'Machine Learning',
    date: '2024',
    credentialId: null,
    credentialUrl: 'https://coursera.org',
    description:
      'Python-based ML course by IBM covering regression, classification, clustering, and model evaluation using Scikit-learn, Pandas, and Matplotlib.',
    skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    color: '#10b981',
    bg: 'rgba(16,185,129,0.07)',
    border: 'rgba(16,185,129,0.2)',
    icon: '🤖',
    featured: false,
  },
  {
    id: 'dsa-geeksforgeeks',
    title: 'Data Structures & Algorithms Self-Paced',
    issuer: 'GeeksforGeeks',
    category: 'Computer Science',
    date: '2023',
    credentialId: null,
    credentialUrl: 'https://geeksforgeeks.org',
    description:
      'Comprehensive DSA course covering arrays, linked lists, trees, graphs, dynamic programming, sorting algorithms, and competitive programming techniques.',
    skills: ['DSA', 'Dynamic Programming', 'Graph Algorithms', 'C++'],
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.07)',
    border: 'rgba(6,182,212,0.2)',
    icon: '⚡',
    featured: false,
  },
];
