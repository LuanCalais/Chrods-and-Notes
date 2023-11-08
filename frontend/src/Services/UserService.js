import axios from "axios";

const path = "/users";

const UserService = {
  createUser: async (user) => {
    try {
      const res = await axios.post(`http://localhost:3001${path}`, user);
      return res.data;
    } catch (err) {
      return err;
    }
  },

  loginUser: async (user) => {
    try {
      const res = await axios.post(`http://localhost:3001/login${path}`);
      alert("LOCAFAMO");
      return res.data;
    } catch (err) {
      return err;
    }
  },
};

export default UserService;
