import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 via-skyblue-50 to-peach-100 z-0" />
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="w-full md:w-2/3 text-center md:text-left">
          <motion.h1 
            className="font-handwritten text-5xl md:text-7xl font-bold text-lavender-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Jackline Saji.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Engineer by brain, artist by heart, and cat whisperer by lifestyle.
          </motion.p>
          
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="/resume.pdf" 
              className="px-6 py-3 bg-lavender-500 text-white rounded-full font-medium hover:bg-lavender-600 transition-colors"
            >
              Download Resume
            </a>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="px-6 py-3 bg-white text-lavender-500 border border-lavender-500 rounded-full font-medium hover:bg-lavender-50 transition-colors cursor-pointer"
            >
              Know More About Me
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="hidden md:block absolute right-10 w-1/3 h-3/4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="w-full h-full rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg" 
              alt="Jackline Saji" 
              className="w-full h-full object-cover rounded-full p-2"
            />
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-lavender-500" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;