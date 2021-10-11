const Employee = require("../lib/Employee");

describe("Employee class", () => {
  // Create a new employee object
  const employee = new Employee("Joe", 123, "joe@fakemail.com");

  it('Employee name set', () => {
    expect(employee.name).toBe("Joe");
  });
  it('Employee ID set', () => {
    expect(employee.id).toBe(123);
  });
  it('Employee e-mail set', () => {
    expect(employee.email).toBe("joe@fakemail.com");
  });
  it('Employee role set', () => {
    expect(employee.role).toBe("Employee");
  });
});
