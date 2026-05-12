import { useState } from 'react';
import { Home, Bell, Map, Settings } from 'lucide-react';
import { ReceiverAlerts } from './ReceiverAlerts';
import { ReceiverHome } from './ReceiverHome';
import { ReceiverTrackingPage } from './ReceiverTrackingPage';
import { ReceiverSettings } from './ReceiverSettings';
import { useTheme } from '../context/ThemeContext';

export function ReceiverLayout() {
    const [activeTab, setActiveTab] = useState<'home' | 'alerts' | 'map' | 'settings'>('home');
    const { theme } = useTheme();
    const darkMode = theme === 'dark';

    return (
        <div className={`flex flex-col h-screen w-full max-w-md mx-auto ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} font-sans`}>
            <div className="flex-grow overflow-auto">
                {activeTab === 'home' && <ReceiverHome onGoToMap={() => setActiveTab('map')} />}
                {activeTab === 'alerts' && <ReceiverAlerts />}
                {activeTab === 'map' && <ReceiverTrackingPage darkMode={darkMode} />}
                {activeTab === 'settings' && <ReceiverSettings />}
            </div>
            <nav className={`border-t py-4 flex justify-around ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100'}`}>
                <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-red-500' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}><Home className="w-5 h-5" /><span className="text-[10px] font-bold">HOME</span></button>
                <button onClick={() => setActiveTab('alerts')} className={`flex flex-col items-center gap-1 ${activeTab === 'alerts' ? 'text-red-500' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}><Bell className="w-5 h-5" /><span className="text-[10px] font-bold">ALERTS</span></button>
                <button onClick={() => setActiveTab('map')} className={`flex flex-col items-center gap-1 ${activeTab === 'map' ? 'text-red-500' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}><Map className="w-5 h-5" /><span className="text-[10px] font-bold">MAP</span></button>
                <button onClick={() => setActiveTab('settings')} className={`flex flex-col items-center gap-1 ${activeTab === 'settings' ? 'text-red-500' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}><Settings className="w-5 h-5" /><span className="text-[10px] font-bold">SETTINGS</span></button>
            </nav>
        </div>
    );
}
