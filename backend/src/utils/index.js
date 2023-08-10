export const verifyObject = (obj = {}) => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (prop !== "id") {
        if (!obj[prop].trim()) {
          return false;
        }
      }
    }
  }
  return true;
};
