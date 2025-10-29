import React from 'react';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="text-center pt-16 md:pt-24 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-['Lora'] font-bold text-slate-800 leading-tight">
          Find calm and healing after birth.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
          A soft space for new mothers to find gentle guidance, support, and resources for the journey ahead.
        </p>
        <div className="mt-10">
          <Button to="/contact">Join Our Community</Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-['Lora'] font-semibold text-slate-800">Your Emotional Wellbeing Matters</h2>
          <div className="w-20 h-1 bg-[#FADADD] mx-auto my-6 rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed">
            At MaternEase, we believe that the postpartum period is a sacred, transformative time that deserves to be nurtured. Our mission is to provide you with a soft place to land—a space filled with gentle resources to help you navigate the emotional complexities of new motherhood, heal from your birth experience, and rediscover your inner strength.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#FADADD]/30 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-['Lora'] font-semibold text-slate-800 text-center mb-12">Words from Mothers Like You</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;