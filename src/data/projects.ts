// ===============================
// EDITABLE SECTION: PROJECT DATA
// Add new projects here or modify existing ones.
// Each project opens a modal with full details.
// ===============================

import tutor from '../assets/tutor.png';
import harborviewFramer from '../assets/harborview-framer.jpg';
import lucamoretti from '../assets/lucamoretti.jpg';
import coldEmail from '../assets/cold-email.jpg';
import onboarding from '../assets/client-onboarding.jpg';


export interface Project {
  id: number;
  icon: string;
  tag: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  tech: string[];
  outcome: string;
  demo?: string;
  category: 'website' | 'automation';
}

export const projects: Project[] = [
  {
    id: 1,
    icon: tutor,
    tag: "Web Development",
    title: "Online Tutor Platform",
    summary: "Full-featured tutoring platform where students browse courses, view teachers, book sessions, and manage bookings.",
    problem: "An educational startup needed a professional platform where students could discover tutors, schedule sessions, and manage their bookings — all without manual coordination from the admin team.",
    solution: "Built a full-stack tutoring platform featuring a course and teacher directory, integrated booking system with session management, and a clean admin panel for managing teachers, and courses.",
    tech: ["React", "TailwindCSS"],
    outcome: "The platform launched within 2 weeks. Admin workload for booking management was reduced by over 80%, allowing the team to focus on curriculum rather than logistics.",
    demo: "https://tutor-two-peach.vercel.app/",
    category: "website",
  },
  {
    id: 2,
    icon: lucamoretti,
    tag: "Freelance Video Editor Portfolio",
    title: "Luca Moretti — Video Editor Portfolio",
    summary: "A cinematic, single-page portfolio for a Milan-based freelance video editor — built to showcase commercial, music video, and documentary work with an immersive film-grade aesthetic.",
    problem: "Luca Moretti, a Milan-based freelance video editor with credits across Nike commercials, music videos, and award-winning short films, had no dedicated online presence. Potential clients had no way to evaluate his style, process, or range of work — and he was losing project inquiries to editors with more visible portfolios.",
    solution: "Designed and built a fully custom single-page portfolio site with a dark cinematic aesthetic inspired by film editing software. Key features include: a scrollable horizontal showreel vault with five project case study modals (objectives, approach, color grading process, and results), an interactive NLE timeline UI showcasing services, a before/after color grading comparison slider, a process walkthrough section, and a direct contact form — all with smooth scroll reveals, a custom cursor, and a film grain atmosphere.",
    tech: ["HTML/CSS/JS", "Responsive Design", "CSS Animations", "IntersectionObserver"],
    outcome: "Luca now has a professional portfolio that communicates his cinematic sensibility before a single word is read. The site presents 5 detailed case studies — including a Nike campaign with 12M+ YouTube views and a short film with a 9.1 IMDb score — giving prospective clients full confidence in his process and track record.",
    demo: "https://lucamoretti.vercel.app/",
    category: "website",
  },
  {
    id: 3,
    icon: harborviewFramer,
    tag: "Web Development",
    title: "Harborview Dental Clinic Website",
    summary: "Two versions: a coded single-page site and a Framer multi-page site — both with Calendly booking integration.",
    problem: "A dental clinic needed a professional online presence that would make it easy for patients to book appointments without calling. They also wanted to compare a fully coded version against a Framer-built site.",
    solution: "Delivered two complete versions: Version 1 is a single-page coded site with a custom booking system and patient intake flow. Version 2 is a 3–5 page website built in Framer with elegant animations — both integrated with Calendly for seamless appointment booking.",
    tech: ["Framer", "Calendly", "Responsive Design"],
    outcome: "Patient bookings increased significantly. The clinic now receives online appointment requests 24/7 without phone coordination. The Framer version became the preferred production site. You can check the coded version at: https://harborview.vercel.app",
    demo: "https://harborview.framer.ai",
    category: "website",
  },
  {
    id: 4,
    icon: onboarding,
    tag: "Automation",
    title: "Client Onboarding Automation",
    summary: "Auto folder creation, team notification, and AI-generated congratulatory email — triggered the moment a new client is signed.",
    problem: "An agency was manually onboarding each new client: creating project folders, notifying the team via Slack, and drafting welcome emails. The process was inconsistent and consumed valuable hours.",
    solution: "Built a one-click onboarding automation: when a new client is added, the workflow automatically creates their project folder in Google Drive, notifies the team on Slack, and uses AI to generate and send a personalized congratulatory onboarding email.",
    tech: ["n8n", "Google Drive", "Slack API", "OpenAI", "Gmail", "Google Sheet"],
    outcome: "Onboarding time reduced from ~45 minutes to under 2 minutes. Zero errors since launch. Team morale improved as repetitive admin work was eliminated.",
    demo: "#",
    category: "automation",
  },
  {
    id: 5,
    icon: coldEmail,
    tag: "AI Automation",
    title: "AI Cold Email Outreach System",
    summary: "Reads leads from a spreadsheet, uses AI to personalize each email, and sends outreach automatically for lead generation campaigns.",
    problem: "A B2B company wanted to run cold outreach campaigns but found writing personalized emails for every lead too time-consuming. Generic mass emails were getting ignored.",
    solution: "Built an automated outreach pipeline: the system reads lead data from a Google Sheet, and uses AI to craft a fully personalized, context-aware email for each lead, then sends it automatically through their gmail inbox — enabling outreach at scale while maintaining a human touch.",
    tech: ["n8n", "Gemini Chat Model", "Google Sheets", "Gmail", "Webhooks"],
    outcome: "Based on the current processing speed of 10 leads every 135 seconds, the system could process 500 personalized cold emails in approximately 112.5 minutes (about 1 hour and 52 minutes) if sufficient AI credits were available. This enables scalable personalized outreach while maintaining higher engagement compared to generic mass email campaigns.",
    demo: "https://www.loom.com/share/5c90e8d137214ccb94b6bc24f66ad320",
    category: "automation",
  },
];