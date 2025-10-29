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
  { name: 'About', path: '/about' },
  { name: 'Join Us', path: '/contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "MaternEase was a gentle hand to hold during my darkest moments. I finally feel like myself again.", author: "Sarah J." },
  { quote: "The journals and guides helped me untangle my anxious thoughts. I'm so much more present with my baby now.", author: "Emily R." },
  { quote: "I thought I was alone in feeling this way. This program gave me a roadmap back to peace and confidence.", author: "Maria L." },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'You Are Not Alone: A Gentle Guide to Postpartum Anxiety',
    excerpt: 'You expected sleepless nights, but not this constant feeling of worry. If this sounds familiar, you might be experiencing postpartum anxiety—a condition far more common than most women realize.',
    imageUrl: 'https://picsum.photos/seed/anxiety-guide/800/600',
    content: (
      <>
        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mb-4">Introduction</h2>
        <p>You expected sleepless nights, but not this constant feeling of worry. Your baby is healthy, your family is supportive, yet something inside you feels unsettled. Your heart races, your mind keeps replaying "what ifs," and even when everything is quiet, peace feels far away.</p>
        <p>If this sounds familiar, you might be experiencing postpartum anxiety—a condition far more common than most women realize.</p>
        <p className="font-semibold italic text-slate-600">You are not alone, and what you’re feeling is not your fault.</p>
        
        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">What Is Postpartum Anxiety?</h2>
        <p>Postpartum anxiety is an intense, often hidden form of worry that appears after giving birth. It’s different from the "baby blues"—it lingers longer and feels heavier.</p>
        <p>Many moms describe it like this:</p>
        <blockquote className="border-l-4 border-[#D8BFD8] pl-4 my-4 italic text-slate-600">
          “I can’t relax, even when my baby’s sleeping.”<br />
          “My thoughts won’t stop. I’m scared something bad will happen.”
        </blockquote>
        <p>Symptoms can include:</p>
        <ul className="list-disc list-inside space-y-2 my-4 pl-4">
          <li>Constant worrying or racing thoughts</li>
          <li>Difficulty sleeping even when you’re exhausted</li>
          <li>Physical tension – tight chest, restlessness, heart racing</li>
          <li>Fear of being a "bad mom" or of losing control</li>
        </ul>
        <p>These feelings don’t mean you’re weak; they mean you care deeply, and your nervous system is overwhelmed.</p>
  
        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">Why It Happens</h2>
        <p>After giving birth, your body and hormones go through massive changes. Your sleep is interrupted, your routine is gone, and your mind is adjusting to a completely new reality.</p>
        <p>Combine that with pressure to be the "perfect mom," and your body starts sending alarm signals—anxiety is one of them.</p>
        <p className="font-semibold">It’s your body’s way of saying: "I need rest, reassurance, and safety."</p>
  
        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">You Can Heal, Step by Step</h2>
        <p>The good news? Postpartum anxiety is treatable, and recovery doesn’t always require medication or therapy right away. It starts with awareness, compassion, and gentle daily practices that help calm your mind and regulate your body.</p>
        <p>Small things can make a big difference:</p>
        <ul className="list-disc list-inside space-y-2 my-4 pl-4">
          <li>Taking deep, mindful breaths</li>
          <li>Asking for help when you need it</li>
          <li>Getting sunlight and fresh air</li>
          <li>Writing down your feelings instead of hiding them</li>
        </ul>
        <p>Every calm moment you give yourself is a step toward healing.</p>
        
        <div className="mt-8 p-6 bg-[#FADADD]/30 rounded-lg">
          <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mb-2">A Gentle Invitation</h3>
          <p>If this article spoke to your heart, I’d love to share more tools to help you find calm, confidence, and joy again.</p>
          <p className="mt-2 font-semibold text-[#5B446A]">Get your free digital magazine: Finding Calm After Birth</p>
          <p className="mt-2">Inside, you’ll find simple breathing guides, emotional support tips, and gentle steps to rebuild your peace.</p>
          <p className="mt-2">Enter your email below to receive it instantly—a small gift from MaternEase, made for moms like you.</p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: 'Postpartum Depression: Understanding the Silent Struggle and Finding Hope Again',
    excerpt: 'No one really prepares you for this part. If you’ve been feeling empty, anxious, or disconnected since giving birth, you might be facing postpartum depression—and you are far from alone.',
    imageUrl: 'https://picsum.photos/seed/depression-hope/800/600',
    content: (
      <>
        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mb-4">Introduction</h2>
        <p>No one really prepares you for this part. You imagined holding your baby and feeling pure joy—but instead, tears come without warning, and guilt whispers that you “should be happy.”</p>
        <p>If you’ve been feeling empty, anxious, or disconnected since giving birth, you might be facing postpartum depression—and you are far from alone.</p>
        <p className="font-semibold italic text-slate-600">This isn’t weakness. It’s not a failure of motherhood. It’s a sign that your body and mind need care, compassion, and healing.</p>

        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">What Is Postpartum Depression?</h2>
        <p>Postpartum depression (PPD) is a deep and persistent sadness that can appear within weeks or months after giving birth. Unlike the "baby blues," which fade after a few days, PPD can last for months if not supported.</p>
        <p>Common signs include:</p>
        <ul className="list-disc list-inside space-y-2 my-4 pl-4">
          <li>Feeling sad or hopeless most of the time</li>
          <li>Crying without knowing why</li>
          <li>Difficulty bonding with your baby</li>
          <li>Feeling guilty or like you’re not a good mother</li>
          <li>Loss of interest in things you used to enjoy</li>
          <li>Changes in sleep or appetite</li>
        </ul>
        <p>These emotions don’t mean you don’t love your baby; they mean you’re exhausted, overwhelmed, and in need of gentle support.</p>
  
        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">Why It Happens</h2>
        <p>After birth, your hormones drop sharply. Sleep becomes irregular, your body is healing, and your life has completely changed. Add the pressure to have it all together, and your emotional world can start to crumble quietly.</p>
        <p className="font-semibold">You’re not broken—you’re human. Your system is asking for rest, connection, and understanding.</p>
  
        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">How to Begin Healing</h2>
        <p>There’s no single fix, but healing is absolutely possible. Recovery starts with acknowledgment—allowing yourself to say, "I’m not okay right now, and that’s okay."</p>
        <p>Here are a few gentle ways to start:</p>
        <ul className="list-disc list-inside space-y-2 my-4 pl-4">
          <li>Talk to someone you trust—your partner, a friend, or a counselor.</li>
          <li>Give yourself grace. You’re learning an entirely new rhythm of life.</li>
          <li>Move your body slowly. Even a 5-minute walk can help shift your energy.</li>
          <li>Write your feelings down. Journaling releases tension and brings clarity.</li>
          <li>Seek guidance. You don’t have to do this alone—there’s support designed for moms just like you.</li>
        </ul>
        
        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">You Deserve Support—and Peace</h2>
        <p>Your feelings don’t define your worth as a mother. You are strong, capable, and worthy of healing.</p>
        <p>Even small steps toward self-care can open the door to light again. And with the right guidance, you can rediscover calm, connection, and confidence.</p>

        <div className="mt-8 p-6 bg-[#FADADD]/30 rounded-lg">
          <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mb-2">Free Gift for You</h3>
          <p>If this article touched your heart, I’ve created something special to help you start your healing journey.</p>
          <p className="mt-2 font-semibold text-[#5B446A]">Get your free digital magazine: Finding Calm After Birth.</p>
          <p className="mt-2">Inside, you’ll find emotional support exercises, simple self-care rituals, and expert insights on postpartum well-being.</p>
          <p className="mt-2">Enter your email below to receive your free magazine—from MaternEase, a gentle space made for mothers like you.</p>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: 'How to Sleep Better After Birth: Even When It Feels Impossible',
    excerpt: 'Those first weeks after birth can feel like a blur... If you’re struggling to rest, you’re not failing—your body and mind are simply adjusting to a new rhythm.',
    imageUrl: 'https://picsum.photos/seed/sleep-better/800/600',
    content: (
      <>
        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mb-4">Introduction</h2>
        <p>Those first weeks after birth can feel like a blur—your baby’s feeding schedule, your healing body, your restless mind. And when everyone says, "Sleep when the baby sleeps," you probably want to laugh (or cry).</p>
        <p>If you’re struggling to rest, you’re not failing—your body and mind are simply adjusting to a new rhythm. Here’s how to gently guide yourself back toward peaceful sleep, one small step at a time.</p>

        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">1. Rebuild your sleep rhythm slowly</h3>
        <p>Forget the 8-hour nights (for now). Start by focusing on rest, not perfection. Short naps of 20–30 minutes throughout the day can be surprisingly restorative. Keep your lights dim in the evening and avoid screens right before bed—your brain needs darkness to know it’s safe to rest.</p>

        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">2. Create a mini bedtime ritual (just for you)</h3>
        <p>A calming routine helps your body know it’s time to slow down. Try this simple sequence:</p>
        <ul className="list-disc list-inside space-y-2 my-4 pl-4">
            <li>Sip warm tea (chamomile or lavender)</li>
            <li>Stretch gently for 2 minutes</li>
            <li>Take 3 deep breaths and thank your body for today</li>
        </ul>
        <p>It doesn’t have to be fancy—it just has to be yours.</p>

        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">3. Ask for help without guilt</h3>
        <p>You’re not meant to do this alone. If your partner, family, or friend can take one night shift, even once a week, use that time to truly rest. Sleep isn’t a luxury—it’s healing.</p>

        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">4. Calm your racing thoughts before bed</h3>
        <p>Many new moms say their bodies are tired, but their minds won’t turn off. When that happens, try this: Write down three worries on paper—then, next to each, write:</p>
        <blockquote className="border-l-4 border-[#D8BFD8] pl-4 my-4 italic text-slate-600">
            "I will handle this tomorrow."
        </blockquote>
        <p>You’re giving your brain permission to rest.</p>

        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">5. Make peace with imperfection</h3>
        <p>Some nights will be messy. You might cry, wake up ten times, or feel like you’ll never sleep again. That’s okay. Healing doesn’t look perfect—it looks human.</p>
        <p className="font-semibold">Remind yourself: "This is temporary. My body and baby are learning together."</p>
        
        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">You deserve rest</h2>
        <p>Sleep is not selfish—it’s survival, it’s self-love, and it’s how you show up fully for your baby. Even in the chaos, moments of calm are possible.</p>
        
        <div className="mt-8 p-6 bg-[#FADADD]/30 rounded-lg">
          <p>If you’d like gentle, realistic guidance to bring more peace into your postpartum days, <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyO-RWJtTSMwZRq_0JvcskJ8cEV1Afr4on2PozNvFlNuIQkQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#5B446A] hover:underline">Get your free MaternEase magazine</a>—a loving guide to calm, confidence, and emotional healing after birth.</p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: 'How to Stop Feeling Like a Bad Mom: Real Steps to Let Go of Postpartum Guilt',
    excerpt: 'Do you feel like you’re not doing enough for your baby, or that you’re not as patient or calm as other mothers? You’re not alone. Learn real steps to release guilt and rebuild emotional balance.',
    imageUrl: 'https://picsum.photos/seed/mom-guilt/800/600',
    content: (
      <>
        <p>Do you sometimes find yourself crying quietly, thinking you’re failing as a mom? Do you feel like you’re not doing enough for your baby—or that you’re not as patient, calm, or put together as other mothers seem to be online?</p>
        <p className="font-semibold italic text-slate-600">You’re not alone.</p>
        <p>Many new mothers silently carry deep guilt after giving birth. They question themselves constantly: "Why can’t I enjoy this more?" or "What’s wrong with me?"</p>
        <p>But here’s the truth: a good mom isn’t one who never struggles—she’s one who keeps showing up, even when it’s hard.</p>
        <p>In this article, you’ll learn five simple, real-life steps to release guilt and rebuild emotional balance so you can start seeing yourself for what you truly are—a loving, capable, and "enough" mother.</p>
    
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">1. Accept That Difficult Emotions Don’t Make You a Bad Mom</h3>
        <p>It’s okay to feel overwhelmed, frustrated, or even disconnected sometimes. These emotions don’t define you—they’re signals that you need rest, care, and compassion.</p>
        <p>Instead of judging yourself, try noticing the feeling without shame.</p>
        <blockquote className="border-l-4 border-[#D8BFD8] pl-4 my-4 italic text-slate-600">
            Feeling guilty doesn’t make you a bad mom—it simply means you care deeply.
        </blockquote>
    
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">2. Stop Comparing Yourself to Other Moms</h3>
        <p>What you see on Instagram isn’t the full picture. Behind every perfect-looking photo is exhaustion, tears, and moments of doubt.</p>
        <p>Focus on your journey: your baby, your energy, your pace.</p>
        <p className="font-semibold">Repeat this to yourself every day: "I’m doing my best, and that’s enough."</p>
    
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">3. Reconnect With Your Body</h3>
        <p>Your body carried life—it deserves love, not criticism. Instead of focusing on how it looks, thank it for what it has done. A few minutes of gentle stretching or mindful breathing can help you feel more grounded and at peace.</p>
        <blockquote className="border-l-4 border-[#D8BFD8] pl-4 my-4 italic text-slate-600">
            Every deep breath you take is a step toward calm.
        </blockquote>
    
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">4. Speak Your Feelings Out Loud</h3>
        <p>You don’t have to carry everything in silence. Talk to someone you trust—your partner, a friend, or a therapist. When you give your pain words, it starts to lose its power.</p>
        <p className="font-semibold">Healing begins the moment you stop pretending you’re okay when you’re not.</p>
    
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">5. Offer Yourself the Same Kindness You Give Your Baby</h3>
        <p>Ask yourself: If my best friend felt this way, how would I treat her? Then do exactly that for yourself.</p>
        <p>Make yourself a warm cup of tea, take a nap, journal your feelings—small moments of self-care add up to big emotional relief.</p>
    
        <div className="mt-8 p-6 bg-[#FADADD]/30 rounded-lg">
            <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mb-2">Bonus Step: Get Your Free Calm After Birth Mini Guide</h3>
            <p>If you’re ready to start releasing guilt and anxiety and want gentle, guided steps—we created something special for you.</p>
            <p className="mt-2">Our free postpartum calm magazine includes journaling prompts, breathing exercises, and grounding tools to help you reconnect with yourself.</p>
            <p className="mt-4"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeyO-RWJtTSMwZRq_0JvcskJ8cEV1Afr4on2PozNvFlNuIQkQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#5B446A] hover:underline">Download your free guide here.</a></p>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: '7 Signs Your Postpartum Struggle Needs Real Support',
    excerpt: 'You’re not broken — you’re overwhelmed. If you’ve been carrying invisible weight since giving birth, these signs may mean your body and mind are asking for help.',
    imageUrl: 'https://picsum.photos/seed/real-support/800/600',
    content: (
      <>
        <p>You’re not broken, you’re overwhelmed.</p>
        <p>Many new moms expect sleepless nights, messy days, and emotional ups and downs. But sometimes, what you’re feeling isn’t just exhaustion. It’s something deeper, and it deserves real care.</p>
        <p>If you’ve been carrying invisible weight since giving birth, these signs may mean your body and mind are asking for help—not because you’re weak, but because you’ve been trying to survive without enough support.</p>
        
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">1. The guilt never stops</h3>
        <p>You constantly feel like you’re not doing enough—not calm enough, not patient enough, not the mom your baby deserves. Even on good days, guilt whispers that you’re failing.</p>
        <blockquote className="border-l-4 border-[#D8BFD8] pl-4 my-4 italic text-slate-600">But guilt doesn’t mean truth; it means your standards are too high for someone who’s just given so much.</blockquote>
        
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">2. Your thoughts won’t slow down</h3>
        <p>Intrusive "what if" thoughts—about your baby, your health, your worth—loop endlessly. You can’t rest, even when your baby finally sleeps.</p>
        <blockquote className="border-l-4 border-[#D8BFD8] pl-4 my-4 italic text-slate-600">That’s not weakness. That’s your nervous system stuck in alert mode.</blockquote>
        
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">3. You feel numb instead of joyful</h3>
        <p>Everyone says, "Enjoy these moments, they grow fast," but you just feel… flat. You love your baby, yet you feel disconnected or distant—as if you’re watching your life from behind a fog.</p>
        <blockquote className="border-l-4 border-[#D8BFD8] pl-4 my-4 italic text-slate-600">That’s a signal of emotional exhaustion, not lack of love.</blockquote>
        
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">4. You cry more than you expected</h3>
        <p>Crying easily after birth can be normal—but when it’s every day, and you don’t know why, it’s your body’s way of asking for relief and care.</p>
        
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">5. You’re angry or overwhelmed by tiny things</h3>
        <p>Small noises, clutter, or your partner’s comment can set you off. Your body is running on cortisol, not calm.</p>
        <blockquote className="border-l-4 border-[#D8BFD8] pl-4 my-4 italic text-slate-600">You’re not crazy—you’re depleted.</blockquote>
        
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">6. You avoid talking about how you really feel</h3>
        <p>You smile, say "I'm fine," but inside, you’re scared to admit how bad it feels. You don’t want anyone to think you can’t handle motherhood.</p>
        <blockquote className="border-l-4 border-[#D8BFD8] pl-4 my-4 italic text-slate-600">But silence keeps the pain louder. Speaking it out—even once—can start the healing.</blockquote>

        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">7. You can’t recognize yourself anymore</h3>
        <p>You miss who you were—confident, light, capable. Now, you feel lost in survival mode. You wonder: "Will I ever feel normal again?"</p>

        <h2 className="text-2xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">The truth? You can—with support that meets you where you are.</h2>
        <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mt-8 mb-4">Gentle ways to begin healing</h3>
        <p>If therapy feels overwhelming or too formal right now, start smaller. You can still begin your healing journey today, one calm moment at a time.</p>
        <p>Try one of these steps tonight:</p>
        <ul className="list-disc list-inside space-y-2 my-4 pl-4">
            <li>Write down 3 things that are hard right now, then 1 small thing you did right today.</li>
            <li>Place your hand on your chest, take a slow breath, and whisper: "I’m doing my best."</li>
            <li>Ask someone to hold the baby for 10 minutes, and do absolutely nothing.</li>
        </ul>
        <p className="font-semibold">You deserve rest, support, and a path that doesn’t feel like another job.</p>

        <div className="mt-8 p-6 bg-[#FADADD]/30 rounded-lg">
            <h3 className="text-xl font-['Lora'] font-bold text-slate-800 mb-2">You don’t have to do this alone</h3>
            <p>Motherhood is not meant to be survived; it's meant to be lived, with peace and presence. The MaternEase Program was designed exactly for this—a simple, step-by-step guide to help you reduce anxiety, rebuild confidence, and reconnect with your baby (and yourself).</p>
            <p className="mt-4 font-semibold text-[#5B446A]">Want to receive a free postpartum calm guide?</p>
            <p className="mt-2">Get a printable mini-journal with breathing tools and 3 gentle practices for anxious days.</p>
            <p className="mt-4"><a href="https://maternease.kit.com/628c4a90d0" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#5B446A] hover:underline">Download your free guide here.</a></p>
        </div>
      </>
    ),
  },
];


export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Instagram', href: '#', icon: InstagramIcon },
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Pinterest', href: '#', icon: PinterestIcon },
];