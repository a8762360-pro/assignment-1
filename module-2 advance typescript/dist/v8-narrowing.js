// some caveat of type guard
const printAll = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log("");
};
printAll("okdd");
//  Equality 
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
// in operator
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
// instance of check
const date = new Date();
const err = new Error("somthing went wrong");
console.log(date instanceof Date);
console.log(err instanceof Error);
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
showDate("12-3-2026");
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
