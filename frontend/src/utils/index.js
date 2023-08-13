import { toast } from "react-toastify";
import {
  HTTP_CLIENT_ERROR_STATUS,
  HTTP_SERVER_ERROR_STATUS,
} from "../constants";
import "react-toastify/dist/ReactToastify.css";

export const responseRequest = (responseErrorStatus) => {
  if (!responseErrorStatus) {
    toast.success("Cadastrado com sucesso!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return true;
  }
  if (HTTP_CLIENT_ERROR_STATUS.includes(Number(responseErrorStatus.status))) {
    toast.error(
      `Houve um erro no lado do cliente :( - ${responseErrorStatus.data.message}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    return false;
  }
  if (HTTP_SERVER_ERROR_STATUS.includes(Number(responseErrorStatus.status))) {
    toast.error(
      `Houve um erro no servidor - ${responseErrorStatus.data.message}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    return false;
  }
  toast.error(
    `Cadastro infelizmente não pôde ser concluído :( - ${responseErrorStatus.data.message}`,
    {
      position: toast.POSITION.BOTTOM_RIGHT,
    }
  );
  return false;
};

export const validateEmail = (input) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isValid = emailRegex.test(input);

  if (!isValid) {
    toast.error("Inisira um e-mail válido");
  }

  return isValid;
};

export const validateObject = (object) => {
  for (const key in object) {
    if (key !== "id") {
      if (
        object[key] === null ||
        object[key] === undefined ||
        object[key] === ""
      ) {
        toast.error("Insira todas as informações");
        return false;
      }
    }
  }
  return true;
};
