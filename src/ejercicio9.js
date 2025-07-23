//Conversor de notas musicales a MIDI


nota = "DO";

switch (nota) {
    case "DO":
        console.log("el numero MIDI de la nota DO es: "+60)
        break;
    case "RE":
        console.log("el numero MIDI de la nota RE es: "+62)
        break;
    case "MI":
        console.log("el numero MIDI de la nota MI es: "+64)
        break;
    case "FA":
        console.log("el numero MIDI de la nota FA es: "+65)
        break;
    case "SOL":
        console.log("el numero MIDI de la nota SOL es: "+67)
        break;
    case "LA":
        console.log("el numero MIDI de la nota LA es: "+69)
        break;
    case "Si":
        console.log("el numero MIDI de la nota SI es: "+71)
        break;
    default:
        console.log("Nota Desconocida")
        break;
}