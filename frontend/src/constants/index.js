import CAT from "../assets/img/CAT.svg";
import DOG from "../assets/img/DOG.svg";
import MNK from "../assets/img/MNK.svg";
import NON from "../assets/img/NON.svg";
import UNK from "../assets/img/UNK.svg";

export const HTTP_SUCCESS_STATUS = Object.freeze([200, 201, 204]);

export const HTTP_REDIRECT_STATUS = Object.freeze([301, 302, 304]);

export const HTTP_CLIENT_ERROR_STATUS = Object.freeze([400, 401, 403, 404]);

export const HTTP_SERVER_ERROR_STATUS = Object.freeze([500, 502, 503]);

export const SELECTED_CONTENT = Object.freeze({
  0: {
    label: "Home",
    code: 0,
    class: "home-class",
  },
  1: {
    label: "Bandas",
    code: 1,
    class: "bands-class",
  },
  2: {
    label: "Musics",
    code: 2,
    class: "musics-class",
  },
});

export const PROFILE_PICTURE_DETAILS = Object.freeze({
  DOG: {
    name: "Dog",
    path: DOG,
    code: "DOG",
  },
  CAT: {
    name: "Cat",
    path: CAT,
    code: "CAT",
  },
  MNK: {
    name: "Monkey",
    path: MNK,
    code: "MNK",
  },
  NON: {
    name: "No one",
    path: NON,
    code: "NON",
  },
  UNK: {
    name: "Unknown",
    path: UNK,
    code: "UNK",
  },
});

export const PROFILE_PICTURE_AVATARS = Object.freeze([
  PROFILE_PICTURE_DETAILS.DOG,
  PROFILE_PICTURE_DETAILS.CAT,
  PROFILE_PICTURE_DETAILS.MNK,
  PROFILE_PICTURE_DETAILS.NON,
  PROFILE_PICTURE_DETAILS.UNK,
]);

export const PATHS_TO_EDIT = Object.freeze({
  DEFAULT: "/app",
  BANDS: "/app/bands",
  MUSICS: "/app/musics",
});
