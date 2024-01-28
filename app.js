// Variables en JS
let numeroSecreto = 6;

// Numero que el usuario ingrese en el prompt
let numeroUsuario = prompt("Ingresa un numero entre 1 y 10:");

// Imprime en la consola el numero que ha ingresado el usuario
console.log(numeroUsuario);

// Bloque de codigo condicional
if (numeroUsuario == numeroSecreto) {
    // La condicion fue verdadera
    alert('Acertaste el numero');
} else {
    // La condicion no se cumplio
    alert('No acertaste el numero');
}