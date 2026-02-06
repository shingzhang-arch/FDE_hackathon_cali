import { motion } from 'framer-motion';
import { Clock, Search, CheckCircle2, XCircle, TrendingUp } from 'lucide-react';

interface Metric {
  id: string;
  label: string;
  value: string;
  unit: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const metrics: Metric[] = [
  {
    id: 'time-spent',
    label: 'Time Spent on Weekly Updates',
    value: '1.5',
    unit: 'hours/week',
    description: 'Average time Deployment Strategists spend writing weekly updates',
    icon: <Clock className="w-6 h-6" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'search-frequency',
    label: 'Knowledge Search Frequency',
    value: '4',
    unit: 'times/month',
    description: 'How often DS search for similar projects or solutions',
    icon: <Search className="w-6 h-6" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'success-rate',
    label: 'Success Rate of Finding Relevant Work',
    value: '40',
    unit: '%',
    description: 'Percentage of searches that find something useful',
    icon: <CheckCircle2 className="w-6 h-6" />,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 'wasted-time',
    label: 'Wasted Hours Due to Knowledge Gaps',
    value: '5',
    unit: 'hours/month',
    description: 'Time wasted when relevant past work isn\'t found',
    icon: <XCircle className="w-6 h-6" />,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
];

const calculatedMetrics = [
  {
    label: 'Annual Hours Spent on Updates',
    value: '1,560',
    unit: 'hours/year',
    calculation: '1.5 hours/week × 20 DS × 52 weeks',
    color: 'text-slate-700',
  },
  {
    label: 'Wasted Searches per Month',
    value: '48',
    unit: 'searches/month',
    calculation: '4 searches/month × 60% failure rate × 20 DS',
    color: 'text-slate-700',
  },
  {
    label: 'Total Wasted Effort per Year',
    value: '1,200',
    unit: 'hours/year',
    calculation: '5 hours/month × 20 DS × 12 months',
    color: 'text-slate-700',
  },
];

export default function KPIs() {
  return (
    <section id="kpis" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">KPIs</h2>
        </div>

        <p className="text-lg text-slate-600 mb-8 max-w-3xl">
          Key metrics from our survey of Deployment Strategists reveal the scope of the opportunity 
          and validate the need for FDE Pulse.
        </p>

        {/* Primary Metrics */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border-2 ${metric.bgColor} border-slate-200`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${metric.bgColor} flex items-center justify-center ${metric.color}`}>
                  {metric.icon}
                </div>
              </div>
              <h3 className="text-sm font-semibold text-slate-700 mb-2">{metric.label}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-slate-900">{metric.value}</span>
                <span className="text-lg text-slate-600">{metric.unit}</span>
              </div>
              <p className="text-sm text-slate-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Calculated Metrics */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Calculated Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {calculatedMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border-2 border-slate-200 shadow-sm"
              >
                <h4 className="text-sm font-semibold text-slate-600 mb-2">{metric.label}</h4>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-slate-900">{metric.value}</span>
                  <span className="text-lg text-slate-600">{metric.unit}</span>
                </div>
                <p className="text-xs text-slate-500 italic">{metric.calculation}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> These metrics are based on survey responses and calculated estimates. 
            Actual values will be updated as survey data is collected.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
