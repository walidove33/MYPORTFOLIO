import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import profilImage from '../assets/profil.png';

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home: React.FC = () => {
  const scrollToNext = () => scrollToSection('about');

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden"
    >
      {/* Background & animation shapes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">

          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[45%] text-center md:text-left"
          >
            {/* WB Profile Tag */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-center space-x-2 cursor-pointer mb-6 justify-center md:justify-start"
              onClick={() => scrollToSection('home')}
            >
              <img 
                src={profilImage} 
                alt="Profil" 
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
              />
              <span className="font-bold text-xl md:text-2xl transition-colors duration-300 text-white">
                WB
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
            >
              Walid Benabbes
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-medium mb-6 text-blue-200"
            >
              Élève ingénieur Full-Stack – Java | Angular | Python
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0"
            >
              Passionné par le développement web sécurisé, l'IA et les interfaces utilisateurs modernes.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Me contacter
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="btn-secondary"
              >
                Voir mes projets
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Block (balanced between center and end) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-full md:w-[45%] flex justify-center"
          >
            <motion.div 
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 md:w-72 md:h-72"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                <img src={profilImage} alt="Profil" className="object-cover w-full h-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.button 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-200 transition-colors duration-300"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Home;
