import { Department, Employee } from "../model";

import { averageSalary } from "./averageSalary";

describe("Vanilla average salary", () => {
  const empls = [
    new Employee("Jim", 100),
    new Employee("John", 200),
    new Employee("Liz", 120),
    new Employee("Penny", 30)
  ];

  const sales = new Department([empls[0], empls[1]]);

  it("calculates the average salary", () => {
    expect(averageSalary(empls, 50, sales)).toEqual(150);
    expect(averageSalary(empls, 50)).toEqual(140);
  });
});
