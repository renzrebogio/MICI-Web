import Header from "../components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ paddingTop: '80px' }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mb-6 flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group bg-white px-4 py-2 rounded-lg shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
            <div className="border-b border-gray-200 pb-6 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
              <p className="text-gray-600">Last Updated: November 2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  This website is owned and operated by <strong>Metropolitan Insurance Company, Inc. (MICI)</strong>. By accessing or using this site, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  If you do not agree, you are prohibited from accessing or using this website and should exit immediately.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  MICI may amend or update these Terms and Conditions from time to time without prior notice. Any such revisions shall take effect upon posting on this website.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Permitted Use</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  This website serves as an online platform to promote and provide information about MICI's non-life insurance products and services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All materials are provided for <strong>personal and non-commercial</strong> use only.
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Our Products and Services</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  MICI reserves the right to determine which products or services are made available online and may modify or discontinue any offering at its sole discretion, without prior notice.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  All products and services presented on this website are governed by their own respective terms and conditions and by the applicable rules and regulations of the <strong>Insurance Commission</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For inquiries about products not displayed on this site, you may contact MICI through our official channels.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  All content found on this website—including, but not limited to, text, graphics, logos, images, and layout design—is the exclusive property of <strong>Metropolitan Insurance Company, Inc.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  No part of this site or its contents may be copied, reproduced, distributed, transmitted, displayed, or exploited for any commercial purpose without MICI's prior written consent.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Any unauthorized use constitutes a violation of MICI's proprietary rights.
                </p>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  This website and all materials herein are provided on an <strong>"as is"</strong> basis.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  While MICI endeavors to keep information accurate and up-to-date, it makes no warranties or representations regarding the completeness, accuracy, or reliability of any content.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Your use of the website and reliance on its information are entirely at your own risk.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The information provided is for general reference only and should not be the sole basis for making decisions regarding MICI's products or services. We recommend that you consult our representatives to ensure the suitability of any product for your specific needs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This site does not provide personal, financial, or legal advice.
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  MICI shall not be held liable for:
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-3 text-gray-700">
                  <li>Typographical errors or inaccuracies in website content;</li>
                  <li>Any third-party products or services advertised or linked through this site;</li>
                  <li>Viruses, malware, or harmful code transmitted by third parties.</li>
                </ol>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall MICI, its officers, employees, or agents be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of this website.
                </p>
              </section>

              {/* Section 7 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modifications and Service Interruptions</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  MICI reserves the right to change, update, suspend, or discontinue any part of the website at any time, without prior notice.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  MICI shall not be responsible for any losses, damages, or inconveniences resulting from such interruptions or modifications.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Prohibited Activities</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You agree <strong>not</strong> to:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Use this website for unlawful or prohibited purposes;</li>
                  <li>Infringe on MICI's or any third party's intellectual property rights;</li>
                  <li>Send spam, unsolicited advertisements, or other disruptive content;</li>
                  <li>Copy, reproduce, or publicly display any website material without authorization;</li>
                  <li>Create unauthorized links or frames to this website;</li>
                  <li>Submit false, misleading, or malicious reports or feedback;</li>
                  <li>Engage in any act that could impair or compromise the website's security, network, or functionality;</li>
                  <li>Transmit content containing viruses, spyware, or other harmful programs;</li>
                  <li>Post or share materials that are defamatory, obscene, hateful, or discriminatory.</li>
                </ol>
              </section>

              {/* Section 9 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. User Representations</h2>
                <p className="text-gray-700 leading-relaxed">
                  By using this website, you confirm that you have the legal capacity to do so, that your use is lawful, and that you will comply with these Terms and Conditions and all applicable laws.
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Use of Customer Assistance Portal</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  MICI provides an online <strong>Customer Assistance Portal</strong> for clients to raise concerns or inquiries about our products and services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  By using this portal, you agree that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Your submissions will not violate any intellectual property or privacy rights;</li>
                  <li>Your feedback will not contain libelous, offensive, or threatening remarks;</li>
                  <li>You will not transmit malware or use false identities; and</li>
                  <li>You will not submit fabricated, false, or misleading information.</li>
                </ul>
              </section>

              {/* Section 11 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  MICI respects your privacy. By using this website, you agree to the collection and processing of your information as described in our <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>, which forms part of these Terms and Conditions.
                </p>
              </section>

              {/* Section 12 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnity</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold <strong>Metropolitan Insurance Company, Inc.</strong>, its directors, officers, employees, and agents harmless from any loss, damage, or claim arising from your use of this website or violation of these Terms and Conditions.
                </p>
              </section>

              {/* Section 13 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Venue</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the <strong>Republic of the Philippines</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Any dispute arising from the use of this website shall be filed exclusively with the <strong>proper courts of Makati City, Philippines</strong>.
                </p>
              </section>

              {/* Section 14 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Miscellaneous</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  If any provision of these Terms and Conditions is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  MICI's failure to enforce any part of these Terms shall not constitute a waiver of its rights.
                </p>
              </section>

              {/* Contact Section */}
              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-2">
                  For inquiries or concerns regarding these Terms and Conditions, you may contact us at:
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:inquiry@miciph.com" className="text-blue-600 hover:text-blue-800">inquiry@miciph.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> <a href="tel:+6328867288" className="text-blue-600 hover:text-blue-800">+63 (02) 8867 2888</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;