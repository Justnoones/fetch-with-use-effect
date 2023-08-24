import React, { useState } from 'react';
import './App.css';
import TripList from './components/TripList/index';

function App() {
  let [hideTrip, setHideTrip] = useState(false);
  return (
    <>
      <button onClick={_=> setHideTrip(true)}>Hide Trips</button>
      {!hideTrip && <TripList />}
    </>
  );
}

export default App;
