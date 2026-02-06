import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, Eye, DollarSign } from 'lucide-react';

const valueCategories = [
  {
    icon: Clock,
    title: 'Time Savings',
    metrics: [
      { label: 'Weekly update time reduction', value: '50%', description: 'From 1.5 hours to 45 minutes per week' },
      { label: 'Annual time saved', value: '780', unit: 'hours/year', description: 'Per Deployment Strategist' },
      { label: 'Organization-wide savings', value: '15,600', unit: 'hours/year', description: 'For 20 DS' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Knowledge Sharing',
    metrics: [
      { label: 'Duplicate work eliminated', value: '1,200', unit: 'hours/year', description: 'From knowledge gaps' },
      { label: 'Search success rate improvement', value: '40% → 90%', description: 'With automatic surfacing' },
      { label: 'Faster project ramp-up', value: '3x', description: 'With historical context' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Eye,
    title: 'Leadership Insights',
    metrics: [
      { label: 'Real-time visibility', value: '100%', description: 'All projects, all the time' },
      { label: 'Pattern detection', value: 'Automatic', description: 'Common blockers surfaced proactively' },
      { label: 'Data-driven decisions', value: 'Enabled', description: 'Resource allocation based on actual needs' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

const roiCalculation = {
  totalSavings: '1,980',
  totalSavingsUnit: 'hours/year',
  calculation: 'Time savings (780) + Knowledge gap elimination (1,200)',
  costPerHour: '$100',
  annualValue: '$198,000',
  description: 'Conservative estimate based on DS time value',
};

export default function BusinessValue() {
  return (
    <section id="business-value" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Business Value</h2>
        </div>

        <p className="text-lg text-slate-600 mb-12 max-w-3xl">
          FDE Pulse delivers measurable ROI across three key areas: operational efficiency, 
          knowledge sharing, and leadership insights.
        </p>

        {/* Value Categories */}
        <div className="space-y-8 mb-12">
          {valueCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="p-8 rounded-2xl bg-white border-2 border-slate-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="p-4 rounded-xl bg-slate-50">
                    <p className="text-sm font-semibold text-slate-700 mb-2">{metric.label}</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-bold text-slate-900">{metric.value}</span>
                      {metric.unit && <span className="text-sm text-slate-600">{metric.unit}</span>}
                    </div>
                    <p className="text-xs text-slate-600">{metric.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white"
        >
          <div className="flex items-center gap-4 mb-6">
            <DollarSign className="w-8 h-8" />
            <h3 className="text-2xl font-bold">ROI Calculation</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-green-100 mb-2">Total Annual Savings</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">{roiCalculation.totalSavings}</span>
                <span className="text-xl text-green-100">{roiCalculation.totalSavingsUnit}</span>
              </div>
              <p className="text-sm text-green-100 italic">{roiCalculation.calculation}</p>
            </div>
            <div>
              <p className="text-sm text-green-100 mb-2">Estimated Annual Value</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">{roiCalculation.annualValue}</span>
              </div>
              <p className="text-sm text-green-100">{roiCalculation.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-6 rounded-xl bg-blue-50 border border-blue-200"
        >
          <h4 className="text-lg font-bold text-slate-900 mb-3">Additional Benefits</h4>
          <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
            <li>• Reduced meeting overhead (fewer status update meetings)</li>
            <li>• Faster project delivery (learn from past work)</li>
            <li>• Better customer outcomes (leverage proven solutions)</li>
            <li>• Improved team morale (less repetitive work)</li>
            <li>• Enhanced knowledge retention (nothing gets lost)</li>
            <li>• Scalable solution (works for any team size)</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
