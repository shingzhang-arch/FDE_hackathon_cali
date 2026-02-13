import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlackPrototype from './SlackPrototype';
import { Bot, User, AlertCircle, CheckCircle2, Target } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'agent';
  content: React.ReactNode;
  timestamp?: string;
}

export default function Scenario3LeadershipInsights() {
  const [step, setStep] = useState(0);

  const conversationSteps: Message[][] = [
    // Step 0: Agent surfaces leadership themes (proactive - no user message first)
    [
      {
        id: 1,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Here are the top themes across FDE projects this week:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold text-amber-900">3 projects blocked on Data Cloud connectors</span>
                </div>
                <p className="text-sm text-amber-800">
                  Teams Alpha, Beta, and ADP demo all facing connection timeout issues. Solutions identified: timeout config, firewall rules, proxy settings.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-900">2 teams completed voice integrations</span>
                </div>
                <p className="text-sm text-green-800">
                  Team 1 and Team 3 delivered. Architecture docs and contacts available in Canvas.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold text-purple-900">Product priority request: better error handling</span>
                </div>
                <p className="text-sm text-purple-800">
                  Multiple teams need improved error handling and retry logic for Data Cloud connectors. Critical for ADP demo.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Would you like me to add this to the leadership Canvas?</p>
          </div>
        ),
        timestamp: '9:00 AM',
      },
    ],
    // Step 1: User confirms, agent adds to Canvas
    [
      {
        id: 1,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Here are the top themes across FDE projects this week:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold text-amber-900">3 projects blocked on Data Cloud connectors</span>
                </div>
                <p className="text-sm text-amber-800">
                  Teams Alpha, Beta, and ADP demo all facing connection timeout issues.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-900">2 teams completed voice integrations</span>
                </div>
                <p className="text-sm text-green-800">
                  Team 1 and Team 3 delivered.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold text-purple-900">Product priority request: better error handling</span>
                </div>
                <p className="text-sm text-purple-800">
                  Multiple teams need improved error handling for Data Cloud connectors.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Would you like me to add this to the leadership Canvas?</p>
          </div>
        ),
        timestamp: '9:00 AM',
      },
      {
        id: 2,
        type: 'user',
        content: 'Yes, add it',
        timestamp: '9:01 AM',
      },
      {
        id: 3,
        type: 'agent',
        content: (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Added to leadership Canvas</span>
          </div>
        ),
        timestamp: '9:01 AM',
      },
    ],
  ];

  const inputBarOverrides: Record<number, string> = {
    0: 'Yes, add it',
  };
  const nextUserMessageText = inputBarOverrides[step];

  const handleSend = () => {
    if (step < conversationSteps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleReset = () => setStep(0);

  const isFinalStep = step === conversationSteps.length - 1;

  const canvasContentLeadership = (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-slate-900 mb-2">Weekly Themes - Leadership View</h4>
        <p className="text-xs text-slate-600 mb-3">Aggregated from all FDE project check-ins</p>
      </div>
      <div>
        <h4 className="font-semibold text-amber-900 mb-2">Common Blockers</h4>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
          <li>3 projects blocked on Data Cloud connectors (timeout, firewall, proxy)</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-green-900 mb-2">Wins</h4>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
          <li>2 teams completed voice integrations</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-purple-900 mb-2">Product Council Callouts</h4>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
          <li>Error handling and retry logic for Data Cloud connectors</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <SlackPrototype
        channelName="#fde-leadership"
        inputBarContent={nextUserMessageText}
        onSend={handleSend}
        showCanvasPanel={isFinalStep}
        canvasContent={isFinalStep ? canvasContentLeadership : undefined}
        canvasTitle="Leadership Insights"
        canvasFooterLabel="Searchable by Slackbot · Rolled up to leadership & product council"
      >
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {conversationSteps[step]?.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'agent' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
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
          </AnimatePresence>
        </div>
      </SlackPrototype>

      {step === conversationSteps.length - 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-6">
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
