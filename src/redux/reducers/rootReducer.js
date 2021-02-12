import { combineReducers } from "redux";
import weatherCastReducer from './weatherCastReducer';

const rootReducer = combineReducers({
    weatherCast: weatherCastReducer
});

export default rootReducer;
