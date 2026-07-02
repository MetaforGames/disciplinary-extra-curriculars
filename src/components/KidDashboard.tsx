import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Trophy, Target, Sparkles, ChevronRight, ChevronLeft, Image as ImageIcon, Flame } from 'lucide-react';

const earnedBadges = [
  { id: 1, name: 'Fearless Leader', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/20', border: 'border-orange-500/30' },
  { id: 2, name: 'Team Player', icon: ShieldCheck, color: 'text-blue-500', bg: 'bg-blue-500/20', border: 'border-blue-500/30' },
  { id: 3, name: 'Master Builder', icon: Target, color: 'text-brand', bg: 'bg-brand/20', border: 'border-brand/30' },
  { id: 4, name: 'Creative Genius', icon: Sparkles, color: 'text-pink-500', bg: 'bg-pink-500/20', border: 'border-pink-500/30' },
];

const showcaseImages = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1517409217032-132d73ce0b28?auto=format&fit=crop&q=80&w=1000"
];

export default function KidDashboard() {
  const [showcaseIdx, setShowcaseIdx] = useState(0);

  const nextImage = () => setShowcaseIdx(p => (p + 1) % showcaseImages.length);
  const prevImage = () => setShowcaseIdx(p => (p - 1 + showcaseImages.length) % showcaseImages.length);

  return (
    <div className="min-h-screen bg-cloud-gray pt-24 pb-12 px-4 max-w-[1200px] mx-auto">
      {/* Header Profile */}
      <div className="bg-pure-white rounded-cards p-8 shadow-sm relative overflow-hidden mb-8 border border-cloud-gray">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
          <Trophy className="w-48 h-48 text-tangerine" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-tangerine p-2 shrink-0">
            <div className="w-full h-full rounded-full bg-pure-white overflow-hidden border-4 border-pure-white relative">
              <img src="https://images.unsplash.com/photo-1542841791-1925b02a2bf8?w=400&q=80" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-cloud-gray text-tangerine font-bold uppercase tracking-wider text-[12px] rounded-pills mb-2">
              Level 5 Recruit
            </div>
            <h1 className="font-display font-black text-[56px] md:text-[64px] uppercase tracking-[-0.03em] text-ink-black mb-2 leading-[1.0]">Alex</h1>
            <p className="text-[20px] text-stone font-medium tracking-[-0.031em]">Squad: The Lightning Cheetahs</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Badges Section */}
        <div className="bg-pure-white rounded-cards p-8 shadow-sm border border-cloud-gray">
          <h2 className="font-display font-black text-[32px] uppercase tracking-[-0.031em] text-ink-black mb-6 flex items-center gap-3">
            <ShieldCheck className="text-tangerine w-8 h-8" /> Earned Badges
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {earnedBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={badge.id} 
                  className={`bg-cloud-gray p-6 rounded-[24px] flex flex-col items-center justify-center text-center relative overflow-hidden group border border-transparent hover:border-mist-gray transition-all`}
                >
                  <Icon className={`w-12 h-12 ${badge.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <span className="font-bold text-ink-black uppercase tracking-[-0.01em] text-[16px]">{badge.name}</span>
                </motion.div>
              );
            })}
            
            {/* Locked Badge Slot */}
            <div className="bg-cloud-gray/50 border-2 border-mist-gray border-dashed p-6 rounded-[24px] flex flex-col items-center justify-center text-center opacity-50">
              <Trophy className="w-12 h-12 text-stone mb-3" />
              <span className="font-bold text-stone uppercase tracking-[-0.01em] text-[16px]">Locked</span>
            </div>
          </div>
        </div>

        {/* Action Showcase Gallery */}
        <div className="bg-pure-white rounded-cards p-8 shadow-sm border border-cloud-gray flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-black text-[32px] uppercase tracking-[-0.031em] text-ink-black flex items-center gap-3">
              <ImageIcon className="text-hot-pink w-8 h-8" /> Action Cam
            </h2>
            <div className="flex gap-2">
              <button onClick={prevImage} className="w-10 h-10 rounded-full bg-cloud-gray flex items-center justify-center hover:bg-mist-gray transition-colors text-ink-black">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextImage} className="w-10 h-10 rounded-full bg-cloud-gray flex items-center justify-center hover:bg-mist-gray transition-colors text-ink-black">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="relative rounded-[24px] overflow-hidden bg-ink-black flex-1 min-h-[300px] shadow-xl-inset">
            <AnimatePresence initial={false}>
              <motion.img
                key={showcaseIdx}
                src={showcaseImages[showcaseIdx]}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Showcase"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {showcaseImages.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === showcaseIdx ? 'bg-hot-pink w-6' : 'bg-pure-white/50'} transition-all`} />
              ))}
            </div>
            {/* Cool Game Overlay */}
            <div className="absolute top-4 left-4 bg-pure-white/80 backdrop-blur-sm border border-pure-white px-3 py-1.5 rounded-[12px] flex items-center gap-2 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-hot-pink animate-pulse" />
              <span className="text-[12px] font-bold text-ink-black uppercase tracking-wider">Live Footage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
