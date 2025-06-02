import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Cat } from 'lucide-react';
import { navLinks } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <div className="flex items-center">
              <span className={`text-2xl ${isScrolled ? 'text-lavender-600' : 'text-lavender-600'}`}>
                <Cat size={32} />
              </span>
              <h1 className={`ml-2 font-handwritten text-xl font-bold ${
                isScrolled ? 'text-lavender-600' : 'text-lavender-600'
              }`}>
                Jackline Saji
              </h1>
            </div>
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="font-medium text-lavender-600"
                    className={`cursor-pointer hover:text-lavender-500 transition-colors ${
                      isScrolled ? 'text-gray-700' : 'text-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            className="md:hidden text-lavender-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button 
                onClick={closeMobileMenu}
                className="text-lavender-600"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="flex flex-col space-y-6 text-center">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={closeMobileMenu}
                      className="text-xl font-medium text-gray-800 hover:text-lavender-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;