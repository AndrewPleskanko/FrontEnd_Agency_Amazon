import {fetchAdsRequest, fetchAdsSuccess, fetchAdsFailure} from './adActions';

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

export const fetchSortedAds = (sortType: string, sortOrder: string) => {
    return (dispatch: any) => {
        dispatch(fetchAdsRequest());
        fetch(`http://localhost:8080/api/v1/ads/sortedAds?sort=${sortType}&order=${sortOrder}`).then(response => {
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
}