// ===== PORTFOLIO DATA =====
// Update this file with your real information

export const trainerData = {
  name: "Aryan Bhati",
  title: "Full-Stack Developer & AI Engineer",
  level: 42,
  xp: {
    current: 8500,
    max: 10000,
  },
  badges: 8,
  region: "Kanto University of Technology",
  bio: "A passionate Computer Science student on a quest to master the digital world. Specializing in AI/ML, full-stack development, and building products that make a difference.",
  stats: {
    hp: 95,
    attack: 88,
    defense: 82,
    spAttack: 92,
    spDefense: 85,
    speed: 90,
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
    github: "https://github.com/aryanbhati",
    linkedin: "https://linkedin.com/in/aryanbhati",
    email: "aryan.bhati@email.com",
    twitter: "https://twitter.com/aryanbhati",
  },
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
    level: 90,
    maxLevel: 100,
    description: "A versatile creature proficient in scripting, automation, and building intelligent systems.",
    moves: ["Data Analysis", "Scripting", "API Development", "ML Pipelines"],
    relatedProjects: ["research-summarizer", "ai-chatbot"],
    emoji: "🐍",
  },
  {
    id: "javascript",
    name: "JavaScriptor",
    type: "Programming",
    typeColor: "type-electric",
    level: 88,
    maxLevel: 100,
    description: "A dynamic creature that brings interactivity and life to the web.",
    moves: ["DOM Manipulation", "Async/Await", "Event Handling", "Module Systems"],
    relatedProjects: ["portfolio", "web-dashboard"],
    emoji: "⚡",
  },
  {
    id: "typescript",
    name: "TypeGuard",
    type: "Programming",
    typeColor: "type-ice",
    level: 82,
    maxLevel: 100,
    description: "An evolved form of JavaScriptor with type safety and enhanced powers.",
    moves: ["Type Safety", "Generics", "Interfaces", "Decorators"],
    relatedProjects: ["portfolio", "enterprise-app"],
    emoji: "🛡️",
  },
  {
    id: "cpp",
    name: "CeePlusaur",
    type: "Programming",
    typeColor: "type-steel",
    level: 75,
    maxLevel: 100,
    description: "A powerful creature built for performance-critical systems.",
    moves: ["Memory Management", "OOP", "STL", "Competitive Programming"],
    relatedProjects: ["dsa-solutions"],
    emoji: "⚙️",
  },
  // AI/ML
  {
    id: "tensorflow",
    name: "TensorFlow",
    type: "AI/ML",
    typeColor: "type-psychic",
    level: 78,
    maxLevel: 100,
    description: "A mystical creature that can predict and classify patterns in data.",
    moves: ["Neural Networks", "CNNs", "Transfer Learning", "Model Deployment"],
    relatedProjects: ["image-classifier", "research-summarizer"],
    emoji: "🧠",
  },
  {
    id: "pytorch",
    name: "PyTorchion",
    type: "AI/ML",
    typeColor: "type-fire",
    level: 80,
    maxLevel: 100,
    description: "A fiery research companion for cutting-edge deep learning experiments.",
    moves: ["Custom Models", "Training Loops", "GPU Acceleration", "NLP"],
    relatedProjects: ["research-summarizer", "sentiment-analysis"],
    emoji: "🔥",
  },
  {
    id: "nlp",
    name: "NLPsychic",
    type: "AI/ML",
    typeColor: "type-psychic",
    level: 76,
    maxLevel: 100,
    description: "A telepathic creature that understands and generates human language.",
    moves: ["Text Classification", "Summarization", "QA Systems", "RAG"],
    relatedProjects: ["research-summarizer", "ai-chatbot"],
    emoji: "💬",
  },
  // Web Dev
  {
    id: "react",
    name: "Reacteon",
    type: "Web Dev",
    typeColor: "type-water",
    level: 90,
    maxLevel: 100,
    description: "A fluid creature that builds component-based user interfaces with elegance.",
    moves: ["Hooks", "Context API", "Server Components", "State Management"],
    relatedProjects: ["portfolio", "web-dashboard"],
    emoji: "⚛️",
  },
  {
    id: "nextjs",
    name: "Nextorus",
    type: "Web Dev",
    typeColor: "type-dark",
    level: 85,
    maxLevel: 100,
    description: "An evolved Reacteon with server-side rendering and full-stack powers.",
    moves: ["SSR", "API Routes", "App Router", "Middleware"],
    relatedProjects: ["portfolio", "e-commerce"],
    emoji: "▲",
  },
  {
    id: "nodejs",
    name: "Nodejsaur",
    type: "Web Dev",
    typeColor: "type-grass",
    level: 83,
    maxLevel: 100,
    description: "A resilient creature powering backend services and real-time apps.",
    moves: ["REST APIs", "WebSockets", "Authentication", "Database Integration"],
    relatedProjects: ["web-dashboard", "chat-app"],
    emoji: "🌿",
  },
  // Design
  {
    id: "figma",
    name: "Figmancer",
    type: "Design",
    typeColor: "type-fairy",
    level: 72,
    maxLevel: 100,
    description: "A creative creature that transforms ideas into beautiful prototypes.",
    moves: ["UI Design", "Prototyping", "Design Systems", "User Flows"],
    relatedProjects: ["portfolio", "mobile-app-design"],
    emoji: "🎨",
  },
  {
    id: "tailwind",
    name: "Tailwindra",
    type: "Design",
    typeColor: "type-ice",
    level: 88,
    maxLevel: 100,
    description: "A swift creature that styles at the speed of thought.",
    moves: ["Responsive Design", "Custom Themes", "Animations", "Dark Mode"],
    relatedProjects: ["portfolio", "landing-pages"],
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
}

export const projectsData: Project[] = [
  {
    id: "research-summarizer",
    name: "Research Summarizer",
    enemy: "Information Overload",
    enemyDescription: "Researchers drowning in lengthy academic papers with no time to read them all.",
    solution: "Built an AI-powered summarization tool using BART model with RAG-based Q&A chatbot.",
    attacks: ["BART Summarization", "RAG Pipeline", "Text-to-Speech", "Context-Aware QA"],
    techStack: ["Python", "Flask", "PyTorch", "Transformers", "HTML/CSS/JS"],
    results: ["85%+ ROUGE scores", "Real-time summarization", "Interactive Q&A", "TTS integration"],
    difficulty: "Legendary",
    difficultyColor: "text-yellow-400",
    codeUrl: "https://github.com/aryanbhati/research-summarizer",
    demoUrl: "#",
    emoji: "📚",
  },
  {
    id: "ai-chatbot",
    name: "AI Clone Chatbot",
    enemy: "Repetitive Questions",
    enemyDescription: "Recruiters and visitors asking the same questions about the developer repeatedly.",
    solution: "Created an AI-powered chatbot that answers questions about the developer naturally.",
    attacks: ["NLP Processing", "Context Retrieval", "Personality Mimic", "Fast Inference"],
    techStack: ["Python", "OpenAI API", "Next.js", "TypeScript"],
    results: ["Natural conversations", "90% query accuracy", "Personality-matched responses"],
    difficulty: "Hard",
    difficultyColor: "text-red-400",
    codeUrl: "https://github.com/aryanbhati/ai-chatbot",
    emoji: "🤖",
  },
  {
    id: "web-dashboard",
    name: "Analytics Dashboard",
    enemy: "Data Chaos",
    enemyDescription: "Businesses struggling to visualize and make sense of their data streams.",
    solution: "Built a real-time analytics dashboard with interactive charts and filtering.",
    attacks: ["Real-time Updates", "Chart Rendering", "Data Filtering", "Export Reports"],
    techStack: ["React", "Node.js", "PostgreSQL", "Chart.js", "WebSocket"],
    results: ["Real-time data sync", "10+ chart types", "Custom report generation"],
    difficulty: "Hard",
    difficultyColor: "text-red-400",
    codeUrl: "https://github.com/aryanbhati/analytics-dashboard",
    demoUrl: "#",
    emoji: "📊",
  },
  {
    id: "portfolio",
    name: "Pokémon Portfolio",
    enemy: "Boring Portfolios",
    enemyDescription: "The sea of identical, template-based developer portfolios with no personality.",
    solution: "Created a gamified Pokémon-themed portfolio that stands out from the crowd.",
    attacks: ["Pixel Art Design", "Framer Motion", "Interactive UI", "AI Chat Integration"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    results: ["Unique design language", "Full interactivity", "Mobile responsive", "AI-powered chat"],
    difficulty: "Medium",
    difficultyColor: "text-orange-400",
    codeUrl: "https://github.com/aryanbhati/pokemon-portfolio",
    demoUrl: "#",
    emoji: "🎮",
  },
  {
    id: "image-classifier",
    name: "Image Classifier",
    enemy: "Manual Classification",
    enemyDescription: "Hours spent manually sorting and classifying thousands of images.",
    solution: "Built a CNN-based image classifier with transfer learning for rapid deployment.",
    attacks: ["CNN Architecture", "Transfer Learning", "Data Augmentation", "Batch Processing"],
    techStack: ["Python", "TensorFlow", "Keras", "Flask", "Docker"],
    results: ["95% accuracy", "Fast inference", "Easy deployment", "Custom training UI"],
    difficulty: "Medium",
    difficultyColor: "text-orange-400",
    codeUrl: "https://github.com/aryanbhati/image-classifier",
    emoji: "🖼️",
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
    id: "hackathon-winner",
    title: "Hackathon Champion",
    description: "Won first place at a national-level hackathon with an AI-powered solution.",
    rarity: "Legendary",
    rarityColor: "from-yellow-400 to-amber-600",
    rarityGlow: "shadow-yellow-500/30",
    category: "Competition",
    emoji: "🏆",
    year: "2025",
  },
  {
    id: "ml-cert",
    title: "ML Specialization",
    description: "Completed Andrew Ng's Machine Learning Specialization on Coursera.",
    rarity: "Epic",
    rarityColor: "from-purple-400 to-violet-600",
    rarityGlow: "shadow-purple-500/30",
    category: "Certification",
    emoji: "🎓",
    year: "2025",
  },
  {
    id: "open-source",
    title: "Open Source Contributor",
    description: "Contributed to major open-source projects with merged pull requests.",
    rarity: "Rare",
    rarityColor: "from-blue-400 to-cyan-600",
    rarityGlow: "shadow-blue-500/30",
    category: "Community",
    emoji: "🌟",
    year: "2024",
  },
  {
    id: "fullstack-cert",
    title: "Full-Stack Mastery",
    description: "Completed advanced full-stack development certification.",
    rarity: "Epic",
    rarityColor: "from-emerald-400 to-green-600",
    rarityGlow: "shadow-emerald-500/30",
    category: "Certification",
    emoji: "💻",
    year: "2024",
  },
  {
    id: "dean-list",
    title: "Dean's List",
    description: "Consistently maintained top academic performance across semesters.",
    rarity: "Rare",
    rarityColor: "from-blue-400 to-indigo-600",
    rarityGlow: "shadow-blue-500/30",
    category: "Academic",
    emoji: "📜",
    year: "2024",
  },
  {
    id: "100-days-code",
    title: "100 Days of Code",
    description: "Completed the #100DaysOfCode challenge with daily commits.",
    rarity: "Common",
    rarityColor: "from-gray-400 to-slate-600",
    rarityGlow: "shadow-gray-500/20",
    category: "Personal",
    emoji: "🔥",
    year: "2024",
  },
  {
    id: "workshop-speaker",
    title: "Workshop Speaker",
    description: "Led workshops on web development and AI for university students.",
    rarity: "Rare",
    rarityColor: "from-pink-400 to-rose-600",
    rarityGlow: "shadow-pink-500/30",
    category: "Community",
    emoji: "🎤",
    year: "2025",
  },
  {
    id: "cloud-cert",
    title: "Cloud Architect",
    description: "Earned AWS/GCP cloud architecture certification.",
    rarity: "Epic",
    rarityColor: "from-orange-400 to-red-600",
    rarityGlow: "shadow-orange-500/30",
    category: "Certification",
    emoji: "☁️",
    year: "2025",
  },
];

export const navItems = [
  { id: "home", label: "Home", emoji: "🏠" },
  { id: "about", label: "Trainer", emoji: "👤" },
  { id: "skills", label: "Pokédex", emoji: "📖" },
  { id: "projects", label: "Battles", emoji: "⚔️" },
  { id: "achievements", label: "Badges", emoji: "🏅" },
  { id: "contact", label: "Contact", emoji: "📬" },
];

export const chatContext = `
You are an AI clone of Aryan Bhati, a Computer Science student and aspiring AI engineer. 
You should respond in first person as if you ARE Aryan. Be friendly, enthusiastic about tech, 
and professional. Here's information about you:

- Name: Aryan Bhati
- Role: Full-Stack Developer & AI Engineer
- Education: Computer Science undergraduate
- Skills: Python, JavaScript/TypeScript, React, Next.js, Node.js, TensorFlow, PyTorch, NLP, 
  Machine Learning, Flask, PostgreSQL, MongoDB, Docker, Git
- Projects: Research Paper Summarizer (BART + RAG), AI Chatbot, Analytics Dashboard, 
  Pokémon Portfolio, Image Classifier
- Interests: AI/ML, Web Development, Open Source, Competitive Programming
- Achievements: Hackathon winner, ML Specialization, Open Source Contributor, 
  Cloud Architecture certification
- Currently learning: LLMs, RAG systems, System Design
- Fun facts: Love Pokémon games, enjoy building creative side projects, 
  believe in learning by building

When answering:
- Be conversational and natural
- Show enthusiasm about your work
- Give specific examples when possible
- Keep responses concise (2-3 sentences usually)
- If asked something you don't know, say you'd be happy to connect and discuss more
`;
