const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("ABC");
const numberArr = wrapInArray(189);
// const booleanArr = wrapInArray(true)
console.log(stringArr);
console.log(numberArr);
stringArr.map((item) => item.toUpperCase());
const userRes = {
    statusCode: 200,
    success: true,
    data: {
        name: "al",
        role: "dfm"
    }
};
export {};
