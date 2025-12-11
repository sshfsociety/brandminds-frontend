import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Agents & Automation Workflows',
      description: 'Deploy intelligent AI agents that work 24/7 to handle customer queries, bookings, and support across multiple channels.',
      features: [
        'WhatsApp AI Chatbots',
        'Omni-channel support (Web, WhatsApp, Social Media)',
        'Smart lead routing and qualification',
        'Automated appointment scheduling',
        'Custom workflow automation',
        'Integration with your existing tools'
      ],
      icon: '🤖',
      pricing: 'Starting from ₹4,999 setup + ₹1,500/mo'
    },
    {
      title: 'Website & Landing Page Chatbots',
      description: 'Engage website visitors instantly with AI-powered chatbots that capture leads and provide instant support.',
      features: [
        'Real-time visitor engagement',
        'Intelligent lead capture',
        'Context-aware responses',
        'Multi-language support',
        'Analytics and insights',
        'Seamless CRM integration'
      ],
      icon: '💬',
      pricing: 'Included in website packages'
    },
    {
      title: 'Social Media Management',
      description: 'Professional content creation and management to grow your brand presence across all social platforms.',
      features: [
        'Content creation (Reels, Posts, Stories)',
        'Daily posting and engagement',
        'Professional photoshoots',
        'Hashtag strategy',
        'Performance analytics',
        'Community management'
      ],
      icon: '📱',
      pricing: 'Starting from ₹3,499/mo'
    },
    {
      title: 'Website Development',
      description: 'Modern, responsive websites designed to convert visitors into customers and grow with your business.',
      features: [
        'Custom responsive design',
        'Mobile-first approach',
        'SEO optimization',
        'Fast loading speeds',
        'E-commerce capabilities',
        'Ongoing maintenance'
      ],
      icon: '🌐',
      pricing: 'Starting from ₹12,000 setup'
    },
    {
      title: 'BrandMinds CRM Platform',
      description: 'All-in-one CRM platform to manage leads, appointments, orders, and customer relationships efficiently.',
      features: [
        'Lead management & tracking',
        'Appointment scheduling',
        'Order management',
        'Timeline & conversation history',
        'Task management',
        'Analytics dashboard'
      ],
      icon: '📊',
      pricing: 'Included in growth bundles'
    },
    {
      title: 'Industry-Tailored Solutions',
      description: 'Custom AI automation solutions designed specifically for your industry with pre-built workflows.',
      industries: [
        { name: 'Hospitality', desc: 'Booking automation & guest management' },
        { name: 'Real Estate', desc: 'Property inquiries & lead nurturing' },
        { name: 'Education', desc: 'Student enrollment & support' },
        { name: 'Logistics', desc: 'Shipment tracking & updates' },
        { name: 'Healthcare', desc: 'Appointment scheduling & reminders' },
        { name: 'Salons & Spas', desc: 'Booking & customer management' }
      ],
      icon: '🏢',
      pricing: 'Custom pricing based on requirements'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-[#F8FAFC] to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                Our Services
              </h1>
              <p className="text-xl text-[#6B7280]">
                Comprehensive AI automation and digital solutions to transform your business operations and accelerate growth.
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="text-6xl">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-3">
                        {service.title}
                      </h2>
                      <p className="text-[#6B7280] mb-4">{service.description}</p>

                      {service.features && (
                        <div className="mb-4">
                          <h3 className="font-semibold text-[#1E1E1E] mb-2">Key Features:</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm text-[#6B7280]">
                                <svg className="w-5 h-5 text-[#0066FF] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.industries && (
                        <div className="mb-4">
                          <h3 className="font-semibold text-[#1E1E1E] mb-2">Industries We Serve:</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.industries.map((industry, i) => (
                              <div key={i} className="flex items-start text-sm">
                                <span className="font-medium text-[#1E1E1E] mr-2">{industry.name}:</span>
                                <span className="text-[#6B7280]">{industry.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="text-[#0066FF] font-semibold">{service.pricing}</span>
                        <Link href="/contact">
                          <Button size="sm">Get Started</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="max-w-3xl mx-auto bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-blue-100 mb-6">
                  We can create tailored automation workflows and solutions specific to your business needs.
                </p>
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="bg-white text-[#0066FF] hover:bg-gray-100">
                    Contact Us
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
