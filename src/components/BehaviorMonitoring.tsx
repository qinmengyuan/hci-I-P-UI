import { Video, Camera } from 'lucide-react';
import { useState } from 'react';
import AlertItem from './behavior/AlertItem';
import BehaviorStats from './behavior/BehaviorStats';
import CameraFeed from './behavior/CameraFeed';

export default function BehaviorMonitoring() {
  const [selectedCamera, setSelectedCamera] = useState('Living Room');

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-lg border border-slate-700/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Video className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-semibold text-white">Behavior Recognition</h2>
          </div>
          <div className="flex items-center gap-3">
            <Camera className="w-5 h-5 text-slate-400" />
            <select
              value={selectedCamera}
              onChange={(e) => setSelectedCamera(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              <option>Living Room</option>
              <option>Bedroom</option>
              <option>Kitchen</option>
              <option>Bathroom</option>
            </select>
          </div>
        </div>

        <CameraFeed selectedCamera={selectedCamera} />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Alerts</h3>
          <AlertItem
            type="high"
            message="Fall detected in Living Room"
            time="2 minutes ago"
            status="Resolved"
          />
          <AlertItem
            type="medium"
            message="Unusual inactivity in Kitchen"
            time="1 hour ago"
            status="Monitoring"
          />
          <AlertItem
            type="low"
            message="Irregular movement pattern"
            time="3 hours ago"
            status="False Alarm"
          />
        </div>
      </div>

      <BehaviorStats />
    </div>
  );
}