import styles from "./Home.module.css";
import disco from "./disco.png";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useContext, useEffect, useState } from "react";
import DoughnutChart from "../../Components/Common/DoughnutChart";
import BarChart from "../../Components/Common/BarChart";
import { UserContext } from "../../Contexts/UserContext";
import AnalyticsService from "../../Services/AnalyticsService";
import { generateChartColors, percentageTransform } from "../../utils";

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

  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    if (contextUser?.id) {
      getMusicCountByBand();
      getGenderCountByBand();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextUser?.id]);

  async function getMusicCountByBand() {
    const { data } = await AnalyticsService.getMusicCountByBand(contextUser.id);
    if (!data || !data?.length) return;

    await buildBarChartData(data);
  }

  async function getGenderCountByBand() {
    const { data } = await AnalyticsService.getGenderCountByBand(
      contextUser.id,
    );
    if (!data || !data?.length) return;

    buildDoughnutChartData(data);
  }

  const buildDoughnutChartData = (genderData) => {
    const totalGenderCount = genderData.reduce(
      (acc, gender) => acc + gender.count,
      0,
    );

    const backgroundColors = generateChartColors(totalGenderCount);

    setDoughnutChartData({
      labels: genderData.map((gender) => gender.genderName),
      datasets: [
        {
          label: "Percent",
          data: genderData.map((gender) =>
            percentageTransform(gender.count, totalGenderCount),
          ),
          backgroundColor: backgroundColors,
          borderColor: "none",
          borderWidth: 2,
        },
      ],
    });
  };

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
          label: "Dataset ",
          data: [
            ...bands.map((band) =>
              percentageTransform(band.musicCount, totalMusicsCount),
            ),
          ],
          backgroundColor: bands.map((band) => band.bandColor),
        },
      ],
    });
  };

  const barChartChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "left",
      },
      title: {
        display: true,
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
            chartOptions={doughnutChartOptions}
            label="Artists by gender"
            className={styles.doughnutChart}
          />
        </div>
        <div>
          <BarChart
            chartData={barChartData}
            chartOptions={barChartChartOptions}
            label="Musics by artist"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
