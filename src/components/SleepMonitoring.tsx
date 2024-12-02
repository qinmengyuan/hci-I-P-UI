import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Footprints, Moon } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const sleepData = {
  labels: ['Deep Sleep', 'Light Sleep', 'REM Sleep'],
  datasets: [{
    data: [158, 189, 112],
    backgroundColor: ['#4ade80', '#fbbf24', '#60a5fa'],
    borderWidth: 0,
  }]
};

const options = {
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: '#fff',
        padding: 20,
        font: {
          size: 14
        }
      }
    }
  }
};

export default function SleepMonitoring() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-lg border border-slate-700/50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Moon className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">Sleep Analysis</h2>
        </div>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">Last Night</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <div className="text-sm text-slate-400">Total Duration</div>
          <div className="text-2xl font-bold text-white">6h 45m</div>
        </div>
        <div className="space-y-2">
          <div className="text-sm text-slate-400">Sleep Score</div>
          <div className="text-2xl font-bold text-emerald-400">85%</div>
        </div>
      </div>

      <div className="w-full max-w-xs mx-auto mb-6">
        <Pie data={sleepData} options={options} />
      </div>

      <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl">
        <div className="flex items-center gap-2">
          <Footprints className="w-5 h-5 text-emerald-400" />
          <span className="text-slate-300">Daily Steps</span>
        </div>
        <div className="text-white font-semibold">3,842 steps</div>
      </div>
    </div>
  );
}