const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  // Create a new engineer object
  const engineer = new Engineer("Joe", 123, "joe@fakemail.com", "joe_github");

  it('Engineer name set', () => {
    expect(engineer.name).toBe("Joe");
  });
  it('Engineer ID set', () => {
    expect(engineer.id).toBe(123);
  });
  it('Engineer e-mail set', () => {
    expect(engineer.email).toBe("joe@fakemail.com");
  });
  it('Engineer GitHub set', () => {
    expect(engineer.github).toBe("joe_github");
  });
  it('Engineer role set', () => {
    expect(engineer.role).toBe("Engineer");
  });
});
