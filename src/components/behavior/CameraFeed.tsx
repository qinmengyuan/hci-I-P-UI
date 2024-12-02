import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CameraFeedProps {
  selectedCamera: string;
}

export default function CameraFeed({ selectedCamera }: CameraFeedProps) {
  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDetecting(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-video mb-6 rounded-xl overflow-hidden bg-slate-800">
      <img 
        src="https://www.jvmvision.com/img/app_7.jpg" 
        alt="Camera Feed" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="absolute top-4 left-4 px-3 py-1.5 bg-slate-900/80 text-white rounded-lg text-sm backdrop-blur-sm border border-slate-700/50">
        {selectedCamera}
      </div>

      {isDetecting && (
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-rose-500/20 text-rose-400 rounded-lg text-sm backdrop-blur-sm border border-rose-500/30 flex items-center gap-2 animate-pulse">
          <AlertTriangle className="w-4 h-4" />
          Fall Detection in Progress
        </div>
      )}
      
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="px-3 py-1.5 bg-slate-900/80 text-slate-300 rounded-lg text-sm backdrop-blur-sm border border-slate-700/50">
          {new Date().toLocaleTimeString()}
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm backdrop-blur-sm border border-emerald-500/30">
          <CheckCircle2 className="w-4 h-4" />
          AI Monitoring Active
        </div>
      </div>
    </div>
  );
}