import React, { useEffect, useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface StatCardProps {
  title: string;
  value: string;
  suffix: string;
  description: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, suffix, description, delay }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const target = parseInt(value);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [inView, value, delay]);

  return (
    <div 
      ref={ref}
      className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
          {count}{suffix}
        </div>
        <div className="text-gray-300 text-sm font-medium">{title}</div>
      </div>
      
      {showTooltip && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10 animate-fade-in">
          {description}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
};

const PlatformStats = () => {
  const stats = [
    {
      title: "Client Satisfaction",
      value: "95",
      suffix: "%",
      description: "Based on 500+ client reviews and feedback",
      delay: 0
    },
    {
      title: "Average ROI",
      value: "3",
      suffix: "X",
      description: "Return on investment for our clients",
      delay: 200
    },
    {
      title: "Verified Influencers",
      value: "10",
      suffix: "K+",
      description: "Pre-vetted influencers across all niches",
      delay: 400
    },
    {
      title: "Campaign Launch Time",
      value: "48",
      suffix: "hrs",
      description: "Average time from brief to campaign launch",
      delay: 600
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Platform That Delivers Results
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            COLLAB connects businesses with verified influencers through our AI-powered matching system, 
            ensuring perfect brand-creator partnerships that drive measurable growth and engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;