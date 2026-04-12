function addNumberOfString(a: string | number, b: string | number) { // cu phap union string | number | ....
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw Error("Mày vỡn t hả mậy!")
}

console.log("check a b: ", addNumberOfString(3, "ă đù"))