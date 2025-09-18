

import React from 'react';
import { experienceData } from '../data/experienceData';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white"
        >
          Expériences
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="h-1 w-20 bg-blue-600 mb-10 mx-auto"
        />
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
<div className="relative border-l-2 border-blue-600 pl-8 ml-4 space-y-20">
            {experienceData.map((experience, index) => (
              <motion.div 
                key={experience.id}
                variants={itemVariants}
className={`mb-20 ${index === experienceData.length - 1 ? '' : 'pb-10'}`}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="absolute -left-4 mt-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                >
                  <Briefcase size={18} className="text-white" />
                </motion.div>
                
                <motion.div 
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                  }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 }}
                      className="text-xl font-bold text-gray-800 dark:text-white"
                    >
                      {experience.position}
                    </motion.h3>
                    <motion.span 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 + 0.2 }}
                      className="text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 rounded-full px-3 py-1 mt-2 md:mt-0"
                    >
                      {experience.period}
                    </motion.span>
                  </div>
                  
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.1 }}
                    className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4"
                  >
                    {experience.company}
                  </motion.h4>
                  
                <div className="text-gray-600 dark:text-gray-400 mb-6 space-y-2">
  {experience.description.split('- ').filter(Boolean).map((line, i) => (
    <p key={i} className="leading-relaxed">- {line.trim()}</p>
  ))}
</div>

                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.3 }}
                    className="flex flex-wrap gap-2"
                  >
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;