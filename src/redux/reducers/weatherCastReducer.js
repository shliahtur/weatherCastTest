import {
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_STARTED,
    FETCH_WEATHER_FAILURE
  } from '../constants';
  
  const initialState = {
    loading: false,
    weatherData: {},
    error: null,
  };
  
  export default function weatherCastReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_WEATHER_STARTED:
        return {
          ...state,
          loading: true,
        };
      case FETCH_WEATHER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          weatherData: action.payload,
        };
      case FETCH_WEATHER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  