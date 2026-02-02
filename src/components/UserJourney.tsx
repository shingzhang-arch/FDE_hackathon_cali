import { motion } from 'framer-motion';
import { 
  Bot, 
  Users, 
  FileText, 
  AlertCircle, 
  BarChart3, 
  Lightbulb, 
  Bell, 
  GraduationCap, 
  Archive,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

const journeySteps = [
  {
    id: 'weekly',
    title: 'Weekly Check-in',
    color: 'from-blue-500 to-blue-600',
    items: [
      { icon: Bot, label: 'AI Agent', description: 'Initiates conversation' },
      { icon: Users, label: 'Project Team', description: 'Responds to questions' },
      { icon: FileText, label: 'Slack Canvas', description: 'Auto-generated summary' },
    ],
  },
  {
    id: 'insights',
    title: 'Leadership Insights',
    color: 'from-purple-500 to-purple-600',
    items: [
      { icon: AlertCircle, label: 'Blocker Aggregation', description: 'Common issues surfaced' },
      { icon: BarChart3, label: 'Leadership Dashboard', description: 'Real-time visibility' },
    ],
  },
  {
    id: 'knowledge',
    title: 'Knowledge Sharing',
    color: 'from-teal-500 to-teal-600',
    items: [
      { icon: Lightbulb, label: 'Solution Library', description: 'Searchable solutions' },
      { icon: Bell, label: 'Team Notifications', description: 'Alert when blockers solved' },
    ],
  },
  {
    id: 'graduation',
    title: 'Graduation',
    color: 'from-amber-500 to-orange-500',
    items: [
      { icon: GraduationCap, label: 'Auto Readout', description: 'Compiled journey summary' },
      { icon: Archive, label: 'Searchable Archive', description: 'Future teams benefit' },
    ],
  },
];

export default function UserJourney() {
  return (
    <section id="journey" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
            <ArrowRight className="w-4 h-4" />
            User Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From Check-in to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Collective Knowledge
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Every weekly interaction feeds into a growing ecosystem of insights, 
            solutions, and organizational memory.
          </p>
        </motion.div>

        {/* Journey flow - Desktop */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-between gap-4">
            {journeySteps.map((step, stepIndex) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stepIndex * 0.15 }}
                className="flex-1 relative"
              >
                {/* Connector arrow */}
                {stepIndex < journeySteps.length - 1 && (
                  <div className="absolute top-12 -right-2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-600" />
                  </div>
                )}

                {/* Step card */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                  {/* Step header */}
                  <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${step.color} text-white text-sm font-semibold mb-6`}>
                    {step.title}
                  </div>

                  {/* Step items */}
                  <div className="space-y-4">
                    {step.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: stepIndex * 0.15 + itemIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-slate-300" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{item.label}</p>
                          <p className="text-slate-400 text-xs">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey flow - Mobile */}
        <div className="lg:hidden space-y-6">
          {journeySteps.map((step, stepIndex) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
              className="relative"
            >
              {/* Connector */}
              {stepIndex < journeySteps.length - 1 && (
                <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2">
                  <ArrowDown className="w-5 h-5 text-slate-600" />
                </div>
              )}

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${step.color} text-white text-sm font-semibold mb-4`}>
                  {step.title}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {step.items.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span className="text-white text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data flow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-slate-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                The Flywheel Effect
              </h3>
              <p className="text-slate-400 max-w-xl">
                Each team's check-in makes the system smarter. Blockers get resolved faster. 
                New teams ramp up quicker. Leadership gets clearer visibility.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 rounded-full border-4 border-dashed border-blue-500/50 flex items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
