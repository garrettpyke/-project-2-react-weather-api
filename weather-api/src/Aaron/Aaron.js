import { useState, useEffect } from "react";

export default function Aaron({ baseUrl, apiKey, locationParam, daysUrlParam, aqiUrlParam, alertsParam, handleSubmit }) {

    const [ broLocation, setBroLocation ] = useState('98274')

    // const broUrl = `${baseUrl}${apiKey}${broLocation}${daysUrlParam}${aqiUrlParam}${alertsParam}`
    //console.log("broUrl: ", broUrl) //remove

    useEffect(() => {
        handleSubmit(broLocation);
    }, [broLocation])



    return (
        <h2>Aaron's Page</h2>
    )
}