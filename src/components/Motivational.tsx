import { ArrowRight } from 'lucide-react';

export default function Motivational({ onSignUp }: { onSignUp?: () => void }) {
  return (
    <section className="py-32 relative overflow-hidden bg-[image:var(--gradient-prism-wash)]">
      
      <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display font-black text-[56px] md:text-[80px] text-ink-black tracking-[-0.03em] mb-8 leading-[1.0]">
          Take It To The <br className="hidden md:block"/>Next Level
        </h2>
        <p className="text-[20px] md:text-[24px] text-stone font-medium max-w-3xl mx-auto mb-12 tracking-[-0.031em] leading-[1.2]">
          Ready to join a squad where adventurous play meets personal growth? 
          Track your child's progress, view personalized notes from our staff, and watch them thrive.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={onSignUp} className="flex items-center gap-3 bg-tangerine text-pure-white font-bold text-[16px] px-6 py-4 rounded-pills hover:opacity-90 transition-opacity tracking-[-0.01em]">
            View Programs & Book
            <div className="w-6 h-6 bg-pure-white rounded-[6px] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[image:var(--gradient-cotton-sky)]"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
