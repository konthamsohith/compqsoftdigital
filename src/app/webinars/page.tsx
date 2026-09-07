import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ScrollIndicator from '@/components/ScrollIndicator';
import WebinarsHero from '@/components/webinars/WebinarsHero';
import WebinarsGrid from '@/components/webinars/WebinarsGrid';

export default function WebinarsPage() {
  return (
    <main style={{ paddingTop: '80px', backgroundColor: '#ffffff' }}>
      <Navbar />
      <ScrollIndicator />
      
      <WebinarsHero />
      <WebinarsGrid />
      
      <FooterSection />
    </main>
  );
}
