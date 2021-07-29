import {combineReducers} from 'redux';

//state

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import requestStatus from "./requestStatus";
import imgUser from './imgUser';
import data from './data';
import driver1 from './driver1';
import driver2 from './driver2';
import request from './request';
import driverdata from './driverdata';
// import imgUser from './imgUser';







const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    status : requestStatus,
    imguser : imgUser,
    datauser : data,
    datadriver1 : driver1,
    datadriver2 : driver2,
    userrequest : request,
    driverdata : driverdata
});

export default allReducers;