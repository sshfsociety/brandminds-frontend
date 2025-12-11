import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function PricingPage() {
  const smmPlans = [
    {
      name: 'Basic',
      price: '₹3,499',
      period: '/month',
      features: [
        '5 Reels',
        '12 Posts',
        '6 Stories',
        '3 Professional Shoots',
        'Hashtag Strategy',
        'Basic Analytics'
      ]
    },
    {
      name: 'Growth',
      price: '₹5,999',
      period: '/month',
      features: [
        '10 Reels',
        '25 Posts',
        'Daily Updates',
        'Professional Content',
        'Engagement Management',
        'Detailed Analytics'
      ],
      popular: true
    },
    {
      name: 'Advance',
      price: '₹8,499',
      period: '/month',
      features: [
        '18 Reels',
        '30 Posts',
        '30 Professional Shoots',
        'Premium Content',
        'Full Community Management',
        'Advanced Analytics'
      ]
    }
  ];

  const websitePlans = [
    {
      name: 'Basic',
      setupPrice: '₹12,000',
      monthlyPrice: '₹1,500',
      features: [
        '4-5 Page Website',
        'Mobile Responsive',
        'Basic SEO',
        'Contact Forms',
        'Hosting Included',
        'Monthly Updates'
      ]
    },
    {
      name: 'Growth',
      setupPrice: '₹18,000',
      monthlyPrice: '₹2,500',
      features: [
        '6-10 Page Website',
        'Advanced Design',
        'SEO Optimization',
        'Blog Integration',
        'Performance Optimization',
        'Weekly Updates'
      ],
      popular: true
    },
    {
      name: 'Advance',
      setupPrice: '₹25,000',
      monthlyPrice: '₹4,500',
      features: [
        'Full E-commerce',
        'Payment Gateway',
        'Product Management',
        'Inventory System',
        'Advanced Analytics',
        'Priority Support'
      ]
    }
  ];

  const aiPlans = [
    {
      name: 'Basic',
      setupPrice: '₹4,999',
      monthlyPrice: '₹1,500',
      features: [
        'WhatsApp Chatbot',
        'Basic AI Responses',
        'Lead Capture',
        '500 Conversations/mo',
        'CRM Integration',
        'Email Support'
      ]
    },
    {
      name: 'Growth',
      setupPrice: '₹9,999',
      monthlyPrice: '₹5,000',
      features: [
        'Omni-channel Bot',
        'Advanced AI',
        'Multi-platform Support',
        '2000 Conversations/mo',
        'Custom Workflows',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Industry Custom',
      setupPrice: 'Custom',
      monthlyPrice: 'Custom',
      features: [
        'Tailored for Your Industry',
        'Custom Workflows',
        'Unlimited Conversations',
        'Dedicated Support',
        'Industry-specific Features',
        'White-label Option'
      ]
    }
  ];

  const bundles = [
    {
      name: 'Starter',
      monthlyPrice: '₹7,999',
      setupPrice: '₹14,999',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic Website (4-5 pages)',
        'Social Media Management (Basic)',
        'WhatsApp Bot',
        'Basic CRM Access',
        'Email Support',
        'Monthly Reports'
      ],
      recommended: false
    },
    {
      name: 'Growth',
      monthlyPrice: '₹14,999',
      setupPrice: '₹24,999',
      description: 'Most popular for growing businesses',
      features: [
        'Growth Website (6-10 pages)',
        'Social Media Management (Growth)',
        'Omni-channel Bot',
        'Full CRM Dashboard',
        'Priority Support',
        'Weekly Reports'
      ],
      recommended: true
    },
    {
      name: 'Advance',
      monthlyPrice: '₹24,999',
      setupPrice: '₹39,999',
      description: 'Complete solution for established businesses',
      features: [
        'Advanced E-commerce',
        'Social Media Management (Advance)',
        'Multi-platform Automation',
        'Sales Funnels',
        'Advanced Analytics',
        'Dedicated Account Manager'
      ],
      recommended: false
    }
  ];

  const addOns = [
    { name: 'Additional Reel', price: '₹300' },
    { name: 'Additional Photo', price: '₹150' },
    { name: 'Extra Website Page', price: '₹2,000' },
    { name: 'Additional Bot Conversations (500)', price: '₹1,000' },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-[#F8FAFC] to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-[#6B7280]">
                Choose the perfect plan for your business. All plans include dedicated support and regular updates.
              </p>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-8 text-center">Brand Growth Bundles</h2>
              <p className="text-center text-[#6B7280] mb-8 max-w-2xl mx-auto">
                All-in-one packages that combine website, social media, AI automation, and CRM platform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {bundles.map((bundle, index) => (
                  <Card key={index} className={`relative ${bundle.recommended ? 'border-2 border-[#0066FF] shadow-xl' : ''}`}>
                    {bundle.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-[#0066FF] text-white px-4 py-1 rounded-full text-sm font-medium">
                          Recommended
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">{bundle.name}</h3>
                      <div className="text-4xl font-bold text-[#0066FF] mb-1">
                        {bundle.monthlyPrice}
                        <span className="text-lg text-[#6B7280]">/mo</span>
                      </div>
                      <div className="text-sm text-[#6B7280] mb-2">Setup: {bundle.setupPrice}</div>
                      <p className="text-sm text-[#6B7280]">{bundle.description}</p>
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
                    <Link href="/contact">
                      <Button variant={bundle.recommended ? 'primary' : 'outline'} className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-8 text-center">Social Media Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {smmPlans.map((plan, index) => (
                  <Card key={index} className={plan.popular ? 'border-2 border-[#0066FF]' : ''}>
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold text-[#0066FF]">
                        {plan.price}
                        <span className="text-sm text-[#6B7280]">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-[#6B7280]">
                          <svg className="w-4 h-4 text-[#0066FF] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full" size="sm">
                        Get Started
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-8 text-center">Website Development</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {websitePlans.map((plan, index) => (
                  <Card key={index} className={plan.popular ? 'border-2 border-[#0066FF]' : ''}>
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold text-[#0066FF] mb-1">{plan.setupPrice}</div>
                      <div className="text-sm text-[#6B7280]">+ {plan.monthlyPrice}/month</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-[#6B7280]">
                          <svg className="w-4 h-4 text-[#0066FF] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full" size="sm">
                        Get Started
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-8 text-center">AI Automation & Agents</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aiPlans.map((plan, index) => (
                  <Card key={index} className={plan.popular ? 'border-2 border-[#0066FF]' : ''}>
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold text-[#0066FF] mb-1">{plan.setupPrice}</div>
                      <div className="text-sm text-[#6B7280]">+ {plan.monthlyPrice}/month</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-[#6B7280]">
                          <svg className="w-4 h-4 text-[#0066FF] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full" size="sm">
                        Get Started
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-8 text-center">Add-Ons</h2>
              <Card className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOns.map((addOn, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-[#F8FAFC] rounded-lg">
                      <span className="text-[#1E1E1E]">{addOn.name}</span>
                      <span className="font-semibold text-[#0066FF]">{addOn.price}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-blue-100 mb-6">
                Contact us today for a free consultation and custom quote for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20BrandMinds%20pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="bg-white text-[#0066FF] hover:bg-gray-100">
                    WhatsApp Us
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0066FF]">
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
