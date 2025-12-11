'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/brandmind_studio.png"
              alt="BrandMinds Studio"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#1E1E1E] hover:text-[#0066FF] transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-[#1E1E1E] hover:text-[#0066FF] transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="text-[#1E1E1E] hover:text-[#0066FF] transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-[#1E1E1E] hover:text-[#0066FF] transition-colors">
              Contact
            </Link>
            <Link href="/crm/login">
              <Button size="sm">Login</Button>
            </Link>
          </div>

          <button
            className="md:hidden text-[#1E1E1E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-[#1E1E1E] hover:text-[#0066FF]">
              Home
            </Link>
            <Link href="/services" className="block text-[#1E1E1E] hover:text-[#0066FF]">
              Services
            </Link>
            <Link href="/pricing" className="block text-[#1E1E1E] hover:text-[#0066FF]">
              Pricing
            </Link>
            <Link href="/contact" className="block text-[#1E1E1E] hover:text-[#0066FF]">
              Contact
            </Link>
            <Link href="/crm/login" className="block">
              <Button size="sm" className="w-full">Login</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
