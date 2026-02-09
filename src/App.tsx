import PresentationLayout from './components/PresentationLayout';
import NorthStar from './components/NorthStar';
import ValueProp from './components/ValueProp';
import Solution from './components/Solution';
import UserJourney from './components/UserJourney';
import Features from './components/Features';
import KPIs from './components/KPIs';
import ComplexityToImplement from './components/ComplexityToImplement';
import BusinessValue from './components/BusinessValue';
import Prototype from './components/Prototype';
import SolutionDetails from './components/SolutionDetails';
import Roadmap from './components/Roadmap';
import Archive from './components/Archive';
import './index.css';

const sections = [
  { id: 'north-star', title: 'North Star' },
  { id: 'value-prop', title: 'Value Prop' },
  { id: 'solution', title: 'Solution' },
  { id: 'prototype', title: 'Prototype' },
  { id: 'solution-specs', title: 'Solution Specs' },
  { id: 'complexity', title: 'Complexity to Implement' },
  { id: 'business-value', title: 'Business Value' },
  { id: 'roadmap', title: 'Roadmap' },
  { id: 'archive', title: 'Archive' },
];

function App() {
  return (
    <PresentationLayout sections={sections}>
      <NorthStar />
      <ValueProp />
      <Solution />
      <Prototype />
      <SolutionDetails />
      <ComplexityToImplement />
      <BusinessValue />
      <Roadmap />
      <Archive>
        <UserJourney />
        <Features />
        <KPIs />
      </Archive>
      
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
