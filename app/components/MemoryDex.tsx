"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { memoryDexData, MemoryPhoto } from "../data/portfolio";

const heights = [180, 240, 200, 260, 220, 190];

export default function MemoryDex() {
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);

  return (
    <section id="memories" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="section-area-label">📸 Photo Shrine</span>
        </div>
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ◆ Memory Dex ◆
        </motion.h2>

        <motion.p
          className="text-center text-[var(--text-muted)] text-sm mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Captured moments from the journey. Each memory tells a story.
        </motion.p>

        {/* Masonry Grid */}
        <div className="memory-grid">
          {memoryDexData.map((photo, i) => (
            <motion.div
              key={photo.id}
              className="memory-item"
              style={{ height: heights[i % heights.length] }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Gradient placeholder */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${photo.gradient}`}
                style={{ opacity: 0.8 }}
              />

              {/* Pattern overlay for visual interest */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at ${30 + i * 15}% ${40 + i * 10}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                }}
              />

              {/* Emoji as hero icon */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl opacity-30"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {photo.emoji}
              </motion.div>

              {/* Hover info */}
              <div className="memory-info">
                <h4 className="font-bold text-sm text-white mb-1">
                  {photo.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-white/70">
                  <span>📍 {photo.location}</span>
                </div>
              </div>

              {/* Collection badge */}
              <div
                className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "0.3rem",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  #{String(i + 1).padStart(3, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total counter */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "0.4rem",
              color: "var(--text-muted)",
            }}
          >
            {memoryDexData.length} / ∞ memories captured
          </span>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                className="relative max-w-2xl w-full mx-4"
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo display */}
                <div
                  className={`w-full h-[50vh] rounded-2xl bg-gradient-to-br ${selectedPhoto.gradient} relative overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl opacity-30"
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {selectedPhoto.emoji}
                  </motion.div>
                </div>

                {/* Info panel */}
                <div className="p-6 glass-card mt-4 rounded-2xl">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    {selectedPhoto.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="flex items-center gap-1">📍 {selectedPhoto.location}</span>
                    <span className="flex items-center gap-1">✨ {selectedPhoto.mood}</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
                    {selectedPhoto.placeholder}
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
