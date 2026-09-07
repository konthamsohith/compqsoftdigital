import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import NewsHero from '@/components/news/NewsHero';
import NewsList from '@/components/news/NewsList';

export default function NewsPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Navbar />
      <NewsHero />
      <NewsList />
      <FooterSection />
    </main>
  );
}
