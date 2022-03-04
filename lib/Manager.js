const Employee = require("./Employee.js");

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
    return `<div class="card md-col-4 col-10 text-black bg-white custom-card  mb-3" style="max-width: 18rem;">
    <div class="card-header custom-card-head text-white"><h2>${this.name}</h2>
    <div class="d-flex justify-content-between p-2"><h3>${this.role}<h3><i class="fa fa-thin fa-briefcase"></i></h3></div></div>
    <div class="card-body">

      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${this.email}"> ${this.email}</a></li>
        <li class="list-group-item">Office Number: ${this.officeNumber}</li>
      </ul>
    </div>
    </div>`;
  }
}

module.exports = Manager;
