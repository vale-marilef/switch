/*Realice un programa que permita realizar el cálculo de las cuatro operaciones matemáticas
de acuerdo a la opción elegida por el usuario*/

//var num1=parseInt(prompt(`Ingresar un número:`,0))
//var num2=parseInt(prompt(`Ingresar otro número: `,0))
var opcion = parseInt(prompt(` 1- Suma\n 2- Resta\n 3- Multiplicación\n 4- División\n`))

switch(opcion){
    case 1: alert('la opción que ha elegido es SUMA')
               break;
            // case 1: alert(`la suma es: ${}`)     
    case 2: alert(`La opción que ha elegido es RESTA`)
               break;
            //case 2: alert(`La resta es: ${}`)
         
    case 3: alert(`La opción que ha elegido es MULTIPLICACIÓN`)
            //case 3: alert(`La multiplicación es: ${}`)
               break;
    case 4: alert(`La opción que ha elegido es DIVISIÓN`)
            //case 4: alert(`La división es: ${}`)
               break;
    default : alert(`incorrecto. No disponemos de la OPCIÓN elegida`)
            //default : alert(`incorrecto. No disponemos de ${}`)
}

