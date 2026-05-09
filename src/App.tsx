/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AuthForm, AccountType } from './components/LoginForm';
import { HomeDashboard } from './components/HomeDashboard';
import { ReceiverLayout } from './components/ReceiverLayout';
import { AdminLayout } from './components/AdminLayout';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [userType, setUserType] = useState<AccountType | null>(null);

  return (
    <ThemeProvider>
        <div className="flex flex-col min-h-screen bg-white text-black items-center justify-center">
        {!userType ? (
            <AuthForm onAuthenticate={(type) => setUserType(type)} />
        ) : userType === 'Client' ? (
            <HomeDashboard />
        ) : userType === 'Responder' ? (
            <ReceiverLayout />
        ) : (
            <AdminLayout />
        )}
        </div>
    </ThemeProvider>
  );
}
