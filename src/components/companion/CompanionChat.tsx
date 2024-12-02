import { useState } from 'react';
import { Send, Mic } from 'lucide-react';
import VirtualAvatar from './VirtualAvatar';

export default function CompanionChat() {
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, text: "Good morning, Dad! Did you take your medicine today?", sender: 'companion' },
    { id: 2, text: "Not yet", sender: 'user' },
    { id: 3, text: "Let me remind you - it's time for your morning pills. The blue and white ones. I'll help you remember which is which.", sender: 'companion' },
  ];

  return (
    <div className="space-y-4">
      <VirtualAvatar />
      
      <div className="space-y-4 h-[400px] overflow-y-auto pr-2 scrollbar-hidden">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                msg.sender === 'user'
                  ? 'bg-purple-500/20 text-purple-100'
                  : 'bg-slate-700/50 text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button className="p-3 bg-slate-800/50 rounded-xl text-slate-400 hover:text-purple-400 transition-colors">
          <Mic className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        />
        <button className="p-3 bg-purple-500/20 rounded-xl text-purple-400 hover:bg-purple-500/30 transition-colors">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}