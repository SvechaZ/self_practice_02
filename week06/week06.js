function multiplie(n) {
    return function (x) {
        return x * n
    }
}
const double = multiplie(2);

console.log(double(5)); // 10

const triple = multiplie(3);
console.log(triple(5)); // 15
//================================================
