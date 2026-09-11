import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ScrollIndicator from '@/components/ScrollIndicator';
import BlogGrid from '@/components/blog/BlogGrid';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <Navbar />
      <ScrollIndicator />

      <BlogGrid />
      
      <FooterSection />
    </main>
  );
}
