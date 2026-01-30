import styles from "./CenterContent.module.css";
import Button from "../Common/Button";
import Modal from "../Common/CommonModal";
import Input from "../Common/CommonInput";
import { useState } from "react";
import { UserModel } from "../../Model";
import UserService from "../../Services/UserService";
import {
  responseRequest,
  validateEmail,
  validateObject,
  setLogin,
} from "../../utils";
import { ToastContainer } from "react-toastify";
import { HTTP_SERVER_ERROR_STATUS } from "../../constants";
import LoggedPage from "../LoggedPage";
import { useNavigate } from "react-router-dom";

const CenterContent = ({ isLogged }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(new UserModel());
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleModal = () => {
    setIsLoading(false);
    setShow(!show);
  };

  async function handleUser() {
    if (!isLogin) {
      if (!validateObject(user) || !validateEmail(user.email)) return;
    } else {
      if (
        !validateObject({ email: user.email, password: user.password }) ||
        !validateEmail(user.email)
      )
        return;
    }

    setIsLoading(true);

    let res;

    if (isLogin) {
      res = await UserService.loginUser({ ...user, state: true });
      if (!HTTP_SERVER_ERROR_STATUS.includes(Number(res.status))) {
        setLogin(res.data.data);
      }
    } else {
      res = await UserService.createUser(user);
    }

    const responseResult = responseRequest(res);
    if (responseResult) {
      setUser(new UserModel());
    }

    if (!HTTP_SERVER_ERROR_STATUS.includes(Number(res.status))) {
      setShow(false);
      navigate("app");
    }

    setIsLoading(false);
  }

  if (isLogged) {
    return <LoggedPage isLogged={isLogged} />;
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
          className={styles.singUpButton}
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
      <Modal
        title={isLogin ? "Sing in" : "Sing up"}
        show={show}
        handleModal={handleModal}
      >
        {!isLogin && (
          <Input
            placeholder="Nome"
            handleValue={(value) => (user.name = value)}
          />
        )}

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
          label={isLogin ? "Login" : "Sing up"}
          color="var(--light-color)"
          background="var(--deep-dark-green)"
          width="100%"
          height="41px"
          fontSize="14px"
          actionFunction={handleUser}
          disabledButton={isLoading}
        />

        <Button
          label={isLogin ? "I don't have a account" : "Already have a account "}
          color="var(--deep-dark-green)"
          background="var(--light-color)  "
          borderColor="var(--deep-dark-green)"
          width="100%"
          height="41px"
          fontSize="14px"
          actionFunction={() => setIsLogin(!isLogin)}
        />
      </Modal>
      <ToastContainer />
    </>
  );
};

export default CenterContent;
