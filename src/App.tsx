import PresentationLayout from './components/PresentationLayout';
import NorthStar from './components/NorthStar';
import ValueProposition from './components/ValueProposition';
import BusinessChallenge from './components/BusinessChallenge';
import Solution from './components/Solution';
import UserJourney from './components/UserJourney';
import Features from './components/Features';
import KPIs from './components/KPIs';
import ComplexityToImplement from './components/ComplexityToImplement';
import BusinessValue from './components/BusinessValue';
import Prototype from './components/Prototype';
import SolutionDetails from './components/SolutionDetails';
import Roadmap from './components/Roadmap';
import './index.css';

const sections = [
  { id: 'north-star', title: 'North Star' },
  { id: 'value-proposition', title: 'Value Proposition' },
  { id: 'business-challenge', title: 'Business Challenge' },
  { id: 'solution', title: 'Solution' },
  { id: 'journey', title: 'User Journey' },
  { id: 'features', title: 'Features' },
  { id: 'kpis', title: 'KPIs' },
  { id: 'complexity', title: 'Complexity to Implement' },
  { id: 'business-value', title: 'Business Value' },
  { id: 'prototype', title: 'Prototype' },
  { id: 'solution-details', title: 'Solution Details' },
  { id: 'roadmap', title: 'Roadmap' },
];

function App() {
  return (
    <PresentationLayout sections={sections}>
      <NorthStar />
      <ValueProposition />
      <BusinessChallenge />
      <Solution />
      <UserJourney />
      <Features />
      <KPIs />
      <ComplexityToImplement />
      <BusinessValue />
      <Prototype />
      <SolutionDetails />
      <Roadmap />
      
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
