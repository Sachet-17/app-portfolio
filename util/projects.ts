export type ProjectTag = 'AI/ML' | 'Backend' | 'Cloud' | 'Full Stack' | 'Hardware' | 'Mobile' | 'Frontend' | 'DevOps' | 'Research';

export interface ProjectLink {
  type: 'github' | 'demo' | 'case-study';
  url: string;
  label?: string;
}

export interface ImpactMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: ProjectTag[];
  techStack: string[];
  impactMetrics?: ImpactMetric[];
  links?: ProjectLink[];
  featured: boolean;
  date: string;
  category: 'ai-ml' | 'backend' | 'fullstack' | 'hardware';
  // Keep original bullets for detailed view if needed
  bullets?: string[];
}

export const projects: Project[] = [
  {
    id: "llm-medication-verification",
    title: "LLM-Powered Medication Verification",
    summary: "Multi-modal medication verification system using OCR, LLM, and AWS services for healthcare applications.",
    date: "Oct 2024",
    tags: ["AI/ML", "Backend", "Cloud"],
    techStack: ["Python", "Django", "AWS", "LLM", "OCR", "REST API", "Gemini"],
    category: "ai-ml",
    featured: true,
    impactMetrics: [
      { label: "Accuracy Improvement", value: "+25%" },
      { label: "Reconciliation Time", value: "-50%" },
      { label: "Response Time", value: "-60%" },
    ],
    links: [
      { type: "github", url: "#", label: "GitHub" },
      { type: "demo", url: "#", label: "Live Demo" },
    ],
    bullets: [
      "Developed a multi-modal text extraction pipeline using Python OCR APIs and AWS Transcribe, increasing accuracy by 25% in processing images, ED notes, audio, and handwritten clinical notes.",
      "Optimized medication data organization with advanced prompt engineering using Gemini LLM, reducing reconciliation time by 50%.",
      "Architected high-performance backend REST APIs with the Django REST framework, improving response times by 60% and enhancing system efficiency for an Android application.",
    ],
  },
  {
    id: "food-classification-deployment",
    title: "Food Classification Deployment Track",
    summary: "ML model deployment pipeline for food classification using transfer learning and container orchestration.",
    date: "Dec 2023",
    tags: ["AI/ML", "Cloud", "DevOps"],
    techStack: ["Python", "TensorFlow", "MobileNetV2", "Docker", "Kubernetes", "Transfer Learning"],
    category: "ai-ml",
    featured: true,
    impactMetrics: [
      { label: "Model Accuracy", value: "88%" },
      { label: "Resource Usage", value: "-17%" },
      { label: "Response Time", value: "-85%" },
    ],
    links: [
      { type: "github", url: "#", label: "GitHub" },
    ],
    bullets: [
      "Maximized a food classification model using Transfer Learning with MobileNetV2, achieving 88% accuracy.",
      "Led the project from planning to deployment, utilizing Docker and Kubernetes to reduce resource utilization by 17%.",
      "Improved scalability and addressed deployment bottlenecks, enhancing response times by 85% and increasing overall project efficiency.",
    ],
  },
  {
    id: "beep-baseball",
    title: "Beep Baseball",
    summary: "Hardware project for accessible sports equipment, combining electronics and 3D printing.",
    date: "May 2023",
    tags: ["Hardware", "Research"],
    techStack: ["Electronics", "3D Printing"],
    category: "hardware",
    featured: false,
    impactMetrics: [
      { label: "Funding Secured", value: "$250" },
      { label: "Error Reduction", value: "-30%" },
    ],
    links: [
      { type: "case-study", url: "#", label: "Case Study" },
    ],
    bullets: [
      "Researched and authored the project proposal, contributing to a team that secured $250 in funding for the project.",
      "Conducted rigorous testing on electrical components and collaborated with engineers to identify and resolve critical issues, reducing potential production errors by 30% and enhancing product reliability.",
    ],
  },
  {
    id: "neural-network-application",
    title: "Neural Network Application",
    summary: "Custom neural network implementation for image classification using perceptrons and backpropagation.",
    date: "Dec 2022",
    tags: ["AI/ML", "Research"],
    techStack: ["Python", "Neural Networks", "Perceptron", "Backpropagation"],
    category: "ai-ml",
    featured: false,
    impactMetrics: [
      { label: "Validation Accuracy", value: "92%" },
      { label: "Error Reduction", value: "-86%" },
      { label: "Efficiency", value: "+89%" },
    ],
    links: [
      { type: "github", url: "#", label: "GitHub" },
    ],
    bullets: [
      "Implemented a perceptron training algorithm for image classification, achieving 92% accuracy on validation datasets.",
      "Optimized curve fitting using backpropagation, reducing error by 86%.",
      "Built a Python-based shape classification model, improving efficiency by 89%.",
    ],
  },
];

// Helper functions
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getAllTags(): ProjectTag[] {
  const tagSet = new Set<ProjectTag>();
  projects.forEach(project => {
    project.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

