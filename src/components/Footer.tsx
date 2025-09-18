import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Walid Benabbes</h2>
            <p className="text-gray-400 mt-2">Élève ingénieur Full-Stack</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/walidove33" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/walid-benabbes-1684ab21a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://www.instagram.com/oualid_benabbes?igsh=MTk0b2lvbDVwZHU3MA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Walid Benabbes. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;