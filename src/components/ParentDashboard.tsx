import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, CheckSquare, ShieldAlert, Users, 
  Activity, Star, ChevronRight, ChevronLeft,
  BookOpen, Heart, Globe, Camera, Shield
} from 'lucide-react';

const prices = [
  { currency: 'IDR', value: 'Rp 500.000', flag: '🇮🇩' },
  { currency: 'EUR', value: '€30', flag: '🇪🇺' },
  { currency: 'USD', value: '$32', flag: '🇺🇸' },
  { currency: 'AUD', value: '$48', flag: '🇦🇺' },
  { currency: 'JPY', value: '¥4,500', flag: '🇯🇵' },
  { currency: 'KRW', value: '₩42,000', flag: '🇰🇷' },
];

const showcaseImages = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000"
];

const translations = {
  en: {
    dashboard: "Parent Dashboard",
    welcome: "Welcome back, Sarah!",
    child_name: "Alex's Progress",
    pickup_in: "Pickup In",
    dropoff: "Drop-off Reminder: 08:00 AM",
    hours: "hrs",
    mins: "mins",
    checklist: "Checklist",
    swimwear: "Swimwear",
    towel: "Towel",
    water: "Water Bottle",
    sunscreen: "Sunscreen",
    badges: "Badges Earned",
    activities: "Activity Log",
    joined: "Joined",
    rejected: "Rejected",
    rule_bent: "Rule-Bent",
    lessons: "Lesson Alignment",
    lesson_desc: "Focus: Not being competitive, Sharing",
    notes: "Enthusiasm Highlights",
    showcase: "Showcase",
    pricing: "Current Program Pricing",
    mud_run: "Mud Run",
    wall_climb: "Wall Climb",
    relay: "Team Relay",
    note_1: "Alex helped pull a teammate up the wall today! Great display of teamwork.",
    note_2: "Suggested a new way to balance on the beam that the whole team used.",
  },
  id: {
    dashboard: "Dasbor Orang Tua",
    welcome: "Selamat datang kembali, Sarah!",
    child_name: "Perkembangan Alex",
    pickup_in: "Jemput Dalam",
    dropoff: "Pengingat Antar: 08:00 Pagi",
    hours: "jam",
    mins: "mnt",
    checklist: "Daftar Bawaan",
    swimwear: "Baju Renang",
    towel: "Handuk",
    water: "Botol Minum",
    sunscreen: "Tabir Surya",
    badges: "Lencana Diperoleh",
    activities: "Log Aktivitas",
    joined: "Ikut",
    rejected: "Menolak",
    rule_bent: "Aturan Dimodifikasi",
    lessons: "Kesesuaian Pelajaran",
    lesson_desc: "Fokus: Tidak kompetitif, Berbagi",
    notes: "Catatan Staf",
    showcase: "Galeri",
    pricing: "Harga Program Saat Ini",
    mud_run: "Lari Lumpur",
    wall_climb: "Panjat Dinding",
    relay: "Estafet Tim",
    note_1: "Alex membantu menarik teman timnya ke atas dinding hari ini! Kerja sama yang hebat.",
    note_2: "Menyarankan cara baru untuk menyeimbangkan diri di balok yang digunakan seluruh tim.",
  }
};

export default function ParentDashboard() {
  const [lang, setLang] = useState<'en' | 'id'>('en');
  const t = translations[lang];

  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 45 });
  const [checklist, setChecklist] = useState({
    swimwear: false,
    towel: true,
    water: true,
    sunscreen: false
  });
  
  const [priceIdx, setPriceIdx] = useState(0);
  const [showcaseIdx, setShowcaseIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPriceIdx((prev) => (prev + 1) % prices.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const toggleChecklist = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const nextImage = () => setShowcaseIdx(p => (p + 1) % showcaseImages.length);
  const prevImage = () => setShowcaseIdx(p => (p - 1 + showcaseImages.length) % showcaseImages.length);

  const activities = [
    { name: t.mud_run, status: 'joined', type: 'success' },
    { name: t.wall_climb, status: 'rule_bent', type: 'warning' },
    { name: t.relay, status: 'rejected', type: 'danger' },
  ];

  const getStatusColor = (type: string) => {
    if (type === 'success') return 'text-tangerine bg-tangerine/10';
    if (type === 'warning') return 'text-[#ff5050] bg-[#ff5050]/10';
    return 'text-stone bg-cloud-gray';
  };

  return (
    <div className="pt-24 pb-12 px-4 max-w-[1200px] mx-auto min-h-screen bg-cloud-gray">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h1 className="font-display font-black text-[42px] uppercase tracking-[-0.031em] text-ink-black mb-2 leading-[1.1]">{t.dashboard}</h1>
          <p className="text-[20px] text-stone font-medium tracking-[-0.031em]">{t.welcome}</p>
        </div>
        <button 
          onClick={() => setLang(l => l === 'en' ? 'id' : 'en')}
          className="flex items-center gap-2 bg-pure-white border border-mist-gray px-4 py-2 rounded-pills hover:border-tangerine transition-colors shadow-sm"
        >
          <Globe className="w-4 h-4 text-tangerine" />
          <span className="font-bold text-[12px] uppercase tracking-wider text-ink-black">{lang === 'en' ? 'English' : 'Bahasa'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-6">
        {/* Timer */}
        <div className="bg-pure-white rounded-cards p-6 border border-cloud-gray shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
            <Clock className="w-24 h-24 text-sky-tint" />
          </div>
          <h3 className="text-stone font-bold uppercase tracking-wider text-[12px] mb-4">{t.pickup_in}</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-display font-black text-[56px] text-ink-black tracking-[-0.028em] leading-[1.0]">{timeLeft.hours}</span>
            <span className="text-stone font-medium text-[20px]">{t.hours}</span>
            <span className="font-display font-black text-[56px] text-ink-black tracking-[-0.028em] leading-[1.0] ml-2">{timeLeft.minutes}</span>
            <span className="text-stone font-medium text-[20px]">{t.mins}</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-cloud-gray px-3 py-1.5 rounded-[12px] text-[16px] text-ink-black font-medium tracking-[-0.01em]">
            <Activity className="w-4 h-4 text-tangerine" />
            {t.dropoff}
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-pure-white rounded-cards p-6 border border-cloud-gray shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <CheckSquare className="w-5 h-5 text-hot-pink" />
            <h3 className="font-bold uppercase tracking-wider text-[12px] text-stone">{t.checklist}</h3>
          </div>
          <div className="space-y-3">
            {(Object.keys(checklist) as Array<keyof typeof checklist>).map((key) => (
              <label key={key} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-6 h-6 rounded-[8px] border-2 flex items-center justify-center transition-colors ${checklist[key] ? 'bg-hot-pink border-hot-pink' : 'border-mist-gray group-hover:border-stone'}`}>
                  {checklist[key] && <CheckSquare className="w-4 h-4 text-pure-white" />}
                </div>
                <span className={`font-medium tracking-[-0.01em] transition-colors text-[16px] ${checklist[key] ? 'text-ink-black' : 'text-stone'}`}>
                  {t[key as keyof typeof t]}
                </span>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={checklist[key]} 
                  onChange={() => toggleChecklist(key as keyof typeof checklist)} 
                />
              </label>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-[image:var(--gradient-coral-edge)] rounded-cards p-6 border border-transparent shadow-sm text-pure-white flex flex-col justify-center relative overflow-hidden">
          <h3 className="font-bold uppercase tracking-wider text-[12px] opacity-80 mb-6">{t.pricing}</h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={priceIdx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4"
            >
              <span className="text-5xl">{prices[priceIdx].flag}</span>
              <div>
                <div className="font-display font-black text-[42px] tracking-[-0.031em] leading-[1.1]">
                  {prices[priceIdx].value}
                </div>
                <div className="font-bold uppercase tracking-widest mt-1 opacity-70 text-[12px]">
                  {prices[priceIdx].currency}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] mb-6">
        {/* Activity & Lessons */}
        <div className="lg:col-span-2 bg-pure-white rounded-cards p-6 border border-cloud-gray shadow-sm flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="font-bold uppercase tracking-wider text-[12px] text-stone mb-6">{t.activities}</h3>
            <div className="space-y-4">
              {activities.map((act, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-[16px] bg-cloud-gray border border-transparent">
                  <span className="font-bold text-ink-black text-[16px] tracking-[-0.01em]">{act.name}</span>
                  <span className={`px-3 py-1 text-[12px] font-bold uppercase tracking-wider rounded-pills ${getStatusColor(act.type)}`}>
                    {t[act.status as keyof typeof t]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-px bg-cloud-gray hidden md:block" />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-sky-tint" />
              <h3 className="font-bold uppercase tracking-wider text-[12px] text-stone">{t.lessons}</h3>
            </div>
            <div className="bg-[#e5f1ff] border border-transparent rounded-[24px] p-6">
              <p className="text-ink-black font-medium leading-[1.2] text-[16px] tracking-[-0.01em]">
                {t.lesson_desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pure-white rounded-pills text-[12px] font-bold text-ink-black">#Sharing</span>
                <span className="px-3 py-1 bg-pure-white rounded-pills text-[12px] font-bold text-ink-black">#NoCompete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-pure-white rounded-cards p-6 border border-cloud-gray shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-5 h-5 text-tangerine" />
            <h3 className="font-bold uppercase tracking-wider text-[12px] text-stone">{t.badges}</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-4 bg-cloud-gray rounded-[16px] group hover:bg-[#fff0f0] transition-all">
              <Users className="w-8 h-8 text-tangerine mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-center text-stone group-hover:text-ink-black">Team Player</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-cloud-gray rounded-[16px] group hover:bg-[#e5f1ff] transition-all">
              <Heart className="w-8 h-8 text-sky-tint mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-center text-stone group-hover:text-ink-black">Sharer</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-cloud-gray rounded-[16px] group hover:bg-[#fef0ff] transition-all">
              <Star className="w-8 h-8 text-hot-pink mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-center text-stone group-hover:text-ink-black">Creative</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-cloud-gray/50 rounded-[16px] opacity-50">
              <Shield className="w-8 h-8 text-mist-gray mb-3" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-center text-mist-gray">Locked</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
        {/* Showcase Carousel */}
        <div className="bg-pure-white rounded-cards p-6 border border-cloud-gray shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Camera className="w-5 h-5 text-tangerine" />
              <h3 className="font-bold uppercase tracking-wider text-[12px] text-stone">{t.showcase}</h3>
            </div>
            <div className="flex gap-2">
              <button onClick={prevImage} className="w-8 h-8 rounded-full bg-cloud-gray flex items-center justify-center hover:bg-mist-gray transition-colors text-ink-black">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={nextImage} className="w-8 h-8 rounded-full bg-cloud-gray flex items-center justify-center hover:bg-mist-gray transition-colors text-ink-black">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative rounded-[24px] overflow-hidden aspect-video bg-ink-black shadow-xl-inset">
            <AnimatePresence initial={false}>
              <motion.img
                key={showcaseIdx}
                src={showcaseImages[showcaseIdx]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Showcase"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 z-10">
              {showcaseImages.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === showcaseIdx ? 'bg-tangerine w-4' : 'bg-pure-white/80'} transition-all`} />
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-pure-white rounded-cards p-6 border border-cloud-gray shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-5 h-5 text-hot-pink" />
            <h3 className="font-bold uppercase tracking-wider text-[12px] text-stone">{t.notes}</h3>
          </div>
          <div className="space-y-4 flex-1">
            <div className="bg-cloud-gray p-5 rounded-[24px] border border-transparent">
              <p className="text-ink-black font-medium leading-[1.2] text-[16px] tracking-[-0.01em]">"{t.note_1}"</p>
              <p className="text-[12px] text-tangerine mt-3 font-bold uppercase tracking-wider">— Coach Mike</p>
            </div>
            <div className="bg-cloud-gray p-5 rounded-[24px] border border-transparent">
              <p className="text-ink-black font-medium leading-[1.2] text-[16px] tracking-[-0.01em]">"{t.note_2}"</p>
              <p className="text-[12px] text-hot-pink mt-3 font-bold uppercase tracking-wider">— Coach Sarah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
