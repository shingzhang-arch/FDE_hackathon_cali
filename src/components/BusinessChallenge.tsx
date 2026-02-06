import { motion } from 'framer-motion';
import { Users, FileX, Brain, ClipboardList, AlertTriangle, Quote, CheckCircle2 } from 'lucide-react';

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

const userQuotes = [
  {
    quote: "Where can I find what other teams have tried?",
    attribution: "Every new FDE team, every time",
    type: "pain-point"
  },
  {
    quote: "I spend 1.5 hours every week writing updates that disappear into Slack.",
    attribution: "Deployment Strategist",
    type: "pain-point"
  },
  {
    quote: "FDE Pulse found 3 similar projects instantly—saved me days of searching.",
    attribution: "Deployment Strategist",
    type: "benefit"
  },
  {
    quote: "Finally, a way to learn from what other teams have already solved.",
    attribution: "Team Lead",
    type: "benefit"
  }
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

export default function BusinessChallenge() {
  return (
    <section id="business-challenge" className="mb-24 scroll-mt-20 py-24 bg-slate-50">
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
            Valuable insights are trapped in isolated conversations. Teams reinvent the wheel 
            while leadership lacks visibility into common challenges.
          </p>
        </motion.div>

        {/* Prominent quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative p-12 md:p-16 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 border-l-4 border-blue-600 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-2">
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-blue-600 opacity-60" />
              </div>
              <div className="flex-1">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
                  "{userQuotes[0].quote}"
                </p>
                <p className="text-xl md:text-2xl text-slate-600 font-medium">
                  — {userQuotes[0].attribution}
                </p>
              </div>
            </div>
          </div>
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

        {/* Additional quotes section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            What Our Teams Are Saying
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {userQuotes.slice(1).map((quoteItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-white border-2 ${
                  quoteItem.type === 'pain-point' 
                    ? 'border-red-200 hover:border-red-300' 
                    : 'border-green-200 hover:border-green-300'
                } hover:shadow-md transition-all`}
              >
                <div className="flex items-start gap-3 mb-4">
                  {quoteItem.type === 'pain-point' ? (
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  ) : (
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <p className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 leading-relaxed">
                      "{quoteItem.quote}"
                    </p>
                    <p className="text-slate-600 text-sm font-medium">
                      — {quoteItem.attribution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
