"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
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
  const [showPixel, setShowPixel] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="section-area-label">👤 Trainer Card</span>
        </div>
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
          ref={cardRef}
          className="trainer-card p-6 sm:p-8 md:p-10"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-8">
            {/* Left side - Profile */}
            <div className="space-y-5">
              {/* Header with photo */}
              <div className="flex items-start gap-4">
                <motion.div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer"
                  style={{
                    boxShadow: "0 0 25px rgba(255,203,5,0.3)",
                    border: "3px solid #ffcb05",
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPixel(!showPixel)}
                >
                  {/* Avatar display */}
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: showPixel
                        ? "linear-gradient(135deg, #1a2744, #0f1b33)"
                        : "linear-gradient(135deg, #ffcb05, #ffa500)",
                    }}
                  >
                    <span className="text-4xl sm:text-5xl">
                      {showPixel ? "👾" : "🧑‍💻"}
                    </span>
                  </div>

                  {/* Toggle badge */}
                  <div
                    className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-tl-lg"
                    style={{
                      background: "rgba(0,0,0,0.7)",
                      border: "1px solid rgba(255,203,5,0.3)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-pixel)", fontSize: "0.25rem", color: "#ffcb05" }}>
                      {showPixel ? "PIXEL" : "REAL"}
                    </span>
                  </div>
                </motion.div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: "#ffcb05" }}>
                    {trainerData.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">
                    {trainerData.title}
                  </p>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
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

              {/* Education */}
              <div
                className="px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(59,76,202,0.08)",
                  border: "1px solid rgba(59,76,202,0.15)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm">🎓</span>
                  <span style={{ fontFamily: "var(--font-pixel)", fontSize: "0.4rem", color: "#6d7ce4" }}>
                    EDUCATION
                  </span>
                </div>
                <p className="text-sm text-[var(--text-primary)] font-medium">
                  {trainerData.education.degree}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {trainerData.education.university} — CGPA: {trainerData.education.cgpa}
                </p>
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
                    style={{ background: "linear-gradient(90deg, #ffcb05, #ffa500)" }}
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

              {/* Region & Languages */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <span>📍</span>
                  <span className="text-[var(--text-muted)]">{trainerData.region}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>🌐</span>
                  <span className="text-[var(--text-muted)]">{trainerData.languages.join(", ")}</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-3">
                {Object.entries(trainerData.socials).map(([key, url]) => (
                  <motion.a
                    key={key}
                    href={key === "email" ? `mailto:${url}` : url}
                    target={key === "email" ? undefined : "_blank"}
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
                  <span style={{ fontFamily: "var(--font-pixel)", fontSize: "0.5rem", color: "#ffcb05" }}>
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

              {/* Hobbies */}
              <div className="pt-3 mt-2">
                <h4
                  className="text-xs mb-3"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.4rem",
                    color: "var(--text-muted)",
                    letterSpacing: "2px",
                  }}
                >
                  INTERESTS
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {trainerData.hobbies.map((hobby) => (
                    <span
                      key={hobby}
                      className="px-2 py-1 rounded-lg text-[10px]"
                      style={{
                        background: "rgba(255,203,5,0.06)",
                        border: "1px solid rgba(255,203,5,0.12)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
