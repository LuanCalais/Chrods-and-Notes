export const verifyUserObject = (obj = {}) => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && prop !== "isLogged") {
      if (prop !== "id") {
        if (!obj[prop].trim()) {
          return false;
        }
      }
    }
  }
  return true;
};

export const verifyObject = (obj = {}) => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (prop !== "id") {
        if (obj[prop] === null || obj[prop] === undefined) {
          return false;
        }
      }
    }
  }
  return true;
};
