export type ProjectCategory = 'ai-ml' | 'backend' | 'fullstack' | 'hardware';

export interface Project {
  id: string;
  title: string;
  date: string;
  tags: string[];
  category: ProjectCategory;
  bullets: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "llm-medication-verification",
    title: "LLM-Powered Medication Verification",
    date: "Oct 2024",
    tags: ["Python", "Django", "AWS", "LLM", "OCR", "REST API", "Gemini"],
    category: "ai-ml",
    bullets: [
      "Developed a multi-modal text extraction pipeline using Python OCR APIs and AWS Transcribe, increasing accuracy by 25% in processing images, ED notes, audio, and handwritten clinical notes.",
      "Optimized medication data organization with advanced prompt engineering using Gemini LLM, reducing reconciliation time by 50%.",
      "Architected high-performance backend REST APIs with the Django REST framework, improving response times by 60% and enhancing system efficiency for an Android application.",
    ],
  },
  {
    id: "food-classification-deployment",
    title: "Food Classification Deployment Track",
    date: "Dec 2023",
    tags: ["Python", "TensorFlow", "MobileNetV2", "Docker", "Kubernetes", "Transfer Learning", "ML"],
    category: "ai-ml",
    bullets: [
      "Maximized a food classification model using Transfer Learning with MobileNetV2, achieving 88% accuracy.",
      "Led the project from planning to deployment, utilizing Docker and Kubernetes to reduce resource utilization by 17%.",
      "Improved scalability and addressed deployment bottlenecks, enhancing response times by 85% and increasing overall project efficiency.",
    ],
  },
  {
    id: "beep-baseball",
    title: "Beep Baseball",
    date: "May 2023",
    tags: ["Hardware", "Electronics", "3D Printing", "Research"],
    category: "hardware",
    bullets: [
      "Researched and authored the project proposal, contributing to a team that secured $250 in funding for the project.",
      "Conducted rigorous testing on electrical components and collaborated with engineers to identify and resolve critical issues, reducing potential production errors by 30% and enhancing product reliability.",
    ],
  },
  {
    id: "neural-network-application",
    title: "Neural Network Application",
    date: "Dec 2022",
    tags: ["Python", "Neural Networks", "Perceptron", "Backpropagation", "ML"],
    category: "ai-ml",
    bullets: [
      "Implemented a perceptron training algorithm for image classification, achieving 92% accuracy on validation datasets.",
      "Optimized curve fitting using backpropagation, reducing error by 86%.",
      "Built a Python-based shape classification model, improving efficiency by 89%.",
    ],
  },
];

