interface StatCardProps {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export default function StatCard({ label, value, change, trend }: StatCardProps) {
  return (
    <div className="bg-slate-800/50 rounded-xl p-4">
      <p className="text-sm text-slate-400 mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className={`text-sm ${trend === 'down' ? 'text-emerald-400' : 'text-rose-400'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}