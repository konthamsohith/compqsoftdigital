import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import AboutHero from '@/components/about/AboutHero';
import CoreValues from '@/components/about/CoreValues';
import TeamSection from '@/components/about/TeamSection';
import WhyUs from '@/components/about/WhyUs';
import Methodology from '@/components/about/Methodology';
import AboutTabs from '@/components/about/AboutTabs';
import JoinOurTeamCTA from '@/components/about/JoinOurTeamCTA';

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <Navbar />
      
      <AboutHero />
      <CoreValues />
      <TeamSection />
      <WhyUs />
      <Methodology />
      <AboutTabs />
      <JoinOurTeamCTA />
      
      <FooterSection />
    </main>
  );
}
