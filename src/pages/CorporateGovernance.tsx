import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Download,
  Calendar,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CorporateGovernance = () => {
  const [openItem, setOpenItem] = useState(null);

  const governanceItems = [
    {
      id: 1,
      title: "Annual Corporate Governance Report",
      year: "2025",
      content:
        "Access our comprehensive annual corporate governance report detailing our policies, procedures, and compliance measures.",
      fileType: "PDF",
      fileSize: "2.8 MB",
      lastUpdated: "October 15, 2025",
    },
    {
      id: 2,
      title: "Articles of Incorporation",
      year: "Updated 2025",
      content:
        "View our official Articles of Incorporation that establish the foundation and legal framework of our organization.",
      fileType: "PDF",
      fileSize: "1.2 MB",
      lastUpdated: "January 10, 2025",
    },
    {
      id: 3,
      title: "General Information Sheet",
      year: "2025",
      content:
        "Download our General Information Sheet containing key corporate details, officers, and organizational structure.",
      fileType: "PDF",
      fileSize: "850 KB",
      lastUpdated: "September 30, 2025",
    },
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const [itemsOpen, setItemsOpen] = useState(true);

  // page-scoped override to ensure header shows the exact teal background
  useEffect(() => {
    const headerEl = document.querySelector("header");
    if (!headerEl) return;
    const prevBg = headerEl.style.backgroundColor;
    const prevBackdrop = headerEl.style.backdropFilter;
    headerEl.style.backgroundColor = "#6ee7df";
    headerEl.style.backdropFilter = "blur(4px)";
    return () => {
      headerEl.style.backgroundColor = prevBg || "";
      headerEl.style.backdropFilter = prevBackdrop || "";
    };
  }, []);

  return (
    <div className="min-h-screen corporate-gov-page">
      {/* page-scoped style to ensure header background is exact and immediate */}
      <style>{`.corporate-gov-page header{background-color: #6ee7df !important; backdrop-filter: blur(4px) !important;}`}</style>
      {/* page-specific top strip so logo/header is visible over hero image */}
      <div
        className="w-full backdrop-blur-sm absolute top-0 left-0 z-20"
        style={{ backgroundColor: "#6ee7df" }}
      >
        <div className="container mx-auto px-4 py-3">
          {/* keep header inside so logo sits on top of a light teal background */}
          <Header />
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 pt-16">
        {/* Hero Section with Background Image Effect - flow with content */}
        <div className="relative overflow-visible pt-20 pb-12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=90')",
            }}
          >
            {/* lighter teal overlay so header/logo remain visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-teal-500/12 to-transparent backdrop-blur-sm" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-8">
            <div className="w-full">
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className=""
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    CORPORATE GOVERNANCE
                  </h1>
                  <div className="h-1 w-28 bg-teal-400 mb-6" />
                </motion.div>

                {/* toggle for dropdown of transparency + items */}
                <div>
                  <button
                    onClick={() => setItemsOpen((s) => !s)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-white rounded-md hover:bg-white/20 transition"
                  >
                    {itemsOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                    <span className="text-sm">View documents</span>
                  </button>
                </div>
              </div>

              {/* Animated dropdown container */}
              <AnimatePresence>
                {itemsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-col gap-6 items-stretch overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className=""
                    >
                      {/* Transparency overlay stacked above items (single column) */}
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="bg-white/95 dark:bg-black/50 backdrop-blur-sm p-6 rounded-lg shadow-lg w-full"
                      >
                        <h2 className="text-2xl font-semibold text-teal-900 dark:text-white mb-3">
                          Our Commitment to Transparency
                        </h2>
                        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                          We are committed to maintaining the highest standards
                          of corporate governance. Our governance framework
                          ensures accountability, fairness, and transparency in
                          our relationship with all stakeholders. We
                          continuously review and update our practices to align
                          with industry best practices and regulatory
                          requirements.
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* Governance items placed below the transparency card (single column) */}
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.6 }}
                      className="space-y-6 pr-0 flex flex-col items-center"
                    >
                      <div className="w-full max-w-2xl space-y-6">
                        {governanceItems.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.18 + index * 0.04,
                              duration: 0.45,
                            }}
                            className="bg-white/95 dark:bg-black/60 rounded-lg p-6 shadow-md hover:shadow-glow transition-shadow duration-300 group max-w-[640px] mx-auto"
                          >
                            <button
                              onClick={() => toggleItem(item.id)}
                              className="w-full flex items-start gap-4 text-left rounded-md"
                            >
                              <div className="flex-shrink-0 bg-teal-50 p-3 rounded-lg transition-colors duration-200 group-hover:bg-teal-100">
                                <FileText className="text-teal-600" size={20} />
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                                    {item.title}
                                  </h3>
                                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-medium">
                                    {item.year}
                                  </span>
                                </div>

                                <p className="text-sm text-gray-600 dark:text-gray-200 mt-2">
                                  {item.content}
                                </p>
                              </div>
                            </button>

                            {/* small actions row inside card */}
                            <div className="mt-3 flex items-center justify-between">
                              <div className="text-xs text-gray-500 flex items-center gap-3">
                                <Calendar size={14} />
                                Updated: {item.lastUpdated}
                              </div>

                              <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200 shadow-sm">
                                <Download size={14} />
                                Download
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Content removed: items and duplicate transparency are now in the hero */}
      </div>

      <Footer />
    </div>
  );
};

export default CorporateGovernance;
