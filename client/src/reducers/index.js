import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import requestStatus from "./requestStatus";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    status : requestStatus
});

export default allReducers;