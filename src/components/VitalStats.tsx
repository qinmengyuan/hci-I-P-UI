import { Heart, Thermometer, Activity, Droplets } from 'lucide-react';

const stats = [
  { icon: Heart, label: 'Heart Rate', value: '72', unit: 'BPM', color: 'text-rose-500' },
  { icon: Activity, label: 'Blood Pressure', value: '120/80', unit: 'mmHg', color: 'text-emerald-500' },
  { icon: Thermometer, label: 'Temperature', value: '36.6', unit: '°C', color: 'text-amber-500' },
  { icon: Droplets, label: 'Blood Oxygen', value: '98', unit: '%', color: 'text-blue-500' },
];

export default function VitalStats() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {stats.map(({ icon: Icon, label, value, unit, color }) => (
        <div key={label} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-4 backdrop-blur-lg border border-slate-700/50">
          <div className="flex items-center gap-3 mb-3">
            <Icon className={`w-5 h-5 ${color}`} />
            <span className="text-sm text-slate-400">{label}</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">{value}</span>
            <span className="text-sm text-slate-400">{unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
}