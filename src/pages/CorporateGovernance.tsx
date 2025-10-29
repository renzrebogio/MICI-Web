import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, FileText, Download, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CorporateGovernance = () => {
  const [openItem, setOpenItem] = useState(null);

  const governanceItems = [
    {
      id: 1,
      title: "Annual Corporate Governance Report",
      year: "2025",
      content: "Access our comprehensive annual corporate governance report detailing our policies, procedures, and compliance measures.",
      fileType: "PDF",
      fileSize: "2.8 MB",
      lastUpdated: "October 15, 2025",
    },
    {
      id: 2,
      title: "Articles of Incorporation",
      year: "Updated 2025",
      content: "View our official Articles of Incorporation that establish the foundation and legal framework of our organization.",
      fileType: "PDF",
      fileSize: "1.2 MB",
      lastUpdated: "January 10, 2025",
    },
    {
      id: 3,
      title: "General Information Sheet",
      year: "2025",
      content: "Download our General Information Sheet containing key corporate details, officers, and organizational structure.",
      fileType: "PDF",
      fileSize: "850 KB",
      lastUpdated: "September 30, 2025",
    },
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

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
      <style>{`.corporate-gov-page header{background-color: #6ee7df !important; backdrop-filter: blur(4px) !important;}`}</style>
      <div className="w-full backdrop-blur-sm absolute top-0 left-0 z-20" style={{ backgroundColor: "#6ee7df" }}>
        <div className="container mx-auto px-4 py-3">
          <Header />
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="relative overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=90')" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-teal-500/12 to-transparent backdrop-blur-sm" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight" style={{ 
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.5), 0 0 30px rgba(109, 231, 223, 0.6)',
                color: '#ffffff'
              }}>
                CORPORATE GOVERNANCE
              </h1>
              <div className="h-1.5 w-40 bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 rounded-full shadow-lg shadow-teal-400/50" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Commitment to Transparency</h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    We are committed to maintaining the highest standards of corporate governance. Our governance framework ensures accountability, fairness, and transparency in our relationship with all stakeholders. We continuously review and update our practices to align with industry best practices and regulatory requirements.
                  </p>
                  
                  <div className="border-t border-slate-200 pt-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">Governance Principles</h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Board independence and diversity in leadership</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Ethical conduct and compliance with regulations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Risk management and internal controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Stakeholder engagement and communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Regular audits and performance evaluations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Governance Documents</h3>
                  <p className="text-slate-700 mb-6">Access our official corporate governance materials and reports</p>

                  <div className="space-y-4">
                    {governanceItems.map((item, index) => (
                  <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }} className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                    <button onClick={() => toggleItem(item.id)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg">
                          <FileText className="text-teal-600" size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-slate-800 mb-1">{item.title}</h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-medium">{item.year}</span>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <Calendar size={12} />
                              Updated: {item.lastUpdated}
                            </span>
                          </div>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: openItem === item.id ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 ml-2">
                        <ChevronDown className="text-slate-400" size={24} />
                      </motion.div>
                    </button>

                    <motion.div initial={false} animate={{ height: openItem === item.id ? "auto" : 0, opacity: openItem === item.id ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-5 pt-2 border-t border-slate-200 bg-slate-50">
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.content}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                          <span className="flex items-center gap-1">
                            <FileText size={14} />
                            {item.fileType}
                          </span>
                          <span>•</span>
                          <span>{item.fileSize}</span>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-md hover:shadow-lg font-medium">
                          <Download size={18} />
                          Download Document
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="mt-12 max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 md:p-8 border border-teal-200 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">Need More Information?</h3>
                <p className="text-slate-700 leading-relaxed mb-5">
                  For inquiries regarding our corporate governance practices or to request additional documentation, please contact our Corporate Secretary.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CorporateGovernance;