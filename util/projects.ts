export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[]; // Categories like "AI/ML", "Backend", "Cloud", "Hardware"
  techStack: string[]; // Specific technologies
  impactMetrics: string[]; // Impact metrics like "25% accuracy improvement"
  links: {
    github?: string;
    live?: string;
  };
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "llm-medication-verification",
    title: "LLM-Powered Medication Verification",
    summary: "Multi-modal text extraction and medication verification system using LLMs, OCR, and cloud infrastructure to improve clinical workflow accuracy and efficiency.",
    tags: ["AI/ML", "Backend", "Cloud"],
    techStack: ["Python", "Django", "AWS", "Gemini", "OCR", "REST API"],
    impactMetrics: ["25% accuracy improvement", "50% faster reconciliation", "60% faster response times"],
    links: {},
    featured: true,
    date: "Oct 2024",
  },
  {
    id: "food-classification-deployment",
    title: "Food Classification Deployment Track",
    summary: "End-to-end ML deployment pipeline for food classification using transfer learning with MobileNetV2, containerized and orchestrated for scalable production deployment.",
    tags: ["AI/ML", "Cloud"],
    techStack: ["Python", "TensorFlow", "MobileNetV2", "Docker", "Kubernetes", "Transfer Learning"],
    impactMetrics: ["88% accuracy", "17% resource reduction", "85% faster response times"],
    links: {},
    featured: true,
    date: "Dec 2023",
  },
  {
    id: "beep-baseball",
    title: "Beep Baseball",
    summary: "Hardware project focused on accessibility in sports, featuring electronic components and 3D-printed parts to create assistive technology for visually impaired athletes.",
    tags: ["Hardware"],
    techStack: ["Electronics", "3D Printing"],
    impactMetrics: ["$250 funding secured", "30% error reduction"],
    links: {},
    featured: false,
    date: "May 2023",
  },
  {
    id: "neural-network-application",
    title: "Neural Network Application",
    summary: "Neural network implementation for image and shape classification using perceptron algorithms and backpropagation optimization.",
    tags: ["AI/ML"],
    techStack: ["Python", "Neural Networks", "Perceptron", "Backpropagation"],
    impactMetrics: ["92% accuracy", "86% error reduction", "89% efficiency improvement"],
    links: {},
    featured: false,
    date: "Dec 2022",
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

