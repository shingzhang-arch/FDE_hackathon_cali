import { motion } from 'framer-motion';
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp,
  Users,
  Calendar,
  Bot,
  Sparkles
} from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-600 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            See It In Action
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What You'll{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Actually Get
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real outputs from FDE Pulse that transform how teams communicate 
            and leadership makes decisions.
          </p>
        </motion.div>

        {/* Mockups grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Slack Canvas mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 rounded-2xl p-6 shadow-2xl"
          >
            {/* Canvas header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
              <FileText className="w-5 h-5 text-slate-400" />
              <span className="text-white font-medium">Weekly Summary - Project Phoenix</span>
              <span className="ml-auto text-slate-500 text-sm">Jan 27, 2026</span>
            </div>

            {/* Canvas content */}
            <div className="space-y-6 text-sm">
              {/* Progress section */}
              <div>
                <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                  <TrendingUp className="w-4 h-4" />
                  Progress This Week
                </div>
                <ul className="space-y-2 text-slate-300 pl-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Completed Agentforce integration with customer data model
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Successfully tested prompt flows with 3 use cases
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Customer demo scheduled for next week
                  </li>
                </ul>
              </div>

              {/* Blockers section */}
              <div>
                <div className="flex items-center gap-2 text-amber-400 font-semibold mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  Current Blockers
                </div>
                <div className="bg-slate-800 rounded-lg p-3 border-l-4 border-amber-500">
                  <p className="text-slate-300">
                    <span className="text-amber-400 font-medium">API Rate Limiting:</span> Hitting limits during bulk data sync operations. Need guidance on batching strategy.
                  </p>
                  <p className="text-slate-500 text-xs mt-2">
                    Similar blocker resolved by Team Alpha (Dec 2025) — solution linked
                  </p>
                </div>
              </div>

              {/* Next steps */}
              <div>
                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                  <Calendar className="w-4 h-4" />
                  Next Week's Focus
                </div>
                <ul className="space-y-1 text-slate-300 pl-6 list-disc">
                  <li>Implement batching solution for data sync</li>
                  <li>Prepare customer demo environment</li>
                  <li>Begin documentation for graduation readout</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Leadership dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 rounded-2xl p-6 shadow-2xl"
          >
            {/* Dashboard header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
              <Users className="w-5 h-5 text-slate-400" />
              <span className="text-white font-medium">Leadership Dashboard</span>
              <span className="ml-auto text-slate-500 text-sm">This Week</span>
            </div>

            {/* Dashboard content */}
            <div className="space-y-6">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Active Projects', value: '12', color: 'text-blue-400' },
                  { label: 'Blockers', value: '4', color: 'text-amber-400' },
                  { label: 'Resolved', value: '8', color: 'text-green-400' },
                ].map((stat, index) => (
                  <div key={index} className="bg-slate-800 rounded-lg p-4 text-center">
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Common blockers */}
              <div>
                <p className="text-slate-400 text-sm font-medium mb-3">Trending Blockers (3+ teams)</p>
                <div className="space-y-2">
                  {[
                    { issue: 'API Rate Limiting', teams: 4, status: 'Solution found' },
                    { issue: 'SSO Configuration', teams: 3, status: 'Under investigation' },
                  ].map((blocker, index) => (
                    <div key={index} className="flex items-center justify-between bg-slate-800 rounded-lg p-3">
                      <div>
                        <p className="text-white text-sm font-medium">{blocker.issue}</p>
                        <p className="text-slate-500 text-xs">{blocker.teams} teams affected</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        blocker.status === 'Solution found' 
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {blocker.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent activity */}
              <div>
                <p className="text-slate-400 text-sm font-medium mb-3">Recent Activity</p>
                <div className="space-y-2 text-sm">
                  {[
                    'Team Beta shared solution for API batching',
                    'Project Phoenix completed milestone 3',
                    'Team Gamma started new engagement',
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200">
            <div className="w-16 h-16 rounded-2xl animated-gradient flex items-center justify-center">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-900">FDE Pulse</h3>
              <p className="text-slate-600">Built by Team Cali for FDE Hackathon 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
