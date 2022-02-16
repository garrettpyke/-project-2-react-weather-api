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
        setLocation(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='location'>Location</label>
                <input 
                    id="location"
                    type="text"
                    value={location}
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    value="Get weather info"
                />
            </form>
        </>
    )

}