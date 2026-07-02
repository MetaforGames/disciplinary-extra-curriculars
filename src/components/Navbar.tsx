import { MountainSnow, Smile } from 'lucide-react';

export default function Navbar({ setView }: { setView?: (v: 'landing' | 'dashboard' | 'activities' | 'staff' | 'login' | 'careers') => void, onSignUp?: () => void }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-pure-white/80 backdrop-blur-md border-b border-cloud-gray">
      <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
        <button onClick={() => setView?.('landing')} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pure-white rounded-[16px] shadow-sm flex items-center justify-center border border-cloud-gray overflow-hidden">
            <Smile className="w-6 h-6 text-tangerine" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter text-ink-black mt-1">disciplinary.</span>
        </button>
        <div className="hidden md:flex gap-8 text-[16px] font-bold text-stone">
          <button onClick={() => setView?.('activities')} className="hover:text-tangerine transition-colors tracking-[-0.01em]">Activities</button>
          <button onClick={() => setView?.('landing')} className="hover:text-tangerine transition-colors tracking-[-0.01em]">Showcase</button>
          <button onClick={() => setView?.('landing')} className="hover:text-tangerine transition-colors tracking-[-0.01em]">About</button>
        </div>
        <button onClick={() => setView?.('login')} className="bg-pure-white text-ink-black border border-cloud-gray font-bold text-[16px] px-6 py-2.5 rounded-pills hover:bg-cloud-gray transition-colors tracking-[-0.01em]">
          Portal Login
        </button>
      </div>
    </nav>
  );
}

