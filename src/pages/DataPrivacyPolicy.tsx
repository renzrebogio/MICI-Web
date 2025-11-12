import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, Users, Lock, Eye, AlertCircle, Globe, Mail } from "lucide-react";
import Header from "../components/Header";
import { useEffect } from "react";

const DataPrivacyPolicy = () => {
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
        {/* subtle tint so background shows through but not overpower content */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/10 to-white/10" />
        
        {/* Content */}
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back Button -> goes to /privacy-policy (only button) */}
          <div className="mb-6">
            <Link
              to="/privacy-policy"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-accent transition-colors group bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Data Privacy</span>
            </Link>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12 border border-primary/10">
            {/* Header Section */}
            <div className="mb-10 pb-8 border-b border-primary/10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/MICI_Logo.png"
                  alt="MICI Logo"
                  className="h-16 w-auto"
                />
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Privacy Policy
                  </h1>
                  <p className="text-lg text-accent font-semibold text-gray-800">
                    Metropolitan Insurance Company, Inc.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none space-y-10 text-gray-800">
              {/* Introduction */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    Introduction
                  </h2>
                </div>

                <div className="bg-accent/6 p-6 rounded-lg border-l-4 border-accent">
                  <p className="leading-relaxed">
                    We value your privacy. This Privacy Policy informs you of your choices and our practices regarding any information you provide to us. The use of our services may involve the collection and use of your Information (as defined in the "The Information We Collect and How We Collect It" section below) on our services. It is important for you to understand how this happens and how you may control it, so please read this Privacy Policy carefully. By using our services, you agree that we may collect, use and share your Information in accordance with this Privacy Policy, as revised from time to time.
                  </p>
                </div>
              </section>

              {/* Scope */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    Scope of This Privacy Policy
                  </h2>
                </div>

                <p className="leading-relaxed mb-3">
                  We may from time to time revise or add specific instructions, policies and terms to this Privacy Policy. These instructions, policies and terms form part of this Privacy Policy. Where we consider that any changes to this Privacy Policy are reasonably material, we will notify you via our website at{" "}
                  <a href="https://miciph.com/" className="text-accent hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                    https://miciph.com/
                  </a>{" "}
                  through direct communication to you, or other means prior to the change becoming effective.
                </p>
                <div className="bg-accent/6 p-5 rounded-lg border-l-4 border-accent">
                  <p className="leading-relaxed">
                    By continuing to use our services after any changes to this Privacy Policy, with or without notice from us, you are agreeing to the revised Privacy Policy.
                  </p>
                </div>
              </section>

              {/* The Information We Collect */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    The Information We Collect and How We Collect It
                  </h2>
                </div>

                <p className="leading-relaxed mb-4">
                  In providing our services, we collect, store and use the following Information relating to you:
                </p>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Personal Information
                  </h3>

                  <p className="leading-relaxed mb-3">
                    "Personal Information" is any information or combination of information that relates to you, and can be used to identify you. Personal Information may include the following:
                  </p>

                  <p className="leading-relaxed mb-3">
                    Information you make available to us when you open an account or use our services, such as your:
                  </p>

                  <div className="bg-accent/10 p-4 rounded-lg mb-4">
                    <div className="grid md:grid-cols-2 gap-2 text-gray-800">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>Name of the Insured</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>Email Address</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>Home Address</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>Office Address</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>Mailing Address</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>Telephone No.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>Cellphone No.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>Nature of Business/Occupation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>TIN</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>Valid ID</span>
                      </div>
                    </div>
                  </div>

                  <p className="leading-relaxed mb-2">
                    Information which you make available to our services as you use them, including Shared Information you make available to others through our services and information you store using our services.
                  </p>

                  <p className="leading-relaxed mb-2">
                    Shared Information that others using our services make available about you, such as information contained in posts they make and communications they make to you and others using our services.
                  </p>

                  <p className="leading-relaxed">
                    Information we collect as you access our website or use our services.
                  </p>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    How We Use Your Information
                  </h2>
                </div>
                
                <div className="bg-accent/6 p-6 rounded-lg border-l-4 border-accent mb-6">
                  <p className="leading-relaxed mb-3">
                    The collected signature, full address, email, contact details and other information as listed above will be used in your transactions with <strong>Metropolitan Insurance Company Inc.</strong>
                  </p>
                  <p className="leading-relaxed">
                    By agreeing to the Terms and Conditions and this Privacy Policy, you are authorizing Metropolitan Insurance Company Inc. to use your submitted information to facilitate transactions in your behalf as deemed authorized by you and such authorization shall extend to third parties with whom we have data sharing agreements.
                  </p>
                </div>

                <p className="leading-relaxed mb-4 font-semibold text-lg">
                  We may use your Information for any of the following purposes:
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      To enable us to perform our transactions with you
                    </h3>
                    <div className="leading-relaxed space-y-2 text-gray-800">
                      <p>• To provide our services and verify your identity.</p>
                      <p>• To approve, facilitate, administer and process applications and transactions; send you statements, billings, notices and other such documents necessary for continued use of our products and services.</p>
                      <p>• To conduct studies and researches for the purpose of reviewing, developing and improving our products and services.</p>
                      <p>• To perform profile analysis, behavioral modeling and analytics to understand needs, preferences and market trends to be able to improve and recommend suitable products and services.</p>
                      <p>• For customer service, security, fraud-detection, archival and backup purposes in connection with the provision of our services.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      To communicate with you
                    </h3>
                    <div className="leading-relaxed space-y-2 text-gray-800">
                      <p>• To reach out to you regarding products and services information, including offers, promotions, discounts, rewards; and for personalizing your experience with our various touchpoints such as call center, telemarketing, email, messaging and other channels.</p>
                      <p>• To respond to your queries, requests and complaints and improve how we interact with you.</p>
                      <p>• To provide you with advertising and direct marketing that is more relevant to you.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      To improve our services
                    </h3>
                    <div className="leading-relaxed space-y-2 text-gray-800">
                      <p>• To better understand how you access and use our services, for the purposes of trying to improve our services and to respond to customer desires and preferences, including language and location customization, personalized help and instructions, or other responses to your and other customers usage of our services.</p>
                      <p>• To help us develop our new services and improve our existing services.</p>
                      <p>• To assess the effectiveness of and improve advertising and other marketing and promotional activities on or in connection with our services when your account is subscribed to an official account.</p>
                      <p>• To allow you to participate in surveys about our products and services. If you participate in a survey, we may request certain personally identifiable information from you. Participation in these surveys is voluntary and you therefore have a choice whether or not to disclose this information. We may use a third-party service provider to conduct these surveys and such third party service provider will be prohibited from using your personally identifiable information for any other purpose.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      To protect our Company's interest
                    </h3>
                    <div className="leading-relaxed space-y-2 text-gray-800">
                      <p>• To perform certain protective safeguards against improper use or abuse of our products and services including fraud prevention.</p>
                      <p>• To comply and/or perform our operational, audit, administrative, credit and risk management processes, policies and procedures, including credit check, verification and reporting.</p>
                      <p>• To review and/or comply with the terms and conditions governing our products, services, facilities and channels.</p>
                      <p>• Carry out payment collection activities through the Company's Collection Department.</p>
                      <p>• Enable the Company to pursue reasonable and legally permissible remedies in accordance with this Agreement and under applicable laws.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      To comply with applicable laws and legal processes
                    </h3>
                    <div className="leading-relaxed space-y-2 text-gray-800">
                      <p>• To comply with legal and regulatory requirements of government regulators, judicial supervisory bodies, tax authorities or courts of competent jurisdiction, as the same may be amended or supplemented from time to time.</p>
                      <p>• Comply with court order and other legal processes.</p>
                      <p>• Respond to governmental inquiries or requests from public authorities.</p>
                      <p>• Prevent fraud, violation of contracts, violations of law, and misuse of our products and services.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/80 backdrop-blur-sm p-5 rounded-lg mt-6">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Please note that for the purposes of seeking to provide our clients with a better experience, to improve our services or otherwise where you have consented, Personal Information collected through our site or service may, subject to user privacy controls (where available), be used by our other services (including in an aggregated or individualized manner).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    For example, Personal Information collected during your use of one of our services may be used to suggest particular content that can be made available to you on another service or be used to try to present more relevant advertising to you in another service. You may also from time to time ask us to migrate or export your Personal Information contained in one of our services to another of our services, where such migration option is available.
                  </p>
                </div>
              </section>

              {/* Sharing of Your Personal Information */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    Sharing of Your Personal Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Other than as permitted under this Privacy Policy or as otherwise consented to by you, we will not transfer your Personal Information to any other third parties for their processing for any purposes. We and our affiliate companies may share your Personal Information within our group of companies and with joint venture partners and third party service providers, contractors and agents (such as communication service providers who send emails or push notifications on our behalf, and mapping services providers who assists us and you with location data), in each case, for the purposes of:
                  </p>

                  <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm p-5 rounded-lg space-y-2">
                    <p className="leading-relaxed">• Providing our services to you</p>
                    <p className="leading-relaxed">• Assisting us in carrying out the purposes set out under the 'How We Use Your Information' section above</p>
                    <p className="leading-relaxed">• Carrying out our obligations and enforcing our rights under the <strong>Metropolitan Insurance Company Inc.'s</strong> Terms and Conditions or this Privacy Policy</p>
                    <p className="leading-relaxed">• Improving our services</p>
                  </div>

                  <p className="leading-relaxed">
                    These third parties may be located and may use your Personal Information, outside of your jurisdiction for these purposes. Where we or our affiliate companies do share your Personal Information with any third parties, we will use reasonable efforts to ensure that such third parties only use your Personal Information: (i) in compliance with this Privacy Policy, and (ii) subject to any other instructions we give them, including any appropriate confidentiality and security measures that we implement and consistent with the purpose for which such information was obtained.
                  </p>

                  <div className="bg-yellow-50/80 backdrop-blur-sm p-5 rounded-lg border-l-4 border-yellow-600">
                    <p className="leading-relaxed">
                      You consent to the third-party use, sharing and transfer of your Personal Information (both inside and outside of your jurisdiction) as described in this section.
                    </p>
                  </div>

                  <p className="leading-relaxed">
                    As we continue to develop our business, we or our affiliate companies may be acquired by a third party or we may re-organize our group structure. In these circumstances, it may be the case that your Information is transferred within our group and/or transferred to a third party who will continue to operate our services or similar services under either this Privacy Policy or a different privacy policy which will be notified to you. The party to which your Personal Information is transferred may be located, and may use your Information, outside of your jurisdiction.
                  </p>

                  <div className="bg-red-50/80 backdrop-blur-sm p-5 rounded-lg border-l-4 border-red-600">
                    <p className="leading-relaxed mb-3 font-semibold">
                      You agree that we or our affiliate companies may be required to retain, preserve or disclose your Personal Information:
                    </p>
                    <div className="space-y-2 leading-relaxed">
                      <p>• In order to comply with applicable laws or regulations</p>
                      <p>• In order to comply with a court order, subpoena or other legal process</p>
                      <p>• In response to a request by a government authority, law enforcement agency or similar body (whether situated in your jurisdiction or elsewhere)</p>
                      <p>• Where we believe it is reasonably necessary to comply with applicable laws or regulations</p>
                    </div>
                  </div>

                  <p className="leading-relaxed">
                    You also agree that we or our affiliate companies may need to disclose your Personal Information in order to enforce <strong>Metropolitan Insurance Company Inc.'s</strong> Terms and Conditions or this Privacy Policy, protect our rights, property or safety, or the rights, property or safety of our affiliate companies or other users of our services.
                  </p>
                </div>
              </section>

              {/* A Word About Shared Information */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    A Word About Shared Information
                  </h2>
                </div>

                <div className="bg-purple-50/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-purple-600">
                  <p className="leading-relaxed mb-3">
                    Our services enable Shared Information to be shared publicly with all users of that service and not just your contacts. Please consider carefully what you post and communicate through our services. In some instances, you may control what access the wider public has to your Shared Information via the privacy settings in some of our services.
                  </p>
                  <p className="leading-relaxed">
                    If you would like to update or amend your Personal Information you may do so by logging into your account and making the appropriate changes or by contacting our Data Protection Officers. To request removal of your Personal Information from our services, or to request the removal of an unauthorized account, please contact our Data Protection Officers. In some cases, we may not be able to update, amend or remove your Personal Information, in which case we will let you know why we are unable to do so.
                  </p>
                </div>
              </section>

              {/* Communications From Us */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    Communications From Us
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-accent shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Newsletters and other types of communications
                    </h3>
                    <p className="leading-relaxed">
                      When you use our service, we may use your Information to send you emails, newsletters or push notifications to your device. If you no longer wish to receive these communications, you can do so by following the unsubscribe instructions in the emails we send to you, opting out of notifications at the device level (if available) or contacting our Data Protection Officers via the contact information within this Policy.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-accent shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Service-related announcements
                    </h3>
                    <p className="leading-relaxed">
                      We may from time to time send you service-related announcements when we consider it necessary to do so (such as when we temporarily suspend one of our services for maintenance). You may not opt-out of these service-related announcements, which are not promotional in nature.
                    </p>
                  </div>
                </div>
              </section>

              {/* A Word About Sensitive Personal Information */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    A Word About Sensitive Personal Information
                  </h2>
                </div>

                <div className="bg-yellow-50/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-600">
                  <p className="leading-relaxed mb-3">
                    In some jurisdictions, certain Personal Information, such as information about your race or ethnic origin, religious or philosophical views or personal health, is characterized as 'sensitive' and is subject to stricter regulation than other personal information. Please note that content and information that you input to our services, such as photographs or information about your school or social activities, may reveal your sensitive Personal Information to others.
                  </p>
                  <p className="leading-relaxed mb-3">
                    We urge you to consider whether it is appropriate to communicate Personal Information of a sensitive nature in the manner you are proposing to communicate it using our services. You consent to all processing of sensitive Personal Information for the purposes and in the manner described in this Privacy Policy.
                  </p>
                  <p className="leading-relaxed font-semibold">
                    Please note that we do not use your sensitive Personal Information for the purpose of advertising to you.
                  </p>
                </div>
              </section>

              {/* Third Party Services */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    Third Party Services On Our Services
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Our service may link you to social media or other services (including websites and applications) provided by a third party. For example: you may be able to share content on, or login to, our services using services provided by third parties. The third parties who provide such services may be able to collect your Information and Personal Information (including your Log Data), and may set cookies on your computer to enable such feature to function properly, and we may (whether in advertisements or otherwise within our services) provide you with links that allow you to access third party services or websites.
                  </p>

                  <div className="bg-gradient-to-r from-red-50/80 to-orange-50/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-red-600">
                    <p className="leading-relaxed mb-3">
                      These third-party social media or other services may be hosted by the relevant third party or us. Your use of any such third party services (whether social media services or otherwise), including any Personal Information you provide to such third parties, are subject to the relevant third party's own Terms of Use and Privacy Policies and not the <strong>Metropolitan Insurance Company Inc.'s</strong> Terms and Conditions or this Privacy Policy, so please review their terms carefully.
                    </p>
                    <p className="leading-relaxed font-semibold">
                      This Privacy Policy only applies to any Information collected by us, and does not apply to any services offered by or information practices of any third parties, and we bear no liability for any third party use of any Information provided by you to them.
                    </p>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    Your Rights
                  </h2>
                </div>

                <p className="leading-relaxed mb-6">
                  You have rights enumerated in Chapter IV of Republic Act No. 10173, otherwise known as the Data Privacy Act. The provisions of this law are deemed written into this Terms and Conditions. Hence, you have the right to:
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50/80 to-blue-100/80 backdrop-blur-sm p-5 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Right to be informed and to request access</h4>
                    <p className="leading-relaxed">
                      You have the right to ask whether your personal information is being or has been processed. Consequently, you have the right to access such personal data that we process.
                    </p>
                    </div>

                  <div className="bg-gradient-to-r from-green-50/80 to-green-100/80 backdrop-blur-sm p-5 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Right to object</h4>
                    <p className="leading-relaxed">
                      You have the right to object to the processing of your personal data, including processing for direct marketing, automated processing or profiling.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50/80 to-purple-100/80 backdrop-blur-sm p-5 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Right to withhold consent</h4>
                    <p className="leading-relaxed">
                      You shall also be notified and given an opportunity to withhold consent to the processing of your personal information in case of changes in our privacy policies and other information we provide you. However, your withdrawal of consent may mean that we will not be able to continue providing our services to you or we may need to terminate our existing relationship and your contract with us, etc. as the case may be, which we will inform you of.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50/80 to-yellow-100/80 backdrop-blur-sm p-5 rounded-lg border-l-4 border-yellow-600">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Right to rectification</h4>
                    <p className="leading-relaxed">
                      You have the right to dispute the inaccuracy or error in your personal information and we shall correct it immediately and accordingly, unless the request is vexatious or otherwise unreasonable.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50/80 to-red-100/80 backdrop-blur-sm p-5 rounded-lg border-l-4 border-red-600">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Right to erasure/blocking</h4>
                    <p className="leading-relaxed">
                      You shall have the right to suspend, withdraw or order the blocking, removal or destruction of your personal data from our database in the following circumstances: (1) your personal data is no longer necessary for the purposes for which it was collected or processed; (2) you withdraw your consent or object to the processing of your personal information, and no other legal ground or overriding legitimate interests exists for us to continue processing the same; (3) you believe that we have processed your personal data unlawfully, or (4) the personal data you provided involves private information that is prejudicial to you.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50/80 to-indigo-100/80 backdrop-blur-sm p-5 rounded-lg border-l-4 border-indigo-600">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Right to lodge a complaint</h4>
                    <p className="leading-relaxed">
                      You have the right to approach us if there has been any violation of your rights as enumerated above. We shall exert our best efforts to address and settle any requests or complaints brought to our attention.
                    </p>
                  </div>
                </div>
              </section>

              {/* Age Restrictions */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    Age Restrictions
                  </h2>
                </div>

                <div className="bg-red-50/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-red-600">
                  <p className="leading-relaxed mb-3">
                    Users under the age of 18 are not allowed to use our services. The Personal Information about the age of users will be referred to the uploaded image of user's Gov't issued ID (as explained in more detail under the "The Information We Collect and How We Collect" section above).
                  </p>
                  <p className="leading-relaxed">
                    We do not knowingly collect Personal Information from any users under the age of 18. Please contact our Data Protection Officer if you believe we have any Personal Information from any users under the age of 18 and we will promptly investigate (and remove) such Personal Information.
                  </p>
                </div>
              </section>

              {/* Transfer, Storage and Security */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    Transfer, Storage and Security of Your Personal Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="leading-relaxed">
                    We operate and may continue to operate servers in a number of jurisdictions around the world, so the server on which your Personal Information is used and stored may not be in your jurisdiction. You consent to the transfer of your Personal Information (both inside and outside of your jurisdiction) for the purposes described in this Privacy Policy.
                  </p>

                  <p className="leading-relaxed">
                    We use a variety of security technologies and procedures for the purpose of preventing loss, misuse, unauthorized access or disclosure of information. In our service, we will use encryption technology (such as SSL) to protect certain sensitive Information (such as location data) provided by you to us.
                  </p>

                  <div className="bg-gradient-to-r from-green-50/80 to-teal-50/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-green-600">
                    <p className="leading-relaxed">
                      Please be aware that despite our efforts, no data security measures can guarantee 100% security. Our systems and the communications networks through which you access our services may be subject to security breaches and failures which are due to circumstances beyond our reasonable control. If you have any questions regarding the security of your Personal Information, please contact our Data Protection Officer.
                    </p>
                  </div>
                </div>
              </section>

              {/* Period of Use */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    Period of Use of Your Personal Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Subject to applicable laws and regulations (including as set out under the Sharing of Your Personal Information section above), we will only use your Personal Information for so long as is necessary to fulfill the purposes as set out under the How We Use Your Information section above.
                  </p>

                  <div className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-blue-600">
                    <p className="leading-relaxed mb-3">
                      Subject to applicable laws and regulations, you may have the right to request to receive a copy of and make any corrections to your Personal Information which we hold, and to request that we deactivate and not use any of your Personal Information that is stored by us. You may direct such request to our Data Protection Officer, or where we offer this option in our services; you may also log into your account with us and make the appropriate changes.
                    </p>
                    <p className="leading-relaxed font-semibold">
                      We will respond to all requests made to our Data Protection Officers within 60 days.
                    </p>
                  </div>

                  <p className="leading-relaxed">
                    Should your account be terminated by you or us for any reason, we will (subject to the above paragraph) take steps to ensure that your Personal Information is no longer available through our services, or otherwise used by us, within a reasonable period of time (subject to technical limitations) after such account termination. However, it is important to note that communications made by you using our services may put your Personal Information in the hands of third parties that we cannot control.
                  </p>
                </div>
              </section>

              {/* How To Contact Us */}
              <section className="bg-gradient-to-r from-accent to-tertiary p-8 rounded-lg text-white shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold m-0">How To Contact Us</h2>
                </div>
                
                <p className="leading-relaxed mb-6 text-white/90">
                  If you wish to contact us regarding this Privacy Policy or any privacy-related matters, please contact our Data Protection Officer via email at{" "}
                  <a href="mailto:dpo@miciph.com" className="text-white hover:underline font-semibold">
                    dpo@miciph.com
                  </a>{" "}
                  or via postal mail to Metropolitan Insurance Company Inc. at 3rd Floor The Athenaeum Building, 160 L.P Leviste Street, Salcedo Village, Makati City, Metro Manila, Philippines 1227 (Attention: Data Protection Officer).
                </p>
                
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <p className="font-semibold text-lg mb-3 text-white">You may also write to our Data Protection Officers at:</p>
                  <div className="leading-relaxed space-y-1 text-white/90">
                    <p className="font-semibold text-white">Metropolitan Insurance Company Inc.</p>
                    <p>3rd Floor The Athenaeum Building</p>
                    <p>160 L.P. Leviste Street, Salcedo Village</p>
                    <p>Makati City, Metro Manila, Philippines 1227</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPrivacyPolicy;