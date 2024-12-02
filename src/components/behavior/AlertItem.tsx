import { AlertTriangle } from 'lucide-react';

interface AlertItemProps {
  type: 'high' | 'medium' | 'low';
  message: string;
  time: string;
  status: string;
}

const colors = {
  high: 'bg-rose-500/20 border-rose-500/30 text-rose-400',
  medium: 'bg-amber-500/20 border-amber-500/30 text-amber-400',
  low: 'bg-blue-500/20 border-blue-500/30 text-blue-400'
};

export default function AlertItem({ type, message, time, status }: AlertItemProps) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-xl border ${colors[type]}`}>
      <div className="flex items-center gap-3">
        <AlertTriangle className="w-5 h-5" />
        <div>
          <p className="font-medium">{message}</p>
          <p className="text-sm opacity-80">{time}</p>
        </div>
      </div>
      <span className="px-3 py-1 rounded-full text-sm bg-slate-900/30">{status}</span>
    </div>
  );
}