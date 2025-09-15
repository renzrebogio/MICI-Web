import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img
            src="MICI_Logo.png"
            alt="Insurance Logo"
            className="h-12 w-auto"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  scrolled
                    ? "text-gray-800 hover:text-accent"
                    : "text-primary-foreground hover:text-accent"
                } transition-colors duration-300 relative group`}
              >
                {item.name}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <Button
              variant="outline"
              className={`border-accent hover:bg-accent hover:text-primary-foreground transition-all duration-300 animate-glow ${
                scrolled ? "text-accent" : "text-accent"
              }`}
            >
              Get Quote
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-accent-800" : "text-primary-foreground"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden bg-primary/95 backdrop-blur-md"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-primary-foreground hover:text-accent transition-colors duration-300 px-4 py-2"
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-primary-foreground"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
