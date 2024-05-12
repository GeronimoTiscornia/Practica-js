// ejrcicio 1 //
function rectangulo(altura, ancho) {
    return altura * ancho;
}

let area = rectangulo(5, 10);
console.log(area)

//ejercicio 2//
function triangulo(base, altura) {
    return (base * altura) / 2;
}

let area1 = triangulo(10, 20)
console.log(area1)

//Ejercicio 3//
function largoDelArray(hola, como, va) {
    return largoDelArray.length;
}
let largo = largoDelArray()
console.log(largo)

//Ejercicio 4//
function cantidadDeLetras(hola) {
    let stringLetras = "hola"
    return stringLetras.length;
}
let letras = cantidadDeLetras()
console.log(letras)

//Ejercicio 5//
function miFuncion(numero) {
    // Hacer algo con el número, por ejemplo, imprimirlo
    console.log(numero / 1020);
}

// Llamando a la función con un número como argumento
miFuncion(2040); // Esto imprimirá: El número es

//Ejercicio 6//
function precioFinal(numero) {
    console.log(numero * 1.21);
}
precioFinal(100)

//Ejercicio 7//
function mitad(numero) {
    console.log(numero / 2);
}
mitad(4)

//Ejercicio 8//
function diaSegunNumero(dias, numero) {
    // Verificar si el número está dentro del rango válido
    if (numero >= 1 && numero <= dias.length) {
        // Restar 1 al número para ajustarlo al índice del array
        return dias[numero - 1];
    } else {
        return "Número de día fuera de rango";
    }
}

// Ejemplo de uso:
var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
console.log(diaSegunNumero(diasSemana, 3)); // Devuelve "Miércoles"
console.log(diaSegunNumero(diasSemana, 7)); // Devuelve "Domingo"
console.log(diaSegunNumero(diasSemana, 9)); // Devuelve "Número de día fuera de rango"