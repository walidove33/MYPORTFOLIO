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

          <div className="professional-card relative p-10 transition-all duration-500 hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Étudiant en 4ᵉ année MIAGE à l'EMSI Casablanca, je me spécialise dans le développement d'applications web full-stack et de solutions intelligentes. Actuellement à la recherche d'un stage PFE 2026, je conçois des systèmes robustes en Java Spring Boot, Angular, React JS et Python, avec une forte culture Dev et UX.
            </p>

            {/* Badge recherche de stage */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Disponible pour stage PFE 2026
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl transition-all duration-300 hover:shadow-lg border border-blue-100 dark:border-gray-600">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Ma mission</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Créer des applications web performantes, sécurisées et accessibles qui résolvent de vrais problèmes pour les utilisateurs, tout en maintenant un code propre et évolutif.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl transition-all duration-300 hover:shadow-lg border border-purple-100 dark:border-gray-600">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Ma vision</h3>
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
