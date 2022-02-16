import React, { useState } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from './Home/Home'
import Form from './Form/Form'
import WeatherData from './WeatherData/WeatherData'

const baseUrl = 'https://api.weatherapi.com/v1/current.json?key='
const apiKey = '46678c32bebd4d5da6e192958221102'
const locationParam = '&q='

function App() {
  //let location = '84403'

  //const [url, setUrl] = useState(`${baseUrl}${apiKey}${locationParam}${location}`)
  const [currentData, setCurrentData] = useState({})

  //console.log('1. url: ', url)
  // const currentDataNotEmpty = Object.keys(currentData).length

  const handleSubmit = async loc => {
    let url = `${baseUrl}${apiKey}${locationParam}${loc}`
    console.log('1. url: ', url)

    const data = await fetch(url)
    const jsonData = await data.json()
    setCurrentData(jsonData)

    console.log('2. url: ', url)
  }  

  console.log("3. currentData: ", currentData)
 
  return (
    <div className="App">
      <Home />
      <Form  handleSubmit={handleSubmit}/>
      { currentData.location ? <WeatherData currentData={currentData}/> : null  }

    </div>
  );
}

export default App;
