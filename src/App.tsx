import PresentationLayout from './components/PresentationLayout';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Prototype from './components/Prototype';
import BackendSection from './components/BackendSection';
import BusinessValue from './components/BusinessValue';
import WhyWeWinSection from './components/WhyWeWinSection';
import './index.css';

const sections = [
  { id: 'hero', title: 'FDE Pulse' },
  { id: 'problem', title: 'The Problem' },
  { id: 'solution', title: 'The Solution' },
  { id: 'prototype', title: 'Prototype' },
  { id: 'backend', title: 'The Backend' },
  { id: 'business-value', title: 'Business Value' },
  { id: 'why-we-win', title: 'Why We Win' },
];

function App() {
  return (
    <PresentationLayout sections={sections}>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <Prototype />
      <BackendSection />
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
