import { motion } from 'framer-motion';
import { TrendingUp, Clock, Database, Zap, Eye, CheckCircle2 } from 'lucide-react';

const statCards = [
  {
    icon: Clock,
    value: '25-50 hours/week',
    title: 'saved on redundant problem-solving',
    subtext: '100-150 users × 10-20 min/week. Doubling the team this year → 50-100 hours/week.',
  },
  {
    icon: Database,
    value: 'Dramatically increase knowledge sharing',
    title: '',
    subtext: "Today we contribute this info and don't do a lot with it. FDE Pulse puts what we submit to good use.",
  },
  {
    icon: Zap,
    value: 'Instant access',
    title: 'to solutions from similar projects',
    subtext: 'No more reinventing the wheel',
  },
  {
    icon: Eye,
    value: 'Real-time visibility',
    title: 'for leadership',
    subtext: "Know what's blocking teams and what's working",
  },
];

const keyBenefits = [
  'Zero adoption friction: Replaces existing workflow, not a new tool',
  'Two-way value: DS gets help while helping others',
  'Institutional memory: Captures tribal knowledge before it\'s lost',
  'Scalable: Works for DS, FDEs, Experts, any team doing weekly updates',
  'Compound returns: Gets smarter every week as knowledge base grows',
];

export default function BusinessValue() {
  return (
    <section id="business-value" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#14B8A6] flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">The Impact</h2>
        </div>

        {/* Math breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-6 rounded-xl bg-slate-50 border-2 border-slate-200"
        >
          <h4 className="text-lg font-bold text-slate-900 mb-3">The Math</h4>
          <ul className="text-slate-700 space-y-2">
            <li>• 100-150 users × 10-20 min/week = <strong>25-50 hours/week</strong> saved on redundant problem-solving</li>
            <li>• Doubling the team this year → <strong>50-100 hours/week</strong> potential impact</li>
            <li>• Every blocker + solution captured and surfaced to similar teams</li>
          </ul>
        </motion.div>

        {/* Large stat cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {statCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#6B46C1]/10 flex items-center justify-center flex-shrink-0">
                  <card.icon className="w-7 h-7 text-[#6B46C1]" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{card.value}</div>
                  {card.title && <div className="text-lg font-semibold text-slate-800 mb-2">{card.title}</div>}
                  <p className="text-sm text-slate-600">{card.subtext}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl bg-slate-50 border-2 border-slate-200"
        >
          <h4 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h4>
          <ul className="space-y-3">
            {keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
