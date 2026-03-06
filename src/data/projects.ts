// ===============================
// EDITABLE SECTION: PROJECT DATA
// Add new projects here or modify existing ones.
// Each project opens a modal with full details.
// ===============================

import tutor from '../assets/tutor.png';
import harborviewFramer from '../assets/harborview-framer.jpg';
import lucamoretti from '../assets/lucamoretti.jpg';


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
}

export const projects: Project[] = [
  {
    id: 1,
    icon: tutor,
    tag: "Web Development",
    title: "Online Tutor Platform",
    summary: "Full-featured tutoring platform where students browse courses, view teachers, book sessions, and manage bookings.",
    problem: "An educational startup needed a professional platform where students could discover tutors, schedule sessions, and manage their bookings — all without manual coordination from the admin team.",
    solution: "Built a full-stack tutoring platform featuring a course and teacher directory, integrated booking system with session management, and a clean admin panel for managing users, schedules, and payments.",
    tech: ["React", "TailwindCSS"],
    outcome: "The platform launched within 2 weeks. Admin workload for booking management was reduced by over 80%, allowing the team to focus on curriculum rather than logistics.",
    demo: "https://tutor-two-peach.vercel.app/",
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
    demo: "https://harborview.vercel.app",
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
  },
  {
    id: 4,
    icon: "📄",
    tag: "Automation",
    title: "n8n PDF Data Entry Automation",
    summary: "Upload a PDF → Mistral OCR extracts data → automatically appended to a spreadsheet. Zero manual entry.",
    problem: "A business team was spending hours per week manually reading PDF documents and copying data into Google Sheets — a tedious, error-prone process that scaled poorly.",
    solution: "Built an n8n automation workflow: a PDF is uploaded to a trigger endpoint, Mistral's OCR API extracts structured information, and the extracted data is automatically appended to the correct spreadsheet columns — all in seconds.",
    tech: ["n8n", "Mistral AI OCR", "Google Sheets API", "Webhooks"],
    outcome: "Eliminated 100% of manual data entry for this process. What previously took hours now takes seconds per document. The team reported significant time savings within the first week of deployment.",
    demo: "#",
  },
  {
    id: 5,
    icon: "💬",
    tag: "Automation",
    title: "Messenger Booking System",
    summary: "A Messenger webhook-triggered booking system that manages appointments without any AI usage — saving the client on operating costs.",
    problem: "A service-based business was managing bookings through Facebook Messenger manually. They needed an automated system but wanted to avoid recurring AI credit costs from chatbot solutions.",
    solution: "Built a cost-efficient booking automation using n8n triggered by a Messenger webhook. The system handles booking requests, checks availability, confirms appointments, and sends reminders — all using structured logic without any AI model calls.",
    tech: ["n8n", "Facebook Messenger API", "Webhooks", "Logic Flows"],
    outcome: "The client now handles 100% of booking operations automatically. By avoiding AI usage entirely, operating costs remained minimal compared to AI-powered alternatives.",
    demo: "#",
  },
  {
    id: 6,
    icon: "🎉",
    tag: "Automation",
    title: "Client Onboarding Automation",
    summary: "Auto folder creation, team notification, and AI-generated congratulatory email — triggered the moment a new client is signed.",
    problem: "An agency was manually onboarding each new client: creating project folders, notifying the team via Slack, and drafting welcome emails. The process was inconsistent and consumed valuable hours.",
    solution: "Built a one-click onboarding automation: when a new client is added, the workflow automatically creates their project folder in Google Drive, notifies the team on Slack, and uses AI to generate and send a personalized congratulatory onboarding email.",
    tech: ["n8n", "Google Drive", "Slack API", "OpenAI", "Gmail" , "Google Sheet"],
    outcome: "Onboarding time reduced from ~45 minutes to under 2 minutes. Zero errors since launch. Team morale improved as repetitive admin work was eliminated.",
    demo: "#",
  },
  {
    id: 7,
    icon: "📬",
    tag: "AI Automation",
    title: "AI Cold Email Outreach System",
    summary: "Reads leads from a spreadsheet, uses AI to personalize each email, and sends outreach automatically for lead generation campaigns.",
    problem: "A B2B company wanted to run cold outreach campaigns but found writing personalized emails for every lead too time-consuming. Generic mass emails were getting ignored.",
    solution: "Built an automated outreach pipeline: the system reads lead data from a Google Sheet, uses AI to craft a unique, context-aware email for each lead, and sends automatically through their connected inbox — at scale.",
    tech: ["n8n", "OpenAI GPT", "Google Sheets", "Gmail", "Webhooks"],
    outcome: "The client ran a 500-lead campaign in under 2 hours. Reply rates improved significantly compared to generic mass email blasts. The system continues to run campaigns with minimal oversight.",
    demo: "#",
  },
  // {
  //   id: 8,
  //   icon: "🧠",
  //   tag: "AI Development",
  //   title: "RAG Chatbot (Company Knowledge Base)",
  //   summary: "A Retrieval-Augmented Generation chatbot that answers questions based only on company documents — preventing hallucinations.",
  //   problem: "A company wanted an intelligent chatbot to help their team and customers find answers quickly — but couldn't trust general AI models that might hallucinate or share incorrect information.",
  //   solution: "Built a RAG chatbot that ingests and indexes the company's internal documents. When a user asks a question, the system retrieves relevant document sections and uses AI to synthesize a grounded, accurate answer — refusing to answer outside the knowledge base scope.",
  //   tech: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "React"],
  //   outcome: "The chatbot successfully handles internal knowledge queries with high accuracy. Hallucination rate effectively reduced to near-zero within the document scope.",
  //   demo: "#",
  // },
];
