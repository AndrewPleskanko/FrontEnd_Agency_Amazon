import React from 'react';
import {Bar} from 'react-chartjs-2';
import {ChartOptions} from 'chart.js';
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

interface BarChartProps {
    data: any;
}

const barOptions = {
    layout: {
        padding: {
            top: 50
        }
    },
    scales: {
        y: {
            title: {
                display: true,
                text: 'Number of Clicks'
            }
        }
    }
};

const BarChart: React.FC<BarChartProps> = ({data}) => {
    return <Bar data={data} options={barOptions}/>;
};

export default BarChart;