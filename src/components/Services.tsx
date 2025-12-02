import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Car,
  Home,
  Heart,
  Smartphone,
  Shield,
  Truck,
  Building,
  Plane,
  ChevronRight,
  Check,
  PawPrint,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: Car,
      title: "Motor Car Insurance",
      description: "Comprehensive vehicle protection on the road",
      features: [
        "Collision coverage",
        "Theft protection",
        "Third-party liability",
        "Roadside assistance",
        "Acts of nature coverage",
        "Personal accident benefits",
      ],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Home,
      title: "Property Insurance",
      description:
        "Complete protection for your residential and commercial properties",
      features: [
        "Fire protection",
        "Natural disasters",
        "Personal belongings",
        "Structural damage",
        "Temporary accommodation",
      ],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Heart,
      title: "Personal Accident Insurance",
      description: "Financial security for unexpected personal accidents",
      features: [
        "Medical expenses",
        "Disability benefits",
        "Death benefits",
        "Emergency assistance",
        "Rehabilitation costs",
        "Family support",
      ],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Smartphone,
      title: "Phone Insurance",
      description: "Protection for your valuable mobile devices",
      features: [
        "Screen damage",
        "Water damage",
        "Technical support",
        "Replacement device",
        "Global coverage",
      ],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Shield,
      title: "Comprehensive General Liability",
      description: "Business protection against third-party claims",
      features: [
        "Public liability",
        "Legal defense",
        "Property damage",
        "Medical payments",
      ],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Truck,
      title: "Marine/Cargo Insurance",
      description: "Secure your goods during transportation",
      features: [
        "Transit coverage",
        "Storage protection",
        "International shipping",
        "Customs clearance",
        "Loading/unloading",
        "Weather protection",
      ],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Building,
      title: "Surety",
      description: "Bond services for performance guarantees",
      features: [
        "Performance Bonds",
        "Downpayment Bonds",
        "Heir's Bonds",
        "Warranty Bonds",
      ],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: PawPrint,
      title: "Pet Insurance",
      description: "Healthcare coverage for your beloved pets",
      features: [
        "Veterinary care",
        "Emergency treatments",
        "Routine check-ups",
        "Surgery coverage",
        "Medication costs",
        "Specialist consultations",
      ],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const detailVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-hero" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-accent mb-6"
          >
            OUR INSURANCE PRODUCTS
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-accent mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-secondary max-w-2xl mx-auto"
          >
            Comprehensive insurance solutions tailored to protect what matters
            most to you
          </motion.p>
        </motion.div>

        {/* Services Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Services List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                onClick={() => setSelectedService(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedService === index
                    ? "scale-[1.02] shadow-lg"
                    : "hover:shadow-md"
                }`}
              >
                <Card
                  className={`p-6 border-0 bg-white/90 backdrop-blur-sm transition-all duration-300 ${
                    selectedService === index
                      ? "ring-2 ring-primary shadow-xl"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${service.color}`}
                      >
                        <service.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-accent mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: selectedService === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Details */}
          <motion.div
            variants={detailVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:sticky lg:top-8 h-fit"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="p-8 border-0 bg-white/95 backdrop-blur-sm shadow-xl">
                  {/* Service Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${services[selectedService].color}`}
                    >
                      {(() => {
                        const IconComponent = services[selectedService].icon;
                        return <IconComponent size={28} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-accent mb-2">
                        {services[selectedService].title}
                      </h3>
                      <p className="text-muted-foreground">
                        {services[selectedService].description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {services[selectedService].features.map(
                      (feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-accent">{feature}</span>
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button
                      className="w-full bg-accent hover:bg-tertiary/90 text-primary-foreground font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                      onClick={() => {
                        const contactSection = document.getElementById("contact");
                        if (contactSection) {
                          contactSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                    >
                      Sign Up for {services[selectedService].title}
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
