import React from 'react';
import { Line } from 'react-chartjs-2';
import './chart.css';
import 'chart.js/auto';

const data = {
    labels: ["Jan","Feb","Mar","Apr","May"],
    datasets: [
        {
            label: ' Finished Job',
            data: [1,5,10,2,9,2,3,4,5,12],
            fill: false,
            backgroundColor: '#0071bd', 
            borderColor: '#0071bd',
        },
        {
            label: 'Unfinished Job',
            data: [1,1,2,4,5,6,7,8,6,7,8,2,1,3],
            fill: false,
            backgroundColor: 'red', 
            borderColor: 'red',
        }
    ],
};

const MyChart = () => (
    <div className="Data"> 
        <h2 className="analyse">Growth Analyse</h2> 
        <Line className='own-agenda' data={data} />
    </div>
);

export default MyChart;