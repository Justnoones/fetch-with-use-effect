import React from 'react'
import './index.css'
import { useEffect, useState } from 'react';

export default function TripList() {
  let [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/trip")
      .then(res => res.json())
      .then(data => {
        setTrips(data);
      });
  }, []);
  console.log(trips);
  // let [trip, setTrip] = useState([]);
  // fetch("http://localhost:3001/trip")
  // .then(res => res.json)
  // .then(data => {
  //   console.log(data);
  // });
  return (
    <div>
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
