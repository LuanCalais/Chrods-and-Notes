class BandModel {
  constructor(
    id = null,
    name = "",
    gender = "",
    bandCreatedAt = "",
    user = "",
    color = "#A0AF84",
    createdAt = "",
    updatedAt = ""
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.bandCreatedAt = bandCreatedAt;
    this.user = user;
    this.color = color;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default BandModel;
