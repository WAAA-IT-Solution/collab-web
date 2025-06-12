import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const BusinessImpact = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    if (inView) {
      const data = [20, 45, 70, 85, 120, 180, 250, 300];
      let index = 0;
      const interval = setInterval(() => {
        if (index < data.length) {
          setChartData(prev => [...prev, data[index]]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [inView]);

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "300%",
      label: "Increase in website traffic",
      color: "text-green-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "250%",
      label: "Boost in social media engagement",
      color: "text-blue-400"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "200%",
      label: "Growth in conversion rates",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Measurable Growth
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our data-driven approach delivers consistent results across all key performance metrics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          { /* Chart */ }
          <div ref={ref} className="bg-black/30 p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-6">Growth Over Time</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {chartData.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-blue-600 to-purple-600 rounded-t transition-all duration-500 flex-1 relative group cursor-pointer"
                  style={{ height: `${(value / 300) * 100}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {value}%
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-gray-400 text-sm">
              {['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'].map((quarter, index) => (
                <span key={index}>{quarter}</span>
              ))}
            </div>
          </div>
          
          { /* Stats */ }
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-4 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
            
            { /* Testimonial */ }
            <div className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '600ms' }}>
              <p className="text-gray-300 italic mb-4">
                "COLLAB transformed our marketing strategy. The ROI we achieved exceeded all expectations, 
                and the quality of influencer partnerships was exceptional."
              </p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Client" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-medium">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">Marketing Director, TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;