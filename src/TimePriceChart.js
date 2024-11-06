import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

// Registering the required Chart.js components
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const TimePriceChart = ({ data }) => {
  // Check for undefined or empty data
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const chartData = {
    labels: data.map(item => item.datetime), // Time on the x-axis
    datasets: [
      {
        label: 'Price',
        data: data.map(item => item.close), // Price on the y-axis
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Price vs Time',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Price: ₹${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default TimePriceChart;
