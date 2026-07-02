import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UploadCloud, BookOpen, Activity, Users, AlertTriangle, 
  Star, Camera, Edit3, Tag, MessageSquare, Sparkles, Image as ImageIcon,
  CheckCircle2, Plus, ArrowRight, ShieldAlert, FileText
} from 'lucide-react';

const KIDS = ['Alex', 'Mia', 'Leo', 'Sarah', 'Noah', 'Lily', 'Jordan', 'Emma', 'Sam', 'Chloe'];
const ACTIVITIES = [
  { id: 'obstacle', name: 'Obstacle Course', desc: 'Physically demanding course.', goals: ['Resilience', 'Coordination'], participants: ['Alex', 'Mia', 'Leo'] },
  { id: 'art', name: 'Art Jam', desc: 'Large scale collaborative painting.', goals: ['Expression', 'Sharing space'], participants: ['Sarah', 'Noah', 'Lily'] },
];

export default function StaffDashboard() {
  const [activeTab, setActiveTab] = useState('upload');
  
  // States for various forms
  const [uploadTags, setUploadTags] = useState<string[]>([]);
  const [journalText, setJournalText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showcaseImages, setShowcaseImages] = useState<string[]>([
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80'
  ]);
  const [incidents, setIncidents] = useState<{id: number, type: string, kids: string[], solution: string, status: string}[]>([
    { id: 1, type: 'Fighting', kids: ['Alex', 'Jordan'], solution: 'Physical: Separated into different teams for relay.', status: 'Resolved' }
  ]);
  const [interactions, setInteractions] = useState<{id: number, kidA: string, kidB: string, topic: string}[]>([
    { id: 1, kidA: 'Mia', kidB: 'Lily', topic: 'Collaborated on painting the center motif' }
  ]);
  const [highlights, setHighlights] = useState<{id: number, entity: string, note: string}[]>([
    { id: 1, entity: 'Team Alpha', note: 'Showed amazing spirit during the mud run!' }
  ]);

  const toggleTag = (kid: string, list: string[], setList: (l: string[]) => void) => {
    setList(list.includes(kid) ? list.filter(k => k !== kid) : [...list, kid]);
  };

  const handleAiGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setJournalText("Alex demonstrated strong problem-solving skills today during the obstacle course. Initially frustrated by the wall climb, Alex took a moment to observe teammates and then successfully navigated the obstacle by changing footing strategy. Great resilience shown!");
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-12 px-4 max-w-[1200px] mx-auto min-h-screen flex flex-col md:flex-row gap-8 bg-pure-white">
      {/* Sidebar Navigation */}
      <div className="md:w-64 shrink-0 space-y-2">
        <div className="mb-8 px-4">
          <h2 className="font-display font-black text-[32px] uppercase tracking-[-0.031em] text-ink-black leading-[1.2]">Staff HQ</h2>
          <p className="text-[12px] text-stone font-bold uppercase tracking-wider">Internal System</p>
        </div>

        {[
          { id: 'upload', icon: UploadCloud, label: 'Upload Center' },
          { id: 'journal', icon: Edit3, label: 'AI Journals' },
          { id: 'activities', icon: Activity, label: 'Activities' },
          { id: 'interactions', icon: Users, label: 'Interactions' },
          { id: 'monitor', icon: ShieldAlert, label: 'Incident Monitor' },
          { id: 'highlights', icon: Star, label: 'Highlights' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-cards transition-all font-bold text-[16px] tracking-[-0.01em] ${
              activeTab === tab.id 
                ? 'bg-tangerine text-pure-white shadow-sm' 
                : 'bg-cloud-gray text-stone hover:bg-mist-gray hover:text-ink-black border border-transparent'
            }`}
          >
            <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-pure-white' : 'text-stone'}`} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          
          {/* UPLOAD CENTER & SHOWCASE */}
          {activeTab === 'upload' && (
            <motion.div key="upload" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
              <div className="bg-pure-white rounded-cards p-6 md:p-8 border border-cloud-gray shadow-sm">
                <h3 className="font-display font-black text-[32px] uppercase tracking-[-0.031em] mb-6 flex items-center gap-3 text-ink-black leading-[1.2]">
                  <UploadCloud className="text-tangerine w-8 h-8" /> Media Upload
                </h3>
                
                <div className="border-2 border-dashed border-mist-gray hover:border-tangerine transition-colors rounded-[24px] p-12 flex flex-col items-center justify-center text-center cursor-pointer bg-cloud-gray mb-6">
                  <Camera className="w-12 h-12 text-stone mb-4" />
                  <p className="text-ink-black font-medium mb-2 tracking-[-0.01em] text-[16px]">Drag & drop photos or videos</p>
                  <p className="text-[12px] text-stone font-bold uppercase tracking-wider">Supports JPG, PNG, MP4</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-6">
                  <div>
                    <label className="block text-[12px] font-bold text-stone uppercase tracking-wider mb-2">Activity</label>
                    <select className="w-full bg-cloud-gray border border-transparent rounded-[16px] px-4 py-3 text-ink-black focus:border-tangerine outline-none transition-colors appearance-none font-medium">
                      <option value="">Select Activity...</option>
                      {ACTIVITIES.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-stone uppercase tracking-wider mb-2">Timeline / Time</label>
                    <input type="time" className="w-full bg-cloud-gray border border-transparent rounded-[16px] px-4 py-3 text-ink-black focus:border-tangerine outline-none transition-colors font-medium" />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-stone mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4" /> Tag Kids
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {KIDS.map(kid => (
                      <button 
                        key={kid}
                        onClick={() => toggleTag(kid, uploadTags, setUploadTags)}
                        className={`px-4 py-2 rounded-pills text-[16px] font-bold transition-colors tracking-[-0.01em] ${uploadTags.includes(kid) ? 'bg-tangerine text-pure-white' : 'bg-cloud-gray text-stone hover:bg-mist-gray'}`}
                      >
                        {kid}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-tangerine text-pure-white font-bold py-4 rounded-pills hover:opacity-90 transition-opacity flex items-center justify-center gap-3 tracking-[-0.01em] text-[16px]">
                  <UploadCloud className="w-5 h-5" /> Upload to Showcase
                  <div className="w-6 h-6 bg-pure-white rounded-[6px] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[image:var(--gradient-prism-wash)]"></div>
                  </div>
                </button>
              </div>

              {/* Showcase Carousel Mini-View */}
              <div className="bg-pure-white rounded-cards p-6 border border-cloud-gray shadow-sm">
                <h3 className="font-bold uppercase tracking-wider text-[12px] text-stone mb-4">Recent Showcase Uploads ({showcaseImages.length})</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                  {showcaseImages.map((img, i) => (
                    <img key={i} src={img} alt="Showcase" className="w-48 h-32 object-cover rounded-[16px] snap-start border border-cloud-gray shrink-0 shadow-sm" />
                  ))}
                  <div className="w-48 h-32 rounded-[16px] border-2 border-dashed border-mist-gray flex items-center justify-center shrink-0 text-stone snap-start font-medium text-[16px] bg-cloud-gray/50">
                    More...
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* AI JOURNALS */}
          {activeTab === 'journal' && (
            <motion.div key="journal" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
              <div className="bg-pure-white rounded-cards p-6 md:p-8 border border-cloud-gray shadow-sm">
                <h3 className="font-display font-black text-[32px] uppercase tracking-[-0.031em] mb-6 flex items-center gap-3 text-ink-black leading-[1.2]">
                  <Edit3 className="text-hot-pink w-8 h-8" /> Quick Notes & Profiles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-6">
                  <div>
                    <label className="block text-[12px] font-bold text-stone uppercase tracking-wider mb-2">Select Kid</label>
                    <select className="w-full bg-cloud-gray border border-transparent rounded-[16px] px-4 py-3 text-ink-black focus:border-hot-pink outline-none transition-colors appearance-none font-medium">
                      {KIDS.map(k => <option key={k} value={k}>{k}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-stone uppercase tracking-wider mb-2">Reference Photo (Optional)</label>
                    <div className="w-full bg-cloud-gray border border-transparent rounded-[16px] px-4 py-3 text-stone flex items-center gap-3 cursor-pointer hover:border-mist-gray transition-colors font-medium">
                      <ImageIcon className="w-5 h-5" /> Select Photo
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-end mb-2">
                    <label className="block text-[12px] font-bold text-stone uppercase tracking-wider">Journal Entry</label>
                    <button 
                      onClick={handleAiGenerate}
                      disabled={isGenerating}
                      className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-hot-pink bg-hot-pink/10 px-4 py-2 rounded-pills hover:bg-hot-pink/20 transition-colors disabled:opacity-50"
                    >
                      <Sparkles className="w-4 h-4" /> {isGenerating ? 'Generating...' : 'AI Generate'}
                    </button>
                  </div>
                  <textarea 
                    value={journalText}
                    onChange={(e) => setJournalText(e.target.value)}
                    className="w-full bg-cloud-gray border border-transparent rounded-[24px] p-6 text-ink-black focus:border-hot-pink outline-none transition-colors h-40 resize-none font-medium text-[16px] leading-[1.2] tracking-[-0.01em]"
                    placeholder="Write notes here, or attach a photo and click AI Generate for a quick summary..."
                  />
                </div>

                <button className="bg-hot-pink text-pure-white font-bold px-6 py-4 rounded-pills hover:opacity-90 transition-opacity tracking-[-0.01em] text-[16px]">
                  Save Journal Profile
                </button>
              </div>
            </motion.div>
          )}

          {/* ACTIVITIES */}
          {activeTab === 'activities' && (
            <motion.div key="activities" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
              {ACTIVITIES.map(act => (
                <div key={act.id} className="bg-pure-white rounded-cards p-6 border border-cloud-gray shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display font-black text-[32px] uppercase tracking-[-0.031em] text-ink-black leading-[1.2]">{act.name}</h3>
                      <p className="text-stone mt-1 font-medium text-[16px] tracking-[-0.01em]">{act.desc}</p>
                    </div>
                    <button className="text-tangerine hover:opacity-80 transition-opacity">
                      <Edit3 className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="text-[12px] font-bold uppercase tracking-wider text-stone mb-2">Objectives</h4>
                      <div className="flex flex-wrap gap-2">
                        {act.goals.map(g => (
                          <span key={g} className="px-4 py-2 bg-cloud-gray rounded-pills text-[16px] text-ink-black tracking-[-0.01em] font-medium">{g}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[12px] font-bold uppercase tracking-wider text-stone mb-2">Participants</h4>
                      <div className="flex flex-wrap gap-2">
                        {act.participants.map(p => (
                          <span key={p} className="px-4 py-2 bg-sky-tint/20 text-ink-black rounded-pills text-[16px] tracking-[-0.01em] font-bold">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Activity Product Showcase */}
                  <div className="mt-8 pt-6 border-t border-cloud-gray">
                    <h4 className="text-[12px] font-bold uppercase tracking-wider text-stone mb-4 flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-hot-pink" /> Activity Products & Builds
                    </h4>
                    <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
                      <div className="w-32 h-24 rounded-[16px] bg-cloud-gray flex items-center justify-center shrink-0 snap-start text-[12px] font-bold uppercase tracking-wider text-stone flex-col gap-2 shadow-xl-inset">
                        <ImageIcon className="w-6 h-6 opacity-50" /> Image 1
                      </div>
                      <div className="w-32 h-24 rounded-[16px] bg-cloud-gray flex items-center justify-center shrink-0 snap-start text-[12px] font-bold uppercase tracking-wider text-stone flex-col gap-2 shadow-xl-inset">
                        <ImageIcon className="w-6 h-6 opacity-50" /> Image 2
                      </div>
                      <button className="w-32 h-24 rounded-[16px] border-2 border-dashed border-mist-gray hover:border-hot-pink text-stone hover:text-hot-pink flex items-center justify-center shrink-0 snap-start transition-colors flex-col gap-1 font-bold text-[12px] uppercase tracking-wider">
                        <Plus className="w-5 h-5" /> Add Build
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* INTERACTIONS TRACKER */}
          {activeTab === 'interactions' && (
            <motion.div key="interactions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
              <div className="bg-pure-white rounded-cards p-6 border border-cloud-gray shadow-sm mb-6">
                <h3 className="font-display font-black text-[32px] uppercase tracking-[-0.031em] mb-6 flex items-center gap-3 text-ink-black leading-[1.2]">
                  <MessageSquare className="text-sky-tint w-8 h-8" /> Log Interaction
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-4">
                  <div>
                    <label className="block text-[12px] font-bold text-stone uppercase tracking-wider mb-2">Kid A</label>
                    <select className="w-full bg-cloud-gray border border-transparent rounded-[16px] px-4 py-3 text-ink-black outline-none font-medium">
                      {KIDS.map(k => <option key={k} value={k}>{k}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-stone uppercase tracking-wider mb-2">Kid B</label>
                    <select className="w-full bg-cloud-gray border border-transparent rounded-[16px] px-4 py-3 text-ink-black outline-none font-medium">
                      {KIDS.map(k => <option key={k} value={k}>{k}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-[12px] font-bold text-stone uppercase tracking-wider mb-2">Topic / Activity</label>
                  <input type="text" className="w-full bg-cloud-gray border border-transparent rounded-[16px] px-4 py-3 text-ink-black outline-none font-medium" placeholder="e.g. Collaborated on building the tower base" />
                </div>
                <button className="bg-sky-tint text-ink-black font-bold px-6 py-4 rounded-pills hover:opacity-90 transition-opacity tracking-[-0.01em] text-[16px]">
                  Log Interaction
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-stone mb-4">Recent Interactions</h4>
                {interactions.map(int => (
                  <div key={int.id} className="bg-pure-white border border-cloud-gray p-6 rounded-cards flex items-center gap-4 shadow-sm">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-bold text-[16px] tracking-[-0.01em] text-ink-black bg-tangerine/20 px-3 py-1 rounded-pills">{int.kidA}</span>
                      <ArrowRight className="w-4 h-4 text-stone" />
                      <span className="font-bold text-[16px] tracking-[-0.01em] text-ink-black bg-hot-pink/20 px-3 py-1 rounded-pills">{int.kidB}</span>
                    </div>
                    <div className="w-px h-8 bg-cloud-gray hidden md:block"></div>
                    <p className="text-stone text-[16px] font-medium leading-[1.2]">{int.topic}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* INCIDENT MONITOR */}
          {activeTab === 'monitor' && (
            <motion.div key="monitor" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
              <div className="bg-[#fff0f0] border border-transparent rounded-cards p-6 md:p-8 mb-6 shadow-sm">
                <h3 className="font-display font-black text-[32px] uppercase tracking-[-0.031em] mb-6 flex items-center gap-3 text-ink-black leading-[1.2]">
                  <AlertTriangle className="w-8 h-8 text-[#ff5050]" /> Record Incident
                </h3>
                
                <div className="mb-6">
                  <label className="block text-[12px] font-bold text-[#ff5050] uppercase tracking-wider mb-2">Involved Kids</label>
                  <div className="flex flex-wrap gap-2">
                    {KIDS.map(kid => (
                      <button key={kid} className="px-4 py-2 rounded-pills text-[16px] tracking-[-0.01em] font-bold bg-pure-white text-stone hover:text-ink-black border border-mist-gray">
                        {kid}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-6">
                  <div className="bg-pure-white p-6 rounded-[24px] border border-mist-gray shadow-sm">
                    <h4 className="font-bold text-ink-black mb-2 text-[16px] tracking-[-0.01em]">Physical Solution</h4>
                    <p className="text-[16px] font-medium text-stone mb-6 leading-[1.2]">Separate parties into different teams for next round.</p>
                    <button className="w-full bg-[#ff5050]/10 text-[#ff5050] hover:bg-[#ff5050] hover:text-pure-white transition-colors font-bold py-3 rounded-pills text-[16px] tracking-[-0.01em]">
                      Apply Physical Separation
                    </button>
                  </div>
                  <div className="bg-pure-white p-6 rounded-[24px] border border-mist-gray shadow-sm">
                    <h4 className="font-bold text-ink-black mb-2 text-[16px] tracking-[-0.01em]">Verbal Solution</h4>
                    <p className="text-[16px] font-medium text-stone mb-4 leading-[1.2]">Facilitate discussion, track keywords from conversation.</p>
                    <input type="text" placeholder="Keywords: sharing, unfair, sorry..." className="w-full bg-cloud-gray border border-transparent rounded-[16px] px-4 py-3 text-[16px] font-medium text-ink-black outline-none mb-4" />
                    <button className="w-full bg-sky-tint/20 text-ink-black hover:bg-sky-tint transition-colors font-bold py-3 rounded-pills text-[16px] tracking-[-0.01em]">
                      Log Discussion
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-stone mb-4">Incident History</h4>
                {incidents.map(inc => (
                  <div key={inc.id} className="bg-pure-white border border-cloud-gray p-6 rounded-cards shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-[#ff5050]/10 text-[#ff5050] text-[12px] font-bold uppercase tracking-wider rounded-pills">{inc.type}</span>
                        <span className="text-ink-black font-bold text-[16px] tracking-[-0.01em]">{inc.kids.join(' & ')}</span>
                      </div>
                      <span className="text-[12px] font-bold text-tangerine flex items-center gap-1 uppercase tracking-wider"><CheckCircle2 className="w-4 h-4" /> {inc.status}</span>
                    </div>
                    <p className="text-[16px] font-medium text-stone leading-[1.2]">
                      <strong className="text-ink-black font-bold">Resolution:</strong> {inc.solution}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* HIGHLIGHTS */}
          {activeTab === 'highlights' && (
            <motion.div key="highlights" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
              <div className="bg-pure-white rounded-cards p-6 md:p-8 border border-cloud-gray shadow-sm mb-6">
                <h3 className="font-display font-black text-[32px] uppercase tracking-[-0.031em] mb-6 flex items-center gap-3 text-ink-black leading-[1.2]">
                  <Star className="w-8 h-8 text-tangerine" /> Flag Enthusiasm
                </h3>
                
                <div className="mb-4">
                  <label className="block text-[12px] font-bold text-stone uppercase tracking-wider mb-2">Individual or Team Name</label>
                  <input type="text" className="w-full bg-cloud-gray border border-transparent rounded-[16px] px-4 py-3 text-ink-black outline-none font-medium" placeholder="e.g. Team Alpha or Leo" />
                </div>
                <div className="mb-6">
                  <label className="block text-[12px] font-bold text-stone uppercase tracking-wider mb-2">Note of Great Spirit</label>
                  <textarea className="w-full bg-cloud-gray border border-transparent rounded-[24px] p-6 text-ink-black outline-none h-32 resize-none font-medium" placeholder="What did they do?" />
                </div>
                <button className="bg-tangerine text-pure-white font-bold px-8 py-4 rounded-pills hover:opacity-90 transition-opacity flex items-center gap-3 text-[16px] tracking-[-0.01em]">
                  <Star className="w-5 h-5 fill-pure-white" /> Add Highlight
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map(hl => (
                  <div key={hl.id} className="bg-[#fff7f0] border border-transparent p-6 rounded-cards relative overflow-hidden shadow-sm">
                    <Star className="absolute -right-4 -top-4 w-32 h-32 text-tangerine/5" />
                    <h4 className="font-bold text-ink-black text-[24px] tracking-[-0.031em] mb-2 relative z-10">{hl.entity}</h4>
                    <p className="text-stone text-[16px] font-medium leading-[1.2] relative z-10">{hl.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
