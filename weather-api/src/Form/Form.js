import {useState} from 'react';

export default function Form(props) {

    const [location, setLocation] = useState('')

    const handleSubmit = e => {
        console.log('handleSubmit triggered') //remove
        e.preventDefault()
        props.handleSubmit(location)
        setLocation('')
    }

    const handleChange = e => {
        console.log('handleChange triggered, value: ', e.target.value) //remove
        setLocation(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label></label>

            </form>
        </>
    )



}