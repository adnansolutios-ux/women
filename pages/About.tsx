
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-['Lora'] font-bold text-slate-800">
            A message of hope for every mother.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            MaternEase was born from a simple, powerful belief: no mother should have to navigate the emotional challenges of the postpartum journey alone. After my own struggle with postpartum anxiety, I realized there was a need for gentle, accessible, and compassionate support that honors the mother's emotional healing as much as her physical recovery.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            This brand is my love letter to mothers everywhere. It's a collection of the tools, wisdom, and gentle reminders that helped me find my way back to myself.
          </p>
        </div>
        <div>
          <img 
            src="https://picsum.photos/seed/founder/600/700" 
            alt="Calm natural scene" 
            className="rounded-2xl shadow-xl w-full h-auto"
          />
        </div>
      </div>
      <div className="text-center mt-20 bg-[#D8BFD8]/20 p-12 rounded-2xl max-w-3xl mx-auto">
        <h2 className="text-3xl font-['Lora'] font-semibold text-slate-800">Our Mission</h2>
        <div className="w-20 h-1 bg-[#FADADD] mx-auto my-6 rounded-full"></div>
        <p className="text-xl text-slate-700 italic">
          To empower new mothers with gentle tools and supportive guidance to heal emotionally, overcome anxiety, and find peace and confidence in their unique journey through motherhood.
        </p>
      </div>
    </div>
  );
};

export default About;
