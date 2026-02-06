import { motion } from 'framer-motion';
import { Bot, Calendar, Users } from 'lucide-react';

export default function DocumentHeader() {
  return (
    <header id="header" className="border-b border-slate-200 pb-8 mb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">FDE Pulse</h1>
            <p className="text-slate-600 text-lg">Interactive Specification</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mt-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Version 1.0 • February 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Team Cali • FDE Hackathon 2026</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Overview:</strong> FDE Pulse is an AI agent that conducts 
            weekly conversational check-ins with FDE projects, aggregates blockers for leadership visibility, 
            and builds a searchable knowledge base for future teams. This specification outlines the system's 
            capabilities, use cases, and technical architecture.
          </p>
        </div>
      </motion.div>
    </header>
  );
}
