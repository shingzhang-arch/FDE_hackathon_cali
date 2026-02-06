import { motion } from 'framer-motion';
import { Users, FileX, Brain, ClipboardList, AlertTriangle } from 'lucide-react';

const painPoints = [
  {
    icon: Users,
    title: 'Teams Working in Isolation',
    description: 'Multiple teams tackle the same problems without knowing others have already solved them.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: FileX,
    title: 'Status Updates Get Lost',
    description: 'Manual updates scattered across Slack, emails, and docs. No single source of truth.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Brain,
    title: 'No Knowledge Sharing',
    description: 'Valuable learnings disappear when projects end. New teams start from scratch.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: ClipboardList,
    title: 'Tedious Graduation Readouts',
    description: 'Compiling project summaries takes hours of digging through old messages and notes.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            The Challenge
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The FDE Team Struggles with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Information Silos
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deployment Strategists spend hours writing weekly updates that disappear into a black hole. 
            Teams reinvent solutions that already exist. Knowledge is scattered and hard to find when you need it most.
          </p>
        </motion.div>

        {/* Pain points grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className={`p-4 rounded-2xl ${point.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <point.icon className={`w-7 h-7 ${point.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-center"
        >
          <p className="text-2xl md:text-3xl font-semibold text-white">
            "Who's done this before? What should I do?"
          </p>
          <p className="text-slate-400 mt-3 text-lg">
            "I'm having this issue—did someone already solve this?"
          </p>
          <p className="text-slate-500 mt-2 text-sm">
            — Every Deployment Strategist, every week
          </p>
        </motion.div>
      </div>
    </section>
  );
}
