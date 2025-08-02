import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';
import { NeonConnections } from './components/NeonConnections';
import { MatrixRain } from './components/MatrixRain';
import { CursorSpotlight } from './components/CursorSpotlight';
import { TestimonialsPage } from './pages/Testimonials';
import { PricingPage } from './pages/Pricing';
import { AdvancedProtocolsPage } from './pages/AdvancedProtocols';
import { ContactPage } from './pages/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <CaseStudies />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-black text-white transition-colors duration-300 relative overflow-x-hidden">
          {/* Matrix Background Effects - Fixed positioning for consistency */}
          <MatrixRain />
          <CursorSpotlight />
          <CursorTrail />
          <NeonConnections />
          
          {/* Main Content - Higher z-index to appear above background effects */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/advanced-protocols" element={<AdvancedProtocolsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;