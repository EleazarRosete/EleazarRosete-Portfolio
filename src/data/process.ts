// ===============================
// EDITABLE SECTION: PROCESS STEPS
// Modify step titles, descriptions, and icons
// ===============================

export interface ProcessStep {
  num: string;
  icon: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    icon: "🔍",
    title: "Discovery",
    description: "Deep dive into your business, current pain points, and what success looks like for you.",
  },
  {
    num: "02",
    icon: "🗺️",
    title: "Strategy",
    description: "Map out the solution architecture, tools to be used, and a clear project roadmap.",
  },
  {
    num: "03",
    icon: "✏️",
    title: "Concept",
    description: "Create initial samples, mockups, or prototypes so we're fully aligned before development.",
  },
  {
    num: "04",
    icon: "⚙️",
    title: "Development",
    description: "Build the full solution with clean code, proper documentation, and regular check-ins.",
  },
  {
    num: "05",
    icon: "🚀",
    title: "Deployment",
    description: "Launch to production, configure domains, and ensure everything runs flawlessly.",
  },
  {
    num: "06",
    icon: "✅",
    title: "Refinement",
    description: "Apply final tweaks based on real-world testing and your feedback. Includes 3–5 minor and 1–2 major revisions.",
  },
];
