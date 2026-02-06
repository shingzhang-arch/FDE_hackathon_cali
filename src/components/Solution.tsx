import { motion } from 'framer-motion';
import { Bot, MessageSquare, FileText, Lightbulb, CheckCircle2 } from 'lucide-react';

const solutionSteps = [
  {
    icon: MessageSquare,
    title: 'Helps Write Weekly Updates',
    description: 'AI agent assists Deployment Strategists in writing weekly updates, turning a chore into something valuable.',
  },
  {
    icon: Bot,
    title: 'Surfaces Similar Projects',
    description: 'Automatically finds and ranks similar projects (both in-flight and delivered) by similarity and ROI. No searching required.',
  },
  {
    icon: FileText,
    title: 'Generates Real-Time Insights',
    description: 'Creates real-time customer stories and consolidates knowledge from Slack channels, meeting transcripts, docs, and Canvas.',
  },
];

export default function Solution() {
  return (
    <section id="solution" className="mb-24 scroll-mt-20 py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4" />
              The Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                FDE Pulse
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-semibold text-slate-700 mt-2 block">
                The AI-Upgraded{' '}
                <span className="text-slate-900">FDE Weekly Customer Update</span>
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              An AI-powered evolution of the FDE Weekly Customer Update process. 
              FDE Pulse transforms routine documentation into valuable insights by helping Deployment Strategists 
              write updates, automatically surfacing similar projects, and building a knowledge base 
              that gives back to the entire FDE team.
            </p>

            {/* Solution steps */}
            <div className="space-y-6">
              {solutionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual - Chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <div className="w-10 h-10 rounded-xl animated-gradient flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">FDE Pulse</p>
                  <p className="text-slate-400 text-sm">AI Weekly Customer Update</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm">Active</span>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-md px-4 py-3 max-w-sm">
                    <p className="text-white text-sm">
                      Hi! I can help you write your weekly update. What progress did you make this week?
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3 justify-end"
                >
                  <div className="bg-blue-600 rounded-2xl rounded-tr-md px-4 py-3 max-w-sm">
                    <p className="text-white text-sm">
                      We're building a voice agent for customer service. Having trouble with API rate limiting on the data sync.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-md px-4 py-3 max-w-sm">
                    <p className="text-white text-sm">
                      I found 3 similar voice agent projects! Team Alpha solved the rate limiting issue last month. Here's their solution summary, and I've connected you with their channel. Also flagging this pattern for leadership.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                  className="flex items-center gap-2 text-green-400 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Summary saved to Slack Canvas</span>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
