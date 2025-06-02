import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { galleryImages } from '../constants';
import Masonry from 'react-masonry-css';

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-lavender-50">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Snapshots of My World" />
        
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto mt-12"
          columnClassName="pl-4 bg-clip-padding"
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              className="mb-4 relative overflow-hidden rounded-lg group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-white text-lavender-600 rounded-full">
                  {image.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Gallery;