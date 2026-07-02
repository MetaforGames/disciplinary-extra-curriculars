import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Shield, ChevronRight, Gamepad2, ArrowLeft } from 'lucide-react';

export default function LoginPortal({ setView }: { setView?: (v: 'landing' | 'dashboard' | 'activities' | 'staff' | 'login' | 'kid-dashboard') => void }) {
  
  return (
    <div className="min-h-screen bg-[image:var(--gradient-cotton-sky)] pt-24 pb-12 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-display font-black text-[56px] md:text-[80px] text-ink-black tracking-[-0.03em] mb-4 leading-[1.0]">
            Select Your <span className="text-hot-pink">Profile</span>
          </h1>
          <p className="text-[20px] text-stone font-medium tracking-[-0.031em]">Choose how you want to enter the disciplinary. system.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Kid Profile Card */}
          <motion.button 
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setView?.('kid-dashboard')}
            className="group relative bg-pure-white rounded-cards p-8 shadow-sm hover:shadow-xl text-left overflow-hidden transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
              <Gamepad2 className="w-32 h-32 text-hot-pink" />
            </div>
            <div className="w-20 h-20 rounded-icons bg-hot-pink flex items-center justify-center mb-6 shadow-xl-inset">
              <Gamepad2 className="w-10 h-10 text-pure-white" />
            </div>
            <h2 className="font-display font-black text-[32px] text-ink-black mb-2 tracking-[-0.031em]">Recruit Portal</h2>
            <p className="text-stone mb-8 font-medium text-[16px] leading-[1.2]">View your earned badges, showcase photos, and team stats. Game on!</p>
            <div className="flex items-center gap-2 text-hot-pink font-bold tracking-[-0.01em] text-[16px]">
              Enter Portal <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.button>

          {/* Parent Profile Card */}
          <motion.button 
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setView?.('dashboard')}
            className="group relative bg-pure-white rounded-cards p-8 shadow-sm hover:shadow-xl text-left overflow-hidden transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
              <Shield className="w-32 h-32 text-sky-tint" />
            </div>
            <div className="w-20 h-20 rounded-icons bg-[#99eeff] flex items-center justify-center mb-6 shadow-xl-inset">
              <Shield className="w-10 h-10 text-ink-black" />
            </div>
            <h2 className="font-display font-black text-[32px] text-ink-black mb-2 tracking-[-0.031em]">Parent Command</h2>
            <p className="text-stone mb-8 font-medium text-[16px] leading-[1.2]">Track progress, view upcoming sessions, and review staff notes.</p>
            <div className="flex items-center gap-2 text-sky-tint font-bold tracking-[-0.01em] text-[16px] text-ink-black">
              Access Dashboard <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
