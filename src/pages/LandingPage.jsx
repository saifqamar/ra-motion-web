import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeBlock from '../components/HomeBlock';
import SMBs from '../components/SMBs';
import LetsChat from '../components/LetsChat';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
      <div>
        <Header isDark={false} />
        <Hero />
        <HomeBlock />
        <SMBs />
        <LetsChat />
        <Footer />
      </div>
  );
}

export default LandingPage;
