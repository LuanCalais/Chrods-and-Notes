class MusicModel {
  constructor(
    id = null,
    name = "",
    gender = "",
    bandCreatedAt = "",
    user = "",
    banner = "",
    createdAt = "",
    updatedAt = ""
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.bandCreatedAt = bandCreatedAt;
    this.user = user;
    this.banner = banner;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default MusicModel;
