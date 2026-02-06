import { motion } from 'framer-motion';
import { Search, AlertCircle, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const scenarios = [
  {
    id: 'new-engagement',
    icon: Search,
    title: 'New Engagement',
    subtitle: 'Who\'s done this before, what should I do?',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    problem: 'Starting a new project but unsure where to begin? Don\'t know if similar work has been done?',
    solution: [
      'Agent surfaces the 4 most similar project channels automatically',
      'Provides summaries of solutions from past engagements',
      'Ranks projects by similarity and ROI',
      'Connects you to the right people who\'ve solved similar challenges',
      'Shows both in-flight and delivered projects (prioritizing recent, relevant work)',
    ],
    benefit: 'No more searching or asking—the information comes to you. Find the right project, get summarized insights, and connect with the right people instantly.',
  },
  {
    id: 'ongoing-blockers',
    icon: AlertCircle,
    title: 'Ongoing Team with Blockers',
    subtitle: 'I\'m having this issue',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    problem: 'Hit a blocker and need help? Wondering if someone else has solved this?',
    solution: [
      'Agent identifies teams working on similar issues right now',
      'Surfaces already-delivered solutions ranked by similarity',
      'Highlights escalations and patterns (e.g., "3 teams facing voice agent issues")',
      'Provides real-time, recency-ranked updates (critical for fast-changing AI features)',
      'Connects you with teams who\'ve solved the exact problem',
    ],
    benefit: 'Someone doesn\'t have to respond—the agent surfaces solutions automatically. Avoids generic questions and meetings about project status.',
  },
];

export default function PrototypeScenarios() {
  return (
    <section id="prototype-scenarios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Prototype Scenarios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Two Scenarios,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              One Powerful Solution
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            FDE Pulse addresses the most common pain points Deployment Strategists face: 
            finding relevant past work and solving blockers faster.
          </p>
        </motion.div>

        {/* Scenarios */}
        <div className="space-y-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-8 rounded-2xl border-2 ${scenario.borderColor} ${scenario.bgColor} hover:shadow-xl transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${scenario.gradient} flex items-center justify-center flex-shrink-0`}>
                  <scenario.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{scenario.title}</h3>
                  <p className="text-lg text-slate-700 font-medium">{scenario.subtitle}</p>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-6 p-4 bg-white/60 rounded-lg border border-slate-200">
                <p className="text-slate-700 font-medium">{scenario.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  {scenario.color === 'blue' ? (
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ArrowRight className="w-5 h-5 text-amber-600" />
                  )}
                  How FDE Pulse Helps
                </h4>
                <ul className="space-y-3">
                  {scenario.solution.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + itemIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      {scenario.color === 'blue' ? (
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600" />
                      )}
                      <span className="text-slate-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Benefit */}
              <div className="pt-4 border-t border-slate-300">
                <p className="text-slate-600 italic">
                  <strong className="text-slate-900">Key Benefit:</strong> {scenario.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Sources Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800"
        >
          <h3 className="text-2xl font-bold text-white mb-4">All Data Sources from Slack Channel</h3>
          <p className="text-slate-300 mb-4">
            FDE Pulse pulls from everything already in your Slack channel:
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              'Previous updates',
              'TLDR of meeting transcripts',
              'Slides & wireframes',
              'Agent details & specs',
              'Google docs',
              'Slack Canvas',
            ].map((source, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>{source}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
