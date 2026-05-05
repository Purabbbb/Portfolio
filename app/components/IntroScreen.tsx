"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  const [phase, setPhase] = useState<"idle" | "typing" | "ready">("idle");
  const [displayText, setDisplayText] = useState("");
  const [showPokeball, setShowPokeball] = useState(false);
  const fullText = "Welcome Trainer!\nBegin your journey with Purab Bhatia...";

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("typing");
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setPhase("ready");
          setShowPokeball(true);
        }, 500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [phase]);

  const handleStart = useCallback(() => {
    setShowPokeball(false);
    setTimeout(onStart, 600);
  }, [onStart]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #0f0f23 50%, #1a0a2e 100%)" }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,203,5,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,203,5,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 8 + i * 4,
              height: 8 + i * 4,
              background: ["#ffcb05", "#3b4cca", "#4ecdc4", "#a855f7", "#ec4899", "#ff1f1f"][i],
              filter: "blur(2px)",
            }}
            animate={{
              x: [0, ((i * 37) % 200) - 100, 0],
              y: [0, ((i * 53) % 200) - 100, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            initial={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}

        {/* Title */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-pixel)",
              color: "#ffcb05",
              textShadow: "0 0 30px rgba(255,203,5,0.5), 0 0 60px rgba(255,203,5,0.2)",
              fontSize: "clamp(0.8rem, 3vw, 1.6rem)",
            }}
          >
            POKÉFOLIO
          </h1>
          <div
            className="h-1 mx-auto rounded-full"
            style={{
              width: "120px",
              background: "linear-gradient(90deg, transparent, #ffcb05, transparent)",
            }}
          />
        </motion.div>

        {/* Dialogue Box */}
        <motion.div
          className="relative z-10 mt-8 mx-4 max-w-lg w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="dialogue-box p-6 crt-effect">
            <div
              className="min-h-[80px] text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-pixel)", fontSize: "clamp(0.55rem, 1.8vw, 0.75rem)" }}
            >
              {displayText.split("\n").map((line, i) => (
                <p key={i} className="mb-2">
                  {line}
                </p>
              ))}
              {phase === "typing" && (
                <span
                  className="inline-block w-2 h-4 ml-1 animate-pulse"
                  style={{ background: "#ffcb05" }}
                />
              )}
            </div>

            {phase === "ready" && (
              <motion.p
                className="text-xs mt-4 text-center"
                style={{
                  fontFamily: "var(--font-pixel)",
                  color: "var(--text-muted)",
                  fontSize: "0.5rem",
                }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ▼ Press START to continue ▼
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Pokeball + Start Button */}
        <AnimatePresence>
          {showPokeball && (
            <motion.div
              className="relative z-10 mt-8"
              initial={{ y: 40, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <button
                id="start-button"
                onClick={handleStart}
                className="group relative px-8 py-4 rounded-full font-bold text-black cursor-pointer"
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "clamp(0.5rem, 1.5vw, 0.7rem)",
                  background: "linear-gradient(135deg, #ffcb05, #ffa500)",
                  boxShadow: "0 0 30px rgba(255,203,5,0.4), inset 0 -3px 0 rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <span className="relative z-10">START ADVENTURE</span>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #ffcb05, #ffa500)",
                    filter: "blur(15px)",
                    opacity: 0.4,
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Version text */}
        <motion.p
          className="absolute bottom-6 text-center"
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "0.45rem",
            color: "var(--text-muted)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5 }}
        >
          © 2025 Purab Bhatia — v2.0
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
