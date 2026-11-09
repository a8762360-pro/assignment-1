interface User {
    id: string;
    name: string;
    email: string
}


interface optionalUse {
    id?: string,
    name?: string,
    email?: string
}


type PartialUser = Partial<User>


const updateProfile = (id: string, date: PartialUser) => {
    // ok
}

updateProfile("989", { name: "alim" })


// required

interface Config {
    apiKey?: string,
    timeOut?: number
}


const initialized = (config: Required<Config>) => {

}


initialized({ apiKey: "oikdjfkk", timeOut: 3000 })




// pick  ||  attributes optional
interface Product {
    id: number,
    name: string,
    price: number,
    description: string
}


type ProductPreview = Pick<Product, "name" | "description">


const preview: ProductPreview = {
    name: "Abc",
    description: "irurris"
}



// omit
interface Employee {
    id: number,
    name: string,
    salary: number,
    nid: string
}


type PubicEmployee = Omit<Employee, "salary" | "nid">

const directoryEntree: PubicEmployee = {
    id: 40,
    name: "akash",
}



// record 

type Environment = "development" | "staiging" | "production";

// interface IEnvironment {
//     development: string,
//     staiging: string,
//     production: string
// }


const apiUrls : Record<Environment, string> = {
    development: "http://localhost:3000",
    staiging: "http://staiting.api.com" ,
    production: "http://.api.com",
    
}