class UserModel {
  constructor(id = null, name = "", email = "", password = null) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default UserModel;
