import React, { useState, useEffect, useRef } from "react";
import { Clock, Users, Search, RefreshCw } from "lucide-react";

const PartnerWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    industries: 0,
    claims: 0
  });
  
  const sectionRef = useRef(null);

  const partnershipPoints = [
    {
      id: 1,
      icon: Clock,
      title: "TRUSTED THROUGH TIME",
      description: "MICI has been engaged in insurance since 1933. It has been trusted by individuals and businesses from different industries such as hospitality, education, and telecommunications industry, among others.",
      statValue: 92,
      statLabel: "Years of Experience",
      statSuffix: "+",
      delay: 0
    },
    {
      id: 2,
      icon: Users,
      title: "EXTENSIVE EXPERIENCE",
      description: "Our people are always committed to honing their interpersonal, technical, and financial skills to be able to provide the best comprehensive custom solutions for you.",
      statValue: 15000,
      statLabel: "Satisfied Clients",
      statSuffix: "+",
      delay: 200
    },
    {
      id: 3,
      icon: Search,
      title: "TRANSPARENT PRICING",
      description: "MICI is highly driven to build trust with their customers and allay their apprehensions by ensuring that they will get the value, and sometimes more, of what they paid for.",
      statValue: 25,
      statLabel: "Industries Covered",
      statSuffix: "+",
      delay: 400
    },
    {
      id: 4,
      icon: RefreshCw,
      title: "HASSLE-FREE PROCESS",
      description: "Talk to our people and get yourself, your business, and your loved ones covered immediately by our different range of products depending on your needs.",
      statValue: 24,
      statLabel: "Hour Response Time",
      statSuffix: "",
      delay: 600
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounter = (statId, endValue, duration = 2000) => {
      let startValue = 0;
      const increment = endValue / (duration / 16);
      
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          startValue = endValue;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [statId]: Math.floor(startValue)
        }));
      }, 16);
    };

    // Animate each counter with delays
    partnershipPoints.forEach((point, index) => {
      setTimeout(() => {
        const keys = ['years', 'clients', 'industries', 'claims'];
        animateCounter(keys[index], point.statValue, 2000);
      }, point.delay);
    });
  }, [isVisible]);

  const getCounterValue = (index) => {
    const keys = ['years', 'clients', 'industries', 'claims'];
    return counters[keys[index]];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            WHY PARTNER WITH US?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Discover the key advantages that make us your ideal insurance partner
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partnershipPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={point.id}
                className="group bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-500"
                style={{
                  animationDelay: `${point.delay}ms`
                }}
              >
                {/* Stats Section */}
                <div className="text-center mb-6 pb-6 border-b border-slate-100">
                  <div className="text-5xl md:text-6xl font-bold text-teal-600 mb-2">
                    {isVisible ? (
                      <>
                        {getCounterValue(index).toLocaleString()}
                        <span className="text-3xl">{point.statSuffix}</span>
                      </>
                    ) : (
                      "0"
                    )}
                  </div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    {point.statLabel}
                  </p>
                </div>

                {/* Content Section */}
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    <IconComponent size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-700 mb-4 tracking-wide group-hover:text-teal-700 transition-colors duration-300">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100 opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                // fallback to hash navigation
                window.location.hash = "#contact";
              }
            }}
            className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-teal-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Partnership Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;