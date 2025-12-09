import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Solutions from './sections/Solutions';
import Process from './sections/Process';
import CaseStudies from './sections/CaseStudies';
import Calculator from './sections/Calculator';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Contact from './sections/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple client-side routing
  if (currentPath === '/privacy-policy') {
    return <PrivacyPolicy />;
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Solutions />
        <Process />
        <CaseStudies />
        <Calculator />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
