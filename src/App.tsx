/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { HomeDashboard } from './components/HomeDashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black items-center justify-center">
      {!isLoggedIn ? (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <HomeDashboard />
      )}
    </div>
  );
}
