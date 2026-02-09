import type { ReactNode } from 'react';
import { Hash, Plus, Search } from 'lucide-react';

interface SlackPrototypeProps {
  children: ReactNode;
  channelName?: string;
}

export default function SlackPrototype({ children, channelName = '#fde-weekly-customer-update' }: SlackPrototypeProps) {
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

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Channel Header */}
          <div className="h-14 border-b border-slate-200 flex items-center px-4 bg-white">
            <Hash className="w-5 h-5 text-slate-600 mr-2" />
            <span className="font-semibold text-slate-900">{channelName}</span>
            <div className="ml-4 text-sm text-slate-500">FDE Pulse AI Agent</div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#F8F8F8]">
            {children}
          </div>

          {/* Message Input */}
          <div className="border-t border-slate-200 p-4 bg-white">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-slate-50 rounded-lg px-4 py-2 text-sm text-slate-600 border border-slate-200">
                Message #{channelName.replace('#', '')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
