import { Clock, CalendarCheck } from 'lucide-react';

export default function CompanionSchedule() {
  const schedule = [
    {
      time: '08:00 AM',
      activity: 'Morning Medicine',
      status: 'pending'
    },
    {
      time: '09:30 AM',
      activity: 'Video Call with Sarah',
      status: 'upcoming'
    },
    {
      time: '12:00 PM',
      activity: 'Lunch Time',
      status: 'upcoming'
    },
    {
      time: '03:00 PM',
      activity: 'Afternoon Walk',
      status: 'upcoming'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Today's Schedule</h3>
        <span className="text-slate-400">{new Date().toLocaleDateString()}</span>
      </div>

      <div className="space-y-3">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-purple-400" />
              <div>
                <p className="font-medium text-white">{item.activity}</p>
                <p className="text-sm text-slate-400">{item.time}</p>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                item.status === 'pending'
                  ? 'bg-amber-500/20 text-amber-400'
                  : 'bg-slate-700/50 text-slate-400'
              }`}
            >
              {item.status === 'pending' ? 'Now' : 'Upcoming'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}