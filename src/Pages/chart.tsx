import React from 'react';
import { Line } from 'react-chartjs-2';
import './chart.css';
import 'chart.js/auto';

interface ChartData {
 labels: string[];
 datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
 }[];
}

interface MyChartProps {}

const data: ChartData = {
 labels: ["Jan", "Feb", "Mar", "Apr", "May"],
 datasets: [
    {
      label: 'Solde',
      data: [1, 5, 10, 2, 9, 2, 3, 4, 5, 12],
      fill: false,
      backgroundColor: '#0071bd',
      borderColor: '#0071bd',
    },
    {
      label: 'Balance',
      data: [1, 1, 2, 4, 5, 6, 7, 8, 6, 7, 8, 2, 1, 3],
      fill: false,
      backgroundColor: 'green',
      borderColor: 'green',
    },
    {
      label: 'Spending',
      data: [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10],
      fill: false,
      backgroundColor: 'red',
      borderColor: 'red',
    }
 ],
};

const MyChart: React.FC<MyChartProps> = () => (
 <div className="Data">
    <Line className='own-agenda' data={data} />
 </div>
);

export default MyChart;
