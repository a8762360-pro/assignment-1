class Employee {
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}


const employee = new Employee("jrjf",89000);
const employee2 = new Employee("fu", 700);

console.log(employee instanceof Employee)
console.log(employee2 instanceof Employee)