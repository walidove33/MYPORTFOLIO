import React from 'react';
import { skillsData } from '../data/skillsData';
import { useTheme } from '../context/ThemeContext';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
        >
          Compétences techniques
        </h2>
        <div
          className={`h-1 w-20 mb-10 mx-auto ${
            theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
          }`}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 transition-all duration-300 hover:shadow-lg ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-200 shadow-gray-700'
                  : 'bg-gray-50 text-gray-800 shadow-md'
              }`}
            >
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-blue-600 inline-block">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-sm">{skill.level * 20}%</span>
                    </div>
                    <div
                      className={`w-full rounded-full h-2 ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level * 20}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
