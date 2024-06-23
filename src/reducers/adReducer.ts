import { AdActionTypes, FETCH_ADS_REQUEST, FETCH_ADS_SUCCESS, FETCH_ADS_FAILURE } from '../components/actions/adActions';
import { Ad } from '../types';
import rootReducer from "./reducers";

interface AdState {
    loading: boolean;
    ads: Ad[];
    error: string;
}

const initialState: AdState = {
    loading: false,
    ads: [],
    error: '',
};

const adReducer = (state = initialState, action: AdActionTypes): AdState => {
    switch (action.type) {
        case FETCH_ADS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_ADS_SUCCESS:
            console.log(action.ads);
            return {
                ...state,
                loading: false,
                ads: action.ads,
                error: '',
            };
        case FETCH_ADS_FAILURE:
            return {
                ...state,
                loading: false,
                ads: [],
                error: action.error,
            };
        default:
            return state;
    }
};

export type RootState = ReturnType<typeof rootReducer>

export default adReducer;