'use client';

import React from 'react';
import CRMLayout from '@/components/crm/CRMLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function TasksPage() {
  return (
    <CRMLayout title="Tasks" actions={<Button>+ New Task</Button>}>
      <Card>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-[#1E1E1E] mb-2">Tasks Module</h2>
          <p className="text-[#6B7280]">Task management and tracking coming soon</p>
        </div>
      </Card>
    </CRMLayout>
  );
}
