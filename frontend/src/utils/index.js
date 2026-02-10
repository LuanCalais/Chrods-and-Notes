import { toast } from "react-toastify";
import {
  DEFAULT_COLORS,
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
      },
    );
    return false;
  }
  if (HTTP_SERVER_ERROR_STATUS.includes(Number(responseErrorStatus.status))) {
    toast.error(
      `Houve um erro no servidor - ${responseErrorStatus.data?.message}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      },
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
    },
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

export const percentageTransform = (value, total) => {
  if (total === 0) {
    return 0;
  }
  return (value / total) * 100;
};

export const generateChartColors = (count) => {
  if (count <= DEFAULT_COLORS.length) {
    return DEFAULT_COLORS.slice(0, count);
  }
  
  const colors = [...DEFAULT_COLORS];
  const usedColors = new Set(DEFAULT_COLORS.map(c => c.toUpperCase()));
  
  const goldenRatio = 0.618033988749895;
  let hue = 0.5;
  let attempts = 0;
  const maxAttempts = count * 100;
  
  while (colors.length < count && attempts < maxAttempts) {
    hue += goldenRatio;
    hue %= 1;
    
    const h = Math.floor(hue * 360);
    const s = 55;
    const l = 45;
    
    const newColor = hslToHex(h, s, l);
    
    if (!usedColors.has(newColor)) {
      colors.push(newColor);
      usedColors.add(newColor);
    }
    
    attempts++;
  }
  
  return colors;
};

const hslToHex = (h, s, l) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
};