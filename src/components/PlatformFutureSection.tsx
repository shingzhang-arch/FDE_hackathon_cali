import { motion } from 'framer-motion';
import { Rocket, Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const timelineSteps = [
  {
    phase: 'Today',
    label: 'FDE Pulse Skills (this prototype)',
    description: 'Custom skills built on Canvas workflows, accessed via the + button in Slackbot. Proves the model works.',
    status: 'active' as const,
  },
  {
    phase: 'CKO Announcement',
    label: 'Native Slackbot Skills',
    description: 'Salesforce is bringing skills as a first-class feature of Slackbot — the same pattern FDE Pulse already uses. Skills become a platform primitive, not a workaround.',
    status: 'upcoming' as const,
  },
  {
    phase: 'Future',
    label: 'Ecosystem of Skills',
    description: 'A marketplace of reusable skills that any team can install, configure, and compose. FDE Pulse skills migrate seamlessly to the native platform.',
    status: 'future' as const,
  },
];

const advantages = [
  'FDE Pulse is already built on the skills pattern — zero migration required',
  'Our skills move from custom Canvas workflows to native platform features',
  'The + button UX we prototyped becomes the standard interaction model',
  'Skills gain platform-level features: permissions, analytics, discovery',
];

export default function PlatformFutureSection() {
  return (
    <section id="platform-future" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#14B8A6] flex items-center justify-center">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">The Future of Skills</h2>
        </div>

        {/* CKO Announcement callout */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-[#6B46C1]/10 to-[#14B8A6]/10 border-2 border-[#6B46C1]/20 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#6B46C1] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 mb-2">
                Announced at CKO: Skills are coming natively to Slackbot
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Salesforce is making <strong>skills a native feature of the Slackbot platform</strong>. The exact pattern FDE Pulse is built on — modular capabilities accessed through the + button — is becoming a first-class platform primitive. Our prototype isn&apos;t just a demo; it&apos;s an early implementation of the platform&apos;s direction.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#6B46C1]/20 shadow-md">
            <img
              src="/images/cko-skills-announcement.png"
              alt="CKO announcement showing native Slackbot Skills in Salesforce"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">From Prototype to Platform</h3>
          <div className="space-y-0">
            {timelineSteps.map((step, index) => {
              const isActive = step.status === 'active';
              const isUpcoming = step.status === 'upcoming';
              return (
                <div key={step.phase} className="flex gap-4">
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full flex-shrink-0 border-2 ${
                      isActive
                        ? 'bg-[#6B46C1] border-[#6B46C1]'
                        : isUpcoming
                        ? 'bg-white border-[#6B46C1]'
                        : 'bg-white border-slate-300'
                    }`} />
                    {index < timelineSteps.length - 1 && (
                      <div className={`w-0.5 flex-1 min-h-[60px] ${
                        isActive ? 'bg-[#6B46C1]' : 'bg-slate-200'
                      }`} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8 -mt-1">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${
                      isActive
                        ? 'bg-[#6B46C1] text-white'
                        : isUpcoming
                        ? 'bg-[#6B46C1]/10 text-[#6B46C1]'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {step.phase}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{step.label}</h4>
                    <p className="text-slate-600 leading-relaxed max-w-2xl">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why this matters */}
        <div className="p-6 rounded-xl bg-green-50/50 border-2 border-green-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-600" />
            Why This Matters for FDE Pulse
          </h3>
          <ul className="space-y-3">
            {advantages.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom message */}
        <div className="mt-8 flex items-center gap-3 p-5 rounded-xl bg-slate-50 border-2 border-slate-200">
          <ArrowRight className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>We&apos;re not building against the platform — we&apos;re building ahead of it.</strong> When native skills ship, FDE Pulse is already there.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
