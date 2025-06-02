import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { socialLinks } from '../constants';
import { 
  Instagram,
  Linkedin,
  Github,
  Send,
  CheckCircle
} from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Instagram':
      return <Instagram size={20} />;
    case 'Linkedin':
      return <Linkedin size={20} />;
    case 'Github':
      return <Github size={20} />;
    default:
      return null;
  }
};

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    // For this demo, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-lavender-50">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Let's Connect" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-handwritten font-bold text-lavender-600 mb-6">Send Me a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-green-50 text-green-700 p-6 rounded-lg flex items-center justify-center flex-col text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="mb-3" size={48} />
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-lavender-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-lavender-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-lavender-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-lavender-500 text-white rounded-lg font-medium hover:bg-lavender-600 transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h3 className="text-2xl font-handwritten font-bold text-lavender-600 mb-6">Connect With Me</h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 bg-lavender-50 hover:bg-lavender-100 rounded-lg transition-colors"
                  >
                    <span className="mr-2 text-lavender-600">{getIcon(link.icon)}</span>
                    <span className="font-medium text-gray-700">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-handwritten font-bold text-lavender-600 mb-6">About This Website</h3>
              <p className="text-gray-600 mb-4">
                This personal portfolio was designed to showcase my multifaceted personality, skills, and passions. It reflects my creative approach to life and my professional aspirations.
              </p>
              <p className="text-gray-600">
                Feel free to explore and get to know me better. I'm always open to new connections, collaborations, and opportunities!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;