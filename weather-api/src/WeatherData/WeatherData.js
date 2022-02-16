//import React from "react";

export default function WeatherData(currentData) {

    console.log('WeatherData: ', currentData)

    if (currentData) {
        console.log("yes currentData")
        return (
            // <div className="weather-data">
            //     <h1>Location: {currentData.location.name}</h1>
            //     <h2>Region: {currentData.location.region}</h2>
            //     <h2>Country: {currentData.location.country}</h2>
            //     <h2>Lat/Long: {currentData.location.lat} {currentData.location.lon}</h2>
            //     <h2>Timezone: {currentData.location.tz_id}</h2>
            //     <h2>Local Time: {currentData.location.localtime}</h2>

            // </div>
            <div>
                <h1>Location: {currentData.location.name}</h1>
            </div> 
        )           
    } else {
        console.log("no currentData")
        return (
            <div>loading...</div>
        )
    }
    
}