var id = 1;
function x(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    else {
        return id + 1;
    }
}
console.log(x(10));
