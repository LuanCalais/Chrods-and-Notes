import { toast } from "react-toastify";
import {
  HTTP_SUCCESS_STATUS,
  HTTP_CLIENT_ERROR_STATUS,
  HTTP_SERVER_ERROR_STATUS,
} from "../constants";
import "react-toastify/dist/ReactToastify.css";

export const responseRequest = (status) => {
  if (HTTP_SUCCESS_STATUS.includes(Number(status))) {
    toast.success("Cadastrado com sucesso!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return true;
  }
  if (HTTP_CLIENT_ERROR_STATUS.includes(Number(status))) {
    toast.error("Houve um erro no lado do cliente :(", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return false;
  }
  if (HTTP_SERVER_ERROR_STATUS.includes(Number(status))) {
    toast.error("Houve um erro no servidor", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return false;
  }
  toast.error("Cadastro infelizmente não pôde ser concluído :(", {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
  return false;
};
