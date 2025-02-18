'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Cover from '../../../public/cover.jpg';


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-black to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">About UserSphere</h1>
        </div>
      </header>

      {/* Company Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
              <p className="text-gray-600 mb-4">
                UserSphere is a pioneering technology company dedicated to revolutionizing user experience management. We combine cutting-edge AI with human-centered design to create solutions that empower businesses to understand and serve their users better.
              </p>
              <p className="text-gray-600">
                Founded in 2023, we have quickly grown to become a trusted partner for businesses ranging from startups to enterprises, helping them build meaningful connections with their users through data-driven insights and innovative tools.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src={Cover} 
                alt="UserSphere Office" 
                className="rounded-lg shadow-xl"
                width={600} height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                At UserSphere, we envision a future where every digital interaction is intuitive, meaningful, and valuable. Our mission is to bridge the gap between businesses and their users through innovative technology solutions.
              </p>
              <p className="text-gray-600">
                We are committed to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Pioneering AI-driven user experience solutions</li>
                <li>Fostering data-driven decision making</li>
                <li>Building sustainable, scalable technology</li>
                <li>Creating positive impact through innovation</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src={Cover} 
                alt="UserSphere Vision" 
                className="rounded-lg shadow-xl"
                width={600} height={400}

              />
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Join Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Opportunities</h3>
              <p className="text-gray-600">
                We believe in nurturing talent and providing clear paths for career advancement. Our team members enjoy regular training, mentorship, and opportunities to lead innovative projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Work Culture</h3>
              <p className="text-gray-600">
                Experience a dynamic, inclusive environment where creativity thrives. We value collaboration, innovation, and work-life balance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
              <p className="text-gray-600">
                Enjoy competitive compensation, health benefits, flexible work arrangements, and opportunities for professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQItem 
              question="What makes UserSphere different from other companies?"
              answer="UserSphere stands out through our innovative AI-driven approach to user experience management, combined with our dedication to personalized customer service and continuous innovation."
            />
            <FAQItem 
              question="What kind of career opportunities are available?"
              answer="We offer roles across technology, design, product management, marketing, and customer success. We're always looking for talented individuals who share our passion for innovation and user-centric design."
            />
            <FAQItem 
              question="Do you offer internship programs?"
              answer="Yes, we offer internship programs across various departments throughout the year. These programs provide hands-on experience and mentorship opportunities."
            />
            <FAQItem 
              question="What is your company culture like?"
              answer="We foster an inclusive, collaborative environment that encourages innovation and personal growth. Our culture is built on transparency, mutual respect, and a shared commitment to excellence."
            />
            <FAQItem 
              question="What benefits do you offer employees?"
              answer="We offer competitive salaries, health insurance, flexible work arrangements, professional development opportunities, and various other perks designed to support our team's well-being and growth."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;