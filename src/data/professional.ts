// =====================================================
// IT PROFESSIONAL TAB — Core Data & Skills
// =====================================================

export const professionalHero = {
  name: "Pratik Kulkarni",
  headline: "Software Test Engineer | Automation & Agentic AI Evaluation",
  summary:
    "Automation Engineer by choice and Problem Solver by nature. Hands-on expertise in Playwright (Python/TS), DeepEval Agentic AI & LLM evaluation, FastAPI testing, and enterprise test automation.",
  badge: "ISTQB Certified",
  location: "Pune, India",
  email: "pratikulkarni16@gmail.com",
  phone: "+91 9356636815",
  resumeLink: "#",
};

export const professionalAbout = {
  bio: "I'm a QA Automation Engineer specialized in building robust test automation frameworks and validating next-generation AI systems. With deep experience in Playwright, Python, DeepEval for Agentic AI & LLM evaluation, and enterprise business testing (including SAP S/4HANA), I bridge modern engineering with reliable quality delivery. I translate complex business requirements into high-coverage automated test suites that eliminate manual bottlenecks and safeguard production releases.",
  location: "Pune, India",
  role: "Software Test Engineer",
  certification: "ISTQB Certified Foundation Level",
  highlights: [
    "Pioneering Agentic AI testing & evaluation using DeepEval and Python.",
    "Built scalable UI & API test automation frameworks from scratch with Playwright.",
    "Integrated automated test execution into Azure DevOps CI/CD pipelines.",
    "Enterprise experience across modern web apps, financial workflows & SAP S/4HANA.",
  ],
  stats: [
    { label: "Manual Effort Reduced", value: 70, suffix: "%" },
    { label: "Payment Records Reconciled", value: 250, suffix: "+" },
    { label: "Core Skills & Tools", value: 18, suffix: "+" },
    { label: "Certified Credentials", value: 4, suffix: "" },
  ],
};

export const professionalSkills = {
  agenticAi: {
    title: "Agentic AI & DeepEval Testing",
    icon: "🤖",
    description: "LLM evaluation, agentic workflow validation & response quality assessment",
    skills: [
      { name: "DeepEval (Python)", level: 95 },
      { name: "Agentic AI Testing", level: 95 },
      { name: "LLM Evaluation & Metrics", level: 92 },
      { name: "Hallucination & Bias Detection", level: 90 },
      { name: "RAG Accuracy & Faithfulness", level: 88 },
      { name: "FastAPI Endpoint Validation", level: 90 },
    ],
  },
  automation: {
    title: "Test Automation & Frameworks",
    icon: "🧪",
    description: "UI, API & RPA automation frameworks for web and enterprise systems",
    skills: [
      { name: "Playwright (Python / TS)", level: 95 },
      { name: "Playwright pytest API Testing", level: 92 },
      { name: "Selenium WebDriver & TestNG", level: 88 },
      { name: "POM & Hybrid Frameworks", level: 94 },
      { name: "UiPath RPA Automation", level: 85 },
      { name: "BDD / Keyword & Data-Driven", level: 90 },
    ],
  },
  engineeringAndQa: {
    title: "QA Engineering, Languages & DB",
    icon: "⚙️",
    description: "Full lifecycle quality assurance, programming languages & databases",
    skills: [
      { name: "Python 3.11 & Core Java 17", level: 92 },
      { name: "Manual Testing & Defect Mgmt", level: 95 },
      { name: "SDLC / STLC & Agile Scrum", level: 95 },
      { name: "Azure DevOps CI/CD & JIRA", level: 90 },
      { name: "MySQL 8.0, Triggers & SQL Server", level: 86 },
      { name: "SAP S/4HANA Testing (GL, AR, AA)", level: 85 },
    ],
  },
};

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  metric: string;
  github: string;
  demo: string;
  detail: {
    problem: string;
    approach: string;
    tools: string;
    outcome: string;
  };
}

export const professionalProjects: {
  agenticAi: { title: string; icon: string; intro: string; projects: Project[] };
  automation: { title: string; icon: string; intro: string; projects: Project[] };
  enterprise: { title: string; icon: string; intro: string; projects: Project[] };
} = {
  agenticAi: {
    title: "Agentic AI & DeepEval Testing",
    icon: "🤖",
    intro: "Evaluating LLMs, multi-agent AI outputs, and intelligent financial workflows.",
    projects: [
      {
        id: "ai-1",
        title: "Agentic AI Evaluation Suite with DeepEval",
        category: "Agentic AI / LLM Testing",
        description:
          "Engineered continuous LLM & Agentic AI evaluation pipelines measuring faithfulness, answer relevancy, and hallucination metrics on live model outputs.",
        techStack: ["DeepEval", "Python 3.11", "FastAPI", "Pytest", "Azure DevOps", "Agentic AI"],
        metric: "Automated output validation & hallucination scoring",
        github: "#",
        demo: "#",
        detail: {
          problem:
            "AI application outputs lacked deterministic validation, risking hallucinations, off-brand replies, and untracked response degradation in production workflows.",
          approach:
            "Implemented DeepEval test suites evaluating synthetic and live agentic outputs against customized metric rubrics (Faithfulness, Contextual Relevancy, Bias). Automated test triggers via pytest.",
          tools: "DeepEval (Python), Pytest, FastAPI, Python 3.11, Azure DevOps",
          outcome:
            "Established continuous quality gatekeeping for agentic workflows, catching prompt drift and output regressions prior to release.",
        },
      },
      {
        id: "ai-2",
        title: "FastAPI Backend & AI Integration Testing",
        category: "API & AI Validation",
        description:
          "End-to-end API test automation verifying FastAPI endpoints, request/response schema integrity, error handling, and agentic microservice pipelines.",
        techStack: ["FastAPI", "Python", "Playwright Pytest", "DeepEval", "REST APIs"],
        metric: "100% endpoint coverage with automated payload assertions",
        github: "#",
        demo: "#",
        detail: {
          problem:
            "Fast-evolving FastAPI endpoints required stringent regression testing for payload contracts, status codes, and AI service dependencies.",
          approach:
            "Built automated test suites using Playwright pytest for REST validation combined with DeepEval assertions for AI payload verification.",
          tools: "FastAPI, Python, Playwright Pytest, DeepEval, Postman",
          outcome:
            "Achieved rapid feedback on pull requests with zero breaking contract issues reaching downstream services.",
        },
      },
    ],
  },
  automation: {
    title: "Automation Testing Frameworks",
    icon: "🧪",
    intro: "Production-grade UI, API, and cross-browser test automation frameworks.",
    projects: [
      {
        id: "auto-1",
        title: "DGEM CashApp: Playwright Automation Framework",
        category: "UI & API Automation",
        description:
          "Architected from scratch a scalable test automation framework using Playwright with Python for an enterprise financial application, integrated into Azure DevOps CI/CD.",
        techStack: ["Playwright", "Python 3.11", "Page Object Model", "Azure DevOps", "CI/CD"],
        metric: "70% reduction in manual testing effort",
        github: "#",
        demo: "#",
        detail: {
          problem:
            "Manual regression cycles for the enterprise finance product took excessive team hours and caused release scheduling delays.",
          approach:
            "Designed and implemented a modular Page Object Model (POM) framework with Playwright and Python. Automated end-to-end user journeys and wired scheduled pipeline runs into Azure DevOps.",
          tools: "Playwright, Python, Azure DevOps CI/CD, Pytest, Git",
          outcome:
            "Cut manual test execution time by 70%, boosting regression velocity and test coverage across sprint deliverables.",
        },
      },
      {
        id: "auto-2",
        title: "Financial Payment & Remittance Data Reconciliation",
        category: "Data Validation & Automation",
        description:
          "Automated financial data validation framework reconciling Bank Statements, Remittance feeds, and ERP records for 250+ enterprise payment transactions.",
        techStack: ["Python", "MySQL 8.0", "SQL Server", "Playwright", "ERP Testing"],
        metric: "250+ payment records verified with 100% consistency",
        github: "#",
        demo: "#",
        detail: {
          problem:
            "Manual verification of payment transactions across bank remittance data and ERP tables was labor-intensive and prone to human oversight.",
          approach:
            "Developed automated Python validation scripts and SQL verification queries to compare multi-source payment records and flag discrepancies immediately.",
          tools: "Python, MySQL, SQL Server, Triggers, ERP Ledger Reconciliation",
          outcome:
            "Ensured absolute data extraction accuracy and verified end-to-end financial transaction consistency across systems.",
        },
      },
    ],
  },
  enterprise: {
    title: "Enterprise & SAP S/4HANA Testing",
    icon: "🏢",
    intro: "Critical business process validation and robotic process automation.",
    projects: [
      {
        id: "ent-1",
        title: "SAP S/4HANA Business Process Quality Assurance",
        category: "Enterprise QA & Manual/Automation",
        description:
          "Comprehensive quality assurance of SAP S/4HANA modules (GL, Asset Accounting, Accounts Receivable, Controlling), validating critical financial business processes.",
        techStack: ["SAP S/4HANA", "UiPath Studio", "JIRA", "Excel", "STLC"],
        metric: "End-to-end validation across 4 core SAP modules",
        github: "#",
        demo: "#",
        detail: {
          problem:
            "Complex financial business flows (purchase order processing, goods receipt, asset capitalization, financial postings) required zero-defect validation.",
          approach:
            "Partnered with SAP functional consultants to translate business specifications into detailed test cases. Executed functional, regression, and UAT cycles across multiple environments.",
          tools: "SAP S/4HANA, UiPath Studio, JIRA, Test Documentation",
          outcome:
            "Delivered seamless UAT rollouts with zero high-severity production escapes across major financial closing cycles.",
        },
      },
      {
        id: "ent-2",
        title: "UiPath Robotic Process Automation Testing",
        category: "RPA Automation",
        description:
          "Automated repetitive SAP regression test cases using UiPath Studio workflows and Orchestrator to maximize testing throughput.",
        techStack: ["UiPath Studio", "Orchestrator", "SAP Automation", "Regression Testing"],
        metric: "Automated high-frequency repetitive regression flows",
        github: "#",
        demo: "#",
        detail: {
          problem:
            "Repetitive regression test cases for SAP transactional screens consumed significant QA capacity each sprint.",
          approach:
            "Identified candidate test scenarios under automation scope and built end-to-end automation workflows in UiPath Studio.",
          tools: "UiPath Studio, Orchestrator, SAP GUI Automation",
          outcome:
            "Accelerated regression runtimes and freed QA engineers to focus on exploratory and edge-case testing.",
        },
      },
    ],
  },
};

export const professionalCertifications = [
  "ISTQB Certified Foundation Level (CTFL)",
  "Agile & Scrum Fundamental Certificate",
  "Python Programming Certification",
  "SQL: Beginner to Advanced Certification",
];

export const professionalEducation = [
  {
    degree: "Master of Computer Applications (MCA) — Information Technology",
    institution: "Vellore Institute of Technology (VIT)",
    year: "2026 – 2028",
  },
  {
    degree: "Bachelor of Science (B.Sc)",
    institution: "Dr. Babasaheb Ambedkar Marathwada University",
    year: "2019 – 2022",
  },
];
