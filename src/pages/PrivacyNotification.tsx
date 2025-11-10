import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, Users } from "lucide-react";
import Header from "../components/Header";
import { useEffect } from "react";

const PrivacyNotification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div
        className="min-h-screen pt-32 pb-16 px-4 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* subtle tint overlay (lighter so background shows through) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-accent/10 to-white/20" />

        {/* Content */}
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back Button (only button, no blue hover animation) */}
          <Link
            to="/privacy-policy"
            className="mb-6 inline-flex items-center gap-2 text-gray-900 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 transition-transform" />
            <span className="font-medium">Back to Data Privacy</span>
          </Link>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12 border border-accent/10">
            {/* Header Section */}
            <div className="mb-10 pb-8 border-b border-accent/10">
              <div className="flex items-center gap-4 mb-6">
                <img src="/MICI_Logo.png" alt="MICI Logo" className="h-16 w-auto" />
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-accent/80 mb-2">
                    Data Privacy Notification to Clients
                  </h1>
                  <p className="text-lg text-accent font-semibold text-gray-800">
                    Metropolitan Insurance Company, Inc.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none space-y-8 text-gray-800">
              {/* Greeting */}
              <div className="p-6 rounded-lg border-l-4 border-accent bg-accent/6">
                <p className="text-gray-900 font-semibold text-lg mb-3">Dear Valued Client,</p>
                <p className="leading-relaxed">
                  Thank you for continuously trusting <strong>Metropolitan Insurance Company, Inc. (MICI)</strong> to protect you, your loved ones, and the things you value most from the unexpected. As your insurance partner, we are committed to keeping you informed on matters that may directly or indirectly affect our business relationship.
                </p>
              </div>

              {/* Introduction */}
              <section>
                <p className="leading-relaxed mb-4">
                  You are receiving this letter in relation to the implementation of the <strong>Data Privacy Act of 2012 (DPA)</strong>. In compliance with the implementing guidelines set by the <strong>National Privacy Commission (NPC)</strong>, we wish to inform you that MICI will continue to process your personal information, sensitive personal information, and privileged information (collectively referred to as <strong>Personal Data</strong>) to enable us to manage and service your account in the best way possible.
                </p>
              </section>

              {/* Definition of Personal Data */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-accent/80 m-0">Definition of Personal Data</h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/95 p-6 rounded-lg border-l-4 border-accent shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Information</h3>
                    <p className="leading-relaxed">
                      Refers to any information from which the identity of an individual is apparent or can be reasonably and directly ascertained by the person processing the information, or when put together with other information would directly and certainly identify the individual. This includes your name, address, phone number, and email address.
                    </p>
                  </div>

                  <div className="bg-white/95 p-6 rounded-lg border-l-4 border-accent shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sensitive Personal Information</h3>
                    <p className="leading-relaxed">
                      Refers to personal data that, under the DPA, require greater protection than other personal data. This may consist of information about your age, marital status, government-issued identification numbers, financial details, or other personal circumstances.
                    </p>
                  </div>

                  <div className="bg-white/95 p-6 rounded-lg border-l-4 border-accent shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Privileged Information</h3>
                    <p className="leading-relaxed">
                      Refers to any and all forms of personal data which, under the Rules of Court and other pertinent laws, constitute privileged communication (for example, information shared under a professional relationship that is protected by law).
                    </p>
                  </div>
                </div>
              </section>

              {/* Authorization */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-accent/80 m-0">Authorization</h2>
                </div>

                <p className="leading-relaxed mb-4">
                  As a MICI policyholder and client, you authorize <strong>Metropolitan Insurance Company, Inc.</strong> to collect, use, disclose, share, and process your personal information contained in your insurance application form, claim documents, or any other related submissions for any of the following purposes in accordance with the DPA and MICI's Data Privacy Policy:
                </p>

                <div className="bg-accent/6 p-6 rounded-lg space-y-3 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold">a</div>
                    <p className="leading-relaxed pt-1">To process your insurance application, renewal, and related requests;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold">b</div>
                    <p className="leading-relaxed pt-1">To administer your insurance policy/ies;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold">c</div>
                    <p className="leading-relaxed pt-1">To provide customer support, servicing, and claims assistance; and</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold">d</div>
                    <p className="leading-relaxed pt-1">To conduct research and data analytics to improve our products and services.</p>
                  </div>
                </div>

                <div className="bg-yellow-50/80 p-5 rounded-lg border-l-4 border-yellow-600 mt-6">
                  <p className="leading-relaxed">
                    This authorization will continue to be in effect throughout the duration of your policy/ies, and until the expiration of the retention period required by applicable laws and regulations from account closure, and until proper disposal or destruction of records, unless withdrawn in writing or updated by MICI.
                  </p>
                </div>
              </section>

              {/* Commitment to Data Privacy */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-accent/80 m-0">Commitment to Data Privacy</h2>
                </div>

                <div className="bg-accent/6 p-6 rounded-lg border-l-4 border-accent">
                  <p className="leading-relaxed">
                    MICI is fully committed to maintaining your trust and confidence when handling your personal information. We protect your data by maintaining safeguards that meet or exceed legal standards, and by ensuring that our employees and representatives are trained to handle personal data responsibly and securely.
                  </p>
                </div>
              </section>

              {/* Read Full Policy */}
              <section>
                <div className="bg-gradient-to-r from-accent to-tertiary p-8 rounded-lg text-white shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-3">Please take time to read MICI's Complete Data Privacy Policy</p>
                      <Link
                        to="/data-privacy-policy"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-2 bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
                      >
                        <FileText className="w-5 h-5" />
                        View Full Privacy Policy
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Us */}
              <section className="bg-gradient-to-r from-accent to-tertiary p-8 rounded-lg text-white shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="leading-relaxed mb-6 opacity-95">
                  If you have questions, concerns, or requests regarding the handling of your personal data, please contact us at:
                </p>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm space-y-3">
                  <p className="font-semibold text-lg text-white">Metropolitan Insurance Company, Inc. (MICI)</p>
                  <div className="space-y-2 text-white/90">
                    <p>
                      <strong>Address:</strong> 3rd Floor The Athenaeum Building, 160 L.P. Leviste Street, Salcedo Village, Makati City, Metro Manila, Philippines 1227
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:dpo@miciph.com" className="underline">
                        dpo@miciph.com
                      </a>
                    </p>
                    <p>
                      <strong>Contact Numbers:</strong> +63 (02) 8867 2888
                    </p>
                  </div>
                </div>
              </section>

              {/* Closing */}
              <div className="bg-white/95 p-6 rounded-lg border-l-4 border-accent">
                <p className="leading-relaxed font-medium text-gray-800">
                  Thank you for your continued trust in Metropolitan Insurance Company, Inc. We remain committed to protecting your privacy while providing you with excellent insurance services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyNotification;