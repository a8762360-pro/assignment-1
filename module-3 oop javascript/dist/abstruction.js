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
class Manager extends Employee {
    caculatePay() {
        return this._baseSalary + 500;
    }
}
export {};
