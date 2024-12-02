import { History } from 'lucide-react';
import StatCard from './StatCard';

export default function BehaviorStats() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-lg border border-slate-700/50">
      <div className="flex items-center gap-3 mb-6">
        <History className="w-6 h-6 text-purple-400" />
        <h2 className="text-xl font-semibold text-white">24h Statistics</h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard
          label="Total Alerts"
          value="12"
          change="+2"
          trend="up"
        />
        <StatCard
          label="False Alarms"
          value="3"
          change="-1"
          trend="down"
        />
        <StatCard
          label="Response Time"
          value="2.5m"
          change="-30s"
          trend="down"
        />
      </div>
    </div>
  );
}