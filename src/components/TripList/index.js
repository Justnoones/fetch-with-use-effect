import React from 'react'
import './index.css'
import { useEffect, useState } from 'react';

export default function TripList() {
  let [trips, setTrips] = useState([]);
  let [url, setUrl] = useState("http://localhost:3001/trip");
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTrips(data);
      });
  }, [url]);
  return (
    <div>
      <h1>Ready To Go?</h1>
      <button onClick={_ => setUrl("http://localhost:3001/trip")}>All</button>
      <button onClick={_ => setUrl("http://localhost:3001/trip?location=Myanmar")}>Trips in Myanmar</button>
      <button onClick={_ => setUrl("http://localhost:3001/trip?location=Thailand")}>Trips in Thailand</button>
      <ul>
        {trips.map(trip => (
        <li key={trip.id}>
          <h3>{trip.name}</h3>
          <p>Price - {trip.price}</p>
        </li>
        ))}
      </ul>
    </div>
  )
}
