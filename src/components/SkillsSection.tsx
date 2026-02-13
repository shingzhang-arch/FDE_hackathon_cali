import { motion } from 'framer-motion';
import { Zap, PlusCircle, MessageSquare, Search, BarChart3, FileText, ArrowRight } from 'lucide-react';

const skills = [
  {
    icon: MessageSquare,
    name: 'Weekly Check-in',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    description: 'Proactively prompts team members for their Friday update with project-aware context. Remembers last week\'s blockers and follows up on resolution.',
    capabilities: [
      'Proactive Friday reminders with project context',
      'Follow-up on previous blockers',
      'Guided conversation to capture accomplishments, blockers, and metadata',
      'Saves structured update to Slack Canvas',
    ],
  },
  {
    icon: Search,
    name: 'Project Startup',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'When a team member begins a new engagement, the bot surfaces similar past projects, relevant documents, and contacts who\'ve done this before.',
    capabilities: [
      'Semantic search across past projects and updates',
      'Surfaces delivered and in-flight projects with similar scope',
      'Returns key contacts and relevant documentation',
      'Links to architecture guides and solution approaches',
    ],
  },
  {
    icon: BarChart3,
    name: 'Leadership Insights',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Aggregates themes across all team check-ins and surfaces patterns—common blockers, wins, and items requiring leadership attention.',
    capabilities: [
      'Cross-team theme aggregation from weekly updates',
      'Common blocker identification and resolution tracking',
      'Product council callout recommendations',
      'Leadership Canvas summary generation',
    ],
  },
];

const howItWorks = [
  { label: 'User taps the + button in Slack', icon: PlusCircle },
  { label: 'Selects the right skill from the menu', icon: Zap },
  { label: 'Skill runs with full project context', icon: FileText },
  { label: 'Results delivered in conversation + Canvas', icon: MessageSquare },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#14B8A6] flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Slackbot Skills</h2>
        </div>

        {/* Concept Explanation */}
        <div className="p-6 rounded-xl bg-slate-50 border-2 border-slate-200 mb-12">
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            FDE Pulse is built around <strong>skills</strong>—modular capabilities that live inside Slack as Canvas workflows. Users access them the same way they&apos;d attach a file or start a workflow: tap the <strong>+ button</strong> in the message composer and select the skill they need.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Each skill is a <strong>self-contained workflow</strong> that knows how to gather context, query data, and deliver results. Skills are <strong>composable and extensible</strong>—as new team needs emerge, new skills can be added to the menu without rebuilding the bot.
          </p>
        </div>

        {/* How Skills Work */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">How Skills Work</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {howItWorks.map((step, index) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border-2 border-slate-200">
                  <step.icon className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                  <span className="font-medium text-slate-800 text-sm">{step.label}</span>
                </div>
                {index < howItWorks.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Initial Batch of Skills</h3>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl ${skill.bgColor} border-2 ${skill.borderColor}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{skill.name}</h3>
                  </div>
                  <p className="text-slate-700 mb-4 leading-relaxed">{skill.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {skill.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-slate-700">
                        <Zap className="w-4 h-4 text-[#6B46C1] flex-shrink-0 mt-0.5" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extensibility Note */}
        <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-[#6B46C1]/5 to-[#14B8A6]/5 border-2 border-[#6B46C1]/20">
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Extensible by design:</strong> New skills simply appear in the + menu as the team&apos;s needs grow—onboarding checklists, meeting prep, customer health scoring, and more. Each skill is independently deployable and testable.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
