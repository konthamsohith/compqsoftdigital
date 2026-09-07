import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ScrollIndicator from '@/components/ScrollIndicator';
import EventsHero from '@/components/events/EventsHero';
import EventsGrid from '@/components/events/EventsGrid';

export default function EventsPage() {
  return (
    <main style={{ paddingTop: '80px', backgroundColor: '#ffffff' }}>
      <Navbar />
      <ScrollIndicator />
      
      <EventsHero />
      <EventsGrid />
      
      <FooterSection />
    </main>
  );
}
