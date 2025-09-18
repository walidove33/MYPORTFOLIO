export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  features: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}