import React from "react";
import ReactApexChart from "react-apexcharts";

const chartData = [
  {
    name: "todo",
    data: [50, 30, 60, 40, 50, 40],
  },
  {
    name: "InxProgress",
    data: [60, 40, 70, 50, 60, 50],
  },
  {
    name: "Review",
    data: [70, 50, 80, 60, 70, 60],
  },
  {
    name: "Done",
    data: [80, 60, 90, 70, 80, 70],
  },
];

const xaxisLabels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];

const ProjectDashLineChart = () => {
  const series = chartData.map((item) => ({
    name: item.name,
    data: item.data,
  }));

  const options = {
    chart: {
      type: "spline",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: xaxisLabels,
    },
    markers: {
      size: 6,
      strokeWidth: 0,
      hover: {
        size: 8,
      },
    },
    colors: ["#ffa21d", "#36b37e", "#2359ee", "#ff3a6e"],
    stroke: {
      width: [2, 2, 2, 2],
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return parseInt(value);
        },
      },
    },
    legend: {
      show: false, // Hide series names
    },
  };

  return (
    <div className="line-chart d-flex justify-content-center">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={150}
        style={{ width: "95%" }}
      />
    </div>
  );
};

export default ProjectDashLineChart;
