const Manager = require("../lib/Manager");

describe("Manager class", () => {
  // Create a new manager object
  const manager = new Manager("Joe", 123, "joe@fakemail.com", 12345);

  it('Manager name set', () => {
    expect(manager.name).toBe("Joe");
  });
  it('Manager ID set', () => {
    expect(manager.id).toBe(123);
  });
  it('Manager e-mail set', () => {
    expect(manager.email).toBe("joe@fakemail.com");
  });
  it('Manager office number set', () => {
    expect(manager.officeNumber).toBe(12345);
  });
  it('Manager role set', () => {
    expect(manager.role).toBe("Manager");
  });
});
