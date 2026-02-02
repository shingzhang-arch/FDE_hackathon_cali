import { motion } from 'framer-motion';
import { 
  MessageSquareMore, 
  Layers, 
  Megaphone, 
  FileCheck, 
  BookOpen,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: MessageSquareMore,
    title: 'Smart Weekly Check-ins',
    description: 'Conditional questions that adapt to your team\'s current status. Blockers get deeper investigation, wins get celebrated.',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    icon: Layers,
    title: 'Blocker Aggregation',
    description: 'Common issues across teams are automatically surfaced for leadership. No more discovering patterns too late.',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.1,
  },
  {
    icon: Megaphone,
    title: 'Solution Broadcasting',
    description: 'When one team solves a problem, others facing the same blocker are instantly notified with the solution.',
    gradient: 'from-amber-500 to-orange-500',
    delay: 0.2,
  },
  {
    icon: FileCheck,
    title: 'Auto Graduation Readouts',
    description: 'Weekly summaries compile into a comprehensive graduation report. Hours of work reduced to one click.',
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.3,
  },
  {
    icon: BookOpen,
    title: 'Knowledge Archive',
    description: 'New teams can search all historical learnings. See how past teams tackled similar challenges.',
    gradient: 'from-indigo-500 to-purple-500',
    delay: 0.4,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
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
            <Zap className="w-4 h-4" />
            Key Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Five Features,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              One Mission
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every feature is designed to break down silos, accelerate learning, 
            and give leadership the visibility they need.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className={`group relative p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 ${
                index === features.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="relative text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-tr-2xl rounded-bl-[100px] transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Highlight stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-8 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800"
        >
          {[
            { value: '80%', label: 'Less time on status updates' },
            { value: '5x', label: 'Faster blocker resolution' },
            { value: '100%', label: 'Knowledge retention' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {stat.value}
              </p>
              <p className="text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
