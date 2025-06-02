import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { timelineEvents } from '../constants';
import { Baby, BookOpen, Cat, GraduationCap, Music } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Baby':
      return <Baby size={24} />;
    case 'GraduationCap':
      return <GraduationCap size={24} />;
    case 'BookOpen':
      return <BookOpen size={24} />;
    case 'Music':
      return <Music size={24} />;
    case 'Cat':
      return <Cat size={24} />;
    default:
      return null;
  }
};

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="This Is Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <motion.p 
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              ref={ref}
            >
              Born and raised in Kerala, I've always been fascinated by the intersection of science and creativity. Currently pursuing my Engineering degree, I'm passionate about finding innovative solutions to real-world problems.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              When I'm not in the lab or buried in textbooks, you'll find me singing in the church choir, creating art, or spending quality time with my adorable cat Fullerene. My diverse interests have shaped me into a well-rounded individual who approaches challenges with both analytical thinking and creative flair.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I believe in living life with passion and purpose, constantly seeking new experiences and knowledge. My goal is to make a positive impact through my work in engineering while never losing touch with my creative side.
            </motion.p>
          </div>
          
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-lavender-200 rounded-full"></div>
            
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                className="relative ml-12 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-16 bg-white p-2 rounded-full border-4 border-lavender-200 text-lavender-600">
                  {getIcon(event.icon)}
                </div>
                <div className="bg-lavender-50 p-5 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-handwritten text-xl font-semibold text-lavender-600">{event.title}</h3>
                    <span className="text-sm font-medium bg-lavender-200 text-lavender-700 px-2 py-1 rounded">{event.year}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;