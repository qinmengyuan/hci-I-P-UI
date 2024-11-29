import { Home, Search, Settings, Activity, MapPin } from 'lucide-react';

interface NavigationProps {
  activeTab: 'biosignal' | 'location';
  onTabChange: (tab: 'biosignal' | 'location') => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 px-6 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-around items-center">
        <NavItem icon={<Home className="w-6 h-6" />} label="Home" active={false} onClick={() => {}} />
        <NavItem
          icon={<Activity className="w-6 h-6" />}
          label="Bio-signal"
          active={activeTab === 'biosignal'}
          onClick={() => onTabChange('biosignal')}
        />
        <NavItem
          icon={<MapPin className="w-6 h-6" />}
          label="Location"
          active={activeTab === 'location'}
          onClick={() => onTabChange('location')}
        />
        <NavItem icon={<Settings className="w-6 h-6" />} label="Settings" active={false} onClick={() => {}} />
      </div>
    </nav>
  );
}

function NavItem({ 
  icon, 
  label, 
  active, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 ${
        active ? 'text-blue-400' : 'text-slate-400 hover:text-slate-200'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}