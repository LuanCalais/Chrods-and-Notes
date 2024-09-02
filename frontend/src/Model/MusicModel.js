class MusicModel {
  constructor(
    id = null,
    name = "",
    artist = "",
    user = "",
    color = "#A0AF84",
    resume = "",
    createdAt = "",
    updatedAt = ""
  ) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.user = user;
    this.color = color;
    this.resume = resume;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default MusicModel;
