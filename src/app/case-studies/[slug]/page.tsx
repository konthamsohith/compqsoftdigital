/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';
import { getCaseStudies } from '@/lib/cms';
import { notFound } from 'next/navigation';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudiesList = getCaseStudies();
  const study = caseStudiesList.find((s: any) => s.slug === slug);

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
