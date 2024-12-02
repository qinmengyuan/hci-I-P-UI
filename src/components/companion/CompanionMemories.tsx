import { Calendar, Image as ImageIcon } from 'lucide-react';

export default function CompanionMemories() {
  const memories = [
    {
      date: 'Yesterday',
      title: 'Family Dinner',
      image: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      date: 'Last Week',
      title: 'Park Walk',
      image: 'https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      date: '2 Weeks Ago',
      title: 'Birthday Celebration',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=400&h=300',
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Shared Memories</h3>

      <div className="grid gap-4">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50"
          >
            <div className="aspect-video relative">
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-4">
              <h4 className="font-medium text-white mb-1">{memory.title}</h4>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar className="w-4 h-4" />
                {memory.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}