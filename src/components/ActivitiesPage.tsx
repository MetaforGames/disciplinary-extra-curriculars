import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Target, Star, Users, Camera, Heart, Trophy, Search, Play, Paintbrush, Droplets, Map, Music, Coffee } from 'lucide-react';

const activitiesData = [
  {
    id: 'obstacle-course',
    title: 'Obstacle Course',
    icon: Trophy,
    description: 'A physically demanding course where kids must work together to climb, crawl, and balance their way to the finish line.',
    objectives: ['Physical resilience', 'Team coordination', 'Problem solving'],
    enthusiasmHighlights: [
      'Team Alpha formed a human chain to get everyone over the 6-foot wall.',
      'Sarah cheered on her teammates even after she finished first.'
    ],
    participantHighlights: [
      'Leo conquered his fear of heights on the rope climb!',
      'Mia showed exceptional leadership by guiding the younger kids.'
    ],
    showcaseImages: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'relay-build',
    title: 'Relay Build',
    icon: Users,
    description: 'Teams race to collect materials and cooperatively build a stable structure before the time runs out.',
    objectives: ['Effective communication', 'Resource management', 'Shared decision making'],
    enthusiasmHighlights: [
      'The Blue Squad successfully built a tower 5 feet tall!',
      'Amazing compromise when two teams merged to build a mega-structure.'
    ],
    participantHighlights: [
      'Jordan was the master architect, planning the base.',
      'Emma ran the fastest laps to gather all the wood blocks.'
    ],
    showcaseImages: [
      'https://images.unsplash.com/photo-1517409217032-132d73ce0b28?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'art-jam',
    title: 'Art Jam',
    icon: Paintbrush,
    description: 'A collaborative, messy, large-scale painting session where everyone contributes to a giant canvas.',
    objectives: ['Creative expression', 'Non-verbal communication', 'Sharing space'],
    enthusiasmHighlights: [
      'The entire group managed to blend colors without arguing over the blue paint.',
      'A beautiful abstract masterpiece was created in just 30 minutes.'
    ],
    participantHighlights: [
      'Sam painted an incredible center motif.',
      'Chloe made sure everyone had enough brushes to use.'
    ],
    showcaseImages: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1460661419281-c025092d4838?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'blindfold-maze',
    title: 'Blindfold Maze',
    icon: Search,
    description: 'One teammate is blindfolded while the rest of the squad guides them through a complex sensory maze using only their voices.',
    objectives: ['Active listening', 'Trust building', 'Clear communication'],
    enthusiasmHighlights: [
      'Team Red navigated the tightest corner flawlessly by singing directions.',
      'Incredible patience shown when dealing with frustrating dead ends.'
    ],
    participantHighlights: [
      'Noah trusted his team completely and never peeked.',
      'Lily gave the most precise, calm directions in the chaos.'
    ],
    showcaseImages: [
      'https://images.unsplash.com/photo-1542841791-1925b02a2bf8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'scavenger-hunt',
    title: 'Scavenger Hunt',
    icon: Map,
    description: 'A sprawling, outdoor clue-solving adventure requiring physical agility and mental sharpness.',
    objectives: ['Critical thinking', 'Group consensus', 'Exploration'],
    enthusiasmHighlights: [
      'Found the hidden "Golden Carabiner" in record time!',
      'The squad voted fairly on which path to take at the crossroad.'
    ],
    participantHighlights: [
      'Alex solved the hardest riddle of the day.',
      'Zoe kept the map safe and organized the search party.'
    ],
    showcaseImages: [
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517409217032-132d73ce0b28?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'water-balloon',
    title: 'Water Balloon Game',
    icon: Droplets,
    description: 'A high-energy, cooling summer game focused on catching, throwing, and inevitably getting soaked.',
    objectives: ['Hand-eye coordination', 'Good sportsmanship', 'Handling surprise'],
    enthusiasmHighlights: [
      'The longest successful toss was 30 feet without popping!',
      'Everyone laughed and shook hands after the final splash battle.'
    ],
    participantHighlights: [
      'Max caught 5 balloons in a row.',
      'Ava graciously accepted getting completely soaked.'
    ],
    showcaseImages: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'freeze-dance',
    title: 'Freeze Dance',
    icon: Music,
    description: 'A disciplinary version of the classic game with complex poses, moving obstacles, and blasting music.',
    objectives: ['Body control', 'Focus under distraction', 'Rhythm'],
    enthusiasmHighlights: [
      'The whole group managed a one-legged freeze pose for 10 seconds.',
      'Hilarious attempts at freezing mid-jump.'
    ],
    participantHighlights: [
      'Oliver had the most creative freeze poses.',
      'Maya didn\'t flinch even when the foam noodles came out.'
    ],
    showcaseImages: [
      'https://images.unsplash.com/photo-1517409217032-132d73ce0b28?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'food-bev',
    title: 'Food & Bev',
    icon: Coffee,
    description: 'Kids learn to prepare healthy snacks, share portions equitably, and clean up their own mess.',
    objectives: ['Responsibility', 'Sharing', 'Basic life skills'],
    enthusiasmHighlights: [
      'Successfully made a 10-foot long fruit skewer together.',
      'Zero waste left at the picnic table today!'
    ],
    participantHighlights: [
      'Ethan made sure everyone got an equal slice of watermelon.',
      'Grace volunteered to wash the cups.'
    ],
    showcaseImages: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1460661419281-c025092d4838?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'team-huddle',
    title: 'Team Huddle',
    icon: Heart,
    description: 'The core reflection period where kids, staff, and parents gather to talk about the day, share feelings, and celebrate growth.',
    objectives: ['Emotional articulation', 'Community bonding', 'Constructive feedback'],
    enthusiasmHighlights: [
      'Parents joined in for the "Web of Compliments" string game.',
      'Staff, kids, and parents shared a massive group hug.'
    ],
    participantHighlights: [
      'Lucas openly shared how he overcame his frustration.',
      'Parents of Team Bravo praised the kids for their sportsmanship.'
    ],
    showcaseImages: [
      'https://images.unsplash.com/photo-1542841791-1925b02a2bf8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000'
    ]
  }
];

export default function ActivitiesPage() {
  const [activeId, setActiveId] = useState(activitiesData[0].id);
  const [showcaseIdx, setShowcaseIdx] = useState(0);

  const activeActivity = activitiesData.find(a => a.id === activeId) || activitiesData[0];
  const ActiveIcon = activeActivity.icon;

  const nextImage = () => setShowcaseIdx(p => (p + 1) % activeActivity.showcaseImages.length);
  const prevImage = () => setShowcaseIdx(p => (p - 1 + activeActivity.showcaseImages.length) % activeActivity.showcaseImages.length);

  return (
    <div className="pt-24 pb-12 px-4 max-w-[1200px] mx-auto min-h-screen bg-pure-white">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="font-display font-black text-[56px] uppercase tracking-[-0.03em] text-ink-black mb-4 leading-[1.0]">
          Program <span className="text-tangerine">Activities</span>
        </h1>
        <p className="text-[20px] text-stone font-medium max-w-2xl tracking-[-0.031em] leading-[1.2]">
          Explore our disciplinary extracurricular challenges designed to push boundaries and build social smarts.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:w-1/3 xl:w-1/4 space-y-2">
          {activitiesData.map(activity => {
            const Icon = activity.icon;
            const isActive = activity.id === activeId;
            return (
              <button
                key={activity.id}
                onClick={() => { setActiveId(activity.id); setShowcaseIdx(0); }}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-cards transition-all duration-300 text-left border ${isActive ? 'bg-pure-white text-ink-black font-bold border-tangerine shadow-sm' : 'bg-cloud-gray text-stone hover:bg-mist-gray border-transparent font-bold'}`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'text-tangerine' : 'text-stone'}`} />
                <span className="text-[16px] uppercase tracking-[-0.01em]">{activity.title}</span>
              </button>
            );
          })}
        </div>

        {/* Activity Content */}
        <div className="lg:w-2/3 xl:w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeActivity.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Top Card: Description & Objectives */}
              <div className="bg-pure-white border border-cloud-gray rounded-cards p-8 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                  <ActiveIcon className="w-48 h-48 text-tangerine" />
                </div>
                
                <div className="relative z-10">
                  <h2 className="font-display font-black text-[42px] text-ink-black uppercase tracking-[-0.031em] mb-4 flex items-center gap-4 leading-[1.1]">
                    {activeActivity.title}
                  </h2>
                  <p className="text-[20px] text-stone leading-[1.2] tracking-[-0.031em] mb-8 max-w-3xl font-medium">
                    {activeActivity.description}
                  </p>

                  <div>
                    <h3 className="flex items-center gap-2 font-bold uppercase tracking-wider text-[12px] text-tangerine mb-4">
                      <Target className="w-5 h-5" /> Objectives
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {activeActivity.objectives.map((obj, i) => (
                        <span key={i} className="px-4 py-2 bg-cloud-gray rounded-pills text-[12px] font-bold text-ink-black tracking-[-0.01em]">
                          {obj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                {/* Enthusiasm Highlights */}
                <div className="bg-pure-white border border-cloud-gray rounded-cards p-8 shadow-sm">
                  <h3 className="flex items-center gap-2 font-bold uppercase tracking-wider text-[12px] text-hot-pink mb-6">
                    <Star className="w-5 h-5" /> Enthusiasm Highlights
                  </h3>
                  <ul className="space-y-4 text-stone font-medium text-[16px] tracking-[-0.01em] leading-[1.2]">
                    {activeActivity.enthusiasmHighlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-hot-pink mt-1">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Participant Highlights */}
                <div className="bg-pure-white border border-cloud-gray rounded-cards p-8 shadow-sm">
                  <h3 className="flex items-center gap-2 font-bold uppercase tracking-wider text-[12px] text-sky-tint mb-6">
                    <Users className="w-5 h-5 text-sky-tint" /> Participant Shoutouts
                  </h3>
                  <ul className="space-y-4 text-stone font-medium text-[16px] tracking-[-0.01em] leading-[1.2]">
                    {activeActivity.participantHighlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-sky-tint mt-1">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Showcase Carousel */}
              <div className="bg-pure-white border border-cloud-gray rounded-cards p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="flex items-center gap-2 font-bold uppercase tracking-wider text-[12px] text-tangerine">
                    <Camera className="w-5 h-5" /> Action Showcase
                  </h3>
                  <div className="flex gap-2">
                    <button onClick={prevImage} className="w-10 h-10 rounded-full bg-cloud-gray flex items-center justify-center hover:bg-mist-gray transition-colors text-ink-black">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={nextImage} className="w-10 h-10 rounded-full bg-cloud-gray flex items-center justify-center hover:bg-mist-gray transition-colors text-ink-black">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="relative rounded-[24px] overflow-hidden aspect-video bg-ink-black shadow-xl-inset">
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={`${activeActivity.id}-${showcaseIdx}`}
                      src={activeActivity.showcaseImages[showcaseIdx]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt={`${activeActivity.title} Showcase`}
                    />
                  </AnimatePresence>
                  
                  {/* Team Huddle Overlay for the Team Huddle Activity */}
                  {activeActivity.id === 'team-huddle' && (
                    <div className="absolute bottom-4 left-4 bg-pure-white/80 backdrop-blur-md px-4 py-2 rounded-pills border border-pure-white z-10 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-hot-pink" />
                      <span className="text-[12px] font-bold uppercase text-ink-black tracking-wider">Staff, Kids & Parents</span>
                    </div>
                  )}

                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                    {activeActivity.showcaseImages.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i === showcaseIdx ? 'bg-tangerine w-6' : 'bg-pure-white/80'} transition-all`} />
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
