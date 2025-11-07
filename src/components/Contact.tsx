import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const offices = [
    {
      location: "Metro Manila",
      phone: "(02) 8867-2888",
      address:
        "3/F, The Athenaeum Building, 160 L.P. Leviste St., Salcedo Village, Makati, Metro Manila, 1603",
      isMain: true,
    },
    {
      location: "Cebu",
      phone: "(032) 233 7911",
      address:
        "Unit 301 Kepwealth Center, Cardinal Rosales St. Corner Samar Loop, Cebu Business Park, Cebu City",
      isMain: false,
    },
    {
      location: "Bacolod",
      phone: "(034) 434 835",
      address:
        "Door #115 Northpoint Atrium, B.S. Aquino Drive, Bacolod City",
      isMain: false,
    },
    {
      location: "Davao",
      phone: "(082) 227 5731",
      address:
        "Room 006 Mezzanine Floor, Jaltan Building, Corner C.M. Recto & Bonifacio Street, Davao City, 8000, Davao del Sur, Philippines",
      isMain: false,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
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
            GET IN TOUCH
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
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to protect what matters most? Contact us today for a
            personalized insurance quote
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8 shadow-card border-0 bg-card/80 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-accent mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    variants={itemVariants}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-accent mb-2">
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full focus:ring-accent focus:border-accent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-accent mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full focus:ring-accent focus:border-accent transition-all duration-300"
                        placeholder="Your phone"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-accent mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full focus:ring-accent focus:border-accent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-accent mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full focus:ring-accent focus:border-accent transition-all duration-300"
                      placeholder="Tell us about your insurance needs..."
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-accent hover:bg-accent/90 text-primary-foreground font-semibold py-3 rounded-xl shadow-card hover:animate-glow transition-all duration-300 group"
                    >
                      Send Message
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Send className="ml-2 h-5 w-5" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Main Contact Info */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 shadow-card border-0 bg-gradient-primary text-primary-foreground">
                <h3 className="text-xl font-bold mb-4 text-accent">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-accent mr-3" />
                    <span>inquiry@miciph.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-accent mr-3" />
                    <span>Monday - Friday, 8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Office Locations */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-accent mb-4">
                Our Offices
              </h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group"
                  >
                    <Card
                      className={`p-4 shadow-card border-0 transition-all duration-300 hover:shadow-glow ${
                        office.isMain ? "bg-tertiary/50" : "bg-card/80"
                      } backdrop-blur-sm`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              office.isMain
                                ? "bg-gradient-accent text-primary-foreground"
                                : "bg-tertiary text-accent"
                            }`}
                          >
                            <MapPin className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-accent group-hover:text-accent transition-colors">
                            {office.location} {office.isMain && "(Main Office)"}
                          </h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Phone className="h-4 w-4 mr-1" />
                            {office.phone}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                            {office.address}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <Card
            id="contact-map"
            className="h-64 bg-gradient-to-br from-accent to-tertiary border-0 shadow-card flex items-center justify-center"
          >
            <div className="text-center text-primary-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-accent" />
              <p className="text-lg font-semibold">
                Interactive Map Coming Soon
              </p>
              <p className="text-sm">Find our nearest office location</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
