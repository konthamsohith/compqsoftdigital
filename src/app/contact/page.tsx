import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ContactHero from '@/components/contact/ContactHero';
import ContactCard from '@/components/contact/ContactCard';

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '80px' }}>
      <Navbar />
      <ContactHero />
      <ContactCard />
      <FooterSection />
    </main>
  );
}
