import React from 'react';
import { FolderRoot as Football, Camera, Mountain } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Interests: React.FC = () => {
  const { theme } = useTheme();

  const interests = [
    {
      icon: <Football size={24} className="text-blue-600" />,
      title: 'Football',
      emoji: '🏆',
      description:
        'Passionné de football, je joue régulièrement avec des amis et je suis un fervent supporter.',
    },
    {
      icon: <Camera size={24} className="text-blue-600" />,
      title: 'Photographie',
      emoji: '📸',
      description:
        "J'aime capturer des moments uniques et explorer différentes techniques photographiques.",
    },
    {
      icon: <Mountain size={24} className="text-blue-600" />,
      title: 'Randonnées en montagne',
      emoji: '🏔️',
      description:
        "Les week-ends, j'aime m'évader en pleine nature et découvrir de nouveaux sentiers de randonnée.",
    },
  ];

  return (
    <section className={theme === 'dark' ? 'py-20 bg-gray-900' : 'py-20 bg-gray-100'}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
        >
          Centres d'intérêt
        </h2>
        <div className="h-1 w-20 bg-blue-600 mb-10 mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                {interest.icon}
              </div>

              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
              >
                {interest.title} <span className="text-2xl">{interest.emoji}</span>
              </h3>

              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
