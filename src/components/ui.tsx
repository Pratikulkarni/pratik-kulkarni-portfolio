"use client";

import { useEffect, useRef, ReactNode } from "react";

// =============================================
// Scroll-Reveal wrapper — fades-in children
// when they enter the viewport
// =============================================
export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

// =============================================
// Animated counter — counts up from 0 to value
// =============================================
export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const end = value;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.round(eased * end);
            el.textContent = `${start}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

// =============================================
// Skill Progress Ring — SVG circular progress
// =============================================
export function SkillRing({
  value,
  size = 52,
  strokeWidth = 4,
  color,
  label,
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
  color: string;
  label: string;
}) {
  const ref = useRef<SVGCircleElement>(null);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const offset = circumference - (value / 100) * circumference;
          el.style.strokeDashoffset = `${offset}`;
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, circumference]);

  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} className="shrink-0 -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="skill-ring-bg"
        />
        <circle
          ref={ref}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          className="skill-ring-fill"
        />
      </svg>
      <div className="min-w-0">
        <p className="text-sm font-medium text-white/90 truncate">{label}</p>
        <p className="text-xs text-white/40">{value}%</p>
      </div>
    </div>
  );
}

// =============================================
// Section Heading — consistent across tabs
// =============================================
export function SectionHeading({
  icon,
  title,
  subtitle,
  accent,
  athlete,
}: {
  icon?: string;
  title: string;
  subtitle?: string;
  accent: string;
  athlete?: boolean;
}) {
  return (
    <div className="mb-10 text-center">
      {icon && <span className="text-3xl mb-2 block">{icon}</span>}
      <h2
        className={`text-3xl md:text-4xl font-display font-extrabold mb-3 ${
          athlete ? "uppercase tracking-wider" : ""
        }`}
        style={{ color: accent }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 max-w-2xl mx-auto text-base">{subtitle}</p>
      )}
    </div>
  );
}

// =============================================
// TechChip — small pill for stack display
// =============================================
export function TechChip({
  label,
  accentColor,
}: {
  label: string;
  accentColor: string;
}) {
  return (
    <span
      className="tech-chip"
      style={{ color: accentColor, borderColor: `${accentColor}30` }}
    >
      {label}
    </span>
  );
}
