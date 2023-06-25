import styles from "./CenterContent.module.css";
import Button from "../Common/Button";
import Modal from "../Common/CommonModal";

const CenterContent = ({ isLoged }) => {

  const openModal = () =>   {
    alert('TODO: Open singup modal')
  }

  if (isLoged) {
    return <h1>Usuário logado</h1>;
  }

  return (
    <>
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
        <div className={styles.infoContainer}>
          <div className={styles.infoBox}>
            <h3>
              <span>Chords</span> and Notes
            </h3>
            <p>
              Um sistema facilitado e inovador para que você consiga gerenciar
              suas aulas e evoluções no mundo da música.
            </p>
            <Button
              label="Start now"
              actionFunction={openModal}
              color="var(--light-color)"
              background="var(--deep-dark-green)"
              width="100%"
              height="41px"
              fontSize="14px"
            />
          </div>
          <div className={styles.imgBox}></div>
        </div>
      </section>
      <Modal>
        oi
      </Modal>
    </>
  );
};

export default CenterContent;
