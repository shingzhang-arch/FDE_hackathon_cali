import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlackPrototype, { type CanvasOpenRef } from './SlackPrototype';
import { User, CheckCircle2 } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'agent';
  content: React.ReactNode;
  timestamp?: string;
}

const THINKING_DELAY_MS = 1200;

export default function Scenario2Prototype() {
  const [step, setStep] = useState(0);
  const [isAgentThinking, setIsAgentThinking] = useState(false);
  const [pendingUserMessage, setPendingUserMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const canvasOpenRef = useRef<CanvasOpenRef | null>(null);

  const agentLastWeekStats = (
    <div className="text-sm text-slate-600">
      <p className="font-semibold text-slate-800 mb-1.5">📊 Last Week&apos;s Stats</p>
      <p className="mb-1.5">112 submissions · 18 blockers identified</p>
      <p className="font-medium text-slate-700 mt-2 mb-1">Key blockers:</p>
      <ul className="list-disc list-inside space-y-0.5 text-slate-600">
        <li><a href="#" className="text-blue-600 hover:text-blue-700">Voice integration timeouts (8 teams)</a>—connection drops, firewall/proxy config</li>
        <li><a href="#" className="text-blue-600 hover:text-blue-700">Data Cloud connector configuration (5 teams)</a>—mapping and sync delays</li>
        <li><a href="#" className="text-blue-600 hover:text-blue-700">Meeting Prep defects (3 teams)</a>—significant defects in progress</li>
      </ul>
      <p className="font-medium text-slate-700 mt-2 mb-1">Key resolutions:</p>
      <ul className="list-disc list-inside space-y-0.5 text-slate-600">
        <li>Voice: <a href="#" className="text-blue-600 hover:text-blue-700">Saks 5th Avenue approach</a> (timeout + firewall rules)—3 teams resolved</li>
        <li>New Agentforce Builder: <a href="#" className="text-blue-600 hover:text-blue-700">Architecture docs shared</a>—2 teams unblocked</li>
      </ul>
    </div>
  );

  const agentFridayPrompt = (
    <div className="space-y-2">
      <p className="text-sm text-slate-600">
        It&apos;s Friday! Time for your Shark Ninja weekly update.
      </p>
      <p className="text-sm text-slate-600">
        Quick reminder: Last week you were blocked on Voice integration—were you able to find a resolution? How&apos;s progress this week?
      </p>
    </div>
  );

  const agentSolutionAndBlockers = (
    <div className="space-y-4">
      {/* Solution Captured - right after user provides solution */}
      <div>
        <p className="text-sm text-slate-600 mb-2">Excellent! Let me capture those details so other teams can benefit:</p>
        <div className="p-4 rounded-lg bg-white border border-slate-200">
          <p className="font-bold text-slate-900 uppercase tracking-wide mb-3">Solution captured: Voice Integration Timeout Fix</p>
          <div className="border-t border-slate-200 pt-3 space-y-2 text-sm">
            <p><strong>Problem:</strong> Voice integration connection timeouts</p>
            <p><strong>Customer Reference:</strong> Saks 5th Avenue implementation</p>
            <p className="font-semibold mt-2">Solution Components:</p>
            <div className="ml-2 space-y-1.5">
              <p>1. Timeout Configuration</p>
              <p className="ml-4">- Increased default timeout from 30s to 90s</p>
              <p className="ml-4">- Added retry logic with exponential backoff</p>
              <p>2. Firewall Rules</p>
              <p className="ml-4">- Whitelisted specific Salesforce IPs</p>
              <p className="ml-4">- Configured proxy bypass for *.salesforce.com</p>
              <p>3. Connection Optimization</p>
              <p className="ml-4">- Implemented connection pooling</p>
              <p className="ml-4">- Reduced latency by ~40%</p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-200 text-xs text-slate-600">
              <p><strong>Implementation Time:</strong> 2-3 days</p>
              <p><strong>Teams Currently Using This Solution:</strong> 5</p>
              <p><strong>Success Rate:</strong> 100% so far</p>
            </div>
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-800">
            Impact: This will help 12 teams currently facing Voice integration timeouts.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            I&apos;ve added this to the Voice Integration Solutions knowledge base and flagged it for the product team. Teams Alpha, Beta, and Disney will be notified about your solution.
          </p>
        </div>
      </div>
      <p className="text-sm font-semibold text-slate-800">
        Great news on resolving the Voice blocker! You&apos;re the 3rd team this week to successfully resolve Voice integration issues.
      </p>
      {/* Blockers prompt - no Trending */}
      <div>
        <p className="text-sm text-slate-600">
          You mentioned last week you had an executive presentation this week—how did that go?
        </p>
        <p className="text-sm text-slate-600 mt-1">
          And any blockers? Which features are you using or planning—Voice, Agent Script, New Agentforce Builder, Observability, or New Testing Center?
        </p>
      </div>
    </div>
  );

  const agentFdeSummary = (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">FDE Weekly Customer Update</p>
        <p className="text-sm font-semibold text-slate-900">Shark Ninja</p>
        <p className="text-xs text-slate-600">Account Channel: <a href="#" className="text-blue-600 hover:text-blue-700">#fde-weekly-customer-update</a></p>
        <p className="text-xs text-slate-600 mt-1">GEO: AMER · OU: AMER REG</p>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-1">Team</p>
        <p className="text-sm text-slate-800">Account Team: Peter Ryttel, Victor Rivera · FDE Pod: Martin Kornstein</p>
        <p className="text-sm text-slate-800 mt-1">Customer Executive Sponsor: Ajay Angadala - Managing Director, Technology Executive</p>
        <p className="text-sm text-slate-800 mt-1">Number of Agents: 3</p>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-1">Agent 1 Overview</p>
        <p className="text-sm text-slate-800">Product Recommendations / Plan My Day, Meeting Prep & Meeting Follow-Up</p>
        <p className="text-xs text-slate-600">Status: Watch · Type: Employee Agent · Expected Go-Live: 2026-02-20</p>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-1">Progress</p>
        <ul className="text-sm text-slate-800 space-y-1">
          <li>• <strong>Meeting Prep:</strong> Preparing for Feb release; significant number of defects still in progress</li>
          <li>• <strong>Meeting Follow-Up:</strong> User stories completed; working on completing critical defects</li>
          <li>• <strong>Plan My Day:</strong> Preparing for Feb release; working on completing critical defects</li>
        </ul>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-1">This Week&apos;s Accomplishments</p>
        <ul className="text-sm text-slate-800 space-y-1">
          <li>• Resolved Voice integration timeout (applied Saks 5th Avenue solution)</li>
          <li>• Executive presentation went well—loved the demo</li>
          <li>• Established product recommendations architecture foundation</li>
          <li>• Completed API integration testing</li>
          <li>• Initiated Data Cloud connector development</li>
        </ul>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-1">Blockers</p>
        <ul className="text-sm text-slate-800 space-y-1">
          <li>• Data Cloud connector configuration pending</li>
          <li>• Significant number of defects still in progress</li>
        </ul>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-1">Features in use</p>
        <p className="text-sm text-slate-800">Voice, New Agentforce Builder</p>
      </div>
      <p className="mt-4 text-sm text-slate-600">How does this sound for your update? I&apos;ve pulled in your sponsor and agent count from the last update. Any changes needed?</p>
    </div>
  );

  const conversationSteps: Message[][] = [
    // Step 0: Agent prompts first (stats + Friday reminder) - no user message yet
    [
      { id: 1, type: 'agent', content: agentLastWeekStats, timestamp: '3:15 PM' },
      { id: 2, type: 'agent', content: agentFridayPrompt, timestamp: '3:15 PM' },
    ],
    // Step 1: User shares solution + Agent (Solution Captured + blockers prompt)
    [
      { id: 1, type: 'agent', content: agentLastWeekStats, timestamp: '3:15 PM' },
      { id: 2, type: 'agent', content: agentFridayPrompt, timestamp: '3:15 PM' },
      { id: 3, type: 'user', content: (<div className="whitespace-pre-line">Yes—we applied the Saks 5th Avenue solution (timeout settings, firewall rules) and got Voice integration working.{'\n'}Set up product recommendations architecture{'\n'}Completed API integration testing{'\n'}Working on Data Cloud connector</div>), timestamp: '3:16 PM' },
      { id: 4, type: 'agent', content: agentSolutionAndBlockers, timestamp: '3:16 PM' },
    ],
    // Step 2: User blockers + features + Agent (full FDE summary + conversation nudges)
    [
      { id: 1, type: 'agent', content: agentLastWeekStats, timestamp: '3:15 PM' },
      { id: 2, type: 'agent', content: agentFridayPrompt, timestamp: '3:15 PM' },
      { id: 3, type: 'user', content: (<div className="whitespace-pre-line">Yes—we applied the Saks 5th Avenue solution (timeout settings, firewall rules) and got Voice integration working.{'\n'}Set up product recommendations architecture{'\n'}Completed API integration testing{'\n'}Working on Data Cloud connector</div>), timestamp: '3:16 PM' },
      { id: 4, type: 'agent', content: agentSolutionAndBlockers, timestamp: '3:16 PM' },
      { id: 5, type: 'user', content: 'Presentation went well—they loved the demo. Meeting Prep: significant defects in progress. Voice, New Agentforce Builder.', timestamp: '3:17 PM' },
      { id: 6, type: 'agent', content: agentFdeSummary, timestamp: '3:17 PM' },
    ],
    // Step 3: User "Yup, post it" + Agent "Added to Canvas"
    [
      { id: 1, type: 'agent', content: agentLastWeekStats, timestamp: '3:15 PM' },
      { id: 2, type: 'agent', content: agentFridayPrompt, timestamp: '3:15 PM' },
      { id: 3, type: 'user', content: (<div className="whitespace-pre-line">Yes—we applied the Saks 5th Avenue solution (timeout settings, firewall rules) and got Voice integration working.{'\n'}Set up product recommendations architecture{'\n'}Completed API integration testing{'\n'}Working on Data Cloud connector</div>), timestamp: '3:16 PM' },
      { id: 4, type: 'agent', content: agentSolutionAndBlockers, timestamp: '3:16 PM' },
      { id: 5, type: 'user', content: 'Presentation went well—they loved the demo. Meeting Prep: significant defects in progress. Voice, New Agentforce Builder.', timestamp: '3:17 PM' },
      { id: 6, type: 'agent', content: agentFdeSummary, timestamp: '3:17 PM' },
      { id: 7, type: 'user', content: 'Yup, post it', timestamp: '3:18 PM' },
      { id: 8, type: 'agent', content: (
        <button
          type="button"
          onClick={() => canvasOpenRef.current?.open?.()}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 cursor-pointer hover:underline border-0 bg-transparent p-0 text-left font-inherit animate-pulse-cta"
        >
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm font-medium">Added to Canvas: Shark Ninja</span>
        </button>
      ), timestamp: '3:18 PM' },
    ],
  ];

  const canvasContentWeeklyCheckin = (
    <div className="space-y-4">
      {/* Previous updates */}
      <div>
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Previous updates</h4>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-xs font-semibold text-slate-600 mb-1">Jan 30, 2025</p>
            <p className="text-sm text-slate-700">Voice integration blocked—connection timeout. Reached out to similar teams for solutions.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-xs font-semibold text-slate-600 mb-1">Jan 23, 2025</p>
            <p className="text-sm text-slate-700">Kickoff completed. Architecture planning in progress. Executive presentation scheduled for Feb.</p>
          </div>
        </div>
      </div>

      {/* This week */}
      <div className="pt-3 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Feb 6, 2025</h4>
        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold text-slate-700 mb-1">Team</p>
            <p className="text-sm text-slate-800">Account Team: Peter Ryttel, Victor Rivera · FDE Pod: Martin Kornstein</p>
            <p className="text-sm text-slate-800 mt-0.5">Sponsor: Ajay Angadala - Managing Director · 3 agents</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700 mb-1">Accomplishments</p>
            <ul className="text-sm text-slate-700 space-y-0.5">
              <li>• Resolved Voice integration timeout (Saks 5th Avenue solution)</li>
              <li>• Executive presentation went well</li>
              <li>• Established product recommendations architecture</li>
              <li>• Completed API integration testing</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700 mb-1">Blockers</p>
            <ul className="text-sm text-slate-700 space-y-0.5">
              <li>• Data Cloud connector configuration pending</li>
              <li>• Significant defects still in progress</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700 mb-1">Features in use</p>
            <p className="text-sm text-slate-800">Voice, New Agentforce Builder</p>
          </div>
        </div>
      </div>
    </div>
  );

  const currentMessages = conversationSteps[step] || [];
  const nextStep = conversationSteps[step + 1];
  const nextNewMessage = nextStep?.[currentMessages.length];
  const nextUserFromStep = nextNewMessage?.type === 'user' && typeof nextNewMessage.content === 'string'
    ? nextNewMessage.content
    : null;
  const inputBarOverrides: Record<number, string> = {
    0: 'Yes—we applied the Saks 5th Avenue solution (timeout settings, firewall rules) and got Voice integration working.\nSet up product recommendations architecture\nCompleted API integration testing\nWorking on Data Cloud connector',
    1: 'Presentation went well—they loved the demo. Meeting Prep: significant defects in progress. Voice, New Agentforce Builder.',
    2: 'Yup, post it',
  };
  const nextUserMessageText = inputBarOverrides[step] ?? nextUserFromStep;

  const handleSend = () => {
    if (step >= conversationSteps.length - 1 || isAgentThinking) return;
    setPendingUserMessage(nextUserMessageText ?? '');
    setIsAgentThinking(true);
  };

  useEffect(() => {
    if (!isAgentThinking) return;
    const timer = setTimeout(() => {
      setStep((s) => s + 1);
      setIsAgentThinking(false);
      setPendingUserMessage(null);
    }, THINKING_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isAgentThinking]);

  useEffect(() => {
    const scrollToBottom = () => {
      const el = messagesEndRef.current;
      if (!el) return;
      const scrollParent = el.closest('.overflow-y-auto');
      if (scrollParent) {
        // Only scroll the messages container, not the page - use scrollTo on the specific element
        scrollParent.scrollTo({ top: scrollParent.scrollHeight, behavior: 'smooth' });
      }
    };
    const timer = setTimeout(scrollToBottom, 350);
    return () => clearTimeout(timer);
  }, [step, pendingUserMessage, isAgentThinking, currentMessages.length]);

  const handleReset = () => {
    setStep(0);
  };

  const isFinalStep = step === conversationSteps.length - 1;

  return (
    <div>
      <SlackPrototype
        inputBarContent={nextUserMessageText}
        onSend={handleSend}
        sendDisabled={isAgentThinking}
        showCanvasPanel={isFinalStep}
        canvasContent={isFinalStep ? canvasContentWeeklyCheckin : undefined}
        canvasTitle="Shark Ninja - Feb 6, 2025"
        canvasFooterLabel="Searchable by Slackbot · Rolled up to leadership & product council"
        canvasOpenRef={canvasOpenRef}
      >
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {currentMessages.map((message) => (
              <motion.div
                key={message.id}
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
                <div className={`max-w-[70%] ${message.type === 'user' ? 'order-1' : ''}`}>
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
            {pendingUserMessage && (
              <motion.div
                key="pending-user"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 justify-end"
              >
                <div className="max-w-[70%] order-1">
                  <div className="rounded-2xl px-4 py-2.5 bg-[#007A5A] text-white rounded-tr-sm">
                    <div className="text-sm leading-relaxed whitespace-pre-line">{pendingUserMessage}</div>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 px-1 text-right">Just now</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            )}
            {isAgentThinking && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 justify-start"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-slate-100">
                  <img src="/images/slackbot.png" alt="Slackbot" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl px-4 py-3 bg-white rounded-tl-sm border border-slate-200">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} className="h-1" aria-hidden />
        </div>
      </SlackPrototype>

      {step === conversationSteps.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-6"
        >
          <button
            onClick={handleReset}
            className="px-6 py-2.5 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium shadow-sm"
          >
            Restart Scenario
          </button>
        </motion.div>
      )}
    </div>
  );
}
