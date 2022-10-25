import React, { useContext } from 'react';
import { AppContext } from './context';
import './App.css';
import GuestList from './GuestList';

function App() {
  const {
    appState,
    handlers
  } = useContext(AppContext);
  const {
    isFiltered,
    guests
  } = appState;
  const {
    toggleConfirmationAt,
    toggleEditingAt,
    updateNameAt,
    toggleFilter
  } = handlers;

  return (
    <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form>
          <input type="text" value="Safia" placeholder="Invite Someone" />
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
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <GuestList
          guests={guests}
          toggleConfirmationAt={toggleConfirmationAt}
          toggleEditingAt={toggleEditingAt}
          updateNameAt={updateNameAt}
          isFiltered={isFiltered}
        />
      </div>
    </div>
  );
}

export default App;
