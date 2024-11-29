import { Bell, CheckCircle } from 'lucide-react';

export default function EmergencyAlert() {
  const handleResolve = () => {
    alert('Alert marked as resolved!');
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-lg border border-slate-700/50">
      <div className="flex items-center gap-3 mb-6">
        <Bell className="w-6 h-6 text-rose-500" />
        <h2 className="text-xl font-semibold text-white">Emergency Alert</h2>
      </div>

      <div className="bg-gradient-to-r from-rose-500/20 to-rose-600/20 rounded-xl p-4 border border-rose-500/30">
        <div className="flex items-center gap-3 text-rose-100">
          <Bell className="w-5 h-5" />
          <p className="font-medium">Emergency Detected: Sudden Fall! Immediate Assistance Required.</p>
        </div>
      </div>

      <button
        onClick={handleResolve}
        className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200"
      >
        <CheckCircle className="w-5 h-5" />
        Confirm & Mark Resolved
      </button>
    </div>
  );
}