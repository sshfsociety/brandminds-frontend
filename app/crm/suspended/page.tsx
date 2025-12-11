'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function SuspendedPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment receipt submitted:', selectedFile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/">
            <Image
              src="/brandmind_studio.png"
              alt="BrandMinds Studio"
              width={200}
              height={45}
              className="mx-auto mb-4"
            />
          </Link>
        </div>

        <Card>
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#1E1E1E] mb-2">Account Suspended</h1>
            <p className="text-[#6B7280]">
              Your account has been temporarily suspended due to pending payment.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Payment Required</h3>
            <div className="text-sm text-yellow-700 space-y-1">
              <p>Plan: Growth Bundle</p>
              <p>Amount Due: ₹14,999</p>
              <p>Due Date: Jan 15, 2024</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#1E1E1E] mb-4">How to Reactivate</h2>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0066FF] text-white rounded-full flex items-center justify-center font-bold mr-3">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-[#1E1E1E]">Make Payment</p>
                    <p className="text-sm text-[#6B7280]">Transfer the amount to our account or pay via UPI</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0066FF] text-white rounded-full flex items-center justify-center font-bold mr-3">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-[#1E1E1E]">Upload Receipt</p>
                    <p className="text-sm text-[#6B7280]">Upload your payment screenshot or receipt below</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0066FF] text-white rounded-full flex items-center justify-center font-bold mr-3">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-[#1E1E1E]">Wait for Verification</p>
                    <p className="text-sm text-[#6B7280]">Your account will be reactivated within 2-4 hours</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold text-[#1E1E1E] mb-4">Upload Payment Receipt</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-[#1E1E1E] font-medium mb-1">
                      Click to upload payment receipt
                    </p>
                    <p className="text-sm text-[#6B7280]">PNG, JPG up to 10MB</p>
                  </label>
                  {selectedFile && (
                    <p className="mt-3 text-sm text-[#0066FF]">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={!selectedFile}>
                  Submit Payment Receipt
                </Button>
              </form>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-[#1E1E1E] mb-3">Need Help?</h3>
              <p className="text-[#6B7280] mb-4">
                Contact our support team for immediate assistance with your payment or account reactivation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20my%20account%20is%20suspended"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Support
                  </Button>
                </a>
                <a href="mailto:support@brandminds.studio">
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Support
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[#6B7280] hover:text-[#1E1E1E] text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
