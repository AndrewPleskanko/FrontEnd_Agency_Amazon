import { FETCH_ADS_REQUEST, FETCH_ADS_SUCCESS, FETCH_ADS_FAILURE, SET_SORT_TYPE, SET_FILTER_TYPE } from './actionTypes';
import { AdActionTypes } from './actionInterfaces';
import { Ad } from '../../types';

export const fetchAdsRequest = (): AdActionTypes => {
    return {
        type: FETCH_ADS_REQUEST,
    };
};

export const fetchAdsSuccess = (ads: Ad[]): AdActionTypes => {
    return {
        type: FETCH_ADS_SUCCESS,
        ads,
    };
};

export const fetchAdsFailure = (error: string): AdActionTypes => {
    return {
        type: FETCH_ADS_FAILURE,
        error,
    };
};

export const setSortType = (sortType: string): AdActionTypes => {
    return {
        type: SET_SORT_TYPE,
        payload: sortType,
    };
};

export const setFilterType = (filterType: string): AdActionTypes => {
    return {
        type: SET_FILTER_TYPE,
        payload: filterType,
    };
};