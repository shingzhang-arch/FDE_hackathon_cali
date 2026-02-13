import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';

const flowSteps = ['One-way Form', 'Two-way Conversation', 'Insights for Everyone'];

export default function SolutionSection() {
  return (
    <section id="solution" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#14B8A6] flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What If We Made It Two-Way?</h2>
        </div>

        <p className="text-lg text-slate-600 mb-6 max-w-4xl leading-relaxed">
          FDE Pulse transforms the weekly update from a dead-end form into an intelligent conversation.
        </p>

        <p className="text-lg text-slate-600 mb-4 max-w-4xl leading-relaxed">
          While you&apos;re giving your update, you get answers to:
        </p>
        <ul className="list-disc list-inside text-lg text-slate-600 mb-8 max-w-4xl space-y-2">
          <li>&quot;Has anyone solved this problem before?&quot;</li>
          <li>&quot;How did they solve it?&quot;</li>
          <li>&quot;What&apos;s working for similar projects?&quot;</li>
        </ul>

        <p className="text-lg text-slate-600 mb-4 max-w-4xl leading-relaxed">
          The agent remembers your previous updates and follows up:
        </p>
        <ul className="list-disc list-inside text-lg text-slate-600 mb-12 max-w-4xl space-y-2">
          <li>&quot;Last week you were blocked on Voice integration—did you find a resolution?&quot;</li>
          <li>&quot;How did that executive presentation go?&quot;</li>
        </ul>

        {/* Flow diagram */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-4">
              <div className="px-6 py-3 rounded-xl bg-white border-2 border-[#6B46C1] text-[#6B46C1] font-semibold">
                {step}
              </div>
              {index < flowSteps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-slate-400 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
