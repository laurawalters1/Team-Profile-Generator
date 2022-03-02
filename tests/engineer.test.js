const Engineer = require("../lib/engineer.js");

describe("engineer class", () => {
  it("returns the role of engineer", () => {
    const engineer = new Engineer("Laura", "1234", "laura@test.com");
    const expected = "Engineer";
    const actual = engineer.getRole();
    expect(actual).toEqual(expected);
  });

  it("returns the engineers id", () => {
    const engineer = new Engineer("Laura", "1234", "laura@test.com");
    const expected = "1234";
    const actual = engineer.getId();
    expect(actual).toEqual(expected);
  });

  it("returns the engineers email address", () => {
    const engineer = new Engineer("Laura", "1234", "laura@test.com");
    const expected = "laura@test.com";
    const actual = engineer.getEmail();
    expect(actual).toEqual(expected);
  });

  it("returns the engineers name", () => {
    const engineer = new Engineer("Laura", "1234", "laura@test.com");
    const expected = "Laura";
    const actual = engineer.getName();
    expect(actual).toEqual(expected);
  });
});
