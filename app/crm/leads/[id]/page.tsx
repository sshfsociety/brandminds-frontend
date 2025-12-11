'use client';

import React, { useState } from 'react';
import CRMLayout from '@/components/crm/CRMLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import Link from 'next/link';

export default function LeadDetailsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const leadData = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    company: 'Acme Corp',
    source: 'Website',
    status: 'Qualified',
    value: '₹50,000',
    assignedTo: 'Sales Team',
    createdDate: '2024-01-15',
    lastContact: '2024-01-16'
  };

  const timeline = [
    { id: 1, type: 'message', from: 'WhatsApp', content: 'Hi, I am interested in your services', time: '2024-01-16 10:30 AM' },
    { id: 2, type: 'note', content: 'Called customer, interested in Growth Bundle', time: '2024-01-16 11:00 AM' },
    { id: 3, type: 'email', content: 'Sent pricing information', time: '2024-01-16 2:00 PM' },
    { id: 4, type: 'status', content: 'Status changed from New to Qualified', time: '2024-01-16 3:00 PM' },
  ];

  const tasks = [
    { id: 1, title: 'Follow up call', dueDate: 'Today, 3:00 PM', completed: false },
    { id: 2, title: 'Send proposal', dueDate: 'Tomorrow, 10:00 AM', completed: false },
    { id: 3, title: 'Schedule demo', dueDate: 'Jan 18, 2:00 PM', completed: false },
  ];

  const notes = [
    { id: 1, content: 'Customer is looking for complete brand growth solution', author: 'Sales Team', time: '2 hours ago' },
    { id: 2, content: 'Budget approved, ready to move forward', author: 'Sales Team', time: '1 day ago' },
  ];

  return (
    <CRMLayout
      title={leadData.name}
      actions={
        <div className="flex gap-2">
          <Button variant="outline">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call
          </Button>
          <Button variant="outline">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </Button>
          <a href={`https://wa.me/${leadData.phone.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </Button>
          </a>
        </div>
      }
    >
      <div className="space-y-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'overview'
                ? 'text-[#0066FF] border-b-2 border-[#0066FF]'
                : 'text-[#6B7280] hover:text-[#1E1E1E]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'timeline'
                ? 'text-[#0066FF] border-b-2 border-[#0066FF]'
                : 'text-[#6B7280] hover:text-[#1E1E1E]'
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'notes'
                ? 'text-[#0066FF] border-b-2 border-[#0066FF]'
                : 'text-[#6B7280] hover:text-[#1E1E1E]'
            }`}
          >
            Notes
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'tasks'
                ? 'text-[#0066FF] border-b-2 border-[#0066FF]'
                : 'text-[#6B7280] hover:text-[#1E1E1E]'
            }`}
          >
            Tasks
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Lead Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-[#6B7280]">Full Name</label>
                    <p className="text-[#1E1E1E] font-medium mt-1">{leadData.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B7280]">Email</label>
                    <p className="text-[#1E1E1E] font-medium mt-1">{leadData.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B7280]">Phone</label>
                    <p className="text-[#1E1E1E] font-medium mt-1">{leadData.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B7280]">Company</label>
                    <p className="text-[#1E1E1E] font-medium mt-1">{leadData.company}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B7280]">Source</label>
                    <p className="text-[#1E1E1E] font-medium mt-1">{leadData.source}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B7280]">Status</label>
                    <div className="mt-1">
                      <Badge variant="warning">{leadData.status}</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B7280]">Lead Value</label>
                    <p className="text-[#1E1E1E] font-medium mt-1">{leadData.value}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B7280]">Assigned To</label>
                    <p className="text-[#1E1E1E] font-medium mt-1">{leadData.assignedTo}</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-bold text-[#1E1E1E] mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Created</span>
                    <span className="font-medium text-[#1E1E1E]">{leadData.createdDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Last Contact</span>
                    <span className="font-medium text-[#1E1E1E]">{leadData.lastContact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Total Interactions</span>
                    <span className="font-medium text-[#1E1E1E]">12</span>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-[#1E1E1E] mb-4">Change Status</h3>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF]">
                  <option>New</option>
                  <option>Contacted</option>
                  <option selected>Qualified</option>
                  <option>Proposal</option>
                  <option>Negotiation</option>
                  <option>Won</option>
                  <option>Lost</option>
                </select>
                <Button className="w-full mt-3" size="sm">Update Status</Button>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <Card>
            <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Conversation Timeline</h2>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0066FF] bg-opacity-10 rounded-full flex items-center justify-center">
                    {item.type === 'message' && <span className="text-xl">💬</span>}
                    {item.type === 'note' && <span className="text-xl">📝</span>}
                    {item.type === 'email' && <span className="text-xl">📧</span>}
                    {item.type === 'status' && <span className="text-xl">🔄</span>}
                  </div>
                  <div className="flex-1">
                    {item.from && <p className="text-sm font-medium text-[#0066FF] mb-1">{item.from}</p>}
                    <p className="text-[#1E1E1E]">{item.content}</p>
                    <p className="text-sm text-[#6B7280] mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {activeTab === 'notes' && (
          <div className="space-y-6">
            <Card>
              <h2 className="text-xl font-bold text-[#1E1E1E] mb-4">Add Note</h2>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                rows={4}
                placeholder="Add a note about this lead..."
              />
              <Button className="mt-3">Save Note</Button>
            </Card>

            <Card>
              <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">All Notes</h2>
              <div className="space-y-4">
                {notes.map((note) => (
                  <div key={note.id} className="border-b border-gray-100 pb-4 last:border-0">
                    <p className="text-[#1E1E1E] mb-2">{note.content}</p>
                    <p className="text-sm text-[#6B7280]">
                      by {note.author} • {note.time}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <Card>
              <h2 className="text-xl font-bold text-[#1E1E1E] mb-4">Create Task</h2>
              <div className="space-y-4">
                <Input label="Task Title" placeholder="e.g., Follow up call" />
                <Input label="Due Date" type="datetime-local" />
                <Button>Create Task</Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Upcoming Tasks</h2>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-lg">
                    <input type="checkbox" checked={task.completed} className="w-5 h-5" />
                    <div className="flex-1">
                      <p className="font-medium text-[#1E1E1E]">{task.title}</p>
                      <p className="text-sm text-[#6B7280]">{task.dueDate}</p>
                    </div>
                    <Button size="sm" variant="ghost">Edit</Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </CRMLayout>
  );
}
