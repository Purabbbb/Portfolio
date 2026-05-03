"use client";
import { motion } from "framer-motion";
import { trainerData } from "../data/portfolio";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16"
    >
      {/* Pokeball decorative element */}
      <motion.div
        className="absolute top-20 right-[10%] w-32 h-32 opacity-5 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="#ffcb05" strokeWidth="3" />
          <line x1="2" y1="50" x2="98" y2="50" stroke="#ffcb05" strokeWidth="3" />
          <circle cx="50" cy="50" r="12" stroke="#ffcb05" strokeWidth="3" />
          <circle cx="50" cy="50" r="6" fill="#ffcb05" />
        </svg>
      </motion.div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Greeting */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "0.45rem",
              background: "rgba(255,203,5,0.1)",
              border: "1px solid rgba(255,203,5,0.2)",
              color: "#ffcb05",
            }}
          >
            ⚡ A wild developer appeared!
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4"
          style={{
            background: "linear-gradient(135deg, #ffcb05 0%, #ffa500 50%, #ff6b35 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {trainerData.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-lg sm:text-xl text-[var(--text-secondary)] mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {trainerData.title}
        </motion.p>

        {/* Quick stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { label: "Level", value: trainerData.level, emoji: "⚡" },
            { label: "Badges", value: trainerData.badges, emoji: "🏅" },
            { label: "Projects", value: "5+", emoji: "⚔️" },
            { label: "Skills", value: "12+", emoji: "📖" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border-color)",
                minWidth: "80px",
              }}
              whileHover={{
                borderColor: "#ffcb05",
                boxShadow: "0 0 15px rgba(255,203,5,0.1)",
                y: -3,
              }}
            >
              <span className="text-lg">{stat.emoji}</span>
              <span
                className="font-bold text-lg"
                style={{ color: "#ffcb05", fontFamily: "var(--font-mono)" }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "0.35rem",
                  color: "var(--text-muted)",
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-xl font-bold text-sm"
            style={{
              background: "linear-gradient(135deg, #ffcb05, #ffa500)",
              color: "black",
              fontFamily: "var(--font-pixel)",
              fontSize: "0.55rem",
              boxShadow: "0 0 20px rgba(255,203,5,0.3)",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,203,5,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Battles ⚔️
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-xl font-bold text-sm"
            style={{
              background: "rgba(59,76,202,0.15)",
              border: "2px solid rgba(59,76,202,0.3)",
              color: "#6d7ce4",
              fontFamily: "var(--font-pixel)",
              fontSize: "0.55rem",
            }}
            whileHover={{
              scale: 1.05,
              borderColor: "#3b4cca",
              boxShadow: "0 0 20px rgba(59,76,202,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me 📬
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[var(--text-muted)] text-xs" style={{ fontFamily: "var(--font-pixel)", fontSize: "0.4rem" }}>
          ▼ Scroll to explore ▼
        </span>
      </motion.div>
    </section>
  );
}
