"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { socialLinks } from "@/data/athlete";

type TabType = "professional" | "athlete";

// =============================================
// HEADER — sticky top bar with pill toggle
// =============================================
export function Header({
  activeTab,
  onTabChange,
}: {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}) {
  const isPro = activeTab === "professional";

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left — Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-display font-bold text-white hover:opacity-80 transition-opacity"
        >
          PK<span className="text-white/30">.</span>
        </a>

        {/* Centre — Pill Toggle */}
        <div className="pill-toggle">
          <motion.div
            className="absolute top-1 bottom-1 rounded-full"
            style={{
              background: isPro ? "#22D3EE" : "#FF6A00",
              width: "calc(50% - 4px)",
            }}
            animate={{ x: isPro ? 0 : "calc(100% + 4px)" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          />
          <button
            onClick={() => onTabChange("professional")}
            style={{ color: isPro ? "#000" : "rgba(255,255,255,0.5)" }}
            aria-pressed={isPro}
          >
            IT Professional
          </button>
          <button
            onClick={() => onTabChange("athlete")}
            style={{ color: !isPro ? "#000" : "rgba(255,255,255,0.5)" }}
            aria-pressed={!isPro}
          >
            Athlete
          </button>
        </div>

        {/* Right — Contact */}
        <button
          onClick={scrollToContact}
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
          style={{
            background: isPro
              ? "rgba(34,211,238,0.1)"
              : "rgba(255,106,0,0.1)",
            color: isPro ? "#22D3EE" : "#FF6A00",
            border: `1px solid ${isPro ? "rgba(34,211,238,0.2)" : "rgba(255,106,0,0.2)"}`,
          }}
        >
          <Mail size={14} />
          Contact
        </button>
      </div>
    </header>
  );
}

// =============================================
// FOOTER
// =============================================
export function Footer({ activeTab }: { activeTab: TabType }) {
  const isPro = activeTab === "professional";
  const accent = isPro ? "#22D3EE" : "#FF6A00";

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          © 2026 Pratik Kulkarni. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.linkedin !== "#" || true ? (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors text-sm"
              style={{ ["--hover-color" as string]: accent }}
            >
              LinkedIn
            </a>
          ) : null}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors text-sm"
          >
            Instagram
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-white/40 hover:text-white transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

// =============================================
// WHATSAPP FAB
// =============================================
export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${socialLinks.whatsapp.replace(/[^0-9]/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={24} />
    </a>
  );
}
