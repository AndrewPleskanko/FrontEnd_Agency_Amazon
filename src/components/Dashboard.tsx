import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAds, fetchSortedAds} from '../actions/adApi';
import {Ad} from '../types';
import BarChart from './BarChart';
import PieChart from './PieChart';
import {RootState} from '../store';
import {AppDispatch} from '../store';

const Dashboard: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const adsData = useSelector((state: RootState) => state.ads);

    const [sortType, setSortType] = useState(localStorage.getItem('sortType') || 'name');
    const [sortOrder, setSortOrder] = useState(localStorage.getItem('sortOrder') || 'asc');

    const handleSort = useCallback(() => {
        dispatch(fetchSortedAds(sortType, sortOrder));
        localStorage.setItem('sortType', sortType);
        localStorage.setItem('sortOrder', sortOrder);
    }, [dispatch, sortType, sortOrder]);

    useEffect(() => {
        dispatch(fetchAds());
    }, [dispatch]);

    const handleSortOrderChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(event.target.value);
    }, []);

    const handleSortTypeChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(event.target.value);
    }, []);

    const createChartData = (label: string, data: number[], backgroundColor: string, borderColor: string) => ({
        label: label,
        data: data,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
    });

    const data = useMemo(() => adsData.ads && {
        labels: adsData.ads.map((ad: Ad) => ad.name),
        datasets: [
            createChartData('№ of Clicks', adsData.ads.map((ad: Ad) => ad.clicks), 'rgba(0,123,255,0.6)', 'rgba(0,123,255,1)'),
            createChartData('№ of Impressions', adsData.ads.map((ad: Ad) => ad.impressions), 'rgba(220,53,69,0.6)', 'rgba(220,53,69,1)'),
        ],
    }, [adsData.ads]);

    const dataPie = useMemo(() => adsData.ads && {
        labels: adsData.ads.map((ad: Ad) => ad.name),
        datasets: [
            createChartData('№ of Clicks', adsData.ads.map((ad: Ad) => ad.clicks), 'rgba(0,123,255,0.6)', 'rgba(0,123,255,1)'),
        ],
    }, [adsData.ads]);

    if (adsData.loading) return <div className="spinner-border text-primary" role="status"><span
        className="sr-only">Loading...</span></div>;
    if (adsData.error) return <div className="alert alert-danger" role="alert">{adsData.error}</div>;

    return (
        <div style={{width: '800px', height: '600px'}}>
            <div className="container mt-5 dashboard-container">
                <div className="d-flex justify-content-between mb-3">
                    <button className="btn btn-primary" onClick={handleSort}>Sort</button>
                    <select className="custom-select custom-select-sm" value={sortType} onChange={handleSortTypeChange}>
                        <option value="name">Name</option>
                        <option value="clicks">Clicks</option>
                        <option value="impressions">Impressions</option>
                    </select>
                    <select className="custom-select custom-select-sm" value={sortOrder}
                            onChange={handleSortOrderChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                {data && <BarChart data={data}/>}
            </div>
            <div style={{width: '450px', height: '450px'}}>

                {data && <PieChart data={dataPie}/>}
            </div>
        </div>
    );
}

export default Dashboard;