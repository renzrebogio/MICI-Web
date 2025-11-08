import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Building,
  Truck,
  Zap,
  ShoppingCart,
  GraduationCap,
  CreditCard,
  Plane,
  Factory,
  Package,
  Banknote,
} from "lucide-react";

const IndustriesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const industries = [
    {
      title: "Construction",
      description:
        "Comprehensive coverage for construction projects, equipment, and liability protection with specialized risk management solutions.",
      icon: Building,
      image:
        "https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop&crop=center",
      color: "from-orange-500/20 to-orange-700/40",
    },
    {
      title: "Retail",
      description:
        "Protecting retail businesses with property, inventory, and customer liability coverage tailored for modern commerce.",
      icon: ShoppingCart,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      color: "from-blue-500/20 to-blue-700/40",
    },
    {
      title: "Energy",
      description:
        "Specialized insurance solutions for power generation and energy infrastructure with renewable energy focus.",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=center",
      color: "from-yellow-500/20 to-yellow-700/40",
    },
    {
      title: "Transportation",
      description:
        "Fleet management and logistics insurance for safe and secure transportation across all vehicle types.",
      icon: Truck,
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center",
      color: "from-green-500/20 to-green-700/40",
    },
    {
      title: "Education",
      description:
        "Educational institution coverage including property, liability, and student protection for all learning environments.",
      icon: GraduationCap,
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=800&fit=crop&crop=center&q=80",
      color: "from-teal-400/20 to-teal-700/40",
    },
    {
      title: "E-Commerce",
      description:
        "Digital business protection covering cyber liability, data breaches, and online operations for the digital age.",
      icon: CreditCard,
      image:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop&crop=center",
      color: "from-pink-500/20 to-pink-700/40",
    },
    {
      title: "Financial Institutions",
      description:
        "Banking and financial services coverage including professional liability and comprehensive cyber security protection.",
      icon: Banknote,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
      color: "from-indigo-500/20 to-indigo-700/40",
    },
    {
      title: "Aeronautics",
      description:
        "Aviation insurance for aircraft, airports, and aerospace industry operations with global coverage solutions.",
      icon: Plane,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&crop=center",
      color: "from-cyan-500/20 to-cyan-700/40",
    },
    {
      title: "Manufacturing",
      description:
        "Industrial coverage for manufacturing facilities, equipment, and product liability with operational continuity focus.",
      icon: Factory,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
      color: "from-red-500/20 to-red-700/40",
    },
    {
      title: "Logistics",
      description:
        "Supply chain and warehouse protection with comprehensive cargo and facility coverage for global operations.",
      icon: Package,
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center",
      color: "from-teal-500/20 to-teal-700/40",
    },
    {
      title: "Lending",
      description:
        "Supply chain and warehouse protection with comprehensive cargo and facility coverage.",
      icon: Banknote,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop&crop=center&q=80",
      color: "from-teal-400/20 to-teal-600/40",
    },
  ];

  // Auto-slide functionality with 5-second intervals
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % industries.length);
          return 0;
        }
        return prev + 2; // 50 intervals for 5 seconds (100/50 = 2)
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, [isAutoPlaying, industries.length, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + industries.length) % industries.length
    );
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    setProgress(0);
  };

  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section
      id="industries"
      className="py-20 bg-gradient-to-br from-secondary via-accent to-secondary overflow-hidden"
    >
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
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            INDUSTRIES THAT{" "}
            <span className="text-primary drop-shadow-lg">MICI SECURES</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-32 h-1 bg-gradient-to-r from-primary to-tertiary mx-auto mb-8 rounded-full shadow-lg"
            style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
          />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Providing comprehensive insurance solutions across diverse
            industries with tailored coverage for every business need.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Slider */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute inset-0"
              >
                {/* Background Image with Enhanced Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={industries[currentSlide].image}
                    alt={industries[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-accent/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content with Better Typography */}
                <div className="relative h-full flex items-center pl-24 pr-24 py-8 md:pl-32 md:pr-32 md:py-16">
                  <div className="flex-1 max-w-2xl">
                    <motion.div
                      key={`icon-${currentSlide}`}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: 0.1,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="w-20 h-20 bg-yellow-600 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-sm border border-primary/30 shadow-2xl"
                      style={{
                        boxShadow: "0 20px 40px hsl(var(--primary) / 0.3)",
                      }}
                    >
                      {(() => {
                        const IconComponent = industries[currentSlide].icon;
                        return (
                          <IconComponent
                            size={40}
                            className="text-secondary drop-shadow-lg"
                          />
                        );
                      })()}
                    </motion.div>

                    <motion.h3
                      key={`title-${currentSlide}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3,
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl leading-tight"
                    >
                      {industries[currentSlide].title}
                    </motion.h3>

                    <motion.p
                      key={`desc-${currentSlide}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.5,
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl font-medium drop-shadow-lg"
                    >
                      {industries[currentSlide].description}
                    </motion.p>

                    <motion.button
                      key={`button-${currentSlide}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-10 bg-primary hover:bg-tertiary text-secondary px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-primary/50 border border-primary/50"
                      style={{
                        boxShadow: "0 20px 40px hsl(var(--primary) / 0.3)",
                        transition: "var(--transition-smooth)",
                      }}
                    >
                      Explore Coverage
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-20 w-16 h-16 bg-secondary/80 hover:bg-accent text-white rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-primary/20 transition-all duration-300 hover:border-primary/50"
            style={{ transition: "var(--transition-smooth)" }}
          >
            <ChevronLeft size={28} />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-20 w-16 h-16 bg-secondary/80 hover:bg-accent text-white rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-primary/20 transition-all duration-300 hover:border-primary/50"
            style={{ transition: "var(--transition-smooth)" }}
          >
            <ChevronRight size={28} />
          </motion.button>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center mt-10">
            <div className="flex space-x-3">
              {industries.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-primary shadow-lg scale-110"
                      : "bg-secondary-foreground/60 hover:bg-primary/70"
                  }`}
                  style={{
                    boxShadow:
                      currentSlide === index
                        ? "0 0 20px hsl(var(--primary) / 0.5)"
                        : "none",
                    transition: "var(--transition-smooth)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="mt-6 w-full max-w-md mx-auto bg-secondary/60 h-2 rounded-full overflow-hidden ring-1 ring-primary/20">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full shadow-lg"
            />
          </div>

          {/* Industry Title Display */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-6"
          >
            <h4 className="text-2xl font-bold text-white">
              {industries[currentSlide].title}
            </h4>
            <p className="text-primary/80 text-sm mt-1">
              Industry Focus • Comprehensive Coverage
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSlider;
