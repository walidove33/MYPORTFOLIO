import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experiences';
import Education from './components/Education';
import Contact from './components/Contact';
import Interests from './components/Interests';
import CVViewer from './components/CVViewer';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    document.title = 'Walid Benabbes | Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <div className="font-sans bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <CVViewer />
        <Contact />
        <Interests />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;