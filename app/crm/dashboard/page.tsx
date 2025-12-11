'use client';

import React from 'react';
import CRMLayout from '@/components/crm/CRMLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Leads', value: '248', change: '+12%', icon: '👥', color: 'bg-blue-500' },
    { label: 'New This Week', value: '34', change: '+8%', icon: '📈', color: 'bg-green-500' },
    { label: 'Converted', value: '89', change: '+15%', icon: '✓', color: 'bg-purple-500' },
    { label: 'Pending Follow-up', value: '23', change: '-5%', icon: '⏰', color: 'bg-orange-500' },
  ];

  const recentLeads = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+91 98765 43210', source: 'Website', status: 'New', time: '5 mins ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+91 98765 43211', source: 'WhatsApp', status: 'Contacted', time: '1 hour ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '+91 98765 43212', source: 'Social Media', status: 'New', time: '2 hours ago' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', phone: '+91 98765 43213', source: 'Website', status: 'Qualified', time: '3 hours ago' },
  ];

  return (
    <CRMLayout
      title="Dashboard"
      actions={
        <Link href="/crm/leads">
          <Button>+ New Lead</Button>
        </Link>
      }
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} padding={false}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-lg flex items-center justify-center text-2xl`}>
                    {stat.icon}
                  </div>
                  <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#1E1E1E] mb-1">{stat.value}</h3>
                <p className="text-sm text-[#6B7280]">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#1E1E1E]">Recent Leads</h2>
              <Link href="/crm/leads">
                <Button variant="ghost" size="sm">View All →</Button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Contact</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Source</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-gray-100 hover:bg-[#F8FAFC] cursor-pointer">
                      <td className="py-3 px-4">
                        <Link href={`/crm/leads/${lead.id}`} className="font-medium text-[#1E1E1E] hover:text-[#0066FF]">
                          {lead.name}
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-sm text-[#6B7280]">
                        <div>{lead.email}</div>
                        <div>{lead.phone}</div>
                      </td>
                      <td className="py-3 px-4 text-sm text-[#6B7280]">{lead.source}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                          lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-[#6B7280]">{lead.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-xl font-bold text-[#1E1E1E] mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link href="/crm/leads">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">+</span> Add New Lead
                  </Button>
                </Link>
                <Link href="/crm/appointments">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">📅</span> Schedule Appointment
                  </Button>
                </Link>
                <Link href="/crm/tasks">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2">✓</span> Create Task
                  </Button>
                </Link>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold text-[#1E1E1E] mb-4">Upcoming Tasks</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1E1E1E]">Follow up with John Doe</p>
                    <p className="text-xs text-[#6B7280]">Today, 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1E1E1E]">Send proposal to Jane</p>
                    <p className="text-xs text-[#6B7280]">Tomorrow, 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1E1E1E]">Call Mike Johnson</p>
                    <p className="text-xs text-[#6B7280]">Tomorrow, 3:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </CRMLayout>
  );
}
