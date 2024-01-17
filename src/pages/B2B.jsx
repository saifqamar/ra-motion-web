import React from 'react';
import Header from '../components/Header';
import B2bHero from '../components/B2bHero';
import BrandingApp from '../components/BrandingApp';
import Footer from '../components/Footer';
import B2bPortfoli from '../components/B2bPortfoli';
import StrategiesB2b from '../components/StrategiesB2b';
import BrandingClients from '../components/Brandingclients';
import LetsChat from '../components/LetsChat';
import FAQs from '../components/FAQs';

const B2B = () => {
  return (
    <div className=''>
      <div className=''>
        <Header isDark={true} />
        <B2bHero />
        <BrandingApp
            heading={"B2B branding approach"}
            para1={"Our approach to B2B branding emphasizes responsiveness and agility, ensuring your brand can pivot effectively to meet new challenges and capitalize on opportunities. Trust us to guide your business through the complexities, and together we'll forge a powerful brand identity that stands out in the market."}
            para2={""}
            isParaShow={true}
        />
        <B2bPortfoli />
        
        <BrandingApp
            heading={"Strategies for B2B brands"}
            para1={"With extensive research capabilities and deep understanding of company needs, our expertise in corporate branding sets us apart. We've helped numerous companies establish a strong brand identity, leveraging our comprehensive market research."}
            para2={"Whether your company is large or small, our tailored approach ensures your brand resonates with your target audience, maximizing your business potential."}
            isParaShow={true}
        />

        <StrategiesB2b />

        <BrandingApp
            heading={"Ramotion benefits"}
            para1={"Partnering with Ramotion unlocks a myriad of benefits for your business. Our services are designed to ensure your brand remains top of mind among your target audience. Every function of our strategy works in harmony, creating a unique personality that makes your brand unforgettable."}
            para2={"We ensure your business branding operates smoothly and effectively in the competitive market."}
            isParaShow={true}
        />

        <BrandingClients />

        <FAQs />    

        <LetsChat />

        <Footer />
      </div>
    </div>
  );
}

export default B2B;
