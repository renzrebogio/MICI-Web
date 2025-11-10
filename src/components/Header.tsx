import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "industries", "contact"]; // include industries
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Check if we're on corporate governance page
      if (window.location.pathname === "/corporate-governance") {
        setActiveSection("corporate-governance");
      }
      if (window.location.pathname === "/career") {
        setActiveSection("career");
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");

      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(sectionId);
        }
      }
    } else {
      // Add scroll to top for non-hash routes
      window.scrollTo(0, 0);
      navigate(href);
      setActiveSection(href.replace("/", ""));
    }
    setIsOpen(false);
  };

  // Update navItems to use proper hash routing
  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#services" },
    { name: "Industries", href: "/#industries" },
    { name: "Corporate Governance", href: "/corporate-governance" },
    { name: "Contact", href: "/#contact" },
    { name: "Career", href: "/career" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary/95 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="cursor-pointer">
            <img
              src="/MICI_Logo.png"
              alt="Insurance Logo"
              className="h-14 w-auto hover:opacity-80 transition-opacity duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            {navItems.map((item, index) => {
              const sectionName = item.href.replace("/#", "").replace("/", "");
              const isActive = activeSection === sectionName;

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-gray-800 hover:text-accent ${
                    isActive ? "text-accent font-semibold" : ""
                  } transition-colors duration-300 relative group`}
                >
                  {item.name}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </motion.a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-colors duration-300 text-gray-800"
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
            {navItems.map((item) => {
              const sectionName = item.href.replace("/#", "").replace("/", "");
              const isActive = activeSection === sectionName;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className={`block text-primary-foreground hover:text-accent transition-colors duration-300 px-4 py-2 ${
                    isActive
                      ? "text-accent font-semibold border-l-4 border-accent"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
