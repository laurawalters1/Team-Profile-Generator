const Employee = require("./Employee.js");
function writeManagerCard() {
  require("./managerCard.js");
}

class Manager extends Employee {
  // officeNumber
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  // getRole()—overridden to return 'Manager'
  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  renderCard() {
    return `<div class="card text-black bg-white custom-card  mb-3" style="max-width: 18rem;">
    <div class="card-header custom-card-head text-white"><h2>${this.name}</h2>
    <h3>${this.role}</h3></div>
    <div class="card-body">

      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">Email: ${this.email}</li>
        <li class="list-group-item">Office Number: ${this.officeNumber}</li>
      </ul>
    </div>
    </div>`;
  }
}

module.exports = Manager;
