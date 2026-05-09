import { ShieldCheck, MapPin, AlertCircle, Settings, Bell, Home, Map as MapIcon, Flame, HeartPulse, Navigation } from 'lucide-react';
import React, { useState } from 'react';
import { AlertSentDashboard } from './AlertSentDashboard';

export function HomeDashboard() {
  const [activeTab, setActiveTab] = useState<'home' | 'alerts' | 'map' | 'settings'>('home');
  const [showTypeSelector, setShowTypeSelector] = useState(false);
  const [emergencyType, setEmergencyType] = useState<string | null>(null);
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const triggerEmergency = (type: string) => {
    setEmergencyType(type);
    setShowTypeSelector(false);
    setIsAlertActive(true);
  };

  if (isAlertActive) {
    return <AlertSentDashboard onCancel={() => setIsAlertActive(false)} darkMode={darkMode} setActiveTab={setActiveTab} />;
  }

  return (
    <div className={`flex flex-col flex-grow w-full max-w-md ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} font-sans`}>
      <div className="relative flex-grow flex flex-col p-8 overflow-hidden">
        {activeTab === 'home' && !showTypeSelector && (
          <div className="flex flex-col flex-grow">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl font-bold">SafeSync</h1>
                <div className="flex items-center gap-2 text-xs font-bold bg-gray-900 px-3 py-1 rounded-full text-gray-200">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div> Connected #442
                </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow">
                <button onClick={() => setShowTypeSelector(true)} className="w-56 h-56 rounded-full bg-red-600 flex flex-col items-center justify-center gap-2 shadow-[0_0_40px_rgba(220,38,38,0.5)] border-4 border-red-800 hover:bg-red-700 transition-all">
                    <AlertCircle className="w-16 h-16 text-white" />
                    <span className="font-bold text-lg uppercase tracking-widest text-white">Alertify</span>
                </button>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center mt-6 max-w-xs text-sm font-medium`}>Instantly trigger emergency protocol</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                <div className={`border p-4 rounded-lg text-center ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'}`}>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Status</p>
                    <p className="text-xl font-bold mt-1 text-green-600">ALL SAFE</p>
                </div>
                <div className={`border p-4 rounded-lg text-center ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'}`}>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Active Alerts</p>
                    <p className="text-xl font-bold mt-1">0</p>
                </div>
            </div>
          </div>
        )}
        
        {showTypeSelector && (
            <div className="flex flex-col items-center justify-center flex-grow">
                <h2 className="text-xl font-bold mb-8 uppercase tracking-widest">Select Emergency</h2>
                <div className="grid grid-cols-1 gap-4 w-full">
                    <button onClick={() => triggerEmergency('FIRE')} className="bg-gray-900 border-2 border-red-600 p-6 rounded-lg flex items-center gap-4 hover:bg-red-900/50 transition-all">
                        <Flame className="w-8 h-8 text-red-500" />
                        <span className="font-bold text-lg">FIRE EMERGENCY</span>
                    </button>
                    <button onClick={() => triggerEmergency('MEDICAL')} className="bg-gray-900 border-2 border-blue-600 p-6 rounded-lg flex items-center gap-4 hover:bg-blue-900/50 transition-all">
                        <HeartPulse className="w-8 h-8 text-blue-500" />
                        <span className="font-bold text-lg">MEDICAL EMERGENCY</span>
                    </button>
                </div>
                <button onClick={() => setShowTypeSelector(false)} className="mt-8 text-gray-500 font-bold uppercase tracking-widest">Cancel</button>
            </div>
        )}
        
        {activeTab === 'map' && (
            <div className="flex flex-col flex-grow w-full h-full p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Help Status</h2>
                    <div className="bg-red-900/30 text-red-500 px-3 py-1 rounded text-xs font-bold border border-red-900/50">
                        ETA: 4 MINS
                    </div>
                </div>
                
                {/* Simplified Client Map */}
                <div className="relative flex-grow bg-gray-950 rounded-lg border border-gray-800 overflow-hidden flex items-center justify-center">
                    {/* Simulated Map Background */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                    
                    {/* Simplified Markers: User Location (Venue) and Responder */}
                    <div className="relative w-full h-full">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-red-600 rounded-full border-4 border-black">
                            <Home className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute top-1/4 left-1/4 p-2 bg-blue-500 rounded-full border-2 border-black animate-pulse">
                            <Navigation className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>

                <div className="mt-4 bg-gray-900 border border-gray-800 p-4 rounded-lg text-center">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Responder is en route</p>
                    <p className="text-xl font-bold text-white mt-1">Help is approaching...</p>
                </div>
            </div>
        )}
        {activeTab === 'alerts' && (
            <div className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                <h2 className="text-xl font-bold uppercase tracking-widest">Alert History</h2>
                <div className="space-y-4 mt-6">
                    <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'} border p-4 rounded-lg`}>
                        <div className="flex justify-between items-center mb-2">
                             <span className="font-bold">MEDICAL ASSISTANCE</span>
                             <span className="text-green-500 text-xs font-bold uppercase">Resolved</span>
                        </div>
                        <p className="text-sm text-gray-500">May 5, 2026 • 14:02</p>
                    </div>
                </div>
            </div>
        )}
        {activeTab === 'settings' && (
            <div className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                <h2 className="text-xl font-bold uppercase tracking-widest">Settings</h2>
                <div className="space-y-6 mt-8">
                     <div className="flex items-center justify-between">
                        <span className="font-bold">Dark Mode</span>
                        <button onClick={() => setDarkMode(!darkMode)} className={`w-12 h-6 ${darkMode ? 'bg-blue-600' : 'bg-gray-400'} rounded-full transition-all`}>
                            <div className={`w-4 h-4 bg-white rounded-full transition-all ${darkMode ? 'ml-7' : 'ml-1'}`}></div>
                        </button>
                    </div>
                    <div className="border-t border-gray-700 pt-6">
                        <span className="font-bold block mb-2">Emergency Contacts</span>
                        <button className="text-blue-500 text-sm font-bold">Manage Contacts</button>
                    </div>
                    <div className="border-t border-gray-700 pt-6">
                        <span className="font-bold block mb-2">Account Notifications</span>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Enable Sound</span>
                            <button onClick={() => setNotificationsEnabled(!notificationsEnabled)} className={`w-12 h-6 ${notificationsEnabled ? 'bg-blue-600' : 'bg-gray-400'} rounded-full transition-all`}>
                                <div className={`w-4 h-4 bg-white rounded-full transition-all ${notificationsEnabled ? 'ml-7' : 'ml-1'}`}></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
      
      {/* Navbar */}
      <footer className={`sticky bottom-0 z-50 grid grid-cols-4 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-200 border-gray-300'} border-t py-4`}>
        <button onClick={() => { setActiveTab('home'); setShowTypeSelector(false) }} className={`flex flex-col items-center gap-1 ${darkMode ? (activeTab === 'home' ? 'text-white' : 'text-gray-500') : (activeTab === 'home' ? 'text-black' : 'text-gray-600')}`}><Home className="w-6 h-6" /><span className="text-[10px] font-bold">HOME</span></button>
        <button onClick={() => setActiveTab('alerts')} className={`flex flex-col items-center gap-1 ${darkMode ? (activeTab === 'alerts' ? 'text-white' : 'text-gray-500') : (activeTab === 'alerts' ? 'text-black' : 'text-gray-600')}`}><Bell className="w-6 h-6" /><span className="text-[10px] font-bold">ALERTS</span></button>
        <button onClick={() => setActiveTab('map')} className={`flex flex-col items-center gap-1 ${darkMode ? (activeTab === 'map' ? 'text-white' : 'text-gray-500') : (activeTab === 'map' ? 'text-black' : 'text-gray-600')}`}><MapIcon className="w-6 h-6" /><span className="text-[10px] font-bold">MAP</span></button>
        <button onClick={() => setActiveTab('settings')} className={`flex flex-col items-center gap-1 ${darkMode ? (activeTab === 'settings' ? 'text-white' : 'text-gray-500') : (activeTab === 'settings' ? 'text-black' : 'text-gray-600')}`}><Settings className="w-6 h-6" /><span className="text-[10px] font-bold">SETTINGS</span></button>
      </footer>
    </div>
  );
}
