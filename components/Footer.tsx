import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 mt-16">
      <div className="container mx-auto px-6 py-8 text-center text-gray-200">
        <div className="flex justify-center space-x-6 mb-4">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.name} href={link.href} aria-label={link.name} className="hover:text-[#D8BFD8] transition-colors duration-300">
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="font-['Lora'] text-lg">MaternEase – Postpartum Calm & Healing</p>
        <p className="text-sm mt-2 opacity-70">&copy; {new Date().getFullYear()} MaternEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
