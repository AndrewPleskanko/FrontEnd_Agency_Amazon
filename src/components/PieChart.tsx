import React from 'react';
import {Pie} from 'react-chartjs-2';
import {ChartOptions} from 'chart.js';
import {Chart, ArcElement, CategoryScale, LinearScale} from 'chart.js';
import { registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);
Chart.register(ChartDataLabels);
Chart.register(ArcElement, CategoryScale, LinearScale);

interface PieChartProps {
    data: any;
}

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

const PieChart: React.FC<PieChartProps> = ({data}) => {
    return <Pie data={data} options={pieOptions}/>;
};

export default PieChart;