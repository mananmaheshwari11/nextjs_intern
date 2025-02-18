'use client';

import React from 'react';
import { Mail, Key } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-6 md:p-10">
       
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-300 px-4 md:px-8 py-6 md:py-0 text-center md:text-left">
            <h1 className='text-4xl md:text-5xl font-serif mb-3'>Signup</h1>
            <h2 className="text-lg md:text-2xl font-serif mb-4 text-gray-700">
              to continue in the userSphere
            </h2>
            <div className="mb-6 md:my-8">
              <hr className="border-gray-300 mb-2" />
              <div className="flex justify-center md:justify-start gap-4 text-gray-600">
                <Link href="/about" className="hover:text-gray-800">FAQ</Link>
                <span>|</span>
                <Link href="/help" className="hover:text-gray-800">Help</Link>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 px-4 md:px-8 py-6 md:py-0">
            <form className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  placeholder="Password"
                  maxLength={12}
                  minLength={6}
                  className="w-full pl-12 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Signup
              </button>

              {/* Already have an account? - Positioned properly on mobile */}
              <div className="text-center md:text-left">
                <small className="block md:inline mt-3 text-gray-600">
                  Already have an account? <Link href='/signin' className="text-blue-600 hover:underline">Signin</Link> Here!
                </small>
              </div>
            </form>           
          </div>
        </div>
      </div>
    </div>
  );
}