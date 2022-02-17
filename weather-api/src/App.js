import React, { useState } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import './App.css';
import './grid.css';
import Home from './Home/Home';
import Form from './Form/Form';
import WeatherData from './WeatherData/WeatherData';
import Aaron from './Aaron/Aaron'

const baseUrl = 'https://api.weatherapi.com/v1/forecast.json?key='
//const currentUrlParam = '/current.json'
//const forecastUrlParam = '/forecast.json'
const apiKey = '46678c32bebd4d5da6e192958221102'
const locationParam = '&q='
const daysUrlParam = '&days=3'
const aqiUrlParam = '&aqi=yes'
const alertsParam = '&alerts=yes'

function App() {
  //let location = '84403'

  //const [url, setUrl] = useState(`${baseUrl}${apiKey}${locationParam}${location}`)
  const [currentData, setCurrentData] = useState({})
  
  const handleSubmit = async loc => {
    let url = `${baseUrl}${apiKey}${locationParam}${loc}${daysUrlParam}${aqiUrlParam}${alertsParam}`
    console.log('1. url: ', url) //remove

    const data = await fetch(url)
    const jsonData = await data.json()
    setCurrentData(jsonData)

    console.log('2. url: ', url) //remove
  }  

  console.log("3. currentData: ", currentData)
 
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/Aaron" element={<Aaron baseUrl={baseUrl} apiKey={apiKey} daysUrlParam={daysUrlParam} aqiUrlParam={aqiUrlParam} alertsParam={alertsParam}/>} />
        {/* <Route path="/location/:param" /> */}
      </Routes>
      <Form  handleSubmit={handleSubmit}/>
      
      { currentData.location ? <WeatherData currentData={currentData}/> : null  }
    </div>
  );
}

export default App;
