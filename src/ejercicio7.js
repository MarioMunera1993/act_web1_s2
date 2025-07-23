//Descuento por volumen

let precioUnitario = 500;
let cantidad = 9;
let precioFinal;

if (cantidad < 10) {
    let precioParcial = cantidad * precioUnitario;
    let descuento = 0
    precioFinal = precioParcial - descuento
    console.log("El precio bruto de se pedido es: " + precioParcial);
    console.log("Tiene un descuento de : " + descuento + " Pesos");
    console.log("El Total a pagar de su pedido es: " + precioFinal);
} 
else if(cantidad >= 10 && cantidad < 50) {
    let precioParcial = cantidad * precioUnitario;
    let descuento = (precioParcial * 10)/100 
    precioFinal = precioParcial - descuento
    console.log("El precio bruto de se pedido es: " + precioParcial);
    console.log("Tiene un descuento de : " + descuento + " Pesos");
    console.log("El Total a pagar de su pedido es: " + precioFinal);
}
else if(cantidad >= 50) {
    let precioParcial = cantidad * precioUnitario;
    let descuento = (precioParcial * 20)/100 
    precioFinal = precioParcial - descuento
    console.log("El precio bruto de se pedido es: " + precioParcial);
    console.log("Tiene un descuento de : " + descuento + " Pesos");
    console.log("El Total a pagar de su pedido es: " + precioFinal);
}