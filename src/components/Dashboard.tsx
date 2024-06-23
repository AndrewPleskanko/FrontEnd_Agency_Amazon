import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAds} from './actions/adActions';
import {Ad} from '../types';
import {Bar,Pie} from 'react-chartjs-2';
import {Chart, ChartOptions,ArcElement, CategoryScale, LinearScale, BarElement} from 'chart.js';

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);
Chart.register(ArcElement);

interface DashboardProps {
    fetchAds: () => void;
    adsData: { loading: boolean; ads: Ad[]; error: string };
}

const Dashboard: React.FC<DashboardProps> = ({fetchAds, adsData}) => {
    useEffect(() => {
        fetchAds();
    }, [fetchAds]);

    if (adsData.loading) {
        return <div>Loading...</div>;
    }

    if (adsData.error) {
        return <div>{adsData.error}</div>;
    }

    let data;
    if (adsData && adsData.ads) {
        data = {
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
    }

    return data ? (
        <div style={{width: '800px', height: '600px'}}>
            <Bar data={data} options={barOptions} />
            <Pie data={data} options={pieOptions} />
        </div>
    ) : (
        <div>No data available</div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        adsData: state,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchAds: () => dispatch(fetchAds()),
    };
};

const barOptions = {
    scales: {
        y: {
            title: {
                display: true,
                text: 'Number of Clicks'
            }
        }
    }
};

const pieOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Pie Chart'
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);