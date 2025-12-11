'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.newPassword.length < 8) {
      setErrors({ ...errors, newPassword: 'Password must be at least 8 characters' });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
      return;
    }

    console.log('Password change attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
          <h1 className="text-2xl font-bold text-[#1E1E1E] mb-2">Change Your Password</h1>
          <p className="text-[#6B7280]">You must change your password before continuing</p>
        </div>

        <Card>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-yellow-800">
                This is your first login. Please set a new secure password.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Current Password"
              name="currentPassword"
              type="password"
              placeholder="Enter temporary password"
              value={formData.currentPassword}
              onChange={handleChange}
              required
            />

            <Input
              label="New Password"
              name="newPassword"
              type="password"
              placeholder="At least 8 characters"
              value={formData.newPassword}
              onChange={handleChange}
              error={errors.newPassword}
              required
            />

            <Input
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />

            <div className="bg-[#F8FAFC] rounded-lg p-4 text-sm text-[#6B7280]">
              <p className="font-medium text-[#1E1E1E] mb-2">Password requirements:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>At least 8 characters long</li>
                <li>Include uppercase and lowercase letters</li>
                <li>Include at least one number</li>
              </ul>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Change Password
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
