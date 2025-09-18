import type { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 1,
    company: 'Intelcia',
    position: 'Stagiaire développeur Full-Stack',
    period: '2024',
    description: `- Analyse des besoins de l'entreprise et définition des fonctionnalités clés.
- Conception de l'architecture de l'application et modélisation de la base de données (MySQL).
- Développement du back-end avec Spring Boot : API REST, sécurité avec JWT.
- Création du front-end avec React JS : formulaires dynamiques, gestion des tickets.`,
    technologies: ['Spring Boot', 'React', 'MySQL', 'REST API', 'JWT']
  },
  {
    id: 2,
    company: 'École Supérieure de Technologie (EST) Beni Mellal',
    position: 'Stagiaire développeur Web',
    period: '2022',
    description: `- Étude des besoins pour une application de gestion de bibliothèque.
- Conception de l’interface utilisateur (React) et du schéma de la base de données.
- Développement du back-end avec Laravel : gestion des livres, utilisateurs, prêts et retours.
- Création d'une interface d’administration pour la gestion des stocks et des emprunts.
- Tests fonctionnels et mise en production locale.`,
    technologies: ['Laravel', 'React', 'MySQL', 'REST API']
  }
];
