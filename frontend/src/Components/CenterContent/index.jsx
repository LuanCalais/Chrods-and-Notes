import styles from "./CenterContent.module.css";
import Button from "../Common/Button";
import Modal from "../Common/CommonModal";
import Input from "../Common/CommonInput";
import { useState } from "react";
import { UserModel } from "../../Model";
import UserService from "../../Services/UserService";
import { responseRequest, validateEmail, validateObject } from "../../utils";
import { ToastContainer } from "react-toastify";

const CenterContent = ({ isLoged }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(new UserModel());

  const handleModal = () => {
    setIsLoading(false);
    setShow(!show);
  };

  async function createUser() {
    if (!validateObject(user) || !validateEmail(user.email)) return;

    setIsLoading(true);

    const { response } = await UserService.createUser(user);

    const responseResult = responseRequest(response);

    if (responseResult) {
      setUser(new UserModel());
    }
    setIsLoading(false);
    setShow(false);
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
          actionFunction={handleModal}
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
              actionFunction={handleModal}
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
      <Modal title="Sing up" show={show} handleModal={handleModal}>
        <Input
          placeholder="Nome"
          handleValue={(value) => (user.name = value)}
        />
        <Input
          placeholder="E-mail"
          handleValue={(value) => (user.email = value)}
          type="email"
        />
        <Input
          placeholder="Password"
          handleValue={(value) => (user.password = value)}
          type="password"
        />
        <Button
          label="Sing up"
          color="var(--light-color)"
          background="var(--deep-dark-green)"
          width="100%"
          height="41px"
          fontSize="14px"
          actionFunction={createUser}
          disabledButton={isLoading}
        />
      </Modal>
      <ToastContainer />
    </>
  );
};

export default CenterContent;
