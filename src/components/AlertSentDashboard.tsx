import { CheckCircle, Clock, Phone, X, ShieldAlert, Navigation, Flame, HeartPulse, Home, Map as MapIcon, Bell, Settings } from 'lucide-react';
import { useState } from 'react';

export function AlertSentDashboard({ onCancel, darkMode, setActiveTab }: { onCancel: () => void, darkMode: boolean, setActiveTab: (tab: 'home' | 'alerts' | 'map' | 'settings') => void }) {
  const [eta, setEta] = useState('4 mins');

  return (
    <div className={`flex flex-col flex-grow w-full max-w-md ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} font-sans`}>
        <div className="flex-grow p-4">
          <div className="text-center mb-4">
            <div className={`inline-flex p-3 rounded-full ${darkMode ? 'bg-red-950/50 border-red-900/50' : 'bg-red-100 border-red-200'} border mb-2`}>
                <Navigation className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-red-500 tracking-tight">Alert Active</h1>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Help is arriving at your venue.</p>
            <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'} mt-1`}>ETA: {eta}</p>
          </div>
          
          {/* Simplified Map */}
          <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'} border rounded-lg p-2 mb-4 h-32 flex items-center justify-center relative overflow-hidden`}>
            <div className={`${darkMode ? 'text-gray-600' : 'text-gray-400'} text-xs font-bold uppercase tracking-widest text-center`}>
                Simulated Map View: Incoming Responder
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'} border rounded-lg p-4 mb-4`}>
            <div className={`relative border-l-2 ${darkMode ? 'border-gray-700' : 'border-gray-300'} ml-2 pl-4 space-y-4`}>
                <div className="relative">
                    <div className="absolute -left-7 p-0.5 bg-green-500 rounded-full"><CheckCircle className="w-3 h-3 text-white" /></div>
                    <h3 className={`font-bold text-sm ${darkMode ? '' : 'text-gray-800'}`}>Alert Transmitted</h3>
                </div>
                <div className="relative">
                    <div className="absolute -left-7 p-0.5 bg-red-600 rounded-full"><ShieldAlert className="w-3 h-3 text-white" /></div>
                    <h3 className={`font-bold text-sm ${darkMode ? '' : 'text-gray-800'}`}>Help Dispatched</h3>
                </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Update Emergency Status</p>
            <div className="grid grid-cols-2 gap-2">
                <button className={`flex flex-col items-center justify-center p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-red-900/50' : 'bg-gray-200 border-gray-300 hover:bg-red-200'} transition-all`}>
                  <Flame className="w-5 h-5 text-red-500 mb-1"/><span className="text-[10px] font-bold">FIRE</span>
                </button>
                <button className={`flex flex-col items-center justify-center p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-blue-900/50' : 'bg-gray-200 border-gray-300 hover:bg-blue-200'} transition-all`}>
                  <HeartPulse className="w-5 h-5 text-blue-500 mb-1"/><span className="text-[10px] font-bold">MEDICAL</span>
                </button>
            </div>
          </div>

          <button onClick={onCancel} className={`w-full ${darkMode ? 'bg-gray-900 text-gray-300 border-gray-700' : 'bg-gray-200 text-gray-800 border-gray-300'} border py-3 rounded font-bold hover:bg-gray-800 transition-all text-sm`}>
            Cancel Alert
          </button>
        </div>
      
        {/* Navbar */}
        <footer className={`sticky bottom-0 z-50 grid grid-cols-4 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t py-4`}>
            <button onClick={() => { setActiveTab('home'); onCancel(); }} className={`flex flex-col items-center gap-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}><Home className="w-6 h-6" /><span className="text-[10px] font-bold">HOME</span></button>
            <button onClick={() => { setActiveTab('alerts'); onCancel(); }} className={`flex flex-col items-center gap-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}><Bell className="w-6 h-6" /><span className="text-[10px] font-bold">ALERTS</span></button>
            <button onClick={() => { setActiveTab('map'); onCancel(); }} className={`flex flex-col items-center gap-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}><MapIcon className="w-6 h-6" /><span className="text-[10px] font-bold">MAP</span></button>
            <button onClick={() => { setActiveTab('settings'); onCancel(); }} className={`flex flex-col items-center gap-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}><Settings className="w-6 h-6" /><span className="text-[10px] font-bold">SETTINGS</span></button>
        </footer>
    </div>
  );
}
