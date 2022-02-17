//import React from "react";

export default function WeatherData({currentData}) {

    const urlPrefix = 'https:'

    console.log('WeatherData: ', currentData) 

    if (currentData) {
        console.log("yes currentData") 
        return (
            <div className="weather-container">
                <h3 id="location-head">Weather in {currentData.location.name}, {currentData.location.region}</h3>
                <div className="weather weather-current">
                    <h4>Current <span>(as of {currentData.current.last_updated})</span></h4>
                    <img class="weather-icon" id="icon-current" src={`${urlPrefix}${currentData.current.condition.icon}`}/>
                    <h5>{currentData.current.condition.text}</h5>
                    <h5>{currentData.current.temp_f}℉ / {currentData.current.temp_c}℃</h5>
                    <h5>Wind: {currentData.current.wind_mph}mph / {currentData.current.wind_kph}kph ({currentData.current.wind_dir})</h5>
                    <h5>Feels like: {currentData.current.feelslike_f}℉ / {currentData.current.feelslike_c}℃</h5>
                    <h5>Humidity: {currentData.current.humidity}</h5>
                    <h5>Sunset: {currentData.forecast.forecastday[0].astro.sunset}</h5>

                </div>
                <div className="weather weather-forecast">
                    <h4>Tomorrow's Forecast</h4>
                    <img className="weather-icon" id="forecast-icon" src={`${urlPrefix}${currentData.forecast.forecastday[1].day.condition.icon}`} />
                    <h5>{currentData.forecast.forecastday[1].day.condition.text}</h5>
                    <h5>{currentData.forecast.forecastday[1].day.avgtemp_f}℉ / {currentData.forecast.forecastday[1].day.avgtemp_c}℃</h5>
                    <h5>Wind: {currentData.forecast.forecastday[1].day.maxwind_mph}mph / {currentData.forecast.forecastday[1].day.maxwind_kph}kph</h5>
                    <h5>Chance of Rain/Snow: {currentData.forecast.forecastday[1].day.daily_chance_of_rain}% / {currentData.forecast.forecastday[1].day.daily_chance_of_snow}%</h5>
                    <h5>Humidity: {currentData.forecast.forecastday[1].day.avghumidity}</h5>
                    <h5>Sunrise: {currentData.forecast.forecastday[1].astro.sunrise}</h5>

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