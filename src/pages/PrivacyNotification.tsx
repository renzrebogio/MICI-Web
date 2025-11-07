import { Link } from "react-router-dom";

const PrivacyNotification = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Data Privacy Notification to Clients</h1>
        
        <div className="space-y-6 text-gray-700">
          <p className="font-semibold">Dear Valued Client,</p>
          
          <p>
            Thank you for continuously trusting <strong>Metropolitan Insurance Company, Inc. (MICI)</strong> to protect you, your loved ones, and the things you value most from the unexpected. As your insurance partner, we are committed to keeping you informed on matters that may directly or indirectly affect our business relationship.
          </p>
          
          <p>
            You are receiving this letter in relation to the implementation of the <strong>Data Privacy Act of 2012 (DPA)</strong>. In compliance with the implementing guidelines set by the <strong>National Privacy Commission (NPC)</strong>, we wish to inform you that MICI will continue to process your personal information, sensitive personal information, and privileged information (collectively referred to as <strong>Personal Data</strong>) to enable us to manage and service your account in the best way possible.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Definition of Personal Data</h2>
          
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Personal Information</strong> refers to any information from which the identity of an individual is apparent or can be reasonably and directly ascertained by the person processing the information, or when put together with other information would directly and certainly identify the individual. This includes your name, address, phone number, and email address.
            </li>
            <li>
              <strong>Sensitive Personal Information</strong> refers to personal data that, under the DPA, require greater protection than other personal data. This may consist of information about your age, marital status, government-issued identification numbers, financial details, or other personal circumstances.
            </li>
            <li>
              <strong>Privileged Information</strong> refers to any and all forms of personal data which, under the Rules of Court and other pertinent laws, constitute privileged communication (for example, information shared under a professional relationship that is protected by law).
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Authorization</h2>
          
          <p>
            As a MICI policyholder and client, you authorize <strong>Metropolitan Insurance Company, Inc.</strong> to collect, use, disclose, share, and process your personal information contained in your insurance application form, claim documents, or any other related submissions for any of the following purposes in accordance with the DPA and MICI's Data Privacy Policy:
          </p>
          
          <div className="pl-6 space-y-2 my-4">
            <p>a. To process your insurance application, renewal, and related requests;</p>
            <p>b. To administer your insurance policy/ies;</p>
            <p>c. To provide customer support, servicing, and claims assistance; and</p>
            <p>d. To conduct research and data analytics to improve our products and services.</p>
          </div>
          
          <p>
            This authorization will continue to be in effect throughout the duration of your policy/ies, and until the expiration of the retention period required by applicable laws and regulations from account closure, and until proper disposal or destruction of records, unless withdrawn in writing or updated by MICI.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Commitment to Data Privacy</h2>
          
          <p>
            MICI is fully committed to maintaining your trust and confidence when handling your personal information. We protect your data by maintaining safeguards that meet or exceed legal standards, and by ensuring that our employees and representatives are trained to handle personal data responsibly and securely.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="font-semibold">
              Please take time to read MICI's <strong>Data Privacy Policy</strong> at 👉
              <Link
                to="/data-privacy-policy"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.mici.com.ph/data-privacy
              </Link>
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          
          <p>
            If you have questions, concerns, or requests regarding the handling of your personal data, please contact us at <strong>Metropolitan Insurance Company, Inc. (MICI)</strong>
          </p>
          
          <div className="mt-4">
            <p><strong>Contact Numbers:</strong></p>
            <p><strong>Email:</strong></p>
          </div>
        </div>
        
        <div className="mt-8">
          <Link to="/privacy-policy" className="text-accent hover:underline">← Back to Data Privacy</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotification;