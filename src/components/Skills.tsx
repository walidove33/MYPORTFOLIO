import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getLevelColor = (level: number) => {
    if (level >= 4) return 'from-blue-500 to-cyan-500';
    if (level >= 3) return 'from-cyan-500 to-teal-500';
    return 'from-teal-500 to-green-500';
  };

  const getLevelLabel = (level: number) => {
    if (level >= 4) return 'Expert';
    if (level >= 3.5) return 'Avancé';
    if (level >= 3) return 'Intermédiaire';
    return 'Débutant';
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Compétences techniques
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mb-12 mx-auto rounded-full"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-t-2xl"></div>

                <h3 className="text-lg font-bold mb-6 text-gray-800 dark:text-white">
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} text-white`}>
                          {getLevelLabel(skill.level)}
                        </span>
                      </div>

                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level * 20}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </motion.div>
                      </div>

                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-1 text-right">
                        {skill.level * 20}%
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 px-8 py-4 rounded-full shadow-lg border border-blue-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Expert (80-100%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Avancé/Intermédiaire (60-80%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-green-500"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Débutant (&lt;60%)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
