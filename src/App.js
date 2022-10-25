import React, { useContext, useState } from 'react';
import { AppContext } from './context';
import './App.css';
import GuestList from './GuestList';
import Counter from './Counter';

function App() {
  const {
    appState,
    handlers
  } = useContext(AppContext);
  const [inviteName, setInviteName] = useState('');

  const {
    isFiltered,
    guests
  } = appState;
  const {
    toggleConfirmationAt,
    toggleEditingAt,
    updateNameAt,
    toggleFilter,
    handleInvite,
    handleRemoveAt,
    getTotalInvited,
    getAttendingGuests,
    getUnconfirmedGuests
  } = handlers;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleInvite(inviteName);
    setInviteName('');
  }

  return (
    <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text"
            value={inviteName}
            placeholder="Invite Someone"
            onChange={e => setInviteName(e.target.value)}
          />
          <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox"
              checked={isFiltered}
              onChange={toggleFilter}
            /> Hide those who haven't responded
          </label>
        </div>
        <Counter
          attending={getAttendingGuests()}
          unconfirmed={getUnconfirmedGuests()}
          total={getTotalInvited()} />
        <GuestList
          pendingGuest={inviteName}
          guests={guests}
          toggleConfirmationAt={toggleConfirmationAt}
          toggleEditingAt={toggleEditingAt}
          updateNameAt={updateNameAt}
          isFiltered={isFiltered}
          handleRemoveAt={handleRemoveAt} />
      </div>
    </div>
  );
}

export default App;
