export class Employee {
  constructor(public name: string, public salary: number) {}
}

export class Department {
  constructor(public employees: Employee[]) {}

  works(employee: Employee): boolean {
    return this.employees.indexOf(employee) > -1;
  }
}
