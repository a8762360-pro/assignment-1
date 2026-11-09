// export{};
// const greeting = () => {
//     console.log("hellow promraming hero");
// }

// greeting();


type Status = "pending"
const status: Status = "pending";
console.log(status);


type Idendity = string | number;
const id: Idendity = "32"


type role = "user" | "admin";
const userRole: role = "admin"


type Admin = { id: number, role: "admin", privileges: string[] };
type Member = { id: number, role: "member", plan: string[] };

type User = Admin | Member;

const user: User = { id: 10, role: "member", plan: [ "fmd", "fkkd" ] };


type Vehicle = {
    brand: string;
}

type Car = Vehicle & {
    model: string;
}

const car: Car = {
    brand: "toyota",
    model: "corolla"
}



interface IEmployee {
    name: string;
}

interface IEmployee {
    id: number;
}

const employee : IEmployee = {
    name: 'jfk',
    id: 9
}





// types
// types
// types

// any type
let x : any = "hello";
x = 10;
// console.log(x);


// unknown type
let somthing : unknown;
const num: number = 10;

somthing = num
