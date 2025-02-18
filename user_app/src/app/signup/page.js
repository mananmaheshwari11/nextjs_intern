'use client';

import React from 'react';
import { Mail, Key } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-10">
       
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-300 px-8">
          <h1 className='text-5xl font-serif mb-3'>Signup</h1>
            <h2 className="text-2xl font-serif mb-4 text-gray-700">
              to continue in the userSphere
            </h2>
            <div className="mb-8 md:my-8">
              <hr className="border-gray-300" />
              <div className="flex gap-4 text-gray-600">
              <a href="/about" className="hover:text-gray-800">
                FAQ     
              </a>
              |
              <a href="/help" className="hover:text-gray-800">
                Help
              </a>
            </div>
            </div>
            <small>Already have an account? <a href='/signin'>Login</a> Here!</small>

          </div>

          <div className="md:w-1/2 px-8">
            <form className="space-y-8">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 py-4 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
              </div>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  placeholder="Password"
                  maxLength={12}
                  minLength={6}
                  className="w-full pl-12 py-4 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Submit
              </button>
            </form>           
          </div>
        </div>
      </div>
    </div>
  );
}
