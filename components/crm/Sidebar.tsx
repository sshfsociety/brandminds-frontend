'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/crm/dashboard', icon: '📊' },
    { name: 'Leads', href: '/crm/leads', icon: '👥' },
    { name: 'Appointments', href: '/crm/appointments', icon: '📅' },
    { name: 'Tasks', href: '/crm/tasks', icon: '✓' },
    { name: 'Settings', href: '/crm/settings', icon: '⚙️' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <Link href="/crm/dashboard">
          <Image
            src="/brandmind_studio.png"
            alt="BrandMinds Studio"
            width={160}
            height={36}
            className="h-8 w-auto"
          />
        </Link>
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
                      : 'text-[#6B7280] hover:bg-[#F8FAFC]'
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

      <div className="p-4 border-t border-gray-200">
        <Link
          href="/crm/login"
          className="flex items-center px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
        >
          <span className="text-xl mr-3">🚪</span>
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );
}
