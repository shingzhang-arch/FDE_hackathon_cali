import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlackPrototype from './SlackPrototype';
import { Bot, User, ChevronRight, AlertCircle, ExternalLink, CheckCircle2, Clock, Users, Target } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'agent';
  content: React.ReactNode;
  timestamp?: string;
}

export default function Scenario2Prototype() {
  const [step, setStep] = useState(0);
  const [hasPriority, setHasPriority] = useState(true);

  const conversationSteps: Message[][] = [
    // Step 0: User wants to submit weekly update
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
    ],
    // Step 1: Agent asks about previous blocker
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
    ],
    // Step 2: User describes new blocker
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
    ],
    // Step 3: Agent finds similar issues
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
    ],
    // Step 4: Agent offers to help with update
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
    ],
    // Step 5: User accepts help
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
      {
        id: 6,
        type: 'user',
        content: 'Yes, that would be helpful',
        timestamp: '3:17 PM',
      },
    ],
    // Step 6: Agent asks about accomplishments
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
      {
        id: 6,
        type: 'user',
        content: 'Yes, that would be helpful',
        timestamp: '3:17 PM',
      },
      {
        id: 7,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Great! Let me help you put together a complete update. I'll ask a few questions to make sure we capture everything.</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 mb-2">What did you accomplish this week?</p>
                  <p className="text-sm text-blue-700">What progress did you make on the ADP engagement?</p>
                </div>
              </div>
              <button
                onClick={() => setTimeout(() => setStep(7), 300)}
                className="w-full text-left p-3 bg-white rounded border border-blue-300 hover:bg-blue-50 transition-colors text-sm text-slate-700"
              >
                <ChevronRight className="w-4 h-4 inline mr-2 text-blue-600" />
                Provide accomplishments
              </button>
            </div>
          </div>
        ),
        timestamp: '3:18 PM',
      },
    ],
    // Step 7: User provides accomplishments
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
      {
        id: 6,
        type: 'user',
        content: 'Yes, that would be helpful',
        timestamp: '3:17 PM',
      },
      {
        id: 7,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Great! Let me help you put together a complete update. I'll ask a few questions to make sure we capture everything.</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 mb-2">What did you accomplish this week?</p>
                  <p className="text-sm text-blue-700">What progress did you make on the ADP engagement?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:18 PM',
      },
      {
        id: 8,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Completed initial discovery session with ADP team{'\n'}
            Delivered architecture proposal for Data Cloud integration{'\n'}
            Started setting up demo environment
          </div>
        ),
        timestamp: '3:19 PM',
      },
    ],
    // Step 8: Agent asks about product priorities
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
      {
        id: 6,
        type: 'user',
        content: 'Yes, that would be helpful',
        timestamp: '3:17 PM',
      },
      {
        id: 7,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Great! Let me help you put together a complete update. I'll ask a few questions to make sure we capture everything.</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 mb-2">What did you accomplish this week?</p>
                  <p className="text-sm text-blue-700">What progress did you make on the ADP engagement?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:18 PM',
      },
      {
        id: 8,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Completed initial discovery session with ADP team{'\n'}
            Delivered architecture proposal for Data Cloud integration{'\n'}
            Started setting up demo environment
          </div>
        ),
        timestamp: '3:19 PM',
      },
      {
        id: 9,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Thanks! Now, is there a feature or product capability that needs to be prioritized to unblock this engagement?</p>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-start gap-3 mb-3">
                <Target className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-purple-900 mb-2">Product Priority Needed?</p>
                  <p className="text-sm text-purple-700 mb-3">Is there a feature gap blocking progress? Why is it important?</p>
                  <button
                    onClick={() => {
                      setHasPriority(true);
                      setTimeout(() => setStep(9), 300);
                    }}
                    className="w-full text-left p-3 bg-white rounded border border-purple-300 hover:bg-purple-50 transition-colors text-sm text-slate-700"
                  >
                    <ChevronRight className="w-4 h-4 inline mr-2 text-purple-600" />
                    Yes, there's a priority needed
                  </button>
                  <button
                    onClick={() => {
                      setHasPriority(false);
                      setTimeout(() => setStep(11), 300);
                    }}
                    className="w-full text-left p-3 bg-white rounded border border-purple-300 hover:bg-purple-50 transition-colors text-sm text-slate-700 mt-2"
                  >
                    <ChevronRight className="w-4 h-4 inline mr-2 text-purple-600" />
                    No priority needed
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:20 PM',
      },
    ],
    // Step 9: User indicates priority needed
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
      {
        id: 6,
        type: 'user',
        content: 'Yes, that would be helpful',
        timestamp: '3:17 PM',
      },
      {
        id: 7,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Great! Let me help you put together a complete update. I'll ask a few questions to make sure we capture everything.</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 mb-2">What did you accomplish this week?</p>
                  <p className="text-sm text-blue-700">What progress did you make on the ADP engagement?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:18 PM',
      },
      {
        id: 8,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Completed initial discovery session with ADP team{'\n'}
            Delivered architecture proposal for Data Cloud integration{'\n'}
            Started setting up demo environment
          </div>
        ),
        timestamp: '3:19 PM',
      },
      {
        id: 9,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Thanks! Now, is there a feature or product capability that needs to be prioritized to unblock this engagement?</p>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-start gap-3 mb-3">
                <Target className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-purple-900 mb-2">Product Priority Needed?</p>
                  <p className="text-sm text-purple-700">Is there a feature gap blocking progress? Why is it important?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:20 PM',
      },
      {
        id: 10,
        type: 'user',
        content: (
          <div>
            <p>Yes - we need better error handling and retry logic for Data Cloud connectors. The timeout errors are blocking our demo, and ADP needs to see a reliable connection before they'll commit to the integration.</p>
          </div>
        ),
        timestamp: '3:21 PM',
      },
    ],
    // Step 10: User says no priority needed (alternative path)
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
      {
        id: 6,
        type: 'user',
        content: 'Yes, that would be helpful',
        timestamp: '3:17 PM',
      },
      {
        id: 7,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Great! Let me help you put together a complete update. I'll ask a few questions to make sure we capture everything.</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 mb-2">What did you accomplish this week?</p>
                  <p className="text-sm text-blue-700">What progress did you make on the ADP engagement?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:18 PM',
      },
      {
        id: 8,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Completed initial discovery session with ADP team{'\n'}
            Delivered architecture proposal for Data Cloud integration{'\n'}
            Started setting up demo environment
          </div>
        ),
        timestamp: '3:19 PM',
      },
      {
        id: 9,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Thanks! Now, is there a feature or product capability that needs to be prioritized to unblock this engagement?</p>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-start gap-3 mb-3">
                <Target className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-purple-900 mb-2">Product Priority Needed?</p>
                  <p className="text-sm text-purple-700">Is there a feature gap blocking progress? Why is it important?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:20 PM',
      },
      {
        id: 10,
        type: 'user',
        content: 'No, no product priority needed at this time',
        timestamp: '3:21 PM',
      },
      {
        id: 11,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Got it! A couple more quick questions to round out your update:</p>
            <div className="mt-4 space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-green-900 mb-1">What's the customer impact?</p>
                    <p className="text-sm text-green-700">How does this blocker affect ADP's timeline or decision-making?</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-start gap-3 mb-2">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-orange-900 mb-1">What's the timeline?</p>
                    <p className="text-sm text-orange-700">When do you need this resolved? Any deadlines or milestones?</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setTimeout(() => setStep(12), 300)}
              className="w-full mt-3 text-left p-3 bg-white rounded border border-blue-300 hover:bg-blue-50 transition-colors text-sm text-slate-700"
            >
              <ChevronRight className="w-4 h-4 inline mr-2 text-blue-600" />
              Provide impact and timeline
            </button>
          </div>
        ),
        timestamp: '3:22 PM',
      },
      {
        id: 12,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            <strong>Customer Impact:</strong> ADP can't proceed with their POC until we resolve the connector timeout. They have a board meeting in 3 weeks where they need to show progress.{'\n\n'}
            <strong>Timeline:</strong> Need this resolved within 2 weeks to meet their demo deadline. Critical path item.
          </div>
        ),
        timestamp: '3:23 PM',
      },
    ],
    // Step 11: Agent asks about customer impact and timeline (with priority path)
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
      {
        id: 6,
        type: 'user',
        content: 'Yes, that would be helpful',
        timestamp: '3:17 PM',
      },
      {
        id: 7,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Great! Let me help you put together a complete update. I'll ask a few questions to make sure we capture everything.</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 mb-2">What did you accomplish this week?</p>
                  <p className="text-sm text-blue-700">What progress did you make on the ADP engagement?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:18 PM',
      },
      {
        id: 8,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Completed initial discovery session with ADP team{'\n'}
            Delivered architecture proposal for Data Cloud integration{'\n'}
            Started setting up demo environment
          </div>
        ),
        timestamp: '3:19 PM',
      },
      {
        id: 9,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Thanks! Now, is there a feature or product capability that needs to be prioritized to unblock this engagement?</p>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-start gap-3 mb-3">
                <Target className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-purple-900 mb-2">Product Priority Needed?</p>
                  <p className="text-sm text-purple-700">Is there a feature gap blocking progress? Why is it important?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:20 PM',
      },
      {
        id: 10,
        type: 'user',
        content: (
          <div>
            <p>Yes - we need better error handling and retry logic for Data Cloud connectors. The timeout errors are blocking our demo, and ADP needs to see a reliable connection before they'll commit to the integration.</p>
          </div>
        ),
        timestamp: '3:21 PM',
      },
      {
        id: 11,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Got it! A couple more quick questions to round out your update:</p>
            <div className="mt-4 space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-green-900 mb-1">What's the customer impact?</p>
                    <p className="text-sm text-green-700">How does this blocker affect ADP's timeline or decision-making?</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-start gap-3 mb-2">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-orange-900 mb-1">What's the timeline?</p>
                    <p className="text-sm text-orange-700">When do you need this resolved? Any deadlines or milestones?</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setTimeout(() => setStep(12), 300)}
              className="w-full mt-3 text-left p-3 bg-white rounded border border-blue-300 hover:bg-blue-50 transition-colors text-sm text-slate-700"
            >
              <ChevronRight className="w-4 h-4 inline mr-2 text-blue-600" />
              Provide impact and timeline
            </button>
          </div>
        ),
        timestamp: '3:22 PM',
      },
    ],
    // Step 11: User provides impact and timeline
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
      {
        id: 6,
        type: 'user',
        content: 'Yes, that would be helpful',
        timestamp: '3:17 PM',
      },
      {
        id: 7,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Great! Let me help you put together a complete update. I'll ask a few questions to make sure we capture everything.</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 mb-2">What did you accomplish this week?</p>
                  <p className="text-sm text-blue-700">What progress did you make on the ADP engagement?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:18 PM',
      },
      {
        id: 8,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Completed initial discovery session with ADP team{'\n'}
            Delivered architecture proposal for Data Cloud integration{'\n'}
            Started setting up demo environment
          </div>
        ),
        timestamp: '3:19 PM',
      },
      {
        id: 9,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Thanks! Now, is there a feature or product capability that needs to be prioritized to unblock this engagement?</p>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-start gap-3 mb-3">
                <Target className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-purple-900 mb-2">Product Priority Needed?</p>
                  <p className="text-sm text-purple-700">Is there a feature gap blocking progress? Why is it important?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:20 PM',
      },
      {
        id: 10,
        type: 'user',
        content: (
          <div>
            <p>Yes - we need better error handling and retry logic for Data Cloud connectors. The timeout errors are blocking our demo, and ADP needs to see a reliable connection before they'll commit to the integration.</p>
          </div>
        ),
        timestamp: '3:21 PM',
      },
      {
        id: 11,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Got it! A couple more quick questions to round out your update:</p>
            <div className="mt-4 space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-green-900 mb-1">What's the customer impact?</p>
                    <p className="text-sm text-green-700">How does this blocker affect ADP's timeline or decision-making?</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-start gap-3 mb-2">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-orange-900 mb-1">What's the timeline?</p>
                    <p className="text-sm text-orange-700">When do you need this resolved? Any deadlines or milestones?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:22 PM',
      },
      {
        id: 12,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            <strong>Customer Impact:</strong> ADP can't proceed with their POC until we resolve the connector timeout. They have a board meeting in 3 weeks where they need to show progress.{'\n\n'}
            <strong>Timeline:</strong> Need this resolved within 2 weeks to meet their demo deadline. Critical path item.
          </div>
        ),
        timestamp: '3:23 PM',
      },
    ],
    // Step 13: Agent summarizes everything into formatted update
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
      {
        id: 6,
        type: 'user',
        content: 'Yes, that would be helpful',
        timestamp: '3:17 PM',
      },
      {
        id: 7,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Great! Let me help you put together a complete update. I'll ask a few questions to make sure we capture everything.</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 mb-2">What did you accomplish this week?</p>
                  <p className="text-sm text-blue-700">What progress did you make on the ADP engagement?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:18 PM',
      },
      {
        id: 8,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Completed initial discovery session with ADP team{'\n'}
            Delivered architecture proposal for Data Cloud integration{'\n'}
            Started setting up demo environment
          </div>
        ),
        timestamp: '3:19 PM',
      },
      {
        id: 9,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Thanks! Now, is there a feature or product capability that needs to be prioritized to unblock this engagement?</p>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-start gap-3 mb-3">
                <Target className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-purple-900 mb-2">Product Priority Needed?</p>
                  <p className="text-sm text-purple-700">Is there a feature gap blocking progress? Why is it important?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:20 PM',
      },
      {
        id: 10,
        type: 'user',
        content: (
          <div>
            <p>Yes - we need better error handling and retry logic for Data Cloud connectors. The timeout errors are blocking our demo, and ADP needs to see a reliable connection before they'll commit to the integration.</p>
          </div>
        ),
        timestamp: '3:21 PM',
      },
      {
        id: 11,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Got it! A couple more quick questions to round out your update:</p>
            <div className="mt-4 space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-green-900 mb-1">What's the customer impact?</p>
                    <p className="text-sm text-green-700">How does this blocker affect ADP's timeline or decision-making?</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-start gap-3 mb-2">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-orange-900 mb-1">What's the timeline?</p>
                    <p className="text-sm text-orange-700">When do you need this resolved? Any deadlines or milestones?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:22 PM',
      },
      {
        id: 12,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            <strong>Customer Impact:</strong> ADP can't proceed with their POC until we resolve the connector timeout. They have a board meeting in 3 weeks where they need to show progress.{'\n\n'}
            <strong>Timeline:</strong> Need this resolved within 2 weeks to meet their demo deadline. Critical path item.
          </div>
        ),
        timestamp: '3:23 PM',
      },
      {
        id: 13,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Perfect! Here's your complete weekly update for ADP:</p>
            <div className="mt-4 space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Accomplishments:
                </div>
                <div className="text-sm text-green-800 whitespace-pre-line">
                  • Completed initial discovery session with ADP team{'\n'}
                  • Delivered architecture proposal for Data Cloud integration{'\n'}
                  • Started setting up demo environment
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Blockers:
                </div>
                <div className="text-sm text-amber-800 whitespace-pre-line">
                  • Data Cloud connector timeout errors blocking demo setup{'\n'}
                  • Found similar issues resolved by Team Alpha and Team Beta (solutions: timeout config, firewall rules, proxy settings){'\n'}
                  • Connected with Team Gamma who's working on similar issue
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Product Priority Needed:
                </div>
                <div className="text-sm text-purple-800">
                  Better error handling and retry logic for Data Cloud connectors. Critical for ADP demo - they need reliable connection before committing to integration.
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Timeline & Impact:
                </div>
                <div className="text-sm text-orange-800 whitespace-pre-line">
                  • Need resolution within 2 weeks for demo deadline{'\n'}
                  • ADP board meeting in 3 weeks - blocker prevents POC progress{'\n'}
                  • Critical path item
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Does this look good? Ready to post?</p>
          </div>
        ),
        timestamp: '3:24 PM',
      },
    ],
    // Step 13: User approves and posts
    [
      {
        id: 1,
        type: 'user',
        content: 'I want to submit my weekly update for ADP',
        timestamp: '3:15 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p>Ok I see last week you were having an issue with data cloud, has that been resolved?</p>
          </div>
        ),
        timestamp: '3:15 PM',
      },
      {
        id: 3,
        type: 'user',
        content: (
          <div>
            <p>Yes, I'm trying to set up a Data Cloud connector for a customer demo, but I keep getting a "Connection timeout" error when testing the connection. Has anyone run into this before?</p>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">I found a few similar issues other FDE teams have faced! Here are the most relevant ones:</p>
            <div className="space-y-3 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Alpha - Data Cloud Connector Timeout</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Similar issue: Connection timeout during Data Cloud connector setup
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Increased timeout settings in connector config from 30s to 120s. Also found firewall rules blocking connection.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-blue-900">Team Beta - Data Cloud Demo Setup</span>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">
                  Related: Data Cloud connector timeout in demo environment
                </p>
                <div className="text-xs text-blue-700 mt-2">
                  <strong>Solution:</strong> Network proxy configuration issue. Required adding proxy settings to connector configuration.
                </div>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1">
                  View full thread <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-900">Team Gamma - Connection Issues</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded">In Progress</span>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Currently working on: Similar Data Cloud connector timeout
                </p>
                <div className="text-xs text-amber-700 mt-2">
                  <strong>Status:</strong> Testing workaround with retry logic. Team available for collaboration.
                </div>
                <a href="#" className="text-xs text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                  Connect with team <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Pattern detected:</strong> 3 teams have faced Data Cloud connector timeout issues. Common solutions include timeout configuration, firewall rules, and proxy settings.
              </p>
            </div>
          </div>
        ),
        timestamp: '3:16 PM',
      },
      {
        id: 5,
        type: 'agent',
        content: (
          <div>
            <p className="mb-2">Would you like me to help draft your weekly update including this blocker and the solutions found?</p>
          </div>
        ),
        timestamp: '3:17 PM',
      },
      {
        id: 6,
        type: 'user',
        content: 'Yes, that would be helpful',
        timestamp: '3:17 PM',
      },
      {
        id: 7,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Great! Let me help you put together a complete update. I'll ask a few questions to make sure we capture everything.</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 mb-2">What did you accomplish this week?</p>
                  <p className="text-sm text-blue-700">What progress did you make on the ADP engagement?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:18 PM',
      },
      {
        id: 8,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Completed initial discovery session with ADP team{'\n'}
            Delivered architecture proposal for Data Cloud integration{'\n'}
            Started setting up demo environment
          </div>
        ),
        timestamp: '3:19 PM',
      },
      {
        id: 9,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Thanks! Now, is there a feature or product capability that needs to be prioritized to unblock this engagement?</p>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-start gap-3 mb-3">
                <Target className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-purple-900 mb-2">Product Priority Needed?</p>
                  <p className="text-sm text-purple-700">Is there a feature gap blocking progress? Why is it important?</p>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:20 PM',
      },
      {
        id: 10,
        type: 'user',
        content: (
          <div>
            <p>Yes - we need better error handling and retry logic for Data Cloud connectors. The timeout errors are blocking our demo, and ADP needs to see a reliable connection before they'll commit to the integration.</p>
          </div>
        ),
        timestamp: '3:21 PM',
      },
      {
        id: 11,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Got it! A couple more quick questions to round out your update:</p>
            <div className="mt-4 space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-green-900 mb-1">What's the customer impact?</p>
                    <p className="text-sm text-green-700">How does this blocker affect ADP's timeline or decision-making?</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-start gap-3 mb-2">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-orange-900 mb-1">What's the timeline?</p>
                    <p className="text-sm text-orange-700">When do you need this resolved? Any deadlines or milestones?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        timestamp: '3:22 PM',
      },
      {
        id: 12,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            <strong>Customer Impact:</strong> ADP can't proceed with their POC until we resolve the connector timeout. They have a board meeting in 3 weeks where they need to show progress.{'\n\n'}
            <strong>Timeline:</strong> Need this resolved within 2 weeks to meet their demo deadline. Critical path item.
          </div>
        ),
        timestamp: '3:23 PM',
      },
      {
        id: 13,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">Perfect! Here's your complete weekly update for ADP:</p>
            <div className="mt-4 space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Accomplishments:
                </div>
                <div className="text-sm text-green-800 whitespace-pre-line">
                  • Completed initial discovery session with ADP team{'\n'}
                  • Delivered architecture proposal for Data Cloud integration{'\n'}
                  • Started setting up demo environment
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Blockers:
                </div>
                <div className="text-sm text-amber-800 whitespace-pre-line">
                  • Data Cloud connector timeout errors blocking demo setup{'\n'}
                  • Found similar issues resolved by Team Alpha and Team Beta (solutions: timeout config, firewall rules, proxy settings){'\n'}
                  • Connected with Team Gamma who's working on similar issue
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Product Priority Needed:
                </div>
                <div className="text-sm text-purple-800">
                  Better error handling and retry logic for Data Cloud connectors. Critical for ADP demo - they need reliable connection before committing to integration.
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Timeline & Impact:
                </div>
                <div className="text-sm text-orange-800 whitespace-pre-line">
                  • Need resolution within 2 weeks for demo deadline{'\n'}
                  • ADP board meeting in 3 weeks - blocker prevents POC progress{'\n'}
                  • Critical path item
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Does this look good? Ready to post?</p>
          </div>
        ),
        timestamp: '3:24 PM',
      },
      {
        id: 14,
        type: 'user',
        content: 'Yes, looks perfect. Post it!',
        timestamp: '3:25 PM',
      },
      {
        id: 15,
        type: 'agent',
        content: (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Posted to #fde-weekly-customer-update</span>
          </div>
        ),
        timestamp: '3:25 PM',
      },
    ],
  ];

  // Generate summary dynamically for step 13
  const getSummaryContent = () => {
    if (step === 13) {
      return (
        <div>
          <p className="mb-3">Perfect! Here's your complete weekly update for ADP:</p>
          <div className="mt-4 space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Accomplishments:
              </div>
              <div className="text-sm text-green-800 whitespace-pre-line">
                • Completed initial discovery session with ADP team{'\n'}
                • Delivered architecture proposal for Data Cloud integration{'\n'}
                • Started setting up demo environment
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Blockers:
              </div>
              <div className="text-sm text-amber-800 whitespace-pre-line">
                • Data Cloud connector timeout errors blocking demo setup{'\n'}
                • Found similar issues resolved by Team Alpha and Team Beta (solutions: timeout config, firewall rules, proxy settings){'\n'}
                • Connected with Team Gamma who's working on similar issue
              </div>
            </div>
            {hasPriority && (
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Product Priority Needed:
                </div>
                <div className="text-sm text-purple-800">
                  Better error handling and retry logic for Data Cloud connectors. Critical for ADP demo - they need reliable connection before committing to integration.
                </div>
              </div>
            )}
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Timeline & Impact:
              </div>
              <div className="text-sm text-orange-800 whitespace-pre-line">
                • Need resolution within 2 weeks for demo deadline{'\n'}
                • ADP board meeting in 3 weeks - blocker prevents POC progress{'\n'}
                • Critical path item
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">Does this look good? Ready to post?</p>
        </div>
      );
    }
    return null;
  };

  const currentMessages = conversationSteps[step] || [];
  
  // Replace summary message content for step 13
  const messagesToRender = currentMessages.map((message) => {
    if (step === 13 && message.id === 13 && message.type === 'agent') {
      return {
        ...message,
        content: getSummaryContent(),
      };
    }
    return message;
  });

  const handleNext = () => {
    if (step < conversationSteps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setHasPriority(true);
  };

  return (
    <div>
      <SlackPrototype>
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {messagesToRender.map((message) => (
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

          {/* Continue Button */}
          {step < conversationSteps.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-6"
            >
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-medium shadow-sm"
              >
                Continue Conversation
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* Reset Button */}
          {step === conversationSteps.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-6"
            >
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium shadow-sm"
              >
                Restart Scenario
              </button>
            </motion.div>
          )}
        </div>
      </SlackPrototype>
    </div>
  );
}
