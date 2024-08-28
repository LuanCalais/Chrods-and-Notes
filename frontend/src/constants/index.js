

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

export const PROFILE_PICTURE = Object.freeze({
  DOG: {
    name: "Dog",
    path: "/static/media/DOG.81eb894a9b7fee1d28e5c477a46f5d89.svg",
    code: "DOG",
  },
  CAT: {
    name: "Cat",
    path: "/static/media/CAT.b32929cbfe2cb43f6c350691e1d9786e.svg",
    code: "CAT",
  },
  MNK: {
    name: "Monkey",
    path: "/static/media/MNK.21c828e144bce5b88ba9736709ec166d.svg",
    code: "MNK",
  },
  NON: {
    name: "No one",
    path: "/static/media/NON.50ea5be638a61291ee520ecaa305e299.svg",
    code: "NON",
  },
  UNK: {
    name: "Unknown",
    path: "/static/media/UNK.3097eef98a0a4637c068e873cf184db9.svg",
    code: "UNK",
  },
});
