'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Tenants', value: '48', change: '+5', icon: '🏢', color: 'bg-blue-500' },
    { label: 'Active Tenants', value: '42', change: '+3', icon: '✓', color: 'bg-green-500' },
    { label: 'Suspended', value: '6', change: '+2', icon: '⚠️', color: 'bg-red-500' },
    { label: 'Monthly Revenue', value: '₹6.2L', change: '+12%', icon: '💰', color: 'bg-purple-500' },
  ];

  const tenants = [
    { id: 1, name: 'Acme Corporation', plan: 'Growth Bundle', status: 'Active', billing: '₹14,999/mo', nextBilling: '2024-02-15', leads: 248 },
    { id: 2, name: 'Tech Solutions Inc', plan: 'Advance Bundle', status: 'Active', billing: '₹24,999/mo', nextBilling: '2024-02-18', leads: 412 },
    { id: 3, name: 'Digital Services Ltd', plan: 'Starter Bundle', status: 'Suspended', billing: '₹7,999/mo', nextBilling: 'Overdue', leads: 89 },
    { id: 4, name: 'Growth Marketing Co', plan: 'Growth Bundle', status: 'Active', billing: '₹14,999/mo', nextBilling: '2024-02-20', leads: 324 },
    { id: 5, name: 'Enterprise Solutions', plan: 'Advance Bundle', status: 'Active', billing: '₹24,999/mo', nextBilling: '2024-02-22', leads: 567 },
  ];

  const getStatusVariant = (status: string): 'success' | 'error' => {
    return status === 'Active' ? 'success' : 'error';
  };

  return (
    <AdminLayout title="Super Admin Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} padding={false}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-lg flex items-center justify-center text-2xl`}>
                    {stat.icon}
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#1E1E1E] mb-1">{stat.value}</h3>
                <p className="text-sm text-[#6B7280]">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#1E1E1E]">All Tenants</h2>
            <div className="flex gap-2">
              <Link href="/admin/payments">
                <Button variant="outline" size="sm">View Payments</Button>
              </Link>
              <Button size="sm">+ Add Tenant</Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Business Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Plan</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Billing</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Next Billing</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Leads</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map((tenant) => (
                  <tr key={tenant.id} className="border-b border-gray-100 hover:bg-[#F8FAFC]">
                    <td className="py-4 px-4">
                      <Link href={`/admin/tenants/${tenant.id}`} className="font-medium text-[#1E1E1E] hover:text-[#0066FF]">
                        {tenant.name}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{tenant.plan}</td>
                    <td className="py-4 px-4">
                      <Badge variant={getStatusVariant(tenant.status)}>
                        {tenant.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-sm font-medium text-[#1E1E1E]">{tenant.billing}</td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{tenant.nextBilling}</td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{tenant.leads}</td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <Link href={`/admin/tenants/${tenant.id}`}>
                          <Button size="sm" variant="ghost">View</Button>
                        </Link>
                        {tenant.status === 'Active' ? (
                          <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                            Suspend
                          </Button>
                        ) : (
                          <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700">
                            Activate
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
