const User = require('../../app/Models/User');

describe('Unit Tests for User class', () => {
  const user = new User(1, 'carlogilmar', 'Carlo', 'Bio');
  test('Create an User object', () => {
    expect(user.id).toBe(1);
    expect(user.username).toBe('carlogilmar');
    expect(user.name).toBe('Carlo');
    expect(user.bio).toBe('Bio');
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdate).not.toBeUndefined();
  });

  test('Add getters', () => {
    expect(user.id).toBe(1);
    expect(user.getUsername).toBe('carlogilmar');
    expect(user.name).toBe('Carlo');
    expect(user.getBio).toBe('Bio');
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });

  test('Add setters', () => {
    user.setUsername = 'Josue';
    expect(user.username).toBe('Josue');

    user.setBio = 'New Bio';
    expect(user.bio).toBe('New Bio');
  });
});
