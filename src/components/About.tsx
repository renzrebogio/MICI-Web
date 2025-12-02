import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, RefreshCw, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreValues = [
    {
      icon: Target,
      title: "Meeting Consumer Demands",
      description:
        "We continuously exceed customer expectations with innovative solutions.",
      color: "text-yellow-300",
    },
    {
      icon: Lightbulb,
      title: "Igniting Innovation",
      description:
        "Constantly evolving to bring cutting-edge changes to the insurance industry.",
      color: "text-yellow-300",
    },
    {
      icon: RefreshCw,
      title: "Constantly Adapting",
      description:
        "Staying agile and responsive to the dynamic non-life insurance landscape.",
      color: "text-yellow-300",
    },
    {
      icon: Users,
      title: "Inspiring Inclusion",
      description:
        "Promoting diversity and accessibility in all our insurance offerings.",
      color: "text-yellow-300",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="about" className="py-20 bg-background" ref={ref}>
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
            <div> ABOUT </div> <br />
            METROPOLITAN INSURANCE
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-accent mx-auto mb-8"
          />
        </motion.div>

        {/* Company Story */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">
              92 Years of Trust & Excellence
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Metropolitan Insurance Company, Inc. (MICI) has been a
                cornerstone in the non-life insurance industry since 1933. We
                are committed to protecting people from losses, injuries, or
                liabilities from unexpected events.
              </p>
              <p>
                Our comprehensive non-life insurance products add security and
                value to anyone's life. With proven industry knowledge and
                strategic planning, MICI continues to strive to promote security
                to the Filipino people.
              </p>
              <p>
                As a forward-thinking brand, MICI has developed products that
                promote inclusivity for consumers and corporate coverage that
                bring confidence to business initiatives.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-accent rounded-2xl p-8 text-primary-foreground shadow-card"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    1933
                  </motion.div>
                  <div className="text-sm opacity-90">Founded</div>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    92
                  </motion.div>
                  <div className="text-sm opacity-90">Years Strong</div>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    1000+
                  </motion.div>
                  <div className="text-sm opacity-90">Clients Protected</div>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    24/7
                  </motion.div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-accent text-center mb-12">
            OUR CORE VALUES
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className={`w-12 h-12 ${value.color} mb-4 p-2 bg-teal-800 rounded-lg`}
                >
                  <value.icon size={32} />
                </motion.div>
                <h4 className="font-bold text-accent mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
