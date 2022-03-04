const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
  // getSchool()
  getSchool() {
    return this.school;
  }
  // getRole()—overridden to return 'Intern'
  getRole() {
    return "Intern";
  }

  renderCard() {
    return `<div class="card md-col-4 col-10 text-black bg-white custom-card  mb-3" style="max-width: 18rem;">
    <div class="card-header custom-card-head text-white"><h2>${this.name}</h2>
    <div class="d-flex justify-content-between p-2"><h3>${this.role}<h3><i class="fa fa-thin fa-graduation-cap"></i></h3></div></div>

<div class="card-body">
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${this.id}</li>
    <li class="list-group-item">Email:<a href="mailto:${this.email}"> ${this.email}</a></li>
    <li class="list-group-item">School: ${this.school}</li>
  </ul>
</div>
</div>`;
  }
}

module.exports = Intern;
