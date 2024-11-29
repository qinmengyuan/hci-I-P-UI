import { User } from 'lucide-react';

export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">John Smith</h1>
            <p className="text-slate-400">ID: #38291</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-400">Last Updated</p>
          <p className="text-white font-medium">2 mins ago</p>
        </div>
      </div>
    </header>
  );
}