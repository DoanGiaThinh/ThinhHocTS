// lessson 36
class Person {
    private _age: number;
    public firstName: string;
    public lastName: string;

    constructor(age: number, firstName: string, lastName: string) {
        this._age = age;
        this.firstName = firstName;
        this.lastName = lastName;

    }
    //getter
    getAge() {
        return this._age;
    }
    set currentAge(age2: number) {
        if (age2 < 0 && age2 > 120) {
            throw Error("Invalid age")
        }
        this._age = age2;
    }
}

let person = new Person(23, "Thinh", "Doan");
person.currentAge = 25;
console.log("Check Age: ", person.getAge()) // getter
// person.age = 26; //setter