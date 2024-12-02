import React, { useState } from 'react';
import Header from './components/Header';
import VitalStats from './components/VitalStats';
import SleepMonitoring from './components/SleepMonitoring';
import HeartRateMonitor from './components/HeartRateMonitor';
import EmergencyAlert from './components/EmergencyAlert';
import LocationTracking from './components/LocationTracking';
import BehaviorMonitoring from './components/BehaviorMonitoring';
import DigitalCompanion from './components/DigitalCompanion';
import Navigation from './components/Navigation';

function App() {
  const [activeTab, setActiveTab] = useState<'biosignal' | 'location' | 'behavior' | 'companion'>('biosignal');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pb-24">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <Header />
        {activeTab === 'biosignal' ? (
          <>
            <VitalStats />
            <div className="space-y-6">
              <SleepMonitoring />
              <HeartRateMonitor />
              <EmergencyAlert />
            </div>
          </>
        ) : activeTab === 'location' ? (
          <LocationTracking />
        ) : activeTab === 'behavior' ? (
          <BehaviorMonitoring />
        ) : (
          <DigitalCompanion />
        )}
      </div>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;