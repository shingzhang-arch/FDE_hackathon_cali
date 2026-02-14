import { useState, useEffect, type ReactNode, type MutableRefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash, Plus, Search, Send, FileText, Bot, Smile, AtSign, Type } from 'lucide-react';
import SlackCanvasPanel from './SlackCanvasPanel';

export interface CanvasOpenRef {
  open: () => void;
}

interface SlackPrototypeProps {
  children: ReactNode;
  inputBarContent?: string;
  onSend?: () => void;
  sendDisabled?: boolean;
  showCanvasPanel?: boolean;
  canvasContent?: ReactNode;
  canvasTitle?: string;
  canvasFooterLabel?: string;
  canvasOpenRef?: MutableRefObject<CanvasOpenRef | null>;
  /** Name of the attached Canvas skill shown in the input/message area */
  attachedSkillName?: string;
}

export default function SlackPrototype({ children, inputBarContent, onSend, sendDisabled = false, showCanvasPanel = false, canvasContent, canvasTitle = 'Canvas', canvasFooterLabel, canvasOpenRef, attachedSkillName }: SlackPrototypeProps) {
  const [canvasOpen, setCanvasOpen] = useState(false);

  useEffect(() => {
    if (canvasOpenRef) {
      canvasOpenRef.current = {
        open: () => setCanvasOpen((prev) => !prev),
      };
    }
  }, [canvasOpenRef]);

  return (
    <div className="rounded-2xl border-2 border-slate-200 overflow-hidden bg-white shadow-xl w-full min-w-0">
      {/* Browser-like header */}
      <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 flex items-center gap-2 text-sm text-slate-600 font-medium">
            <svg width="16" height="16" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"/>
              <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"/>
              <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"/>
              <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.386" fill="#E01E5A"/>
            </svg>
            Slack Desktop
          </span>
        </div>
      </div>

      {/* Slack UI Container */}
      <div className="flex min-h-[750px] h-[800px] bg-white">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-[#4A154B] to-[#350D36] flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-[#5D2D5E]">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white font-bold text-lg">FDE Pulse</div>
              <Plus className="w-5 h-5 text-white opacity-70 hover:opacity-100 cursor-pointer" />
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-white opacity-50" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#5D2D5E] text-white placeholder-white/50 text-sm px-8 py-1.5 rounded border-0 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
          </div>

          {/* Channels & DMs List */}
          <div className="flex-1 overflow-y-auto p-2">
            <div className="text-[#AB9BA9] text-xs font-semibold uppercase px-2 py-1 mb-1">
              Channels
            </div>
            <div className="px-2 py-1.5 rounded hover:bg-[#5D2D5E] cursor-pointer flex items-center gap-2">
              <Hash className="w-4 h-4 text-[#AB9BA9]" />
              <span className="text-[#AB9BA9] text-sm">fde-weekly-customer-update</span>
            </div>
            <div className="px-2 py-1.5 rounded hover:bg-[#5D2D5E] cursor-pointer flex items-center gap-2">
              <Hash className="w-4 h-4 text-[#AB9BA9]" />
              <span className="text-[#AB9BA9] text-sm">general</span>
            </div>
            <div className="px-2 py-1.5 rounded hover:bg-[#5D2D5E] cursor-pointer flex items-center gap-2">
              <Hash className="w-4 h-4 text-[#AB9BA9]" />
              <span className="text-[#AB9BA9] text-sm">random</span>
            </div>

            <div className="text-[#AB9BA9] text-xs font-semibold uppercase px-2 py-1 mt-4 mb-1">
              Direct Messages
            </div>
            <div className="px-2 py-1.5 rounded cursor-pointer flex items-center gap-2 bg-[#5D2D5E]/50">
              <div className="w-4 h-4 rounded-sm bg-[#4A154B] flex items-center justify-center flex-shrink-0 border border-[#AB9BA9]/40">
                <Bot className="w-3 h-3 text-white" />
              </div>
              <span className="text-white font-medium text-sm">Slackbot</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-white min-w-0">
          {/* DM Header */}
          <div className="flex-shrink-0 border-b border-slate-200 bg-white">
            <div className="h-14 flex items-center px-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mr-3 bg-slate-100">
                <img src="/images/slackbot.png" alt="Slackbot" className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold text-slate-900 text-lg">Slackbot</span>
              {showCanvasPanel && canvasContent && (
                <button
                  type="button"
                  onClick={() => setCanvasOpen((prev) => !prev)}
                  className={`ml-auto flex items-center gap-1.5 px-2 py-1 rounded border transition-colors animate-pulse-cta ${
                    canvasOpen
                      ? 'bg-blue-100 border-blue-300 text-blue-800'
                      : 'bg-white border-blue-200 text-blue-700 hover:bg-blue-50'
                  }`}
                  aria-pressed={canvasOpen}
                  aria-label={canvasOpen ? 'Hide canvas' : 'Show canvas'}
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium">Canvas</span>
                </button>
              )}
            </div>
          </div>

          {/* Messages + Input */}
          <div className="flex-1 flex flex-col min-h-0 relative">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-white">
              {children}
            </div>

            {/* Message Input */}
            <div className="flex-shrink-0 border-t border-slate-200 p-4 bg-white">
              {/* Attached Canvas skill card — matches Slack's native canvas chip */}
              {attachedSkillName && (
                <div className="mb-3 inline-flex items-center gap-3 px-3 py-2.5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#4A90D9] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="14" height="11" rx="2.5" fill="white"/>
                      <path d="M6 15L4.5 14H2.5C2.22 14 2 13.78 2 13.5V5.5C2 4.67 2.67 4 3.5 4H14.5C15.33 4 16 4.67 16 5.5V12.5C16 13.33 15.33 14 14.5 14H8L6 15Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-slate-900 leading-tight truncate max-w-[200px]">{attachedSkillName}</p>
                    <p className="text-xs text-[#1264A3] leading-tight mt-0.5 flex items-center gap-0.5">
                      Can edit <span className="text-[10px]">&#9662;</span>
                    </p>
                  </div>
                </div>
              )}
              <div className="rounded-lg border border-slate-300 bg-white overflow-hidden">
                <div className={`px-4 py-2.5 text-sm min-h-[40px] flex items-center ${
                  inputBarContent ? 'text-slate-900' : 'text-slate-500'
                }`}>
                  {inputBarContent || 'Message Slackbot'}
                </div>
                {/* Toolbar row with + button, formatting, emoji, @, and send */}
                <div className="flex items-center justify-between px-2 py-1.5 border-t border-slate-100">
                  <div className="flex items-center gap-0.5">
                    <button className="p-1.5 rounded hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors" aria-label="Attach">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button className="p-1.5 rounded hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors" aria-label="Format">
                      <Type className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors" aria-label="Emoji">
                      <Smile className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors" aria-label="Mention">
                      <AtSign className="w-4 h-4" />
                    </button>
                  </div>
                  {inputBarContent && onSend && (
                    <button
                      onClick={onSend}
                      disabled={sendDisabled}
                      className={`p-1.5 rounded transition-colors ${
                        sendDisabled
                          ? 'bg-slate-50 text-slate-400 cursor-not-allowed'
                          : 'bg-[#007A5A] hover:bg-[#006B4F] text-white animate-pulse-cta'
                      }`}
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" strokeWidth={2} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Canvas overlay */}
            <AnimatePresence>
              {showCanvasPanel && canvasContent && canvasOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 z-10 flex justify-end bg-black/20"
                  onClick={() => setCanvasOpen(false)}
                >
                  <motion.div
                    initial={{ x: 340 }}
                    animate={{ x: 0 }}
                    exit={{ x: 340 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="h-full shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <SlackCanvasPanel
                      content={canvasContent}
                      title={canvasTitle}
                      show={true}
                      footerLabel={canvasFooterLabel}
                      defaultExpanded={true}
                      onClose={() => setCanvasOpen(false)}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
