import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import UserJourney from './components/UserJourney';
import Features from './components/Features';
import ValueProp from './components/ValueProp';
import CTA from './components/CTA';
import './index.css';

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <UserJourney />
      <Features />
      <ValueProp />
      <CTA />
      
      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-center">
        <p className="text-slate-500 text-sm">
          FDE Pulse — Team Cali — FDE Hackathon 2026
        </p>
      </footer>
    </main>
  );
}

export default App;
