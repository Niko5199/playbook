const User = require('../../app/User');

class UserView {
  static createUser(payload) {
    if (!payload) return { error: 'payload no existe' };

    const mapPayload = Object.values(payload);
    if (!mapPayload.every(val => val !== null))
      return { error: 'necesitan tener un valor valido' };

    if (
      payload.hasOwnProperty('name') &&
      payload.hasOwnProperty('username') &&
      payload.hasOwnProperty('id')
    )
      return new User(payload.name, payload.username, payload.id);
    else
      return {
        error:
          'estas olvidando propiedades necesarias para la creacion del objeto',
      };
  }
}

module.exports = UserView;
