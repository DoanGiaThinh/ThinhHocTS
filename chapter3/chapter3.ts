// lesson 40
interface IPerson {
    firstName: string;
    lastName: string;
    address?: string;
}

function getFullName(
    person: IPerson
) {
    return `${person.firstName} ${person.lastName}`
}

let person = {
    firstName: "Đoàn",
    lastName: "Thịnh",
    address: "SÓC TRĂNG"
};

console.log("Check person: ", getFullName(person))