import { ArrowRight, HeartPulse, User, Users, LocateFixed, Smile } from 'lucide-react';

export default function CareersPage() {
  const positions = [
    {
      title: 'Team Lead & Supervisor',
      icon: Users,
      description: 'Oversee daily operations, manage the coaching staff, and ensure all activities run smoothly and safely. You will be the point person for parent communications and staff coordination.',
      color: 'bg-tangerine',
      textColor: 'text-tangerine'
    },
    {
      title: 'Coach (First Aid Training required)',
      icon: HeartPulse,
      description: 'Lead the kids through our programs. Must have a valid First Aid certification and a passion for working with children in a dynamic, high-energy environment.',
      color: 'bg-hot-pink',
      textColor: 'text-hot-pink'
    },
    {
      title: 'Parent Volunteers',
      icon: User,
      description: 'Join the fun! Depending on availability, parent volunteers can assist with activities. As a thank you, your kids are allowed to join in for free on the days you volunteer.',
      color: 'bg-sky-tint',
      textColor: 'text-sky-tint'
    },
    {
      title: 'Runner',
      icon: LocateFixed,
      description: 'Crucial support role for activities requiring off-site tasks. You will be dispatched to specific locations to return with required items or complete tasks to keep the games flowing.',
      color: 'bg-[#ff8465]',
      textColor: 'text-coral-edge'
    }
  ];

  return (
    <div className="pt-24 pb-24 px-4 max-w-[1200px] mx-auto min-h-screen bg-pure-white">
      <div className="mb-16 text-center md:text-left">
        <h1 className="font-display font-black text-[56px] md:text-[80px] uppercase tracking-[-0.03em] text-ink-black mb-4 leading-[1.0]">
          Join <span className="text-tangerine">disciplinary.</span>
        </h1>
        <p className="text-[20px] text-stone font-medium max-w-2xl tracking-[-0.031em] leading-[1.2]">
          We are looking for energetic, responsible, and fun individuals to join our team. 
          Help us build an amazing experience for the kids.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {positions.map((pos, idx) => {
          const Icon = pos.icon;
          return (
            <div key={idx} className="bg-cloud-gray rounded-cards p-8 shadow-sm flex flex-col h-full border border-transparent hover:border-mist-gray transition-all">
              <div className={`w-16 h-16 rounded-icons ${pos.color} flex items-center justify-center mb-6 shadow-xl-inset`}>
                <Icon className="w-8 h-8 text-pure-white" />
              </div>
              <h3 className={`font-display font-black text-[32px] tracking-[-0.031em] mb-4 leading-[1.1] ${pos.textColor}`}>
                {pos.title}
              </h3>
              <p className="text-[16px] text-ink-black font-medium leading-[1.2] tracking-[-0.01em] mb-8 flex-1">
                {pos.description}
              </p>
              <button className="self-start px-6 py-3 bg-pure-white text-ink-black rounded-pills font-bold text-[16px] tracking-[-0.01em] shadow-sm hover:bg-mist-gray transition-colors border border-mist-gray">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
