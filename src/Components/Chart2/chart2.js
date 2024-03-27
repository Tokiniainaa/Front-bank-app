import React from 'react';
import { Radar } from 'react-chartjs-2';
import './chart2.css';
import 'chart.js/auto';



const data = {
    labels: [
      'Curiosity',
      'Patience',
      'Creativity',
      'Perseverence',
      'Maturity',
      'Discipline',
      
    ],
    datasets: [ {
      label: 'Personnality',
      data: [39,39,39,38,37,39],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };
  const RadarChart = () => (
    <div class="radar">
        <Radar className='radar-img' data={data} />
    </div>
);

export default RadarChart;

  