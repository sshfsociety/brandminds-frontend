import React from 'react';
import AdminSidebar from './AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  actions?: React.ReactNode;
}

export default function AdminLayout({ children, title, actions }: AdminLayoutProps) {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <AdminSidebar />
      <div className="flex-1 ml-64 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1E1E1E]">{title}</h1>
          </div>
          <div className="flex items-center gap-4">
            {actions}
            <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="w-8 h-8 bg-[#0066FF] text-white rounded-full flex items-center justify-center font-semibold">
                SA
              </div>
              <div className="text-sm">
                <p className="font-medium text-[#1E1E1E]">Super Admin</p>
                <p className="text-[#6B7280]">BrandMinds Team</p>
              </div>
            </div>
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
