import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ScrollIndicator from '@/components/ScrollIndicator';
import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustriesBanner from '@/components/industries/IndustriesBanner';
import IndustrySplitSection from '@/components/industries/IndustrySplitSection';
import MeetProfessionals from '@/components/industries/MeetProfessionals';
import IndustriesContact from '@/components/industries/IndustriesContact';
import styles from './page.module.css';

export default function IndustriesPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <Navbar />
      <ScrollIndicator />
      <IndustriesHero />
      <IndustriesBanner />
      
      <div className={styles.sectionsContainer}>
        <IndustrySplitSection 
          id="healthcare"
          title="Healthcare"
          paragraphs={[
            "At CompQsoft Digital, we understand the complex demands of the healthcare sector. We provide tailored solutions to modernize legacy systems, enhance patient care, and ensure regulatory compliance.",
            "Our data-driven strategies enable healthcare organizations to leverage AI for predictive diagnostics, optimize operational workflows, and deliver a more personalized patient experience.",
            "Partner with us to build scalable, secure health tech solutions that adapt to an ever-evolving medical landscape."
          ]}
          imageSrc="/pexels-mart-production-7089020.jpg"
          imageAlt="Healthcare"
          imageOnRight={false}
        />
        
        <IndustrySplitSection
          id="financial-services"
          title="Financial Services"
          paragraphs={[
            "The financial sector requires agility, security, and precision. We empower financial institutions to navigate digital transformation confidently.",
            "From integrating advanced analytics for risk management to developing secure, cloud-native applications for seamless banking experiences, our solutions are built to perform.",
            "Let's drive the future of finance with intelligent automation and robust, compliant technology infrastructure."
          ]}
          imageSrc="https://static.wixstatic.com/media/11062b_c1d1cbd7d4c44b57b3919153f31d2e96~mv2.jpeg/v1/fill/w_1512,h_1129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_c1d1cbd7d4c44b57b3919153f31d2e96~mv2.jpeg"
          imageAlt="Financial Services"
          imageOnRight={true}
        />

        <IndustrySplitSection
          id="oil-and-gas"
          title="Oil and Gas"
          subtitle="Powering the Digital Future of Oil & Gas"
          paragraphs={[
            "We partner with oil and gas companies to drive next-gen digital transformation that fuels innovation, reduces operational costs, and enhances customer satisfaction.",
            "From automating and managing field assets to improving production efficiency, safety, and quality, our solutions are designed to optimize every stage of the energy value chain.",
            "At CompQsoft, we help our clients adopt cutting-edge technologies to drive their digital transformation. We leverage advanced analytics, IoT, AI, and automation for real-time monitoring, predictive maintenance, and smarter, data-driven decision-making. Our solutions are designed to keep you ahead of the curve."
          ]}
          imageSrc="https://static.wixstatic.com/media/11062b_13af7f4b96594deba427d302c4886853~mv2.jpeg/v1/fill/w_1512,h_1166,al_r,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_13af7f4b96594deba427d302c4886853~mv2.jpeg"
          imageAlt="Oil and Gas Platform"
          imageOnRight={false}
        />

        <IndustrySplitSection
          id="retail"
          title="Retail"
          subtitle="Transforming Retail for the AI-First Era"
          paragraphs={[
            "We empower retailers to accelerate their digital transformation journey in today's AI-first world. Our cutting-edge solutions help you reimagine the shopping experience— delivering seamless, personalized, and channel-less commerce that boosts customer loyalty and lifetime value.",
            "We enable intelligent growth by helping retailers optimize operations, control costs, and maximize profitability. With AI and automation at the core, we strengthen your supply chain resilience and enhance operational efficiency."
          ]}
          imageSrc="https://static.wixstatic.com/media/fbc95c_f2966cf34d794ce5b2212a6e6ab55cb9~mv2.jpg/v1/fill/w_1512,h_1273,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fbc95c_f2966cf34d794ce5b2212a6e6ab55cb9~mv2.jpg"
          imageAlt="Retail Shopping"
          imageOnRight={true}
        />

        <IndustrySplitSection
          id="cpg-distribution"
          title="Consumer Packaged Goods & Distribution"
          subtitle="Driving Consumer-First Innovation in the Digital Age"
          paragraphs={[
            "We help consumer goods companies accelerate innovation and bring products to market faster with robust, next-gen digital solutions. We execute and deliver ROI-based omnichannel commercial planning.",
            "Our technology-driven approach lets you personalize customer experiences, build resilient and responsible supply chains, and streamline production and delivery operations.",
            "With smart forecasting, intelligent inventory management, and optimized distribution, we empower brands to respond to market demands quickly and precisely while strengthening every link in the supply chain."
          ]}
          imageSrc="https://static.wixstatic.com/media/fbc95c_1888f92665cc47429f7b9e34b98c4204~mv2.jpg/v1/fill/w_1512,h_1368,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/fbc95c_1888f92665cc47429f7b9e34b98c4204~mv2.jpg"
          imageAlt="Consumer Packaged Goods & Distribution"
          imageOnRight={false}
        />

        <IndustrySplitSection
          id="manufacturing"
          title="Manufacturing"
          subtitle="Powering the Future of Manufacturing with Intelligent Digital Solutions"
          paragraphs={[
            "We help manufacturing companies unlock new levels of operational efficiency and innovation. By eliminating data silos and ensuring enterprise-grade security, we enable seamless integration across operations—from the factory floor to the boardroom.",
            "Leveraging the power of Generative AI, automation, and advanced analytics, we drive sustainable growth, optimize production, and deliver measurable business outcomes."
          ]}
          imageSrc="https://static.wixstatic.com/media/fbc95c_1a26bf75e970496b940fdc619890a58e~mv2.jpg/v1/fill/w_1512,h_1096,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fbc95c_1a26bf75e970496b940fdc619890a58e~mv2.jpg"
          imageAlt="Manufacturing Robotic Arm"
          imageOnRight={true}
        />

        <IndustrySplitSection
          id="logistics-and-transportation"
          title="Logistics and Transportation"
          subtitle="Navigate the future of Transportation and Logistics with our IT services"
          paragraphs={[
            "Accelerate growth and stay ahead of disruption with tailored IT services designed specifically for the logistics and transportation industry. Whether you're a global logistics provider, CEP service, postal agency, or fleet operator, our custom solutions help streamline operations and boost profitability.",
            "From advanced cargo management systems that unlock new revenue streams to specialized digital platforms that enhance port and marine operations, we deliver the tools you need for greater efficiency, resilience, and most importantly, real-time visibility across your value chain, putting you in control and fully informed about your operations."
          ]}
          imageSrc="https://static.wixstatic.com/media/fbc95c_0310411457484aaf8c9eaaf4ff1bfc63~mv2.jpg/v1/fill/w_1512,h_1316,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/fbc95c_0310411457484aaf8c9eaaf4ff1bfc63~mv2.jpg"
          imageAlt="Logistics and Transportation"
          imageOnRight={false}
        />
      </div>
      
      <MeetProfessionals />
      <IndustriesContact />
      <FooterSection />
    </main>
  );
}
