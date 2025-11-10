import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        // If not on home page, navigate home first then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(href.replace("#", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // If on home page, just scroll
        const element = document.getElementById(href.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Add scroll to top for non-hash routes
      window.scrollTo(0, 0);
      navigate(href);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Corporate Governance", href: "/corporate-governance" },
    { name: "Contact", href: "#contact" },
    { name: "Career", href: "/career" },
  ];

  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 justify-items-start">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <img
                src="MICI_Logo.png"
                alt="Insurance Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Protecting Filipino families and businesses for over 92 years
                with comprehensive insurance solutions you can trust.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:animate-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-extrabold text-lg mb-6 text-accent/95 drop-shadow-sm">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.href);
                      }}
                      className="text-primary-foreground/80 hover:text-tertiary transition-colors duration-300 flex items-center group"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        className="transition-transform duration-300"
                      >
                        {link.name}
                      </motion.span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-extrabold text-lg mb-6 text-accent/95 drop-shadow-sm">
                Contact Us
              </h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 transition-transform duration-300"
                >
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div className="text-primary-foreground/80 text-sm leading-relaxed">
                    3/F, The Athenaeum Building
                    <br />
                    160 L.P. Leviste St., Salcedo Village
                    <br />
                    Makati, Metro Manila, 1603
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 transition-transform duration-300"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-primary-foreground/80">
                    (02) 8867-2888
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 transition-transform duration-300"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-primary-foreground/80">
                    inquiry@miciph.com
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 Metropolitan Insurance Company Inc. All rights reserved.
              <br />
              Certificate of Authority No. 2025/49-R.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                onClick={() => window.scrollTo(0, 0)}
                className="text-primary-foreground/60 hover:text-tertiary transition-colors duration-300"
              >
                Privacy Notice
              </Link>
              <Link
                to="/terms-of-service"
                onClick={() => window.scrollTo(0, 0)}
                className="text-primary-foreground/60 hover:text-tertiary transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <a
                href="#contact-map"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact-map");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="text-primary-foreground/60 hover:text-tertiary transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
