import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import './index.css'

export default function TripList() {
  
  let [url, setUrl] = useState("http://localhost:3001/trip");
  let { data : trips, loading, error } = useFetch(url);
  return (
    <>
      {error && <p>{error}</p>}
      {!error && <div className='trip-list-container'>
        <h1>Ready To Go?</h1>
        <div className='btn-container'>
          <button className='btn' onClick={_ => setUrl("http://localhost:3001/trip")}>All</button>
          <button className='btn' onClick={_ => setUrl("http://localhost:3001/trip?location=Myanmar")}>Trips in Myanmar</button>
          <button className='btn' onClick={_ => setUrl("http://localhost:3001/trip?location=Thailand")}>Trips in Thailand</button>
        </div>
        <ul className='ul'>
          {loading && <p>Loading Trips</p>}
          {trips && trips.map(trip => (
          <li key={trip.id} className='li'>
            <h3>{trip.name}</h3>
            <p>Price - {trip.price}</p>
          </li>
          ))}
        </ul>
      </div>}
    </>
  )
}
