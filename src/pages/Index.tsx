import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import IndustriesSecured from '@/components/IndustriesSecured';
import PartnerWithUs from '@/components/PartnerWithUs';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <PartnerWithUs />
      <IndustriesSecured />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
