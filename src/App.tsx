import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer className="bg-dark-900 text-dark-400 text-center py-12 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm mb-2">
            © 2026 <span className="text-gradient font-semibold">Priyanjali S Kadam</span>. All rights reserved.
          </p>
          <p className="text-xs text-dark-500">
            Crafted with precision and passion
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
