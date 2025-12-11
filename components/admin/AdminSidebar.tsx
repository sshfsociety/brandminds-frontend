'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
    { name: 'Tenants', href: '/admin/tenants', icon: '🏢' },
    { name: 'Payments', href: '/admin/payments', icon: '💳' },
    { name: 'Reports', href: '/admin/reports', icon: '📈' },
  ];

  return (
    <div className="w-64 bg-[#1E1E1E] text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <Link href="/admin/dashboard">
          <Image
            src="/brandmind_studio.png"
            alt="BrandMinds Studio"
            width={160}
            height={36}
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>
        <p className="text-sm text-gray-400 mt-2">Super Admin Panel</p>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#0066FF] text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <Link
          href="/crm/login"
          className="flex items-center px-4 py-3 rounded-lg text-red-400 hover:bg-gray-800 transition-colors"
        >
          <span className="text-xl mr-3">🚪</span>
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );
}
