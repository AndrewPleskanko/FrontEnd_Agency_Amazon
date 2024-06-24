import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import rootReducer from "../reducers/reducers";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof index.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

const index = configureStore({
    reducer: rootReducer
});

export default index;