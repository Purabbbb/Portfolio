"use client";
import { motion } from "framer-motion";
import { trainerData } from "../data/portfolio";

const statColors: Record<string, string> = {
  hp: "#22c55e",
  attack: "#ff6b35",
  defense: "#3b82f6",
  spAttack: "#a855f7",
  spDefense: "#06b6d4",
  speed: "#ffcb05",
};

export default function TrainerCard() {
  const stats = trainerData.stats;
  const labels = trainerData.statLabels;

  return (
    <section id="about" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ◆ Trainer Card ◆
        </motion.h2>

        <motion.div
          className="trainer-card p-6 sm:p-8 md:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-8">
            {/* Left side - Profile */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl"
                  style={{
                    background: "linear-gradient(135deg, #ffcb05, #ffa500)",
                    boxShadow: "0 0 20px rgba(255,203,5,0.3)",
                  }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  🧑‍💻
                </motion.div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold"
                    style={{ color: "#ffcb05" }}
                  >
                    {trainerData.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">
                    {trainerData.title}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: "linear-gradient(135deg, #ffcb05, #ffa500)",
                        color: "black",
                        fontFamily: "var(--font-pixel)",
                        fontSize: "0.5rem",
                      }}
                    >
                      LV. {trainerData.level}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      {trainerData.badges} Badges
                    </span>
                  </div>
                </div>
              </div>

              {/* XP Bar */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ fontFamily: "var(--font-pixel)", fontSize: "0.45rem", color: "var(--text-muted)" }}>
                    EXP
                  </span>
                  <span style={{ fontFamily: "var(--font-pixel)", fontSize: "0.45rem", color: "#ffcb05" }}>
                    {trainerData.xp.current} / {trainerData.xp.max}
                  </span>
                </div>
                <div className="stat-bar">
                  <motion.div
                    className="stat-bar-fill"
                    style={{
                      background: "linear-gradient(90deg, #ffcb05, #ffa500)",
                      width: `${(trainerData.xp.current / trainerData.xp.max) * 100}%`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(trainerData.xp.current / trainerData.xp.max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                </div>
              </div>

              {/* Bio */}
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {trainerData.bio}
              </p>

              {/* Region */}
              <div className="flex items-center gap-2 text-sm">
                <span>📍</span>
                <span className="text-[var(--text-muted)]">{trainerData.region}</span>
              </div>

              {/* Socials */}
              <div className="flex gap-3">
                {Object.entries(trainerData.socials).map(([key, url]) => (
                  <motion.a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--border-color)",
                    }}
                    whileHover={{
                      scale: 1.15,
                      borderColor: "#ffcb05",
                      boxShadow: "0 0 15px rgba(255,203,5,0.2)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {key === "github" && "🐙"}
                    {key === "linkedin" && "💼"}
                    {key === "email" && "✉️"}
                    {key === "twitter" && "🐦"}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="space-y-4">
              <h4
                className="text-sm font-bold mb-4"
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "0.55rem",
                  color: "var(--text-muted)",
                  letterSpacing: "2px",
                }}
              >
                BASE STATS
              </h4>

              {(Object.keys(stats) as Array<keyof typeof stats>).map((key, i) => (
                <motion.div
                  key={key}
                  className="space-y-1"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "var(--font-pixel)",
                        fontSize: "0.45rem",
                        color: statColors[key],
                      }}
                    >
                      {labels[key]}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: statColors[key],
                      }}
                    >
                      {stats[key]}
                    </span>
                  </div>
                  <div className="stat-bar">
                    <motion.div
                      className="stat-bar-fill"
                      style={{
                        background: `linear-gradient(90deg, ${statColors[key]}, ${statColors[key]}88)`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stats[key]}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Total */}
              <div className="pt-3 mt-3" style={{ borderTop: "1px solid var(--border-color)" }}>
                <div className="flex justify-between items-center">
                  <span
                    style={{
                      fontFamily: "var(--font-pixel)",
                      fontSize: "0.5rem",
                      color: "#ffcb05",
                    }}
                  >
                    TOTAL
                  </span>
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1rem",
                      color: "#ffcb05",
                      textShadow: "0 0 10px rgba(255,203,5,0.3)",
                    }}
                  >
                    {Object.values(stats).reduce((a, b) => a + b, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
