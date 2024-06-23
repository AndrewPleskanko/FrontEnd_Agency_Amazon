import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './reducers/adReducer';

const store = configureStore({
    reducer: rootReducer
});

export default store;