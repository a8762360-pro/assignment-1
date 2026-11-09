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

    describe(): string {
        return `${this.name} earns ${this.baseSalary}`
    }
}



class Manager extends Employee {

    constructor(name: string,
        _baseSalary: number,
        public teamMemberCount: number) {
        super(name, _baseSalary)
    }

    describeWork(): string {  
        return `${this.name} manages ${this.teamMemberCount} people`
    }

    describeManager(): string {
        return `${this.name} earns ${this._baseSalary}`
    }
}

const employee = new Employee("jrjf", 8000);
const employee2 = new Employee("fu", 7000);

// employee.baseSalary = -5000
// console.log(employee.salaryWithBonus)
const manager = new Manager("alif", 80000, 10)
console.log(manager.describe())