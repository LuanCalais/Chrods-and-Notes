import styles from "./Home.module.css";
import disco from "./disco.png";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DoughnutMock } from "../../utils/Mocks";
import { useState } from "react";
import DoughnutChart from "../../Components/Common/DoughnutChart";

Chart.register(CategoryScale);

const Home = ({ user }) => {
  const [chartData, setChartData] = useState({
    labels: DoughnutMock.map((data) => data.label),
    datasets: [
      {
        label: "Users Gained ",
        data: DoughnutMock.map((data) => data.userGain),
        backgroundColor: ["#003B36", "#668F80", "#A0AF84"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    legend: {
      display: false,
    },
  });

  return (
    <div className={styles.contentContainer}>
      <div className={styles.topContent}>
        <h2> Wellcome back, {user.name} :) </h2>
        <img src={disco} alt="disco" />
      </div>
      <div className={styles.chartsContainer}>
        <div>
          <DoughnutChart
            chartData={chartData}
            chartOptions={chartOptions}
            label="Artists by gender"
          />
        </div>
        <div>
          <DoughnutChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
