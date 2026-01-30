import "dotenv/config";

export const CONNECTION_STRING = Object.freeze({
    MONGO_DB: process.env.MONGODB_URI
})

export const PROFILE_PICTURE = Object.freeze({
    DOG: {
      name: "Dog",
      code: "DOG",
    },
    CAT: {
      name: "Cat",
      code: "CAT",
    },
    MNK: {
      name: "Monkey",
      code: "MNK",
    },
    NON: {
      name: "No one",
      code: "NON",
    },
    UNK: {
      name: "Unknown",
      code: "UNK",
    },
  });
  