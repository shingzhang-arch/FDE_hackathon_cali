import { motion } from 'framer-motion';
import { Map, CheckCircle2, Circle, ArrowRight } from 'lucide-react';

const phases = [
  {
    id: 'phase-1',
    title: 'Phase 1: MVP',
    timeframe: 'Q1 2026',
    status: 'planned',
    features: [
      'Weekly update assistance via conversational AI',
      'Basic knowledge surfacing (similar project matching)',
      'Slack Canvas summary generation',
      'Simple blocker detection',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'phase-2',
    title: 'Phase 2: Enhanced Matching',
    timeframe: 'Q2 2026',
    status: 'planned',
    features: [
      'Advanced similarity ranking (ROI-based)',
      'Solution summaries from past projects',
      'Graduation request assistance',
      'Cross-team connection recommendations',
      'Blocker aggregation dashboard',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'phase-3',
    title: 'Phase 3: Advanced Capabilities',
    timeframe: 'Q3-Q4 2026',
    status: 'planned',
    features: [
      'Predictive recommendations (suggest graduation readiness)',
      'Advanced analytics and insights',
      'Cross-team pattern detection',
      'Product Council integration',
      'Leadership dashboard enhancements',
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
            <Map className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Roadmap</h2>
        </div>

        <p className="text-lg text-slate-600 mb-12 max-w-3xl">
          FDE Pulse will be delivered in three phases, starting with core capabilities and 
          progressively adding advanced features based on user feedback and needs.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block" />

          {/* Phases */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                    {phase.status === 'completed' ? (
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    ) : (
                      <Circle className="w-8 h-8 text-white fill-white" />
                    )}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-xs font-medium rounded whitespace-nowrap">
                    {phase.timeframe}
                  </div>
                </div>

                {/* Phase Content */}
                <div className="flex-1 pb-8">
                  <div className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Success Criteria</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Phase 1 Success</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• 80% of DS using weekly update assistance</li>
                <li>• 50% reduction in update time</li>
                <li>• Positive user feedback</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Phase 2 Success</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• 90% search success rate</li>
                <li>• 1,000+ hours saved organization-wide</li>
                <li>• Active knowledge sharing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Phase 3 Success</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Predictive capabilities proven</li>
                <li>• Full Product Council integration</li>
                <li>• Measurable ROI demonstrated</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
