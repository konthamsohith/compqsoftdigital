import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ScrollIndicator from '@/components/ScrollIndicator';
import CareersHero from '@/components/careers/CareersHero';
import CareersSplitSection from '@/components/careers/CareersSplitSection';
import WhyCompQsoft from '@/components/careers/WhyCompQsoft';
import CareersCTA from '@/components/careers/CareersCTA';
import QuoteSection from '@/components/careers/QuoteSection';
import ContactSplitSection from '@/components/careers/ContactSplitSection';

export default function CareersPage() {
  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <Navbar />
      <ScrollIndicator />
      
      <CareersHero />
      
      <CareersSplitSection 
        title={<>We&apos;re based in Houston&apos;s<br />Digital innovation hub</>}
        paragraphs={[
          "At CompQsoft, we're driven by purpose—creating value, delivering innovation, and making a real difference. Our team thrives on transforming ideas into impactful solutions that shape the future. If you're passionate about Microsoft technologies and want to work where your skills spark meaningful change, there's no better place to be. Join us to deliver transformative outcomes, grow with purpose, and be part of something extraordinary."
        ]}
        videoSrc="/6804114-uhd_4096_2160_25fps.mp4"
        imageOnRight={true}
        showLeftBorder={true}
      />

      <CareersSplitSection 
        title={<>Changing the future of Digital<br />Technology means thinking differently.</>}
        paragraphs={[
          "Our values are more than words on a page – they are the guiding principles shaping our culture. We promise a friendly, inclusive, and above all, supportive work environment where you can learn, grow, and be challenged daily."
        ]}
        bullets={[
          "Excellence Delivered",
          "Proactive Problem Solving",
          "Culture of Dignity and Respect",
          "Customer-Centered Success"
        ]}
        videoSrc="/6804109-uhd_4096_2160_25fps_1.mp4"
        imageOnRight={false}
      />

      <WhyCompQsoft />
      
      <CareersCTA />
      
      <QuoteSection />
      
      <ContactSplitSection />
      
      <FooterSection />
    </main>
  );
}
