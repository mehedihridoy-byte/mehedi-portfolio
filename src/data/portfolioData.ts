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
  badge?: string;
  // Fields for showcasing real Google Sheets, Excel templates, and CSV files:
  sheetUrl?: string; // Live Google Sheet preview / template link
  csvUrl?: string;   // Direct downloadable CSV / sample file
  clientBenefit?: string; // Value proposition for prospective clients
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

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  grade: string;
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
  title: "Sr. Executive, Operations · Advanced Excel & Google Sheets Specialist",
  currentRole: "Sr. Executive, Operations at Shikho Technologies Bangladesh",
  tagline: "Engineering enterprise-grade Google Sheets, advanced Excel models, and automated Apps Script workflows for high-growth businesses and operational teams.",
  shortBio: "Currently Senior Executive, Operations at Shikho Technologies Bangladesh with 5+ years scaling operations across 12,000+ live sessions and leading a 6-member team. I partner with business owners and operations leaders to replace tedious manual spreadsheets with automated, error-free Google Sheets and dynamic Excel systems.",
  location: "Dhaka, Bangladesh",
  statusBadge: "Available for Excel & Google Sheets Client Projects",
  phone: "+880 1970 300 717",
  email: "mehedihassanhm17@gmail.com",
  linkedin: "https://www.linkedin.com/in/md-mehedi-hassan-80481a333/",
  github: "https://github.com/mehedihridoy-byte",
  resumeUrl: "/resume-mehedi-hassan.pdf",
  photoUrl: "/mehedi-portrait.jpg",
  clientPitch: "Need to automate your Google Sheets, build an executive KPI dashboard, or eliminate manual data entry? Let's discuss your spreadsheet architecture.",
};

export const keyMetrics = [
  { value: "12,000+", label: "Live Sessions Managed", subtext: "at Shikho Technologies" },
  { value: "4,200+", label: "Personally Monitored", subtext: "with 100% QA compliance" },
  { value: "5+ Years", label: "Operations & Sheets", subtext: "scaling multi-team systems" },
  { value: "120+ Hrs", label: "Monthly Time Saved", subtext: "via Apps Script automation" },
];

export const coreExpertise = [
  {
    title: "Advanced Google Sheets Systems",
    icon: "Table",
    description: "Designing multi-tab collaborative spreadsheet ecosystems with QUERY, IMPORTRANGE, ARRAYFORMULA, REGEX extraction, and dynamic data validation.",
    tags: ["QUERY Language", "IMPORTRANGE Networks", "ARRAYFORMULA", "Dynamic Validation", "Multi-tab Linking"],
  },
  {
    title: "Advanced Microsoft Excel Modeling",
    icon: "FileSpreadsheet",
    description: "Architecting financial, inventory, and operational models utilizing dynamic array formulas (XLOOKUP, FILTER), Power Query pipelines, and VBA macro automations.",
    tags: ["Power Query", "Dynamic Arrays (FILTER/LET)", "XLOOKUP / INDEX-MATCH", "VBA & Macros", "Pivot Analytics"],
  },
  {
    title: "Google Apps Script & Automation",
    icon: "Cpu",
    description: "Building zero-touch automations: auto-generating invoices, sending scheduled alerts, syncing form submissions, and locking completed rows automatically.",
    tags: ["Custom Functions", "Time & Event Triggers", "Webhook & REST APIs", "Email / Slack Alerts", "Zero-Touch Sync"],
  },
  {
    title: "Executive KPI Dashboards",
    icon: "BarChart3",
    description: "Transforming dense, messy spreadsheets into visual management dashboards with interactive slicers, conditional formatting cards, and automated trend summaries.",
    tags: ["Interactive Slicers", "Visual Scorecards", "SLA Monitoring", "Trend Discovery", "Automated PDF Exports"],
  },
  {
    title: "Operations & Resource Planning",
    icon: "Workflow",
    description: "5+ years managing high-volume operations: coordinating 30+ daily live classes across 7 physical classrooms, optimizing teacher schedules, and managing SLAs.",
    tags: ["Resource Planning", "Classroom Operations", "Capacity Optimization", "SOP Creation", "Cost Reduction"],
  },
  {
    title: "Team Leadership & Data Governance",
    icon: "Users",
    description: "Leading 6-member operational teams with direct reporting, enforcing strict data hygiene, preventing formula overwrites, and establishing standardized checklists.",
    tags: ["Team Leadership", "Task Allocation", "Data Integrity", "Quality Assurance", "SOP Documentation"],
  },
];

export const featuredProjects: Project[] = [
  {
    id: "live-operations-management-system",
    title: "Automated Live Class Operations Management System",
    subtitle: "Real-time Google Sheets tracking system coordinating 30+ daily classes across 7 classrooms",
    category: "Google Sheets & Apps Script",
    problem: "Coordinating 30+ daily high-stakes live classes across 7 physical classrooms with multiple instructors and technical teams resulted in scheduling overlaps, communication latency, and delayed issue resolution.",
    solution: "Built a centralized Google Sheets command center powered by Google Apps Script that automatically aggregates classroom schedules, tracks live status, verifies teacher checklists, and alerts managers instantly upon any delay.",
    tools: ["Google Sheets", "Google Apps Script", "QUERY", "Event Triggers", "Conditional Formatting"],
    outcomes: [
      "Successfully scaled to manage 12,000+ live classes with zero scheduling collision",
      "Cut incident response time from 15 minutes to under 60 seconds",
      "Maintained 99.8% on-time class start rate across 7 concurrent studios",
    ],
    metrics: [
      { label: "Classes Scaled", value: "12,000+" },
      { label: "Classrooms", value: "7 Studios" },
      { label: "Incident Latency", value: "< 60s" },
    ],
    featured: true,
    badge: "Enterprise Scale",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
    csvUrl: "/templates/sample-ops-template.csv",
    clientBenefit: "Ideal for training centers, edtech companies, and coaching institutes needing flawless daily session scheduling.",
  },
  {
    id: "enterprise-cross-department-reporting",
    title: "Multi-Department Automated Reconciliation & Reporting Engine",
    subtitle: "Advanced Excel Power Query pipeline consolidating 15+ sub-team inputs into one executive dashboard",
    category: "Advanced Microsoft Excel",
    problem: "Operational data from disparate branches arrived in varying formats, requiring 3-4 hours of daily manual copy-pasting, cleaning, and reconciliation prone to calculation errors.",
    solution: "Engineered an automated Excel Power Query and dynamic array model (XLOOKUP, FILTER, LAMBDA) that ingests raw departmental CSVs, executes automated validation checks, and compiles daily executive summaries in seconds.",
    tools: ["Advanced Excel", "Power Query", "Dynamic Arrays", "Data Modeling", "Error Proofing"],
    outcomes: [
      "Replaced 3.5 hours of daily repetitive grunt work with a 1-click refresh",
      "Achieved 100% mathematical accuracy with automated discrepancy flags",
      "Standardized operational reporting format across all business units",
    ],
    metrics: [
      { label: "Time Reclaimed", value: "85%" },
      { label: "Accuracy", value: "100%" },
      { label: "Refresh Time", value: "< 30s" },
    ],
    featured: true,
    badge: "Excel Mastery",
    csvUrl: "/templates/sample-ops-template.csv",
    clientBenefit: "Perfect for retail chains, e-commerce, and logistics firms consolidating daily sales, inventory, and expense sheets.",
  },
  {
    id: "google-apps-script-workflow-automation",
    title: "Zero-Touch Form-to-Sheet Automation & Notification Engine",
    subtitle: "Google Apps Script webhook pipeline automating data intake, validation, and dynamic email dispatch",
    category: "Workflow Automation",
    problem: "Staff spent 120+ hours each month manually reviewing web form submissions, copying customer details into master sheets, and composing confirmation emails one by one.",
    solution: "Architected a custom Google Apps Script automation that listens to form submissions via webhooks, sanitizes data, appends rows to secured Google Sheets, generates confirmation PDFs, and sends personalized Gmail alerts instantly.",
    tools: ["Google Apps Script", "Webhooks", "Gmail API", "Drive API", "JSON Parsing"],
    outcomes: [
      "Reclaimed 120+ monthly operational hours for high-value strategic execution",
      "Instant sub-minute confirmation delivery to incoming customers",
      "Zero missed submissions or communication lapses over 12 months",
    ],
    metrics: [
      { label: "Monthly Saved", value: "120+ Hrs" },
      { label: "Turnaround", value: "< 1 Min" },
      { label: "Uptime", value: "100%" },
    ],
    featured: true,
    badge: "High ROI Automation",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
    csvUrl: "/templates/sample-ops-template.csv",
    clientBenefit: "Crucial for service businesses, agencies, and recruiters seeking automated customer onboarding and lead management.",
  },
  {
    id: "operational-kpi-performance-dashboard",
    title: "1,000+ Activity KPI Performance & SLA Tracking Dashboard",
    subtitle: "Executive tracking dashboard monitoring team output, classroom efficiency, and operational bottlenecks",
    category: "Data Analytics & Dashboards",
    problem: "Leadership lacked transparent, real-time visibility into daily team activities, SLA fulfillment rates, and operational delay patterns across busy quarterly cycles.",
    solution: "Constructed a comprehensive visual KPI tracking dashboard in Google Sheets utilizing custom QUERY formulas, timeline slicers, visual progress indicators, and automated weekly summaries for management reviews.",
    tools: ["Google Sheets", "QUERY Language", "Conditional Formatting", "Interactive Slicers", "Trendlines"],
    outcomes: [
      "Tracked and optimized performance across 1,000+ operational activities",
      "Improved on-time SLA fulfillment rate by 28%",
      "Enabled team leads to pinpoint and eliminate bottlenecks within 24 hours",
    ],
    metrics: [
      { label: "Activities Tracked", value: "1,000+" },
      { label: "SLA Increase", value: "+28%" },
      { label: "Detection Speed", value: "3x Faster" },
    ],
    featured: true,
    sheetUrl: "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
    clientBenefit: "Designed for department heads and team managers needing clear, real-time oversight of staff KPIs and task completion rates.",
  },
  {
    id: "multi-agent-data-integrity-control",
    title: "Concurrent Multi-User Sheet Protection & Row-Locking Suite",
    subtitle: "Google Apps Script security system preventing formula overwrites and accidental edits during concurrent team entry",
    category: "Google Sheets Security & Architecture",
    problem: "Multiple operational staff updating spreadsheets simultaneously caused frequent formula overwrites, deleted records, and unverified data entries that compromised historical reporting.",
    solution: "Developed an automated sheet governance system with cell-level change listeners: automatically locks completed rows against further edits, enforces dropdown validation, and maintains a hidden timestamped audit log.",
    tools: ["Google Apps Script", "Event Listeners", "Permission Governance", "Audit Logs", "Data Validation"],
    outcomes: [
      "Enforced 100% data integrity across 40+ concurrent operational users",
      "Completely prevented accidental formula deletions or overwrite errors",
      "Created an automated forensic audit trail of all row additions and edits",
    ],
    metrics: [
      { label: "Integrity Rate", value: "100%" },
      { label: "Concurrent Staff", value: "40+ Users" },
      { label: "Overwrite Errors", value: "0" },
    ],
    featured: true,
    badge: "Zero-Touch Governance",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
    csvUrl: "/templates/sample-ops-template.csv",
    clientBenefit: "Essential for teams with multiple remote or field data-entry agents working on shared master spreadsheets.",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2024 – PRESENT",
    role: "Senior Executive Operations",
    company: "Shikho Technologies Bangladesh",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Leading a 6-member Operations team, managing daily workload, performance, and high-volume live class operations. Architecting automated Google Sheets and Google Apps Script dashboards to optimize operational workflows.",
    achievements: [
      "Led a 6-member Operations team, with all members reporting directly, managing daily workload, performance, and operational execution.",
      "Managed 12,000+ live classes and personally monitored 4,200+ classes, ensuring on-time execution, quality control, issue resolution, and operational standards.",
      "Managed 30+ daily classes across 7 classrooms, coordinating teachers, schedules, resources, and technical operations while optimizing resource utilization and reducing operational costs.",
      "Built automated dashboards using Google Sheets & Google Apps Script, reducing manual work and improving operational tracking, reporting, and data-driven decision-making.",
      "KPI tracking and operational reporting for 1,000+ activities, improving performance visibility and enabling timely follow-up on operational gaps.",
    ],
    skills: ["Google Sheets & Apps Script", "Team Leadership (6 Members)", "12,000+ Classes Scaled", "Resource Planning", "KPI Dashboards"],
  },
  {
    period: "2022 – 2024",
    role: "Executive Operations",
    company: "Shikho Technologies Bangladesh",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Developed and standardized daily operational processes, checklists, and cross-functional coordination across 7 concurrent classrooms.",
    achievements: [
      "Developed and standardized daily operational processes and checklists across 7 classrooms, improving workflow consistency and smooth execution.",
      "Identified and resolved recurring operational bottlenecks through data analysis, issue tracking, and cross-functional coordination, improving process efficiency and reducing operational delays.",
      "Maintained strict quality control for classroom academic assets, recordings, and live event logistics.",
    ],
    skills: ["Process Standardization", "7 Classrooms Governance", "Bottleneck Elimination", "Data Analysis", "Cross-functional Coordination"],
  },
  {
    period: "2021 – 2022",
    role: "Jr. Executive Operations",
    company: "Shikho Technologies Bangladesh",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Executed live class operations, coordinated teacher schedules, monitored classes, and managed academic resources.",
    achievements: [
      "Executed Live Class Operations, coordinating teachers, monitoring classes, managing schedules, and resolving operational issues on the ground.",
      "Supported resource development and reviewed recordings, PDFs, and academic materials for content quality and accuracy.",
      "Identified operational bottlenecks, coordinated issue resolution, and improved daily workflows and processes.",
    ],
    skills: ["Live Operations", "Teacher Coordination", "Schedule Management", "Resource Quality Check", "Issue Resolution"],
  },
];

export const awardsData: AwardItem[] = [
  {
    title: "Seize Ownership Award",
    issuer: "Shikho Technologies Bangladesh",
    year: "Q1 2026",
    description: "Recognized for proactive problem-solving, exceptional ownership, initiative, and contributions far beyond assigned responsibilities.",
  },
  {
    title: "Top Performer of the Quarter",
    issuer: "Shikho Technologies Bangladesh",
    year: "Q3 2024",
    description: "Recognized for exemplary KPI performance, operational excellence, high data accuracy, and significant team leadership contribution.",
  },
  {
    title: "Grow 100X Award",
    issuer: "Shikho Technologies Bangladesh",
    year: "2022",
    description: "Awarded in recognition of exceptional operational contribution, process optimization, and scalable business impact.",
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Arts in English Literature",
    institution: "National University",
    year: "Graduated: 2024",
    grade: "GPA: 2.80",
  },
];

export const certificationsList = [
  "Google Sheets & Advanced Excel",
  "Data Analysis & Visualization",
  "Operations Management",
  "Project & Stakeholder Management",
  "Leadership & Team Management",
];

export const skillsCategories: SkillCategory[] = [
  {
    category: "Google Sheets & Apps Script (Primary Client Service)",
    icon: "Table",
    skills: [
      { name: "Advanced Google Sheets Architecture", level: "Expert", highlight: true },
      { name: "Google Apps Script (GAS) Automation", level: "Expert", highlight: true },
      { name: "QUERY Language & Database Modeling", level: "Expert", highlight: true },
      { name: "IMPORTRANGE & Multi-Sheet Sync", level: "Expert", highlight: true },
      { name: "ARRAYFORMULA & Dynamic Expansion", level: "Expert", highlight: true },
      { name: "Automated Triggers (Time/Edit/Submit)", level: "Advanced", highlight: true },
      { name: "Cell-Level Row Locking & Permissions", level: "Expert" },
      { name: "Custom Webhook & API Data Ingestion", level: "Advanced" },
    ],
  },
  {
    category: "Microsoft Excel Solutions",
    icon: "FileSpreadsheet",
    skills: [
      { name: "Advanced Microsoft Excel", level: "Expert", highlight: true },
      { name: "Power Query ETL Pipelines", level: "Advanced", highlight: true },
      { name: "Dynamic Arrays (FILTER, XLOOKUP, LET)", level: "Expert", highlight: true },
      { name: "Interactive Slicers & Pivot Analytics", level: "Expert", highlight: true },
      { name: "VBA & Macro Optimization", level: "Proficient" },
      { name: "Conditional Formatting Visual Engines", level: "Advanced" },
      { name: "Financial & Reconciliation Modeling", level: "Advanced" },
    ],
  },
  {
    category: "Data Analytics & Dashboards",
    icon: "PieChart",
    skills: [
      { name: "Executive KPI Dashboard Development", level: "Expert", highlight: true },
      { name: "SLA Tracking & Performance Scorecards", level: "Expert", highlight: true },
      { name: "Operational Bottleneck Detection", level: "Expert", highlight: true },
      { name: "Visual Data Storytelling", level: "Advanced" },
      { name: "Automated Reporting Cadences", level: "Expert" },
      { name: "Variance & Trend Analysis", level: "Advanced" },
    ],
  },
  {
    category: "Operations Management & Leadership",
    icon: "Briefcase",
    skills: [
      { name: "Operations Management (5+ Years)", level: "Expert", highlight: true },
      { name: "Team Leadership (6-Member Direct Reports)", level: "Expert", highlight: true },
      { name: "Live Class Operations (12,000+ Sessions)", level: "Expert", highlight: true },
      { name: "Standard Operating Procedures (SOPs)", level: "Expert", highlight: true },
      { name: "Resource & Classroom Allocation", level: "Expert" },
      { name: "Stakeholder Management & Quality Control", level: "Expert" },
    ],
  },
];
