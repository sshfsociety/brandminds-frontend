'use client';

import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';

export default function TenantDetailPage() {
  const [isEditing, setIsEditing] = useState(false);

  const tenantData = {
    id: 1,
    businessName: 'Acme Corporation',
    ownerName: 'John Doe',
    email: 'john@acme.com',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    plan: 'Growth Bundle',
    status: 'Active',
    billing: '₹14,999',
    setupFee: '₹24,999',
    joinDate: '2023-12-01',
    nextBilling: '2024-02-15',
    totalLeads: 248,
    activeLeads: 89,
    convertedLeads: 45,
    modulesEnabled: {
      leads: true,
      appointments: true,
      orders: false,
      tasks: true,
      analytics: true
    }
  };

  return (
    <AdminLayout
      title={tenantData.businessName}
      actions={
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Reset Password</Button>
          {tenantData.status === 'Active' ? (
            <Button variant="outline" size="sm" className="text-red-600 border-red-600">
              Suspend Account
            </Button>
          ) : (
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Activate Account
            </Button>
          )}
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#1E1E1E]">Business Information</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-[#6B7280]">Business Name</label>
                {isEditing ? (
                  <Input value={tenantData.businessName} className="mt-1" />
                ) : (
                  <p className="text-[#1E1E1E] font-medium mt-1">{tenantData.businessName}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#6B7280]">Owner Name</label>
                {isEditing ? (
                  <Input value={tenantData.ownerName} className="mt-1" />
                ) : (
                  <p className="text-[#1E1E1E] font-medium mt-1">{tenantData.ownerName}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#6B7280]">Email</label>
                {isEditing ? (
                  <Input value={tenantData.email} type="email" className="mt-1" />
                ) : (
                  <p className="text-[#1E1E1E] font-medium mt-1">{tenantData.email}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#6B7280]">Phone</label>
                {isEditing ? (
                  <Input value={tenantData.phone} type="tel" className="mt-1" />
                ) : (
                  <p className="text-[#1E1E1E] font-medium mt-1">{tenantData.phone}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#6B7280]">WhatsApp</label>
                {isEditing ? (
                  <Input value={tenantData.whatsapp} type="tel" className="mt-1" />
                ) : (
                  <p className="text-[#1E1E1E] font-medium mt-1">{tenantData.whatsapp}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#6B7280]">Status</label>
                <div className="mt-1">
                  <Badge variant={tenantData.status === 'Active' ? 'success' : 'error'}>
                    {tenantData.status}
                  </Badge>
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button>Save Changes</Button>
              </div>
            )}
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Enabled Modules</h2>
            <div className="space-y-3">
              {Object.entries(tenantData.modulesEnabled).map(([module, enabled]) => (
                <div key={module} className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
                  <div>
                    <h3 className="font-medium text-[#1E1E1E] capitalize">{module}</h3>
                    <p className="text-sm text-[#6B7280]">
                      {enabled ? 'Currently enabled' : 'Currently disabled'}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={enabled} className="sr-only peer" readOnly />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066FF]"></div>
                  </label>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">CRM Statistics</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                <div className="text-3xl font-bold text-[#0066FF] mb-1">{tenantData.totalLeads}</div>
                <div className="text-sm text-[#6B7280]">Total Leads</div>
              </div>
              <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                <div className="text-3xl font-bold text-[#0066FF] mb-1">{tenantData.activeLeads}</div>
                <div className="text-sm text-[#6B7280]">Active Leads</div>
              </div>
              <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                <div className="text-3xl font-bold text-[#0066FF] mb-1">{tenantData.convertedLeads}</div>
                <div className="text-sm text-[#6B7280]">Converted</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-bold text-[#1E1E1E] mb-4">Plan Details</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#6B7280]">Current Plan</p>
                <p className="text-lg font-semibold text-[#1E1E1E]">{tenantData.plan}</p>
              </div>
              <div>
                <p className="text-sm text-[#6B7280]">Monthly Billing</p>
                <p className="text-lg font-semibold text-[#1E1E1E]">{tenantData.billing}/mo</p>
              </div>
              <div>
                <p className="text-sm text-[#6B7280]">Setup Fee Paid</p>
                <p className="text-lg font-semibold text-[#1E1E1E]">{tenantData.setupFee}</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button variant="outline" className="w-full">
                Change Plan
              </Button>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#1E1E1E] mb-4">Account Dates</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#6B7280]">Joined Date</p>
                <p className="font-medium text-[#1E1E1E]">{tenantData.joinDate}</p>
              </div>
              <div>
                <p className="text-sm text-[#6B7280]">Next Billing</p>
                <p className="font-medium text-[#1E1E1E]">{tenantData.nextBilling}</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#1E1E1E] mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                Reset Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Payment History
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
