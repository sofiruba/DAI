const pi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;
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