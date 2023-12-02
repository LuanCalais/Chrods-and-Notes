import { Doughnut } from "react-chartjs-2";

const PieChart = ({ chartData, chartOptions, label }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{label}</h2>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
