const wrapInArray = <T>(value: T) => {
    return [ value ];
}

const stringArr = wrapInArray<string>("ABC");
const numberArr = wrapInArray<number>(189);
// const booleanArr = wrapInArray(true)

console.log(stringArr)
console.log(numberArr)

stringArr.map((item) => item.toUpperCase());


interface User {
    name: string,
    role: string

}

interface Blog {

    title: string,
    description: string,
    date: string

}


interface ApiResponse<T> {
    data: T,
    success: boolean;
    statusCode: number
}


type userResponse = ApiResponse<User>;
type blogResponse = ApiResponse<Blog>;

const userRes : userResponse = {
    statusCode: 200,
    success: true,
    data: {
        name: "al",
        role: "dfm"
    }
}