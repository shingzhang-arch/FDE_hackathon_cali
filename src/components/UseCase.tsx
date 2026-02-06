import { motion } from 'framer-motion';
import ExpandableSection from './ExpandableSection';
import BeforeAfter from './BeforeAfter';
import { TrendingUp } from 'lucide-react';

interface UseCaseProps {
  id: string;
  title: string;
  context: string;
  painPoints: Array<{ title: string; description: string }>;
  before: {
    title: string;
    items: string[];
  };
  after: {
    title: string;
    items: string[];
  };
  impact: {
    metric: string;
    description: string;
  };
}

export default function UseCase({
  id,
  title,
  context,
  painPoints,
  before,
  after,
  impact,
}: UseCaseProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
        
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-lg text-slate-700 leading-relaxed">{context}</p>
        </div>

        {/* Pain Points */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Pain Points</h3>
          <div className="space-y-3">
            {painPoints.map((point, index) => (
              <ExpandableSection key={index} title={point.title}>
                <p className="text-slate-700 leading-relaxed">{point.description}</p>
              </ExpandableSection>
            ))}
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Solution Comparison</h3>
          <BeforeAfter before={before} after={after} />
        </div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">Impact</h4>
              <p className="text-2xl font-bold text-green-700 mb-2">{impact.metric}</p>
              <p className="text-slate-700">{impact.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
