import React from 'react';
import ReactApexChart from 'react-apexcharts';

const POSDashAreaChart = () => {
  const series = [
    {
      name: 'Purchase',
      data: [70, 270, 80,  245, 115, 260, 135, 280, 70, 215],
    },
    {
      name: 'Sales',
      data: [100, 300, 100, 260, 140, 290, 150, 300, 100, 250],
    },
  ];

  const options = {
    chart: {
      id: 'dual-line-area-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['2023-05-29','2023-05-28', '2023-05-27', '2023-05-26', '2023-05-25', '2023-05-24', '2023-05-23', '2023-05-22', '2023-05-21', '2023-05-20'],
      title: {
        text: 'Date',
      },
    },
    yaxis: {
      min: 0,
      max: 360,
      title: {
        text: 'Amount',
      },
    },
    colors: ['#B44641', '#92E170'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false, // removes the labels
    },
    legend: {
      show: false, // Hide series names
    },
  };

  return (
    <div className='p-4'>
    <ReactApexChart options={options} series={series} type="area" height={400} />
    </div>
  );
};

export default POSDashAreaChart;

