const Intern = require("../lib/Intern");

describe("Intern class", () => {
  // Create a new intern object
  const intern = new Intern("Joe", 123, "joe@fakemail.com", "NYU");

  it('Intern name set', () => {
    expect(intern.name).toBe("Joe");
  });
  it('Intern ID set', () => {
    expect(intern.id).toBe(123);
  });
  it('Intern e-mail set', () => {
    expect(intern.email).toBe("joe@fakemail.com");
  });
  it('Intern school set', () => {
    expect(intern.school).toBe("NYU");
  });
  it('Intern role set', () => {
    expect(intern.role).toBe("Intern");
  });
});
