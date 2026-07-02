import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X } from 'lucide-react';

export default function MascotOverlay({ view }: { view: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Initial popup on landing page
    if (view === 'landing') {
      const timer = setTimeout(() => {
        setMessage("Hi! I'm Dizzy! I'll be around during your visit to guide you.");
        setIsVisible(true);
        
        // Fade into dust after 5 seconds
        const hideTimer = setTimeout(() => {
          setIsVisible(false);
        }, 5000);

        return () => clearTimeout(hideTimer);
      }, 5000); // 5 seconds delay on the hero

      return () => clearTimeout(timer);
    } else if (view === 'activities') {
      setMessage("Check out all our fun activities!");
      setIsVisible(true);
      const hideTimer = setTimeout(() => setIsVisible(false), 4000);
      return () => clearTimeout(hideTimer);
    } else {
      setIsVisible(false);
    }
  }, [view]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 right-8 z-[100] flex items-end gap-4 pointer-events-none"
        >
          <div className="bg-pure-white p-4 rounded-cards shadow-sm border border-cloud-gray relative max-w-[200px] pointer-events-auto">
            <p className="text-[14px] text-ink-black font-medium leading-[1.2]">{message}</p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-pure-white border-b border-r border-cloud-gray transform rotate-45"></div>
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 bg-cloud-gray rounded-full p-1 border border-mist-gray hover:bg-mist-gray transition-colors"
            >
              <X className="w-3 h-3 text-stone" />
            </button>
          </div>
          
          <div className="w-24 h-24 bg-tangerine rounded-full flex items-center justify-center border-4 border-pure-white shadow-sm overflow-hidden relative pointer-events-auto">
            {/* Placeholder for Character Sheet */}
            <div className="absolute inset-0 bg-[image:var(--gradient-coral-edge)]"></div>
            <span className="relative z-10 font-display font-black text-pure-white text-[12px] uppercase text-center leading-[1.0]">Dizzy<br/>Mascot</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
