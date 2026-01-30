import Button from "../Common/Button";
import styles from "./Header.module.css";
import Modal from "../Common/CommonModal";
import Input from "../Common/CommonInput";
import UserService from "../../Services/UserService";
import { useState } from "react";
import { UserModel } from "../../Model";
import {
  responseRequest,
  validateEmail,
  validateObject,
  setLogin,
} from "../../utils";
import { HTTP_SERVER_ERROR_STATUS } from "../../constants";

const Header = ({ changeState, isLogged }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(new UserModel());
  const [isLogin, setIsLogin] = useState(false);

  const handleModal = () => {
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
        changeState(res.data.data);
      }
    } else {
      res = await UserService.createUser(user);
    }

    const responseResult = responseRequest(res);
    if (responseResult) {
      setUser(new UserModel());
    }
    setIsLoading(false);

    if (!HTTP_SERVER_ERROR_STATUS.includes(Number(res.status))) {
      setShow(false);
      setIsLogin(false);
      return;
    }
  }

  if (isLogged) {
    return <h1>Usuário logado</h1>;
  }
  return (
    <nav>
      <div className={styles.container}>
        <a
          href="https://github.com/LuanCalais"
          target="_blank"
          rel="noreferrer"
          title="Luan Calais GitHub"
          alt="Luan Calais GitHub"
        >
          <i className="bx bx-code"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/luan-s-calais-186104217/"
          target="_blank"
          rel="noreferrer"
          title="Luan Calais Linkedin"
          alt="Luan Calais Linkedin"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>

        <Button
          label="Sign in"
          actionFunction={handleModal}
          color="var(--light-dark-green)"
          background="var(--light-slim-green)"
        />
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
            label={
              isLogin ? "I don't have a account" : "Already have a account "
            }
            color="var(--deep-dark-green)"
            background="var(--light-color)  "
            borderColor="var(--deep-dark-green)"
            width="100%"
            height="41px"
            fontSize="14px"
            actionFunction={() => setIsLogin(!isLogin)}
          />
        </Modal>
      </div>
    </nav>
  );
};

export default Header;
