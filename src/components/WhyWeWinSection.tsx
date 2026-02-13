import { motion } from 'framer-motion';
import { MapPin, RefreshCw, Zap, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: 'Meets Teams Where They Are',
    description: "We're not asking people to adopt a new tool. FDE Pulse integrates directly into the Slack workflow they already use every Friday.",
  },
  {
    icon: RefreshCw,
    title: 'Two-Way Value Exchange',
    description: "Unlike traditional forms or knowledge bases, FDE Pulse gives immediate value back. You help others by sharing, and you get help by receiving insights.",
  },
  {
    icon: Zap,
    title: 'Production-Ready Now',
    description: 'Built on AgentForce and Slack—both already deployed in the FDE organization. We can ship this in Q1.',
  },
  {
    icon: TrendingUp,
    title: 'Self-Improving System',
    description: "The more teams use it, the smarter it gets. Every weekly update adds to the institutional knowledge base.",
  },
];

export default function WhyWeWinSection() {
  return (
    <section id="why-we-win" className="mb-24 scroll-mt-20">
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Why FDE Pulse is the Best Solution</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white border-2 border-slate-200 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#6B46C1]/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-[#6B46C1]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{reason.title}</h3>
                  <p className="text-slate-600">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8"
        >
          FDE Pulse: Turn weekly updates into weekly insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="#prototype"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#6B46C1] to-[#14B8A6] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Ready to Deploy in Q1 2025
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
