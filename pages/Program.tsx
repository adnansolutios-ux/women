import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Program: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // This page has been removed. Redirecting to our community page.
    navigate('/contact', { replace: true });
  }, [navigate]);

  return null; // Render nothing while redirecting
};

export default Program;