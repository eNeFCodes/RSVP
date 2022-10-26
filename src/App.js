import React, { useContext, useState } from 'react';
import { AppContext } from './context';
import './App.css';

import Header from './Header';
import MainContent from './MainContent';

function App() {
  const [inviteName, setInviteName] = useState('');
  const {
    handlers
  } = useContext(AppContext);
  const {
    handleInvite,
  } = handlers;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleInvite(inviteName);
    setInviteName('');
  }

  return (
    <div className="App">
      <Header
        handleFormSubmit={handleFormSubmit}
        inviteName={inviteName}
        setInviteName={setInviteName}
      />
      <MainContent
        inviteName={inviteName}
      />
    </div>
  );
}

export default App;
