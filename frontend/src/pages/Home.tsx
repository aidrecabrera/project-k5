import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import EndpointList from "../components/EndpointList";
import { endpoints } from "../utils/Endpoints";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [dataName, setDataName] = useState<string>();
  const [years, setYears] = useState<string[]>([]);
  const [dataset, setData] = useState<number[]>([]);
  const [api, setApi] = useState<string>();

  useEffect(() => {
    if (api) {
      axios
        .get(`http://localhost:8000/k5/${api}`)
        .then((response) => {
          const firstKey = Object.keys(response.data)[0];
          const yearsData = response.data[firstKey];
          const years = yearsData.map((item: {}) => Object.keys(item)[0]);
          const valueData = response.data[firstKey];
          const dataValues = valueData.map(
            (item: any) => Object.values(item)[0]
          );
          setYears(years);
          setData(dataValues);
          setDataName(firstKey);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [api]);

  const data = {
    labels: years,
    datasets: [
      {
        label: dataName,
        data: dataset,
        fill: true,
        color: "#852f3c",
        borderColor: "#852f3c",
        backgroundColor: "#852f3c",
        opacity: 0,
        tension: 0.01,
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Set display to false to remove the x-axis grid lines
        },
        ticks: {
          font: {
            size: 12,
            weight: "bold",
            family: "Inter",
          },
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          font: {
            size: 12,
            weight: "bold",
            family: "Inter",
          },
        },
      },
    },
  };

  const handleEndpointSelect = (selectedEndpoint: any) => {
    setApi(selectedEndpoint);
  };

  return (
    <div>
      <div className="bg-white p-10 rounded-lg">
        <Line options={options} data={data} />
        <EndpointList options={endpoints} onSelect={handleEndpointSelect} />
      </div>
    </div>
  );
}
