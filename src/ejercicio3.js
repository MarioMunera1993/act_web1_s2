let edad = 65

if (edad > 0 && edad <= 12 ) {
    console.log("Es un Niño(a)");
    
}
else if(edad >= 13 && edad <= 17){
    console.log("Es un Adolecente(a)");
}
else if(edad >= 18 && edad <= 64){
    console.log("Es un Adulto(a)");
}
else if(edad >= 65 ){
    console.log("Es un Anciano(a)");
}
else{
    console.log("Edad fuera de rango");
}