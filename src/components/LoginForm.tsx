import { KeyRound, ShieldAlert, ScanFace } from 'lucide-react';
import React, { useState } from 'react';

export function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [pin, setPin] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg p-8 shadow-[0_0_30px_rgba(0,0,0,0.05)]">
      <div className="flex justify-center mb-8">
        <ShieldAlert className="text-red-600 w-16 h-16" />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 uppercase tracking-tighter">SafeSync</h1>
        <p className="text-gray-600 text-sm">Access Control Unit</p>
      </div>

      <div className="flex justify-center mb-8">
          <button className="flex flex-col items-center justify-center p-6 rounded-full bg-gray-50 border-2 border-gray-200 hover:border-red-600 transition-all active:scale-95">
            <div className="p-3 rounded-full bg-red-100">
                <ScanFace className="w-12 h-12 text-red-600" />
            </div>
            <span className="block text-xs font-bold mt-3 uppercase text-gray-700 tracking-wider">Scan Face</span>
          </button>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="relative">
          <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            className="w-full h-12 pl-10 pr-4 bg-gray-100 border border-gray-300 text-gray-900 rounded focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all tracking-widest text-center" 
            id="pin" 
            placeholder="ENTER 4-DIGIT PIN" 
            required 
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
            type="password" />
        </div>
        
        <button className="w-full bg-red-600 text-white py-3 h-12 rounded font-bold hover:bg-red-700 transition-all" type="submit">
          AUTHENTICATE
        </button>
      </form>
    </div>
  );
}
