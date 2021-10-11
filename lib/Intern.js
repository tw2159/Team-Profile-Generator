const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school, role="Intern") {
    super(name, id, email);
    this.role = role;
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Intern;