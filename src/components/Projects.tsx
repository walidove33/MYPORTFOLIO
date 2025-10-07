import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import { Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const projectImageRanges = {
    1: { start: 13, end: 15 },
    2: { start: 1, end: 10 },
    3: { start: 1, end: 10 }
  };

 const getProjectImages = (projectId: number) => {
  const range = projectImageRanges[projectId as keyof typeof projectImageRanges];
  if (!range) return [];
  return Array.from(
    { length: range.end - range.start + 1 },
    (_, i) => `/assets/${range.start + i}.png`
  );
};


  const [currentProjectImages, setCurrentProjectImages] = useState<string[]>([]);

  useEffect(() => {
    if (selectedProject !== null) {
      const images = getProjectImages(selectedProject);
      setCurrentProjectImages(images);
      setCurrentImageIndex(0);

      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [selectedProject]);

  const openProject = (id: number) => {
    setSelectedProject(id);
    setCurrentImageIndex(0);
    setShowVideo(false);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setShowVideo(false);
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % currentProjectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev =>
      (prev - 1 + currentProjectImages.length) % currentProjectImages.length
    );
  };

  const project = projectsData.find(p => p.id === selectedProject);

  return (
    <section
      id="projects"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
        >
          Projets
        </h2>
        <div className={`h-1 w-20 mb-10 mx-auto ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'}`}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map(project => {
            const projectImages = getProjectImages(project.id);
            const previewImage = projectImages[0];

            return (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className={`rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
                  theme === 'dark'
                    ? 'bg-gray-800 shadow-gray-700 text-gray-200'
                    : 'bg-white shadow-md text-gray-800'
                }`}
              >
                <motion.div className="h-60 overflow-hidden relative group" whileHover={{ scale: 1.05 }}>
                  <img
                    src={previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openProject(project.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-all duration-300 font-medium shadow-lg"
                    >
                      Voir détails
                    </button>
                  </div>
                </motion.div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => openProject(project.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Voir détails
                    </button>
                    {project.repoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject !== null && project && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto ${
                  theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex items-center space-x-4">
                      {project.videoUrl && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setShowVideo(!showVideo)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            showVideo
                              ? 'bg-red-600 hover:bg-red-700 text-white'
                              : 'bg-green-600 hover:bg-green-700 text-white'
                          }`}
                        >
                          {showVideo ? 'Voir Images' : 'Voir Vidéo'}
                        </motion.button>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={closeProject}
                        className="text-gray-400 hover:text-gray-600 transition"
                      >
                        <X size={24} />
                      </motion.button>
                    </div>
                  </div>

                  <div className="mb-6 relative">
                    {showVideo && project.videoUrl ? (
                      <div className="relative h-64 md:h-96 overflow-hidden rounded-lg bg-black">
                        <video
                          controls
                          className="w-full h-full object-contain"
                          poster={currentProjectImages[0]}
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                          Votre navigateur ne supporte pas la lecture vidéo.
                        </video>
                      </div>
                    ) : (
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.3 }}
                          src={currentProjectImages[currentImageIndex]}
                          alt={`Project image ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full"
                      >
                        <ChevronLeft size={24} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full"
                      >
                        <ChevronRight size={24} />
                      </motion.button>

                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {currentProjectImages.map((_, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full ${
                              currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    )}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p>{project.description}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <h4 className="text-lg font-semibold mb-2">Fonctionnalités</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
