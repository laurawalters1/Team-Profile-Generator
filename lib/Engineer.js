const Employee = require("./Employee.js");
const engineerCard = require("./engineerCard.js");

class Engineer extends Employee {
  //     github—GitHub username
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  // getGithub()
  getGithub() {
    return this.github;
  }
  // getRole()—overridden to return 'Engineer'
  getRole() {
    return "Engineer";
  }

  renderCard() {
    return `<div class="card text-black bg-white custom-card  mb-3" style="max-width: 18rem;">
    <div class="card-header custom-card-head text-white"><h2>${this.name}</h2>
    <h3>${this.role}</h3></div>
    <div class="card-body">
      
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${this.email}"> ${this.email}</a></li>
        <li class="list-group-item">Github:<a href="https://github.com/${this.github}"> ${this.github}</a></li>
      </ul>
    </div>
    </div>`;
  }
}

module.exports = Engineer;
