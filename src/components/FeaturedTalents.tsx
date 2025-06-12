import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

interface InfluencerProps {
  name: string;
  niche: string;
  followers: string;
  engagement: string;
  bio: string;
  image: string;
}

const InfluencerCard: React.FC<InfluencerProps> = ({ name, niche, followers, engagement, bio, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`relative w-full h-80 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div 
        className="relative w-full h-full transition-transform duration-500 preserve-3d cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front Side */}
        <div 
          className={`absolute inset-0 w-full h-full rounded-xl overflow-hidden transition-transform duration-500 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            <p className="text-gray-300 text-sm">{niche}</p>
          </div>
        </div>
        
        {/* Back Side */}
        <div 
          className={`absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 flex flex-col justify-center transition-transform duration-500 rotate-y-180 ${
            isFlipped ? 'rotate-y-0' : ''
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h3 className="text-white font-semibold text-xl mb-2">{name}</h3>
          <p className="text-blue-400 text-sm font-medium mb-4">{niche}</p>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{bio}</p>
          <div className="flex justify-between text-sm">
            <div className="text-center">
              <div className="text-white font-semibold">{followers}</div>
              <div className="text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold">{engagement}</div>
              <div className="text-gray-400">Engagement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedTalents = () => {
  const influencers = [
    {
      name: "Cartoon Ary",
      niche: "Animation & Comedy",
      followers: "2.5M",
      engagement: "8.2%",
      bio: "Creating viral animated content that resonates with Gen Z audience. Specializes in brand storytelling through humor.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Vijendar Chauhan",
      niche: "Business & Finance",
      followers: "1.8M",
      engagement: "6.5%",
      bio: "Business strategy expert helping brands connect with entrepreneurs and business professionals.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Ankur Warikoo",
      niche: "Entrepreneurship",
      followers: "3.2M",
      engagement: "9.1%",
      bio: "Entrepreneur and content creator sharing insights on business, startups, and personal development.",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Kunal Kashyap",
      niche: "Tech & Innovation",
      followers: "950K",
      engagement: "7.3%",
      bio: "Tech reviewer and innovation enthusiast connecting brands with tech-savvy millennials.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Ashneer Grover",
      niche: "Business Leadership",
      followers: "2.1M",
      engagement: "8.7%",
      bio: "Business leader and investor sharing insights on entrepreneurship and business growth strategies.",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Prajakta Kholi",
      niche: "Lifestyle & Entertainment",
      followers: "4.5M",
      engagement: "10.2%",
      bio: "Content creator and actress connecting brands with young Indian audiences through relatable content.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="influencers" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Featured Talents
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Connect with verified influencers across diverse niches. Each creator is pre-vetted for authenticity, 
            engagement quality, and brand alignment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {influencers.map((influencer, index) => (
            <InfluencerCard key={index} {...influencer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTalents;