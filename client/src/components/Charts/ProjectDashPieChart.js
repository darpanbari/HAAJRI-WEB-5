import React from "react";
import ReactApexChart from "react-apexcharts";

const ProjectDashPieChart = () => {
  const pieChartData = [
    { label: "On Going", value: 55.56, color: "#FF3A6E" },
    { label: "Finished", value: 22.22, color: "#6FD943" },
    { label: "On Hold", value: 22.22, color: "#FFA21D" },
  ];

  const chartData = pieChartData.map((item) => item.value);
  const chartLabels = pieChartData.map((item) => item.label);
  const chartColors = pieChartData.map((item) => item.color);

  const options = {
    colors: chartColors,
    labels: chartLabels,
    legend: {
      position: "bottom",
    },
  };

  return (
    <div className="pie-chart py-4">
      <ReactApexChart
        options={options}
        series={chartData}
        type="donut"
        height={200}
      />
      <div className="chart-values text-center mt-2 d-flex justify-content-around">
        {pieChartData.map((value, index) => (
          <div key={index} className="d-flex flex-column">
            <span>{value.value}</span>
            <span className="text-muted font-size-15">{value.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDashPieChart;
