

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
    path: "/static/media/dog.6c06e6dae29d6157b518.jpg",
    code: "DOG",
  },
  CAT: {
    name: "Cat",
    path: "/static/media/cat.556bed6d43b6060bc577.jpg",
    code: "CAT",
  },
  MNK: {
    name: "Monkey",
    path: "/static/media/monkey.fdd5014bceb32093b6b4.jpg",
    code: "MNK",
  },
});
