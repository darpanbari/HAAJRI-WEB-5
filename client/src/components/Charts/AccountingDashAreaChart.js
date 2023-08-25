import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AccountingDashAreaChart = () => {
  const series = [
    {
      name: 'Income',
      data: [60, 100, 70, 50, 60, 90, 100, 70, 120],
    },
    {
      name: 'Expense',
      data: [50, 90, 60, 40, 50, 80, 100, 60, 110],
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
      categories: ['14-May', '13-May', '12-May', '11-May', '10-May', '09-May', '08-May', '07-May', '06-May'],
      title: {
        text: 'Date',
      },
    },
    yaxis: {
      min: 10,
      max: 140,
      title: {
        text: 'Amount',
      },
    },
    colors: ['#92E170', '#B44641'],
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
    <ReactApexChart options={options} series={series} type="area" height={250} />
    </div>
  );
};

export default AccountingDashAreaChart;

