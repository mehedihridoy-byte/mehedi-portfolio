export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  solution: string;
  tools: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export interface AwardItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface LearningItem {
  skill: string;
  status: string;
  progress: number;
  description: string;
  icon: string;
}

export const personalInfo = {
  name: "Md. Mehedi Hassan",
  title: "Operations & Data Analytics Professional",
  tagline: "Bridging business operations, advanced spreadsheet engineering, and workflow automation to eliminate friction, optimize processes, and deliver measurable business growth.",
  shortBio: "Specializing in Advanced Microsoft Excel, Google Sheets, Google Apps Script, and analytical dashboard development. Proven track record of turning messy, repetitive operational bottlenecks into automated, high-precision reporting engines.",
  location: "Dhaka, Bangladesh (Open to Global / Remote)",
  statusBadge: "Available for High-Impact Roles & Projects",
  email: "mehedihassan.ops@gmail.com",
  linkedin: "https://linkedin.com/in/mehedihassan-ops",
  github: "https://github.com/mehedihassan-ops",
  resumeUrl: "/resume-mehedi-hassan.pdf",
};

export const keyMetrics = [
  { value: "120+", label: "Hours Saved / Month", subtext: "via workflow automation" },
  { value: "99.9%", label: "Data Accuracy", subtext: "automated validation logic" },
  { value: "50+", label: "Automated Sheets & Dashboards", subtext: "built & maintained" },
  { value: "28%", label: "SLA Compliance Boost", subtext: "real-time KPI tracking" },
];

export const coreExpertise = [
  {
    title: "Advanced Microsoft Excel",
    icon: "FileSpreadsheet",
    description: "Architect of sophisticated financial & operational models utilizing dynamic array formulas (XLOOKUP, FILTER, INDEX/MATCH), Power Query, complex nested logic, and automated Pivot Tables.",
    tags: ["Dynamic Arrays", "Power Query", "Data Validation", "Nested Logic", "VBA & Macros"],
  },
  {
    title: "Advanced Google Sheets",
    icon: "Table",
    description: "Designing scalable, multi-tab collaborative spreadsheet ecosystems using QUERY language, IMPORTRANGE networks, REGEX extraction, and conditional formatting engines.",
    tags: ["QUERY Language", "IMPORTRANGE", "ARRAYFORMULA", "Collaborative Systems", "Data Cleansing"],
  },
  {
    title: "Google Apps Script & Automation",
    icon: "Cpu",
    description: "Building zero-touch automation scripts that trigger automated emails, sync data across APIs, lock completed records, and eliminate repetitive copy-pasting.",
    tags: ["Custom Triggers", "REST API Webhooks", "Automated Alerts", "Data Pipelines", "Zero-Touch Sync"],
  },
  {
    title: "Analytics & KPI Dashboards",
    icon: "BarChart3",
    description: "Translating raw operational numbers into intuitive executive dashboards with interactive slicers, drill-down capabilities, and automated trend summaries.",
    tags: ["Executive Dashboards", "Performance Tracking", "SLA Monitoring", "Trend Discovery", "Visual Analytics"],
  },
  {
    title: "Operations & Process Optimization",
    icon: "Workflow",
    description: "Identifying operational bottlenecks, streamlining cross-team handoffs, establishing robust SOPs, and managing SLAs to maximize team throughput.",
    tags: ["Process Re-engineering", "SLA Management", "Cross-team Workflows", "Capacity Planning", "SOP Development"],
  },
  {
    title: "Team Leadership & Coordination",
    icon: "Users",
    description: "Guiding operational teams with clear operational protocols, performance coaching, transparent goal tracking, and structured problem resolution.",
    tags: ["Operational Training", "Goal Alignment", "Stakeholder Management", "Resource Allocation"],
  },
];

export const featuredProjects: Project[] = [
  {
    id: "spreadsheet-reporting-system",
    title: "Advanced Spreadsheet Reporting System",
    subtitle: "Enterprise-grade multi-department daily reconciliation & KPI engine",
    category: "Spreadsheet Engineering",
    problem: "Fragmented departmental reports were manually collected daily across 15+ sub-teams, resulting in severe data discrepancies, 3-4 hours of daily compilation delay, and recurring calculation errors.",
    solution: "Engineered a centralized, automated multi-tab reporting engine utilizing dynamic array formulas, standardized reconciliation matrices, and automated validation rules with zero human touch required for aggregation.",
    tools: ["Advanced Excel", "Power Query", "Dynamic Arrays", "Pivot Analytics", "Data Modeling"],
    outcomes: [
      "Cut report preparation time by 85% (from 4 hours to under 25 minutes)",
      "Eliminated 100% of human calculation and copy-paste errors",
      "Standardized daily operational KPI view for executive management across all units",
    ],
    metrics: [
      { label: "Time Saved", value: "85%" },
      { label: "Data Accuracy", value: "100%" },
      { label: "Daily Users", value: "30+" },
    ],
    featured: true,
    badge: "Flagship System",
  },
  {
    id: "automated-sheets-management",
    title: "Automated Google Sheets Management System",
    subtitle: "Real-time multi-agent validation & collaborative control suite",
    category: "Google Apps Script & Cloud Sheets",
    problem: "A high-velocity operations team faced frequent data overwrites, missing mandatory fields, and broken formulas during concurrent multi-user data entry across multiple branch offices.",
    solution: "Developed an intelligent Google Sheets management system with custom Google Apps Script triggers, cell-level row locking upon completion, dynamic cascading drop-downs, and instant error highlighting.",
    tools: ["Google Sheets", "Google Apps Script", "JavaScript", "Event Triggers", "QUERY"],
    outcomes: [
      "Enforced 100% data integrity with zero incomplete entries",
      "Protected master formulas and historical data from accidental edits",
      "Enabled smooth concurrent usage by 40+ operational staff simultaneously",
    ],
    metrics: [
      { label: "Error Reduction", value: "99.4%" },
      { label: "Concurrent Ops", value: "40+ Staff" },
      { label: "Audit Trail", value: "Real-time" },
    ],
    featured: true,
    badge: "Zero-Touch Integrity",
  },
  {
    id: "workflow-automation-system",
    title: "Cross-Platform Workflow Automation System",
    subtitle: "Zero-touch integration between web forms, master databases, and communication channels",
    category: "Automation & Integration",
    problem: "Operational staff spent 120+ hours each month manually exporting web submissions, reformatting customer information, pasting into spreadsheets, and emailing confirmations one by one.",
    solution: "Architected an end-to-end webhook-driven automation pipeline using Google Apps Script that instantly captures web submissions, categorizes data, updates cloud records, and dispatches dynamic email notifications.",
    tools: ["Google Apps Script", "Webhooks", "REST APIs", "Gmail API", "JSON Data Parsing"],
    outcomes: [
      "Reclaimed 120+ monthly staff hours for strategic operations",
      "Achieved sub-minute turnaround time for user confirmations and status notifications",
      "Zero missed submissions or communication lapses over 12 months",
    ],
    metrics: [
      { label: "Monthly Saved", value: "120+ Hrs" },
      { label: "Response Time", value: "< 1 Min" },
      { label: "Failure Rate", value: "0.0%" },
    ],
    featured: true,
    badge: "High ROI Automation",
  },
  {
    id: "business-performance-dashboard",
    title: "Business Performance Analytics Dashboard",
    subtitle: "Interactive executive KPI tracking, SLA monitoring, and trend analysis platform",
    category: "Data Analytics & Dashboards",
    problem: "Leadership lacked a unified bird’s-eye view of team performance metrics, customer request turnaround times, and individual agent productivity trends across weekly cycles.",
    solution: "Designed a high-impact visual performance dashboard incorporating interactive timeline slicers, automated KPI progress trackers, color-coded health badges, and trend forecasting curves.",
    tools: ["Advanced Sheets/Excel", "Data Visualization", "Slicers & Filters", "KPI Scorecards", "Statistical Trendlines"],
    outcomes: [
      "Enabled management to identify process bottlenecks 3x faster than traditional monthly reviews",
      "Boosted departmental SLA compliance rate by 28%",
      "Automated weekly PDF/snapshot exports for management meetings",
    ],
    metrics: [
      { label: "SLA Increase", value: "+28%" },
      { label: "Issue Detection", value: "3x Faster" },
      { label: "Leadership Views", value: "Weekly" },
    ],
    featured: true,
  },
  {
    id: "operations-reporting-webapp",
    title: "Operations Reporting & Monitoring Web Application",
    subtitle: "Modern responsive web portal for high-volume participant and batch status tracking",
    category: "Web Application & Cloud Sync",
    problem: "When participant rosters grew into tens of thousands of rows, standalone spreadsheets experienced sluggish performance, rendering real-time search and status monitoring impractical on field devices.",
    solution: "Engineered a dedicated lightweight web application using modern frontend technologies connected to cloud data services, enabling instant instant search, status tagging, and automated reconciliation reports.",
    tools: ["React", "Vite", "Tailwind CSS", "REST APIs", "Node.js", "Data Virtualization"],
    outcomes: [
      "Sub-second search and filter across 50,000+ operational records",
      "Seamless mobile responsiveness for on-the-ground operational coordinators",
      "Reduced spreadsheet memory footprint by offloading read-heavy queries to web views",
    ],
    metrics: [
      { label: "Search Latency", value: "< 200ms" },
      { label: "Records Handled", value: "50,000+" },
      { label: "Mobile Ready", value: "100%" },
    ],
    featured: true,
    badge: "Full-Stack Ops Tool",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2023 – Present",
    role: "Operations & Data Analytics Specialist",
    company: "Fast-Paced Tech & Operations Ecosystem",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Leading operational process re-engineering, advanced data modeling, and workflow automation across core operational divisions to guarantee seamless delivery and real-time leadership visibility.",
    achievements: [
      "Automated critical reporting workflows, saving 120+ team hours every month.",
      "Engineered high-concurrency Google Sheets management systems supporting 40+ concurrent team members with 100% data integrity.",
      "Spearheaded KPI dashboard implementations that improved overall SLA compliance by 28% across key operational pipelines.",
      "Developed robust error-handling scripts and audit logs to eliminate operational fraud, duplicates, and missing records.",
    ],
    skills: ["Excel Dynamic Arrays", "Google Apps Script", "Process Optimization", "KPI Analytics", "SLA Governance"],
  },
  {
    period: "2021 – 2023",
    role: "Operations Coordinator & Data Analyst",
    company: "Business Services & Operations Group",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Managed daily operational data intake, structured reconciliation processes, cross-departmental coordination, and performance tracking.",
    achievements: [
      "Streamlined data aggregation from 5 disparate departmental sources into a single unified executive reporting view.",
      "Instituted standardized SOPs for data hygiene, reducing data entry errors by over 90%.",
      "Collaborated with cross-functional team leaders to resolve operational bottlenecks within 24 hours of detection.",
    ],
    skills: ["Advanced Excel", "Power Query", "Data Validation", "SOP Development", "Cross-team Collaboration"],
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    category: "Spreadsheet Engineering",
    icon: "Table",
    skills: [
      { name: "Advanced MS Excel", level: "Expert", highlight: true },
      { name: "Advanced Google Sheets", level: "Expert", highlight: true },
      { name: "Dynamic Array Formulas (FILTER, XLOOKUP)", level: "Expert", highlight: true },
      { name: "Power Query & Data Cleansing", level: "Advanced", highlight: true },
      { name: "QUERY Language & IMPORTRANGE", level: "Expert", highlight: true },
      { name: "Data Modeling & Pivot Tables", level: "Advanced" },
      { name: "Conditional Formatting Engines", level: "Advanced" },
      { name: "Formula Error-Proofing (IFERROR, LET, LAMBDA)", level: "Expert" },
    ],
  },
  {
    category: "Workflow Automation & Scripting",
    icon: "Zap",
    skills: [
      { name: "Google Apps Script (GAS)", level: "Advanced", highlight: true },
      { name: "JavaScript for Automation", level: "Proficient", highlight: true },
      { name: "Event Triggers & Batch Syncs", level: "Advanced", highlight: true },
      { name: "Webhook & REST API Integration", level: "Advanced" },
      { name: "Automated Email & Slack Dispatches", level: "Advanced" },
      { name: "VBA & Macro Optimization", level: "Proficient" },
    ],
  },
  {
    category: "Analytics & Business Intelligence",
    icon: "PieChart",
    skills: [
      { name: "Executive KPI Dashboards", level: "Expert", highlight: true },
      { name: "SLA Tracking & Performance Metrics", level: "Expert", highlight: true },
      { name: "Trend Analysis & Variance Modeling", level: "Advanced" },
      { name: "Interactive Slicers & Visual Charts", level: "Advanced" },
      { name: "Root Cause Analysis", level: "Advanced" },
      { name: "Operational Reporting Cadences", level: "Expert" },
    ],
  },
  {
    category: "Operations Management",
    icon: "Briefcase",
    skills: [
      { name: "Process Optimization & Lean Workflows", level: "Advanced", highlight: true },
      { name: "Standard Operating Procedures (SOPs)", level: "Advanced", highlight: true },
      { name: "Capacity & Resource Planning", level: "Advanced" },
      { name: "Cross-Functional Team Leadership", level: "Proficient" },
      { name: "Quality Assurance & Data Audits", level: "Expert" },
      { name: "Problem Solving & Conflict Resolution", level: "Advanced" },
    ],
  },
];

export const awardsData: AwardItem[] = [
  {
    title: "Operational Excellence & Innovation Award",
    issuer: "Enterprise Operations Leadership",
    year: "2024",
    description: "Awarded in recognition of pioneering automated spreadsheet reconciliation systems that saved over 120+ manual hours each month and completely eradicated monthly data discrepancy.",
  },
  {
    title: "Best Process Optimization Contributor",
    issuer: "Operational Management Review",
    year: "2023",
    description: "Honored for designing resilient zero-touch Google Apps Script pipelines and establishing bulletproof data validation protocols across multiple branch operations.",
  },
  {
    title: "Outstanding Performance Recognition",
    issuer: "Annual Leadership Summit",
    year: "2022",
    description: "Recognized for exemplary dedication in SLA compliance governance and building high-impact executive analytics scorecards that accelerated leadership decision-making.",
  },
];

export const learningJourneyData: LearningItem[] = [
  {
    skill: "SQL (Structured Query Language)",
    status: "Active Focus",
    progress: 85,
    description: "Relational database querying, multi-table joins, subqueries, indexing, and aggregating massive datasets in PostgreSQL / MySQL.",
    icon: "Database",
  },
  {
    skill: "Python for Data Science & Automation",
    status: "Active Focus",
    progress: 75,
    description: "Data manipulation with Pandas & NumPy, script automation, data cleaning, and REST API ingestion pipelines.",
    icon: "Terminal",
  },
  {
    skill: "Microsoft Power BI",
    status: "Active Focus",
    progress: 80,
    description: "Enterprise DAX formulas, dimensional star-schema modeling, and interactive visual reporting suites.",
    icon: "BarChart",
  },
  {
    skill: "Modern Web Development (React / Astro)",
    status: "Expanding Stack",
    progress: 70,
    description: "Building responsive, cloud-connected internal tools and operational monitoring dashboards with Astro, React, and Tailwind CSS.",
    icon: "Globe",
  },
];
