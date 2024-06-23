import { Ad } from '../../types';

export const FETCH_ADS_REQUEST = 'FETCH_ADS_REQUEST';
export const FETCH_ADS_SUCCESS = 'FETCH_ADS_SUCCESS';
export const FETCH_ADS_FAILURE = 'FETCH_ADS_FAILURE';

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

export type AdActionTypes = FetchAdsRequestAction | FetchAdsSuccessAction | FetchAdsFailureAction;

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
export const fetchAds = () => {
    return (dispatch: any) => {
        dispatch(fetchAdsRequest());
        fetch('http://localhost:8080/api/v1/ads')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log(response)
                return response.json();
            })
            .then(ads => {
                dispatch(fetchAdsSuccess(ads));
            })
            .catch(error => {
                dispatch(fetchAdsFailure(error.toString()));
            });
    };
};