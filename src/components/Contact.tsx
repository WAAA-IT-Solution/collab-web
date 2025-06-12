import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Facebook, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Instagram size={24} />, url: '#', color: 'hover:text-pink-400' },
    { icon: <Twitter size={24} />, url: '#', color: 'hover:text-blue-400' },
    { icon: <Linkedin size={24} />, url: '#', color: 'hover:text-blue-600' },
    { icon: <Facebook size={24} />, url: '#', color: 'hover:text-blue-500' }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to grow your business with influencer marketing? Get in touch and let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-2 text-white placeholder-transparent focus:border-blue-400 transition-colors duration-300 outline-none"
                  placeholder="Your Name"
                  required
                />
                <label 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name ? 
                    '-top-6 text-blue-400 text-sm' : 
                    'top-0 text-gray-400'
                  }`}
                >
                  Your Name
                </label>
              </div>
              
              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-2 text-white placeholder-transparent focus:border-blue-400 transition-colors duration-300 outline-none"
                  placeholder="Your Email"
                  required
                />
                <label 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email ? 
                    '-top-6 text-blue-400 text-sm' : 
                    'top-0 text-gray-400'
                  }`}
                >
                  Your Email
                </label>
              </div>
              
              {/* Company Field */}
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField('')}
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-2 text-white placeholder-transparent focus:border-blue-400 transition-colors duration-300 outline-none"
                  placeholder="Company Name"
                  required
                />
                <label 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === 'company' || formData.company ? 
                    '-top-6 text-blue-400 text-sm' : 
                    'top-0 text-gray-400'
                  }`}
                >
                  Company Name
                </label>
              </div>
              
              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-2 text-white placeholder-transparent focus:border-blue-400 transition-colors duration-300 outline-none resize-none"
                  placeholder="Your Message"
                  required
                />
                <label 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message ? 
                    '-top-6 text-blue-400 text-sm' : 
                    'top-0 text-gray-400'
                  }`}
                >
                  Your Message
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
            
            {/* Success Animation */}
            {showSuccess && (
              <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                <div className="bg-green-500 text-white p-4 rounded-lg flex items-center space-x-2 animate-bounce">
                  <CheckCircle size={24} />
                  <span>Message sent successfully!</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">hello@collab.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">123 Business Ave, Tech City, TC 12345</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
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
            
            <div className="bg-gray-800/30 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Office Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;