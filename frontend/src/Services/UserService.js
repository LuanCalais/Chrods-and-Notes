import axios from "axios";

const path = "/users";

const UserService = {
  async createUser(user) {
    axios.post(`http://localhost:3001${path}`, user)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default UserService;
