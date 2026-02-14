import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlackPrototype from './SlackPrototype';
import { User, CheckCircle2 } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'agent';
  content: React.ReactNode;
  timestamp?: string;
}

export default function Scenario3LeadershipInsights() {
  const [step] = useState(0);
  const canvasOpenRef = useRef<import('./SlackPrototype').CanvasOpenRef | null>(null);

  // No auto-scroll for this prototype - let user read from top first

  useEffect(() => {
    const timer = setTimeout(() => canvasOpenRef.current?.open?.(), 400);
    return () => clearTimeout(timer);
  }, []);

  const msgSummaryHeader = (
    <div className="p-4 rounded-xl bg-white border border-slate-200">
      <p className="font-bold text-slate-900 mb-3">📊 Weekly Leadership Summary | Week of February 10, 2025</p>
      <p className="text-sm text-slate-700 mb-1"><strong>Participation:</strong> 112 submissions (93% response rate ↑5% vs. last week)</p>
      <p className="text-sm text-slate-700 mb-3"><strong>Active Projects:</strong> 87 in progress | 12 delivered this week | 18 blocked</p>
      <p className="text-sm text-slate-600 mb-1">Quick navigation:</p>
      <p className="text-sm">
        <button type="button" onClick={() => document.getElementById('msg-2')?.scrollIntoView({ behavior: 'smooth' })} className="text-blue-600 hover:text-blue-700 hover:underline">🚨 Critical Blockers (3)</button>
        {' · '}
        <button type="button" onClick={() => document.getElementById('msg-4')?.scrollIntoView({ behavior: 'smooth' })} className="text-blue-600 hover:text-blue-700 hover:underline">✅ Wins (5)</button>
        {' · '}
        <button type="button" onClick={() => document.getElementById('msg-5')?.scrollIntoView({ behavior: 'smooth' })} className="text-blue-600 hover:text-blue-700 hover:underline">📈 Trending</button>
        {' · '}
        <button type="button" onClick={() => document.getElementById('msg-6')?.scrollIntoView({ behavior: 'smooth' })} className="text-blue-600 hover:text-blue-700 hover:underline">💡 Product Requests</button>
        {' · '}
        <button type="button" onClick={() => document.getElementById('msg-7')?.scrollIntoView({ behavior: 'smooth' })} className="text-blue-600 hover:text-blue-700 hover:underline">🎯 Recommended Actions</button>
      </p>
      <p className="text-xs text-slate-500 mt-2">Scroll down for detailed analysis ↓</p>
    </div>
  );

  const msgBlocker1 = (
    <div className="p-4 rounded-xl bg-white border border-slate-200">
      <p className="font-bold text-slate-900 mb-2">━━ 🚨 CRITICAL BLOCKER #1: DATA CLOUD CONNECTOR TIMEOUTS ━━</p>
      <p className="text-sm text-slate-700 mb-2"><strong>Impact:</strong> 12 teams affected (14% of active projects) | <strong>Priority:</strong> 🔴 High</p>
      <p className="text-xs font-semibold text-slate-700 mb-1">Affected Teams:</p>
      <p className="text-xs text-slate-700 mb-1">⚠️ Week 3: Team Alpha, Team Beta · Week 2: Team Gamma, ADP Demo · Week 1: Disney, Acme Corp + 6 more</p>
      <p className="text-xs text-slate-700 mb-2"><strong>Root Cause:</strong> Connection timeout (30s insufficient), proxy config, missing IP whitelisting</p>
      <p className="text-xs font-semibold text-slate-700 mb-1">✅ Solution (Disney/Alex Thompson):</p>
      <ul className="text-xs text-slate-700 space-y-0.5 mb-2 ml-2">
        <li>└ Timeout 30s → 90s, retry with exponential backoff</li>
        <li>└ Whitelist Salesforce IPs, proxy bypass for *.salesforce.com</li>
        <li>└ Connection pooling (40% latency reduction)</li>
      </ul>
      <p className="text-xs text-slate-700 mb-1"><strong>Implementation:</strong> 2-3 days · <strong>Success rate:</strong> 100% (5/5 teams)</p>
      <p className="text-xs text-slate-700 font-semibold">📊 Impact if unresolved: 60-90 hrs/week loss, 3 Q1 commitments at risk</p>
      <p className="text-xs text-slate-700 mt-2"><strong>🎯 Action:</strong> Share Disney&apos;s solution at Monday standup · Connect teams with Alex Thompson</p>
    </div>
  );

  const msgBlockers23 = (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-white border border-slate-200">
        <p className="font-bold text-slate-900 mb-1">🚨 CRITICAL BLOCKER #2: NEW AGENTFORCE BUILDER ERROR HANDLING</p>
        <p className="text-sm text-slate-700"><strong>Impact:</strong> 8 teams (9%) | <strong>Priority:</strong> 🟡 Medium-High</p>
        <p className="text-xs text-slate-700 mt-1">Generic &quot;connection failed&quot; messages, no diagnostics. ❌ No permanent solution—Product team enhancement needed.</p>
        <p className="text-xs text-slate-700 mt-1"><strong>🎯 Action:</strong> Escalate to Product · Document workarounds in Canvas</p>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200">
        <p className="font-bold text-slate-900 mb-1">🚨 CRITICAL BLOCKER #3: VOICE INTEGRATION SECURITY APPROVALS</p>
        <p className="text-sm text-slate-700"><strong>Impact:</strong> 4 teams (5%) | <strong>Priority:</strong> 🟡 Medium</p>
        <p className="text-xs text-slate-700 mt-1">✅ Zing Health created &quot;Voice Security Approval Package&quot;—reduced approval to 1 week. 3 teams used it.</p>
        <p className="text-xs text-slate-700 mt-1"><strong>🎯 Action:</strong> Share package with all 23 Voice teams · Saves 46-69 weeks capacity</p>
      </div>
    </div>
  );

  const msgWins = (
    <div className="p-4 rounded-xl bg-white border border-slate-200">
      <p className="font-bold text-slate-900 mb-3">━━ ✅ WINS THIS WEEK (5 Projects Delivered) ━━</p>
      <p className="text-sm text-slate-700 mb-3"><strong>📈 17% of Voice projects delivered this week</strong></p>
      <div className="space-y-2 text-sm text-slate-700">
        <p><strong>✅ Shark Ninja</strong> (Peter Ryttel) · 6 weeks · Product Recommendations Voice Agent · Resolved Data Cloud timeout via Saks 5th Ave solution</p>
        <p><strong>✅ Blue Cross</strong> (Sarah Chen) · 5 weeks, 1 week early 🎉 · 35% ticket reduction, 1,200 calls/week deflected</p>
        <p><strong>✅ Zing Health</strong> · Voice Analytics Dashboard · Real-time analytics added · Template in Canvas</p>
        <p><strong>✅ Enterprise Retail</strong> (Alex Martinez) · 3 weeks using templates · 90% adoption in 3 days</p>
        <p><strong>✅ Financial Services</strong> (Jennifer Kim) · Compliance automation · 45 min → 3 min (93% reduction)</p>
      </div>
      <p className="text-xs text-slate-600 mt-2"><strong>🎯 Recognition:</strong> Share in All Hands · Peter, Sarah, Marcus, Alex, Jennifer</p>
    </div>
  );

  const msgTrending = (
    <div className="p-4 rounded-xl bg-white border border-slate-200">
      <p className="font-bold text-slate-900 mb-2">━━ 📈 TRENDING FEATURES ━━</p>
      <p className="text-sm text-slate-700 mb-2"><strong>New Agentforce Builder:</strong> 43 teams (↑39%) · 🚀 Fastest growing</p>
      <p className="text-xs text-slate-700 mb-1"><strong>Voice:</strong> 23 teams (↔ stable) · <strong>Data Cloud:</strong> 32 teams (↑7%)</p>
      <p className="text-xs text-slate-700 mb-1"><strong>Agent Script:</strong> 18 teams (↓5%) · <strong>Observability:</strong> 15 teams (↑15%)</p>
      <p className="text-xs text-slate-600 mt-2">Sentiment: 42% &quot;Game changer&quot; · 46% &quot;Good, learning curve&quot; · 12% struggling</p>
    </div>
  );

  const msgProductRequests = (
    <div className="p-4 rounded-xl bg-white border border-slate-200">
      <p className="font-bold text-slate-900 mb-2">━━ 💡 PRODUCT PRIORITY REQUESTS ━━</p>
      <p className="text-sm text-slate-700 mb-1"><strong>#1:</strong> Better error handling for Data Cloud (15 teams, 🔴 Critical) · 180+ hrs/week impact</p>
      <p className="text-sm text-slate-700 mb-1"><strong>#2:</strong> Reusable component library (12 teams, 🟡 Medium-High)</p>
      <p className="text-sm text-slate-700"><strong>#3:</strong> Voice security docs (8 teams, 🟢 Medium) · ✅ Zing Health package exists</p>
    </div>
  );

  const msgRecommendedActions = (
    <div className="p-4 rounded-xl bg-white border border-slate-200">
      <p className="font-bold text-slate-900 mb-2">━━ 🎯 RECOMMENDED ACTIONS ━━</p>
      <p className="text-xs font-semibold text-slate-700 mb-1">IMMEDIATE (This Week):</p>
      <ul className="text-xs text-slate-700 space-y-0.5 mb-2">
        <li>└ Unblock Data Cloud teams · Share Disney solution at Monday standup</li>
        <li>└ Recognize 5 wins in All Hands</li>
        <li>└ Escalate error handling to Product team</li>
      </ul>
      <p className="text-xs font-semibold text-slate-700 mb-1">SHORT-TERM:</p>
      <ul className="text-xs text-slate-700 space-y-0.5 mb-2">
        <li>└ New Agentforce Builder Office Hours (43 teams)</li>
        <li>└ Distribute Zing Health Voice security package</li>
      </ul>
      <p className="text-xs font-semibold text-slate-700 mb-1">STRATEGIC (Q1):</p>
      <ul className="text-xs text-slate-700 space-y-0.5">
        <li>└ Track blocker resolution impact · Build component library</li>
      </ul>
    </div>
  );

  const msgCanvasClosing = (
    <div className="p-4 rounded-xl bg-white border border-slate-200">
      <p className="font-semibold text-slate-900 mb-2">✅ This summary has been added to Canvas:</p>
      <p className="text-sm text-blue-600 mb-2">🔗 FDE Leadership - Weekly Insights: Feb 10, 2025</p>
      <p className="text-sm text-slate-600 mb-2">💬 <strong>How can I help you act on these insights?</strong></p>
      <p className="text-xs text-slate-600">Quick options: Send to Product team · Draft All Hands announcement · Create office hours invite</p>
      <p className="text-xs text-slate-500 mt-2">📊 Next Summary: Friday, Feb 17, 2025 at 4:00 PM</p>
    </div>
  );

  const conversationSteps: Message[][] = [
    // Single step: full analysis + canvas closing + added to Canvas (end prototype)
    [
      { id: 1, type: 'agent', content: msgSummaryHeader, timestamp: '4:00 PM' },
      { id: 2, type: 'agent', content: msgBlocker1, timestamp: '4:00 PM' },
      { id: 3, type: 'agent', content: msgBlockers23, timestamp: '4:00 PM' },
      { id: 4, type: 'agent', content: msgWins, timestamp: '4:01 PM' },
      { id: 5, type: 'agent', content: msgTrending, timestamp: '4:02 PM' },
      { id: 6, type: 'agent', content: msgProductRequests, timestamp: '4:03 PM' },
      { id: 7, type: 'agent', content: msgRecommendedActions, timestamp: '4:04 PM' },
      { id: 8, type: 'agent', content: msgCanvasClosing, timestamp: '4:05 PM' },
      { id: 9, type: 'agent', content: (
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle2 className="w-4 h-4" />
          <span className="text-sm font-medium">Added to leadership Canvas</span>
        </div>
      ), timestamp: '4:05 PM' },
    ],
  ];

  const [restartKey, setRestartKey] = useState(0);
  const handleReset = () => setRestartKey((k) => k + 1);

  const canvasContentLeadership = (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-slate-900 mb-2">Weekly Leadership Summary - Feb 10, 2025</h4>
        <p className="text-xs text-slate-600 mb-3">112 submissions · 93% response rate</p>
      </div>
      <div>
        <h4 className="font-semibold text-amber-900 mb-2">Critical Blockers</h4>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
          <li>Data Cloud connector timeouts (12 teams)</li>
          <li>New Agentforce Builder error handling (8 teams)</li>
          <li>Voice security approvals (4 teams)</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-green-900 mb-2">Wins This Week</h4>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
          <li>Shark Ninja, Blue Cross, Zing Health, Enterprise Retail, Financial Services</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-purple-900 mb-2">Product Requests</h4>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
          <li>Error handling (15 teams) · Component library (12 teams) · Voice security docs (8 teams)</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <SlackPrototype
        key={restartKey}
        channelName="#fde-leadership"
        showCanvasPanel={true}
        canvasContent={canvasContentLeadership}
        canvasTitle="Leadership Insights - Feb 10, 2025"
        canvasFooterLabel="Searchable by Slackbot · Rolled up to leadership & product council"
        canvasOpenRef={canvasOpenRef}
      >
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {conversationSteps[step]?.map((message) => (
              <motion.div
                key={message.id}
                id={`msg-${message.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'agent' && (
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-slate-100">
                    <img src="/images/slackbot.png" alt="Slackbot" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className={`max-w-[85%] ${message.type === 'user' ? 'order-1' : ''}`}>
                  <div
                    className={`rounded-2xl px-4 py-2.5 ${
                      message.type === 'user'
                        ? 'bg-[#007A5A] text-white rounded-tr-sm'
                        : 'bg-white text-slate-900 rounded-tl-sm border border-slate-200'
                    }`}
                  >
                    <div className="text-sm leading-relaxed">{message.content}</div>
                  </div>
                  {message.timestamp && (
                    <div className={`text-xs text-slate-500 mt-1 px-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      {message.timestamp}
                    </div>
                  )}
                </div>
                {message.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="h-1" aria-hidden />
        </div>
      </SlackPrototype>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-6">
        <button
          onClick={handleReset}
          className="px-6 py-2.5 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium shadow-sm"
        >
          Restart Scenario
        </button>
      </motion.div>
    </div>
  );
}
