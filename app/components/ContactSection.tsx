"use client";
import { motion } from "framer-motion";
import { trainerData } from "../data/portfolio";
import { useState } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with a backend or service like EmailJS
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <span className="section-area-label">🏥 Pokémon Center</span>
        </div>
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ◆ PokéCenter ◆
        </motion.h2>

        <motion.p
          className="text-center text-[var(--text-muted)] text-sm mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Want to team up? Send a message or connect on social platforms!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6">
              <h3
                className="text-sm mb-4"
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "0.5rem",
                  color: "#ffcb05",
                  letterSpacing: "2px",
                }}
              >
                QUICK CONNECT
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "bhatiapurab27@gmail.com",
                    href: `mailto:${trainerData.socials.email}`,
                  },
                  {
                    icon: "🐙",
                    label: "GitHub",
                    value: "github.com/Purabbbb",
                    href: trainerData.socials.github,
                  },
                  {
                    icon: "💼",
                    label: "LinkedIn",
                    value: "linkedin.com/in/purab-bhatia",
                    href: trainerData.socials.linkedin,
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "9911699911",
                    href: "tel:9911699911",
                  },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl transition-all"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--border-color)",
                    }}
                    whileHover={{
                      borderColor: "#ffcb05",
                      x: 5,
                      boxShadow: "0 0 15px rgba(255,203,5,0.1)",
                    }}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <span
                        className="text-xs block"
                        style={{
                          fontFamily: "var(--font-pixel)",
                          fontSize: "0.4rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {item.label}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)]">
                        {item.value}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="glass-card p-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-[var(--text-secondary)]">
                Currently available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <h3
                className="text-sm mb-4"
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "0.5rem",
                  color: "#ffcb05",
                  letterSpacing: "2px",
                }}
              >
                SEND MESSAGE
              </h3>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs mb-1"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.4rem",
                    color: "var(--text-muted)",
                  }}
                >
                  YOUR NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Ash Ketchum"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs mb-1"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.4rem",
                    color: "var(--text-muted)",
                  }}
                >
                  YOUR EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="ash@pokemon.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs mb-1"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.4rem",
                    color: "var(--text-muted)",
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="I want to challenge you to a coding battle!"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-sm cursor-pointer"
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "0.55rem",
                  background: submitted
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "linear-gradient(135deg, #ffcb05, #ffa500)",
                  color: "black",
                  boxShadow: "0 0 20px rgba(255,203,5,0.2)",
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,203,5,0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? "✓ Message Sent!" : "Send Message ⚡"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 text-center"
          style={{ borderTop: "1px solid var(--border-color)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xs mb-2"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "0.45rem",
              color: "var(--text-muted)",
            }}
          >
            Built with ⚡ by {trainerData.name}
          </p>
          <p className="text-[10px] text-[var(--text-muted)]">
            Next.js • TypeScript • Tailwind CSS • Framer Motion
          </p>
          <div className="flex justify-center gap-1 mt-3">
            {["⚡", "🔥", "💧", "🌿", "✨"].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
