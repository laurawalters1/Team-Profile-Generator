class Intern extends Employee {
  constructor(name, id, email, school) {
    super.constructor(name, id, email);
    this.school = school;
  }
  // getSchool()
  getSchool() {
    return this.school;
  }
  // getRole()—overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
}
