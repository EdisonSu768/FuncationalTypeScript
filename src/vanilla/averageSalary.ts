import { Department, Employee } from "../model";

export function averageSalary(
  employees: Employee[],
  minSalary: number,
  department?: Department
): number {
  let total = 0;
  let count = 0;

  employees.forEach(e => {
    if (
      e.salary >= minSalary &&
      (department === undefined || department.works(e))
    ) {
      total += e.salary;
      count += 1;
    }
  });

  return count === 0 ? 0 : total / count;
}
