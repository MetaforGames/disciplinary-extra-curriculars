import { MountainSnow, Facebook, Instagram, Twitter, Smile } from 'lucide-react';

export default function Footer({ setView }: { setView?: (v: 'landing' | 'dashboard' | 'activities' | 'staff' | 'login' | 'careers') => void }) {
  return (
    <footer className="bg-pure-white text-ink-black py-20 border-t border-cloud-gray">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setView?.('landing')}>
            <div className="w-10 h-10 bg-cloud-gray rounded-[16px] flex items-center justify-center overflow-hidden">
              <Smile className="w-6 h-6 text-hot-pink" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-ink-black mt-1">disciplinary.</span>
          </div>
          <p className="text-stone max-w-sm mb-8 text-[16px] font-medium leading-relaxed">
            A cooperative, disciplinary-style extracurricular program focused on growth, teamwork, and pushing boundaries safely.
          </p>
          <div className="flex gap-4 text-stone">
            <a href="#" className="w-10 h-10 bg-cloud-gray rounded-[10px] flex items-center justify-center hover:bg-tangerine hover:text-pure-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-cloud-gray rounded-[10px] flex items-center justify-center hover:bg-hot-pink hover:text-pure-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-cloud-gray rounded-[10px] flex items-center justify-center hover:bg-sky-tint hover:text-ink-black transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-display font-black text-[24px] mb-6 tracking-[-0.031em]">Explore</h4>
          <ul className="space-y-4 text-stone font-bold text-[16px]">
            <li><button onClick={() => setView?.('activities')} className="hover:text-tangerine transition-colors">Activities</button></li>
            <li><button onClick={() => setView?.('landing')} className="hover:text-tangerine transition-colors">Showcase</button></li>
            <li><button onClick={() => setView?.('landing')} className="hover:text-tangerine transition-colors">About Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-black text-[24px] mb-6 tracking-[-0.031em]">Connect</h4>
          <ul className="space-y-4 text-stone font-bold text-[16px]">
            <li><button onClick={() => setView?.('careers')} className="hover:text-hot-pink transition-colors">Careers</button></li>
            <li>
              <span className="block mb-2 text-ink-black font-black">HQ Address:</span>
              <span className="text-stone font-medium">Jl. Nasional Maumere - Larantuka,<br/>Habi, Kec. Kangae, Kabupaten Sikka,<br/>Nusa Tenggara Timur 86181</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 pt-8 border-t border-cloud-gray text-stone text-[12px] flex flex-col md:flex-row justify-between items-center gap-4 font-bold">
        <div>© {new Date().getFullYear()} disciplinary. Games System. All rights reserved.</div>
        <div className="flex gap-6 items-center">
          <button onClick={() => setView?.('staff')} className="text-stone hover:text-tangerine transition-colors uppercase tracking-wider">Staff</button>
          <a href="#" className="hover:text-ink-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ink-black transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
