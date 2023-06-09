import styles from "./CenterContent.module.css";

const CenterContent = ({ isLoged }) => {
  if (isLoged) {
    return <h1>Usuário logado</h1>;
  }

  return (
    <section className={styles.centerContentContainer}>
      <div className={styles.titleContainer}>
        <h1>
          Chords<span>&Notes</span>
        </h1>
        <h2>Manage your classes </h2>
      </div>
    </section>
  );
};

export default CenterContent;
