// =====================================================
// ATHLETE TAB DATA — Pratik Kulkarni
// Running, Sprinting & Fitness Portfolio
// =====================================================

export const athleteHero = {
  name: "Pratik Kulkarni",
  headline: "Running, Sprinting & Fitness",
  tagline: "Discipline. Consistency. Relentless Improvement.",
  location: "Pune, India",
  gymExperience: "2 Years",
  highlightsLink: "#", // Add YouTube video/training link if available
};

export const athleteAbout = {
  bio: "I am a fitness enthusiast passionate about running, sprinting, and strength training. With 2 years of gym experience and a completed 10 km run, I am focused on improving my speed, endurance, strength, and overall athletic performance. My goal is to stay consistent, challenge my limits, and continue progressing as a runner and sprinter.",
  sport: "Running & Sprinting",
  focus: "200m Sprint & 10K Running",
  location: "Pune, India",
  experience: "2 Years Gym Training",
  details: [
    { label: "Location", value: "Pune, India" },
    { label: "Primary Discipline", value: "200m Sprinting & Running" },
    { label: "Gym Experience", value: "2 Years Strength & Conditioning" },
    { label: "Endurance Milestone", value: "10 km Run Completed" },
    { label: "Sprint Focus", value: "Acceleration & Stride Efficiency" },
    { label: "Mindset", value: "Continuous Progression & Consistency" },
  ],
};

// Athletic Highlights for Stats counter section
export const athleteStats = [
  { label: "Years Gym Experience", value: 2, suffix: " Years" },
  { label: "Running Milestone", value: 10, suffix: " km" },
  { label: "Primary Sprint Distance", value: 200, suffix: "m" },
  { label: "Weekly Training Days", value: 6, suffix: " Days" },
];

// 10K Running Journey & Milestones (Replaces fictional awards)
export const athleteMilestones = [
  {
    title: "10 km Run Completed",
    category: "Running Milestone",
    badge: "Completed Milestone",
    date: "Date: To be updated",
    location: "Location: Pune, India",
    event: "10K Running Milestone",
    timing: "Timing to be recorded / verified",
    description:
      "A significant milestone in my running journey demonstrating endurance, stamina, and mental perseverance. Serves as the aerobic foundation for sprint conditioning.",
  },
  {
    title: "200m Sprint Focus",
    category: "Sprinting Development",
    badge: "Primary Sprint Focus",
    date: "Current Focus: 2026",
    location: "Track & Field / Training Grounds",
    event: "200m Acceleration & Technique",
    timing: "Timing to be recorded",
    description:
      "Dedicated focus on the 200m distance — refining acceleration phases, stride frequency, speed endurance, and explosive mechanics.",
  },
  {
    title: "2 Years Gym Strength & Conditioning",
    category: "Fitness & Power",
    badge: "Strength Foundation",
    date: "2 Years Active",
    location: "Gym & Strength Training Facility",
    event: "Lower-Body Power & Core Stability",
    timing: "Continuous Progression",
    description:
      "Consistent training targeting squat and hip power, posterior chain development, core rotational stability, and joint durability.",
  },
];

// Sprinting Performance & Timings
// Requirements: Display 100m and 200m timings only after verified results. Until then, use "Personal best coming soon" or "Timing to be recorded."
export const athleteTimings = [
  {
    event: "200m Sprint",
    timing: "Timing to be recorded",
    status: "Personal best coming soon",
    focus: "Acceleration & Speed Endurance",
    notes: "Primary sprinting focus. Working on curve mechanics, stride efficiency, and top-end maintenance.",
  },
  {
    event: "100m Sprint",
    timing: "Timing to be recorded",
    status: "Personal best coming soon",
    focus: "Block Starts & Explosiveness",
    notes: "Secondary sprint practice for explosive drive phase and initial acceleration.",
  },
  {
    event: "10 km Road Run",
    timing: "Timing to be recorded",
    status: "Completed Milestone",
    focus: "Endurance & Stamina",
    notes: "Completed 10K distance milestone. Aerobic capacity support for overall conditioning.",
  },
  {
    event: "Gym Conditioning",
    timing: "2 Years Active",
    status: "Established Foundation",
    focus: "Power & Functional Strength",
    notes: "Compound movements, explosive plyometrics, core stability, and mobility work.",
  },
];

// Gym Experience Pillars
export const athleteGymExperience = [
  {
    title: "Strength Training & Conditioning",
    description:
      "Progressive overload focusing on fundamental compound movements to build overall muscular endurance, density, and functional athletic strength.",
    icon: "🏋️",
  },
  {
    title: "Lower-Body Strength & Power",
    description:
      "Targeted training on glutes, hamstrings, quadriceps, and calves to generate explosive ground reaction force essential for sprinting acceleration.",
    icon: "⚡",
  },
  {
    title: "Core Training & Stability",
    description:
      "Anti-rotational and isometric core conditioning to maintain upright sprint posture, energy transfer, and spine protection under high-impact forces.",
    icon: "🛡️",
  },
  {
    title: "Mobility & Flexibility",
    description:
      "Hip mobility, ankle dorsiflexion, hamstring flexibility, and dynamic warm-up protocols to enhance stride range and prevent injuries.",
    icon: "🧘",
  },
  {
    title: "Recovery & Consistency",
    description:
      "Prioritizing sleep, hydration, structured rest days, and deload cycles to sustain training momentum over months and years without burnout.",
    icon: "🔋",
  },
];

// Training Routine (Flexible 7-day schedule)
export const athleteTraining = {
  weeklyRoutine: [
    {
      day: "Monday",
      focus: "Sprint technique and acceleration drills",
      type: "Speed",
      details: "Form drills, arm mechanics, A-skips, short acceleration bounds.",
    },
    {
      day: "Tuesday",
      focus: "Gym strength training",
      type: "Strength",
      details: "Lower-body power, compound lifts, posterior chain development.",
    },
    {
      day: "Wednesday",
      focus: "Easy running and mobility",
      type: "Endurance",
      details: "Aerobic recovery run, dynamic stretching, hip and ankle mobility.",
    },
    {
      day: "Thursday",
      focus: "Sprint practice and speed development",
      type: "Speed",
      details: "200m speed endurance runs, pacing control, flying sprints.",
    },
    {
      day: "Friday",
      focus: "Full-body strength and core training",
      type: "Strength",
      details: "Upper/lower functional circuit, anti-rotational core stability.",
    },
    {
      day: "Saturday",
      focus: "Easy run or controlled speed session",
      type: "Endurance",
      details: "Flexible light outdoor session or controlled stride practice.",
    },
    {
      day: "Sunday",
      focus: "Rest and recovery",
      type: "Recovery",
      details: "Complete rest, hydration, foam rolling, and mental reset.",
    },
  ],
  principles: [
    "Flexible structure adapted to work, energy levels, and fatigue.",
    "Prioritizing clean sprinting mechanics over pure exhaustion.",
    "Adequate sleep and balanced nutrition to support muscle repair.",
    "Consistent tracking of workout volume and sprint readiness.",
  ],
};

// Future Goals (2026 – 2027)
export const athleteGoals = [
  {
    period: "2026",
    title: "Establish Timed 200m Baseline",
    target: "Record an accurate, verified electronic or hand-timed 200m baseline to benchmark future training cycles.",
    status: "Upcoming Objective",
    icon: "⏱️",
  },
  {
    period: "2026 – 2027",
    title: "2–5% Speed Improvement",
    target: "Aim to improve 200m sprint timing by 2–5% over a 6–12 month dedicated training block.",
    status: "Long-term Target",
    icon: "📈",
  },
  {
    period: "2026",
    title: "Sprint Technique & Acceleration",
    target: "Refine initial drive phase, upright posture, and optimal stride frequency through weekly drills.",
    status: "Active Focus",
    icon: "⚡",
  },
  {
    period: "2026 – 2027",
    title: "Maintain 10 km Endurance",
    target: "Preserve aerobic capacity and stamina from the 10K milestone while progressively building top-end speed.",
    status: "Dual Conditioning",
    icon: "🏃",
  },
  {
    period: "2026 – 2027",
    title: "Local Running & Track Events",
    target: "Participate in local Pune and regional running events and open track-and-field meets.",
    status: "Event Participation",
    icon: "🏁",
  },
  {
    period: "2026 – 2027",
    title: "Strength, Mobility & Recovery Habits",
    target: "Deepen gym power metrics, increase joint mobility, and establish disciplined recovery routines.",
    status: "Foundation Building",
    icon: "💪",
  },
  {
    period: "Ongoing",
    title: "Consistent Training Log & Tracking",
    target: "Consistently record running sessions, gym workouts, and sprint timings to track objective progress.",
    status: "Habit & Discipline",
    icon: "📝",
  },
];

// Gallery Categories (Gym Workouts, Running Sessions, Sprint Practice, 10K Milestone, Future Competitions)
export const athleteGallery = {
  categories: [
    "All",
    "Gym Workouts",
    "Running Sessions",
    "Sprint Practice",
    "10 km Milestone",
    "Future Competitions",
  ],
  photos: [
    {
      category: "10 km Milestone",
      title: "10 km Running Milestone",
      subtitle: "Personal endurance milestone completed",
      placeholder: "10K Run Milestone Photo",
      src: "/athlete/gallery-10k.jpg",
    },
    {
      category: "Sprint Practice",
      title: "200m Sprint Drills",
      subtitle: "Acceleration & stride mechanics practice",
      placeholder: "Sprint Track Practice",
      src: "/athlete/gallery-sprint.jpg",
    },
    {
      category: "Gym Workouts",
      title: "Strength & Power Training",
      subtitle: "2 Years of gym progression & conditioning",
      placeholder: "Gym Strength Session",
      src: "/athlete/gallery-gym.jpg",
    },
    {
      category: "Running Sessions",
      title: "Outdoor Running & Aerobic Pace",
      subtitle: "Consistent weekly endurance building",
      placeholder: "Outdoor Running Session",
      src: "/athlete/gallery-running.jpg",
    },
    {
      category: "Gym Workouts",
      title: "Core Stability & Lower Body",
      subtitle: "Functional conditioning for sprint power",
      placeholder: "Core & Mobility Training",
      src: "/athlete/gallery-core.jpg",
    },
    {
      category: "Future Competitions",
      title: "Upcoming Event Preparation",
      subtitle: "Preparing for local running & track events",
      placeholder: "Competition Preparation",
      src: "/athlete/gallery-events.jpg",
    },
  ],
};

// Progress Tracking Log
export const athleteProgressLogs = [
  {
    metric: "Running Milestone",
    value: "10 km Completed",
    date: "Milestone Verified",
    notes: "Successfully completed 10 km run. Baseline for aerobic endurance.",
  },
  {
    metric: "200m Sprint Focus",
    value: "Timing to be recorded",
    date: "Current Objective",
    notes: "Focusing on acceleration phase and speed endurance drills.",
  },
  {
    metric: "100m Sprint Practice",
    value: "Timing to be recorded",
    date: "Current Objective",
    notes: "Weekly acceleration runs and explosive drive phase training.",
  },
  {
    metric: "Gym Strength & Conditioning",
    value: "2 Years Experience",
    date: "Ongoing Habit",
    notes: "Consistent lower-body, core stability, and power workouts.",
  },
];

export const socialLinks = {
  instagram: "#", // Add your Instagram handle
  youtube: "#",   // Add your YouTube channel
  linkedin: "#",  // Add your LinkedIn
  github: "#",    // Add your GitHub
  email: "pratikulkarni16@gmail.com",
  whatsapp: "+919356636815",
};
