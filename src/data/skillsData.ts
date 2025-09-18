import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Langages',
    skills: [
      { name: 'Java', level: 3.5 },
      { name: 'Python', level: 3 },
      { name: 'JavaScript', level: 3 },
      { name: 'PHP', level: 3 },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'Spring Boot', level: 4 },
      { name: 'React', level: 4 },
      { name: 'Angular', level: 4 },
      { name: 'Laravel', level: 3 },
    ],
  },
  {
    category: 'Bases de données',
    skills: [
      { name: 'MySQL', level: 4 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'SQL Server', level: 3 },
    ],
  },
  {
    category: 'Outils',
    skills: [
      { name: 'Git', level: 4 },
      { name: 'Figma', level: 3 },
      { name: 'Postman', level: 4 },
      { name: 'Docker', level: 2 },
      { name: 'CI/CD', level: 3 },
    ],
  },
  {
    category: 'Méthodologies',
    skills: [
      { name: 'Agile/Scrum', level: 4 },
    ],
  },
];