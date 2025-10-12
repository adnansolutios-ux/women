
import React from 'react';
import type { NavLink, Testimonial, BlogPost, SocialLink } from './types';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const PinterestIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.173 2.522 7.75 6.01 9.288.11-.79-.02-1.74.2-2.52.22-.79.11-1.3.11-1.3s-.29-.58-.29-1.44c0-1.35.79-2.37 1.77-2.37.83 0 1.23.62 1.23 1.36 0 .83-.53 2.07-.8 3.22-.22.95.47 1.73 1.4 1.73 1.68 0 2.97-1.76 2.97-4.3 0-2.25-1.6-3.87-3.95-3.87-2.7 0-4.24 2.02-4.24 4.02 0 .76.28 1.58.64 2.05.08.1.09.18.06.29-.06.28-.2.83-.25 1.03-.08.31-.35.42-.64.3-1.07-.4-1.74-1.6-1.74-2.8 0-2.35 2.1-4.73 5.4-4.73 2.87 0 4.96 2.04 4.96 4.45 0 2.88-1.82 5.12-4.34 5.12-1.4 0-2.72-.74-3.15-1.61l-.66 2.5c-.32 1.25-1.22 2.8-1.78 3.65A10.02 10.02 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path></svg>
);


export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Articles', path: '/blog' },
  { name: 'The Program', path: '/program' },
  { name: 'About', path: '/about' },
  { name: 'Join Us', path: '/contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "MaternEase was a gentle hand to hold during my darkest moments. I finally feel like myself again.", author: "— Sarah J." },
  { quote: "The journals and guides helped me untangle my anxious thoughts. I'm so much more present with my baby now.", author: "— Emily R." },
  { quote: "I thought I was alone in feeling this way. This program gave me a roadmap back to peace and confidence.", author: "— Maria L." },
];

export const BLOG_POSTS: BlogPost[] = [
  { 
    id: 1, 
    title: 'How to Sleep Better After Giving Birth', 
    excerpt: 'Discover gentle, practical tips to improve your sleep quality, even with a newborn. Your rest is crucial for your postpartum healing journey.', 
    imageUrl: 'https://picsum.photos/seed/sleep/1200/600',
    content: <p>Full content for "How to Sleep Better After Giving Birth" coming soon.</p> 
  },
  { 
    id: 2, 
    title: '5 Ways to Calm Postpartum Anxiety Naturally', 
    excerpt: 'Learn five simple, grounding techniques to manage anxious feelings in the moment and build long-term emotional resilience.', 
    imageUrl: 'https://picsum.photos/seed/calm/1200/600',
    content: <p>Full content for "5 Ways to Calm Postpartum Anxiety Naturally" coming soon.</p>
  },
  { 
    id: 3, 
    title: 'Emotional Healing After Birth: A Gentle Guide', 
    excerpt: 'Your emotional recovery is just as important as your physical one. This guide offers a compassionate approach to processing your birth experience.', 
    imageUrl: 'https://picsum.photos/seed/healing/1200/600',
    content: <p>Full content for "Emotional Healing After Birth: A Gentle Guide" coming soon.</p>
  },
  {
    id: 4,
    title: 'Why So Many New Moms Feel Overwhelmed After Birth',
    excerpt: 'Real, gentle guidance for postpartum anxiety and emotional healing — simple steps you can use today.',
    imageUrl: 'https://picsum.photos/seed/overwhelmed/1200/600',
    content: (
      <>
        <p>Bringing a new life into the world is supposed to be joyful — but for many new mothers, the reality feels different. Instead of pure joy, there can be a quiet storm inside: anxiety that doesn’t stop, waves of sadness, constant guilt, and a tiredness that sleep alone cannot fix. You love your baby, yet sometimes you wonder if you’re failing them or if you'll ever feel like yourself again.</p>
        <h2 className="text-2xl md:text-3xl font-['Lora'] font-semibold text-slate-700 mt-8 mb-4">Why it feels so heavy</h2>
        <p>Postpartum anxiety and depression often show up quietly:</p>
        <ul className="list-disc list-inside space-y-2 my-4 text-slate-600 pl-4">
          <li>You worry constantly about your baby, your body, or your relationships.</li>
          <li>You feel on edge but can’t explain why.</li>
          <li>You cry easily, or sometimes feel numb and disconnected.</li>
          <li>You carry guilt for not being the “happy mom” you expected to be.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-['Lora'] font-semibold text-slate-700 mt-8 mb-4">You’re not broken — you’re healing</h2>
        <p>These feelings do not make you a bad mother. They make you a mother who needs care too. Healing doesn’t always mean long therapy or medication. Sometimes it starts with small, gentle actions: writing your thoughts, practicing simple breathing, or letting someone tell you — you are doing enough.</p>
        <h2 className="text-2xl md:text-3xl font-['Lora'] font-semibold text-slate-700 mt-8 mb-4">A gentle path forward</h2>
        <p>The <strong>MaternEase Healing Program</strong> is designed for mothers who want simple, clear, step-by-step support. It offers practical exercises, short guided practices, and printable tools you can use at home — no stigma, no pressure.</p>
        <div className="bg-[#FADADD]/40 p-6 rounded-lg my-8 border border-[#FADADD]">
          <strong className="block text-slate-700 mb-3 font-semibold text-lg">This program is for you if…</strong>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-4">
            <li>You often feel anxious or overwhelmed since giving birth.</li>
            <li>You worry you’re not being a “good enough” mom.</li>
            <li>You struggle to relax or get restorative sleep.</li>
            <li>You want simple, practical tools to feel better without judgement.</li>
          </ul>
        </div>
        <p>If this sounds like you, consider taking one small step today. You don’t need to have everything figured out — just a gentle plan and a safe place to begin.</p>
      </>
    )
  }
];


export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Instagram', href: '#', icon: InstagramIcon },
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Pinterest', href: '#', icon: PinterestIcon },
];