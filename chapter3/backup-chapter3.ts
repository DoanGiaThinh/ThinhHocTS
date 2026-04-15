// //lesson 20
// let age: number = 0;

// if (age) { // number > 0 || string "ádasdasdasd"
//     console.log("Welcome to the university")
// }
// else { //number = 0 || string " "
//     console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
// }

// let discount: number;
// let itemCount = 11;

// if (itemCount > 0 && itemCount < 5) {
//     discount = 5;
// }
// else if (itemCount >= 5 && itemCount < 10) {
//     discount = 10;
// }
// else {
//     discount = 15;
// }

// console.log("check discount", discount)
// //lesson21
// let age1: number = 25

// switch (age1) {
//     case 25:// mô hình tháp nước
//     case 24:
//         console.log("Đã đi làm")
//         break;
//     case 20:
//         console.log("is the student")
//         break;
//     default:
//         console.log("run default")
// }
//lesson 22

// let count: number = 10;

// for (let i = 0; i < count; i++) {
//     console.log("Check count i", i);
// }
// // không nên viết như ở dưới
// let i1: number = 0;
// for (; i1 < count; i1++) {
//     console.log("Check count i", i1);
// }

// for (let i2 = 0; ; i2++) {
//     console.log("Check count i", i1);
//     if (i2 > 9) break;
// }
//lesson 23
// let count: number = 0;

// while (count < 5) {
//     console.log("Count ", count);
//     count++;
// }

// let count1: number = 0;

// while (count1 < 5) {
//     console.log("Count1 ", count1);
//     if (count1 % 2 === 0) break;
//     count1++;
// }

// lesson 24
// let counter: number = 6;

// do {
//     console.log("Count do while", counter);
//     if (counter % 2 === 0) break;
//     counter++
// } while (counter < 5);
// lesson 25
// let products = [
//     { name: "Áo", price: 200 },
//     { name: "Quần", price: 900 },
//     { name: "Điện thoại", price: 1200 },
// ]

// for (let i = 0; i < products.length; i++) {
//     if (products[i].price === 900) break;
//     console.log("Product: ", products[i])
// }

// console.log(">>>>>>> Products <<<<<<<", products)
// lesson 26

// for (let index = 0; index < 9; index++) {
//     if (index % 2 === 0) continue;
//     console.log("check index", index);
// }
// lesson 27

// function sum(a: number, b: number) {
//     return a + b;
// }

// const sum2 = (a: number, b: number) => {
//     return a + b;
// }

// console.log("check sum:", sum2(3, 9));
// lesson 28
// const sum = (a: number, b: number): number => { // cách 1
//     return a + b;
// }

// function sum2(a: number, b: number): number { // cách 2
//     return a + b;
// }

// console.log("check sum:", sum(1, 2))

// let a: number = 10;

// a = sum(1, 10)

// lesson 29
// const sum = (x: number, y: number, z?: number) => { //z?: number : optional params
//     if (z) {
//         return x + y + z;
//     }
//     return x + y;
// }

// console.log("check sum4: ", sum(1, 2), sum(1, 2, 3))
// lesson 30
// let sum1 = (x: number, y: number, z = false) => { //default params // không cần ép kiểu ở ts
//     if (z === false) {
//         return x + y
//     }

//     if (z)
//         return x - y;

// }
// console.log("check sum1: ", sum1(1, 4), sum1(1, 2, true))
// lesson 31
// function getTotal(...numbers: number[]): number {
//     let total = 0;
//     numbers.forEach((num) => { total += num });
//     // [10,20].forEach((num) => { total += num });
//     return total;
// }

// // console.log(getTotal())
// // console.log(getTotal(10, 20))

// function getMultiply(n: number, ...m: number[]) {
//     return m.map((x) => n * x);
// }
// // const test31 = getMultiply(11, 1, 2, 3, 4, 5)

// // console.log("check test 31: ", test31)

// function Greet(greeting: string, ...names: string[]) {
//     return greeting + " " + names.join(", ") + "!"
// }

// console.log(Greet("Hello", "Thịnh", "OKE"))
// lesson 32
// //overloading function // là ghi đè lên thằng trước
// function addNew(a: number, b: number): number;

// function addNew(a: string, b: string): string;

// function addNew(a: any, b: any) {
//     return a + b;
// }

// console.log("Check addNew: ", addNew("", "string"))