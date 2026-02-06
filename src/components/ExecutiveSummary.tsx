import ExpandableSection from './ExpandableSection';
import { Gauge, Rocket, Eye } from 'lucide-react';

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="mb-16 scroll-mt-20">
      <ExpandableSection title="Executive Summary" defaultExpanded={true}>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            FDE Pulse is an AI-powered agent that transforms how Forward Deployed Engineering teams 
            communicate, share knowledge, and provide visibility to leadership. By conducting weekly 
            conversational check-ins with each project, FDE Pulse identifies blockers early, connects 
            teams with existing solutions, and builds an organizational knowledge base that compounds 
            over time.
          </p>

          <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Capabilities</h4>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-slate-700">Smart weekly check-ins with conditional questioning based on project status</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-slate-700">Automatic Slack Canvas generation for each project with searchable summaries</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-slate-700">Blocker aggregation across teams for leadership visibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-slate-700">Solution broadcasting to notify teams when blockers are resolved</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-slate-700">Auto-generated graduation readouts compiling project journey</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-slate-700">Searchable knowledge archive for future teams</span>
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-slate-900 mb-4">Hackathon Pillars</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-slate-900">Operational Efficiency</h5>
              </div>
              <p className="text-sm text-slate-700">
                Eliminates manual reporting and auto-aggregates insights across teams
              </p>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-purple-600" />
                <h5 className="font-semibold text-slate-900">Accelerating Engagements</h5>
              </div>
              <p className="text-sm text-slate-700">
                Teams learn from each other's solutions faster, reducing duplicate work
              </p>
            </div>
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-teal-600" />
                <h5 className="font-semibold text-slate-900">Leadership Insights</h5>
              </div>
              <p className="text-sm text-slate-700">
                Real-time visibility into blockers, progress, and common challenges
              </p>
            </div>
          </div>
        </div>
      </ExpandableSection>
    </section>
  );
}
