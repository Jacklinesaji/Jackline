import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="text-center mb-8" ref={ref}>
      <motion.h2 
        className="text-4xl md:text-5xl font-handwritten font-bold text-lavender-600 inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="h-1 w-24 bg-lavender-400 mx-auto mt-4 rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: '6rem' } : { width: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      ></motion.div>
    </div>
  );
};

export default SectionTitle;