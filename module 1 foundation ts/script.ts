let myString: string = "g";
let myNumber: number;
let myBoolean: boolean;
let mySymble: symbol;
let myBidint: bigint;

const addTwo = (a: number, b: number): number => {
  return a + b;
};

console.log(addTwo(80, 20));

// let name = "aloffmgir is a good person"

// array and tuple readonly modifier
// const arr : string [] = ["alomgir"]
// const array : Array<string> = ["okdjsk"]
// arr.push("aloffmgir")
// console.log(array)

// tupple
// const dhaka : readonly [number, number] = [10, 20]
// dhaka.push(30)

// optional default and rest parameter
const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
};

console.log(concatName("aloffmgir", "islam"));

// object
const user: {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
} = {
    name: "aloffmgir",
    age: 20,
    isActive: true,
    action: () => {
      console.log("action");
    },
    badges: ["admin", "moderator"],
}
