/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import BadgeHighlights from './components/BadgeHighlights';
import Motivational from './components/Motivational';
import Footer from './components/Footer';
import ParentDashboard from './components/ParentDashboard';
import SignUpModal from './components/SignUpModal';
import ActivitiesPage from './components/ActivitiesPage';
import StaffDashboard from './components/StaffDashboard';
import LoginPortal from './components/LoginPortal';
import KidDashboard from './components/KidDashboard';
import ThankYouPage from './components/ThankYouPage';
import CareersPage from './components/CareersPage';
import MascotOverlay from './components/MascotOverlay';

export default function App() {
  const [view, setView] = useState<'landing' | 'dashboard' | 'activities' | 'staff' | 'login' | 'kid-dashboard' | 'thank-you' | 'careers'>('landing');
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pure-white text-ink-black selection:bg-sky-tint selection:text-ink-black font-sans font-medium">
      <Navbar setView={setView} onSignUp={() => setIsSignUpOpen(true)} />
      <main>
        {view === 'landing' && (
          <>
            <HeroCarousel onSignUp={() => setIsSignUpOpen(true)} />
            <BadgeHighlights />
            <Motivational onSignUp={() => setIsSignUpOpen(true)} />
          </>
        )}
        {view === 'dashboard' && <ParentDashboard />}
        {view === 'activities' && <ActivitiesPage />}
        {view === 'staff' && <StaffDashboard />}
        {view === 'login' && <LoginPortal setView={setView} />}
        {view === 'kid-dashboard' && <KidDashboard />}
        {view === 'thank-you' && <ThankYouPage setView={setView} />}
        {view === 'careers' && <CareersPage />}
      </main>
      <MascotOverlay view={view} />
      <Footer setView={setView} />
      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSuccess={() => {
          setIsSignUpOpen(false);
          setView('thank-you');
        }}
      />
    </div>
  );
}
