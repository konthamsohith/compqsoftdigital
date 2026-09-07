import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ScrollIndicator from '@/components/ScrollIndicator';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';

export default function CaseStudiesPage() {
  return (
    <main style={{ paddingTop: '80px', backgroundColor: '#ffffff' }}>
      <Navbar />
      <ScrollIndicator />

      <CaseStudiesGrid />
      
      <FooterSection />
    </main>
  );
}
