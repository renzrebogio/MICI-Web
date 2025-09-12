import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Building, Truck, Zap, ShoppingCart, GraduationCap, CreditCard, Plane, Factory, Package, Banknote } from 'lucide-react';

const IndustriesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const industries = [
    {
      title: 'Construction',
      description: 'Comprehensive coverage for construction projects, equipment, and liability protection.',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop&crop=center',
      color: 'from-accent/20 to-accent/40'
    },
    {
      title: 'Retail',
      description: 'Protecting retail businesses with property, inventory, and customer liability coverage.',
      icon: ShoppingCart,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
      color: 'from-blue-400/20 to-blue-600/40'
    },
    {
      title: 'Energy',
      description: 'Specialized insurance solutions for power generation and energy infrastructure.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=center',
      color: 'from-yellow-400/20 to-yellow-600/40'
    },
    {
      title: 'Transportation',
      description: 'Fleet management and logistics insurance for safe and secure transportation.',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center',
      color: 'from-green-400/20 to-green-600/40'
    },
    {
      title: 'Education',
      description: 'Educational institution coverage including property, liability, and student protection.',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=800&fit=crop&crop=center&q=80',
      color: 'from-purple-400/20 to-purple-600/40'
    },
    {
      title: 'E-Commerce',
      description: 'Digital business protection covering cyber liability, data breaches, and online operations.',
      icon: CreditCard,
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop&crop=center',
      color: 'from-pink-400/20 to-pink-600/40'
    },
    {
      title: 'Financial Institutions',
      description: 'Banking and financial services coverage including professional liability and cyber security.',
      icon: Banknote,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center',
      color: 'from-indigo-400/20 to-indigo-600/40'
    },
    {
      title: 'Aeronautics',
      description: 'Aviation insurance for aircraft, airports, and aerospace industry operations.',
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&crop=center',
      color: 'from-cyan-400/20 to-cyan-600/40'
    },
    {
      title: 'Manufacturing',
      description: 'Industrial coverage for manufacturing facilities, equipment, and product liability.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center',
      color: 'from-orange-400/20 to-orange-600/40'
    },
    {
      title: 'Logistics',
      description: 'Supply chain and warehouse protection with comprehensive cargo and facility coverage.',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center',
      color: 'from-teal-400/20 to-teal-600/40'
    },
    {
      title: 'Lending',
      description: 'Supply chain and warehouse protection with comprehensive cargo and facility coverage.',
      icon: Banknote,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop&crop=center&q=80',
      color: 'from-teal-400/20 to-teal-600/40'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, industries.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Industries That{' '}
            <span className="text-accent">MICI Secures</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto mb-8"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing comprehensive insurance solutions across diverse industries with tailored coverage for every business need.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Slider */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={industries[currentSlide].image}
                    alt={industries[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${industries[currentSlide].color} backdrop-blur-[1px]`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center justify-between p-8 md:p-12">
                  <div className="flex-1 max-w-2xl ml-16 md:ml-20">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-accent/30"
                    >
                      {(() => {
                        const IconComponent = industries[currentSlide].icon;
                        return <IconComponent size={32} className="text-accent" />;
                      })()}
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
                    >
                      {industries[currentSlide].title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-xl"
                    >
                      {industries[currentSlide].description}
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 bg-accent hover:bg-accent/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-accent/25"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-60 -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary-foreground/20 transition-all duration-300 hover:shadow-accent/25"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <ChevronLeft size={24} />
            </motion.div>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-60 -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary-foreground/20 transition-all duration-300 hover:shadow-accent/25"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <ChevronRight size={24} />
            </motion.div>
          </motion.button>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {industries.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-accent shadow-lg shadow-accent/50' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full max-w-md mx-auto bg-muted-foreground/20 h-1 rounded-full overflow-hidden">
            <motion.div
              key={`progress-${currentSlide}`}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
              className="h-full bg-accent rounded-full"
            />
          </div>
        </div>

        {/* Industry Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {industries.slice(0, 11).map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                currentSlide === index 
                  ? 'bg-accent/10 border-accent shadow-lg shadow-accent/25' 
                  : 'bg-card hover:bg-card/80 border-border/50 hover:border-accent/50'
              }`}
            >
              {(() => {
                const IconComponent = industry.icon;
                return <IconComponent size={24} className={currentSlide === index ? 'text-accent' : 'text-muted-foreground'} />;
              })()}
              <p className={`text-sm mt-2 font-medium ${
                currentSlide === index ? 'text-accent' : 'text-muted-foreground'
              }`}>
                {industry.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSlider;