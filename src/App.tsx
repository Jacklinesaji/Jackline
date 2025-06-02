import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-lavender-50 to-peach-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;