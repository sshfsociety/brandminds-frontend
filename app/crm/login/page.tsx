'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <Image
              src="/brandmind_studio.png"
              alt="BrandMinds Studio"
              width={200}
              height={45}
              className="mx-auto mb-4"
            />
          </Link>
          <h1 className="text-2xl font-bold text-[#1E1E1E] mb-2">Welcome Back</h1>
          <p className="text-[#6B7280]">Sign in to your CRM account</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-[#0066FF] rounded" />
                <span className="ml-2 text-sm text-[#6B7280]">Remember me</span>
              </label>
              <button type="button" className="text-sm text-[#0066FF] hover:underline">
                Forgot password?
              </button>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-[#6B7280]">
              Forgot your password?{' '}
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20with%20my%20password" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[#6B7280] hover:text-[#1E1E1E] text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
