function multiplyValue(value: number, multiplier?: number) {
    return value * (multiplier ?? 2);
}




function processInput(value: string | number | boolean) {
    if (typeof (value) === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof (value) === "number") {
        return value * 10;
    }

    else {
        return value ? "Active" : "Inactive"
    }
}






function formatCoordinate(coordinate: readonly [ number, number, string ]): string {
    const latitude = coordinate[ 0 ];
    const longitude = coordinate[ 1 ];
    const locationName = coordinate[ 2 ];

    return `Location: ${locationName} (${latitude} ${longitude}) `
}





function concatenateArrays<T>(...arrays: T[][]) {
    return arrays.flat();
}





interface Course {
    title: string,
    students: number,
    isPublished: boolean,
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter(course => course.isPublished === true && course.students >= minStudents);
}

const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];






function pluckValues<T, K extends keyof T>(items: T[], key: K): T[ K ][] {
    return items.map(items => items[ key ]);
}


const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];






class Employee {
    constructor(
        protected name: string,
        private baseSalary: number,
    ) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

     getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary : number,
        private department : string,
    ){
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo (): string {
        return `Manager of ${this.department}: ${this.name}`
    }
}

const manager = new Manager("Alice", 50000, "Engineering");







function validateAgeAsync (age: number): Promise<string>{
    return new Promise((resolve, reject)=>{
        if(age>= 18){
            setTimeout(()=>{
                resolve ("Access Granted");
            },1000)
        }
        else{
            reject (new Error("Access Denied: Must be 18 or older"));
        }
    })
}






// 10
