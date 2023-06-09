import styles from "./CenterContent.module.css";
import Button from "../Common/Button";

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
      <Button 
        label="Sing up"
        color="var(--light-slim-green)"
        background="var(--light-color)"
        width="242px"
        height="65px"
        fontSize="24px"
      />
    </section>
  );
};

export default CenterContent;
