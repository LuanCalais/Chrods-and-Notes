class MusicModel {
  constructor(
    id = null,
    name = "",
    gender = "",
    bandCreatedAt = "",
    createdAt = "",
    updatedAt = ""
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.bandCreatedAt = bandCreatedAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default MusicModel;
