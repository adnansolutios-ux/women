
import React, { useState } from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Submitted email:', email);
      setSubmitted(true);
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-2xl mx-auto text-center bg-white/80 p-10 md:p-16 rounded-2xl shadow-sm">
        {!submitted ? (
          <>
            <h1 className="text-3xl md:text-4xl font-['Lora'] font-bold text-slate-800">
              Join our community & find your calm.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Subscribe to receive our free ‘Calm Mom Sleep Journal’ and get gentle, supportive notes delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow w-full px-5 py-3 rounded-full border-2 border-slate-200 focus:border-[#D8BFD8] focus:ring-0 transition-colors"
              />
              <Button type="submit" className="flex-shrink-0">
                Get Your Free Journal
              </Button>
            </form>
          </>
        ) : (
          <div>
            <h2 className="text-3xl font-['Lora'] font-bold text-[#A584A5]">Thank you!</h2>
            <p className="mt-4 text-lg text-slate-600">
              Your ‘Calm Mom Sleep Journal’ is on its way to your inbox. We're so happy to have you with us.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
