// BarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarChartProps {
    data: any;
}

const barOptions: ChartOptions<'bar'> = {
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
            text: 'Bar Chart',
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
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Ads',
                font: {
                    size: 14,
                },
            },
            ticks: {
                font: {
                    size: 12,
                },
            },
        },
        y: {
            title: {
                display: true,
                text: 'Count',
                font: {
                    size: 14,
                },
            },
            ticks: {
                font: {
                    size: 12,
                },
            },
        },
    },
};

const BarChart: React.FC<BarChartProps> = ({ data }) => {
    return (
        <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}> {/* Change background color to light grey */}
            <div className="card-body">
                <Bar data={data} options={barOptions} />
            </div>
        </div>
    );
};

export default BarChart;