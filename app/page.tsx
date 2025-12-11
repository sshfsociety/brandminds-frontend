import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import WhyBrandMinds from '@/components/home/WhyBrandMinds';
import ServicesSection from '@/components/home/ServicesSection';
import IndustrySection from '@/components/home/IndustrySection';
import PricingPreview from '@/components/home/PricingPreview';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyBrandMinds />
        <ServicesSection />
        <IndustrySection />
        <PricingPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
