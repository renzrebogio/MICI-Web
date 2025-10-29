import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, FileText, Download, Calendar } from "lucide-react";
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
      lastUpdated: "October 15, 2025"
    },
    {
      id: 2,
      title: "Articles of Incorporation",
      year: "Updated 2025",
      content: "View our official Articles of Incorporation that establish the foundation and legal framework of our organization.",
      fileType: "PDF",
      fileSize: "1.2 MB",
      lastUpdated: "January 10, 2025"
    },
    {
      id: 3,
      title: "General Information Sheet",
      year: "2025",
      content: "Download our General Information Sheet containing key corporate details, officers, and organizational structure.",
      fileType: "PDF",
      fileSize: "850 KB",
      lastUpdated: "September 30, 2025"
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
        {/* Hero Section with Background Image Effect */}
        <div className="relative h-96 overflow-hidden pt-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-slate-900/70 backdrop-blur-sm" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                CORPORATE GOVERNANCE
              </h1>
              <div className="h-1 w-32 bg-purple-400" />
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {governanceItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <FileText className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                          {item.year}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar size={12} />
                          Updated: {item.lastUpdated}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openItem === item.id ? (
                      <ChevronUp className="text-purple-600" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={24} />
                    )}
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openItem === item.id ? "auto" : 0,
                    opacity: openItem === item.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-2 text-gray-600 border-t border-gray-100">
                    <p className="leading-relaxed mb-4">{item.content}</p>
                    
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center gap-6">
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">File Type</p>
                          <p className="text-sm font-medium text-gray-700">{item.fileType}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">File Size</p>
                          <p className="text-sm font-medium text-gray-700">{item.fileSize}</p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                      <Download size={18} />
                      Download Document
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Commitment to Transparency
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are committed to maintaining the highest standards of corporate governance. 
              Our governance framework ensures accountability, fairness, and transparency in our 
              relationship with all stakeholders. We continuously review and update our practices 
              to align with industry best practices and regulatory requirements.
            </p>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CorporateGovernance;