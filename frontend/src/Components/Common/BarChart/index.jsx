import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData, chartOptions, label }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{label}</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
