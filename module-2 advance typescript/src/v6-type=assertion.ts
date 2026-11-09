type Status = "pending" | "approved" | "rejected";

const someStatus : string = "pending";

const showStatus = (status: Status) => {
    // console.log(`The status is: ${status}`);
}

showStatus(someStatus as Status)