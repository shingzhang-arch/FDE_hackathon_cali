import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Search, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface SlackCanvasPanelProps {
  content: ReactNode;
  title: string;
  show: boolean;
  footerLabel?: string;
  defaultExpanded?: boolean;
  onClose?: () => void;
}

export default function SlackCanvasPanel({ content, title, show, footerLabel, defaultExpanded = false, onClose }: SlackCanvasPanelProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const isOverlay = !!onClose;
  const displayExpanded = isOverlay ? true : expanded;
  const defaultFooter = 'Searchable by Slackbot · Rolled up to leadership & product council';
  const displayFooter = footerLabel ?? defaultFooter;

  if (!show) return null;

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: displayExpanded ? 340 : 48, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col border-l border-slate-200 bg-white overflow-hidden shrink-0"
    >
      {/* Canvas Header - toggle expand when sidebar, or close when overlay */}
      <div className="p-3 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
        <button
          type="button"
          onClick={isOverlay ? undefined : () => setExpanded(!expanded)}
          className={`flex-1 flex items-center gap-2 transition-colors text-left min-w-0 ${!isOverlay ? 'hover:bg-slate-100 rounded' : 'cursor-default'}`}
          aria-expanded={displayExpanded}
          aria-label={displayExpanded ? 'Collapse canvas' : 'Expand canvas'}
        >
          <FileText className="w-4 h-4 text-slate-600 flex-shrink-0" />
          {displayExpanded ? (
            <>
              <span className="text-sm font-semibold text-slate-900 truncate flex-1">{title}</span>
              {!isOverlay && <ChevronRight className="w-4 h-4 text-slate-500 flex-shrink-0" />}
            </>
          ) : (
            <div className="flex flex-col items-center gap-1.5 flex-1">
              <ChevronLeft className="w-4 h-4 text-slate-500" />
            </div>
          )}
        </button>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
            aria-label="Close canvas"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {displayExpanded && (
          <>
            {/* Canvas Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 overflow-y-auto p-4 text-sm text-slate-700 min-w-[288px]"
            >
              {content}
            </motion.div>

            {/* Canvas Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-3 border-t border-slate-200 bg-slate-50 flex items-center gap-2 flex-wrap"
            >
              <Search className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
              <span className="text-xs text-slate-600">{displayFooter}</span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
