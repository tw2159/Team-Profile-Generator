const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, role="Engineer") {
    super(name, id, email);
    this.role = role;
    this.github = github;
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;