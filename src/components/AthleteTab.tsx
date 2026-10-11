"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Calendar,
  Target,
  X,
  Mail,
  Send,
  Play,
  ChevronRight,
  Dumbbell,
  Flame,
  Zap,
  Heart,
  Timer,
  Activity,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Clock,
} from "lucide-react";
import { InstagramIcon, YoutubeIcon, WhatsAppIcon } from "@/components/BrandIcons";
import {
  RevealOnScroll,
  AnimatedCounter,
  SectionHeading,
} from "@/components/ui";
import {
  athleteHero,
  athleteAbout,
  athleteStats,
  athleteMilestones,
  athleteTimings,
  athleteGymExperience,
  athleteTraining,
  athleteGoals,
  athleteGallery,
  athleteProgressLogs,
  socialLinks,
} from "@/data/athlete";

const ACCENT = "#FF6A00";
const ACCENT2 = "#FACC15";
const CARD_BG = "#181818";

const typeIcons: Record<string, React.ReactNode> = {
  Speed: <Zap size={15} />,
  Strength: <Dumbbell size={15} />,
  Endurance: <Flame size={15} />,
  Recovery: <Heart size={15} />,
};

// =============================================
// HERO SECTION
// =============================================
function AthHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark gradient athletic background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(255,106,0,0.12) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(250,204,21,0.08) 0%, transparent 60%), #0D0D0D",
        }}
      />
      <div className="glow-orb glow-orb-ath-1" />
      <div className="glow-orb glow-orb-ath-2" />

      {/* Diagonal sprint texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, white 0px, white 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          style={{
            background: "rgba(255, 106, 0, 0.12)",
            color: ACCENT2,
            border: `1px solid rgba(255, 106, 0, 0.3)`,
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Activity size={14} />
          <span>{athleteAbout.focus}</span>
          <span className="text-white/30">•</span>
          <span>{athleteHero.location}</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white uppercase tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {athleteHero.name}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-2xl font-bold uppercase tracking-wider mb-3"
          style={{ color: ACCENT }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          {athleteHero.headline}
        </motion.p>

        <motion.p
          className="text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          &ldquo;{athleteHero.tagline}&rdquo;
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <a
            href="#milestones"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-orange-600/20"
            style={{ background: ACCENT, color: "#000" }}
          >
            <Trophy size={16} /> View Milestones
          </a>
          <a
            href="#training"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border transition-all hover:scale-105"
            style={{
              borderColor: `${ACCENT}40`,
              color: ACCENT,
              background: `${ACCENT}08`,
            }}
          >
            <Dumbbell size={16} /> Training Routine
          </a>
          <a
            href="#ath-contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
            style={{
              background: `${ACCENT2}18`,
              color: ACCENT2,
              border: `1px solid ${ACCENT2}30`,
            }}
          >
            <Mail size={16} /> Connect / Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================
// ABOUT SECTION
// =============================================
function AthAbout() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#0D0D0D" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="🏃"
            title="About Me"
            subtitle="Fitness enthusiast focused on running endurance, 200m sprinting, and progressive gym strength."
            accent={ACCENT}
            athlete
          />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div
            className="glass-card ath-glow p-6 sm:p-8 mb-8"
            style={{ background: CARD_BG }}
          >
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              {athleteAbout.bio}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/5">
              {athleteAbout.details.map((d) => (
                <div key={d.label} className="p-3 rounded-xl bg-white/[0.02]">
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-1 font-semibold">
                    {d.label}
                  </p>
                  <p className="text-sm font-bold text-white/90">
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

// =============================================
// STATS STRIP / HIGHLIGHTS
// =============================================
function AthStats() {
  return (
    <section
      className="py-16"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,106,0,0.08), rgba(250,204,21,0.05), #0D0D0D)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {athleteStats.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div
                  className="counter-value text-4xl sm:text-5xl block mb-2 font-black"
                  style={{ color: i % 2 === 0 ? ACCENT : ACCENT2 }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// RUNNING JOURNEY & MILESTONES (Replaces fictional medals)
// =============================================
function AthMilestones() {
  return (
    <section
      id="milestones"
      className="py-20 sm:py-28"
      style={{ background: "#0D0D0D" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="🏅"
            title="Running Journey & Milestones"
            subtitle="Key personal achievements, distance milestones, and athletic focus areas."
            accent={ACCENT}
            athlete
          />
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {athleteMilestones.map((m, i) => (
            <RevealOnScroll key={m.title} delay={i * 100}>
              <div
                className="glass-card ath-glow p-6 h-full flex flex-col justify-between"
                style={{ background: CARD_BG }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{
                        background: `${ACCENT}15`,
                        color: ACCENT,
                        border: `1px solid ${ACCENT}30`,
                      }}
                    >
                      {m.badge}
                    </span>
                    <span className="text-xs text-white/40 font-mono">
                      {m.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {m.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {m.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-white/5 text-xs text-white/50">
                  <div className="flex items-center gap-2">
                    <Calendar size={13} style={{ color: ACCENT2 }} />
                    <span>{m.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} style={{ color: ACCENT }} />
                    <span>{m.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer size={13} style={{ color: ACCENT2 }} />
                    <span className="font-semibold text-white/70">{m.timing}</span>
                  </div>
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
// SPRINTING PERFORMANCE & TIMINGS
// =============================================
function AthTimings() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#111111" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="⚡"
            title="Sprinting Performance & Timings"
            subtitle="Primary sprinting focus is the 200m distance. Official timings will be displayed once recorded and verified."
            accent={ACCENT}
            athlete
          />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div
            className="glass-card ath-glow overflow-hidden mb-6"
            style={{ background: CARD_BG }}
          >
            <div className="overflow-x-auto">
              <table className="training-table w-full min-w-[550px]">
                <thead>
                  <tr style={{ color: ACCENT }}>
                    <th>Event / Distance</th>
                    <th>Current Timing / Status</th>
                    <th>Primary Focus</th>
                    <th>Training Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {athleteTimings.map((row, i) => (
                    <tr key={i} className="text-sm text-white/70">
                      <td className="font-bold text-white flex items-center gap-2">
                        <span style={{ color: ACCENT2 }}>▸</span> {row.event}
                      </td>
                      <td>
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-semibold inline-block"
                          style={{
                            background:
                              row.status === "Completed Milestone"
                                ? "rgba(34, 211, 238, 0.15)"
                                : "rgba(250, 204, 21, 0.15)",
                            color:
                              row.status === "Completed Milestone"
                                ? "#22D3EE"
                                : ACCENT2,
                            border: `1px solid ${
                              row.status === "Completed Milestone"
                                ? "rgba(34, 211, 238, 0.3)"
                                : "rgba(250, 204, 21, 0.3)"
                            }`,
                          }}
                        >
                          {row.timing}
                        </span>
                      </td>
                      <td className="text-white/80 font-medium">{row.focus}</td>
                      <td className="text-white/50 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-white/40 text-center italic">
            * 100m and 200m verified race timings will be updated as recorded during official sessions and time trials.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

// =============================================
// GYM & FITNESS EXPERIENCE
// =============================================
function AthGym() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#0D0D0D" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="🏋️"
            title="Gym & Fitness Experience"
            subtitle="2 years of dedicated strength training, lower-body power development, core stability, and athletic conditioning."
            accent={ACCENT}
            athlete
          />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {athleteGymExperience.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 80}>
              <div
                className="glass-card ath-glow p-6 h-full flex flex-col"
                style={{ background: CARD_BG }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// TRAINING ROUTINE
// =============================================
function AthTraining() {
  return (
    <section id="training" className="py-20 sm:py-28" style={{ background: "#111111" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="💪"
            title="Weekly Training Routine"
            subtitle="A structured, flexible routine balancing sprint acceleration, gym strength sessions, easy runs, and recovery."
            accent={ACCENT}
            athlete
          />
        </RevealOnScroll>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* 7-day schedule */}
          <div className="lg:col-span-2">
            <RevealOnScroll delay={100}>
              <div
                className="glass-card ath-glow p-5 sm:p-6 h-full"
                style={{ background: CARD_BG }}
              >
                <h3
                  className="text-base font-bold uppercase tracking-wider mb-5 flex items-center justify-between"
                  style={{ color: ACCENT }}
                >
                  <span>Weekly Schedule</span>
                  <span className="text-xs text-white/40 lowercase font-normal">
                    (flexible & balanced)
                  </span>
                </h3>
                <div className="space-y-3">
                  {athleteTraining.weeklyRoutine.map((item) => (
                    <div
                      key={item.day}
                      className="p-3 rounded-xl bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex items-center gap-1.5 font-bold uppercase text-xs tracking-wider w-24 shrink-0"
                          style={{ color: ACCENT2 }}
                        >
                          {typeIcons[item.type] || <ChevronRight size={14} />}
                          {item.day}
                        </span>
                        <span className="text-white/80 text-sm font-semibold">
                          {item.focus}
                        </span>
                      </div>
                      <span className="text-white/40 text-xs sm:text-right">
                        {item.details}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Principles */}
          <div>
            <RevealOnScroll delay={200}>
              <div
                className="glass-card ath-glow p-5 sm:p-6 h-full flex flex-col justify-between"
                style={{ background: CARD_BG }}
              >
                <div>
                  <h3
                    className="text-base font-bold uppercase tracking-wider mb-5"
                    style={{ color: ACCENT }}
                  >
                    Training Principles
                  </h3>
                  <ul className="space-y-3.5">
                    {athleteTraining.principles.map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: ACCENT2 }}
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl mt-6 bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-white/50 leading-relaxed">
                    💡 <strong className="text-white/80">Balance is Key:</strong> Training loads are adjusted to prevent overtraining while prioritizing speed mechanics and joint recovery.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// FUTURE GOALS (2026–2027)
// =============================================
function AthGoals() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#0D0D0D" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="🎯"
            title="Future Goals (2026 – 2027)"
            subtitle="Targeted performance milestones, speed development, and upcoming event participation."
            accent={ACCENT}
            athlete
          />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-5">
          {athleteGoals.map((goal, i) => (
            <RevealOnScroll key={goal.title} delay={i * 80}>
              <div
                className="glass-card ath-glow p-5 sm:p-6 h-full flex flex-col justify-between"
                style={{ background: CARD_BG }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{
                        background: `${ACCENT2}15`,
                        color: ACCENT2,
                        border: `1px solid ${ACCENT2}30`,
                      }}
                    >
                      {goal.period}
                    </span>
                    <span className="text-xs text-white/30 font-medium">
                      {goal.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <span>{goal.icon}</span> {goal.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {goal.target}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs" style={{ color: ACCENT }}>
                  <TrendingUp size={13} />
                  <span>Targeted Objective</span>
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
// GALLERY & PHOTOS
// =============================================
function AthGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredPhotos =
    selectedCategory === "All"
      ? athleteGallery.photos
      : athleteGallery.photos.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 sm:py-28" style={{ background: "#111111" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="📸"
            title="Gallery & Photographs"
            subtitle="Visual documentation of gym workouts, running sessions, sprint practice, and milestones."
            accent={ACCENT}
            athlete
          />
        </RevealOnScroll>

        {/* Category Filter Tabs */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {athleteGallery.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                style={{
                  background:
                    selectedCategory === cat ? ACCENT : "rgba(255,255,255,0.04)",
                  color: selectedCategory === cat ? "#000" : "rgba(255,255,255,0.6)",
                  border:
                    selectedCategory === cat
                      ? `1px solid ${ACCENT}`
                      : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Photos Grid */}
        <RevealOnScroll delay={200}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, i) => (
              <div
                key={i}
                className="glass-card ath-glow overflow-hidden cursor-pointer group rounded-2xl"
                style={{ background: CARD_BG }}
                onClick={() => setLightbox(photo.title)}
              >
                <div
                  className="w-full bg-white/[0.03] flex flex-col items-center justify-center p-6 text-center text-white/30 text-sm border-b border-white/5 transition-colors group-hover:bg-white/[0.06]"
                  style={{ height: "200px" }}
                >
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">
                    📷
                  </span>
                  <p className="text-white/60 font-medium text-xs">
                    {photo.placeholder}
                  </p>
                  <p className="text-[11px] text-white/30 mt-1">
                    (Click to view / upload placeholder)
                  </p>
                </div>
                <div className="p-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full inline-block mb-1.5"
                    style={{
                      background: "rgba(255,106,0,0.12)",
                      color: ACCENT,
                    }}
                  >
                    {photo.category}
                  </span>
                  <h4 className="text-sm font-bold text-white">{photo.title}</h4>
                  <p className="text-xs text-white/40 mt-0.5">{photo.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="text-center text-white/80 p-8 max-w-md">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="text-lg font-bold text-white mb-2">{lightbox}</h3>
              <p className="text-sm text-white/50 mb-4">
                Placeholder image ready for user photo upload in <code>/public/athlete/</code>.
              </p>
              <span className="text-xs text-white/30">Click anywhere to close</span>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// =============================================
// PROGRESS TRACKING & LOG
// =============================================
function AthProgress() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#0D0D0D" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="📈"
            title="Progress Tracking & Training Log"
            subtitle="Structured tracking framework for recording training dates, running distances, sprint timings, and gym milestones."
            accent={ACCENT}
            athlete
          />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-5">
          {athleteProgressLogs.map((log, i) => (
            <RevealOnScroll key={log.metric} delay={i * 80}>
              <div
                className="glass-card ath-glow p-5 sm:p-6"
                style={{ background: CARD_BG }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: ACCENT }}
                  >
                    {log.metric}
                  </span>
                  <span className="text-xs text-white/40 font-mono">
                    {log.date}
                  </span>
                </div>
                <p className="text-lg font-black text-white mb-2">
                  {log.value}
                </p>
                <p className="text-xs text-white/60 leading-relaxed">
                  {log.notes}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// CONTACT SECTION
// =============================================
function AthContact() {
  return (
    <section
      id="ath-contact"
      className="py-20 sm:py-28"
      style={{ background: "#111111" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            icon="🤝"
            title="Connect & Contact"
            subtitle="Connect for athletic training discussions, running meetups, and fitness collaboration."
            accent={ACCENT}
            athlete
          />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <form
            className="glass-card ath-glow p-6 sm:p-8 space-y-5"
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
              placeholder="Your Message (training inquiries, collaborations, etc.)"
              rows={5}
              required
              className="form-input resize-none"
              style={{ borderColor: `${ACCENT}15` }}
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
              style={{ background: ACCENT, color: "#000" }}
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm">
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Mail size={16} /> {socialLinks.email}
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
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <InstagramIcon size={16} /> Instagram
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <YoutubeIcon size={16} /> YouTube
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

// =============================================
// MAIN ATHLETE TAB EXPORT
// =============================================
export default function AthleteTab() {
  return (
    <div style={{ background: "#0D0D0D" }}>
      <AthHero />
      <AthAbout />
      <AthStats />
      <AthMilestones />
      <AthTimings />
      <AthGym />
      <AthTraining />
      <AthGoals />
      <AthGallery />
      <AthProgress />
      <AthContact />
    </div>
  );
}
