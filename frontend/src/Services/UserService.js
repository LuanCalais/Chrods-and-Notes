import axios from "axios";

const path = "/users";

const UserService = {
  createUser: async (user) => {
    try {
      const res = await axios.post(`http://localhost:3001${path}`, user);
      return res;
    } catch (err) {
      return err.response;
    }
  },

  loginUser: async (user) => {
    try {
      const res = await axios.put(`http://localhost:3001/login${path}`, user);
      return res;
    } catch (err) {
      return err.response;
    }
  },
};

export default UserService;
