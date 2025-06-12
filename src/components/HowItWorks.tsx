import React from 'react';
import { Building2, Users, Rocket } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  delay: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, step, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-6">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {step}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Building2 size={32} />,
      title: "Business Connection",
      description: "Connect your business profile and define your campaign goals, target audience, and budget parameters.",
      step: 1,
      delay: 0
    },
    {
      icon: <Users size={32} />,
      title: "Influencer Matching",
      description: "Our AI-powered system matches you with verified influencers who align with your brand values and audience.",
      step: 2,
      delay: 200
    },
    {
      icon: <Rocket size={32} />,
      title: "Campaign Execution",
      description: "Launch your campaign with real-time tracking, analytics, and performance optimization tools.",
      step: 3,
      delay: 400
    }
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Simple, streamlined process to get your influencer marketing campaigns up and running in just 48 hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
        
        {/* Connection Lines */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-0 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;