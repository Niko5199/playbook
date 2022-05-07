const User = require('./../models/User');

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, 'Sin bio');
  }
  static getInfo(user) {
    return Object.values(user);
  }
  static updateUsername(user, value) {
    user.username = value;
  }
  static getAllUsernames(arrUsers) {
    return arrUsers.map(user => user.username);
  }
}

module.exports = UserService;
