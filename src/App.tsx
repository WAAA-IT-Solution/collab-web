import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformStats from './components/PlatformStats';
import HowItWorks from './components/HowItWorks';
import FeaturedTalents from './components/FeaturedTalents';
import BusinessImpact from './components/BusinessImpact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <PlatformStats />
      <HowItWorks />
      <FeaturedTalents />
      <BusinessImpact />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;