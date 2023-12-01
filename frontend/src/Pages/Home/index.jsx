import styles from "./Home.module.css";

const Home = ({ user }) => {
  return (
    <div className={styles.contentContainer}>
      <h2> Wellcome back, {user.name} :) </h2>
    </div>
  );
};

export default Home;
