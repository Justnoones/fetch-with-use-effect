import './App.css';
import TripList from './components/TripList/index';
import { useState } from 'react';

function App() {
  let [trip, setTrip] = useState([]);
  fetch("http://localhost:3001/trip")
    .then(res => res.json())
    .then(data => {
      // setTrip(data);
      // console.log(trip);
    });
  return (
    <div>
      <TripList />
    </div>
  );
}

export default App;
