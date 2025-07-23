//Transporte con tarifa reducida

let edad = 17;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;

if (edad < 18) {
    descuento = (tarifaBase * 20)/100
    tarifaFinal = tarifaBase - descuento
    console.log("Por ser menor de edad Tienes un descuento en el pasaje de: " + descuento)
    console.log("El total a pagar es: " + tarifaFinal)
} else if(edad >= 65){
    descuento = (tarifaBase * 40)/100
    tarifaFinal = tarifaBase - descuento
    console.log("Por ser Adulto Mayor Tienes un descuento en el pasaje de: " + descuento)
    console.log("El total a pagar es: " + tarifaFinal)
}
