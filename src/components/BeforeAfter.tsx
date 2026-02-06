import { motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface BeforeAfterProps {
  before: {
    title: string;
    items: string[];
  };
  after: {
    title: string;
    items: string[];
  };
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      {/* Before */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-lg border-2 border-red-200 bg-red-50/50"
      >
        <div className="flex items-center gap-2 mb-4">
          <X className="w-5 h-5 text-red-600" />
          <h4 className="text-lg font-semibold text-red-900">{before.title}</h4>
        </div>
        <ul className="space-y-3">
          {before.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-slate-700">
              <span className="text-red-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* After */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-lg border-2 border-green-200 bg-green-50/50"
      >
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <h4 className="text-lg font-semibold text-green-900">{after.title}</h4>
        </div>
        <ul className="space-y-3">
          {after.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-slate-700">
              <span className="text-green-500 mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
