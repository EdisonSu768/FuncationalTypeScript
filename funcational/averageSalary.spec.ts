import { averageSalary } from "./averageSalary";
import { Department, Employee } from "./model";

describe("Functional average salary", () => {
  const empls = [
    new Employee("Jim", 100),
    new Employee("John", 200),
    new Employee("Liz", 120),
    new Employee("Penny", 30)
  ];

  const sales = new Department([empls[0], empls[1]]);

  it("calculates the average salary", () => {
    expect(
      averageSalary(empls, [e => e.salary > 50, e => sales.works(e)])
    ).toEqual(150);
    expect(averageSalary(empls, [e => e.salary > 50])).toEqual(140);
  });
});
