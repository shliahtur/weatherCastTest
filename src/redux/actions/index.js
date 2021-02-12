import axios from 'axios';
import {
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_STARTED,
    FETCH_WEATHER_FAILURE
} from '../constants';
import { API_TOKEN } from '../../configs/api';

export const fetchWeather = (cityName) => {
    return dispatch => {
        dispatch(fetchWeatherStarted());
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_TOKEN}&units=metric`)
            .then(res => {
                dispatch(fetchWeatherSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchWeatherFailure(err.response));
            });
    }
}

const fetchWeatherSuccess = weather => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: weather
});

const fetchWeatherStarted = () => ({
    type: FETCH_WEATHER_STARTED
});

const fetchWeatherFailure = error => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error.data.message
});