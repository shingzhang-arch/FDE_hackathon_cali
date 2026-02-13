import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Search, AlertCircle, Info, User, TrendingUp, BarChart3 } from 'lucide-react';
import Scenario1Prototype from './Scenario1Prototype';
import Scenario2Prototype from './Scenario2Prototype';
import Scenario3LeadershipInsights from './Scenario3LeadershipInsights';

type ScenarioKey = 'project-startup' | 'weekly-checkin' | 'leadership';

const journeySteps: { key: ScenarioKey; label: string; subtitle: string; persona: 'strategist' | 'product-council' | 'leadership'; icon: typeof User }[] = [
  { key: 'weekly-checkin', label: 'Weekly Check-in', subtitle: "Time for your Friday update", persona: 'strategist', icon: User },
  { key: 'project-startup', label: 'Project Startup', subtitle: "Who's done this before?", persona: 'strategist', icon: User },
  { key: 'leadership', label: 'Leadership Insights', subtitle: 'What themes across projects?', persona: 'leadership', icon: TrendingUp },
];

export default function Prototype() {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>('weekly-checkin');

  return (
    <section id="prototype" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#14B8A6] flex items-center justify-center">
            <PlayCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">See It In Action</h2>
        </div>

        <p className="text-lg text-slate-600 mb-8 max-w-3xl">
          Explore our interactive prototype showcasing the three core scenarios FDE Pulse addresses. 
          Click through to see how the agent helps Strategists, FDEs, and Leaders in real-time.
        </p>

        {/* Horizontal journey strip - above the card */}
        <div className="flex overflow-x-auto gap-0 mb-6 pb-2 -mx-1 scrollbar-thin">
          <div className="flex items-stretch min-w-0 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100/50 overflow-hidden">
            {journeySteps.map((step, index) => {
              const isActive = activeScenario === step.key;
              const personaStyles = {
                strategist: { active: 'bg-blue-500 text-white', inactive: 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700', label: 'Deployment Strategist' },
                'product-council': { active: 'bg-purple-500 text-white', inactive: 'bg-white text-slate-600 hover:bg-purple-50 hover:text-purple-700', label: 'Product Council' },
                leadership: { active: 'bg-teal-500 text-white', inactive: 'bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-700', label: 'Leadership' },
              };
              const style = personaStyles[step.persona];
              const Icon = step.icon;
              return (
                <div key={step.key} className="flex items-stretch">
                  {index > 0 && (
                    <div className="w-px bg-slate-200 self-stretch flex-shrink-0" aria-hidden />
                  )}
                  <button
                    onClick={() => setActiveScenario(step.key)}
                    className={`flex items-center gap-3 px-4 py-3 min-w-[130px] md:min-w-[150px] text-left transition-all ${
                      isActive ? style.active : style.inactive
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 shadow-sm ${
                      isActive ? 'bg-white/20 border-white' : 'border-slate-300 bg-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {step.label}
                      </p>
                      <p className={`text-xs mt-0.5 ${isActive ? 'text-white/90' : 'text-slate-500'}`}>
                        {step.subtitle}
                      </p>
                      <p className={`text-[10px] mt-1 uppercase tracking-wide ${isActive ? 'text-white/70' : 'text-slate-400'}`}>
                        {style.label}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card container - full width prototype */}
        <div className="rounded-2xl border-2 border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="p-6 lg:p-8">
        {/* Prototype Embed Area */}
        <div className="mb-6 overflow-hidden">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeScenario === 'project-startup' && <Scenario1Prototype />}
            {activeScenario === 'weekly-checkin' && <Scenario2Prototype />}
            {activeScenario === 'leadership' && <Scenario3LeadershipInsights />}
          </motion.div>
        </div>

        {/* Scenario Details */}
        <div className="grid md:grid-cols-2 gap-6">
          {activeScenario === 'project-startup' ? (
            <>
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  Scenario: Project Startup
                </h4>
                <p className="text-slate-700 mb-4">
                  A Deployment Strategist is starting a new project and needs to know if similar work has been done before.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Agent surfaces similar projects and key documents</li>
                  <li>• Returns contacts from other projects</li>
                  <li>• Updates saved to Slack Canvas (searchable)</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-slate-600" />
                  Key Features Demonstrated
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Automatic project matching</li>
                  <li>✓ Document library surfacing</li>
                  <li>✓ Slack Canvas summary</li>
                </ul>
              </div>
            </>
          ) : activeScenario === 'weekly-checkin' ? (
            <>
              <div className="p-6 rounded-xl bg-amber-50 border border-amber-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Scenario: Weekly Check-in
                </h4>
                <p className="text-slate-700 mb-4">
                  Slack prompts the user on Friday to submit their weekly update. The agent already knows project history (Shark Ninja) and follows up with guided questions.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Agent-initiated Friday reminder</li>
                  <li>• Guided follow-up collects accomplishments, blockers, and account metadata</li>
                  <li>• Updates saved to Slack Canvas (searchable)</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-slate-600" />
                  Key Features Demonstrated
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Proactive prompting</li>
                  <li>✓ Project context awareness</li>
                  <li>✓ Slack Canvas summary</li>
                </ul>
              </div>
            </>
          ) : activeScenario === 'leadership' ? (
            <>
              <div className="p-6 rounded-xl bg-purple-50 border border-purple-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Scenario: Leadership Insights
                </h4>
                <p className="text-slate-700 mb-4">
                  Leaders get a proactive view of themes across FDE projects—common blockers, wins, and product council callouts.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Aggregated themes from team check-ins</li>
                  <li>• Common blockers and trends</li>
                  <li>• Rolled up to leadership Canvas</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-slate-600" />
                  Key Features Demonstrated
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Proactive surfacing</li>
                  <li>✓ Theme aggregation</li>
                  <li>✓ Product council callouts</li>
                </ul>
              </div>
            </>
          ) : null}
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 rounded-lg bg-slate-100 border border-slate-300">
          <p className="text-sm text-slate-700">
            <strong>How to interact:</strong> Click the send icon to progress each conversation. Updates are saved to 
            Slack Canvas—searchable by Slackbot and rolled up to leadership and product council.
          </p>
        </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
