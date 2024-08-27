class UserModel {
  constructor(
    id = null,
    name = "",
    email = "",
    password = null,
    profilePicture = "DOG"
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.profilePicture = profilePicture;
  }
}

export default UserModel;
