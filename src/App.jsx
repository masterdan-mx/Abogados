import React, { useState } from 'react';
import Login from './components/Login';
import ContractDashboard from './components/ContractDashboard';

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <ContractDashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}
