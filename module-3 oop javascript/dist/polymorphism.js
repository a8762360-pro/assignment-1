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
    }
    calculatoPay(textRate) {
        return this.baseSalary - this.baseSalary * textRate;
    }
}
class Manager extends Employee {
    calculatoPay() {
        return this.baseSalary + 10000;
    }
}
const employee = new Employee("alom", 90000);
const manager = new Manager("niloy", 190000);
console.log(employee.calculatoPay(0.3));
console.log(manager.calculatoPay());
export {};
