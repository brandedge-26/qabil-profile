import Navbar from './components/Navbar';
import FloatingDownloadButton from './components/FloatingDownloadButton';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ValuesSection from './components/ValuesSection';
import ProductsSection from './components/ProductsSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ClientsSection from './components/ClientsSection';
import DealerNetworkSection from './components/DealerNetworkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <FloatingDownloadButton />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ProductsSection />
      <CapabilitiesSection />
      <ClientsSection />
      <DealerNetworkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
