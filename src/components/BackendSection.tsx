import { motion } from 'framer-motion';
import { Settings, CheckCircle2, MessageSquare, Bot, Database, FileText, ArrowDown } from 'lucide-react';

const architectureSteps = [
  { icon: MessageSquare, label: 'User in Slack', desc: 'Deployment Strategist submits weekly update' },
  { icon: Bot, label: 'Slackbot Trigger', desc: 'Intercepts workflow, invokes AgentForce via webhook' },
  { icon: Settings, label: 'AgentForce Agent', desc: '3 Topics · 6 Actions · Agent instructions' },
  { icon: Database, label: 'Salesforce Data Cloud', desc: 'Weekly_Updates, Solutions_Library, Vector Search' },
  { icon: FileText, label: 'Slack Canvas', desc: 'Leadership summaries, solution knowledge base' },
];

const agentTopics = [
  { name: 'Weekly Check-in', phrase: 'weekly update, Friday update', desc: 'Time for your Friday update' },
  { name: 'Project Startup', phrase: 'starting new project, kickoff', desc: "Who's done this before?" },
  { name: 'Leadership Insights', phrase: 'weekly summary, team trends', desc: 'What themes across projects?' },
];

const agentActions = [
  'calculate_stats',
  'find_similar_projects',
  'track_blocker_resolution',
  'generate_weekly_summary',
  'update_canvas',
  'query_past_updates',
];

const dataObjects = [
  { name: 'Weekly_Updates__c', purpose: 'Team submissions, blockers, features, vector embeddings' },
  { name: 'Solutions_Library__c', purpose: 'Captured solutions, success rates, teams using' },
  { name: 'Weekly_Stats__c', purpose: 'Pre-calculated stats for fast retrieval' },
];

const noBuild = [
  'No custom Slack app development',
  'No custom database',
  'No vector search engine',
  'No LLM fine-tuning',
  'No conversation state management',
  'No hosting/infrastructure',
];

const configNeeded = [
  'AgentForce agent (Topics, Instructions, Actions)',
  'Salesforce objects (3 custom objects)',
  'Apex classes (6 actions, ~500–1000 lines)',
  'Slack app (OAuth, webhook URL)',
  'Slack workflow (call webhook step)',
  'Einstein Vector Search (checkbox)',
];

export default function BackendSection() {
  return (
    <section id="backend" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#14B8A6] flex items-center justify-center">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">The Backend</h2>
        </div>

        {/* Executive Summary */}
        <div className="p-6 rounded-xl bg-slate-50 border-2 border-slate-200 mb-12">
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            FDE Pulse leverages <strong>existing Salesforce and Slack infrastructure</strong> with zero new tooling required:
          </p>
          <ul className="text-slate-700 space-y-1 mb-4">
            <li>• <strong>AgentForce</strong> for agent intelligence and conversation management</li>
            <li>• <strong>Slackbot</strong> for Slack integration and message handling</li>
            <li>• <strong>Slack Canvas</strong> for knowledge sharing</li>
            <li>• <strong>Salesforce Data Cloud</strong> for storage and pattern matching</li>
          </ul>
          <p className="text-lg font-semibold text-[#6B46C1]">
            Key insight: This is primarily an <strong>agent instructions problem</strong>, not a development problem. We configure existing tools, not build new ones.
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Architecture Overview</h3>
          <div className="space-y-2">
            {architectureSteps.map((step, i) => (
              <div key={step.label}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-slate-200 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-[#6B46C1]" />
                  </div>
                  <div className="flex-1 py-3 px-4 rounded-xl bg-white border-2 border-slate-200">
                    <p className="font-semibold text-slate-900">{step.label}</p>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
                {i < architectureSteps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-5 h-5 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Slackbot Integration */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Slackbot Integration</h3>
          <p className="text-lg text-slate-600 mb-4 max-w-4xl leading-relaxed">
            Intercepts the existing weekly update workflow and routes it to AgentForce instead of just posting to a channel. When the user submits, the Slack workflow triggers the Slackbot, which sends form data to AgentForce via webhook. The agent responds, and the Slackbot posts conversational messages in the channel.
          </p>
          <p className="text-slate-600 max-w-4xl">
            <strong>No custom development:</strong> Use Slack&apos;s workflow builder, add a &quot;Call Webhook&quot; step to the existing workflow, point to the AgentForce endpoint.
          </p>
        </div>

        {/* AgentForce Configuration */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">2. AgentForce Agent Configuration</h3>
          <p className="text-lg text-slate-600 mb-6 max-w-4xl leading-relaxed">
            All intelligence is configured through the AgentForce UI—no coding required for the agent itself.
          </p>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Agent Topics</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {agentTopics.map((topic) => (
                <div key={topic.name} className="p-4 rounded-xl bg-white border-2 border-slate-200">
                  <p className="font-bold text-slate-900">{topic.name}</p>
                  <p className="text-sm text-slate-600 mt-1">{topic.desc}</p>
                  <p className="text-xs text-slate-500 mt-2">Activation: {topic.phrase}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Agent Actions (Skills)</h4>
            <p className="text-slate-600 mb-4 max-w-4xl">
              Six actions the agent uses—configured in AgentForce, implemented as Apex or Flow:
            </p>
            <div className="flex flex-wrap gap-2">
              {agentActions.map((action) => (
                <span
                  key={action}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 font-mono text-sm text-slate-800"
                >
                  {action}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Data Model */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Data Model (Salesforce)</h3>
          <div className="space-y-4">
            {dataObjects.map((obj) => (
              <div key={obj.name} className="p-4 rounded-xl bg-white border-2 border-slate-200">
                <p className="font-mono font-bold text-slate-900">{obj.name}</p>
                <p className="text-slate-600 mt-1">{obj.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vector Search */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Vector Search</h3>
          <p className="text-lg text-slate-600 mb-4 max-w-4xl leading-relaxed">
            Salesforce Einstein Vector Search enables semantic matching. When a user says &quot;Voice integration timeout,&quot; the system matches &quot;Voice agent connection issues&quot; from different teams. Configure via Setup → Einstein Search → Vector Search. No custom code required.
          </p>
        </div>

        {/* What You Don't / Do Need */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-red-50/50 border-2 border-red-200">
            <h4 className="font-bold text-slate-900 mb-4">What You Don&apos;t Need to Build</h4>
            <ul className="space-y-2 text-slate-700">
              {noBuild.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-green-50/50 border-2 border-green-200">
            <h4 className="font-bold text-slate-900 mb-4">What You Do Need to Configure</h4>
            <ul className="space-y-2 text-slate-700">
              {configNeeded.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-lg text-slate-600 max-w-4xl">
          <strong>Total custom code:</strong> ~500–1000 lines of Apex (for the 6 actions). <strong>Implementation time:</strong> 3–4 weeks. <strong>Infrastructure cost:</strong> $0 (uses existing Salesforce + Slack licenses).
        </p>
      </motion.div>
    </section>
  );
}
