import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function PricingPreview() {
  const bundles = [
    {
      name: 'Starter',
      price: '₹7,999',
      setup: '₹14,999',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic Website (4-5 pages)',
        'Social Media Management (Basic)',
        'WhatsApp Bot',
        'Basic CRM Access'
      ],
      recommended: false
    },
    {
      name: 'Growth',
      price: '₹14,999',
      setup: '₹24,999',
      description: 'Most popular for growing businesses',
      features: [
        'Growth Website (6-10 pages)',
        'Social Media Management (Growth)',
        'Omni-channel Bot',
        'Full CRM Dashboard'
      ],
      recommended: true
    },
    {
      name: 'Advance',
      price: '₹24,999',
      setup: '₹39,999',
      description: 'Complete solution for established businesses',
      features: [
        'Advanced E-commerce',
        'Social Media Management (Advance)',
        'Multi-platform Automation',
        'Sales Funnels & Analytics'
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            Brand Growth Bundles
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            All-in-one packages designed to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {bundles.map((bundle, index) => (
            <Card key={index} className={`relative ${bundle.recommended ? 'border-2 border-[#0066FF]' : ''}`}>
              {bundle.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#0066FF] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">{bundle.name}</h3>
                <div className="text-4xl font-bold text-[#0066FF] mb-1">{bundle.price}<span className="text-lg text-[#6B7280]">/mo</span></div>
                <div className="text-sm text-[#6B7280]">Setup: {bundle.setup}</div>
                <p className="text-[#6B7280] mt-2">{bundle.description}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {bundle.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-[#6B7280]">
                    <svg className="w-5 h-5 text-[#0066FF] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={bundle.recommended ? 'primary' : 'outline'} className="w-full">
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/pricing">
            <Button size="lg" variant="outline">View All Pricing</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
