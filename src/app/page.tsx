"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header, Footer, WhatsAppFab } from "@/components/Header";
import ProfessionalTab from "@/components/ProfessionalTab";
import AthleteTab from "@/components/AthleteTab";

type TabType = "professional" | "athlete";

const TAB_TITLES: Record<TabType, string> = {
  professional: "Pratik Kulkarni | Automation & Agentic AI Testing Engineer",
  athlete: "Pratik Kulkarni | Track & Field Athlete",
};

const TAB_DESCRIPTIONS: Record<TabType, string> = {
  professional:
    "Portfolio of Pratik Kulkarni — Software Test Engineer specializing in Playwright, DeepEval Agentic AI & LLM Evaluation, API Automation, and Enterprise QA.",
  athlete:
    "Pratik Kulkarni — Track & Field Athlete. Achievements, personal bests, training, and gallery.",
};

// Smooth fade + slide variants
const tabVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("professional");

  // Read hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "athlete") setActiveTab("athlete");
  }, []);

  // Sync hash + title + meta description when tab changes
  useEffect(() => {
    window.location.hash = activeTab === "professional" ? "professional" : "athlete";
    document.title = TAB_TITLES[activeTab];

    // Update meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", TAB_DESCRIPTIONS[activeTab]);

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", TAB_TITLES[activeTab]);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", TAB_DESCRIPTIONS[activeTab]);

    // Update background colour
    document.body.style.background =
      activeTab === "professional" ? "#0A0F1F" : "#0D0D0D";

    // Scroll to top on tab switch
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [activeTab]);

  const handleTabChange = useCallback((tab: TabType) => {
    if (tab !== activeTab) setActiveTab(tab);
  }, [activeTab]);

  return (
    <>
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="min-h-screen pt-0">
        <AnimatePresence mode="wait" initial={false}>
          {activeTab === "professional" ? (
            <motion.div
              key="professional"
              variants={tabVariants}
              initial={false}
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <ProfessionalTab />
            </motion.div>
          ) : (
            <motion.div
              key="athlete"
              variants={tabVariants}
              initial={false}
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <AthleteTab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer activeTab={activeTab} />
      <WhatsAppFab />
    </>
  );
}
