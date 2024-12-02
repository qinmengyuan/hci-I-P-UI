import { Line } from 'react-chartjs-2';
import { Heart } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const generateECGData = () => {
  return Array.from({ length: 60 }, () => Math.sin(Math.random() * 2 * Math.PI));
};

const ecgData = {
  labels: Array.from({ length: 60 }, (_, i) => i + 1),
  datasets: [{
    label: 'ECG Signal',
    data: generateECGData(),
    borderColor: '#f43f5e',
    backgroundColor: 'rgba(244, 63, 94, 0.1)',
    fill: true,
    tension: 0.4,
  }]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: '#94a3b8',
      },
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: '#94a3b8',
      },
    },
  },
};

export default function HeartRateMonitor() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-lg border border-slate-700/50">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-6 h-6 text-rose-500" />
        <h2 className="text-xl font-semibold text-white">Heart Rate & ECG Analysis</h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
          <span className="text-slate-300">Average Heart Rate</span>
          <span className="text-white font-semibold">72 BPM</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="text-slate-300">Last ECG Reading</span>
          <span className="text-emerald-400 font-semibold">Normal</span>
        </div>
      </div>

      <div className="mt-6">
        <Line data={ecgData} options={options} />
      </div>
    </div>
  );
}