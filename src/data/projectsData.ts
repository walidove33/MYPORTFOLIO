import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Gestion de tickets internes',
    description: 'Application full-stack développée en Spring Boot et React JS avec une API sécurisée par JWT. Le système permet la gestion complète du cycle de vie des tickets de support internes.',
    technologies: ['Spring Boot', 'React JS', 'JWT', 'MySQL', 'REST API'],
    repoUrl: 'https://github.com/walidove33/Gestion-des-tickets-Helpdesk-',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    features: [
      'Authentification et autorisation via JWT',
      'Panneau d\'administration pour la gestion des tickets',
      'Interface utilisateur réactive et intuitive',
      'Notifications en temps réel',
      'Rapports et statistiques'
    ]
  },
  {
    id: 2,
    title: 'Système de recommandation de films',
    description: 'Projet de fin d\'année développé avec Angular, Spring Boot et des modèles de machine learning en Python (Scikit-learn) utilisant PostgreSQL comme base de données.',
    technologies: ['Angular', 'Spring Boot', 'Python', 'Scikit-learn', 'PostgreSQL'],
    repoUrl: 'https://github.com/walidove33/My-Movie-Recommender',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    features: [
      'Algorithmes de recommandation basés sur le contenu et le filtrage collaboratif',
      'API RESTful Spring Boot pour les services backend',
      'Interface utilisateur Angular moderne et responsive',
      'Intégration avec une base de données de films externe',
      'Système d\'évaluation et de feedback utilisateur'
    ]
  }
];