import React from "react";
import { Line } from "react-chartjs-2";

interface ChartProps {
  data: number[];
}

const LineChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Data ${index + 1}`),
    datasets: [
      {
        label: "Data",
        data: data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
