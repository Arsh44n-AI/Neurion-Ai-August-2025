import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { MatrixRain } from '../components/MatrixRain';
import { CursorSpotlight } from '../components/CursorSpotlight';
import { CursorTrail } from '../components/CursorTrail';
import { NeonConnections } from '../components/NeonConnections';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-300 relative overflow-x-hidden">
      {/* Matrix Background Effects */}
      <MatrixRain />
      <CursorSpotlight />
      <CursorTrail />
      <NeonConnections />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};