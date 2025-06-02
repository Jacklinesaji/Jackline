import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../constants';
import { Paintbrush, FlaskRound as Flask, Music, Cat, Code, Instagram } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Paintbrush':
      return <Paintbrush size={24} />;
    case 'Flask':
      return <Flask size={24} />;
    case 'Music':
      return <Music size={24} />;
    case 'Cat':
      return <Cat size={24} />;
    case 'Code':
      return <Code size={24} />;
    case 'Instagram':
      return <Instagram size={24} />;
    default:
      return null;
  }
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-lavender-50 to-white">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="What I Love to Do" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-lavender-100 p-3 rounded-full text-lavender-600 mr-4">
                  {getIcon(skill.icon)}
                </div>
                <h3 className="font-handwritten text-xl font-semibold text-gray-800">{skill.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-5">{skill.description}</p>
              
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold inline-block text-lavender-600">
                    Skill Level
                  </div>
                  <div className="text-xs font-semibold inline-block text-lavender-600">
                    {skill.level}%
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lavender-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lavender-500"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="font-handwritten text-2xl font-bold text-lavender-600 mb-6 text-center">My Skills Balance</h3>
            
            <div className="w-full h-64 md:h-80 flex items-center justify-center">
              <div className="relative w-full max-w-md h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border-2 border-dashed border-lavender-200"></div>
                  <div className="absolute w-1/2 h-1/2 rounded-full border-2 border-dashed border-lavender-300"></div>
                  <div className="absolute w-1/4 h-1/4 rounded-full border-2 border-dashed border-lavender-400"></div>
                </div>
                
                {skills.map((skill, index) => {
                  const angle = (index * (360 / skills.length)) * (Math.PI / 180);
                  const radius = (skill.level / 100) * 40;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 bg-white rounded-full shadow-md flex items-center justify-center text-lavender-600 z-10"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={inView ? { x, y, opacity: 1 } : { x: 0, y: 0, opacity: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.8 }}
                    >
                      {getIcon(skill.icon)}
                    </motion.div>
                  );
                })}
                
                <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 bg-lavender-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;