'use client';

import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function PaymentsPage() {
  const [selectedReceipt, setSelectedReceipt] = useState<number | null>(null);
  const [notes, setNotes] = useState('');

  const pendingPayments = [
    {
      id: 1,
      tenantName: 'Digital Services Ltd',
      plan: 'Starter Bundle',
      amount: '₹7,999',
      dueDate: '2024-01-15',
      submittedDate: '2024-01-16',
      receiptUrl: '/placeholder-receipt.jpg'
    },
    {
      id: 2,
      tenantName: 'Retail Solutions',
      plan: 'Growth Bundle',
      amount: '₹14,999',
      dueDate: '2024-01-18',
      submittedDate: '2024-01-18',
      receiptUrl: '/placeholder-receipt.jpg'
    },
    {
      id: 3,
      tenantName: 'Tech Startup Inc',
      plan: 'Advance Bundle',
      amount: '₹24,999',
      dueDate: '2024-01-20',
      submittedDate: '2024-01-20',
      receiptUrl: '/placeholder-receipt.jpg'
    },
  ];

  const handleApprove = (id: number) => {
    console.log('Approved payment:', id, notes);
    setSelectedReceipt(null);
    setNotes('');
  };

  const handleReject = (id: number) => {
    console.log('Rejected payment:', id, notes);
    setSelectedReceipt(null);
    setNotes('');
  };

  return (
    <AdminLayout title="Payment Verification">
      <div className="space-y-6">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#1E1E1E]">Pending Payment Verifications</h2>
              <p className="text-sm text-[#6B7280] mt-1">{pendingPayments.length} receipts awaiting review</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {pendingPayments.map((payment) => (
              <Card key={payment.id} className="relative">
                <div className="mb-4">
                  <Badge variant="warning">Pending Review</Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm text-[#6B7280]">Tenant</p>
                    <p className="font-semibold text-[#1E1E1E]">{payment.tenantName}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm text-[#6B7280]">Plan</p>
                      <p className="font-medium text-[#1E1E1E]">{payment.plan}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7280]">Amount</p>
                      <p className="font-medium text-[#1E1E1E]">{payment.amount}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm text-[#6B7280]">Due Date</p>
                      <p className="text-sm text-[#1E1E1E]">{payment.dueDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7280]">Submitted</p>
                      <p className="text-sm text-[#1E1E1E]">{payment.submittedDate}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-[#6B7280] mb-2">Payment Receipt</p>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-500">Receipt Image</p>
                    </div>
                  </div>
                </div>

                {selectedReceipt === payment.id && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#6B7280] mb-2">
                      Notes (optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-sm"
                      placeholder="Add any notes about this payment..."
                    />
                  </div>
                )}

                <div className="flex gap-2">
                  {selectedReceipt === payment.id ? (
                    <>
                      <Button
                        size="sm"
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={() => handleApprove(payment.id)}
                      >
                        Confirm Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setSelectedReceipt(null)}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        size="sm"
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={() => setSelectedReceipt(payment.id)}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-red-600 border-red-600 hover:bg-red-50"
                        onClick={() => handleReject(payment.id)}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Recent Payment History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Tenant</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Verified By</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-[#1E1E1E]">Acme Corporation</td>
                  <td className="py-3 px-4 text-sm text-[#6B7280]">₹14,999</td>
                  <td className="py-3 px-4 text-sm text-[#6B7280]">2024-01-14</td>
                  <td className="py-3 px-4"><Badge variant="success">Approved</Badge></td>
                  <td className="py-3 px-4 text-sm text-[#6B7280]">Admin User</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-[#1E1E1E]">Tech Solutions Inc</td>
                  <td className="py-3 px-4 text-sm text-[#6B7280]">₹24,999</td>
                  <td className="py-3 px-4 text-sm text-[#6B7280]">2024-01-13</td>
                  <td className="py-3 px-4"><Badge variant="success">Approved</Badge></td>
                  <td className="py-3 px-4 text-sm text-[#6B7280]">Admin User</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-[#1E1E1E]">Growth Marketing Co</td>
                  <td className="py-3 px-4 text-sm text-[#6B7280]">₹14,999</td>
                  <td className="py-3 px-4 text-sm text-[#6B7280]">2024-01-12</td>
                  <td className="py-3 px-4"><Badge variant="success">Approved</Badge></td>
                  <td className="py-3 px-4 text-sm text-[#6B7280]">Admin User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
