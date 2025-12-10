import React, { useState } from 'react';
import Splash from './components/Splash';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import CollabSection from './components/sections/CollabSection';
import ProgramSection from './components/sections/ProgramSection';
import BenefitSection from './components/sections/BenefitSection';
import ReviewSection from './components/sections/ReviewSection';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // For visual consistency, we render the noise overlay here globally if needed,
  // but it's currently in the splash and CSS.
  
  return (
    <>
      <div className="grain-overlay" />
      
      {!isAuthenticated ? (
        <Splash onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <Layout>
          <Hero />
          <CollabSection />
          <ProgramSection />
          <BenefitSection />
          <ReviewSection />
        </Layout>
      )}
    </>
  );
};

export default App;