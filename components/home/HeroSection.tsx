import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#F8FAFC] to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1E1E1E] mb-6">
            AI Automation Agency +{' '}
            <span className="text-[#0066FF]">Multi-CRM Platform</span>
          </h1>
          <p className="text-xl text-[#6B7280] mb-8 max-w-2xl mx-auto">
            Transform your business with intelligent AI agents, 24/7 chatbots, and a powerful CRM platform designed for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline">View Pricing</Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[#0066FF] mb-2">24/7</div>
              <p className="text-[#6B7280]">AI-Powered Support</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[#0066FF] mb-2">70%</div>
              <p className="text-[#6B7280]">Lead Conversion Boost</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[#0066FF] mb-2">100+</div>
              <p className="text-[#6B7280]">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
