class Employee {

    constructor(
        public name: string,
        protected _baseSalary: number,

    ) { }

    get baseSalary(): number {
        return this._baseSalary
    }

    get salaryWithBonus(): number {
        return this._baseSalary + 500;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("the value is les then 0")
        }

    }

    calculatoPay(textRate: number) {
        return this.baseSalary - this.baseSalary * textRate;
    }
}

class Manager extends Employee{
    calculatoPay(): number {
        return this.baseSalary + 10000;
    }
}

const employee = new Employee("alom", 90000);
const manager = new Manager("niloy", 190000);

console.log(employee.calculatoPay(0.3))
console.log(manager.calculatoPay())