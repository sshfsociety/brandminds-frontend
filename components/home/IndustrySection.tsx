import React from 'react';
import Card from '@/components/ui/Card';

export default function IndustrySection() {
  const industries = [
    { name: 'Hospitality', icon: '🏨', description: 'Booking automation & guest management' },
    { name: 'Real Estate', icon: '🏘️', description: 'Property inquiries & lead nurturing' },
    { name: 'Education', icon: '🎓', description: 'Student enrollment & support' },
    { name: 'Logistics', icon: '🚚', description: 'Shipment tracking & customer updates' },
    { name: 'Healthcare', icon: '⚕️', description: 'Appointment scheduling & reminders' },
    { name: 'Salons & Spas', icon: '💆', description: 'Booking & customer management' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            Industry-Tailored Solutions
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Custom AI automation workflows designed specifically for your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">
                {industry.name}
              </h3>
              <p className="text-[#6B7280]">{industry.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
