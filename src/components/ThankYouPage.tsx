import { motion } from 'motion/react';
import { Trophy, ArrowRight, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThankYouPage({ setView }: { setView?: (v: 'landing' | 'dashboard' | 'activities' | 'staff' | 'login') => void }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti slightly after mount for effect
    const timer = setTimeout(() => setShowConfetti(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Simple pure-CSS/motion confetti particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 200 - 100, // -100 to 100
    y: -(Math.random() * 200 + 100),
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 0.2
  }));

  return (
    <div className="min-h-screen bg-[image:var(--gradient-lavender-mist)] pt-24 pb-12 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="relative inline-block mb-8"
        >
          {showConfetti && particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              animate={{ 
                x: p.x + 'vw', 
                y: p.y + 'vh', 
                opacity: 0, 
                rotate: p.rotation * 3 
              }}
              transition={{ duration: 1.5, ease: "easeOut", delay: p.delay }}
              className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full pointer-events-none"
              style={{
                backgroundColor: ['#ff8a00', '#ff54bb', '#99eeff', '#ff8465'][Math.floor(Math.random() * 4)]
              }}
            />
          ))}

          <div className="w-32 h-32 bg-pure-white rounded-cards rotate-12 flex items-center justify-center shadow-xl-inset">
            <Trophy className="w-16 h-16 text-tangerine -rotate-12" />
          </div>
          
          {/* Decorative floating badges */}
          <motion.div 
            initial={{ opacity: 0, x: -20, y: 20 }} animate={{ opacity: 1, x: -30, y: 30 }} transition={{ delay: 0.5 }}
            className="absolute top-0 left-0 bg-sky-tint rounded-icons p-3 shadow-sm"
          >
            <ShieldCheck className="w-6 h-6 text-pure-white" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20, y: 20 }} animate={{ opacity: 1, x: 30, y: 40 }} transition={{ delay: 0.7 }}
            className="absolute bottom-0 right-0 bg-hot-pink rounded-icons p-3 shadow-sm"
          >
            <Sparkles className="w-6 h-6 text-pure-white" />
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
          className="font-display font-black text-[56px] md:text-[80px] text-ink-black tracking-[-0.03em] mb-6 leading-[1.0]"
        >
          You're <span className="text-tangerine">In!</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-[20px] md:text-[24px] text-stone font-medium mb-10 max-w-lg mx-auto leading-[1.2] tracking-[-0.031em]"
        >
          You've joined the disciplinary. adventure — teamwork starts here!
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => setView?.('login')}
            className="w-full sm:w-auto bg-tangerine text-pure-white font-bold text-[16px] px-8 py-4 rounded-pills hover:opacity-90 transition-opacity flex items-center justify-center gap-3 tracking-[-0.01em]"
          >
            Go to Account Portal 
            <div className="w-6 h-6 bg-pure-white rounded-[6px] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[image:var(--gradient-prism-wash)]"></div>
            </div>
          </button>
          <button 
            onClick={() => setView?.('activities')}
            className="w-full sm:w-auto bg-pure-white text-ink-black shadow-sm font-bold text-[16px] px-8 py-4 rounded-pills hover:bg-cloud-gray transition-colors tracking-[-0.01em]"
          >
            Browse Activities
          </button>
        </motion.div>
      </div>
    </div>
  );
}
