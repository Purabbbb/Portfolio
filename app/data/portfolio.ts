// ===== PORTFOLIO DATA =====
// Personalized for Purab Bhatia — sourced from resume

export const trainerData = {
  name: "Purab Bhatia",
  title: "Aspiring AI/ML Engineer",
  level: 38,
  xp: {
    current: 7200,
    max: 10000,
  },
  badges: 6,
  region: "Manav Rachna University, New Delhi",
  bio: "Technically driven AI & ML specialist focused on designing and developing practical, end-to-end solutions. Strong ability to translate machine learning concepts into real-world applications through effective problem-solving and system design.",
  education: {
    degree: "B.Tech (CSE — AI & ML)",
    university: "Manav Rachna University",
    cgpa: "8.3 / 10",
    status: "Pursuing",
  },
  stats: {
    hp: 90,
    attack: 85,
    defense: 78,
    spAttack: 94,
    spDefense: 82,
    speed: 88,
  },
  statLabels: {
    hp: "Problem Solving",
    attack: "Frontend Dev",
    defense: "Backend Dev",
    spAttack: "AI / ML",
    spDefense: "System Design",
    speed: "Learning Speed",
  },
  socials: {
    github: "https://github.com/Purabbbb",
    linkedin: "https://www.linkedin.com/in/purab-bhatia/",
    email: "bhatiapurab27@gmail.com",
  },
  languages: ["English", "Hindi", "French (Basic)", "Sindhi"],
  hobbies: ["Cooking", "Content Creation", "Photography", "Cinematography", "Cricket", "Video Games"],
};

export interface Skill {
  id: string;
  name: string;
  type: string;
  typeColor: string;
  level: number;
  maxLevel: number;
  description: string;
  moves: string[];
  relatedProjects: string[];
  emoji: string;
}

export const skillsData: Skill[] = [
  // Programming
  {
    id: "python",
    name: "Pythonix",
    type: "Programming",
    typeColor: "type-electric",
    level: 92,
    maxLevel: 100,
    description: "A versatile creature proficient in scripting, ML pipelines, and building intelligent systems.",
    moves: ["Data Analysis", "Flask APIs", "ML Pipelines", "Automation"],
    relatedProjects: ["fintech-msme", "energy-prediction", "kavach"],
    emoji: "🐍",
  },
  {
    id: "cpp",
    name: "CeePlusaur",
    type: "Programming",
    typeColor: "type-steel",
    level: 78,
    maxLevel: 100,
    description: "A powerful creature built for performance-critical systems and competitive programming.",
    moves: ["OOP", "STL", "DSA", "Competitive Programming"],
    relatedProjects: ["dsa-solutions"],
    emoji: "⚙️",
  },
  {
    id: "javascript",
    name: "JavaScriptor",
    type: "Programming",
    typeColor: "type-electric",
    level: 82,
    maxLevel: 100,
    description: "A dynamic creature that brings interactivity and life to the web.",
    moves: ["DOM Manipulation", "Async/Await", "ES6+", "Event Handling"],
    relatedProjects: ["portfolio", "web-projects"],
    emoji: "⚡",
  },
  {
    id: "sql",
    name: "SQLithor",
    type: "Programming",
    typeColor: "type-water",
    level: 74,
    maxLevel: 100,
    description: "A data guardian that queries, manages, and protects vast databases.",
    moves: ["Queries", "Joins", "Indexing", "Schema Design"],
    relatedProjects: ["fintech-msme"],
    emoji: "🗄️",
  },
  // AI/ML
  {
    id: "tensorflow",
    name: "TensorFlo",
    type: "AI/ML",
    typeColor: "type-psychic",
    level: 85,
    maxLevel: 100,
    description: "A mystical creature that designs and trains neural networks with precision.",
    moves: ["CNNs", "Keras", "Transfer Learning", "Model Deployment"],
    relatedProjects: ["energy-prediction", "research-summarizer"],
    emoji: "🧠",
  },
  {
    id: "pytorch",
    name: "PyTorchion",
    type: "AI/ML",
    typeColor: "type-fire",
    level: 82,
    maxLevel: 100,
    description: "A fiery research companion for cutting-edge deep learning experiments.",
    moves: ["Custom Models", "GRU/RNN", "GPU Training", "Vision Transformers"],
    relatedProjects: ["energy-prediction", "research-summarizer"],
    emoji: "🔥",
  },
  {
    id: "sklearn",
    name: "ScikitLearn",
    type: "AI/ML",
    typeColor: "type-grass",
    level: 88,
    maxLevel: 100,
    description: "A reliable creature specializing in classical ML algorithms and feature engineering.",
    moves: ["Supervised Learning", "Feature Engineering", "KMeans", "PCA"],
    relatedProjects: ["fintech-msme"],
    emoji: "🌿",
  },
  {
    id: "deeplearning",
    name: "DeepDragon",
    type: "AI/ML",
    typeColor: "type-dragon",
    level: 80,
    maxLevel: 100,
    description: "An ancient creature wielding CNNs, RNNs, GRUs, and Vision Transformers.",
    moves: ["CNNs", "RNNs", "GRU", "Vision Transformers (ViT)"],
    relatedProjects: ["energy-prediction", "kavach"],
    emoji: "🐉",
  },
  // Web Dev & Design
  {
    id: "react",
    name: "Reacteon",
    type: "Web Dev",
    typeColor: "type-water",
    level: 80,
    maxLevel: 100,
    description: "A fluid creature that builds component-based user interfaces with elegance.",
    moves: ["Hooks", "Components", "State Mgmt", "Responsive UI"],
    relatedProjects: ["portfolio", "web-projects"],
    emoji: "⚛️",
  },
  {
    id: "flask",
    name: "Flaskfire",
    type: "Web Dev",
    typeColor: "type-fire",
    level: 78,
    maxLevel: 100,
    description: "A nimble creature that serves APIs and connects ML models to the web.",
    moves: ["REST APIs", "Templating", "Model Serving", "Auth"],
    relatedProjects: ["research-summarizer", "fintech-msme"],
    emoji: "🧪",
  },
  {
    id: "figma",
    name: "Figmancer",
    type: "Design",
    typeColor: "type-fairy",
    level: 76,
    maxLevel: 100,
    description: "A creative creature that transforms ideas into beautiful designs and prototypes.",
    moves: ["UI Design", "Prototyping", "Photoshop", "Premiere Pro"],
    relatedProjects: ["ensurex-internship", "portfolio"],
    emoji: "🎨",
  },
  {
    id: "streamlit",
    name: "Streamleon",
    type: "Web Dev",
    typeColor: "type-ice",
    level: 72,
    maxLevel: 100,
    description: "A swift creature for rapid ML app prototyping and data dashboards.",
    moves: ["Data Apps", "ML Demos", "Charts", "Quick Deploy"],
    relatedProjects: ["ml-demos"],
    emoji: "💨",
  },
];

export interface Project {
  id: string;
  name: string;
  enemy: string;
  enemyDescription: string;
  solution: string;
  attacks: string[];
  techStack: string[];
  results: string[];
  difficulty: "Easy" | "Medium" | "Hard" | "Legendary";
  difficultyColor: string;
  codeUrl: string;
  demoUrl?: string;
  emoji: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "fintech-msme",
    name: "Fintech Platform for MSMEs",
    enemy: "Credit Risk Blindness",
    enemyDescription: "MSMEs struggling to access credit due to lack of robust risk assessment frameworks.",
    solution: "ML-based credit risk assessment using Logistic Regression, Decision Trees, Random Forest & SVM on features like credit history, EMI load, and repayment patterns.",
    attacks: ["Logistic Regression", "Decision Trees", "Random Forest", "SVM"],
    techStack: ["Python", "scikit-learn", "Pandas", "NumPy", "Flask"],
    results: ["Robust risk scoring", "Multi-model comparison", "KYC + GST integration pipeline", "Bureau-derived indicators"],
    difficulty: "Legendary",
    difficultyColor: "text-yellow-400",
    codeUrl: "https://github.com/Purabbbb",
    emoji: "💳",
    featured: true,
  },
  {
    id: "energy-prediction",
    name: "Energy Consumption Prediction",
    enemy: "Power Grid Uncertainty",
    enemyDescription: "Delhi's electricity demand forecasting challenges using weather & historical data.",
    solution: "Hybrid CNN-LSTM model for Delhi's electricity load forecasting, combining convolutional feature extraction with temporal sequence modeling.",
    attacks: ["CNN Feature Extraction", "LSTM Temporal", "Weather Correlation", "Demand Forecasting"],
    techStack: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy"],
    results: ["Strong predictive performance", "Minimal forecasting deviation", "Weather-integrated pipeline", "Scalable architecture"],
    difficulty: "Hard",
    difficultyColor: "text-red-400",
    codeUrl: "https://github.com/Purabbbb",
    emoji: "⚡",
    featured: true,
  },
  {
    id: "kavach",
    name: "KAVACH Cybersecurity App",
    enemy: "Cyber Threats",
    enemyDescription: "Rising phishing links, deepfakes & malicious URLs threatening everyday users.",
    solution: "AI-driven app that detects phishing links, deepfakes & malicious URLs with real-time threat categorization and automated reporting.",
    attacks: ["Phishing Detection", "Deepfake Analysis", "URL Scanning", "Auto Reporting"],
    techStack: ["Python", "Deep Learning", "Flutter", "Firebase"],
    results: ["Real-time threat detection", "Automated incident response", "Multi-category classification"],
    difficulty: "Hard",
    difficultyColor: "text-red-400",
    codeUrl: "https://github.com/Purabbbb",
    emoji: "🛡️",
    featured: true,
  },
  {
    id: "research-summarizer",
    name: "Research Paper Summarizer",
    enemy: "Information Overload",
    enemyDescription: "Researchers drowning in lengthy academic papers with no time to read them all.",
    solution: "AI-powered summarization tool using BART model with RAG-based Q&A chatbot and text-to-speech.",
    attacks: ["BART Summarization", "RAG Pipeline", "Text-to-Speech", "Context QA"],
    techStack: ["Python", "Flask", "PyTorch", "Transformers", "HTML/CSS/JS"],
    results: ["85%+ ROUGE scores", "Real-time summarization", "Interactive Q&A", "TTS integration"],
    difficulty: "Legendary",
    difficultyColor: "text-yellow-400",
    codeUrl: "https://github.com/Purabbbb",
    emoji: "📚",
    featured: true,
  },
  {
    id: "pokemon-portfolio",
    name: "Pokémon Portfolio",
    enemy: "Boring Portfolios",
    enemyDescription: "The sea of identical, template-based developer portfolios with no personality.",
    solution: "Created a gamified Pokémon-themed portfolio that stands out from the crowd with interactive UI and AI chat.",
    attacks: ["Pixel Art Design", "Framer Motion", "Interactive UI", "AI Chat"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    results: ["Unique design", "Full interactivity", "Mobile responsive", "AI chat integration"],
    difficulty: "Medium",
    difficultyColor: "text-orange-400",
    codeUrl: "https://github.com/Purabbbb/Portfolio",
    demoUrl: "#",
    emoji: "🎮",
  },
];

export interface ActiveQuest {
  id: string;
  name: string;
  description: string;
  progress: number;
  techStack: string[];
  status: "Building" | "Experimenting" | "Testing" | "Almost Done";
  statusColor: string;
  emoji: string;
}

export const activeQuestsData: ActiveQuest[] = [
  {
    id: "fintech-expansion",
    name: "Fintech MSME Platform — Full Pipeline",
    description: "Expanding credit risk pipeline with KYC, GST, banking & bureau-derived risk indicators.",
    progress: 65,
    techStack: ["Python", "scikit-learn", "Flask", "SQL"],
    status: "Building",
    statusColor: "#ffcb05",
    emoji: "💳",
  },
  {
    id: "kavach-app",
    name: "KAVACH — AI Cybersecurity App",
    description: "Building real-time phishing detection and deepfake analysis with automated reporting.",
    progress: 45,
    techStack: ["Python", "Deep Learning", "Flutter", "Firebase"],
    status: "Experimenting",
    statusColor: "#a855f7",
    emoji: "🛡️",
  },
  {
    id: "portfolio-upgrade",
    name: "Pokémon Portfolio v2",
    description: "Upgrading portfolio with world-based navigation, memory dex, and advanced interactions.",
    progress: 80,
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    status: "Almost Done",
    statusColor: "#4ecdc4",
    emoji: "🎮",
  },
];

export interface Achievement {
  id: string;
  title: string;
  description: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  rarityColor: string;
  rarityGlow: string;
  category: string;
  emoji: string;
  year: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "nptel-gold",
    title: "NPTEL Gold Medal",
    description: "Gold Medal Certificate in 'Design Thinking and Innovation' from NPTEL.",
    rarity: "Legendary",
    rarityColor: "from-yellow-400 to-amber-600",
    rarityGlow: "shadow-yellow-500/30",
    category: "Academic",
    emoji: "🥇",
    year: "2025",
  },
  {
    id: "ieee-chair",
    title: "IEEE RAS Chairperson",
    description: "Chairperson of Robotics and Automation Society (RAS), IEEE MRU.",
    rarity: "Legendary",
    rarityColor: "from-yellow-400 to-amber-600",
    rarityGlow: "shadow-yellow-500/30",
    category: "Leadership",
    emoji: "👑",
    year: "2025",
  },
  {
    id: "ml-cert",
    title: "ML Professional",
    description: "Machine Learning Professional certification from RapidMiner.",
    rarity: "Epic",
    rarityColor: "from-purple-400 to-violet-600",
    rarityGlow: "shadow-purple-500/30",
    category: "Certification",
    emoji: "🧠",
    year: "2025",
  },
  {
    id: "frontend-bootcamp",
    title: "Frontend Bootcamp",
    description: "Completed The Front End Web Developer Bootcamp on Udemy.",
    rarity: "Epic",
    rarityColor: "from-emerald-400 to-green-600",
    rarityGlow: "shadow-emerald-500/30",
    category: "Certification",
    emoji: "💻",
    year: "2024",
  },
  {
    id: "deloitte-sim",
    title: "Deloitte Analytics",
    description: "Data Analytics job simulation by Forage × Deloitte.",
    rarity: "Rare",
    rarityColor: "from-blue-400 to-cyan-600",
    rarityGlow: "shadow-blue-500/30",
    category: "Simulation",
    emoji: "📊",
    year: "2024",
  },
  {
    id: "deep-learning-cert",
    title: "Deep Learning",
    description: "Deep Learning: Getting Started certification from LinkedIn Learning.",
    rarity: "Rare",
    rarityColor: "from-blue-400 to-indigo-600",
    rarityGlow: "shadow-blue-500/30",
    category: "Certification",
    emoji: "🔥",
    year: "2024",
  },
  {
    id: "ensurex-intern",
    title: "UI/UX Internship",
    description: "UI/UX Developer Intern at Tech EnsureX, Faridabad (June–Aug 2025).",
    rarity: "Epic",
    rarityColor: "from-orange-400 to-red-600",
    rarityGlow: "shadow-orange-500/30",
    category: "Experience",
    emoji: "🏢",
    year: "2025",
  },
  {
    id: "social-media",
    title: "Social Media Manager",
    description: "Managed social media for two university societies.",
    rarity: "Common",
    rarityColor: "from-gray-400 to-slate-600",
    rarityGlow: "shadow-gray-500/20",
    category: "Leadership",
    emoji: "📱",
    year: "2024",
  },
];

export interface MemoryPhoto {
  id: string;
  title: string;
  location: string;
  mood: string;
  placeholder: string;
  gradient: string;
  emoji: string;
}

export const memoryDexData: MemoryPhoto[] = [
  {
    id: "sunset-delhi",
    title: "Golden Hour",
    location: "New Delhi",
    mood: "Serene & warm",
    placeholder: "A breathtaking sunset over the Delhi skyline",
    gradient: "from-orange-500 via-pink-500 to-purple-600",
    emoji: "🌅",
  },
  {
    id: "campus-life",
    title: "Campus Chronicles",
    location: "Manav Rachna University",
    mood: "Nostalgic",
    placeholder: "University campus during golden hour",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    emoji: "🏫",
  },
  {
    id: "street-food",
    title: "Street Stories",
    location: "Chandni Chowk, Delhi",
    mood: "Vibrant & alive",
    placeholder: "Colorful street food stalls at night",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    emoji: "🍜",
  },
  {
    id: "code-setup",
    title: "Battle Station",
    location: "Home Office",
    mood: "Focused",
    placeholder: "Late night coding setup with ambient lighting",
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    emoji: "💻",
  },
  {
    id: "nature-walk",
    title: "Green Escape",
    location: "Aravalli Biodiversity Park",
    mood: "Peaceful",
    placeholder: "Lush green trails through the park",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    emoji: "🌿",
  },
  {
    id: "cricket-match",
    title: "Match Day",
    location: "University Ground",
    mood: "Thrilling",
    placeholder: "Cricket match under floodlights",
    gradient: "from-yellow-400 via-amber-500 to-orange-600",
    emoji: "🏏",
  },
];

export const navItems = [
  { id: "home", label: "Home", emoji: "🏠", area: "Starting Town" },
  { id: "about", label: "Trainer", emoji: "👤", area: "Trainer Card" },
  { id: "skills", label: "Pokédex", emoji: "📖", area: "Skill Lab" },
  { id: "projects", label: "Battles", emoji: "⚔️", area: "Battle Arena" },
  { id: "quests", label: "Quests", emoji: "🗺️", area: "Quest Board" },
  { id: "memories", label: "Memory Dex", emoji: "📸", area: "Photo Shrine" },
  { id: "achievements", label: "Badges", emoji: "🏅", area: "Badge Hall" },
  { id: "contact", label: "PokéCenter", emoji: "🏥", area: "Pokémon Center" },
];

export const chatContext = `
You are an AI clone of Purab Bhatia, a Computer Science student (AI & ML) and aspiring AI/ML engineer.
You should respond in first person as if you ARE Purab. Be friendly, enthusiastic about tech,
and professional. Here's information about you:

- Name: Purab Bhatia
- Role: Aspiring AI/ML Engineer
- Education: B.Tech CSE (AI & ML) at Manav Rachna University, CGPA 8.3/10
- Phone: 9911699911
- Email: bhatiapurab27@gmail.com
- Location: New Delhi, Delhi
- Technical Skills: Python, C++, HTML, CSS, JavaScript, Figma, Photoshop, Premiere Pro, Canva, React, Flask, Flutter, SQL
- ML Skills: Supervised & Unsupervised Learning, Feature Engineering, KMeans, PCA
- Deep Learning: CNNs, RNNs, GRU, Vision Transformers (ViT)
- Tools: TensorFlow, Keras, PyTorch, Pandas, NumPy, scikit-learn, Excel, Jupyter Notebook, Anaconda, Streamlit, GitHub, VS Code
- Projects:
  1. Fintech Platform for MSMEs - ML-based credit risk assessment (Logistic Regression, Decision Trees, Random Forest, SVM)
  2. Energy Consumption Prediction - CNN-LSTM hybrid for Delhi electricity forecasting
  3. KAVACH Cybersecurity App - AI-driven phishing/deepfake detection
  4. Research Paper Summarizer - BART + RAG-based Q&A
- Internship: UI/UX Developer at Tech EnsureX (June-Aug 2025)
- Awards: NPTEL Gold Medal (Design Thinking), IEEE RAS Chairperson
- Certifications: ML Professional (RapidMiner), Frontend Bootcamp (Udemy), Deloitte Analytics (Forage), Deep Learning (LinkedIn)
- Languages: English, Hindi, French (Basic), Sindhi
- Hobbies: Cooking, Content Creation, Photography, Cinematography, Cricket, Video Games
- Currently working on: Fintech MSME platform expansion, KAVACH app

When answering:
- Be conversational and natural, with Purab's personality
- Show enthusiasm about AI/ML and building real-world solutions
- Mention specific projects and achievements when relevant
- Keep responses concise (2-3 sentences usually)
- If asked something you don't know, say you'd be happy to connect on LinkedIn
`;
