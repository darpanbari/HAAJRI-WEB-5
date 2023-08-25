import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CRMDashColumnChart = () => {
  const options = {
    chart: {
      id: 'column-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Proposal', 'Initial Contact', 'Close', 'Qualification', 'Meeting'],
      title: {
        text: 'Platform',
      },
    },
    yaxis: {
      min: 0.0,
      max: 2.0,
      tickAmount: 3,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
      },
    },
  };

  const series = [
    {
      name: 'Platform',
      data: [1.0, 2.0, 2.0, 1.0, 2.0],
    },
  ];

  return (
    <div className="px-3 py-2" >
      <ReactApexChart options={options} series={series} type="bar" height={280} />
    </div>
  );
};

export default CRMDashColumnChart;
