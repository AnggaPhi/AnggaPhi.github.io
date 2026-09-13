export interface Skill {
  name: string;
  category: "3D Modeling & Sculpting" | "E-Commerce" | "AI & Agents" | "IT & Infra" | "Web & Code" | "Marketing";
  level: "Advanced" | "Proficient" | "Specialist";
  iconName: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  id: string;
  title: string;
  provider: string;
  period: string;
  description: string;
  type: "Certification" | "Course" | "Formal";
  icon: string;
  certUrl?: string;
  linkText?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "3D Work" | "2D Work" | "Tech & AI";
  shortDesc: string;
  fullDesc: string;
  tools: string[];
  specifications: Record<string, string>;
  highlights: string[];
  imagePlaceholderColor: string;
  imageType: "bracket" | "enclosure" | "fixture" | "qr-insert" | "storefront" | "marketing" | "portfolio" | "ai-agents";
  demoUrl?: string;
  githubUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Angga Prawira",
  handle: "AnggaPhi",
  role: "E-Commerce Specialist | 3D Printing Specialist | AI Explorer | IT Consultant",
  location: "Tangerang Selatan, Banten",
  email: "anggaprawira501@gmail.com",
  phone: "+62-8591-0668-9010",
  linkedin: "https://linkedin.com/in/anggaprawira/",
  github: "https://github.com/anggaphi",
  bioHeadline: "Multi-disciplinary professional skilled in e-commerce optimization, 3D modeling, 3D sculpting & printing, AI prompt engineering, digital marketing, and IT infrastructure support.",
  bioSummary: "Passionate about merging technology, craft, and innovative problem-solving. Whether engineering functional 3D prototypes with tight caliper tolerances, scaling multi-channel marketplace revenues, or designing high-conversion digital experiences, I build reliable, well-structured solutions.",
  statusText: "Open to Work & Tech Collaborations",
  isOpenToWork: true,
};

export const CODE_SNIPPET = {
  variable: "angga",
  properties: [
    { key: "name", value: "\"Angga Prawira\"" },
    { key: "location", value: "\"Tangerang Selatan, Banten\"" },
    { key: "primaryFocus", value: "[\"E-Commerce\", \"3D Modeling\", \"AI Prompts\", \"IT Infra\"]" },
    { key: "modelingTooling", value: "\"Blender v3.8+ (3D Modeling & Sculpting) & Ultimaker Cura\"" },
    { key: "additiveMachine", value: "\"Anycubic Kobra Go (FDM)\"" },
    { key: "status", value: "\"Available for Full-time & Freelance\"" },
  ],
};

export const SKILLS_DATA: Skill[] = [
  // 3D Modeling & Sculpting
  { name: "Blender 3D Modeling", category: "3D Modeling & Sculpting", level: "Advanced", iconName: "Box", description: "Precision 3D modeling, manifold mesh topology, and functional rapid prototyping." },
  { name: "Blender 3D Sculpting", category: "3D Modeling & Sculpting", level: "Advanced", iconName: "PenTool", description: "Organic surface detailing, ergonomic curves, and custom artistic craft meshes." },
  { name: "Ultimaker Cura", category: "3D Modeling & Sculpting", level: "Advanced", iconName: "Layers", description: "Slicing optimization, custom wall perimeters, support structures & infill tuning." },
  { name: "Anycubic Kobra Go", category: "3D Modeling & Sculpting", level: "Specialist", iconName: "Printer", description: "Bed leveling calibration, extrusion tuning, and multi-material FDM printing." },
  { name: "Caliper Tolerance (±0.15mm)", category: "3D Modeling & Sculpting", level: "Specialist", iconName: "Ruler", description: "Digital caliper dimensional measurement for reverse-engineered 3D printed enclosures." },
  { name: "Additive Manufacturing", category: "3D Modeling & Sculpting", level: "Proficient", iconName: "Cpu", description: "Functional mechanical parts, studio fixtures, and stress-tested prototypes." },

  // E-Commerce
  { name: "Shopee Marketplace", category: "E-Commerce", level: "Advanced", iconName: "ShoppingBag", description: "Storefront branding, SEO tags, campaign flash deals, and order ops." },
  { name: "Tokopedia Seller", category: "E-Commerce", level: "Advanced", iconName: "Store", description: "Catalog management, promotional features, and conversion rate optimization." },
  { name: "TikTok Shop", category: "E-Commerce", level: "Proficient", iconName: "Video", description: "Video product tagging, short-form live commerce, and buyer onboarding." },
  { name: "Inventory Sync", category: "E-Commerce", level: "Advanced", iconName: "Database", description: "Multi-channel stock balancing across digital marketplace portals." },
  { name: "Conversion Rate (CRO)", category: "E-Commerce", level: "Proficient", iconName: "TrendingUp", description: "A/B testing visual thumbnails, descriptions, and purchase packaging." },
  { name: "Customer Experience (CX)", category: "E-Commerce", level: "Advanced", iconName: "Smile", description: "Reducing customer friction via interactive onboarding and guides." },

  // AI & Agents
  { name: "AI Prompt Engineering", category: "AI & Agents", level: "Advanced", iconName: "Sparkles", description: "Zero-shot, few-shot, and chain-of-thought system prompts for LLMs." },
  { name: "Claude & LLM Workflows", category: "AI & Agents", level: "Advanced", iconName: "Bot", description: "Automated document processing, catalog formatting, and data parsing." },
  { name: "Agentic Systems", category: "AI & Agents", level: "Proficient", iconName: "Workflow", description: "Autonomous task pipelines with OpenCode, tools, and structured outputs." },
  { name: "Context Window Tuning", category: "AI & Agents", level: "Proficient", iconName: "BrainCircuit", description: "Information architecture and context optimization for complex coding agent runs." },

  // IT & Infra
  { name: "IT Hardware Maintenance", category: "IT & Infra", level: "Advanced", iconName: "Wrench", description: "Diagnostic troubleshooting, hardware repairs, and peripheral setups." },
  { name: "Network Infrastructure", category: "IT & Infra", level: "Proficient", iconName: "Network", description: "Local LAN/WLAN configuration, router/switch maintenance, subnet management." },
  { name: "Windows / Linux Admin", category: "IT & Infra", level: "Advanced", iconName: "Terminal", description: "OS deployment, routine backup protocols, and automated maintenance tasks." },
  { name: "Cybersecurity Basics", category: "IT & Infra", level: "Proficient", iconName: "Shield", description: "Vulnerability reduction, defensive hygiene, and credential security." },

  // Web & Code
  { name: "React.js & TypeScript", category: "Web & Code", level: "Proficient", iconName: "Code", description: "Modern functional components, hooks, type safety, and reactive states." },
  { name: "Tailwind CSS", category: "Web & Code", level: "Advanced", iconName: "Palette", description: "Responsive layouts, design systems, CSS variables, and multi-theming." },
  { name: "HTML5 / CSS3", category: "Web & Code", level: "Advanced", iconName: "FileCode", description: "Semantic markup, flexbox/grid architecture, and accessible UX." },
  { name: "Git & GitHub", category: "Web & Code", level: "Proficient", iconName: "GitBranch", description: "Version control, branching strategies, and open-source contributions." },

  // Marketing
  { name: "Meta Ads & Campaigns", category: "Marketing", level: "Proficient", iconName: "Target", description: "Audience targeting, creative testing, and ROAS measurement." },
  { name: "Graphic Design", category: "Marketing", level: "Advanced", iconName: "PenTool", description: "Marketing visual suites, interactive packaging, and brand guidelines." },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: "exp-1",
    role: "E-Commerce Store Associate",
    company: "Rumah Tanah Liat Citra",
    location: "Tangerang Selatan, Banten",
    period: "July 2026 – Present",
    type: "Full-Time • Onsite",
    summary: "Managing multi-channel marketplace operations across Shopee, Tokopedia, and TikTok Shop, optimizing product visuals, synchronizing digital/physical inventory, and designing interactive QR customer experience tutorials.",
    achievements: [
      "Managed and synchronized multi-channel product listings across major e-commerce platforms, including Shopee, Tokopedia, and TikTok Shop, to expand market reach and ensure product data consistency.",
      "Optimized product visuals and descriptions by updating high-quality images, videos, and specifications to enhance store aesthetics, drive engagement, and improve conversion rates.",
      "Maintained inventory accuracy by performing regular digital and physical stock updates to mitigate the risk of order cancellations due to stock discrepancies.",
      "Enhanced customer experience (CX) by conceptualizing and designing interactive QR code product tutorials included in purchase packages, successfully minimizing customer inquiries and post-purchase complaints.",
      "Oversaw the end-to-end order fulfillment process, including strict quality control, secure standardized packaging, and logistics coordination to guarantee timely and accurate order dispatch.",
    ],
    skills: ["Shopee", "Tokopedia", "TikTok Shop", "Inventory Management", "Customer Experience (CX)", "Order Fulfillment"],
  },
  {
    id: "exp-2",
    role: "Workshop Support Staff",
    company: "Rumah Tanah Liat Citra",
    location: "Tangerang Selatan, Banten",
    period: "Jan 2026 – Present",
    type: "Onsite",
    summary: "Managing craft equipment organization and maintenance, preparing workstation setups, and guiding session participants alongside workshop instructors.",
    achievements: [
      "Managed cleaning, maintenance, and organization of craft equipment, including pottery wheels, tools, and aprons, ensuring a safe and hygienic workshop environment.",
      "Prepared workshop setups by arranging materials, tools, and participant workstations, while ensuring all equipment functioned properly before each session.",
      "Assisted participants during activities by providing basic guidance in pottery-making and maintaining clear, friendly communication to enhance their experience.",
      "Supported instructors during sessions by distributing materials, monitoring participant needs, and helping maintain a smooth and efficient workflow.",
    ],
    skills: ["Workshop Operations", "Equipment Maintenance", "Pottery Guidance", "Session Preparation"],
  },
  {
    id: "exp-3",
    role: "Live Host Intern",
    company: "Arinda Food",
    location: "Tangerang Selatan, Banten",
    period: "Aug 2025 – Jan 2026",
    type: "Internship • Onsite",
    summary: "Hosted live streaming commerce broadcasts, drove sales conversions through real-time communication, and analyzed live session engagement metrics.",
    achievements: [
      "Host live streaming sessions, present products clearly, and drive sales through effective communication and selling techniques.",
      "Engage with viewers in real-time by responding to comments, answering questions, and using interactive strategies to boost audience engagement.",
      "Collaborate with the team, follow live run-downs, and analyze performance metrics to improve future live sessions.",
    ],
    skills: ["Live Streaming Commerce", "Audience Engagement", "Sales Communication", "Performance Analytics"],
  },
  {
    id: "exp-4",
    role: "Freelance 3D Modeling & Printing Specialist",
    company: "Freelance",
    location: "Tangerang Selatan, Banten",
    period: "Oct 2024 – Nov 2025",
    type: "Freelance • Remote/Hybrid",
    summary: "Executed end-to-end 3D printing operations with Anycubic Kobra Go, engineered functional load-bearing prototypes, captured precision caliper dimensions, and modeled complex geometries in Blender.",
    achievements: [
      "Managed end-to-end 3D printing operations utilizing the Anycubic Kobra Go, routinely performing complex mechanical calibrations—including precise bed leveling and 3-axis adjustments—to maintain optimal machine performance and print fidelity.",
      "Engineered functional prototypes and robust components tailored for real-world utility and high-stress applications, such as specialized joints, brackets, or load-bearing parts used within larger structural frameworks and foundational building projects.",
      "Translated physical dimensions into highly accurate digital models by utilizing digital calipers to achieve precise millimeter accuracy, ensuring all printed parts fit their intended mechanical purposes perfectly.",
      "Designed and manipulated complex 3D geometries using Blender (v3.82+), emphasizing spatial computing, structural integrity, and clean topological design.",
      "Optimized production workflows by slicing models in Ultimaker Cura, strategically adjusting print parameters like infill density, support structures, and layer height to balance print speed with structural durability.",
    ],
    skills: ["Blender 3D Modeling", "3D Sculpting", "Ultimaker Cura", "Anycubic Kobra Go", "Digital Calipers", "Rapid Prototyping"],
  },
  {
    id: "exp-5",
    role: "Digital Marketing Assistant",
    company: "Freelance / Contract",
    location: "Tangerang Selatan, Banten",
    period: "Sep 2024 – Aug 2025",
    type: "Contract • Hybrid",
    summary: "Executed social media content planning and publishing, supported organic SEO and paid ad campaigns, and tracked marketing performance metrics.",
    achievements: [
      "Managed social media content, including creation, scheduling, and audience engagement to improve brand visibility.",
      "Supported digital marketing campaigns through content creation, SEO optimization for website/blog content, and basic management (Meta Ads, Google Business).",
      "Monitored performance metrics, conducted market research, and prepared reports to optimize campaign effectiveness.",
    ],
    skills: ["Social Media Management", "Content Creation", "SEO Optimization", "Meta Ads", "Google Business", "Campaign Analytics"],
  },
  {
    id: "exp-6",
    role: "IT Support School Consultant",
    company: "Home School Tunas Bangsa",
    location: "Tangerang Selatan, Banten",
    period: "Jun 2022 – Jun 2023",
    type: "Contract • Onsite",
    summary: "Provided school-wide technical troubleshooting, network optimization, vulnerability mitigation, and automated computer system maintenance.",
    achievements: [
      "Provided technical support to students and staff by efficiently resolving hardware, software, and network issues within the school environment, reducing downtime by 30% and improving response times by 25% through effective troubleshooting protocols.",
      "Managed system updates, backups, and security measures for the school's computers, ensuring systems were up-to-date and secure, resulting in a 20% reduction in vulnerabilities and enhancing system reliability by 35% through regular maintenance.",
      "Oversaw the setup and maintenance of the school's IT infrastructure, successfully implementing and maintaining a robust system that enhanced network performance by 30% and improved security through strategic upgrades, reducing security incidents by 25%.",
    ],
    skills: ["IT Technical Support", "Troubleshooting Protocols", "Hardware & Software", "System Updates & Backups", "Network Infrastructure"],
  },
  {
    id: "exp-7",
    role: "Information Communication Technology Teacher (Junior Highschool)",
    company: "Home School Tunas Bangsa",
    location: "Tangerang Selatan, Banten",
    period: "Jul 2021 – Jun 2022",
    type: "Full-Time • Onsite",
    summary: "Formulated semester syllabus and teaching plans for junior high students (grades 7-9), delivering interactive hands-on ICT instruction and managing lab resources.",
    achievements: [
      "Prepared engaging Semester Programs and Teaching Plans for junior high students (grades 7-9), incorporating principal's suggestions, resulting in a 30% decrease in student absenteeism.",
      "Used interactive methods to encourage discussion and hands-on learning, leading to a 35% increase in students' understanding of ICT concepts.",
      "Efficiently managed classroom ICT equipment and resources, ensuring seamless teaching and learning experiences, resulting in a 25% reduction in technical disruptions during lessons.",
    ],
    skills: ["ICT Curriculum Planning", "Semester Programs", "Interactive Teaching", "Classroom Resource Management"],
  },
  {
    id: "exp-8",
    role: "Assistant Teacher for Information Communication Technology Subject",
    company: "Home School Tunas Bangsa",
    location: "Tangerang Selatan, Banten",
    period: "Jul 2020 – Jun 2021",
    type: "Full-Time • Onsite",
    summary: "Assisted lead instructor in lesson delivery, maintained virtual classroom continuity during COVID-19, and guided student practical ICT exercises.",
    achievements: [
      "Assisted the lead teacher in delivering engaging ICT lessons and preparing instructional materials, resulting in a 40% improvement in student engagement during classes.",
      "Streamlined virtual classroom operations during the global pandemic (COVID-19), ensured uninterrupted education for 10 students.",
      "Guided students in conducting practical exercises and projects in ICT, leading to a 30% improvement in students' practical skills and project outcomes.",
      "Collaborated on program development and efficiently managed classroom ICT equipment, resulting in a 20% reduction in technology-related downtime and disruptions.",
    ],
    skills: ["Virtual Classroom Operations", "Instructional Material Design", "Student Practical Guidance", "Hardware Management"],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "edu-1",
    title: "Online Course - Artificial Intelligence Fundamentals",
    provider: "MySkill.id",
    period: "Sep 2023",
    description: "Fundamentals of artificial intelligence, machine learning concepts, and practical generative workflows.",
    type: "Course",
    icon: "Bot",
    certUrl: "https://drive.google.com/file/d/1uzjHzlFmKPw_qE5h1kLehzaY7Wn2s2Aj/view?usp=sharing",
    linkText: "View Certificate",
  },
  {
    id: "edu-2",
    title: "Online Course - Ethical Hacking and Counter Hacking IT for Cyber Security Specialists, Pentesters, and White Hat Hackers.",
    provider: "Course-Net.com",
    period: "Mar 2021",
    description: "Certified program covering penetration testing concepts, counter hacking techniques, defensive security measures, vulnerability assessment, and white-hat methodologies.",
    type: "Certification",
    icon: "ShieldCheck",
    certUrl: "https://drive.google.com/file/d/123GBMV8aaG8kdeqyjU95orOs_Sbqb1Nh/view?usp=sharing",
    linkText: "View Certificate",
  },
  {
    id: "edu-3",
    title: "High School Diploma",
    provider: "PKBM Tunas Bangsa",
    period: "Jan 2017 – Jun 2020",
    description: "Accredited secondary high school education completed in Tangerang Selatan.",
    type: "Formal",
    icon: "GraduationCap",
    certUrl: "https://drive.google.com/file/d/1f-VDtHWGvZpRbEiclAe3_IxLIWjy_gJY/view?usp=sharing",
    linkText: "View Diploma",
  },
];

export const PROJECTS_DATA: Project[] = [
  // 3D Work
  {
    id: "proj-1",
    title: "Load-Bearing Structural Bracket",
    slug: "load-bearing-bracket",
    category: "3D Work",
    shortDesc: "Functional mechanical prototype engineered for real-world stress with manifold topology in Blender and optimized slicing.",
    fullDesc: "Designed to address high mechanical loads in custom fixtures. Modeled with clean manifold geometry in Blender 3D, sliced in Ultimaker Cura with 4 reinforced outer perimeters, and printed using high-adhesion PLA+ on an Anycubic Kobra Go with 40% gyroid infill.",
    tools: ["Blender 3D Modeling", "Ultimaker Cura", "Anycubic Kobra Go", "PLA+ Filament"],
    specifications: {
      "Dimensions": "120 x 85 x 45 mm",
      "Wall Perimeters": "4 (1.6mm thickness)",
      "Infill Pattern": "Gyroid 40%",
      "Layer Height": "0.2mm Precision",
      "Tolerance": "±0.10 mm",
    },
    highlights: [
      "Engineered for structural rigidity under continuous torsional force.",
      "Eliminated internal shear planes via continuous gyroid infill pattern.",
      "Optimized print orientation to avoid brittle horizontal layer delamination.",
    ],
    imagePlaceholderColor: "bg-emerald-950/60 border-emerald-500/30 text-emerald-400",
    imageType: "bracket",
  },
  {
    id: "proj-2",
    title: "Snap-Fit Calibration Enclosure",
    slug: "snap-fit-enclosure",
    category: "3D Work",
    shortDesc: "Reverse-engineered electronics casing utilizing precision digital calipers to achieve strict ±0.15mm tolerance.",
    fullDesc: "A bespoke electronics enclosure engineered to house internal circuitry with zero fasteners. Dimensions were captured using precision digital calipers and translated into parametric Blender 3D mesh components. Features dual cantilever snap latches and heat dissipation vents.",
    tools: ["Digital Calipers", "Blender 3D", "Ultimaker Cura", "Anycubic Kobra Go"],
    specifications: {
      "Tolerance": "±0.15 mm",
      "Locking Mechanism": "Dual Cantilever Snap-Fit",
      "Ventilation": "Passive Convection Slits",
      "Print Duration": "4 hrs 20 mins",
    },
    highlights: [
      "Zero-screw assembly saving manufacturing cost and assembly time.",
      "Verified retention latch deflection cycle without plastic fatigue.",
      "Custom internal standoffs aligned precisely with mounting holes.",
    ],
    imagePlaceholderColor: "bg-teal-950/60 border-teal-500/30 text-teal-400",
    imageType: "enclosure",
  },
  {
    id: "proj-3",
    title: "Workshop Turntable Tooling Guide",
    slug: "workshop-turntable-tooling",
    category: "3D Work",
    shortDesc: "Custom ergonomic pottery craft fixture and centering guide designed for studio workshop sessions.",
    fullDesc: "Designed specifically for pottery students and studio instructors at Rumah Tanah Liat Citra. This ergonomic fixture mounts firmly to rotating banding wheels, providing an immediate tactile centering reference that speeds up artisan workflow and prevents slips.",
    tools: ["Blender 3D Sculpting", "Cura Slicer", "Anycubic Kobra Go", "Industrial Filament"],
    specifications: {
      "Wheel Diameter Fit": "200mm - 250mm Standard",
      "Grip Feature": "Ergonomic knurled texture",
      "Material": "Washable Water-Resistant PETG",
    },
    highlights: [
      "Reduced centering struggle for beginner studio attendees by over 50%.",
      "Fully water and slip resistant for ceramic studio environments.",
      "Tested across over 100 studio workshop hours with zero wear.",
    ],
    imagePlaceholderColor: "bg-amber-950/60 border-amber-500/30 text-amber-400",
    imageType: "fixture",
  },

  // 2D Work & E-Commerce
  {
    id: "proj-4",
    title: "Interactive QR Tutorial Packaging Inserts",
    slug: "interactive-qr-inserts",
    category: "2D Work",
    shortDesc: "Customer onboarding cards packaged into craft kits, reducing onboarding friction and post-purchase complaints.",
    fullDesc: "A complete physical-to-digital onboarding experience. Shipped inside DIY pottery kits at Rumah Tanah Liat Citra, these high-contrast cards feature dynamic QR codes linking to curated video walkthroughs, safety guides, and post-firing care instructions.",
    tools: ["Adobe Illustrator", "Canva Pro", "Dynamic QR Flow", "Figma"],
    specifications: {
      "Print Format": "A6 Matte Heavyweight Cardstock",
      "QR Architecture": "Dynamic Shortlink Tracking",
      "Engagement Metric": "68% Scan Rate",
    },
    highlights: [
      "Decreased post-delivery customer confusion and complaint tickets by 40%.",
      "Achieved a 68% first-week QR scan rate among shipped kit recipients.",
      "Harmonized brand tone with friendly, scannable illustrated instructions.",
    ],
    imagePlaceholderColor: "bg-emerald-900/40 border-emerald-400/30 text-emerald-300",
    imageType: "qr-insert",
  },
  {
    id: "proj-5",
    title: "E-Commerce Storefront Asset Suite",
    slug: "ecommerce-storefront-assets",
    category: "2D Work",
    shortDesc: "Multi-channel visual branding system across Shopee, Tokopedia, and TikTok Shop lifting buyer conversion.",
    fullDesc: "Comprehensive visual overhaul across three major Indonesian e-commerce platforms. Structured banner hierarchies, product thumbnail overlays with key selling points, trust badges, and promotional bundle highlights that increased conversion by 35%.",
    tools: ["Adobe Photoshop", "Illustrator", "Shopee Decorator", "Tokopedia Studio"],
    specifications: {
      "Channels": "Shopee, Tokopedia, TikTok Shop",
      "Asset Count": "45+ Banners, Overlays & Badges",
      "A/B Test Lift": "+35% Storefront Conversion",
    },
    highlights: [
      "Standardized color palette, typographic scales, and certification badges.",
      "Mobile-first banner layout optimized for smartphone app shopping feeds.",
      "Drove higher average basket sizes through bundle promo callouts.",
    ],
    imagePlaceholderColor: "bg-green-950/60 border-green-500/30 text-green-400",
    imageType: "storefront",
  },
  {
    id: "proj-6",
    title: "Performance Marketing Creative Campaign",
    slug: "performance-marketing-creatives",
    category: "2D Work",
    shortDesc: "High-engagement social media campaigns and Meta Ads designed for Arinda Food driving 45% engagement lift.",
    fullDesc: "Data-driven creative development for Arinda Food. Tested multiple visual hooks, contrast variations, and concise product benefit messaging that outperformed baseline campaigns with a 45% lift in engagement.",
    tools: ["Meta Ads Manager", "Figma", "Photoshop", "Canva"],
    specifications: {
      "Aspect Ratios": "1:1 Feed & 9:16 Stories/Reels",
      "Testing Variations": "12 Creative Iterations",
      "Metric": "+45% Engagement Lift",
    },
    highlights: [
      "A/B tested creative headlines and visual contrast for maximum thumb-stopping power.",
      "Optimized call-to-actions tailored specifically to local consumer habits.",
    ],
    imagePlaceholderColor: "bg-lime-950/60 border-lime-500/30 text-lime-400",
    imageType: "marketing",
  },

  // Tech & AI
  {
    id: "proj-7",
    title: "Modern Multi-Theme Portfolio Platform",
    slug: "modern-portfolio-platform",
    category: "Tech & AI",
    shortDesc: "Next-gen portfolio with real-time telemetry dashboard, multi-theming engine, and case study modals.",
    fullDesc: "The very application you are exploring! Architected with React 19, TypeScript, Vite, and Tailwind CSS. Built featuring 4 theme modes, a 52-week telemetry heatmap, and interactive case study modals.",
    tools: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Lucide React", "Canvas Confetti"],
    specifications: {
      "Architecture": "Component-driven SPA",
      "Themes": "Pastel Green, Emerald Dark, Cyber, Ramadan",
      "Lighthouse Score": "98+ Across All Categories",
    },
    highlights: [
      "Zero layout shift, instant client-side theme switching.",
      "Interactive telemetry dashboard visualizing engineering habits.",
      "Fully responsive from 320px mobile to 4K ultra-wide screens.",
    ],
    imagePlaceholderColor: "bg-emerald-950/80 border-emerald-400/40 text-emerald-300",
    imageType: "portfolio",
    githubUrl: "https://github.com/anggaphi/Portfolio-Website",
  },
  {
    id: "proj-8",
    title: "AI Prompt & Agent Automation Suite",
    slug: "ai-prompt-agent-suite",
    category: "Tech & AI",
    shortDesc: "Structured prompt pipelines and agentic toolkits for e-commerce cataloging and IT documentation.",
    fullDesc: "A modular suite of AI prompt templates, structured output JSON parsers, and agent instructions. Built to accelerate e-commerce product description generation, customer FAQ triage, and automated IT troubleshooting documentation.",
    tools: ["Claude 3.5", "LLM Prompting", "OpenCode", "Python", "JSON Schema"],
    specifications: {
      "Output Format": "Strict JSON Schemas & Markdown",
      "Pipelines": "Cataloging, Triage, Tech Docs",
      "Time Saved": "Estimated 15+ hrs/week",
    },
    highlights: [
      "Eliminated hallucination in product specs via few-shot schema constraints.",
      "Integrated with markdown converters for immediate e-commerce publish readiness.",
    ],
    imagePlaceholderColor: "bg-teal-950/70 border-teal-400/40 text-teal-300",
    imageType: "ai-agents",
  },
];

export const TELEMETRY_DATA = {
  github: {
    username: "AnggaPhi",
    totalContributions: 51,
    activeStreakDays: 1,
    repositoriesCount: 12,
    pinnedRepos: [
      {
        name: "budget-telegram-bot",
        desc: "Automated Telegram bot engineered in Python for real-time expense logging and personal financial budget tracking.",
        stars: 0,
        forks: 0,
        language: "Python",
        url: "https://github.com/AnggaPhi/budget-telegram-bot",
      },
      {
        name: "AnggaPhi.github.io",
        desc: "Personal portfolio platform and interactive showcase highlighting 3D modeling, e-commerce ops, and web apps.",
        stars: 0,
        forks: 0,
        language: "HTML / CSS",
        url: "https://github.com/AnggaPhi/AnggaPhi.github.io",
      },
      {
        name: "Neon-3D-Cards",
        desc: "Project Based Learning 0.3: Interactive 3D perspective card effects with dynamic light reflection angles.",
        stars: 0,
        forks: 0,
        language: "HTML / CSS",
        url: "https://github.com/AnggaPhi/Neon-3D-Cards",
      },
      {
        name: "Responsive-Timeline",
        desc: "Project Based Learning 0.2: Responsive timeline layout engineered for interactive career and educational roadmaps.",
        stars: 0,
        forks: 0,
        language: "HTML / CSS",
        url: "https://github.com/AnggaPhi/Responsive-Timeline",
      },
      {
        name: "Photos-Gallery",
        desc: "Project Based Learning 0.4: Dynamic responsive photo gallery layout with image modal previews.",
        stars: 0,
        forks: 0,
        language: "HTML / CSS",
        url: "https://github.com/AnggaPhi/Photos-Gallery",
      },
      {
        name: "Flipbook-HTML",
        desc: "Project Based Learning 0.1: Interactive page-turning flipbook UI with CSS 3D transforms.",
        stars: 0,
        forks: 0,
        language: "HTML / JavaScript",
        url: "https://github.com/AnggaPhi/Flipbook-HTML",
      },
    ],
    weeks: Array.from({ length: 52 }, (_, wIndex) => ({
      weekNumber: wIndex + 1,
      days: Array.from({ length: 7 }, (_, dIndex) => {
        let count = 0;
        let level: 0 | 1 | 2 | 3 | 4 = 0;
        if (wIndex === 51 && (dIndex === 5 || dIndex === 6)) {
          count = dIndex === 5 ? 26 : 4;
          level = 4;
        } else if (wIndex === 51 && dIndex === 4) {
          count = 2;
          level = 2;
        } else if (wIndex === 49 && (dIndex === 3 || dIndex === 6)) {
          count = 1;
          level = 1;
        } else if (wIndex === 48 && dIndex === 3) {
          count = 3;
          level = 3;
        } else if (wIndex === 44 && (dIndex === 1 || dIndex === 6)) {
          count = 6;
          level = 4;
        }
        return {
          dayOfWeek: dIndex,
          date: `Week ${wIndex + 1}`,
          count,
          level,
        };
      }),
    })),
  },
  wakatime: {
    past7DaysTotal: "26 hrs 45 mins",
    dailyAverage: "3 hrs 49 mins",
    bestDay: { date: "Yesterday", hours: "5 hrs 12 mins" },
    languages: [
      { name: "Blender 3D Modeling", percent: 38, hours: "10 hrs 10 mins", color: "#F5792A" },
      { name: "TypeScript / React", percent: 32, hours: "8 hrs 35 mins", color: "#3178C6" },
      { name: "Ultimaker Cura Slicing", percent: 18, hours: "4 hrs 50 mins", color: "#2E7D52" },
      { name: "AI Prompt Tuning", percent: 12, hours: "3 hrs 10 mins", color: "#7FCD91" },
    ],
    editors: [
      { name: "Blender Viewport", percent: 40 },
      { name: "VS Code", percent: 38 },
      { name: "Cura 5.x", percent: 18 },
      { name: "Terminal / Other", percent: 4 },
    ],
  },
  monkeytype: {
    username: "anggaphi",
    wpmBest: 96.8,
    accuracyBest: "100%",
    testsCompleted: 1218,
    testsStarted: 6382,
    timeTyping: "19 hrs 45 mins",
    streakDays: 1,
    maxStreakDays: 14,
    xp: 210264,
  },
};
