import {
    FETCH_ADS_REQUEST,
    SET_SORT_TYPE,
    SET_FILTER_TYPE,
    FETCH_ADS_SUCCESS,
    FETCH_ADS_FAILURE
} from '../components/actions/actionTypes';
import {AdActionTypes} from '../components/actions/actionInterfaces';
import {Ad} from '../types';
import rootReducer from "./reducers";

interface AdState {
    loading: boolean;
    ads: Ad[];
    error: string;
    sortType: string;
    filterType: string;
}

const initialState: AdState = {
    loading: false,
    ads: [],
    error: '',
    sortType: 'name',
    filterType: '',
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
        case SET_SORT_TYPE:
            return {
                ...state,
                sortType: action.payload,
            };
        case SET_FILTER_TYPE:
            return {
                ...state,
                filterType: action.payload,
            };
        default:
            return state;
    }
};

export type RootState = ReturnType<typeof rootReducer>

export default adReducer;