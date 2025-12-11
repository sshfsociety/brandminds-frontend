import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/brandmind_studio.png"
              alt="BrandMinds Studio"
              width={180}
              height={40}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              AI Automation Agency + Multi-CRM Platform
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/services" className="hover:text-white">AI Automation</Link></li>
              <li><Link href="/services" className="hover:text-white">Chatbots</Link></li>
              <li><Link href="/services" className="hover:text-white">Social Media</Link></li>
              <li><Link href="/services" className="hover:text-white">Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/crm/login" className="hover:text-white">Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: hello@brandminds.studio</li>
              <li>WhatsApp: +91 XXXXX XXXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 BrandMinds Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
