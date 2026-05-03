"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { navItems } from "../data/portfolio";

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 hidden md:flex items-center justify-between px-8 py-3"
        style={{
          background: "linear-gradient(180deg, rgba(15,15,35,0.95) 0%, rgba(15,15,35,0.8) 100%)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,203,5,0.1)",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate("home")}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-2xl">⚡</span>
          <span
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "0.65rem",
              color: "#ffcb05",
              textShadow: "0 0 10px rgba(255,203,5,0.3)",
            }}
          >
            POKÉFOLIO
          </span>
        </motion.div>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-item flex items-center gap-2 text-sm font-medium rounded-lg transition-colors
                ${activeSection === item.id
                  ? "text-[#ffcb05] bg-[rgba(255,203,5,0.1)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base">{item.emoji}</span>
              <span style={{ fontFamily: "var(--font-pixel)", fontSize: "0.45rem" }}>
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex items-center justify-around py-2 px-2"
        style={{
          background: "linear-gradient(0deg, rgba(15,15,35,0.98) 0%, rgba(15,15,35,0.9) 100%)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,203,5,0.15)",
        }}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              setMobileOpen(false);
            }}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all
              ${activeSection === item.id
                ? "text-[#ffcb05] bg-[rgba(255,203,5,0.1)]"
                : "text-[var(--text-muted)]"
              }`}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-lg">{item.emoji}</span>
            <span style={{ fontFamily: "var(--font-pixel)", fontSize: "0.35rem" }}>
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.nav>
    </>
  );
}
