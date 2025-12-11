'use client';

import React from 'react';
import CRMLayout from '@/components/crm/CRMLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function AppointmentsPage() {
  return (
    <CRMLayout title="Appointments" actions={<Button>+ New Appointment</Button>}>
      <Card>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📅</div>
          <h2 className="text-2xl font-bold text-[#1E1E1E] mb-2">Appointments Module</h2>
          <p className="text-[#6B7280]">Appointment scheduling and management coming soon</p>
        </div>
      </Card>
    </CRMLayout>
  );
}
