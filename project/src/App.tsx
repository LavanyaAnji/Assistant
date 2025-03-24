import React, { useState } from 'react';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Dashboard } from './components/Dashboard';

interface UserData {
  email: string;
  password: string;
  username: string;
}

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleSignUp = (email: string, password: string, username: string) => {
    setUserData({ email, password, username });
    setUsername(username);
    setIsSignedIn(true);
  };

  const handleSignIn = (email: string, password: string) => {
    if (userData && userData.email === email && userData.password === password) {
      setUsername(userData.username);
      setIsSignedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isSignedIn) {
    return showSignIn ? (
      <SignIn onSignIn={handleSignIn} onSwitchToSignUp={() => setShowSignIn(false)} />
    ) : (
      <SignUp onSignUp={handleSignUp} onSwitchToSignIn={() => setShowSignIn(true)} />
    );
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Dashboard 
        username={username} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode}
        userData={userData}
        setUserData={setUserData}
      />
    </div>
  );
}

export default App;