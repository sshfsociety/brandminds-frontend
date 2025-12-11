'use client';

import React, { useState } from 'react';
import CRMLayout from '@/components/crm/CRMLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function SettingsPage() {
  const [businessInfo, setBusinessInfo] = useState({
    businessName: 'Acme Corporation',
    ownerName: 'John Doe',
    email: 'john@acme.com',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    address: '123 Business Street, Mumbai'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessInfo({
      ...businessInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Settings updated:', businessInfo);
  };

  return (
    <CRMLayout title="Settings">
      <div className="max-w-4xl space-y-6">
        <Card>
          <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Business Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Business Name"
              name="businessName"
              value={businessInfo.businessName}
              onChange={handleChange}
              required
            />

            <Input
              label="Owner Name"
              name="ownerName"
              value={businessInfo.ownerName}
              onChange={handleChange}
              required
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={businessInfo.email}
              onChange={handleChange}
              required
            />

            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={businessInfo.phone}
              onChange={handleChange}
              required
            />

            <Input
              label="WhatsApp Number"
              name="whatsapp"
              type="tel"
              value={businessInfo.whatsapp}
              onChange={handleChange}
              required
            />

            <div>
              <label className="block text-sm font-medium text-[#1E1E1E] mb-2">
                Business Address
              </label>
              <textarea
                name="address"
                value={businessInfo.address}
                onChange={(e) => setBusinessInfo({ ...businessInfo, address: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
              />
            </div>

            <Button type="submit" size="lg">Save Changes</Button>
          </form>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Automation Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
              <div>
                <h3 className="font-medium text-[#1E1E1E]">Auto-assign Leads</h3>
                <p className="text-sm text-[#6B7280]">Automatically assign new leads to team members</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066FF]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
              <div>
                <h3 className="font-medium text-[#1E1E1E]">Email Notifications</h3>
                <p className="text-sm text-[#6B7280]">Receive email alerts for new leads</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066FF]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
              <div>
                <h3 className="font-medium text-[#1E1E1E]">WhatsApp Auto-reply</h3>
                <p className="text-sm text-[#6B7280]">Send automated replies on WhatsApp</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066FF]"></div>
              </label>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Subscription</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6B7280]">Current Plan</p>
                <p className="text-xl font-bold text-[#1E1E1E]">Growth Bundle</p>
              </div>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              <div>
                <p className="text-sm text-[#6B7280]">Monthly Cost</p>
                <p className="text-xl font-bold text-[#1E1E1E]">₹14,999</p>
              </div>
              <div>
                <p className="text-sm text-[#6B7280]">Next Billing Date</p>
                <p className="font-medium text-[#1E1E1E]">Feb 15, 2024</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20upgrade%20my%20plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  Contact to Upgrade Plan
                </Button>
              </a>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Change Password</h2>
          <form className="space-y-4">
            <Input
              label="Current Password"
              type="password"
              placeholder="Enter current password"
            />
            <Input
              label="New Password"
              type="password"
              placeholder="Enter new password"
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm new password"
            />
            <Button size="lg">Update Password</Button>
          </form>
        </Card>
      </div>
    </CRMLayout>
  );
}
