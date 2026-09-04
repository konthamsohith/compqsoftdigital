import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import MicrosoftCapabilities from '@/components/MicrosoftCapabilities';
import DigitalTransformation from '@/components/DigitalTransformation';
import RealTimeData from '@/components/RealTimeData';
import DeliveryModel from '@/components/DeliveryModel';
import StatsSection from '@/components/StatsSection';
import PartnersSection from '@/components/PartnersSection';
import FooterSection from '@/components/FooterSection';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function Home() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <Navbar />
      <ScrollIndicator />
      <Hero />
      <AboutSection />
      <MicrosoftCapabilities />
      <DigitalTransformation />
      <RealTimeData />
      <DeliveryModel />
      <StatsSection />
      <PartnersSection />
      <FooterSection />
    </main>
  );
}