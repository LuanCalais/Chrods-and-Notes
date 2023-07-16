import axios from "axios";

const path = "/users";

class UserService {
  async createUser(user) {
    const result = await axios.post(`http://localhost:3000${path}`, user);
    // TODO: Redirect to logged status
  }
}

export default new UserService();
