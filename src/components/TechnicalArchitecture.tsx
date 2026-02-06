import ExpandableSection from './ExpandableSection';
import { Bot, MessageSquare, FileText, BarChart3 } from 'lucide-react';

export default function TechnicalArchitecture() {
  return (
    <section id="technical-architecture" className="mb-16 scroll-mt-20">
      <ExpandableSection title="Technical Architecture" defaultExpanded={false}>
        <div className="prose prose-slate max-w-none">
          <h4 className="text-lg font-semibold text-slate-900 mb-4">How It Works</h4>
          <p className="text-slate-700 leading-relaxed mb-6">
            FDE Pulse uses conversational AI to conduct weekly check-ins with project teams. 
            The agent asks conditional questions based on previous responses, identifies blockers, 
            and searches the knowledge base for similar issues and solutions.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900 mb-1">AI Agent Engine</h5>
                <p className="text-slate-700 text-sm">
                  Conversational AI that adapts questions based on project status, blockers, and team responses. 
                  Uses natural language understanding to extract insights and identify patterns.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900 mb-1">Slack Integration</h5>
                <p className="text-slate-700 text-sm">
                  Integrates with Slack to conduct check-ins, generate Canvas summaries, and broadcast 
                  solutions. Each project gets a dedicated Slack Canvas that's automatically updated.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900 mb-1">Knowledge Base</h5>
                <p className="text-slate-700 text-sm">
                  Searchable archive of all project insights, blockers, solutions, and graduation readouts. 
                  Uses semantic search to match current projects with historical learnings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900 mb-1">Aggregation Engine</h5>
                <p className="text-slate-700 text-sm">
                  Analyzes check-ins across all projects to identify common blockers, surface patterns 
                  for leadership, and generate consolidated reports for Product Management.
                </p>
              </div>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-slate-900 mb-4">Data Flow</h4>
          <div className="p-4 bg-slate-900 rounded-lg text-white font-mono text-sm">
            <div className="space-y-2">
              <div>1. AI Agent → Weekly Check-in → Project Team</div>
              <div className="pl-4">↓</div>
              <div>2. Team Responses → Analysis → Blocker Detection</div>
              <div className="pl-4">↓</div>
              <div>3. Knowledge Base Search → Solution Matching</div>
              <div className="pl-4">↓</div>
              <div>4. Slack Canvas Generation → Summary Creation</div>
              <div className="pl-4">↓</div>
              <div>5. Cross-Project Aggregation → Leadership Dashboard</div>
              <div className="pl-4">↓</div>
              <div>6. Knowledge Archive → Future Team Access</div>
            </div>
          </div>
        </div>
      </ExpandableSection>
    </section>
  );
}
