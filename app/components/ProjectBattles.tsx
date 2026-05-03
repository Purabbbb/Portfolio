"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projectsData, Project } from "../data/portfolio";

const difficultyBadge: Record<string, string> = {
  Easy: "bg-green-500/20 text-green-400 border-green-500/30",
  Medium: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Hard: "bg-red-500/20 text-red-400 border-red-500/30",
  Legendary: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

export default function ProjectBattles() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
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
          className="text-center text-[var(--text-muted)] text-sm mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Each project is a battle won. Click to see the full story.
        </motion.p>

        <div className="space-y-6">
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isExpanded={expandedProject === project.id}
              onToggle={() =>
                setExpandedProject(
                  expandedProject === project.id ? null : project.id
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="battle-card cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onToggle}
    >
      {/* Header Bar */}
      <div
        className="px-5 py-2 flex items-center justify-between"
        style={{
          background: "linear-gradient(90deg, rgba(255,31,31,0.1), transparent)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-bold"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "0.4rem",
              color: "var(--text-muted)",
            }}
          >
            BATTLE #{String(index + 1).padStart(3, "0")}
          </span>
          <span
            className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${difficultyBadge[project.difficulty]}`}
            style={{ fontFamily: "var(--font-pixel)", fontSize: "0.35rem" }}
          >
            {project.difficulty}
          </span>
        </div>
        <motion.span
          className="text-[var(--text-muted)] text-sm"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </div>

      {/* Main Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4 mb-4">
          <motion.span
            className="text-3xl sm:text-4xl"
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
          >
            {project.emoji}
          </motion.span>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-red-400">⚔️ VS</span>
              <span className="text-sm text-[var(--text-secondary)] font-medium">
                {project.enemy}
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)] mb-4">
          {project.enemyDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-[10px] font-medium"
              style={{
                background: "rgba(59,76,202,0.12)",
                border: "1px solid rgba(59,76,202,0.25)",
                color: "#8b9cf7",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div
              className="px-5 sm:px-6 pb-6 pt-2 space-y-5"
              style={{ borderTop: "1px solid var(--border-color)" }}
            >
              {/* Solution */}
              <div>
                <h4
                  className="text-xs mb-2"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.4rem",
                    color: "#4ecdc4",
                    letterSpacing: "2px",
                  }}
                >
                  ✦ SOLUTION
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Attacks / Moves */}
              <div>
                <h4
                  className="text-xs mb-2"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.4rem",
                    color: "#ff6b35",
                    letterSpacing: "2px",
                  }}
                >
                  ⚡ ATTACKS USED
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.attacks.map((attack, i) => (
                    <motion.div
                      key={attack}
                      className="px-3 py-2 rounded-lg text-xs text-center"
                      style={{
                        background: "rgba(255,107,53,0.08)",
                        border: "1px solid rgba(255,107,53,0.2)",
                        color: "var(--text-primary)",
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {attack}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h4
                  className="text-xs mb-2"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.4rem",
                    color: "#22c55e",
                    letterSpacing: "2px",
                  }}
                >
                  🏆 BATTLE RESULTS
                </h4>
                <ul className="space-y-1">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="text-sm text-[var(--text-secondary)] flex items-center gap-2"
                    >
                      <span className="text-green-400 text-xs">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,203,5,0.15), rgba(255,165,0,0.15))",
                    border: "1px solid rgba(255,203,5,0.3)",
                    color: "#ffcb05",
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,203,5,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  🐙 View Code
                </motion.a>
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
                    style={{
                      background: "linear-gradient(135deg, rgba(59,76,202,0.15), rgba(67,56,202,0.15))",
                      border: "1px solid rgba(59,76,202,0.3)",
                      color: "#6d7ce4",
                    }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,76,202,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    🚀 Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
