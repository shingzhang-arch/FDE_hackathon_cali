import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Brain, FileX, Users, EyeOff } from 'lucide-react';

const painPoints = [
  {
    icon: Brain,
    title: 'Knowledge Loss',
    description: "When Team Alpha solves a Voice integration blocker, Team Beta has no idea 3 weeks later when they hit the same issue",
  },
  {
    icon: FileX,
    title: 'Repeated Mistakes',
    description: 'Teams reinvent solutions that others already discovered',
  },
  {
    icon: AlertCircle,
    title: 'Stale Knowledge',
    description: "In the fast-moving AI world, knowledge bases get outdated quickly",
  },
  {
    icon: EyeOff,
    title: 'Leadership Blindspot',
    description: "No visibility into emerging patterns or what's actually blocking teams",
  },
];

function ImagePlaceholder({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="space-y-2">
      <div className="rounded-xl border-2 border-slate-200 bg-slate-100 overflow-hidden aspect-video flex items-center justify-center relative">
        {!hasError ? (
          <img src={src} alt={alt} className="w-full h-full object-contain" onError={() => setHasError(true)} />
        ) : (
          <div className="text-slate-500 text-sm p-4 text-center">Add image: {alt}</div>
        )}
      </div>
      <p className="text-sm text-slate-600 text-center">{caption}</p>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section id="problem" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">The Weekly Ritual That Goes Nowhere</h2>
        </div>

        <p className="text-lg text-slate-600 mb-8 max-w-4xl leading-relaxed">
          Every Friday, 100-150 Deployment Strategists and Forward Deployed Engineers spend 10-20 minutes submitting their weekly customer update.
        </p>

        <p className="text-lg text-slate-600 mb-8 max-w-4xl leading-relaxed">
          They share critical information:
        </p>
        <ul className="list-disc list-inside text-lg text-slate-600 mb-8 max-w-4xl space-y-2">
          <li>Blockers they&apos;re facing</li>
          <li>Progress on AI agents</li>
          <li>Features being used in production</li>
          <li>Customer executive updates</li>
        </ul>

        <p className="text-lg text-slate-600 mb-12 max-w-4xl leading-relaxed">
          But it&apos;s a <strong className="text-slate-900">one-way dead end</strong>. Once submitted, the update disappears into a Slack channel, never to be seen again. They get nothing back in return.
        </p>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-red-50 border-2 border-red-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-slate-700">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image placeholders */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <ImagePlaceholder
              src="/images/current-form.png"
              alt="Current workflow form"
              caption="The current one-way form"
            />
          </div>
          <div className="relative">
            <ImagePlaceholder
              src="/images/example-update.png"
              alt="Example weekly update"
              caption="Updates disappear into a Slack void"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
