import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Rocket, Award } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            À propos de moi
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mb-12 mx-auto rounded-full"
          ></motion.div>

          <motion.div
            variants={itemVariants}
            className="relative p-8 md:p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl mb-12"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-t-2xl"></div>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
              Élève ingénieur en <span className="font-semibold text-blue-600 dark:text-blue-400">5ᵉ année Informatique et Réseaux, option MIAGE</span>, à l'École Marocaine des Sciences de l'Ingénieur (EMSI) Casablanca.
              Passionné par l'<span className="font-semibold text-blue-600 dark:text-blue-400">Intelligence Artificielle</span>, le <span className="font-semibold text-blue-600 dark:text-blue-400">Machine Learning</span> et le développement <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack</span>.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-base font-semibold mb-8 shadow-lg mx-auto block w-fit"
            >
              <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
              Recherche stage PFE 6 mois - Mars 2026
            </motion.div>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
              Je conçois des systèmes robustes et scalables en <span className="font-medium">Java Spring Boot</span>, <span className="font-medium">Angular</span>, <span className="font-medium">React</span> et <span className="font-medium">Python</span>,
              avec une forte expertise en développement d'API REST, bases de données relationnelles et solutions d'IA.
              Mon objectif : développer des solutions innovantes qui allient performance technique et expérience utilisateur exceptionnelle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Code2 className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-300">Développement Full-Stack</h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm">
                Expertise en Java Spring Boot, Angular, React et Python pour créer des applications complètes et performantes.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Brain className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-900 dark:text-cyan-300">Intelligence Artificielle</h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm">
                Spécialisation en Machine Learning, Deep Learning et développement de systèmes de recommandation intelligents.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Rocket className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-900 dark:text-purple-300">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm">
                Développement de solutions innovantes alliant performance technique et design moderne pour une UX optimale.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 p-6 rounded-xl border-2 border-rose-200 dark:border-rose-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-rose-900 dark:text-rose-300">Qualité & Rigueur</h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm">
                Code propre, tests unitaires, méthodologie Agile et documentation complète pour des projets maintenables.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Langues</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>Français</span>
                  <span className="font-medium">Intermédiaire</span>
                </li>
                <li className="flex justify-between">
                  <span>Anglais</span>
                  <span className="font-medium">Intermédiaire</span>
                </li>
                <li className="flex justify-between">
                  <span>Arabe</span>
                  <span className="font-medium">Natif</span>
                </li>
                <li className="flex justify-between">
                  <span>Espagnol</span>
                  <span className="font-medium">Débutant</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-lg font-bold mb-3 text-cyan-600 dark:text-cyan-400">Qualités personnelles</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                  Travail en équipe
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                  Résolution de problèmes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                  Esprit critique
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                  Créativité
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-lg font-bold mb-3 text-purple-600 dark:text-purple-400">Centres d'intérêt</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Football
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Photographie
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Technologies émergentes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Veille technologique
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
