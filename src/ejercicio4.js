//Calculadora basica con switch

let numero1 = 10;
let numero2 = 20;

let operador = "*"

if (numero2 === 0 && operador === "/") {
    console.log("Indeterminado")
} else {
    switch (operador) {
    case "*":
        let multiplicacion = numero1 * numero2
        console.log("El resultado de la Multiplicacion es: " + multiplicacion)
        break;
    case "+":
        let suma = numero1 + numero2
        console.log("El resultado de la Suma es: " + suma)
        break;
    case "-":
        let resta = numero1 - numero2
        console.log("El resultado de la Resta es: " + resta)
        break;
    case "/":
        let divicion = numero1 / numero2
        console.log("El resultado de la Divicion es: " + divicion)
        break;
    default:
        console.log("Indeterminado")
        break;
}
}
