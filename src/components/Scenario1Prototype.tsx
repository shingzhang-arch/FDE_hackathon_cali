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

const THINKING_DELAY_MS = 1200;

export default function Scenario1Prototype() {
  const [step, setStep] = useState(0);
  const [isAgentThinking, setIsAgentThinking] = useState(false);
  const [pendingUserMessage, setPendingUserMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const agentFirstResponse = (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        Great to hear you&apos;re kicking off a voice agent project and have a workshop planned for next week. Here are some similar projects and resources that might help you get started:
      </p>
      <div>
        <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1.5">Delivered (similar use cases)</p>
        <ul className="text-sm text-slate-700 space-y-1">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Blue Cross and Blue Shield: Voice agent for customer service - Q4 2025
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Zing Health: Voice analytics dashboard - Q3 2025
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1.5">In-flight (similar projects)</p>
        <ul className="text-sm text-slate-700 space-y-1">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Disney: Voice integration with Data Cloud - In progress
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Shark Ninja: Product recommendations - Voice agent phase starting
            </a>
          </li>
        </ul>
      </div>
      <div className="pt-3 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">Workshop preparation</p>
        <div className="space-y-2">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline block">
            Workshop planning guide
          </a>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline block">
            Voice agent kickoff checklist
          </a>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline block">
            Workshop Template
          </a>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-600">What progress have you made this week?</p>
    </div>
  );

  const agentBlockersPrompt = (
    <div className="space-y-2">
      <p className="text-sm text-slate-600">
        Any blockers? And which features are you using or planning—Voice, Agent Script, New Agentforce Builder, Observability, or New Testing Center?
      </p>
    </div>
  );

  const agentSaksSolution = (
    <p className="text-sm text-slate-600">
      I noticed you mentioned Voice integration timeout. Shark Ninja recently resolved a similar issue using the{' '}
      <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Saks 5th Avenue solution</a>
      —timeout settings and firewall rules. Would you like me to share those details?
    </p>
  );

  const agentSponsorQuestion = (
    <p className="text-sm text-slate-600">
      Who&apos;s your executive sponsor and how many agents are you updating for?
    </p>
  );

  const agentFdeSummary = (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">FDE Weekly Customer Update</p>
        <p className="text-sm font-semibold text-slate-900">Voice Agent Project</p>
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
        <p className="text-sm text-slate-800">Voice Agent / Plan My Day, Meeting Prep & Meeting Follow-Up</p>
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
          <li>• Established voice agent architecture foundation</li>
          <li>• Completed API integration testing</li>
          <li>• Initiated Data Cloud connector development</li>
        </ul>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-1">Blockers</p>
        <ul className="text-sm text-slate-800 space-y-1">
          <li>• Voice integration timeout</li>
          <li>• Data Cloud connector configuration pending</li>
          <li>• Significant number of defects still in progress</li>
        </ul>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-1">Features in use</p>
        <p className="text-sm text-slate-800">Voice, New Agentforce Builder</p>
      </div>
      <p className="mt-4 text-sm text-slate-600">Does this look good?</p>
    </div>
  );

  const conversationSteps: Message[][] = [
    // Step 0: Empty - first user message is in input bar, click send to advance
    [],
    // Step 1: User + Agent (delivered, in-flight, workshop prep + "What progress have you made this week?")
    [
      { id: 1, type: 'user', content: "I'm starting a new project on agent voice capabilities. We had our kickoff this week and are planning a workshop for next week.", timestamp: '2:34 PM' },
      { id: 2, type: 'agent', content: agentFirstResponse, timestamp: '2:34 PM' },
    ],
    // Step 2: User accomplishments + Agent ("Any blockers? Which features...?")
    [
      { id: 1, type: 'user', content: "I'm starting a new project on agent voice capabilities. We had our kickoff this week and are planning a workshop for next week.", timestamp: '2:34 PM' },
      { id: 2, type: 'agent', content: agentFirstResponse, timestamp: '2:34 PM' },
      { id: 3, type: 'user', content: (<div className="whitespace-pre-line">Set up initial voice agent architecture{'\n'}Completed API integration testing{'\n'}Working on Data Cloud connector</div>), timestamp: '2:37 PM' },
      { id: 4, type: 'agent', content: agentBlockersPrompt, timestamp: '2:38 PM' },
    ],
    // Step 3: User blockers + features + Agent (Saks solution + sponsor question as 2 messages)
    [
      { id: 1, type: 'user', content: "I'm starting a new project on agent voice capabilities. We had our kickoff this week and are planning a workshop for next week.", timestamp: '2:34 PM' },
      { id: 2, type: 'agent', content: agentFirstResponse, timestamp: '2:34 PM' },
      { id: 3, type: 'user', content: (<div className="whitespace-pre-line">Set up initial voice agent architecture{'\n'}Completed API integration testing{'\n'}Working on Data Cloud connector</div>), timestamp: '2:37 PM' },
      { id: 4, type: 'agent', content: agentBlockersPrompt, timestamp: '2:38 PM' },
      { id: 5, type: 'user', content: 'Voice integration timeout. Meeting Prep: significant defects in progress. Voice, New Agentforce Builder.', timestamp: '2:39 PM' },
      { id: 6, type: 'agent', content: agentSaksSolution, timestamp: '2:39 PM' },
      { id: 7, type: 'agent', content: agentSponsorQuestion, timestamp: '2:39 PM' },
    ],
    // Step 4: User sponsor + count + Agent (full FDE-style summary)
    [
      { id: 1, type: 'user', content: "I'm starting a new project on agent voice capabilities. We had our kickoff this week and are planning a workshop for next week.", timestamp: '2:34 PM' },
      { id: 2, type: 'agent', content: agentFirstResponse, timestamp: '2:34 PM' },
      { id: 3, type: 'user', content: (<div className="whitespace-pre-line">Set up initial voice agent architecture{'\n'}Completed API integration testing{'\n'}Working on Data Cloud connector</div>), timestamp: '2:37 PM' },
      { id: 4, type: 'agent', content: agentBlockersPrompt, timestamp: '2:38 PM' },
      { id: 5, type: 'user', content: 'Voice integration timeout. Meeting Prep: significant defects in progress. Voice, New Agentforce Builder.', timestamp: '2:39 PM' },
      { id: 6, type: 'agent', content: agentSaksSolution, timestamp: '2:39 PM' },
      { id: 7, type: 'agent', content: agentSponsorQuestion, timestamp: '2:39 PM' },
      { id: 8, type: 'user', content: 'Ajay Angadala - Managing Director. 3 agents.', timestamp: '2:41 PM' },
      { id: 9, type: 'agent', content: agentFdeSummary, timestamp: '2:41 PM' },
    ],
    // Step 5: User "Yup, post it" + Agent "Added to Canvas"
    [
      { id: 1, type: 'user', content: "I'm starting a new project on agent voice capabilities. We had our kickoff this week and are planning a workshop for next week.", timestamp: '2:34 PM' },
      { id: 2, type: 'agent', content: agentFirstResponse, timestamp: '2:34 PM' },
      { id: 3, type: 'user', content: (<div className="whitespace-pre-line">Set up initial voice agent architecture{'\n'}Completed API integration testing{'\n'}Working on Data Cloud connector</div>), timestamp: '2:37 PM' },
      { id: 4, type: 'agent', content: agentBlockersPrompt, timestamp: '2:38 PM' },
      { id: 5, type: 'user', content: 'Voice integration timeout. Meeting Prep: significant defects in progress. Voice, New Agentforce Builder.', timestamp: '2:39 PM' },
      { id: 6, type: 'agent', content: agentSaksSolution, timestamp: '2:39 PM' },
      { id: 7, type: 'agent', content: agentSponsorQuestion, timestamp: '2:39 PM' },
      { id: 8, type: 'user', content: 'Ajay Angadala - Managing Director. 3 agents.', timestamp: '2:41 PM' },
      { id: 9, type: 'agent', content: agentFdeSummary, timestamp: '2:41 PM' },
      { id: 10, type: 'user', content: 'Yup, post it', timestamp: '2:42 PM' },
      { id: 11, type: 'agent', content: (<div className="flex items-center gap-2 text-green-600 animate-pulse-cta"><CheckCircle2 className="w-4 h-4" /><span className="text-sm font-medium">Added to Canvas</span></div>), timestamp: '2:42 PM' },
    ],
  ];

  const canvasContentProjectStartup = (
    <div className="space-y-4">
      <div>
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">FDE Weekly Customer Update</h4>
        <h4 className="font-semibold text-slate-900 mb-2">Voice Agent Project</h4>
        <p className="text-xs text-slate-600">Account Channel: #fde-weekly-customer-update</p>
        <p className="text-xs text-slate-600">GEO: AMER · OU: AMER REG</p>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-700 mb-1">Team</h4>
        <p className="text-sm text-slate-800">Account Team: Peter Ryttel, Victor Rivera · FDE Pod: Martin Kornstein</p>
        <p className="text-sm text-slate-800 mt-1">Customer Executive Sponsor: Ajay Angadala - Managing Director, Technology Executive</p>
        <p className="text-sm text-slate-800 mt-1">Number of Agents: 3</p>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-700 mb-1">Agent 1 Overview</h4>
        <p className="text-sm text-slate-800">Voice Agent / Plan My Day, Meeting Prep & Meeting Follow-Up</p>
        <p className="text-xs text-slate-600">Status: Watch · Type: Employee Agent · Expected Go-Live: 2026-02-20</p>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-700 mb-1">Progress</h4>
        <ul className="text-sm text-slate-700 space-y-1">
          <li>• Meeting Prep: Preparing for Feb release; significant number of defects still in progress</li>
          <li>• Meeting Follow-Up: User stories completed; working on completing critical defects</li>
          <li>• Plan My Day: Preparing for Feb release; working on completing critical defects</li>
        </ul>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-700 mb-1">This Week&apos;s Accomplishments</h4>
        <ul className="text-sm text-slate-700 space-y-1">
          <li>• Established voice agent architecture foundation</li>
          <li>• Completed API integration testing</li>
          <li>• Initiated Data Cloud connector development</li>
        </ul>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-700 mb-1">Blockers</h4>
        <ul className="text-sm text-slate-700 space-y-1">
          <li>• Voice integration timeout</li>
          <li>• Data Cloud connector configuration pending</li>
          <li>• Significant number of defects still in progress</li>
        </ul>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-700 mb-1">Features in use</h4>
        <p className="text-sm text-slate-800">Voice, New Agentforce Builder</p>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-700 mb-1">Delivered (similar use cases)</h4>
        <ul className="text-sm text-slate-700 space-y-1">
          <li>• Blue Cross and Blue Shield: Voice agent for customer service - Q4 2025</li>
          <li>• Zing Health: Voice analytics dashboard - Q3 2025</li>
        </ul>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-700 mb-1">Workshop prep links</h4>
        <ul className="text-sm text-slate-700 space-y-1">
          <li>• Workshop planning guide</li>
          <li>• Voice agent kickoff checklist</li>
          <li>• Discovery template</li>
        </ul>
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
    0: "I'm starting a new project on agent voice capabilities. We had our kickoff this week and are planning a workshop for next week.",
    1: 'Set up initial voice agent architecture\nCompleted API integration testing\nWorking on Data Cloud connector',
    2: 'Voice integration timeout. Meeting Prep: significant defects in progress. Voice, New Agentforce Builder.',
    3: 'Ajay Angadala - Managing Director. 3 agents.',
    4: 'Yup, post it',
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
        scrollParent.scrollTo({ top: scrollParent.scrollHeight, behavior: 'smooth' });
      }
    };
    const timer = setTimeout(scrollToBottom, 350);
    return () => clearTimeout(timer);
  }, [step, pendingUserMessage, isAgentThinking]);

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
        canvasContent={isFinalStep ? canvasContentProjectStartup : undefined}
        canvasTitle="FDE Weekly Customer Update"
        canvasFooterLabel="Searchable by Slackbot · Rolled up to leadership & product council"
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

      {/* Restart - Outside Slack interface, only when conversation is complete */}
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
