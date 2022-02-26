class Engineer extends Employee {
  //     github—GitHub username
  constructor(name, id, email, github) {
    super.constructor(name, id, email);
    this.github = github;
  }

  // getGithub()
  getGithub() {
    return this.github;
  }
  // getRole()—overridden to return 'Engineer'
  getRole() {
    return "Engineer";
  }
}
