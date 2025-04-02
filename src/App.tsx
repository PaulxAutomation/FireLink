import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Offers from './pages/Offers';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout onNavigate={scrollToSection}>
      <div className="relative">
        {/* Background Effects */}
        <BackgroundEffects />

        {/* Content */}
        <div className="relative z-10">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="offers" className="min-h-screen">
            <Offers />
          </section>
          <section id="case-studies" className="min-h-screen">
            <CaseStudies />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default App;