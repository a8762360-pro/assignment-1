class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    get salaryWithBonus() {
        return this._baseSalary + 500;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("the value is les then 0");
        }
        this._baseSalary = newSalary;
    }
}
const employee = new Employee("jrjf", 8000);
const employee2 = new Employee("fu", 7000);
// employee.baseSalary = -5000
console.log(employee.salaryWithBonus);
export {};
