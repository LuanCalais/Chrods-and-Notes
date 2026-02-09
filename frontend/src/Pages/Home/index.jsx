import styles from "./Home.module.css";
import disco from "./disco.png";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DoughnutMock, BarMock } from "../../utils/Mocks";
import { useContext, useEffect, useState } from "react";
import DoughnutChart from "../../Components/Common/DoughnutChart";
import BarChart from "../../Components/Common/BarChart";
import { UserContext } from "../../Contexts/UserContext";
import AnalyticsService from "../../Services/AnalyticsService";
import { percentageTransform } from "../../utils";

Chart.register(CategoryScale);

const Home = () => {
  const { contextUser } = useContext(UserContext);

  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderColor: "none",
      },
    ],
  });

  useEffect(() => {
    if(contextUser?.id) getMusicCountByBand();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextUser?.id]);

  async function getMusicCountByBand() {
    const { data } = await AnalyticsService.getMusicCountByBand(contextUser.id);
    if (!data || !data?.length) return;

    await buildBarChartData(data);
  }

  const buildBarChartData = (bands) => {
    const totalMusicsCount = bands.reduce(
      (acc, band) => acc + band.musicCount,
      0,
    );
    const labels = bands.map((band) => band.bandName);
    setBarChartData({
      labels: labels,
      datasets: [
        {
          label: labels,
          data: [
            ...bands.map((band) =>
              percentageTransform(band.musicCount, totalMusicsCount),
            ),
          ],
          backgroundColor: bands.map((band) => band.bandColor),
          borderColor: "none",
        },
      ],
    });
  };

  const [doughnutChartData] = useState({
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

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.topContent}>
        <h2> Wellcome back, {contextUser.name} :) </h2>
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
