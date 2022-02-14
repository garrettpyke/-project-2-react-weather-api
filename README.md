# Project Overview

## Project Links
* [GitHub Project Link](https://git.generalassemb.ly/garrett-pyke/project-2-react-weather-api)
* [Deployed Project Link]()

## Project Description
React.js application implementing a simple weather API, providing current conditions, forecast, AQI and lunar phase information for a given location. <br>

User may input a U.S. Zip Code, Canandian or UK Postal Code, city name, 3-digit IATA airport code, or latitude & longitude in decimal degrees for relevant data. <br>

Project will make use of React Hooks, React Router, and responsive web design.

## API
The API to be used is provided by [WeatherAPI.com](https://www.weatherapi.com/) and is updated hourly. This is a free service provided that (1) API calls do not exceed 1M per month, and (2) a link-back is given in the application itself. 

<a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>

Sample data:
```
{
"location": {
    "name": "Ogden",
    "region": "Utah",
    "country": "USA",
    "lat": 41.18,
    "lon": -111.92,
    "tz_id": "America/Denver",
    "localtime_epoch": 1644738612,
    "localtime": "2022-02-13 0:50"
},
"current": {
    "last_updated_epoch": 1644738300,
    "last_updated": "2022-02-13 00:45",
    "temp_c": 1.3,
    "temp_f": 34.3,
    "is_day": 0,
    "condition": {
        "text": "Clear",
        "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
        "code": 1000
    },
    "wind_mph": 10.5,
    "wind_kph": 16.9,
    "wind_degree": 110,
    "wind_dir": "ESE",
    "pressure_mb": 1030,
    "pressure_in": 30.41,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 48,
    "cloud": 0,
    "feelslike_c": -1.3,
    "feelslike_f": 29.7,
    "vis_km": 16,
    "vis_miles": 9,
    "uv": 1,
    "gust_mph": 10.7,
    "gust_kph": 17.3
}
}
```

## Wireframes
* [Mobile & Desktop](https://git.generalassemb.ly/garrett-pyke/project-2-react-weather-api/blob/master/wireframe.pdf)

### MVP/PostMVP

#### MVP
* Landing component - allows user to enter location data, and explains which location data formats may be used
* Results component - renders data for specified locale on page
   * React Router reflects location in url upon render of weather data
   * Weather icons display along with weather condition data (sunny, cloudy, etc.) (Icons also provided by WeatherAPI.)

#### PostMVP
* Language support for other than English
* Optional Air Quality Index data will be displayed if user requests
* Any Alerts for the location queried will be displayed
* Sunrise/sunset info will be provided
* Lunar phase info will display including:
   * Moon phase
   * Moonrise/moonset
   * Lunar illumination
* IP Lookup API, also part of WeatherAPI offering, will be added to extrapolate user location.   
* Potential React Router 'easter egg' for a certain family member to find

## Time Frames
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initialize framework | H | .5 hrs
| Build out components | H | 3 hrs
| Working with API | H | 4.5 hrs|  |  |
| Matching icons w/API results | M | 2 hrs |  | 
| Adding Form | H | 3.5 hrs|  |  |
| Styling | H | 4 hrs |  |  |
| Deployment | M | 2 hrs |  |
| **Total** |  | 19.5 hrs |  |  |

## Additional Libraries
Supporting libraries, tutorials, code snippets, etc. will be listed here.

## Code Snippet
This section will include a brief code snippet that I feel is somewhat clever and an explanation thereof.
```
/* some really cool code */
```