import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash, Plus, Search, Send, FileText } from 'lucide-react';
import SlackCanvasPanel from './SlackCanvasPanel';

interface SlackPrototypeProps {
  children: ReactNode;
  channelName?: string;
  inputBarContent?: string;
  onSend?: () => void;
  sendDisabled?: boolean;
  showCanvasPanel?: boolean;
  canvasContent?: ReactNode;
  canvasTitle?: string;
  canvasFooterLabel?: string;
}

export default function SlackPrototype({ children, channelName = '#fde-weekly-customer-update', inputBarContent, onSend, sendDisabled = false, showCanvasPanel = false, canvasContent, canvasTitle = 'Canvas', canvasFooterLabel }: SlackPrototypeProps) {
  const [canvasOpen, setCanvasOpen] = useState(false);

  return (
    <div className="rounded-2xl border-2 border-slate-200 overflow-hidden bg-white shadow-xl">
      {/* Browser-like header */}
      <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm text-slate-600 font-medium">Slack Desktop</span>
        </div>
      </div>

      {/* Slack UI Container */}
      <div className="flex h-[600px] bg-slate-50">
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

          {/* Channels List */}
          <div className="flex-1 overflow-y-auto p-2">
            <div className="text-[#AB9BA9] text-xs font-semibold uppercase px-2 py-1 mb-1">
              Channels
            </div>
            <div className="px-2 py-1.5 rounded hover:bg-[#5D2D5E] cursor-pointer flex items-center gap-2 bg-[#5D2D5E]/50">
              <Hash className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm">fde-weekly-customer-update</span>
            </div>
            <div className="px-2 py-1.5 rounded hover:bg-[#5D2D5E] cursor-pointer flex items-center gap-2">
              <Hash className="w-4 h-4 text-[#AB9BA9]" />
              <span className="text-[#AB9BA9] text-sm">general</span>
            </div>
            <div className="px-2 py-1.5 rounded hover:bg-[#5D2D5E] cursor-pointer flex items-center gap-2">
              <Hash className="w-4 h-4 text-[#AB9BA9]" />
              <span className="text-[#AB9BA9] text-sm">random</span>
            </div>
          </div>
        </div>

        {/* Main Content Area - flex to allow Canvas panel on right */}
        <div className="flex-1 flex flex-col bg-white min-w-0">
          {/* Channel Header */}
          <div className="h-14 border-b border-slate-200 flex items-center px-4 bg-white">
            <Hash className="w-5 h-5 text-slate-600 mr-2" />
            <span className="font-semibold text-slate-900">{channelName}</span>
            <div className="ml-4 text-sm text-slate-500">FDE Pulse AI Agent</div>
            {showCanvasPanel && canvasContent && (
              <button
                type="button"
                onClick={() => setCanvasOpen((prev) => !prev)}
                className={`ml-auto flex items-center gap-1.5 px-2 py-1 rounded border transition-colors ${
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

          {/* Messages + Input */}
          <div className="flex-1 flex flex-col min-h-0 relative">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#F8F8F8]">
              {children}
            </div>

            {/* Message Input */}
            <div className="border-t border-slate-200 p-4 bg-white">
              <div className="flex items-center gap-2">
                <div className={`flex-1 rounded-lg px-4 py-2.5 text-sm border ${
                  inputBarContent 
                    ? 'bg-white border-slate-300 text-slate-900' 
                    : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}>
                  {inputBarContent || `Message #${channelName.replace('#', '')}`}
                </div>
                {inputBarContent && onSend && (
                  <button
                    onClick={onSend}
                    disabled={sendDisabled}
                    className={`p-2.5 rounded-lg flex-shrink-0 transition-colors ${
                      sendDisabled
                        ? 'bg-slate-50 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800'
                    }`}
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5" strokeWidth={2} />
                  </button>
                )}
              </div>
            </div>

            {/* Canvas overlay - slides in from right when button clicked */}
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
