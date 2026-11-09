let x = null;
// console.log(typeof x); 


 const print = (value: number | string) => {
    if (typeof value === "string"){
        return value.toUpperCase();
    }
    else if (typeof value === "number"){
        return value;
    }
    else {
        return value;
    }
 }




 type User = {
    name: string;
    address?: {
        street : string;
    };
 } | null


 const user : User = {
    name: "alomgir",
    address: {
        street: "jfkdjcka"
    }
 }


 const showAddress = (user: User) => {
    if(user && user.address){
        console.log(user.address.street);
        return;
    }
    throw new Error ("user not found")
 }



