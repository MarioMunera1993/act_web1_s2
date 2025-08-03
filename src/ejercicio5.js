dia = 'viernes';

switch (dia) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log("Laborable")
        break;
    case 'sabado':
    case 'domingo':
        console.log("Fin de semana")
        break;
    default:
        console.log("No es un dia de la semana")
        break;
}