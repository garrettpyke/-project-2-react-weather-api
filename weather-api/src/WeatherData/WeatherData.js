//import React from "react";

export default function WeatherData({currentData}) {

    console.log('WeatherData: ', currentData) //data is there

    if (currentData) {
        console.log("yes currentData") //program follows this path
        return (
            <div className="weather-data">
                <h3>Location: {currentData.location.name}</h3>
                <h3>Region: {currentData.location.region}</h3>
                <h3>Country: {currentData.location.country}</h3>
                <h3>Lat/Long: {currentData.location.lat} {currentData.location.lon}</h3>
                <h3>Timezone: {currentData.location.tz_id}</h3>
                <h3>Local Time: {currentData.location.localtime}</h3>

            </div>
        )           
    } else {
        console.log("no currentData")
        return (
            <div>loading...</div>
        )
    }
}