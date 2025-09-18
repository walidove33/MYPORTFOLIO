import React from 'react';

const About: React.FC = () => {

  return (
    <section  id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

         

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            À propos de moi
          </h2>

          <div className="h-1 w-20 bg-blue-600 mb-10 mx-auto"></div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform duration-500 hover:scale-105">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Étudiant en 4ᵉ année MIAGE à l'EMSI Casablanca, je me spécialise dans le développement d'applications web full-stack et de solutions intelligentes. Je conçois des systèmes robustes en Java Spring Boot, Angular, React JS et Python, avec une forte culture Dev et UX.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Ma mission</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Créer des applications web performantes, sécurisées et accessibles qui résolvent de vrais problèmes pour les utilisateurs, tout en maintenant un code propre et évolutif.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Ma vision</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Utiliser la technologie comme levier d'innovation pour développer des solutions qui améliorent l'expérience utilisateur et optimisent les processus métiers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
