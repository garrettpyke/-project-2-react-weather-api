//import React from "react";

export default function WeatherData({currentData}) {

    const urlPrefix = 'https:'

    console.log('WeatherData: ', currentData) 

    if (currentData) {
        console.log("yes currentData") 
        return (
            <div className="weather-container">
                
                <div className="weather weather-current">
                {/* <h3>Weather in {currentData.location.name}, {currentData.location.region}</h3> */}
                    <h4>Current: <span>(last updated {currentData.current.last_updated})</span></h4>
                    <img src={`${urlPrefix}${currentData.current.condition.icon}`} />
                    <h5>{currentData.current.temp_f}℉ / {currentData.current.temp_c}℃</h5>
                    <h5>{currentData.current.condition.text}</h5>
                    <h5>Wind: {currentData.current.wind_mph}mph / {currentData.current.wind_kph}kph {currentData.current.wind_dir}</h5>
                    <h5>Feels like: {currentData.current.feelslike_f}℉ / {currentData.current.feelslike_c}℃</h5>
                    <h5>Humidity: {currentData.current.humidity}</h5>
                    <h5>Local Time: {currentData.location.localtime}</h5>

                </div>
                <div className="weather weather-forecast">
                    <h4>Forecast: <span>(last updated {currentData.current.last_updated})</span></h4>
                </div>
            </div>
        )           
    } else {
        console.log("no currentData") //remove
        return (
            <div>loading...</div>
        )
    }
}