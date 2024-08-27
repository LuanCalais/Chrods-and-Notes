import { toast } from "react-toastify";
import {
  HTTP_CLIENT_ERROR_STATUS,
  HTTP_SERVER_ERROR_STATUS,
  HTTP_SUCCESS_STATUS,
} from "../constants";
import "react-toastify/dist/ReactToastify.css";

export const responseRequest = (responseErrorStatus) => {
  if (!responseErrorStatus) {
    toast.error("Cannot complete operation", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return false;
  }

  if (HTTP_SUCCESS_STATUS.includes(Number(responseErrorStatus.status))) {
    toast.success("A operação foi um sucesso!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return true;
  }
  if (HTTP_CLIENT_ERROR_STATUS.includes(Number(responseErrorStatus.status))) {
    toast.error(
      `Houve um erro no lado do cliente :( - ${responseErrorStatus.data?.message}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    return false;
  }
  if (HTTP_SERVER_ERROR_STATUS.includes(Number(responseErrorStatus.status))) {
    toast.error(
      `Houve um erro no servidor - ${responseErrorStatus.data?.message}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    return false;
  }
  toast.success(
    `${
      responseErrorStatus.data?.message
        ? responseErrorStatus.data?.message
        : responseErrorStatus.message
    }`,
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

export const setLogin = (object) => {
  const userState = {
    id: object.id,
    email: object.email,
    name: object.name,
    isLogged: object.isLogged,
    profilePicture: object.profilePicture,
  };
  localStorage.setItem("userState", JSON.stringify(userState));
};
