import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#5B446A', // Deep plum for active state
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
  };

  return (
    <header className="bg-transparent py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 backdrop-blur-sm bg-[#FAF8F5]/80">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-['Lora'] font-semibold text-[#5B446A]">
          MaternEase
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-[#867086] hover:text-[#5B446A] transition-colors duration-300"
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
            <svg className="w-6 h-6 text-[#5B446A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col items-center space-y-4 bg-white/90 rounded-lg p-4 shadow-sm">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#867086] hover:text-[#5B446A] transition-colors duration-300 py-2"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;