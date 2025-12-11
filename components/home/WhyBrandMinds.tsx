import React from 'react';
import Card from '@/components/ui/Card';

export default function WhyBrandMinds() {
  const reasons = [
    {
      title: '70% Leads Lost',
      description: 'Without instant response, most businesses lose potential customers within minutes.',
      icon: '📉'
    },
    {
      title: '24/7 Expectation',
      description: 'Modern customers expect immediate responses, regardless of time or day.',
      icon: '⏰'
    },
    {
      title: 'Manual Overload',
      description: 'Managing leads, appointments, and follow-ups manually leads to missed opportunities.',
      icon: '😓'
    },
    {
      title: 'No Automation',
      description: 'Without AI automation, scaling your business becomes exponentially harder.',
      icon: '🚫'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            Why BrandMinds Studio?
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            We solve the critical problems that cost businesses thousands in lost revenue every month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index}>
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">
                {reason.title}
              </h3>
              <p className="text-[#6B7280]">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
