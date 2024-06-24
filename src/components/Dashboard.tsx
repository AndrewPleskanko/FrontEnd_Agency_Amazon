import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchAds, fetchSortedAds} from './actions/adApi';

import {Ad} from '../types';
import BarChart from './BarChart';
import PieChart from './PieChart';

interface DashboardProps {
    fetchAds: () => void;
    fetchSortedAds: (sortType: string, sortOrder: string) => void;
    adsData: { loading: boolean; ads: Ad[]; error: string; };
}

const Dashboard: React.FC<DashboardProps> = ({fetchAds, fetchSortedAds, adsData}) => {
    const [sortType, setSortType] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchAds();
    }, [fetchAds]);

    const handleSort = () => {
        fetchSortedAds(sortType, sortOrder);
    };

    const handleSortOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(event.target.value);
    };

    const handleSortTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(event.target.value);
    };

    const data = adsData.ads && {
        labels: adsData.ads.map((ad: Ad) => ad.name),
        datasets: [
            {
                label: '# of Clicks',
                data: adsData.ads.map((ad: Ad) => ad.clicks),
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
            {
                label: '# of Impressions',
                data: adsData.ads.map((ad: Ad) => ad.impressions),
                backgroundColor: 'rgba(153,102,255,0.6)',
                borderColor: 'rgba(153,102,255,1)',
                borderWidth: 1,
            },
        ],
    };

    if (adsData.loading) return <div>Loading...</div>;
    if (adsData.error) return <div>{adsData.error}</div>;

    return (
        <div style={{width: '800px', height: '600px'}}>
            <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-primary" onClick={handleSort}>Sort</button>
                <select className="form-select form-select-sm" onChange={handleSortTypeChange}>
                    <option value="name">Name</option>
                    <option value="clicks">Clicks</option>
                    <option value="impressions">Impressions</option>
                </select>
                <select className="form-select form-select-sm" onChange={handleSortOrderChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            {data && <BarChart data={data}/>}
            {data && <PieChart data={data}/>}
        </div>
    );
}

const mapStateToProps = (state: any) => ({adsData: state});

const mapDispatchToProps = (dispatch: any) => ({
    fetchAds: () => dispatch(fetchAds()),
    fetchSortedAds: (sortType: string, sortOrder: string) => dispatch(fetchSortedAds(sortType, sortOrder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);