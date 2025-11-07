import Header from "../components/Header";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Data Privacy</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/privacy-policy/notice" className="block">
              <div className="p-6 h-full border rounded-lg hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <h2 className="text-xl font-semibold mb-4">Data Privacy Notice</h2>
                <button className="bg-accent text-white px-6 py-2 rounded-lg">View Details</button>
              </div>
            </Link>

            <Link to="/privacy-policy/notification" className="block">
              <div className="p-6 h-full border rounded-lg hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <h2 className="text-xl font-semibold mb-4">Data Privacy Notification to Clients</h2>
                <button className="bg-accent text-white px-6 py-2 rounded-lg">View Details</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;