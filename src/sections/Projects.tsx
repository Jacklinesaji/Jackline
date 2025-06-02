import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../constants';
import { X } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Things I've Made" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleProjectClick(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-lavender-500 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-lavender-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-white text-lavender-600 rounded-lg font-medium">
                  View Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div 
              className="bg-white rounded-xl overflow-hidden max-w-2xl w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="relative h-64">
                <img 
                  src={projects[selectedProject].image} 
                  alt={projects[selectedProject].title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-handwritten font-bold text-gray-800">
                    {projects[selectedProject].title}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium bg-lavender-100 text-lavender-600 rounded-full">
                    {projects[selectedProject].category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {projects[selectedProject].description}
                </p>
                <div className="flex justify-end">
                  <button 
                    onClick={closeProjectModal}
                    className="px-4 py-2 bg-lavender-500 text-white rounded-lg hover:bg-lavender-600 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;