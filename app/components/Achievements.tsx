"use client";
import { motion } from "framer-motion";
import { achievementsData } from "../data/portfolio";

const rarityEmoji: Record<string, string> = {
  Common: "⚪",
  Rare: "🔵",
  Epic: "🟣",
  Legendary: "🟡",
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span className="section-area-label">🏅 Badge Hall</span>
        </div>
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ◆ Badge Collection ◆
        </motion.h2>

        <motion.p
          className="text-center text-[var(--text-muted)] text-sm mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Certifications, hackathons, and achievements earned along the journey.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievementsData.map((badge, i) => (
            <motion.div
              key={badge.id}
              className={`badge relative rounded-2xl p-5 cursor-default shadow-lg ${badge.rarityGlow}`}
              style={{
                background: "linear-gradient(145deg, var(--bg-card) 0%, var(--bg-secondary) 100%)",
                border: "2px solid var(--border-color)",
              }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                y: -6,
                scale: 1.03,
                borderColor: badge.rarity === "Legendary" ? "#ffcb05" :
                  badge.rarity === "Epic" ? "#a855f7" :
                  badge.rarity === "Rare" ? "#3b82f6" : "#6b7280",
                boxShadow: badge.rarity === "Legendary"
                  ? "0 12px 40px rgba(255,203,5,0.2)"
                  : "0 8px 24px rgba(0,0,0,0.3)",
              }}
            >
              {/* Rarity indicator */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{
                  background: `linear-gradient(90deg, ${
                    badge.rarity === "Legendary" ? "#ffcb05, #ffa500" :
                    badge.rarity === "Epic" ? "#a855f7, #7c3aed" :
                    badge.rarity === "Rare" ? "#3b82f6, #1d4ed8" :
                    "#6b7280, #4b5563"
                  })`,
                }}
              />

              {/* Badge emoji */}
              <motion.div
                className="text-4xl mb-3"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {badge.emoji}
              </motion.div>

              {/* Rarity */}
              <div className="flex items-center gap-1 mb-2">
                <span className="text-xs">{rarityEmoji[badge.rarity]}</span>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.35rem",
                    color: badge.rarity === "Legendary" ? "#ffcb05" :
                      badge.rarity === "Epic" ? "#a855f7" :
                      badge.rarity === "Rare" ? "#3b82f6" : "#6b7280",
                  }}
                >
                  {badge.rarity}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-sm text-[var(--text-primary)] mb-1">
                {badge.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-3">
                {badge.description}
              </p>

              {/* Category & Year */}
              <div className="flex items-center justify-between">
                <span
                  className="px-2 py-0.5 rounded-full text-[9px]"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-muted)",
                  }}
                >
                  {badge.category}
                </span>
                <span
                  className="text-[10px]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                  }}
                >
                  {badge.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
