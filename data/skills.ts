import type { IconType } from "react-icons";
import {
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiReact,
  SiDjango,
  SiSpringboot,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiJupyter,
  SiPostman,
  SiFirebase,
} from "react-icons/si";

export type SkillCategory = 'languages' | 'ml-ai' | 'frameworks' | 'cloud' | 'tools' | 'databases';

export interface Skill {
  name: string;
  icon?: IconType;
  iconColor?: string;
  category: SkillCategory;
}

export const skillCategories: Record<SkillCategory, string> = {
  languages: "Languages",
  'ml-ai': "ML/AI",
  frameworks: "Frameworks",
  cloud: "Cloud & DevOps",
  tools: "Developer Tools",
  databases: "Databases",
};

export const skills: Skill[] = [
  // Languages
  { name: "Python", icon: SiPython, iconColor: "text-yellow-300", category: "languages" },
  { name: "Java", icon: SiOpenjdk, iconColor: "text-orange-500", category: "languages" },
  { name: "JavaScript", icon: SiJavascript, iconColor: "text-yellow-400", category: "languages" },
  { name: "C++", icon: SiCplusplus, iconColor: "text-blue-500", category: "languages" },
  { name: "HTML", icon: SiHtml5, iconColor: "text-orange-500", category: "languages" },
  { name: "CSS", icon: SiCss3, iconColor: "text-blue-400", category: "languages" },
  
  // Databases
  { name: "SQL", icon: SiPostgresql, iconColor: "text-sky-400", category: "databases" },
  { name: "PostgreSQL", icon: SiPostgresql, iconColor: "text-sky-400", category: "databases" },
  
  // ML/AI
  { name: "TensorFlow", icon: SiTensorflow, iconColor: "text-orange-400", category: "ml-ai" },
  { name: "PyTorch", icon: SiPytorch, iconColor: "text-red-500", category: "ml-ai" },
  { name: "Scikit-learn", icon: SiScikitlearn, iconColor: "text-orange-300", category: "ml-ai" },
  { name: "Keras", icon: SiKeras, iconColor: "text-red-500", category: "ml-ai" },
  { name: "Pandas", icon: SiPandas, iconColor: "text-zinc-200", category: "ml-ai" },
  { name: "NumPy", icon: SiNumpy, iconColor: "text-sky-400", category: "ml-ai" },
  { name: "OpenCV", icon: SiOpencv, iconColor: "text-cyan-300", category: "ml-ai" },
  { name: "NLP", category: "ml-ai" },
  { name: "Transfer Learning", category: "ml-ai" },
  { name: "LLM Integration", category: "ml-ai" },
  { name: "JAX", category: "ml-ai" },
  
  // Frameworks
  { name: "Spring Boot", icon: SiSpringboot, iconColor: "text-green-600", category: "frameworks" },
  { name: "React", icon: SiReact, iconColor: "text-cyan-400", category: "frameworks" },
  { name: "Django", icon: SiDjango, iconColor: "text-green-500", category: "frameworks" },
  { name: "REST", category: "frameworks" },
  { name: "RESTful APIs", category: "frameworks" },
  
  // Cloud & DevOps
  { name: "AWS (S3, EC2, Transcribe)", icon: SiAmazon, iconColor: "text-yellow-500", category: "cloud" },
  { name: "GCP", icon: SiGooglecloud, iconColor: "text-blue-500", category: "cloud" },
  { name: "Docker", icon: SiDocker, iconColor: "text-sky-400", category: "cloud" },
  { name: "Kubernetes", icon: SiKubernetes, iconColor: "text-blue-500", category: "cloud" },
  { name: "Jenkins", icon: SiJenkins, iconColor: "text-red-600", category: "cloud" },
  { name: "Firebase", icon: SiFirebase, iconColor: "text-yellow-400", category: "cloud" },
  
  // Developer Tools
  { name: "VS Code", category: "tools" },
  { name: "Git", icon: SiGit, iconColor: "text-orange-600", category: "tools" },
  { name: "JUnit", category: "tools" },
  { name: "PyTest", category: "tools" },
  { name: "Jupyter Notebook", icon: SiJupyter, iconColor: "text-orange-300", category: "tools" },
  { name: "Postman", icon: SiPostman, iconColor: "text-orange-400", category: "tools" },
];

