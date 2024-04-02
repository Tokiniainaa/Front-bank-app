import React from 'react';
import { Line } from 'react-chartjs-2';

function getMonthName(monthNumber) {
 const monthNames = ['January', 'February', 'March', 'April', 'Mai', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 return monthNames[monthNumber - 1];
}

const LineChart = ({ data }) => {
 const completeMonths = Array.from({ length: 12 }, (_, i) => i + 1);


 const labels = completeMonths.map(month => {
    const item = data.find(d => d.month === month);
    return item ? getMonthName(item.month) : null;
 });

 const expenseData = completeMonths.map(month => {
    const item = data.find(d => d.month === month);
    return item ? item.Expense : 0;
 });

 const incomeData = completeMonths.map(month => {
    const item = data.find(d => d.month === month);
    return item ? item.Income : 0;
 });

 const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Expense',
        data: expenseData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.2, 
      },
      {
        label: 'Income',
        data: incomeData,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.2, 
      },
    ],
 };

 const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
 };

 return <Line data={chartData} options={options} />;
};

export default LineChart;
