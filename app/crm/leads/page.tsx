'use client';

import React, { useState } from 'react';
import CRMLayout from '@/components/crm/CRMLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export default function LeadsPage() {
  const [filterStatus, setFilterStatus] = useState('all');

  const leads = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+91 98765 43210', source: 'Website', status: 'New', value: '₹50,000', date: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+91 98765 43211', source: 'WhatsApp', status: 'Contacted', value: '₹75,000', date: '2024-01-14' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '+91 98765 43212', source: 'Social Media', status: 'Qualified', value: '₹1,00,000', date: '2024-01-14' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', phone: '+91 98765 43213', source: 'Referral', status: 'Proposal', value: '₹60,000', date: '2024-01-13' },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', phone: '+91 98765 43214', source: 'Website', status: 'Negotiation', value: '₹85,000', date: '2024-01-13' },
    { id: 6, name: 'Lisa Davis', email: 'lisa@example.com', phone: '+91 98765 43215', source: 'WhatsApp', status: 'Won', value: '₹95,000', date: '2024-01-12' },
    { id: 7, name: 'David Miller', email: 'david@example.com', phone: '+91 98765 43216', source: 'Website', status: 'Lost', value: '₹40,000', date: '2024-01-12' },
    { id: 8, name: 'Emma Wilson', email: 'emma@example.com', phone: '+91 98765 43217', source: 'Social Media', status: 'New', value: '₹55,000', date: '2024-01-11' },
  ];

  const getStatusVariant = (status: string): 'success' | 'warning' | 'error' | 'info' | 'default' => {
    switch (status) {
      case 'Won': return 'success';
      case 'Lost': return 'error';
      case 'New': return 'info';
      case 'Contacted':
      case 'Qualified':
      case 'Proposal':
      case 'Negotiation': return 'warning';
      default: return 'default';
    }
  };

  const filteredLeads = filterStatus === 'all'
    ? leads
    : leads.filter(lead => lead.status.toLowerCase() === filterStatus);

  return (
    <CRMLayout
      title="Leads"
      actions={
        <Button>+ New Lead</Button>
      }
    >
      <div className="space-y-6">
        <Card>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filterStatus === 'all'
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
              }`}
            >
              All Leads ({leads.length})
            </button>
            <button
              onClick={() => setFilterStatus('new')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filterStatus === 'new'
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
              }`}
            >
              New ({leads.filter(l => l.status === 'New').length})
            </button>
            <button
              onClick={() => setFilterStatus('qualified')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filterStatus === 'qualified'
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
              }`}
            >
              Qualified ({leads.filter(l => l.status === 'Qualified').length})
            </button>
            <button
              onClick={() => setFilterStatus('won')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filterStatus === 'won'
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
              }`}
            >
              Won ({leads.filter(l => l.status === 'Won').length})
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Contact</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Source</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Value</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-gray-100 hover:bg-[#F8FAFC]">
                    <td className="py-4 px-4">
                      <Link href={`/crm/leads/${lead.id}`} className="font-medium text-[#1E1E1E] hover:text-[#0066FF]">
                        {lead.name}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">
                      <div>{lead.email}</div>
                      <div>{lead.phone}</div>
                    </td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{lead.source}</td>
                    <td className="py-4 px-4 text-sm font-medium text-[#1E1E1E]">{lead.value}</td>
                    <td className="py-4 px-4">
                      <Badge variant={getStatusVariant(lead.status)}>
                        {lead.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{lead.date}</td>
                    <td className="py-4 px-4">
                      <Link href={`/crm/leads/${lead.id}`}>
                        <Button size="sm" variant="ghost">View</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </CRMLayout>
  );
}
