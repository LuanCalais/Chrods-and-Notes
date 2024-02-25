import styles from "./Home.module.css";
import disco from "./disco.png";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DoughnutMock, BarMock } from "../../utils/Mocks";
import { useState } from "react";
import DoughnutChart from "../../Components/Common/DoughnutChart";
import BarChart from "../../Components/Common/BarChart";

Chart.register(CategoryScale);

const Home = ({ user }) => {
  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: DoughnutMock.map((data) => data.label),
    datasets: [
      {
        label: "Percent",
        data: DoughnutMock.map((data) => {
          return data.percent;
        }),
        backgroundColor: ["#003B36", "#668F80", "#A0AF84"],
        borderColor: "none",
        borderWidth: 2,
      },
    ],
  });

  const [barChartData, setBarChartData] = useState({
    labels: BarMock.map((data) => data.label),
    datasets: [
      {
        data: BarMock.map((data) => {
          return data.percent;
        }),
        backgroundColor: ["#003B36"],
        borderColor: "none",
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.topContent}>
        <h2> Wellcome back, {user.name} :) </h2>
        <img src={disco} alt="disco" />
      </div>
      <div className={styles.chartsContainer}>
        <div>
          <DoughnutChart
            chartData={doughnutChartData}
            chartOptions={chartOptions}
            label="Artists by gender"
            className={styles.doughnutChart}

          />
        </div>
        <div>
          <BarChart
            chartData={barChartData}
            chartOptions={chartOptions}
            label="Musics by artist"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
