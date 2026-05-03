"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { chatContext } from "../data/portfolio";

interface Message {
  role: "user" | "bot";
  content: string;
}

const defaultSuggestions = [
  "What are your top skills?",
  "Tell me about your projects",
  "What tech stack do you use?",
  "Are you open to opportunities?",
];

// Simple local response system (no API key needed)
function generateLocalResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("name") || q.includes("who are you") || q.includes("introduce")) {
    return "Hey! I'm Aryan Bhati, a Computer Science student and aspiring AI Engineer. I love building things at the intersection of AI and web development! 🚀";
  }
  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("know")) {
    return "My main weapons are Python, JavaScript/TypeScript, React, Next.js, and Node.js for web dev. For AI/ML, I work with PyTorch, TensorFlow, and NLP libraries. I'm also comfortable with Flask, PostgreSQL, MongoDB, and Docker! ⚡";
  }
  if (q.includes("project") || q.includes("built") || q.includes("build") || q.includes("work")) {
    return "My proudest battle is the Research Paper Summarizer — it uses BART for summarization and has a RAG-based Q&A chatbot! I've also built an Analytics Dashboard, an Image Classifier, and this very Pokémon Portfolio you're exploring! 🎮";
  }
  if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("university")) {
    return "I'm pursuing my Computer Science degree and have been augmenting it with hands-on projects and certifications. I completed Andrew Ng's ML Specialization and got a cloud architecture cert too! 🎓";
  }
  if (q.includes("hire") || q.includes("opportunit") || q.includes("job") || q.includes("intern") || q.includes("available")) {
    return "Absolutely! I'm always open to exciting opportunities — whether it's internships, full-time roles, or interesting collaborations. Feel free to reach out via LinkedIn or email! Let's build something amazing together. 💼";
  }
  if (q.includes("hobby") || q.includes("interest") || q.includes("fun") || q.includes("free time")) {
    return "When I'm not coding, you'll find me playing Pokémon games (obviously 😄), exploring new AI research papers, contributing to open source, and occasionally doing competitive programming! 🎮";
  }
  if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("connect")) {
    return "You can find me on GitHub (@aryanbhati), LinkedIn (/in/aryanbhati), or shoot me an email at aryan.bhati@email.com. I usually respond within a day! 📬";
  }
  if (q.includes("ai") || q.includes("machine learning") || q.includes("ml") || q.includes("deep learning")) {
    return "AI/ML is my passion! I've worked with CNNs, NLP models (especially BART and transformer architectures), and built RAG-based systems. Currently diving deeper into LLMs and retrieval-augmented generation. The field moves fast and I love keeping up! 🧠";
  }
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("sup")) {
    return "Hey there, trainer! 👋 Welcome to my world. Feel free to ask me anything about my skills, projects, or experience. I'm an open book! 📖";
  }
  if (q.includes("favorite") || q.includes("best") || q.includes("proud")) {
    return "My Research Paper Summarizer is definitely my proudest work — combining NLP, a clean web interface, TTS, and a RAG chatbot all in one tool. It scored 85%+ on ROUGE metrics and actually helps researchers save time! 🏆";
  }

  return "Great question! While I might not have the perfect answer for that specific query, I'd love to chat more about it. Feel free to ask about my skills, projects, education, or how to get in touch. Or better yet, let's connect on LinkedIn! 😊";
}

export default function AIChatSystem() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hey trainer! 👋 I'm Aryan's AI clone. Ask me anything about his skills, projects, or experience!",
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
    if (!question) return;

    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay for natural feel
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 800));

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
      {isOpen && (
        <motion.div
          className="fixed bottom-36 md:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px]"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, var(--bg-secondary), var(--bg-primary))",
              border: "2px solid rgba(255,203,5,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, rgba(255,203,5,0.1), rgba(255,165,0,0.05))",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <motion.span
                className="text-xl"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🤖
              </motion.span>
              <div>
                <h4
                  className="font-bold text-xs"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.5rem",
                    color: "#ffcb05",
                  }}
                >
                  AI CLONE
                </h4>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-[var(--text-muted)]">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[300px] overflow-y-auto p-4 space-y-3">
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

            {/* Suggestions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1">
                {defaultSuggestions.map((suggestion) => (
                  <motion.button
                    key={suggestion}
                    onClick={() => handleSend(suggestion)}
                    className="px-3 py-1.5 rounded-full text-[10px] cursor-pointer"
                    style={{
                      background: "rgba(255,203,5,0.08)",
                      border: "1px solid rgba(255,203,5,0.2)",
                      color: "var(--text-secondary)",
                    }}
                    whileHover={{
                      background: "rgba(255,203,5,0.15)",
                      color: "#ffcb05",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            )}

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
    </>
  );
}
