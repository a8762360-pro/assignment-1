
// some caveat of type guard
const printAll = (x: string | string[] | null) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str)
            }
            return;
        }
        console.log(x);
        return
    }
    console.log("");
};



printAll("okdd")



//  Equality 
const compare = (x: number | string, y: number | boolean) => {
    if (x === y) {
        console.log(x, y)
    }
}


type Bird = { fly: () => void }
type Fish = { swim: () => void }

// in operator
const move = (animal: Bird | Fish) => {
    if("fly" in animal){
        animal.fly();
        return;
    }
    animal.swim();
}

// instance of check
const date = new Date();

const err = new Error("somthing went wrong")

console.log(date instanceof Date)
console.log(err instanceof Error)


const showDate = (x: Date | string) => {
    if(x instanceof Date){
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
}


showDate("12-3-2026")


// discriminated union
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}


const getArea = (shape: Circle | Square) => {
     if(shape.kind === "circle"){
        console.log(shape.radius)
     }else{
        console.log(shape.sideLength)
     }
}