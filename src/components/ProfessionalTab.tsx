"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Download,
  Mail,
  ArrowRight,
  X,
  Send,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/BrandIcons";
import {
  RevealOnScroll,
  AnimatedCounter,
  SkillRing,
  SectionHeading,
  TechChip,
} from "@/components/ui";
import {
  professionalHero,
  professionalAbout,
  professionalSkills,
  professionalProjects,
  professionalCertifications,
  professionalEducation,
  type Project,
} from "@/data/professional";
import { socialLinks } from "@/data/athlete";

const ACCENT = "#22D3EE";
const ACCENT2 = "#7C3AED";
const ACCENT_AI = "#38BDF8";
const CARD_BG = "#121A2F";

// =============================================
// PROJECT DETAIL MODAL
// =============================================
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content p-6 sm:p-8"
        style={{ background: CARD_BG, border: `1px solid ${ACCENT}20` }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 inline-block"
              style={{
                background: `${ACCENT}15`,
                color: ACCENT,
                border: `1px solid ${ACCENT}30`,
              }}
            >
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-1"
              style={{ color: ACCENT }}
            >
              The Problem
            </h4>
            <p className="text-white/60 text-sm">{project.detail.problem}</p>
          </div>
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-1"
              style={{ color: ACCENT }}
            >
              The Approach
            </h4>
            <p className="text-white/60 text-sm">{project.detail.approach}</p>
          </div>
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-1"
              style={{ color: ACCENT }}
            >
              Tools & Technologies
            </h4>
            <p className="text-white/60 text-sm font-mono text-xs">
              {project.detail.tools}
            </p>
          </div>
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-1"
              style={{ color: ACCENT2 }}
            >
              Key Outcome & Metrics
            </h4>
            <p className="text-white/80 text-sm font-semibold">
              {project.detail.outcome}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((t) => (
            <TechChip key={t} label={t} accentColor={ACCENT} />
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: `${ACCENT}15`,
              color: ACCENT,
              border: `1px solid ${ACCENT}30`,
            }}
          >
            <GithubIcon size={14} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: `${ACCENT2}15`,
              color: ACCENT2,
              border: `1px solid ${ACCENT2}30`,
            }}
          >
            <ExternalLink size={14} /> Live / Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// =============================================
// HERO
// =============================================
function ProHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pro-grid-bg overflow-hidden">
      <div className="glow-orb glow-orb-pro-1" />
      <div className="glow-orb glow-orb-pro-2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Certification Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 backdrop-blur-md"
          style={{
            background: `${ACCENT}15`,
            border: `1px solid ${ACCENT}35`,
            color: ACCENT,
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Sparkles size={14} />
          <span>{professionalHero.badge}</span>
          <span className="text-white/30">•</span>
          <span>{professionalHero.location}</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {professionalHero.name}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-2xl font-semibold mb-4"
          style={{ color: ACCENT }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          {professionalHero.headline}
        </motion.p>

        <motion.p
          className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          {professionalHero.summary}
        </motion.p>

        {/* Quick Contact & Action Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
            style={{ background: ACCENT, color: "#0A0F1F" }}
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#skills"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border transition-all hover:scale-105"
            style={{
              borderColor: `${ACCENT}40`,
              color: ACCENT,
              background: `${ACCENT}08`,
            }}
          >
            Explore Skillset
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105"
            style={{
              background: `${ACCENT2}20`,
              color: ACCENT2,
              border: `1px solid ${ACCENT2}40`,
            }}
          >
            <Mail size={16} /> Contact Me
          </a>
        </motion.div>

        {/* Quick Contact Snippet */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <a
            href={`mailto:${professionalHero.email}`}
            className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <Mail size={13} /> {professionalHero.email}
          </a>
          <span>•</span>
          <a
            href={`tel:${professionalHero.phone}`}
            className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <Phone size={13} /> {professionalHero.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================
// ABOUT
// =============================================
function ProAbout() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#0A0F1F" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading icon="👨‍💻" title="About Me" accent={ACCENT} />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div
            className="glass-card pro-glow p-6 sm:p-8 mb-8"
            style={{ background: CARD_BG }}
          >
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
              {professionalAbout.bio}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {professionalAbout.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-white/70">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: ACCENT }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm pt-4 border-t border-white/5">
              <span className="text-white/50">
                📍 {professionalAbout.location}
              </span>
              <span className="text-white/50">
                💼 {professionalAbout.role}
              </span>
              <span className="text-cyan-400 font-semibold">
                🎖️ {professionalAbout.certification}
              </span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {professionalAbout.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card pro-glow p-5 text-center"
                style={{ background: CARD_BG }}
              >
                <div
                  className="counter-value text-3xl sm:text-4xl mb-1 font-bold"
                  style={{ color: i === 0 ? ACCENT : i === 1 ? ACCENT2 : ACCENT_AI }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

// =============================================
// SKILLS
// =============================================
function ProSkills() {
  const groups = [
    {
      data: professionalSkills.agenticAi,
      accent: ACCENT_AI,
      highlight: true,
      badge: "⭐ Spotlight: Agentic AI & DeepEval",
    },
    {
      data: professionalSkills.automation,
      accent: ACCENT,
      highlight: false,
      badge: "Framework Engineering",
    },
    {
      data: professionalSkills.engineeringAndQa,
      accent: ACCENT2,
      highlight: false,
      badge: "Core QA & Engineering",
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28" style={{ background: "#080D1B" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="🚀"
            title="Skills & Expertise"
            subtitle="Specialized focus in DeepEval Agentic AI evaluation, Playwright automation frameworks, and enterprise quality assurance."
            accent={ACCENT}
          />
        </RevealOnScroll>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {groups.map((group, gi) => (
            <RevealOnScroll key={group.data.title} delay={gi * 120}>
              <div
                className={`glass-card pro-glow p-6 h-full flex flex-col relative transition-all duration-300 ${
                  group.highlight ? "ring-1 ring-cyan-400/40" : ""
                }`}
                style={{
                  background: CARD_BG,
                  boxShadow: group.highlight
                    ? "0 0 30px rgba(34, 211, 238, 0.1)"
                    : "none",
                }}
              >
                {/* Spotlight / Category Badge */}
                <div className="mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block"
                    style={{
                      background: `${group.accent}15`,
                      color: group.accent,
                      border: `1px solid ${group.accent}30`,
                    }}
                  >
                    {group.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{group.data.icon}</span>
                  <h3 className="text-lg font-bold text-white">
                    {group.data.title}
                  </h3>
                </div>
                <p className="text-white/40 text-xs mb-5 leading-relaxed">
                  {group.data.description}
                </p>

                <div className="grid grid-cols-1 gap-3.5 mt-auto">
                  {group.data.skills.map((skill) => (
                    <SkillRing
                      key={skill.name}
                      value={skill.level}
                      color={group.accent}
                      label={skill.name}
                    />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// PROJECTS
// =============================================
function ProProjects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const sections = [
    professionalProjects.agenticAi,
    professionalProjects.automation,
    professionalProjects.enterprise,
  ];

  return (
    <section id="projects" className="py-20 sm:py-28" style={{ background: "#0A0F1F" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="📂"
            title="Featured Projects"
            subtitle="Real-world automation engineering, Agentic AI evaluation pipelines, and enterprise validation."
            accent={ACCENT}
          />
        </RevealOnScroll>

        {sections.map((section, si) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <RevealOnScroll delay={si * 80}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{section.icon}</span>
                <h3
                  className="text-xl font-bold"
                  style={{ color: si === 0 ? ACCENT_AI : si === 1 ? ACCENT : ACCENT2 }}
                >
                  {section.title}
                </h3>
              </div>
              <p className="text-white/40 text-sm mb-6">{section.intro}</p>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 gap-5">
              {section.projects.map((project, pi) => (
                <RevealOnScroll key={project.id} delay={si * 80 + pi * 100}>
                  <div
                    className="glass-card pro-glow p-5 sm:p-6 cursor-pointer h-full flex flex-col group transition-all duration-300 hover:border-cyan-400/30"
                    style={{ background: CARD_BG }}
                    onClick={() => setOpenProject(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") setOpenProject(project);
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${ACCENT}12`,
                          color: ACCENT,
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs text-white/30 group-hover:text-cyan-300 transition-colors">
                        Click for details →
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((t) => (
                        <TechChip
                          key={t}
                          label={t}
                          accentColor={si === 0 ? ACCENT_AI : si === 1 ? ACCENT : ACCENT2}
                        />
                      ))}
                    </div>

                    <div
                      className="text-xs font-bold uppercase tracking-wider mb-4 p-2 rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        color: ACCENT,
                        border: `1px solid ${ACCENT}20`,
                      }}
                    >
                      📈 {project.metric}
                    </div>

                    <div className="flex gap-2 mt-auto pt-2 border-t border-white/5">
                      <span className="text-xs text-cyan-300 font-semibold flex items-center gap-1">
                        View Case Study <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {openProject && (
          <ProjectModal
            project={openProject}
            onClose={() => setOpenProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// =============================================
// CERTIFICATIONS & EDUCATION
// =============================================
function ProCertifications() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#080D1B" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="🎓"
            title="Certifications & Education"
            subtitle="Industry credentials and academic background"
            accent={ACCENT}
          />
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          <RevealOnScroll delay={100}>
            <div
              className="glass-card pro-glow p-6 h-full"
              style={{ background: CARD_BG }}
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>📜</span> Certifications
              </h3>
              <ul className="space-y-3.5">
                {professionalCertifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-0.5 shrink-0 font-bold"
                      style={{ color: ACCENT }}
                    >
                      ✦
                    </span>
                    <span className="text-white/80 font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div
              className="glass-card pro-glow p-6 h-full"
              style={{ background: CARD_BG }}
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>🏛️</span> Education
              </h3>
              <div className="space-y-5">
                {professionalEducation.map((edu, i) => (
                  <div key={i} className="pb-4 last:pb-0 border-b last:border-0 border-white/5">
                    <p className="text-base font-semibold text-white/95">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-white/50">{edu.institution}</p>
                    <p className="text-xs mt-1 font-semibold" style={{ color: ACCENT }}>
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

// =============================================
// CONTACT FORM
// =============================================
function ProContact() {
  return (
    <section id="contact" className="py-20 sm:py-28" style={{ background: "#0A0F1F" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="✉️"
            title="Get in Touch"
            subtitle="Let's connect for test automation, Agentic AI evaluation, and engineering opportunities."
            accent={ACCENT}
          />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <form
            className="glass-card pro-glow p-6 sm:p-8 space-y-5"
            style={{ background: CARD_BG }}
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you! Your message has been prepared. Please reach out directly at pratikulkarni16@gmail.com."
              );
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="form-input"
                style={{ borderColor: `${ACCENT}15` }}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="form-input"
                style={{ borderColor: `${ACCENT}15` }}
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="form-input resize-none"
              style={{ borderColor: `${ACCENT}15` }}
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105"
              style={{ background: ACCENT, color: "#0A0F1F" }}
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm">
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex items-center gap-2 text-white/60 hover:text-cyan-300 transition-colors"
            >
              <Mail size={16} /> {socialLinks.email}
            </a>
            <a
              href={`tel:${socialLinks.whatsapp}`}
              className="flex items-center gap-2 text-white/60 hover:text-cyan-300 transition-colors"
            >
              <Phone size={16} /> {socialLinks.whatsapp}
            </a>
            <a
              href={`https://wa.me/${socialLinks.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-green-400 transition-colors"
            >
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-cyan-300 transition-colors"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-cyan-300 transition-colors"
            >
              <GithubIcon size={16} /> GitHub
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

// =============================================
// MAIN PROFESSIONAL TAB EXPORT
// =============================================
export default function ProfessionalTab() {
  return (
    <div style={{ background: "#0A0F1F" }}>
      <ProHero />
      <ProAbout />
      <ProSkills />
      <ProProjects />
      {/* Experience section removed as requested */}
      <ProCertifications />
      <ProContact />
    </div>
  );
}
