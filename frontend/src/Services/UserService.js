import api from "./api";

const path = "/users";

const UserService = {
  createUser: async (user) => {
    try {
      const res = await api.post(path, user);
      return res;
    } catch (err) {
      return err.response;
    }
  },

  loginUser: async (user) => {
    try {
      const res = await api.put(`/login${path}`, user);
      return res;
    } catch (err) {
      return err.response;
    }
  },
};

export default UserService;
