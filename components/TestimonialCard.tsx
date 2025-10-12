
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white/50 p-8 rounded-2xl shadow-sm text-center">
      <p className="text-slate-700 italic font-['Lora'] text-lg mb-4">"{testimonial.quote}"</p>
      <p className="font-semibold text-slate-600">{testimonial.author}</p>
    </div>
  );
};

export default TestimonialCard;
