
import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-2xl mx-auto text-center bg-white/80 p-10 md:p-16 rounded-2xl shadow-sm">
        <h1 className="text-3xl md:text-4xl font-['Lora'] font-bold text-slate-800">
          Join our community & find your calm.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Subscribe to receive our free ‘Calm Mom Sleep Journal’ and get gentle, supportive notes delivered to your inbox.
        </p>
        <div className="mt-8">
            <Button href="https://maternease.kit.com/628c4a90d0">
              Get Your Free Journal
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
