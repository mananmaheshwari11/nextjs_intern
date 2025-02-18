'use client'
import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Cover from '../../public/cover.jpg';
import { useRouter } from 'next/navigation';

function LandingPage(){
  const router=useRouter();
  
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:hidden pt-8 pb-12">
          <div className="aspect-square w-full max-w-lg mx-auto rounded-2xl overflow-hidden">
            <Image
              src={Cover}
              width={600} height={75}
              alt="UserHelp"
            />
          </div>
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 font-roboto">
              userSphere
            </h1>
            <p className="mt-4 text-xl text-gray-600 font-roboto max-w-xl mx-auto">
              A real time solution for user Management
            </p>
            <button className="mt-8 px-8 py-3 bg-gray-900 text-white rounded-full font-roboto text-lg hover:bg-gray-800 transition-colors"
            onClick={()=>router.push('/signup')}>
              Get Started
            </button>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16 md:items-center md:py-16 lg:py-24">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-800 font-roboto">
              userSphere
            </h1>
            <p className="mt-6 text-xl lg:text-2xl text-gray-600 font-roboto">
              A real time solution for user Management
            </p>
            <button className="mt-8 px-8 py-3 bg-gray-900 text-white rounded-full font-roboto text-lg hover:bg-gray-800 transition-colors"
            onClick={()=>router.push('/signup')}>
              Get Started
            </button>
          </div>

          <div className="relative aspect-square w-full max-w-lg mx-auto rounded-2xl overflow-hidden">
          <Image
              src={Cover}
              width={500} height={75}
              alt="UserHelp"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;