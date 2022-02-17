import { useState, useEffect } from "react";
import './Aaron.css'

export default function Aaron({ handleSubmit }) {

    const [ broLocation, setBroLocation ] = useState('98274')

    useEffect(() => {
        handleSubmit(broLocation);
    }, [broLocation])

    return (
        <div className="bro-div">
            <h2>Aaron's Page</h2>
        </div>
    )
}