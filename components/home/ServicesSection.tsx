import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ServicesSection() {
  const services = [
    {
      title: 'AI Agents & Automation',
      description: 'Intelligent AI agents that handle customer queries, bookings, and support 24/7.',
      features: ['WhatsApp Bots', 'Multi-channel Support', 'Smart Routing']
    },
    {
      title: 'Website Chatbots',
      description: 'Engage visitors instantly with AI-powered chatbots that convert leads.',
      features: ['Real-time Chat', 'Lead Capture', 'Smart Responses']
    },
    {
      title: 'Social Media Management',
      description: 'Professional content creation and management across all platforms.',
      features: ['Content Creation', 'Daily Posting', 'Engagement']
    },
    {
      title: 'Website Development',
      description: 'Modern, responsive websites designed to convert visitors into customers.',
      features: ['Custom Design', 'Mobile Responsive', 'Fast Loading']
    },
    {
      title: 'Multi-CRM Platform',
      description: 'All-in-one CRM to manage leads, appointments, and customer relationships.',
      features: ['Lead Management', 'Analytics', 'Task Tracking']
    },
    {
      title: 'Industry Solutions',
      description: 'Tailored AI automation for specific industries with custom workflows.',
      features: ['Hospitality', 'Real Estate', 'Healthcare']
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Everything you need to automate, grow, and scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-3">
                {service.title}
              </h3>
              <p className="text-[#6B7280] mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-[#6B7280]">
                    <svg className="w-4 h-4 text-[#0066FF] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
