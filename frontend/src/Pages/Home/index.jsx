import styles from "./Home.module.css";
import disco from "./disco.png";

const Home = ({ user }) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.topContent}>
        <h2> Wellcome back, {user.name} :) </h2>
        <img src={disco} alt="disco" />
      </div>
    </div>
  );
};

export default Home;
