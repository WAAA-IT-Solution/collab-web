import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg'
  ];

  useEffect(() => {
    setLoaded(true);

    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section id="vision" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with fade */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === bgIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'brightness(50%)', // slightly darker
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">COLLAB</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Your Business Growth Partner
            </span>
          </h1>
          
          <p className={`text-xl sm:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            All your collaborations at one place
          </p>
          
        <div className={`mb-12 transition-all duration-1000 delay-500 ${
  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}>
  {/* Sparkles + Text */}
  <div className="flex items-center justify-center mb-8">
    <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
    <span className="text-gray-300 text-lg">Find perfect influencer matches for your brand</span>
  </div>

  {/* CTA Button */}
  <div className="flex flex-col items-center space-y-4">
    <button
      onClick={handleCTAClick}
      className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full text-lg overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
    >
      <span className="relative z-10">Start Growing Today</span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>

    {/* Arrow directly under button */}
    <ChevronDown className="w-8 h-8 text-gray-300 animate-bounce" />
  </div>
</div>

          
          <div className={`text-sm text-gray-500 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Designed by Waaa Team
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
