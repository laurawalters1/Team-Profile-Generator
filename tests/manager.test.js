const Manager = require("../lib/manager.js");

describe("manager class", () => {
  it("returns the role of manager", () => {
    const manager = new Manager("Laura", "1234", "laura@test.com");
    const expected = "Manager";
    const actual = manager.getRole();
    expect(actual).toEqual(expected);
  });

  it("returns the managers id", () => {
    const manager = new Manager("Laura", "1234", "laura@test.com");
    const expected = "1234";
    const actual = manager.getId();
    expect(actual).toEqual(expected);
  });

  it("returns the managers email address", () => {
    const manager = new Manager("Laura", "1234", "laura@test.com");
    const expected = "laura@test.com";
    const actual = manager.getEmail();
    expect(actual).toEqual(expected);
  });

  it("returns the managers name", () => {
    const manager = new Manager("Laura", "1234", "laura@test.com");
    const expected = "Laura";
    const actual = manager.getName();
    expect(actual).toEqual(expected);
  });
});
