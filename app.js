// Variables en JS
let numeroSecreto = 6;
// Imprime en la consola el numero que ha ingresado el usuario
// console.log(numeroUsuario);

let numeroUsuario = 0;

// Mientras que numero de usuario y numero secreto no sean iguales,
// repite este bloque de codigo
while(numeroUsuario != numeroSecreto){
    // Numero que el usuario ingrese en el prompt
    let numeroUsuario = prompt("Ingresa un numero entre 1 y 10:");
        // Bloque de codigo condicional
    if (numeroUsuario == numeroSecreto) {
        // La condicion fue verdadera
        // alert('Acertaste el numero, el numero correcto era: ' + numeroSecreto);
        alert('Acertaste el numero, el numero correcto era: ' + numeroUsuario);
    } else {
        // La condicion no se cumplio
        alert('No acertaste el numero');
        // Agregado de un condicional anidado
        if (numeroUsuario > numeroSecreto){
            // Si el numero secreto es menor, imprime este mensaje
            alert("El numero secreto es menor");
        } else {
            // Si el numero secreto es mayor, imprime este mensaje
            alert("El numero secreto es mayor");
        }
    }
}