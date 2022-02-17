import { useState } from "react";

export default function Aaron({ baseUrl, apiKey, daysUrlParam, aqiUrlParam, alertsParam }) {

    const broLocationParam = '&q=98274'
    const broUrl = `${baseUrl}${apiKey}${broLocationParam}${daysUrlParam}${aqiUrlParam}${alertsParam}`
    console.log("broUrl: ", broUrl) //remove

    return (
        <h2>Aaron's Page</h2>
    )
}