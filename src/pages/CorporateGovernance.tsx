import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, FileText, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CorporateGovernance = () => {
  const [openItem, setOpenItem] = useState(null);

  const governanceItems = [
  {
    id: 1,
    title: "2022",
    content: "Access our comprehensive corporate governance documents and compliance materials for 2022.",
    documents: [
      {
        id: "2022-1",
        name: "Governance Documents 2022",
        fileName: "governance-documents-2022.pdf",
        fileType: "PDF",
        fileSize: "358 KB"
      }
    ]
  },
  {
    id: 2,
    title: "2023",
    content: "View our complete corporate governance documentation for 2023, featuring updated policies, compliance reports, and organizational frameworks.",
    documents: [
      {
        id: "2023-1",
        name: "2023 Annual Corporate Governance Report",
        fileName: "2023/2023 Annual Corporate Governance Report ( Submitted to the Insurance Commission ).pdf",
        fileType: "PDF",
        fileSize: "1,263 KB"
      },
      {
        id: "2023-2",
        name: "2023 MICI Audited Financial Statement",
        fileName: "2023/2023_MICI Audited Financial Statement_Received by BIR and SEC.pdf",
        fileType: "PDF",
        fileSize: "10,832 KB"
      },
      {
        id: "2023-3",
        name: "Metropolitan Article of Incorporation",
        fileName: "2023/METROPOLITAN ARTICLE OF INCORPORATION.pdf",
        fileType: "PDF",
        fileSize: "4,533 KB"
      },
      {
        id: "2023-4",
        name: "Metropolitan Audit and Risk Oversight",
        fileName: "2023/METROPOLITAN-AUDIT-AND-RISK-OVERSIGHT-COMMITEE-CHARTER.pdf",
        fileType: "PDF",
        fileSize: "243 KB"
      },
      {
        id: "2023-5",
        name: "Metropolitan By-Laws",
        fileName: "2023/METROPOLITAN-BY-LAWS.pdf",
        fileType: "PDF",
        fileSize: "8,551 KB"
      },
      {
        id: "2023-6",
        name: "Metropolitan Corporate Governance Commitee Charter",
        fileName: "2023/METROPOLITAN-CORPORATE-GOVERNANCE-COMMITEE-CHARTER.pdf",
        fileType: "PDF",
        fileSize: "232 KB"
      },
      {
        id: "2023-7",
        name: "Metropolitan Corporate Governance Manual",
        fileName: "2023/METROPOLITAN-CORPORATE-GOVERNANCE-MANUAL.pdf",
        fileType: "PDF",
        fileSize: "546 KB"
      },
      {
        id: "2023-8",
        name: "Metropolitan Employee Handbook",
        fileName: "2023/METROPOLITAN-EMPLOYEE-HANDBOOK-AND-CODE-OF-BUSINESS-CONDUCT-ETHICS.pdf",
        fileType: "PDF",
        fileSize: "451 KB"
      },
      {
        id: "2023-9",
        name: "MICI GIS 2023 Final Acceptance",
        fileName: "2023/MICI_GIS 2023_Final Acceptance.pdf",
        fileType: "PDF",
        fileSize: "8,625 KB"
      },
      {
        id: "2023-10",
        name: "Minutes of Meeting PCIF",
        fileName: "2023/Minutes of Meeting_PCIF.pdf",
        fileType: "PDF",
        fileSize: "150 KB"
      }
    ]
  },
   {
    id: 3,
    title: "2024",
    content: "Download our latest corporate governance materials for 2024, containing current organizational details, compliance measures, and policy updates.",
    documents: [
      {
        id: "2024-1",
        name: "2024 Annual Corporate Governance Report",
        fileName: "2024/2024 Annual Corporate Governance Report.pdf",
        fileType: "PDF",
        fileSize: "1,989 KB"
      },
      {
  id: "2024-2",
  name: "MICI 2024 SEC AFS",
  fileName: "2024/MICI 2024 SEC AFS", // Base filename without extension
  fileType: "PDF (6 parts)",
  fileSize: "111,664 KB",
  isMultiPart: true,
  parts: [
    "2024/MICI 2024 SEC AFS_part1_pages_1-13.pdf",
    "2024/MICI 2024 SEC AFS_part2_pages_14-26.pdf",
    "2024/MICI 2024 SEC AFS_part3_pages_27-39.pdf",
    "2024/MICI 2024 SEC AFS_part4_pages_40-52.pdf",
    "2024/MICI 2024 SEC AFS_part5_pages_53-65.pdf",
    "2024/MICI 2024 SEC AFS_part6_pages_66-75.pdf"
  ]
},
      {
        id: "2024-3",
        name: "MICI GIS August 4, 2025",
        fileName: "2024/MICI GIS August 4, 2025.pdf",
        fileType: "PDF",
        fileSize: "4,448 KB"
      }
    ]
  }
];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const handleDownload = async (fileName, documentTitle, isMultiPart, parts) => {
  try {
    if (isMultiPart && parts) {
      // Download all parts
      for (let i = 0; i < parts.length; i++) {
        const response = await fetch(`/documents/${parts[i]}`);
        if (!response.ok) {
          throw new Error(`Download failed for part ${i + 1}`);
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = parts[i].split('/').pop(); // Get filename from path
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        // Small delay between downloads
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } else {
      // Single file download (existing code)
      const response = await fetch(`/documents/${fileName}`);
      if (!response.ok) {
        throw new Error('Download failed');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  } catch (error) {
    console.error('Download failed:', error);
    alert('Failed to download document. Please try again.');
  }
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
                  <p className="text-slate-700 mb-6">Access our official corporate governance materials and reports by year</p>

                  <div className="space-y-4">
                    {governanceItems.map((item, index) => (
                      <motion.div 
                        key={item.id} 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }} 
                        className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
                      >
                        <button 
                          onClick={() => toggleItem(item.id)} 
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-4 flex-1">
                            <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg">
                              <FileText className="text-teal-600" size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-2xl font-bold text-slate-800">{item.title}</h4>
                            </div>
                          </div>
                          <motion.div 
                            animate={{ rotate: openItem === item.id ? 180 : 0 }} 
                            transition={{ duration: 0.3 }} 
                            className="flex-shrink-0 ml-2"
                          >
                            <ChevronDown className="text-slate-400" size={24} />
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
  <div className="px-6 pb-5 pt-2 border-t border-slate-200 bg-slate-50">
    <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.content}</p>
    
    <div className="space-y-3">
      {item.documents.map((doc) => (
        <div key={doc.id} className="bg-white rounded-lg p-4 border border-slate-200 hover:border-teal-300 transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h5 className="font-semibold text-slate-800 mb-2">{doc.name}</h5>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <FileText size={14} />
                  {doc.fileType}
                </span>
                <span>•</span>
                <span>{doc.fileSize}</span>
              </div>
            </div>
            <button 
  onClick={() => handleDownload(doc.fileName, doc.name, doc.isMultiPart, doc.parts)}
  className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-sm hover:shadow-md text-sm font-medium"
>
  <Download size={16} />
  Download {doc.isMultiPart ? "All Parts" : ""}
</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8, duration: 0.6 }} 
              className="mt-12 max-w-5xl mx-auto"
            >
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