
import React from 'react';
import Button from '../components/Button';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-[#A584A5] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const Program: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-['Lora'] font-bold text-slate-800">
          The MaternEase Healing Program
        </h1>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          A step-by-step digital program thoughtfully designed to help you overcome postpartum anxiety, restore your emotional balance, and find deep, joyful connection in motherhood again.
        </p>
      </div>

      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h2 className="text-3xl font-['Lora'] text-slate-800">What You'll Receive:</h2>
            <ul className="space-y-4 text-slate-600 text-lg">
                <li className="flex items-start"><CheckIcon /> <span>Guided journals to process your feelings.</span></li>
                <li className="flex items-start"><CheckIcon /> <span>Mindfulness exercises to calm anxiety.</span></li>
                <li className="flex items-start"><CheckIcon /> <span>Printable affirmation cards for daily support.</span></li>
                <li className="flex items-start"><CheckIcon /> <span>A gentle roadmap to emotional recovery.</span></li>
                <li className="flex items-start"><CheckIcon /> <span>Tools to reconnect with yourself & your baby.</span></li>
            </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/worksheet1/400/500" alt="Worksheet preview" className="rounded-xl shadow-lg transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300"/>
            <img src="https://picsum.photos/seed/journal1/400/500" alt="Journal preview" className="rounded-xl shadow-lg transform rotate-[3deg] hover:rotate-0 transition-transform duration-300 mt-8"/>
        </div>
      </div>

      <div className="text-center mt-20 bg-white/60 p-12 rounded-2xl max-w-3xl mx-auto shadow-sm">
        <h3 className="text-2xl font-['Lora'] font-bold text-slate-800">Ready to begin your healing journey?</h3>
        <p className="mt-4 text-slate-600">Get lifetime access to all materials and start feeling more like yourself today.</p>
        <div className="mt-8">
            <Button>Get Instant Access</Button>
        </div>
      </div>
    </div>
  );
};

export default Program;
