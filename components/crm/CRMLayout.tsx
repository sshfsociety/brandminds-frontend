import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface CRMLayoutProps {
  children: React.ReactNode;
  title: string;
  actions?: React.ReactNode;
}

export default function CRMLayout({ children, title, actions }: CRMLayoutProps) {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col overflow-hidden">
        <Topbar title={title} actions={actions} />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
