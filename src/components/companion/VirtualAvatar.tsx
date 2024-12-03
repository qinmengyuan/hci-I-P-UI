import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

export default function VirtualAvatar() {
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="relative bg-slate-800/50 rounded-xl overflow-hidden mb-6">
      <div className={`aspect-video w-full ${isFullScreen ? 'fixed inset-0 z-50' : ''}`}>
        <img
          src="196973d818e74ef7b8373ce7651b751e.png"
          alt="Virtual Avatar"
          className="w-full h-full object-contain bg-gradient-to-b from-slate-900 to-slate-800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Avatar Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 bg-slate-900/80 rounded-lg text-white hover:bg-slate-800/80 transition-colors backdrop-blur-sm"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
        <button
          onClick={() => setIsFullScreen(!isFullScreen)}
          className="p-2 bg-slate-900/80 rounded-lg text-white hover:bg-slate-800/80 transition-colors backdrop-blur-sm"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* Avatar Status */}
      <div className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm backdrop-blur-sm border border-emerald-500/30">
        Active & Listening
      </div>
    </div>
  );
}