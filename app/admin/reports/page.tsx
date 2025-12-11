'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Card from '@/components/ui/Card';

export default function ReportsPage() {
  return (
    <AdminLayout title="Reports">
      <Card>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📈</div>
          <h2 className="text-2xl font-bold text-[#1E1E1E] mb-2">Analytics & Reports</h2>
          <p className="text-[#6B7280]">Detailed reporting and analytics coming soon</p>
        </div>
      </Card>
    </AdminLayout>
  );
}
