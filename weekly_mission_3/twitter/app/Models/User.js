class User {
  constructor(id, username, name, bio) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.bio = bio;
    this.dateCreated = new Date();
    this.lastUpdate = new Date();
  }
  get getUsername() {
    return this.username;
  }
  get getBio() {
    return this.bio;
  }
  get getDateCreated() {
    return this.dateCreated;
  }
  get getLastUpdated() {
    return this.lastUpdate;
  }
  set setUsername(value) {
    this.username = value;
  }
  set setBio(value) {
    this.bio = value;
  }
}

module.exports = User;
