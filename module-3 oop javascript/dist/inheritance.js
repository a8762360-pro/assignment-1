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
    describe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
    describeManager() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
const employee = new Employee("jrjf", 8000);
const employee2 = new Employee("fu", 7000);
// employee.baseSalary = -5000
// console.log(employee.salaryWithBonus)
const manager = new Manager("alif", 80000, 10);
console.log(manager.describe());
export {};
