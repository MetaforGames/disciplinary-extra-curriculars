import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, Check, AlertTriangle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function SignUpModal({ isOpen, onClose, onSuccess }: Props) {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    medicalInfo: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    lessonGoal: 'teamwork',
    photoConsent: false,
    boundaryConsent: false,
  });

  const updateForm = (key: keyof typeof formData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 0));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      >
        <motion.div 
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className="bg-dark text-white rounded-3xl w-full max-w-2xl overflow-hidden border border-white/10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10 bg-darker">
            <h2 className="font-display font-black text-2xl uppercase tracking-tight">Join the Squad</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex h-1 bg-white/5">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`flex-1 transition-colors duration-300 ${i <= step ? 'bg-brand' : 'bg-transparent'}`} 
              />
            ))}
          </div>

          {/* Content */}
          <div className="p-8 flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="font-bold text-xl uppercase tracking-wider text-brand mb-6">1. Recruit Info</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Child's Name</label>
                    <input type="text" value={formData.childName} onChange={e => updateForm('childName', e.target.value)} className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="e.g. Alex" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Age</label>
                    <input type="number" value={formData.childAge} onChange={e => updateForm('childAge', e.target.value)} className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="e.g. 10" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Medical Conditions / Allergies</label>
                    <textarea value={formData.medicalInfo} onChange={e => updateForm('medicalInfo', e.target.value)} className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors h-24 resize-none" placeholder="None" />
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="font-bold text-xl uppercase tracking-wider text-brand mb-6">2. Parent & Goals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Parent's Name</label>
                      <input type="text" value={formData.parentName} onChange={e => updateForm('parentName', e.target.value)} className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                      <input type="tel" value={formData.parentPhone} onChange={e => updateForm('parentPhone', e.target.value)} className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="+1 ..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input type="email" value={formData.parentEmail} onChange={e => updateForm('parentEmail', e.target.value)} className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Primary Lesson Goal</label>
                    <select value={formData.lessonGoal} onChange={e => updateForm('lessonGoal', e.target.value)} className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors appearance-none">
                      <option value="teamwork">Improving Teamwork & Sharing</option>
                      <option value="confidence">Building Confidence & Leadership</option>
                      <option value="resilience">Handling Failure & Resilience</option>
                      <option value="social">Social Smarts & Empathy</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <h3 className="font-bold text-xl uppercase tracking-wider text-brand mb-6">3. Agreements</h3>
                  
                  <div className="space-y-4">
                    <label className="flex items-start gap-4 p-4 border border-white/10 rounded-xl bg-white/5 cursor-pointer hover:border-brand/50 transition-colors">
                      <div className={`mt-0.5 w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${formData.photoConsent ? 'bg-brand border-brand' : 'border-gray-500'}`}>
                        {formData.photoConsent && <Check className="w-4 h-4 text-darker" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Media & Photo Consent</h4>
                        <p className="text-sm text-gray-400">I agree to let disciplinary. capture photos/videos of my child to be shared in the Showcase and Parent Dashboard.</p>
                      </div>
                      <input type="checkbox" className="hidden" checked={formData.photoConsent} onChange={e => updateForm('photoConsent', e.target.checked)} />
                    </label>

                    <label className="flex items-start gap-4 p-4 border border-white/10 rounded-xl bg-white/5 cursor-pointer hover:border-brand/50 transition-colors">
                      <div className={`mt-0.5 w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${formData.boundaryConsent ? 'bg-brand border-brand' : 'border-gray-500'}`}>
                        {formData.boundaryConsent && <Check className="w-4 h-4 text-darker" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Push Boundaries Consent</h4>
                        <p className="text-sm text-gray-400">I understand this is a disciplinary sports program. I authorize the staff to encourage my child to push their physical and mental boundaries safely.</p>
                      </div>
                      <input type="checkbox" className="hidden" checked={formData.boundaryConsent} onChange={e => updateForm('boundaryConsent', e.target.checked)} />
                    </label>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                    <div className="flex gap-3 mb-4 text-red-400">
                      <AlertTriangle className="w-6 h-6 shrink-0" />
                      <h4 className="font-bold uppercase tracking-wider">Crucial Disclaimer</h4>
                    </div>
                    <blockquote className="text-lg text-white font-medium italic border-l-2 border-red-400 pl-4 mb-4">
                      "Kids are gonna get hurt, scream and cry. Don't let a sitter handle the emotional moment. We'll handle it!"
                    </blockquote>
                    <p className="text-sm text-red-200/80 leading-relaxed">
                      <strong>Injury SOP:</strong> In the event of an injury, the child will be immediately brought to the nearest partnered clinic. Parents will be contacted immediately. By proceeding, you acknowledge and accept these terms.
                    </p>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="font-bold text-xl uppercase tracking-wider text-brand mb-6">4. Summary & Payment</h3>
                  
                  <div className="bg-darker rounded-xl p-6 border border-white/10 mb-6">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                      <span className="text-gray-400">Recruit</span>
                      <span className="font-bold text-white">{formData.childName || '—'}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                      <span className="text-gray-400">Program</span>
                      <span className="font-bold text-white">Full Season</span>
                    </div>
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-bold text-white">Total</span>
                      <span className="font-display font-black text-brand">$32.00</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Credit Card Details</label>
                    <div className="space-y-3">
                      <input type="text" className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors font-mono" placeholder="0000 0000 0000 0000" />
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors font-mono" placeholder="MM/YY" />
                        <input type="text" className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors font-mono" placeholder="CVC" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Controls */}
          <div className="p-6 border-t border-white/10 bg-darker flex justify-between items-center">
            {step > 0 ? (
              <button onClick={prevStep} className="flex items-center gap-2 text-gray-400 hover:text-white font-bold px-4 py-2 rounded-full hover:bg-white/5 transition-colors">
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
            ) : <div />}
            
            {step < 3 ? (
              <button onClick={nextStep} className="flex items-center gap-2 bg-brand text-darker font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                Next Step <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button onClick={() => { if(onSuccess) onSuccess(); else onClose(); }} className="flex items-center gap-2 bg-brand text-darker font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                Complete Payment <Check className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
