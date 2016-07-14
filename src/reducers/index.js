import {combineReducers} from 'redux';
import track from './track';
import {routerReducer} from 'react-router-redux';
import auth from "./auth";

export default combineReducers({
    auth,
    track,
    routing: routerReducer
});
