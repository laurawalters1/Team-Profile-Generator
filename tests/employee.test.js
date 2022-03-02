const Employee = require("../lib/Employee.js");

describe("Employee class", () => {
  it("returns the role of employee", () => {
    const employee = new Employee("Laura", "1234", "laura@test.com");
    const expected = "Employee";
    const actual = employee.getRole();
    expect(actual).toEqual(expected);
  });

  it("returns the employees id", () => {
    const employee = new Employee("Laura", "1234", "laura@test.com");
    const expected = "1234";
    const actual = employee.getId();
    expect(actual).toEqual(expected);
  });

  it("returns the employees email address", () => {
    const employee = new Employee("Laura", "1234", "laura@test.com");
    const expected = "laura@test.com";
    const actual = employee.getEmail();
    expect(actual).toEqual(expected);
  });

  it("returns the employees name", () => {
    const employee = new Employee("Laura", "1234", "laura@test.com");
    const expected = "Laura";
    const actual = employee.getName();
    expect(actual).toEqual(expected);
  });
});
