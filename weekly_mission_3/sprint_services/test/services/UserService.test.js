const UserService = require('./../../app/services/UserService');

describe('Test for UserService', () => {
  const user = UserService.create(1, 'josuerojas', 'Josue');

  test('1. Create a new user using the UserServices', () => {
    expect(user.username).toBe('josuerojas');
    expect(user.name).toBe('Josue');
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });

  test('2. Get all user data in a list', () => {
    const userInfoInList = UserService.getInfo(user);
    expect(userInfoInList[0]).toBe(1);
    expect(userInfoInList[1]).toBe('josuerojas');
    expect(userInfoInList[2]).toBe('Josue');
    expect(userInfoInList[3]).toBe('Sin bio');
  });

  test('3. Update username', () => {
    UserService.updateUsername(user, 'jarp');
    expect(user.username).toBe('jarp');
  });

  test('4. Given a list of users give me the list of usernames', () => {
    const user2 = UserService.create(2, 'carlogilmar', 'Carlo');
    const user3 = UserService.create(3, 'juanpablo', 'Juan P');
    const usersNames = UserService.getAllUsernames([user, user2, user3]);
    expect(usersNames).toContain('jarp');
    expect(usersNames).toContain('carlogilmar');
    expect(usersNames).toContain('juanpablo');
  });
});
