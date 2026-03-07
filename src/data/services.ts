// ===============================
// EDITABLE SECTION: SERVICES DATA
// Add, remove, or modify services here
// ===============================

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  delivery: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "Custom-coded websites built with modern tools. Perfect for startups, small businesses, and creators who want a clean, fast online presence.",
    features: [
      "Responsive design for mobile & desktop",
      "Landing pages or multi-page websites",
      "Content editable via code or simple JSON",
      "SEO-friendly structure",
      "Performance-focused build",
    ],
    delivery: "5–14 days",
    featured: true,
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and connect your tools using n8n. Reduce manual work and streamline daily operations.",
    features: [
      "n8n workflow setup",
      "API and webhook integrations",
      "Automated notifications (email, Slack, etc.)",
      "Data syncing between apps",
      "Basic monitoring & troubleshooting",
    ],
    delivery: "3–7 days",
    featured: false,
  },
  {
  icon: "🤖",
  title: "AI Workflow Integrations",
  description:
    "Integrate practical AI capabilities into your workflows such as chatbots, automated responses, and intelligent task handling.",
  features: [
    "Chatbot setup using OpenAI / LLMs",
    "AI-powered customer support workflows",
    "AI-assisted email and response automation",
    "Simple knowledge-base chatbots",
    "Integration with existing automation tools",
  ],
  delivery: "7–14 days",
  featured: false,
},
  {
    icon: "🔍",
    title: "Automation Consultation",
    description:
      "Review your current processes and identify opportunities for automation and efficiency improvements.",
    features: [
      "Workflow review & documentation",
      "Identify repetitive tasks for automation",
      "Tool and integration suggestions",
      "Simple automation roadmap",
      "Implementation guidance",
    ],
    delivery: "2–5 days",
    featured: false,
  },
];