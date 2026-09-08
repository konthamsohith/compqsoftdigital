import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';
import { caseStudies } from '@/components/case-studies/caseStudiesData';
import { notFound } from 'next/navigation';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main style={{ paddingTop: '80px', backgroundColor: '#ffffff' }}>
      <Navbar />
      <CaseStudyDetail study={study} />
      <FooterSection />
    </main>
  );
}
