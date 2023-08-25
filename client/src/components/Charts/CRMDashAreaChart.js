import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CRMDashAreaChart = () => {
  const series = [
    {
      name: 'Deal calls by day',
      data: [15, 8, 12, 6, 10, 9, 13],
    },
   
  ];

  const options = {
    chart: {
      id: 'single-line-area-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['29-May', '28-May', '27-May', '26-May', '25-May', '24-May', '23-May'],
    
    },
    yaxis: {
      min: 5,
      max: 15,
      tickAmount: 2,
    },
    colors: ['#92E170'],
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
    <div className='px-3 py-2'>
    <ReactApexChart options={options} series={series} type="area" height={120} />
    </div>
  );
};

export default CRMDashAreaChart;

