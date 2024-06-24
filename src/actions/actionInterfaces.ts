import { Ad } from '../types';
import { FETCH_ADS_REQUEST, FETCH_ADS_SUCCESS, FETCH_ADS_FAILURE, SET_SORT_TYPE, SET_FILTER_TYPE } from './adActionInterfaces';

interface FetchAdsRequestAction {
    type: typeof FETCH_ADS_REQUEST;
}

interface FetchAdsSuccessAction {
    type: typeof FETCH_ADS_SUCCESS;
    ads: Ad[];
}

interface FetchAdsFailureAction {
    type: typeof FETCH_ADS_FAILURE;
    error: string;
}

interface SetSortTypeAction {
    type: typeof SET_SORT_TYPE;
    payload: string;
}

interface SetFilterTypeAction {
    type: typeof SET_FILTER_TYPE;
    payload: string;
}

export type AdActionTypes = FetchAdsRequestAction | FetchAdsSuccessAction |
    FetchAdsFailureAction | SetSortTypeAction | SetFilterTypeAction;