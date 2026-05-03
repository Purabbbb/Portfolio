"use client";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "./components/IntroScreen";
import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticleBackground";
import CursorGlow from "./components/CursorGlow";
import HeroSection from "./components/HeroSection";
import TrainerCard from "./components/TrainerCard";
import SkillsPokedex from "./components/SkillsPokedex";
import ProjectBattles from "./components/ProjectBattles";
import ActiveQuests from "./components/ActiveQuests";
import MemoryDex from "./components/MemoryDex";
import Achievements from "./components/Achievements";
import ContactSection from "./components/ContactSection";
import AIChatSystem from "./components/AIChatSystem";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section on scroll
  useEffect(() => {
    if (showIntro) return;

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "quests", "memories", "achievements", "contact"];
      const scrollY = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showIntro]);

  const handleNavigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleStart = useCallback(() => {
    setShowIntro(false);
  }, []);

  // Section divider component
  const SectionDivider = ({ color = "rgba(255,203,5,0.15)" }: { color?: string }) => (
    <div className="max-w-4xl mx-auto px-8">
      <div
        className="h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
    </div>
  );

  return (
    <>
      {/* Intro Screen */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <IntroScreen onStart={handleStart} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ParticleBackground />
          <CursorGlow />
          <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

          <main className="relative z-10">
            <HeroSection />
            <SectionDivider />

            <TrainerCard />
            <SectionDivider color="rgba(59,76,202,0.15)" />

            <SkillsPokedex />
            <SectionDivider color="rgba(255,31,31,0.15)" />

            <ProjectBattles />
            <SectionDivider color="rgba(78,205,196,0.15)" />

            <ActiveQuests />
            <SectionDivider color="rgba(168,85,247,0.15)" />

            <MemoryDex />
            <SectionDivider color="rgba(236,72,153,0.15)" />

            <Achievements />
            <SectionDivider color="rgba(78,205,196,0.15)" />

            <ContactSection />

            {/* Bottom padding for mobile nav */}
            <div className="h-20 md:h-0" />
          </main>

          <AIChatSystem />
        </motion.div>
      )}
    </>
  );
}
