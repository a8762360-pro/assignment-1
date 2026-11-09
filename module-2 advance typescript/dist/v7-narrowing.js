let x = null;
// console.log(typeof x); 
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return value;
    }
};
const user = {
    name: "alomgir",
    address: {
        street: "jfkdjcka"
    }
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("user not found");
};
export {};
