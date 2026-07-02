import { ShieldAlert, Users, Lightbulb, Handshake } from 'lucide-react';

const badges = [
  {
    title: "Teamwork",
    description: "Conquer obstacles together. No one is left behind.",
    icon: Users,
    color: "text-brand"
  },
  {
    title: "Social Smarts",
    description: "Develop emotional intelligence through high-pressure fun.",
    icon: ShieldAlert,
    color: "text-blue-400"
  },
  {
    title: "Creative Thinking",
    description: "Invent new ways to navigate our disciplinary courses.",
    icon: Lightbulb,
    color: "text-purple-400"
  },
  {
    title: "Sharing",
    description: "Share the glory, share the gear, share the experience.",
    icon: Handshake,
    color: "text-pink-400"
  }
];

export default function BadgeHighlights() {
  return (
    <section className="py-24 bg-cloud-gray">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-[56px] text-ink-black tracking-[-0.028em] leading-[1.1]">Core <span className="text-hot-pink">Values</span></h2>
          <p className="mt-6 text-stone max-w-2xl mx-auto text-[20px] font-medium tracking-[-0.031em]">We track participation and growth across four key pillars.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            // Map colors to the new theme
            const colorClass = idx === 0 ? 'text-tangerine bg-pure-white' : 
                               idx === 1 ? 'text-hot-pink bg-pure-white' : 
                               idx === 2 ? 'text-sky-tint bg-pure-white' : 
                               'text-coral-edge bg-pure-white';
            const iconWrapClass = idx === 0 ? 'bg-tangerine' : 
                                  idx === 1 ? 'bg-hot-pink' : 
                                  idx === 2 ? 'bg-[#99eeff]' : 
                                  'bg-[#ff8465]';

            return (
              <div key={idx} className={`${colorClass} p-[24px] rounded-cards shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
                <div className={`w-16 h-16 rounded-icons ${iconWrapClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl-inset`}>
                  <Icon className="w-8 h-8 text-pure-white" />
                </div>
                <h3 className="font-display font-black text-[32px] text-ink-black mb-3 tracking-[-0.031em] leading-[1.2]">{badge.title}</h3>
                <p className="text-stone text-[16px] font-medium leading-[1.2] tracking-[-0.01em]">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
