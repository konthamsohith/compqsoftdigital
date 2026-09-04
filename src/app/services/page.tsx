import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ScrollIndicator from '@/components/ScrollIndicator';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesBanner from '@/components/services/ServicesBanner';
import ServicesSplitSection from '@/components/services/ServicesSplitSection';
import OurServicesGrid from '@/components/services/OurServicesGrid';
import RecentPosts from '@/components/services/RecentPosts';

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <Navbar />
      <ScrollIndicator />
      <ServicesHero />
      <ServicesBanner />
      
      {/* First split section */}
      <ServicesSplitSection 
        title="Unlock Business Impact with Microsoft Technology Solutions"
        text={
          <>
            Harness the power of your digital ecosystems. At CompQsoft Digital's end-to-end Microsoft services. From scalable cloud platforms and intelligent automation to data analytics, AI, and CRM—we build solutions that deliver real business results and drive innovation.
          </>
        }
        imageSrc="/image1.png"
        imageAlt="Business Impact"
        imageOnRight={true}
        showAccentLine={true}
      />
      
      <OurServicesGrid />
      
      {/* Second split section */}
      <ServicesSplitSection 
        title="Transformative Services to Accelerate Your Business Growth"
        text={
          <>
            At CompQsoft Digital, we offer a powerful suite of technology services designed to drive innovation, streamline operations, and position your business for long-term success. From cloud modernization and data intelligence to low-code development and AI-driven automation, our solutions are built to adapt, scale, and deliver measurable results.<br/><br/>Partner with us to unlock the full potential of digital transformation and accelerate your business growth.
          </>
        }
        imageSrc="/image2.png"
        imageAlt="Transformative Services"
        imageOnRight={true}
        showAccentLine={false}
      />
      
      <RecentPosts />
      <FooterSection />
    </main>
  );
}
