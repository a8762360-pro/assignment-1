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
        this._baseSalary =  newSalary

    }
  

    // abstract caculatePay(): number;
}

class Manager extends Employee {
   caculatePay() {
       return this._baseSalary + 500; 
   }
}