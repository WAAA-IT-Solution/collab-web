import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, url: '#', color: 'hover:text-pink-400' },
    { icon: <Twitter size={20} />, url: '#', color: 'hover:text-blue-400' },
    { icon: <Linkedin size={20} />, url: '#', color: 'hover:text-blue-600' },
    { icon: <Facebook size={20} />, url: '#', color: 'hover:text-blue-500' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">COLLAB</h3>
            <p className="text-gray-400 mb-6">
              Connecting businesses with verified influencers for meaningful collaborations and measurable growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#vision" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#process" className="hover:text-blue-400 transition-colors duration-200">How It Works</a></li>
              <li><a href="#influencers" className="hover:text-blue-400 transition-colors duration-200">Influencers</a></li>
              <li><a href="#impact" className="hover:text-blue-400 transition-colors duration-200">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 COLLAB. All rights reserved. | Designed with ❤️ by COLLAB Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;