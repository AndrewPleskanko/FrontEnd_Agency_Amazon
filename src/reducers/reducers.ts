import { combineReducers } from '@reduxjs/toolkit';
import adsReducer from './adReducer';
const rootReducer = combineReducers({
    ads: adsReducer,
});

export default rootReducer;