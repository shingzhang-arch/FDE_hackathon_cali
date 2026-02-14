import PresentationLayout from './components/PresentationLayout';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Prototype from './components/Prototype';
import SkillsSection from './components/SkillsSection';
import PlatformFutureSection from './components/PlatformFutureSection';
import BusinessValue from './components/BusinessValue';
import WhyWeWinSection from './components/WhyWeWinSection';
import './index.css';

const sections = [
  { id: 'hero', title: 'FDE Pulse' },
  { id: 'problem', title: 'The Weekly Ritual That Goes Nowhere' },
  { id: 'solution', title: 'What If We Made It Two-Way?' },
  { id: 'prototype', title: 'See It In Action' },
  { id: 'skills', title: 'Slackbot Skills' },
  { id: 'platform-future', title: 'The Future of Skills' },
  { id: 'business-value', title: 'The Impact' },
  { id: 'why-we-win', title: 'Why FDE Pulse is the Best Solution' },
];

function App() {
  return (
    <PresentationLayout sections={sections}>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <Prototype />
      <SkillsSection />
      <PlatformFutureSection />
      <BusinessValue />
      <WhyWeWinSection />

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-slate-200 text-center">
        <p className="text-slate-500 text-sm">
          FDE Pulse — Team Cali — FDE Hackathon 2026
        </p>
      </footer>
    </PresentationLayout>
  );
}

export default App;
