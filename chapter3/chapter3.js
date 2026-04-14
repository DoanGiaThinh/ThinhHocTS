let sum4 = (x, y, z) => { // z: optional params, lúc có lúc không
    console.log("check z = ", z)
    if (z) {
        return x + y + z;
    }
    return x + y;
}
console.log("check sum4: ", sum4(1, 2)) //NaN: // null// undefined