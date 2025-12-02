import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, Lock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div 
        className="min-h-screen pt-32 pb-16 px-4 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay with very light opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/50 to-gray-100/50" />
        
        {/* Content cards with lighter backdrop blur */}
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mb-6 flex items-center gap-2 text-gray-900 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          {/* Header Section */}
          <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-8 md:p-12 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl font-bold text-accent/80 mb-3">Data Privacy Policy</h1>
              <p className="text-lg text-gray-800 max-w-3xl mx-auto">
                Metropolitan Insurance Company, Inc. is committed to protecting your personal information and respecting your privacy rights in accordance with the Data Privacy Act of 2012.
              </p>
            </div>
          </div>

          {/* Privacy Documents Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Data Privacy Notice Card */}
            <Link
              to="/privacy-policy/notice"
              onClick={() => window.scrollTo(0, 0)}
              className="block group"
            >
              <div className="bg-white/95 p-8 h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-accent">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-accent/70 mb-2 group-hover:text-accent transition-colors">
                      Data Privacy Notice
                    </h2>
                    <p className="text-sm text-gray-700 mb-3">General Information</p>
                  </div>
                </div>
                
                <p className="text-gray-800 leading-relaxed mb-6">
                  Learn about how we collect, process, and protect your personal information, including your rights as a data subject and how to exercise them.
                </p>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Information we collect</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-gray-800">How we use your data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-gray-800">Your privacy rights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-gray-800">Data protection measures</span>
                  </div>
                </div>

                <button className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  View Privacy Notice
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </Link>

            {/* Data Privacy Notification to Clients Card */}
            <Link
              to="/privacy-policy/notification"
              onClick={() => window.scrollTo(0, 0)}
              className="block group"
            >
              <div className="bg-white/95 p-8 h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-accent">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-accent/70 mb-2 group-hover:text-accent transition-colors">
                      Client Privacy Notification
                    </h2>
                    <p className="text-sm text-gray-700 mb-3">For Policyholders & Clients</p>
                  </div>
                </div>
                
                <p className="text-gray-800 leading-relaxed mb-6">
                  Specific information for our clients and policyholders regarding the collection and processing of personal data in relation to insurance services.
                </p>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-gray-800">Client data processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-gray-800">Policy information handling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-gray-800">Third-party disclosures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-gray-800">Consent and preferences</span>
                  </div>
                </div>

                <button className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  View Client Notification
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </Link>
          </div>

          {/* Additional Information Section */}
          <div className="mt-8 bg-white/70 backdrop-blur-sm shadow-lg rounded-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Commitment to Your Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Metropolitan Insurance Company, Inc., we implement appropriate technical, organizational, and physical security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-accent/5 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Storage</h3>
                <p className="text-sm text-gray-600">
                  Your data is stored securely with encryption and access controls
                </p>
              </div>

              <div className="text-center p-6 bg-accent/5 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compliance</h3>
                <p className="text-sm text-gray-600">
                  Full compliance with RA 10173 and NPC regulations
                </p>
              </div>

              <div className="text-center p-6 bg-accent/5 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
                <p className="text-sm text-gray-600">
                  Exercise your rights to access, correct, or delete your data
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 bg-gradient-to-r from-accent to-tertiary shadow-lg rounded-lg p-8 md:p-10 text-white">
            <h2 className="text-2xl font-semibold mb-4">Questions About Your Privacy?</h2>
            <p className="mb-6 opacity-90">
              If you have any questions, concerns, or requests regarding your personal data or our privacy practices, please contact our Data Protection Officer:
            </p>
            <div className="grid md:grid-cols-2 gap-4 opacity-90">
              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <a href="mailto:dpo@miciph.com" className="hover:text-white transition-colors">
                  dpo@miciph.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Phone</p>
                <a href="tel:+6328867288" className="hover:text-white transition-colors">
                  +63 (02) 8867 2888
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;