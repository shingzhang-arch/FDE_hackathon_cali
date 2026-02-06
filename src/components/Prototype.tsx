import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Search, AlertCircle, ExternalLink, Info } from 'lucide-react';

export default function Prototype() {
  const [activeScenario, setActiveScenario] = useState<'new-engagement' | 'blockers'>('new-engagement');

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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <PlayCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Prototype</h2>
        </div>

        <p className="text-lg text-slate-600 mb-8 max-w-3xl">
          Explore our interactive prototype showcasing the two core scenarios FDE Pulse addresses. 
          Click through to see how the agent helps Deployment Strategists in real-time.
        </p>

        {/* Scenario Tabs */}
        <div className="flex gap-4 mb-6 border-b border-slate-200">
          <button
            onClick={() => setActiveScenario('new-engagement')}
            className={`px-6 py-3 font-medium transition-colors border-b-2 ${
              activeScenario === 'new-engagement'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              <span>New Engagement</span>
            </div>
            <p className="text-xs font-normal mt-1">Who's done this before?</p>
          </button>
          <button
            onClick={() => setActiveScenario('blockers')}
            className={`px-6 py-3 font-medium transition-colors border-b-2 ${
              activeScenario === 'blockers'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span>Ongoing Team with Blockers</span>
            </div>
            <p className="text-xs font-normal mt-1">I'm having this issue</p>
          </button>
        </div>

        {/* Prototype Embed Area */}
        <div className="mb-6">
          <div className="rounded-2xl border-2 border-slate-200 overflow-hidden bg-slate-50">
            <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-slate-600">FDE Pulse Prototype</span>
              </div>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                Open in new tab
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="aspect-video bg-slate-100 flex items-center justify-center p-8">
              <div className="text-center">
                <PlayCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 font-medium mb-2">
                  {activeScenario === 'new-engagement' 
                    ? 'New Engagement Scenario Prototype'
                    : 'Ongoing Team with Blockers Scenario Prototype'}
                </p>
                <p className="text-sm text-slate-500">
                  Interactive prototype will be embedded here
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  (Similar to WSI preview.html format)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scenario Details */}
        <div className="grid md:grid-cols-2 gap-6">
          {activeScenario === 'new-engagement' ? (
            <>
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  Scenario: New Engagement
                </h4>
                <p className="text-slate-700 mb-4">
                  A Deployment Strategist is starting a new project and needs to know if similar work has been done before.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Agent surfaces 4 most similar project channels</li>
                  <li>• Provides summaries of solutions from past engagements</li>
                  <li>• Ranks projects by similarity and ROI</li>
                  <li>• Connects to the right people automatically</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-slate-600" />
                  Key Features Demonstrated
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Automatic project matching</li>
                  <li>✓ Solution summarization</li>
                  <li>✓ Similarity ranking</li>
                  <li>✓ Team connection</li>
                  <li>✓ Knowledge surfacing (no search needed)</li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="p-6 rounded-xl bg-amber-50 border border-amber-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Scenario: Ongoing Team with Blockers
                </h4>
                <p className="text-slate-700 mb-4">
                  A team hits a blocker and needs to find if someone else has solved this problem.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Agent identifies teams working on similar issues</li>
                  <li>• Surfaces already-delivered solutions</li>
                  <li>• Highlights patterns (e.g., "3 teams facing voice agent issues")</li>
                  <li>• Provides real-time, recency-ranked updates</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-slate-600" />
                  Key Features Demonstrated
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Blocker pattern detection</li>
                  <li>✓ Solution discovery</li>
                  <li>✓ Real-time knowledge</li>
                  <li>✓ Recency ranking</li>
                  <li>✓ Automatic notifications</li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 rounded-lg bg-slate-100 border border-slate-300">
          <p className="text-sm text-slate-700">
            <strong>How to interact:</strong> Click through the prototype to see how FDE Pulse responds to different 
            scenarios. The agent adapts its questions and surfaces relevant information automatically.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
