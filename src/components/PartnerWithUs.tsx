import React, { useState } from 'react';
import { Clock, Users, Search, RefreshCw } from 'lucide-react';

const PartnerWithUs = () => {
  const [activeCard, setActiveCard] = useState(null);

  const partnershipPoints = [
    {
      id: 1,
      icon: Clock,
      title: "TRUSTED THROUGH TIME",
      description: "MICI has been engaged in insurance since 1933. It has been trusted by individuals and businesses from different industries such as hospitality, education, and telecommunications industry, among others.",
      position: "top"
    },
    {
      id: 2,
      icon: Users,
      title: "EXTENSIVE EXPERIENCE",
      description: "Our people are always committed to honing their interpersonal, technical, and financial skills to be able to provide the best comprehensive custom solutions for you.",
      position: "right"
    },
    {
      id: 3,
      icon: Search,
      title: "TRANSPARENT PRICING",
      description: "MICI is highly driven to build trust with their customers and allay their apprehensions by ensuring that they will get the value, and sometimes more, of what they paid for.",
      position: "bottom"
    },
    {
      id: 4,
      icon: RefreshCw,
      title: "HASSLE-FREE PROCESS",
      description: "Talk to our people and get yourself, your business, and your loved ones covered immediately by our different range of products depending on your needs.",
      position: "left"
    }
  ];

  const getCardPosition = (position) => {
    switch (position) {
      case 'top':
        return 'absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[20%]';
      case 'right':
        return 'absolute right-0 top-1/2 transform translate-x-[5%] -translate-y-1/2';
      case 'bottom':
        return 'absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[20%]';
      case 'left':
        return 'absolute left-0 top-1/2 transform -translate-x-[5%] -translate-y-1/2';
      default:
        return '';
    }
  };

  const getConnectorLine = (position) => {
  const baseClasses = "absolute bg-gradient-to-r from-teal-400 to-teal-600";
  switch (position) {
    case 'top':
      return `${baseClasses} w-1 h-16 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-32`;
    case 'right':
      return `${baseClasses} h-1 w-32 right-1/2 top-1/2 transform translate-x-40 -translate-y-1/2`; 
    case 'bottom':
      return `${baseClasses} w-1 h-16 left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-32`;
    case 'left':
      return `${baseClasses} h-1 w-32 left-1/2 top-1/2 transform -translate-x-40 -translate-y-1/2`; 
    default:
      return '';
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            WHY PARTNER WITH US?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover the key advantages that make us your ideal insurance partner
          </p>
        </div>

        {/* Central Hub Layout */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Main container with aspect ratio */}
          <div className="relative w-full pb-[100%] md:pb-[80%]"> {/* Increased padding */}
            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-2xl md:text-3xl font-bold mb-1">MICI</div>
                  <div className="text-xs md:text-sm opacity-90">Your Partner</div>
                </div>
              </div>
            </div>
            {/* Connector Lines */}
            {partnershipPoints.map((point) => (
              <div key={`line-${point.id}`} className={getConnectorLine(point.position) + " z-10"}></div>
            ))}
            {/* Partnership Cards */}
            {partnershipPoints.map((point) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={point.id}
                  className={`${getCardPosition(point.position)} z-20`}
                  onMouseEnter={() => setActiveCard(point.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`
                    w-72 bg-white rounded-xl shadow-lg border border-slate-200 p-6 
                    transition-all duration-300 cursor-pointer
                    ${activeCard === point.id ? 'scale-105 shadow-2xl border-teal-300' : 'hover:shadow-xl'}
                  `}>
                    {/* Icon */}
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto
                      transition-all duration-300
                      ${activeCard === point.id 
                        ? 'bg-teal-600 text-white' 
                        : 'bg-teal-100 text-teal-600'
                      }
                    `}>
                      <IconComponent size={28} />
                    </div>

                    {/* Title */}
                    <h3 className={`
                      text-center font-bold text-sm mb-3 tracking-wide
                      transition-colors duration-300
                      ${activeCard === point.id ? 'text-teal-700' : 'text-slate-700'}
                    `}>
                      {point.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed text-center">
                      {point.description}
                    </p>

                    {/* Active indicator */}
                    {activeCard === point.id && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl opacity-20 -z-10"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-teal-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Partnership Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;