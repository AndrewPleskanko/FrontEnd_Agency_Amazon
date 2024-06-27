import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface PieChartProps {
    data: any;
}

const pieOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                font: {
                    size: 14,
                    weight: 'bold',
                },
            },
        },
        title: {
            display: true,
            text: 'Pie Chart',
            font: {
                size: 20,
            },
        },
        tooltip: {
            enabled: true,
            titleFont: {
                size: 16,
            },
            bodyFont: {
                size: 14,
            },
            footerFont: {
                size: 12,
            },
        },
        datalabels: {
            color: '#fff',
            font: {
                size: 14,
                weight: 'bold',
            },
        },
    },
};

const PieChart: React.FC<PieChartProps> = ({ data }) => {
    return <Pie data={data} options={pieOptions} />;
};

export default PieChart;