import {
  MapPin,
  Navigation,
  Phone,
  Mic,
  QrCode,
  Bookmark,
  Home as HomeIcon,
} from 'lucide-react';
import { useState } from 'react';
import gps from '../../gps.png';

export default function LocationTracking() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-lg border border-slate-700/50">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">GPS Location</h2>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location..."
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>

        <div className="relative bg-slate-800/50 rounded-xl overflow-hidden mb-6">
          <div className="aspect-[4/3] w-full">
            <img 
              src={gps} 
              alt="Map View" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <ActionButton icon={<Navigation />} label="Current Location" />
          <ActionButton icon={<HomeIcon />} label="Navigate Home" />
          <ActionButton icon={<Phone />} label="Emergency" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <ActionButton icon={<Mic />} label="Voice Input" />
          <ActionButton icon={<QrCode />} label="Scan QR" />
          <ActionButton icon={<Bookmark />} label="Saved Places" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-lg border border-slate-700/50">
        <h3 className="text-lg font-semibold text-white mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <ActivityItem time="10:30 AM" location="Home" duration="2h 15m" />
          <ActivityItem time="8:15 AM" location="Park" duration="45m" />
          <ActivityItem
            time="7:30 AM"
            location="Grocery Store"
            duration="30m"
          />
        </div>
      </div>
    </div>
  );
}

function ActionButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex flex-col items-center gap-2 p-3 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors">
      <div className="text-blue-400">{icon}</div>
      <span className="text-xs text-slate-300 font-medium">{label}</span>
    </button>
  );
}

function ActivityItem({
  time,
  location,
  duration,
}: {
  time: string;
  location: string;
  duration: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-700/50 last:border-0">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-blue-400" />
        <div>
          <p className="text-white font-medium">{location}</p>
          <p className="text-sm text-slate-400">{time}</p>
        </div>
      </div>
      <span className="text-sm text-slate-400">{duration}</span>
    </div>
  );
}