
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, to, className = '', type = 'button' }) => {
  const styles = `
    inline-block bg-[#D8BFD8] text-white font-semibold 
    py-3 px-8 rounded-full shadow-md 
    hover:bg-[#C4A9C4] hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D8BFD8]
    transition-all duration-300 ease-in-out
    transform hover:-translate-y-0.5
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
