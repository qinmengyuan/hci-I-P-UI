import { useState } from 'react';
import { UserCircle, MessageCircle, Heart, Calendar, Clock } from 'lucide-react';
import CompanionChat from './companion/CompanionChat';
import CompanionSchedule from './companion/CompanionSchedule';
import CompanionMemories from './companion/CompanionMemories';

export default function DigitalCompanion() {
  const [activeView, setActiveView] = useState<'chat' | 'schedule' | 'memories'>('chat');

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-lg border border-slate-700/50">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Digital Companion"
              className="w-20 h-20 rounded-full object-cover border-2 border-purple-400"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900"></div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Sarah Chen</h2>
            <p className="text-slate-400">Your Digital Family Companion</p>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveView('chat')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium ${
              activeView === 'chat'
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            <MessageCircle className="w-5 h-5 mx-auto mb-1" />
            Chat
          </button>
          <button
            onClick={() => setActiveView('schedule')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium ${
              activeView === 'schedule'
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            <Calendar className="w-5 h-5 mx-auto mb-1" />
            Schedule
          </button>
          <button
            onClick={() => setActiveView('memories')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium ${
              activeView === 'memories'
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            <Heart className="w-5 h-5 mx-auto mb-1" />
            Memories
          </button>
        </div>

        {activeView === 'chat' && <CompanionChat />}
        {activeView === 'schedule' && <CompanionSchedule />}
        {activeView === 'memories' && <CompanionMemories />}
      </div>
    </div>
  );
}