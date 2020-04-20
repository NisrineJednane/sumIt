function addIt(x, y) {
    if (typeof x !== "number") {
        return undefined;
    }
 const sumIt = y => 
    typeof y === "number" ? x + y : undefined;
    return typeof y === undefined ? y => sumIt(y) : sumIt(y);
}
