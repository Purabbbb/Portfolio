"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projectsData } from "../data/portfolio";

const difficultyBadge: Record<string, string> = {
  Easy: "bg-green-500/20 text-green-400 border-green-500/30",
  Medium: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Hard: "bg-red-500/20 text-red-400 border-red-500/30",
  Legendary: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

export default function ProjectBattles() {
  const [openedBall, setOpenedBall] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"featured" | "all">("featured");

  const featured = projectsData.filter((p) => p.featured);
  const allProjects = projectsData;

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span className="section-area-label">⚔️ Battle Arena</span>
        </div>
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ◆ Battle Log ◆
        </motion.h2>

        <motion.p
          className="text-center text-[var(--text-muted)] text-sm mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Each project is a battle won. Click to reveal the full story.
        </motion.p>

        {/* View Toggle */}
        <motion.div
          className="flex justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {(["featured", "all"] as const).map((mode) => (
            <motion.button
              key={mode}
              onClick={() => setViewMode(mode)}
              className="px-4 py-2 rounded-full text-xs font-medium cursor-pointer"
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "0.4rem",
                background: viewMode === mode
                  ? "linear-gradient(135deg, #ffcb05, #ffa500)"
                  : "rgba(255,255,255,0.05)",
                color: viewMode === mode ? "black" : "var(--text-secondary)",
                border: `1px solid ${viewMode === mode ? "#ffcb05" : "var(--border-color)"}`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mode === "featured" ? "⚾ Featured Pokéballs" : "🃏 All Cards"}
            </motion.button>
          ))}
        </motion.div>

        {/* ====== FEATURED: POKÉBALL VIEW ====== */}
        {viewMode === "featured" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Pokéball */}
                <motion.div
                  className="pokeball-container relative"
                  onClick={() => setOpenedBall(openedBall === project.id ? null : project.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Floating animation */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <svg
                      className="pokeball-svg w-20 h-20 sm:w-24 sm:h-24"
                      viewBox="0 0 100 100"
                      fill="none"
                      style={{
                        filter: openedBall === project.id
                          ? "drop-shadow(0 0 25px rgba(255,203,5,0.6))"
                          : "drop-shadow(0 0 10px rgba(255,203,5,0.2))",
                        transition: "filter 0.3s ease",
                      }}
                    >
                      {/* Top half */}
                      <path d="M50 2C75 2 95 20 98 44H2C5 20 25 2 50 2Z" fill="#ff1f1f" />
                      <path d="M50 2C75 2 95 20 98 44H2C5 20 25 2 50 2Z" fill="url(#shine)" opacity="0.3" />
                      {/* Bottom half */}
                      <path d="M50 98C25 98 5 80 2 56H98C95 80 75 98 50 98Z" fill="white" />
                      {/* Line */}
                      <rect x="2" y="46" width="96" height="8" fill="#1a1a2e" />
                      {/* Center button */}
                      <circle cx="50" cy="50" r="14" fill="#1a1a2e" stroke="#ffcb05" strokeWidth="3" />
                      <circle cx="50" cy="50" r="8" fill="#ffcb05" />
                      <circle cx="50" cy="50" r="4" fill="white" />
                      <defs>
                        <linearGradient id="shine" x1="20" y1="0" x2="80" y2="50">
                          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>

                  {/* Sparkles on hover */}
                  {openedBall === project.id && (
                    <>
                      {[...Array(4)].map((_, j) => (
                        <motion.div
                          key={j}
                          className="absolute w-1.5 h-1.5 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            x: [0, (j % 2 === 0 ? 1 : -1) * 30],
                            y: [0, (j < 2 ? -1 : 1) * 25],
                          }}
                          transition={{ duration: 0.8, delay: j * 0.1 }}
                          style={{
                            top: "50%",
                            left: "50%",
                            background: "#ffcb05",
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>

                {/* Project label */}
                <span
                  className="text-center text-xs"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.35rem",
                    color: openedBall === project.id ? "#ffcb05" : "var(--text-muted)",
                    transition: "color 0.3s",
                  }}
                >
                  {project.name}
                </span>

                <span
                  className={`px-2 py-0.5 rounded-full text-[8px] font-bold border ${difficultyBadge[project.difficulty]}`}
                  style={{ fontFamily: "var(--font-pixel)", fontSize: "0.3rem" }}
                >
                  {project.difficulty}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Featured project detail panel */}
        <AnimatePresence>
          {viewMode === "featured" && openedBall && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              {(() => {
                const project = projectsData.find((p) => p.id === openedBall);
                if (!project) return null;
                return (
                  <div className="battle-card p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <span className="text-4xl">{project.emoji}</span>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-red-400">⚔️ VS</span>
                          <span className="text-sm text-[var(--text-secondary)]">{project.enemy}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-muted)] mb-4">{project.enemyDescription}</p>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <h4 style={{ fontFamily: "var(--font-pixel)", fontSize: "0.4rem", color: "#4ecdc4", letterSpacing: "2px" }} className="mb-2">
                          ✦ SOLUTION
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <h4 style={{ fontFamily: "var(--font-pixel)", fontSize: "0.4rem", color: "#ff6b35", letterSpacing: "2px" }} className="mb-2">
                          ⚡ ATTACKS USED
                        </h4>
                        <div className="grid grid-cols-2 gap-1.5">
                          {project.attacks.map((a) => (
                            <span key={a} className="px-2 py-1.5 rounded-lg text-[10px] text-center" style={{ background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.2)", color: "var(--text-primary)" }}>
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 style={{ fontFamily: "var(--font-pixel)", fontSize: "0.4rem", color: "#22c55e", letterSpacing: "2px" }} className="mb-2">
                        🏆 RESULTS
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.results.map((r) => (
                          <span key={r} className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                            <span className="text-green-400">✓</span> {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((t) => (
                        <span key={t} className="px-2 py-1 rounded-md text-[10px] font-medium" style={{ background: "rgba(59,76,202,0.12)", border: "1px solid rgba(59,76,202,0.25)", color: "#8b9cf7" }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium" style={{ background: "linear-gradient(135deg, rgba(255,203,5,0.15), rgba(255,165,0,0.15))", border: "1px solid rgba(255,203,5,0.3)", color: "#ffcb05" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        🐙 View Code
                      </motion.a>
                      {project.demoUrl && (
                        <motion.a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium" style={{ background: "linear-gradient(135deg, rgba(59,76,202,0.15), rgba(67,56,202,0.15))", border: "1px solid rgba(59,76,202,0.3)", color: "#6d7ce4" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          🚀 Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ====== ALL: 3D FLIP CARD VIEW ====== */}
        {viewMode === "all" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="card-3d"
                style={{ height: 280 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className={`card-3d-inner w-full h-full relative ${flippedCard === project.id ? "flipped" : ""}`}
                  onClick={() => setFlippedCard(flippedCard === project.id ? null : project.id)}
                >
                  {/* Front */}
                  <div
                    className="card-3d-front absolute inset-0 rounded-2xl p-6 cursor-pointer flex flex-col items-center justify-center gap-4"
                    style={{
                      background: "linear-gradient(145deg, var(--bg-card), var(--bg-secondary))",
                      border: "2px solid var(--border-color)",
                    }}
                  >
                    <motion.span
                      className="text-5xl"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      {project.emoji}
                    </motion.span>
                    <h3 className="font-bold text-base text-center text-[var(--text-primary)]">
                      {project.name}
                    </h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold border ${difficultyBadge[project.difficulty]}`} style={{ fontFamily: "var(--font-pixel)", fontSize: "0.35rem" }}>
                      {project.difficulty}
                    </span>
                    <div className="flex flex-wrap justify-center gap-1 mt-1">
                      {project.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[9px]" style={{ background: "rgba(59,76,202,0.1)", color: "#8b9cf7" }}>{t}</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-[var(--text-muted)] mt-auto" style={{ fontFamily: "var(--font-pixel)", fontSize: "0.3rem" }}>
                      TAP TO FLIP →
                    </span>
                  </div>

                  {/* Back */}
                  <div
                    className="card-3d-back absolute inset-0 rounded-2xl p-5 cursor-pointer overflow-y-auto"
                    style={{
                      background: "linear-gradient(145deg, var(--bg-secondary), var(--bg-card))",
                      border: "2px solid #ffcb05",
                      boxShadow: "0 0 20px rgba(255,203,5,0.1)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{project.emoji}</span>
                      <h3 className="font-bold text-sm text-[#ffcb05]">{project.name}</h3>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mb-3 leading-relaxed">{project.enemyDescription}</p>
                    <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">{project.solution}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.techStack.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded text-[8px]" style={{ background: "rgba(59,76,202,0.1)", color: "#8b9cf7" }}>{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] px-3 py-1.5 rounded-lg" style={{ background: "rgba(255,203,5,0.1)", color: "#ffcb05", border: "1px solid rgba(255,203,5,0.2)" }} onClick={(e) => e.stopPropagation()}>
                        🐙 Code
                      </a>
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] px-3 py-1.5 rounded-lg" style={{ background: "rgba(59,76,202,0.1)", color: "#6d7ce4", border: "1px solid rgba(59,76,202,0.2)" }} onClick={(e) => e.stopPropagation()}>
                          🚀 Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
