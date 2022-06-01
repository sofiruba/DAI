const pi = 3.14;
let suma = (num1, num2) => {
   return num1 + num2;
}

let resta = (num1, num2) => {
    return num1 - num2;
}
function promedio (num1, num2) {
    return suma(num1, num2) / 2;
}
function diametro (num1, pi) {
    return 2*num1*pi;
}

export {suma, resta, promedio, diametro};