"use client";
import { motion } from "framer-motion";
import { activeQuestsData } from "../data/portfolio";

export default function ActiveQuests() {
  return (
    <section id="quests" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="section-area-label">🗺️ Quest Board</span>
        </div>
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ◆ Active Quests ◆
        </motion.h2>

        <motion.p
          className="text-center text-[var(--text-muted)] text-sm mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Currently on these missions. Progress updates in real-time.
        </motion.p>

        <div className="space-y-4">
          {activeQuestsData.map((quest, i) => (
            <motion.div
              key={quest.id}
              className="glass-card p-5 sm:p-6"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4">
                {/* Quest emoji with pulse */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${quest.statusColor}15`,
                    border: `1px solid ${quest.statusColor}30`,
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {quest.emoji}
                </motion.div>

                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-sm text-[var(--text-primary)] truncate">
                      {quest.name}
                    </h3>
                    <span
                      className="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold"
                      style={{
                        fontFamily: "var(--font-pixel)",
                        fontSize: "0.35rem",
                        background: `${quest.statusColor}15`,
                        border: `1px solid ${quest.statusColor}30`,
                        color: quest.statusColor,
                      }}
                    >
                      {quest.status}
                    </span>
                  </div>

                  <p className="text-[var(--text-muted)] text-xs mb-3 leading-relaxed">
                    {quest.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span
                        style={{
                          fontFamily: "var(--font-pixel)",
                          fontSize: "0.35rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        PROGRESS
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: quest.statusColor,
                        }}
                      >
                        {quest.progress}%
                      </span>
                    </div>
                    <div className="quest-progress">
                      <motion.div
                        className="quest-progress-fill"
                        style={{
                          background: `linear-gradient(90deg, ${quest.statusColor}, ${quest.statusColor}88)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${quest.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 + i * 0.2 }}
                      />
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1">
                    {quest.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[9px]"
                        style={{
                          background: "rgba(59,76,202,0.1)",
                          border: "1px solid rgba(59,76,202,0.2)",
                          color: "#8b9cf7",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
