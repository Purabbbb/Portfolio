"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const quickActions = [
  { label: "🏆 Best projects", query: "Show best projects" },
  { label: "🧠 Explain skills", query: "Explain skills" },
  { label: "💼 Why hire?", query: "Why hire this developer?" },
  { label: "📚 Education", query: "Tell me about education" },
  { label: "🔥 Current work", query: "What are you working on?" },
];

function generateLocalResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("name") || q.includes("who are you") || q.includes("introduce")) {
    return "Hey there! I'm Purab Bhatia — a B.Tech CSE (AI & ML) student at Manav Rachna University. I'm passionate about building end-to-end ML solutions and turning research into real products! 🚀";
  }
  if (q.includes("best project") || q.includes("show") || q.includes("proud") || q.includes("favorite")) {
    return "My crown jewel is the Fintech Platform for MSMEs — an ML-based credit risk assessment system using Logistic Regression, Decision Trees, Random Forest & SVM. I'm also really proud of my CNN-LSTM Energy Prediction model for Delhi's electricity grid and the KAVACH cybersecurity app! 💳⚡🛡️";
  }
  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("explain skill")) {
    return "My arsenal: Python is my primary weapon 🐍, backed by TensorFlow, Keras, PyTorch for deep learning. I'm strong in scikit-learn for classical ML. On the web side, I work with React, Flask, JavaScript, and SQL. For design, I use Figma, Photoshop & Premiere Pro! ⚡";
  }
  if (q.includes("hire") || q.includes("why hire") || q.includes("strength")) {
    return "Three reasons: 1) I build real-world ML systems, not just tutorials — from credit risk models to energy prediction. 2) I bridge AI + product — I can design UIs AND train models. 3) I'm a builder who ships — IEEE chair, NPTEL gold medalist, and multiple ML projects in production. Let's build something together! 💪";
  }
  if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("university")) {
    return "I'm pursuing B.Tech in CSE with AI & ML specialization at Manav Rachna University with a CGPA of 8.3/10. Before that, I scored 94.6% in Class 10 and 81% in Class 12 at St. George's School! 🎓";
  }
  if (q.includes("working on") || q.includes("current") || q.includes("active") || q.includes("quest")) {
    return "Right now I'm building the Fintech MSME platform — expanding it with KYC, GST, banking & bureau-derived risk indicators. Also working on KAVACH, an AI-driven cybersecurity app for phishing & deepfake detection! 🔨";
  }
  if (q.includes("intern") || q.includes("experience") || q.includes("work experience")) {
    return "I interned as a UI/UX Developer at Tech EnsureX in Faridabad (June-Aug 2025). I worked on website UI design, front-end layout improvements, helped boost social media engagement, and gained experience in user outreach and product testing! 🏢";
  }
  if (q.includes("hobby") || q.includes("interest") || q.includes("fun") || q.includes("free time")) {
    return "When I'm not training ML models, you'll find me cooking 🍳, creating content 📸, doing photography and cinematography 🎬, playing cricket 🏏, or gaming 🎮. I'm a creative at heart!";
  }
  if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("connect")) {
    return "You can reach me at bhatiapurab27@gmail.com or call 9911699911. Find me on GitHub (@Purabbbb) or LinkedIn (/in/purab-bhatia/). I'd love to connect! 📬";
  }
  if (q.includes("ai") || q.includes("machine learning") || q.includes("ml") || q.includes("deep learning")) {
    return "AI/ML is my superpower! I've built credit risk models (classical ML), a CNN-LSTM for energy forecasting, phishing detection systems, and NLP summarizers. I know CNNs, RNNs, GRUs, Vision Transformers, and I'm always exploring new architectures! 🧠";
  }
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("sup")) {
    return "Hey trainer! 👋 Welcome to my Pokédex. I'm Purab — ask me anything about my skills, projects, education, or just chat! I'm an open book. What would you like to know?";
  }
  if (q.includes("achievement") || q.includes("award") || q.includes("cert")) {
    return "My top achievements: 🥇 NPTEL Gold Medal in Design Thinking, 👑 Chairperson of IEEE RAS at MRU, 🧠 ML Professional cert from RapidMiner, 📊 Deloitte Analytics simulation, and 💻 Frontend Bootcamp from Udemy!";
  }
  if (q.includes("language")) {
    return "I speak English and Hindi fluently, Sindhi fluently too, and I know basic French! Multilingual trainer here 🌐";
  }

  return "Great question, trainer! I'd love to dive deeper into that. Feel free to ask about my projects, skills, achievements, or how to connect. Or use the quick actions below for the highlights! 😊";
}

export default function AIChatSystem() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hey trainer! 👋 I'm Purab's AI clone. Ask me anything about skills, projects, or experience — or use the quick actions below!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const question = text || input.trim();
    if (!question || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 600 + Math.random() * 600));

    const response = generateLocalResponse(question);
    setMessages((prev) => [...prev, { role: "bot", content: response }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        id="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 md:bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #ffcb05, #ffa500)",
          boxShadow: "0 0 30px rgba(255,203,5,0.3)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
      >
        {isOpen ? "✕" : "💬"}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-36 md:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, var(--bg-secondary), var(--bg-primary))",
                border: "3px solid rgba(255,203,5,0.25)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,203,5,0.05)",
              }}
            >
              {/* Header — Pokémon dialogue style */}
              <div
                className="px-4 py-3 flex items-center gap-3"
                style={{
                  background: "linear-gradient(135deg, rgba(255,203,5,0.12), rgba(255,165,0,0.05))",
                  borderBottom: "2px solid rgba(255,203,5,0.15)",
                }}
              >
                <motion.span
                  className="text-xl"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🤖
                </motion.span>
                <div className="flex-1">
                  <h4
                    className="font-bold text-xs"
                    style={{
                      fontFamily: "var(--font-pixel)",
                      fontSize: "0.5rem",
                      color: "#ffcb05",
                    }}
                  >
                    PROF. PURAB
                  </h4>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-[var(--text-muted)]">Ready to battle questions</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text-muted)] hover:text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Messages */}
              <div className="h-[280px] overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`chat-message ${msg.role === "user" ? "user" : "bot"}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {msg.content}
                  </motion.div>
                ))}

                {isTyping && (
                  <div className="chat-message bot">
                    <motion.div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-2 h-2 rounded-full bg-[var(--text-muted)]"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </motion.div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="px-3 pb-2">
                <div className="flex flex-wrap gap-1">
                  {quickActions.map((action) => (
                    <motion.button
                      key={action.label}
                      onClick={() => handleSend(action.query)}
                      className="px-2.5 py-1.5 rounded-lg text-[10px] cursor-pointer"
                      style={{
                        background: "rgba(255,203,5,0.06)",
                        border: "1px solid rgba(255,203,5,0.15)",
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-pixel)",
                        fontSize: "0.3rem",
                      }}
                      whileHover={{
                        borderColor: "rgba(255,203,5,0.4)",
                        color: "#ffcb05",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {action.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div
                className="p-3 flex gap-2"
                style={{ borderTop: "1px solid var(--border-color)" }}
              >
                <input
                  id="chat-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
                <motion.button
                  id="chat-send"
                  onClick={() => handleSend()}
                  className="px-4 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #ffcb05, #ffa500)",
                    color: "black",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isTyping}
                >
                  ⚡
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
