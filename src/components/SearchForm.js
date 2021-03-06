import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/actions'
const SearchInput = () => {

    const [city, setCity] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchWeather(city));
    }
    return (
        <form onSubmit={handleSubmit} className='search-input'>
            <input type='text' placeholder='Choose city' onChange={(e) => setCity(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchInput