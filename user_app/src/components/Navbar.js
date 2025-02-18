import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="h-5 bg-white">
      <nav className="w-full bg-white backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand Name */}
            <div className="flex-shrink-0">
              <span className="text-xl font-roboto font-semibold text-gray-800">
                userSphere
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 font-roboto text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700">
                  <Search size={18} />
                </button>
              </div>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 px-4 py-1.5 rounded-full text-sm font-roboto hover:bg-gray-100 transition-colors">
                About
              </Link>
              <Link href="/signup" className="text-gray-600 hover:text-gray-900 px-4 py-1.5 rounded-full text-sm font-roboto hover:bg-gray-100 transition-colors">
                Sign Up
              </Link>
              <Link href="/signin" className="bg-gray-900 text-white px-6 py-1.5 rounded-full text-sm font-roboto hover:bg-gray-800 transition-colors">
                Log In
              </Link>
            </div>

            <div className="flex md:hidden items-center space-x-2">
              <Link href="/signin" className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-roboto hover:bg-gray-800 transition-colors">
                Log In
              </Link>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {showSearch && (
            <div className="md:hidden py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 font-roboto text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700">
                  <Search size={18} />
                </button>
              </div>
            </div>
          )}

          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="py-2 space-y-2">
              <a
                href="/about"
                className="block px-4 py-2 rounded-full text-base font-roboto text-gray-600 hover:text-gray-900 hover:bg-gray-100 mx-2"
              >
                About
              </a>
              <a
                href="/signup"
                className="block px-4 py-2 rounded-full text-base font-roboto text-gray-600 hover:text-gray-900 hover:bg-gray-100 mx-2"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;