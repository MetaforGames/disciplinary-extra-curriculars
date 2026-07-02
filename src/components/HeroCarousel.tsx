import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Calendar, Info } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Push Boundaries. Together.",
    subtitle: "A cooperative disciplinary experience for kids."
  },
  {
    id: 2,
    title: "Build Social Smarts.",
    subtitle: "Learn teamwork and sharing through high-energy challenges."
  },
  {
    id: 3,
    title: "Creative Problem Solving.",
    subtitle: "Navigate physical and mental obstacles as a squad."
  }
];

const heroImage = "https://storage.googleapis.com/aistudio-build-dev-assets/4379d71c-32b0-4ca8-bb4e-7b243beaa1c0/08589c37-4d92-4ca3-b68c-cfc5d40c03eb.png";

export default function HeroCarousel({ onSignUp }: { onSignUp?: () => void }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-cloud-gray">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Kids playing in clouds" className="w-full h-full object-cover object-top" />
      </div>
      
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-4 max-w-[1200px] mx-auto mt-20">
        <div className="h-[200px] flex flex-col items-center justify-center relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h1 className="font-display font-black text-[56px] md:text-[80px] lg:text-[100px] leading-[1.0] text-ink-black tracking-[-0.03em] max-w-4xl drop-shadow-md">
                {slides[current].title}
              </h1>
              <p className="mt-6 text-[20px] text-ink-black max-w-2xl font-bold tracking-[-0.031em] drop-shadow-md bg-pure-white/50 backdrop-blur-sm px-6 py-2 rounded-pills">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 flex gap-4 flex-wrap justify-center"
        >
          <button
            onClick={onSignUp}
            className="flex items-center gap-3 bg-tangerine text-pure-white font-bold text-[16px] px-6 py-4 rounded-pills hover:opacity-90 transition-opacity tracking-[-0.01em] shadow-sm"
          >
            Book Now
            <div className="w-6 h-6 bg-pure-white rounded-[6px] flex items-center justify-center">
              <Calendar className="w-4 h-4 text-tangerine" />
            </div>
          </button>
          <button
            onClick={onSignUp}
            className="flex items-center gap-3 bg-hot-pink text-pure-white font-bold text-[16px] px-6 py-4 rounded-pills hover:opacity-90 transition-opacity tracking-[-0.01em] shadow-sm"
          >
            Learn More
            <div className="w-6 h-6 bg-pure-white rounded-[6px] flex items-center justify-center">
              <Info className="w-4 h-4 text-hot-pink" />
            </div>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 z-40 flex justify-center gap-6">
        <button onClick={prev} className="p-3 rounded-full bg-pure-white text-ink-black shadow-sm hover:bg-cloud-gray transition-all border border-cloud-gray">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-3">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-300 ${current === idx ? 'w-8 bg-tangerine' : 'w-2 bg-pure-white border border-mist-gray'}`}
            />
          ))}
        </div>
        <button onClick={next} className="p-3 rounded-full bg-pure-white text-ink-black shadow-sm hover:bg-cloud-gray transition-all border border-cloud-gray">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
