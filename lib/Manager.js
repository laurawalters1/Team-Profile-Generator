const Employee = require("Employee.js");

class Manager extends Employee {
  // officeNumber
  constructor(officeNumber, name, id, email) {
    super.construct(name, id, email);
    this.officeNumber = officeNumber;
  }

  // getRole()—overridden to return 'Manager'
  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
