const Intern = require("../lib/intern.js");

describe("intern class", () => {
  it("returns the role of intern", () => {
    const intern = new Intern("Laura", "1234", "laura@test.com");
    const expected = "Intern";
    const actual = intern.getRole();
    expect(actual).toEqual(expected);
  });

  it("returns the interns id", () => {
    const intern = new Intern("Laura", "1234", "laura@test.com");
    const expected = "1234";
    const actual = intern.getId();
    expect(actual).toEqual(expected);
  });

  it("returns the interns email address", () => {
    const intern = new Intern("Laura", "1234", "laura@test.com");
    const expected = "laura@test.com";
    const actual = intern.getEmail();
    expect(actual).toEqual(expected);
  });

  it("returns the interns name", () => {
    const intern = new Intern("Laura", "1234", "laura@test.com");
    const expected = "Laura";
    const actual = intern.getName();
    expect(actual).toEqual(expected);
  });
});
