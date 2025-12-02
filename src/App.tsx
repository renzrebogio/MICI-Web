import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CorporateGovernance from "./pages/CorporateGovernance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyNotice from "./pages/PrivacyNotice";
import PrivacyNotification from "./pages/PrivacyNotification";
import DataPrivacyPolicy from "./pages/DataPrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Career from "./pages/Career";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/corporate-governance"
            element={<CorporateGovernance />}
          />
          <Route path="/Career" element={<Career />} />

          {/* Privacy Policy pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy/notice" element={<PrivacyNotice />} />
          <Route
            path="/privacy-policy/notification"
            element={<PrivacyNotification />}
          />

          {/* Data Privacy Policy page */}
          <Route path="/data-privacy-policy" element={<DataPrivacyPolicy />} />

          {/* Terms of Service */}
          <Route path="/terms-of-service" element={<TermsOfService />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
