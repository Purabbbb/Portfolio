"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { skillsData, Skill } from "../data/portfolio";

const categories = ["All", "Programming", "AI/ML", "Web Dev", "Design"];

export default function SkillsPokedex() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.type === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span className="section-area-label">📖 Skill Lab</span>
        </div>
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ◆ Skill Pokédex ◆
        </motion.h2>

        <motion.p
          className="text-center text-[var(--text-muted)] text-sm mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Each skill is a unique creature in my arsenal. Click to inspect!
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "text-black"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "0.45rem",
                background:
                  selectedCategory === cat
                    ? "linear-gradient(135deg, #ffcb05, #ffa500)"
                    : "rgba(255,255,255,0.05)",
                border: `1px solid ${
                  selectedCategory === cat ? "#ffcb05" : "var(--border-color)"
                }`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.id}
                className="skill-card"
                onClick={() => setSelectedSkill(skill)}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.emoji}</span>
                    <div>
                      <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        {skill.name}
                      </h3>
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-white text-[10px] font-bold mt-1 ${skill.typeColor}`}
                      >
                        {skill.type}
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-xs font-bold"
                    style={{
                      fontFamily: "var(--font-pixel)",
                      fontSize: "0.45rem",
                      color: "#ffcb05",
                    }}
                  >
                    LV.{skill.level}
                  </span>
                </div>

                <p className="text-[var(--text-muted)] text-xs mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Level bar */}
                <div className="stat-bar">
                  <motion.div
                    className="stat-bar-fill"
                    style={{
                      background: "linear-gradient(90deg, #ffcb05, #ffa500)",
                      width: `${skill.level}%`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>

                {/* Moves preview */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {skill.moves.slice(0, 3).map((move) => (
                    <span
                      key={move}
                      className="text-[10px] px-2 py-0.5 rounded-md"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      {move}
                    </span>
                  ))}
                  {skill.moves.length > 3 && (
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-md"
                      style={{ color: "#ffcb05" }}
                    >
                      +{skill.moves.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedSkill(null)}
              />
              <motion.div
                className="relative z-10 glass-card p-6 sm:p-8 max-w-md w-full"
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-white transition-colors cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  ✕
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.span
                    className="text-5xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {selectedSkill.emoji}
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#ffcb05" }}>
                      {selectedSkill.name}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-white text-[10px] font-bold mt-1 ${selectedSkill.typeColor}`}
                    >
                      {selectedSkill.type}
                    </span>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                  {selectedSkill.description}
                </p>

                {/* Level */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs mb-2">
                    <span
                      style={{
                        fontFamily: "var(--font-pixel)",
                        fontSize: "0.45rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      POWER LEVEL
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-pixel)",
                        fontSize: "0.45rem",
                        color: "#ffcb05",
                      }}
                    >
                      {selectedSkill.level} / {selectedSkill.maxLevel}
                    </span>
                  </div>
                  <div className="stat-bar" style={{ height: "16px" }}>
                    <motion.div
                      className="stat-bar-fill"
                      style={{
                        background: "linear-gradient(90deg, #ffcb05, #ffa500)",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                {/* Moves */}
                <div className="mb-6">
                  <h4
                    className="text-xs mb-3"
                    style={{
                      fontFamily: "var(--font-pixel)",
                      fontSize: "0.45rem",
                      color: "var(--text-muted)",
                      letterSpacing: "2px",
                    }}
                  >
                    MOVES
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedSkill.moves.map((move, i) => (
                      <motion.div
                        key={move}
                        className="px-3 py-2 rounded-lg text-xs text-center font-medium"
                        style={{
                          background: "rgba(255,203,5,0.08)",
                          border: "1px solid rgba(255,203,5,0.2)",
                          color: "var(--text-primary)",
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {move}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Related Projects */}
                <div>
                  <h4
                    className="text-xs mb-3"
                    style={{
                      fontFamily: "var(--font-pixel)",
                      fontSize: "0.45rem",
                      color: "var(--text-muted)",
                      letterSpacing: "2px",
                    }}
                  >
                    SEEN IN BATTLES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.relatedProjects.map((proj) => (
                      <span
                        key={proj}
                        className="px-3 py-1 rounded-full text-[10px]"
                        style={{
                          background: "rgba(59,76,202,0.15)",
                          border: "1px solid rgba(59,76,202,0.3)",
                          color: "#6d7ce4",
                        }}
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
