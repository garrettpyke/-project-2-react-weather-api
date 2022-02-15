import React, { useState, useEffect} from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import './App.css';

const baseUrl = 'https://api.weatherapi.com/v1/current.json?key='
const apiKey = '46678c32bebd4d5da6e192958221102'
const locationParam = '&q='

function App() {
  const location = '84403'

  const [url, setUrl] = useState(`${baseUrl}${apiKey}${locationParam}${location}`)
  const [currentData, setCurrentData] = useState({})

  console.log('1. url: ', url)
  // const currentDataNotEmpty = Object.keys(currentData).length
  // interesting...if above is not commented out, currentData appears to be populated on 1st render. why?!? same thing if I console.log something.

  useEffect(() => {
    const makeApiCall = async () => {
      const data = await fetch(url)
      const jsonData = await data.json()
      setCurrentData(jsonData)
    }
    makeApiCall()
  }, [url])

  console.log('2. url: ', url)
  console.log("3. currentData: ", currentData)
 

  return (
    <div className="App">
      <h3>
        Wind Direction (deg.): 
        { currentData.location ? ' ' + currentData.current.wind_degree : null}
      </h3>
    </div>
  );
}

export default App;
